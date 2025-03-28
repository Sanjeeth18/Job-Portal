import React from "react";
import Header from "../components/Header";

const Homelayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Homelayout;
