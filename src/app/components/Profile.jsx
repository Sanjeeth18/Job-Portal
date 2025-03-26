import React from "react";
import Image from "next/image";
import profileImage from "@/app/assets/profile_three.jpg";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    bio: "Passionate developer, tech enthusiast, and blogger.",
    about:
      "I'm a software engineer specializing in front-end development. I love building intuitive and user-friendly web applications.",
    image: profileImage,
    links: [
      { id: 1, href: "#", color: "text-blue-500 hover:text-blue-600" },
      { id: 2, href: "#", color: "text-blue-700 hover:text-blue-800" },
      { id: 3, href: "#", color: "text-gray-800 hover:text-gray-900" },
    ],
  },
];

const Profile = () => {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-start p-6">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
          <div className="flex flex-col items-center">
            <Image
              src={profile.image}
              alt="Profile"
              
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
            />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">{profile.name}</h2>
            <p className="mt-2 text-center text-gray-700">{profile.bio}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">About</h3>
            <p className="text-gray-600 mt-2">{profile.about}</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            {profile.links.map((link) => (
              <a key={link.id} href={link.href} className={link.color}>
                🔗
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
