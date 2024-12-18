import { Button } from "@nextui-org/button";
import Link from "next/link";
import StoreIcon from "./StoreIcon";
import Search from "./Search";
import { auth, signOut } from "@root/auth";

export default async function Header() {
	const session = await auth();
	const isLoggedIn = session?.user;
	return (
		<header className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
			<Link href="/" className="flex items-center space-x-2">
				<StoreIcon />
			</Link>
			<div className="flex-1 px-4">
				<Search />
			</div>
			<div className="flex items-center space-x-4">
				{/* <Link
					href="#"
					className="text-gray-600 hover:text-blue-600 transition duration-200"
				>
					Main
				</Link>
				<Link
					href="#"
					className="text-gray-600 hover:text-blue-600 transition duration-200"
				>
					Contact
				</Link> */}

				{isLoggedIn ? (
					<form
						action={async () => {
							"use server";
							await signOut({
								redirect: true,
							});
						}}
					>
						<Button
							type="submit"
							className="bg-blue-600 text-white hover:bg-blue-700"
						>
							Logout
						</Button>
					</form>
				) : (
					<Link href="/login">
						<Button className="bg-blue-600 text-white hover:bg-blue-700">
							Login
						</Button>
					</Link>
				)}
			</div>
		</header>
	);
}
