import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import profileOne from "@/app/assets/profile_one.jpg";
import profileTwo from "@/app/assets/profile_two.jpg";
import profileThree from "@/app/assets/profile_three.jpg";

import postOne from "@/app/assets/posts_one.jpg";
import postTwo from "@/app/assets/posts_two.jpg";
import Explore from "./components/Explore";
import Profile from "./components/Profile";
import Suggestions from "./components/Suggestions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Job Finder",
  description: "Find your dream job",
};

export default function RootLayout({ children }) {
  const posts = [
    {
      id: 1,
      profileName: "John Doe",
      profilePhoto: profileOne,
      about:
        "I'm a software engineer specializing in front-end development. I love building intuitive and user-friendly web applications.",

      postCaption: "Excited to share my latest project with you all! 🚀",
      postImage: postOne,
      postVideo: null,
    },
    {
      id: 2,
      profileName: "Jane Smith",
      profilePhoto: profileTwo,
      about:
        "I'm a software engineer specializing in front-end development. I love building intuitive and user-friendly web applications.",

      postCaption:
        "Had an amazing experience at the tech conference today! #Tech2025",
      postImage: postTwo,
      postVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      profileName: "Michael Johnson",
      profilePhoto: profileThree,
      about:
        "I'm a software engineer specializing in front-end development. I love building intuitive and user-friendly web applications.",

      postCaption:
        "Learning Next.js has been a game-changer! Highly recommend it. 🔥",
      postImage: null,
      postVideo: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}  `}>
        <Header />
        <div className="grid grid-cols-3 gap-4 h-screen fixed">
          <div className=" w-full">
            <Profile />
          </div>
          <div className=" w-full h-full">
            <Explore />
          </div>
          <div className="border border-amber-100 w-full"><Suggestions/></div>
        </div>

        {children}
      </body>
    </html>
  );
}
