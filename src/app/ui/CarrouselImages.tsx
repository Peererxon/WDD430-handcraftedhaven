"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Product } from "../lib/definitions";

export default function CarrouselImages({ product }: { product: Product }) {
	const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);

	return (
		<div className="flex flex-col flex-1 items-center gap-4">
			<img
				src={selectedImage}
				alt="Main product"
				className="h-80 w-80 object-cover rounded-lg border"
			/>
			<div className="flex gap-2">
				{product.images.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Thumbnail ${index}`}
						className={`h-16 w-16 object-cover rounded-lg cursor-pointer border ${
							selectedImage === img ? "border-blue-500" : "border-gray-300"
						}`}
						onClick={() => setSelectedImage(img)}
					/>
				))}
			</div>
		</div>
	);
}
