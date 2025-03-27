"use client"
import React, { useState } from "react";
import Image from "next/image";
import profile_two from '@/app/assets/profile_two.jpg';
import profile_one from '@/app/assets/profile_one.jpg';
import profile_three from '@/app/assets/profile_three.jpg';

function Suggestions() {
  const peoples = [
    {
      id: 1,
      name: "Alice Johnson",
      profilePhoto: profile_one,
    },
    {
      id: 2,
      name: "Robert Smith",
      profilePhoto: profile_two,
    },
    {
      id: 3,
      name: "Sophia Williams",
      profilePhoto: profile_three,
    },
  ];

  const [followStatus, setFollowStatus] = useState({});

  const handleFollowClick = (personId) => {  
    setFollowStatus(prev => ({
      ...prev,
      [personId]: !prev[personId]
    }));
  };

  return (
    <div className="p-6 my-6 rounded-lg shadow-lg w-full max-w-sm bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 underline" >People You May Know</h2>
      <div className="space-y-4">
        {peoples.map((person) => (
          <div key={person.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <Image
              src={person.profilePhoto}
              alt={person.name}
              width={40}
              height={40}
              className="w-12 h-12 rounded-full border-3 border-blue-500 shadow-md object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="text-md font-bold text-gray-800">{person.name}</h3>
              {followStatus[person.id] ? (
                <button
                  onClick={() => handleFollowClick(person.id)}
                  className="mt-2 text-white px-4 py-1 rounded-lg  bg-green-500 hover:bg-green-600 "
                >
                  Requested</button>
              ) : (
                <button
                  onClick={() => handleFollowClick(person.id)}
                  className="mt-2 px-4 py-1 rounded-lg shadow-sm bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;