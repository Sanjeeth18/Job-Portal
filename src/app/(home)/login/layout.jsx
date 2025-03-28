import { kanit } from "@/app/components/fonts";
import React from "react";

const Loginlayout = ({ children }) => {
  return (
    <div className={`flex flex-col  h-screen justify-center ${kanit.className}`}>

          <div>{children}</div>
    </div>
  );
};

export default Loginlayout;
