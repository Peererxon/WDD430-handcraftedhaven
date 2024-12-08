// import Image from "next/image";
import Cards from '@/app/ui/Cards';
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Cards />
      </main>
      <Footer />
    </div>
  );
}
