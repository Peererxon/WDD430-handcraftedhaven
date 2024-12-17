"use server";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";
import bcrypt from "bcrypt";

const UserFormSchema = z.object({
	userid: z.string(),
	username: z.string(),
	email: z.string().email(),
	password: z.string(),
	role: z.enum(["Seller", "Buyer", "Admin"]),
});

const createUser = UserFormSchema.omit({ userid: true });

export type State = {
	errors?: {
		username?: string[];
		email?: string[];
		password?: string[];
		role?: string[];
	};
	message?: string | null;
};

export async function signUp(prevState: State, formData: FormData) {
	// Create a new user
	const validateFields = createUser.safeParse({
		userid: formData.get("id"),
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
		role: formData.get("role"),
	});
	if (validateFields.error) {
		return {
			errors: validateFields.error?.flatten().fieldErrors,
			message: "Missing fields for sign in user",
		};
	}

	const { email, password, role, username } = validateFields.data;
	const passwordHasded = bcrypt.hashSync(password, 10);
	try {
		await sql`
      INSERT INTO users (username,email,password,role)
      VALUES (${username}, ${email}, ${passwordHasded}, ${role})
    `;
	} catch (error) {
		console.error(error);
		return {
			message: "Database Error: Failed to Create User.",
		};
	}

	redirect(`/login`);
}
