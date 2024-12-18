"use client";

import React, { useActionState } from "react";
import {
	Button,
	Input,
	Checkbox,
	Link,
	Select,
	SelectItem,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import Form from "next/form";
import { signUp, State } from "./actions";

export default function SignInPage() {
	const [isVisible, setIsVisible] = React.useState(false);
	const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

	const initialState: State = {
		message: null,
		errors: {},
	};
	const [state, formAction, isPending] = useActionState(signUp, initialState);
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
				<p className="pb-4 text-left text-3xl font-semibold">Sign Up</p>
				<Form action={formAction} className="flex flex-col gap-4">
					<Input
						isRequired
						label="Username"
						labelPlacement="outside"
						name="username"
						placeholder="Enter your username"
						type="text"
						variant="bordered"
					/>
					<Input
						isRequired
						label="Email"
						labelPlacement="outside"
						name="email"
						placeholder="Enter your email"
						type="email"
						variant="bordered"
					/>
					<Input
						isRequired
						endContent={
							<button type="button" onClick={toggleVisibility}>
								{isVisible ? (
									<Icon
										className="pointer-events-none text-2xl text-default-400"
										icon="solar:eye-closed-linear"
									/>
								) : (
									<Icon
										className="pointer-events-none text-2xl text-default-400"
										icon="solar:eye-bold"
									/>
								)}
							</button>
						}
						label="Password"
						labelPlacement="outside"
						name="password"
						placeholder="Enter your password"
						type={isVisible ? "text" : "password"}
						variant="bordered"
					/>
					<Input
						isRequired
						endContent={
							<button type="button" onClick={toggleConfirmVisibility}>
								{isConfirmVisible ? (
									<Icon
										className="pointer-events-none text-2xl text-default-400"
										icon="solar:eye-closed-linear"
									/>
								) : (
									<Icon
										className="pointer-events-none text-2xl text-default-400"
										icon="solar:eye-bold"
									/>
								)}
							</button>
						}
						label="Confirm Password"
						labelPlacement="outside"
						name="confirmPassword"
						placeholder="Confirm your password"
						type={isConfirmVisible ? "text" : "password"}
						variant="bordered"
					/>
					<Select name="role" placeholder="Select user role" label="User role">
						<SelectItem key={"Seller"}>Seller</SelectItem>
						<SelectItem key={"Buyer"}>Buyer</SelectItem>
					</Select>
					<Checkbox isRequired className="py-4" size="sm">
						I agree with the&nbsp;
						<Link href="#" size="sm">
							Terms
						</Link>
						&nbsp; and&nbsp;
						<Link href="#" size="sm">
							Privacy Policy
						</Link>
					</Checkbox>
					<div aria-live="polite" aria-atomic="true">
						{state.message && (
							<p className="mt-2 text-sm text-red-500">{state.message}</p>
						)}
					</div>
					<Button color="primary" type="submit" aria-disabled={isPending}>
						Sign Up
					</Button>
				</Form>
				<p className="text-center text-small">
					<Link href="/login" size="sm">
						Already have an account? Log In
					</Link>
				</p>
			</div>
		</div>
	);
}
