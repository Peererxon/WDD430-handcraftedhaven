"use client";

import React, { useState } from "react";

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

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState<string>(exampleProduct.images[0]);

  return (
    <div className="container m-auto flex flex-col gap-8 p-8">
      {/* Left Section: Image and Carousel */}
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="flex flex-col flex-1 items-center gap-4">
          <img
            src={selectedImage}
            alt="Main product"
            className="h-80 w-80 object-cover rounded-lg border"
          />
          <div className="flex gap-2">
            {exampleProduct.images.map((img, index) => (
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

        {/* Right Section: Details */}
        <div className="flex flex-col justify-between flex-1 gap-4 flex-1">
          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl font-semibold">{exampleProduct.title}</h1>
            <p className="text-gray-600">{exampleProduct.description}</p>
          </div>
          <span className="text-right text-2xl font-bold text-blue-500">{exampleProduct.price}</span>
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
}
