import React from "react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Explore from "../components/Explore";
import Suggestions from "../components/Suggestions";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-4 h-full bg-gray-100">
        <div className=" w-full h-full">
          <Profile />
        </div>
        <div className=" w-full ">
          <Explore />
        </div>
        <div className=" w-full">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
