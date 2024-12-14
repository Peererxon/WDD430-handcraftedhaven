"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { signIn } from "@root/auth";
import { AuthError } from "next-auth";

const UserFormSchema = z.object({
	id: z.string(),
});

export async function LoginForm(formData: FormData): Promise<void> {
	// Create a new post
	// ...

	const data: { [key: string]: FormDataEntryValue } = {};

	formData.forEach((value, key) => {
		console.log(key, value);
		data[key] = value;
	});

	redirect(`/`);
}

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		await signIn("credentials", formData);
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return "Invalid credentials.";
				default:
					return "Something went wrong.";
			}
		}
		throw error;
	}
}
