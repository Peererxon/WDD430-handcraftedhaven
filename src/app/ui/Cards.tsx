import { fetchFilteredArtWorks } from "../lib/data";
import CardsClient from "./CardsClient";

export default async function Cards({ query }: { query: string }) {
	const artWorks = await fetchFilteredArtWorks(query);

	return <CardsClient artWorks={artWorks} />;
}
