"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
export default function Cards() {
	const list = [
		{
			title: "Orange",
			img: "/images/mock-arwork.png",
			price: "$5.50",
		},
		{
			title: "Tangerine",
			img: "/images/mock-arwork.png",
			price: "$3.00",
		},
		{
			title: "Raspberry",
			img: "/images/mock-arwork.png",
			price: "$10.00",
		},
		{
			title: "Lemon",
			img: "/images/mock-arwork.png",
			price: "$5.30",
		},
		{
			title: "Avocado",
			img: "/images/mock-arwork.png",
			price: "$15.70",
		},
		{
			title: "Lemon 2",
			img: "/images/mock-arwork.png",
			price: "$8.00",
		},
		{
			title: "Banana",
			img: "/images/mock-arwork.png",
			price: "$7.50",
		},
		{
			title: "Watermelon",
			img: "/images/mock-arwork.png",
			price: "$12.20",
		},
	];

	return (
		<>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-2 sm:grid-cols-1">
				{list.map((item, index) => (
					<div
						className="flex flex-col gap-3 sm:gap-6 sm:flex-row "
						key={index}
					>
						<Image
							className="card__image"
							src={list[0].img}
							alt={list[0].title}
						></Image>
						<div className="sm:flex sm:flex-col sm:justify-center">
							<p>
								<strong>Product 1</strong>
							</p>
							<p className="hidden sm:block">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Corporis consequuntur delectus doloribus nesciunt quos voluptas
								officia optio. Adipisci totam at fugiat, enim reiciendis rerum
								neque unde porro blanditiis dolore dignissimos.
							</p>

							<p className="text-gray-900 text-center mt-2">90$</p>
						</div>
					</div>
				))}
				<div className="flex flex-col gap-6 sm:flex-row ">
					<Image
						className="card__image"
						src={list[0].img}
						alt={list[0].title}
					></Image>
					<div className="pt-2 sm:flex sm:flex-col sm:justify-center">
						<p>
							<strong>Product 1</strong>
						</p>
						<p className="hidden sm:block">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
							consequuntur delectus doloribus nesciunt quos voluptas officia
							optio. Adipisci totam at fugiat, enim reiciendis rerum neque unde
							porro blanditiis dolore dignissimos.
						</p>

						<p className="text-gray-900 text-center mt-2">90$</p>
					</div>
				</div>
			</div>

			<Divider />
		</>
	);
}
