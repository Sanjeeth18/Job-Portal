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

function PostActions({ postId, likeStatus, onLikeClick, onCommentClick }) {
  return (
    <div className="flex flex-row justify-between px-5 mt-3">
      <div onClick={() => onLikeClick(postId)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill={likeStatus ? "blue" : "grey"}
        >
          <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
        </svg>
      </div>
      <div onClick={() => onCommentClick(postId)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="grey"
        >
          <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="grey"
        >
          <path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z" />
        </svg>
      </div>
    </div>
  );
}

function Explore() {
  const [likeStatus, setLikeStatus] = useState({});
  const [followStatus, setFollowStatus] = useState({});
  const [commentOpen, setCommentOpen] = useState({});
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState({});
  const [replyOpen, setReplyOpen] = useState({});
  const [newReply, setNewReply] = useState({});

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

  const handleLikeClick = (postId) => {
    setLikeStatus((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleFollowClick = (postId) => {
    setFollowStatus((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleCommentClick = (postId) => {
    setCommentOpen((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const handleNewCommentChange = (postId, value) => {
    setNewComment((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleCommentSubmit = (postId) => {
    if (!newComment[postId]?.trim()) return;
    setComments((prev) => {
      const postComments = prev[postId] || [];
      return {
        ...prev,
        [postId]: [
          ...postComments,
          { text: newComment[postId].trim(), replies: [] },
        ],
      };
    });
    setNewComment((prev) => ({ ...prev, [postId]: "" }));
  };

  const getReplyKey = (postId, path) => `${postId}-${path.join("-")}`;

  const handleToggleReply = (postId, path) => {
    const key = getReplyKey(postId, path);
    setReplyOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNewReplyChange = (postId, path, value) => {
    const key = getReplyKey(postId, path);
    setNewReply((prev) => ({ ...prev, [key]: value }));
  };

  const addReplyToComment = (commentsArray, path, replyText) => {
    const index = path[0];
    if (path.length === 1) {
      const comment = commentsArray[index];
      return [
        ...commentsArray.slice(0, index),
        {
          ...comment,
          replies: [
            ...comment.replies,
            { text: replyText, replies: [] },
          ],
        },
        ...commentsArray.slice(index + 1),
      ];
    } else {
      const comment = commentsArray[index];
      const updatedReplies = addReplyToComment(
        comment.replies,
        path.slice(1),
        replyText
      );
      return [
        ...commentsArray.slice(0, index),
        {
          ...comment,
          replies: updatedReplies,
        },
        ...commentsArray.slice(index + 1),
      ];
    }
  };

  const handleReplySubmit = (postId, path) => {
    const key = getReplyKey(postId, path);
    if (!newReply[key]?.trim()) return;
    setComments((prev) => {
      const postComments = prev[postId] || [];
      const updatedComments = addReplyToComment(
        postComments,
        path,
        newReply[key].trim()
      );
      return {
        ...prev,
        [postId]: updatedComments,
      };
    });
    setNewReply((prev) => ({ ...prev, [key]: "" }));
    setReplyOpen((prev) => ({ ...prev, [key]: false }));
  };

  const renderComments = (postId, commentsArray, path = []) => {
    return commentsArray.map((comment, index) => {
      const currentPath = [...path, index];
      const key = getReplyKey(postId, currentPath);
      return (
        <div key={key} className="mb-2 ml-4">
          <div className="flex justify-between items-center border-b border-gray-200 pb-1">
            <span className="text-sm">{comment.text}</span>
            <button
              onClick={() => handleToggleReply(postId, currentPath)}
              className="text-blue-500 text-xs"
            >
              Reply
            </button>
          </div>
          {replyOpen[key] && (
            <div className="flex items-center mt-1 ml-4">
              <input
                type="text"
                placeholder="Enter your reply..."
                value={newReply[key] || ""}
                onChange={(e) =>
                  handleNewReplyChange(postId, currentPath, e.target.value)
                }
                className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none"
              />
              <button
                onClick={() => handleReplySubmit(postId, currentPath)}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
              >
                Submit
              </button>
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <div className="ml-4 mt-1">
              {renderComments(postId, comment.replies, currentPath)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="my-6 rounded-lg overflow-y-scroll w-full scrollbar-hide bg-white h-[100vh]">
      {posts.map((post) => {
        const prevRef = useRef(null);
        const nextRef = useRef(null);
        return (
          <div
            key={post.id}
            className="border border-gray-200 p-4 rounded-lg mb-4 shadow-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center w-auto mr-3">
                <Image
                  src={post.profilePhoto}
                  alt={post.profileName}
                  className="rounded-full border-3 border-blue-500 object-cover w-10 h-10"
                />
                <div className="flex flex-col w-[22vw] ml-3">
                  <span className="font-semibold">{post.profileName}</span>
                  <span className="text-xs">{post.about}</span>
                </div>
              </div>
              <div
                className={`font-bold text-sm w-full hover:cursor-pointer flex items-center justify-center ${
                  followStatus[post.id]
                    ? "text-green-600 hover:text-green-800"
                    : "text-blue-600 hover:text-blue-800"
                }`}
                onClick={() => handleFollowClick(post.id)}
              >
                {followStatus[post.id] ? "Requested" : "+ Follow"}
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
                  loop={true}
                  pagination={{ clickable: true }}
                  className="w-full rounded-lg mt-2"
                  onSwiper={(swiper) => {
                    if (prevRef.current && nextRef.current) {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
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
              <Image
                src={post.postImage}
                alt="Post"
                className="rounded-lg mt-2 w-full h-70 object-cover"
              />
            )}
            {post.postVideo && !post.postImage && (
              <video controls className="w-full mt-2 rounded-lg">
                <source src={post.postVideo} type="video/mp4" />
              </video>
            )}
            <PostActions
              postId={post.id}
              likeStatus={likeStatus[post.id] || false}
              onLikeClick={handleLikeClick}
              onCommentClick={handleCommentClick}
            />
            {commentOpen[post.id] && (
              <div className="mt-4 px-5">
                {comments[post.id] && comments[post.id].length > 0 ? (
                  renderComments(post.id, comments[post.id])
                ) : (
                  <span className="text-sm text-gray-500">
                    No comments till now
                  </span>
                )}
                <div className="flex items-center mt-2">
                  <input
                    type="text"
                    placeholder="Enter your comment..."
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      handleNewCommentChange(post.id, e.target.value)
                    }
                    className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none"
                  />
                  <button
                    onClick={() => handleCommentSubmit(post.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Explore;
