import React from "react";
import Image from "next/image";

function Suggestions() {
  const peoples = [
    {
      id: 1,
      name: "Alice Johnson",
      profilePhoto: "/assets/alice.jpg",
    },
    {
      id: 2,
      name: "Robert Smith",
      profilePhoto: "/assets/robert.jpg",
    },
    {
      id: 3,
      name: "Sophia Williams",
      profilePhoto: "/assets/sophia.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">People You May Know</h2>
      <div className="space-y-4">
        {peoples.map((person) => (
          <div key={person.id} className="flex items-center bg-white p-4 rounded-lg shadow-md">
            <Image
              src={person.profilePhoto}
              alt={person.name}
              width={56} 
              height={56}
              className="rounded-full border-4 border-blue-500 shadow-md object-cover"
            />
            <div className="ml-4">
              <h3 className="text-md font-bold text-gray-800">{person.name}</h3>
              <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-lg shadow-sm hover:bg-blue-600">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
