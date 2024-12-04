import { db } from "@vercel/postgres";
const client = await db.connect();

async function createTables() {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		await client.sql`
            CREATE TABLE IF NOT EXISTS Users (
                UserID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                Username VARCHAR(50) UNIQUE NOT NULL,
                Email VARCHAR(100) UNIQUE NOT NULL,
                Password VARCHAR(255) NOT NULL,
                Role VARCHAR(15) CHECK (Role IN ('Seller', 'Buyer')) NOT NUll
            );

            CREATE TABLE IF NOT EXISTS Categories (
                CategoryID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                CategoryName VARCHAR(50) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS Products (
                ProductID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                Name VARCHAR(100) NOT NULL,
                Description TEXT,
                Price DECIMAL(10,2) NOT NULL,
                SellerID UUID,
                CategoryID UUID,
                FOREIGN KEY (SellerID) REFERENCES Users(UserID),
                FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
            );

            CREATE TABLE IF NOT EXISTS ProductImages (
                ImageID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                ProductID UUID,
                ImageBase64 TEXT,
                FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
            );

            CREATE TABLE IF NOT EXISTS Reviews (
                ReviewID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                Rating SMALLINT NOT NULL CHECK (Rating BETWEEN 0 AND 5),
                Comment TEXT,
                UserID UUID,
                ProductID UUID,
                FOREIGN KEY (UserID) REFERENCES Users(UserID),
                FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
            );
    `;
	} catch (error) {
		console.error("Error creating tables:", error);
	} finally {
		await client.release();
	}
}

export async function GET() {
	try {
		await client.sql`BEGIN`;
		await createTables();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database created successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}
