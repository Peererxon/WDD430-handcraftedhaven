"use client";

import React from "react";
import {Button, Input, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import { LoginForm } from "@/app/login/actions";
import Form from "next/form";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large px-8 pb-10 pt-6">
        <p className="pb-4 text-left text-3xl font-semibold">
          Log In
        </p>
        <Form className="flex flex-col gap-4" action={LoginForm as unknown as string}>
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
          <Button className="mt-4" color="primary" type="submit">
            Log In
          </Button>
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
