"use server";

import { fetchProductDetail } from "@/app/lib/data";
import CarrouselImages from "@/app/ui/CarrouselImages";
import { PageProps } from "@root/.next/types/app/page";

// Example data
const exampleProduct = {
	title: "Stylish Modern Chair",
	description: "A comfortable and stylish chair perfect for modern interiors.",
	price: "$120.00",
	images: [
		"https://picsum.photos/500",
		"https://picsum.photos/499",
		"https://picsum.photos/501",
	],
	comments: [
		{ user: "John Doe", comment: "Amazing quality and super comfy!" },
		{ user: "Jane Smith", comment: "Looks great in my living room." },
	],
};

export default async function ProductDetailPage(props: PageProps) {
	const { id } = await props.params;

	try {
		const product = await fetchProductDetail(id);
		product.images = exampleProduct.images;
		product.comments = exampleProduct.comments;
		if (!product) {
			return <p>Product not found.</p>;
		}
		return (
			<div className="container m-auto flex flex-col gap-8 p-8">
				{/* Left Section: Image and Carousel */}
				<div className="flex gap-6 flex-col md:flex-row">
					<CarrouselImages product={product} />

					{/* Right Section: Details */}
					<div className="flex flex-col justify-between gap-4 flex-1">
						<div className="flex gap-4 flex-col">
							<h1 className="text-3xl font-semibold">{product.title}</h1>
							<p className="text-gray-600">{product.description}</p>
						</div>
						<span className="text-right text-2xl font-bold text-blue-500">
							{product.price}
						</span>
					</div>
				</div>

				{/* Comments Section */}
				<div className="flex flex-col w-full mt-8 border-t pt-4">
					<h2 className="text-2xl font-semibold mb-4">Comments</h2>
					<div className="flex flex-col gap-2">
						{exampleProduct.comments.map((comment, index) => (
							<div key={index} className="border p-2 rounded-md bg-gray-50">
								<p className="text-sm font-bold">{comment.user}</p>
								<p className="text-gray-700">{comment.comment}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	} catch (error) {
		console.error(error);
		return <p>Failed to load product details.</p>;
	}
}
