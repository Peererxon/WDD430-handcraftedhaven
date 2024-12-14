"use client";

import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { authenticate } from "@/app/login/actions";
import Form from "next/form";
import { useActionState } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	const [errorMessage, formAction, isPending] = useActionState(
		authenticate,
		undefined
	);

	console.log(useActionState);

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
				<p className="pb-4 text-left text-3xl font-semibold">Log In</p>
				<Form className="flex flex-col gap-4" action={formAction}>
					<Input
						label="Email"
						labelPlacement="outside"
						name="email"
						placeholder="Enter your email"
						type="email"
						variant="bordered"
					/>
					<Input
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
					{/* <div className="flex items-center justify-between px-1 py-2">
            <Checkbox defaultSelected name="remember" size="sm">
              Remember me
            </Checkbox>
            <Link className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link>
          </div> */}
					<Button
						className="mt-4"
						color="primary"
						type="submit"
						aria-disabled={isPending}
					>
						Log In
					</Button>
					<div
						className="flex h-8 items-end space-x-1"
						aria-live="polite"
						aria-atomic="true"
					>
						{errorMessage && (
							<>
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
								<p className="text-sm text-red-500">{errorMessage}</p>
							</>
						)}
					</div>
				</Form>
				<p className="text-center text-small">
					<Link href="/sign-in" size="sm">
						Create an account
					</Link>
				</p>
			</div>
		</div>
	);
}
