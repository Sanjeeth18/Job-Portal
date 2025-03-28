"use client";
import React, { useState, useEffect } from "react";
import { kanit } from "./fonts";
import Link from "next/link";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`border-b-2 border-gray-300 bg-gradient-to-r from-blue-800 to-blue-900 text-white flex items-center justify-between py-6 px-6 md:px-12 shadow-md ${kanit.className}`}
      >
        {windowWidth > 1172 ? (
          <h1 className="font-extrabold w-[35vh] flex text-yellow-400 text-3xl tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="size-8 mt-1 mr-1"
              fill="white"
            >
              <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
            </svg>
            <span>Job Finder</span>
          </h1>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="size-11"
            fill="currentColor"
          >
            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
          </svg>
        )}

        <div
          className={`relative px-3 ${
            windowWidth < 1023 ? "w-full" : "md:w-[90vh]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="absolute left-6 top-1/2 transform -translate-y-1/2 size-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            className="w-full border p-2 pl-10 rounded-3xl focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Search"
          />
        </div>

        {/* Desktop Navigation */}
        {windowWidth > 1023 ? (
          <ul className="hidden md:flex items-center space-x-6 text-xl">
            <li className="flex hover:text-yellow-300 transition duration-300 cursor-pointer">
              <span className="pr-1">Explore</span>
            </li>
            <li className="flex hover:text-yellow-300 transition duration-300 cursor-pointer">
              <span className="pr-1">Network</span>
            </li>
            <li className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-500 transition duration-300 cursor-pointer">
              <Link href='/login'>Login</Link>
            </li>
          </ul>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-9"
            viewBox="0 -960 960 960"
            fill="currentColor"
          >
            <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
          </svg>
        )}
      </div>

      {windowWidth <= 1023 && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-800 to-blue-900 border-t border-gray-300 shadow-lg">
          <div className="flex justify-around py-3">
            <button className="flex flex-col items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582"
                />
              </svg>
              <span className="text-xs">Explore</span>
            </button>

            <button className="flex flex-col items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>

              <span className="text-xs">Network</span>
            </button>

            <button className="flex flex-col items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor "
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14v-2m0 0v-2m0 2h-2m2 0h2m-7.5-1.5a3 3 0 1 1 6 0v1.5a3 3 0 1 1-6 0V12Z"
                />
              </svg>

              <span className="text-xs">Login</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
