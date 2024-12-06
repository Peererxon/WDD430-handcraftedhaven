"use client";
import { useState } from "react";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

// Define the type for each item in the list
interface Item {
  title: string;
  img: string;
  price: string;
}

// Define the props for the CardItem component
interface CardItemProps extends Item {
  onClick: () => void;
  showPrice: boolean;
  onTogglePrice: () => void; // Function to toggle the price visibility
}

function CardItem({
  title,
  img,
  price,
  onClick,
  showPrice,
  onTogglePrice,
}: CardItemProps) {
  return (
    <div
      className="card border rounded-md shadow-md p-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full h-56 mb-4 flex flex-col"> {/* Increased height for the image */}
        <div className="relative w-full h-full">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        
        {showPrice && (
          <p className="text-gray-600 mt-2">{price}</p>
        )}
        
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when closing price
            onTogglePrice(); // Toggle price visibility for the specific item
          }}
          className="mt-auto bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          {showPrice ? "Hide Price" : "Show Price"}
        </button>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}

export default function Cards() {
  const [pricesVisible, setPricesVisible] = useState<boolean[]>(new Array(8).fill(false)); // Track price visibility per item

  const list: Item[] = [
    { title: "Jewelry and Accessories", img: "/images/mock-artwork.png", price: "The price is: $5.50" },
    { title: "Wooden furniture", img: "/images/mock-artwork.png", price: "The price is: $3.00" },
    { title: "Photo frame", img: "/images/mock-artwork.png", price: "The price is: $10.00" },
    { title: "Wooden kitchen tools", img: "/images/mock-artwork.png", price: "The price is: $5.30" },
    { title: "Toys and Gifts", img: "/images/mock-artwork.png", price: "The price is: $15.70" },
    { title: "Leather goods", img: "/images/mock-artwork.png", price: "The price is: $8.00" },
    { title: "Tables", img: "/images/mock-artwork.png", price: "The price is: $7.50" },
    { title: "Wrist Watches", img: "/images/mock-artwork.png", price: "$The price is: 12.20" },
  ];

  const togglePriceVisibility = (index: number) => {
    const updatedVisibility = [...pricesVisible];
    updatedVisibility[index] = !updatedVisibility[index]; 
    setPricesVisible(updatedVisibility);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
        {list.map((item, index) => (
          <CardItem
            {...item}
            key={index}
            onClick={() => togglePriceVisibility(index)} // Handle click for each image
            showPrice={pricesVisible[index]} // item price
            onTogglePrice={() => togglePriceVisibility(index)} // Toggle visibility of price 
          />
        ))}
      </div>

      <Divider />
      <footer className="mt-4 p-4 bg-gray-200 text-center"></footer>
    </div>
  );
}
