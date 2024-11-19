import React from "react";
import logo from "../../assets/logo.png";

const WelcomeLoading = () => {
  return (
    <div className="w-full h-screen  flex justify-center items-center flex-col ">
      <div>
        <img className="w-60" src={logo} />
      </div>
      <div className="mt-10 font-serif	 font-bold text-4xl uppercase ">
        baraggay bon bon
      </div>
    </div>
  );
};

export default WelcomeLoading;
