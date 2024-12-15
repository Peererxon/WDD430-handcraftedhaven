"use client";

import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import Form from "next/form";

export default function AddProductPage() {
  const [images, setImages] = React.useState<File[]>([]);
  const [mainImage, setMainImage] = React.useState<number | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setImages([...images, ...filesArray]);
    }
  };

  const handleSetMainImage = (index: number) => {
    setMainImage(index);
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    if (mainImage === index) {
      setMainImage(null); // Reset main image if it was removed
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Product added successfully", { images, mainImage });
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-md flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          Add Product
          <span aria-label="emoji" className="ml-2" role="img">
            📦
          </span>
        </p>
        <Form  className="flex flex-col gap-4" action={handleSubmit as unknown as string}>
          <Input
            isRequired
            label="Product Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter the product name"
            type="text"
            variant="bordered"
          />
          <Textarea
            isRequired
            label="Description"
            labelPlacement="outside"
            name="description"
            placeholder="Enter a description for the product"
            variant="bordered"
          />
          <Input
            isRequired
            label="Price"
            labelPlacement="outside"
            name="price"
            placeholder="Enter the price"
            type="number"
            variant="bordered"
          />
          <Input
            isDisabled
            label="Seller"
            labelPlacement="outside"
            name="seller"
            placeholder="Enter seller's name"
            type="text"
            variant="bordered"
          />
          <Input
            isRequired
            label="Category"
            labelPlacement="outside"
            name="category"
            placeholder="Enter the product category"
            type="text"
            variant="bordered"
          />
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="images">
              Upload Images
            </label>
            <input
              id="images"
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {images.map((image, index) => (
              <div key={index} className="relative border p-2 rounded-md">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className="h-20 w-20 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleSetMainImage(index)}
                  className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
                    mainImage === index ? "bg-blue-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {mainImage === index ? "Main" : "Set Main"}
                </button>
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-red-500 text-white"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <Button color="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </div>
  );
}
