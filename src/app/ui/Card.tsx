import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

function CardItem({
	image,
	title,
	description,
	price,
}: {
	image: string;
	title: string;
	description: string;
	price: string;
}) {
	return (
		<Card shadow="sm" isPressable className="bg-secondary-50 p-3 border">
			<CardBody className="flex flex-col gap-3 sm:gap-6 sm:flex-row ">
				<Image
					src={image}
					alt={title}
					className="max-w-full"
					width={300}
				></Image>
				<div className="sm:flex sm:flex-col sm:justify-center w-9/12">
					<p className="text-left text-xl">
						<strong>{title}</strong>
					</p>
					<p className="hidden sm:block">{description}</p>

					<p className=" text-md text-black text-left mt-2">{price}</p>
				</div>
			</CardBody>
		</Card>
	);
}

export default CardItem;
