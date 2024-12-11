import Cards from "@/app/ui/Cards";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { Suspense } from "react";

export default async function Home(props: {
	searchParams?: Promise<{ query?: string; page?: string }>;
}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	const page = Number(searchParams?.page) || 1;
	//const artWorks = await fetchArtWork(query);

	return (
		<div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Header />
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Suspense key={query} fallback={<p>Loading...</p>}>
					<Cards query={query} />
				</Suspense>
			</main>
			<Footer />
		</div>
	);
}
