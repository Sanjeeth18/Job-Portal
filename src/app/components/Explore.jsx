"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profileOne from "@/app/assets/profile_one.jpg";
import profileTwo from "@/app/assets/profile_two.jpg";
import profileThree from "@/app/assets/profile_three.jpg";
import postOne from "@/app/assets/posts_one.jpg";
import postTwo from "@/app/assets/posts_two.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import like from'@/app/assets/like.svg'
import share from '@/app/assets/share.svg'
import comment from '@/app/assets/comment.svg'

function Explore() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [followStatus, setFollowStatus] = useState({});

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
      postImage: [postTwo, profileOne],
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

  const handleFollowClick = (postId) => {
    setFollowStatus((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <div className="my-6 rounded-lg overflow-y-scroll w-full scrollbar-hide bg-white h-[100vh]">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-gray-200 p-4 rounded-lg mb-4 shadow-lg"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center w-auto mr-3">
              <Image
                src={post.profilePhoto}
                alt={post.profileName}
                className="rounded-full  border-3 border-blue-500  object-cover w-10 h-10"
              />
              <div className="flex flex-col w-[22vw] ml-3">
                <span className="font-semibold ">{post.profileName}</span>
                <span className="text-xs">{post.about}</span>
              </div>
            </div>
            <div
              className={`font-bold text-sm w-full hover:cursor-pointer flex items-center justify-center
                ${
                  followStatus[post.id]
                    ? "text-green-600 hover:text-green-800"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              onClick={() => handleFollowClick(post.id)}
            >
              {followStatus[post.id] ? <>Requested</> : "+ Follow"}
            </div>
          </div>

          <p className="mb-2">{post.postCaption}</p>

          {Array.isArray(post.postImage) && post.postImage.length > 0 && (
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                pagination={{ clickable: true }}
                className="w-full rounded-lg mt-2"
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {post.postImage.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={image}
                      alt={`Post Image ${index + 1}`}
                      className="rounded-lg w-full h-70 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                ref={prevRef}
                className="absolute top-1/2 left-2 z-10 bg-gray-700 p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="white"
                >
                  <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
                </svg>
              </button>
              <button
                ref={nextRef}
                className="absolute top-1/2 right-2 z-10 bg-gray-700 p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="white"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </button>
            </div>
          )}

          {!Array.isArray(post.postImage) && post.postImage && (
            <div>
              <Image
                src={post.postImage}
                alt="Post"
                className="rounded-lg mt-2"
              />
              <div><div>{/*need to import icons*/}
                </div>
                </div>{" "}
            </div>
          )}

          {post.postVideo && !post.postImage && (
            <video controls className="w-full mt-2 rounded-lg">
              <source src={post.postVideo} type="video/mp4" />
            </video>
          )}
        </div>
      ))}
    </div>
  );
}

export default Explore;
