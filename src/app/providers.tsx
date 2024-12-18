// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	return (
		<NextUIProvider className="h-screen" navigate={router.push}>
			<div className="min-h-full flex flex-col justify-between">
			{children}
			</div>
		</NextUIProvider>
	);
}
