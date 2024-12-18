import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

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

export async function fetchProductDetail(id: string): Promise<Product> {
	try {
		const productDetail = await sql`
		SELECT
		p.name,
		p.description,
		p.price,
		p.categoryid,
		img.imagebase64,
		img.imageid,
		comments.comment,
		comments.reviewid
		FROM products AS p
		LEFT JOIN productimages AS img ON p.productid = img.productid
		LEFT JOIN reviews as comments ON p.productid = comments.productid
		WHERE p.productid = ${id};
		`;
		const productFromDb = productDetail.rows[0];
		return {
			title: productFromDb.name,
			description: productFromDb.description,
			price: productFromDb.price,
			comments: productFromDb.comment,
			images: [productFromDb?.imagebase64 || ""],
		};
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch product details.");
	}
}
