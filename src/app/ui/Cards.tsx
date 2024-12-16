import { Divider } from "@nextui-org/divider";
import CardItem from "./Card";
import { fetchFilteredArtWorks } from "../lib/data";
export default async function Cards({ query }: { query: string }) {
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

	const artWorks = await fetchFilteredArtWorks(query);
	return (
		<>
			<div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1">
				{artWorks.map((item) => (
					<CardItem
						{...item}
						title={item.name}
						image={"/images/mock-arwork.png"}
						key={item.id}
					/>
				))}
			</div>

			<Divider />
		</>
	);
}
