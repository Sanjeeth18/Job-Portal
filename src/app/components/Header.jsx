"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-300 bg-gradient-to-r from-blue-800 to-blue-900 text-white flex items-center justify-between py-6 px-12 shadow-md">
      <div className="flex items-center">
        <h1 className="mr-10 font-extrabold text-yellow-400 text-4xl tracking-wide">
          Job Finder
        </h1>
        <nav className="space-x-6 text-lg font-medium">
          <Link
            href="/"
            className={`relative transition duration-300 pb-1 ${
              pathname === "/"
                ? "border-b-2 border-yellow-400 text-yellow-400"
                : "hover:text-yellow-300"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`relative transition duration-300 pb-1 ${
              pathname === "/about"
                ? "border-b-2 border-yellow-400 text-yellow-400"
                : "hover:text-yellow-300"
            }`}
          >
            About
          </Link>
          <Link
            href="/find-jobs"
            className={`relative transition duration-300 pb-1 ${
              pathname === "/find-jobs"
                ? "border-b-2 border-yellow-400 text-yellow-400"
                : "hover:text-yellow-300"
            }`}
          >
            Find Jobs
          </Link>
        </nav>
      </div>

      <ul className="flex items-center space-x-6 text-lg">
        <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
          Help ❔
        </li>
        <li className="hover:text-yellow-300 transition duration-300 cursor-pointer">
          Upload CV
        </li>
        <li className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition duration-300 cursor-pointer">
          Login
        </li>
      </ul>
    </div>
  );
};

export default Header;
