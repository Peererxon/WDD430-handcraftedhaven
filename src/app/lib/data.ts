import { sql } from "@vercel/postgres";

export async function fetchFilteredArtWorks(query: string) {
	try {
		const artWorks = await sql<{
			productid: string;
			name: string;
			description: string;
			price: string;
			categoryname: string;
			username: string;
		}>`
            SELECT 
             products.productid,
             products.name,
             products.description,
             products.price,
             categories.categoryname,
             users.username
            FROM products
            JOIN categories ON products.categoryid = categories.categoryid
            JOIN users ON products.sellerid = users.userid
            WHERE 
             products.name ILIKE ${`%${query}%`} OR
             products.description ILIKE ${`%${query}%`}
            `;
		return artWorks.rows.map((artwork) => {
			return {
				id: artwork.productid,
				name: artwork.name,
				images: [],
				price: artwork.price,
				description: artwork.description,
				category: artwork.categoryname,
				seller: artwork.username,
			};
		});
	} catch (error) {
		console.error("database Error: ", error);
		throw new Error("Failed to fetch artWorks.");
	}
}

export async function fetchProductDetail (id: string){
	try {
		const productDetail = await sql<{
			name: string,
			description: string,
			price: string,
			categoryid: string
		}>`
		SELECT
		products.name,
		products.description,
		products.price,
		products.categoryid
		FROM products
		WHERE products.productid = ${id};
		`
		return productDetail.rows[0];

	}catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch product details.');

	}
}
