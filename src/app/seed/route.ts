import { db } from "@vercel/postgres";
const client = await db.connect();
import {
	usersData,
	categoriesData,
	productsData,
	productImagesData,
} from "../../mock/data";
import bcrypt from "bcrypt";

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
	}
}

async function insertData() {
	try {
		// Insert Users
		// await Promise.all(
		// 	usersData.map(async (user) => {
		// 		const hashedPassword = await bcrypt.hash(user.password, 10);
		// 		return client.sql`
		// 		INSERT INTO users (Username, Email, Password, Role)
		// 		VALUES (${user.username}, ${user.email}, ${hashedPassword}, ${user.role})
		// 		ON CONFLICT (username) DO NOTHING;`;
		// 	})
		// );

		// Insert Categories
		// const categoriesPromises: unknown[] = [];
		// categoriesData.forEach((categoryData) => {
		// 	const categoryPromise = client.sql`
		//     INSERT INTO Categories (CategoryName)
		//     VALUES (${categoryData.CategoryName})`;
		// 	categoriesPromises.push(categoryPromise);
		// });
		// await Promise.all(categoriesPromises);

		//Insert Products
		// for (const productData of productsData) {
		// 	await client.sql`
		//     INSERT INTO Products (Name, Description, Price, SellerID, CategoryID)
		//     VALUES (${productData.Name}, ${productData.Description}, ${productData.Price}, ${productData.SellerID}, ${productData.CategoryID})
		//   `;
		// }

		// Insert ProductImages
		for (const productImage of productImagesData) {
			await client.sql`
		    INSERT INTO ProductImages (ProductID, ImageBase64)
		    VALUES (${productImage.ProductID}, ${productImage.ImageBase64})
		  `;
		}

		// Insert Reviews
		// for the reviews.
		//todo: not working
		const sampleReviews = [
			{
				Rating: 5,
				Comment: "Excellent product!",
				UserID: "usersData[1].UserID", // Referencing the second user (jane_smith)
				ProductID: 1, // Referencing the first product (Laptop)
			},
			{
				Rating: 4,
				Comment: "Good quality.",
				//UserID: usersData[0].UserID, // Referencing the first user (john_doe)
				//ProductID: productsData[1].ProductID, // Referencing the second product (T-Shirt)
			},
		];

		// for (const review of sampleReviews) {
		// 	await db.query(
		// 		`
		//     INSERT INTO Reviews (Rating, Comment, UserID, ProductID)
		//     VALUES ($1, $2, $3, $4)
		//   `,
		// 		[review.Rating, review.Comment, review.UserID, review.ProductID]
		// 	);
		// }

		console.log("Data inserted successfully!");
	} catch (error) {
		console.error("Error inserting data:", error);
	}
}

export async function GET() {
	try {
		await client.sql`BEGIN`;
		await createTables();
		await insertData();
		await client.release();
		await client.sql`COMMIT`;

		return Response.json({ message: "Database created successfully" });
	} catch (error) {
		await client.sql`ROLLBACK`;
		return Response.json({ error }, { status: 500 });
	}
}
