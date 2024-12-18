"use client";

import { Divider } from "@nextui-org/divider";
import CardItem from "./Card";
import { Link } from "@nextui-org/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CardsClient({ artWorks }: { artWorks: any[] }) {
	return (
		<>
			<div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1">
				{artWorks.map((item) => (
					<Link href={`/products/${item.id}`} key={item.id}>
						<CardItem
							{...item}
							title={item.name}
							image={"/images/mock-arwork.png"}
						/>
					</Link>
				))}
			</div>
			<Divider />
		</>
	);
}
