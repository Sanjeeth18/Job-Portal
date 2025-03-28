"use client";
import React from "react";
import { kanit } from "@/app/components/fonts";
import Link from "next/link";

const Register = () => {
  return (
    <div className="w-full max-w-md mx-auto p-6 my-3 border border-gray-300 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl text-center font-bold mb-4">Register</h2>

      <button
        type="button"
        className={`w-full border border-gray-300 rounded p-2 flex items-center justify-center mb-4 hover:bg-gray-100 ${kanit.className}`}
        onClick={() => {
          console.log("Sign up with Google clicked");
        }}
      >
        <div className="mr-2">
          <svg
            viewBox="-3 0 262 262"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              fill="#4285F4"
            />
            <path
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              fill="#34A853"
            />
            <path
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
              fill="#FBBC05"
            />
            <path
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              fill="#EB4335"
            />
          </svg>
        </div>
        <div>Sign up with Google</div>
      </button>

      <div className="text-center mb-4 font-medium text-gray-500">or</div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="mt-1 block w-full border border-gray-300 rounded p-2 
                focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-1 block w-full border border-gray-300 rounded p-2 
                focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="mt-1 block w-full border border-gray-300 rounded p-2 
                focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div
          className=" hover:cursor-pointer underline text-right mb-1 text-sm text-blue-600 hover:text-blue-900 "
        >
        <Link href="/login"> &lt;&lt; Back to login</Link> 
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
