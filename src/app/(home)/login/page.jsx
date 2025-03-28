"use client";
import React, { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto w-full">
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={closeModal}
        aria-hidden="true"
      />

      <div className="flex items-center justify-center  min-h-screen px-4">
        <div className="bg-white rounded-lg max-w-md mx-auto p-6 z-20 shadow-lg relative">
          <h2 className="text-2xl font-bold mb-4">Login</h2>

          <button
            type="button"
            className="w-full border border-gray-300 rounded p-2 flex items-center justify-center mb-4 hover:bg-gray-100"
            onClick={() => {
              console.log("Sign in with Google clicked");
            }}
          >
            <img
              src="/google-icon.png"
              alt="Google Icon"
              className="w-6 h-6 mr-2"
            />
            Sign in with Google
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

            <div className="mb-4">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="mt-1 block w-full border border-gray-300 rounded p-2 
                  focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
