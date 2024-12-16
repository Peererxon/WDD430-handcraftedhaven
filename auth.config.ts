import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;

			const isInteractingWithProduct = nextUrl.pathname.startsWith("/product");
			if (isInteractingWithProduct) {
				if (isLoggedIn) return true;
				return false; // Redirect unauthenticated users to login page
			}
			return true;
		},
	},
	providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;