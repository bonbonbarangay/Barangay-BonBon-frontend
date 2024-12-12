import React from "react";
import newlogo from "../../assets/newlogo.png";
import { Link } from "react-router-dom";

function SigninMain() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-[#FFFBFB]  ">
      <div className="bg-[#76A0EE]  py-3 pb-5 px-3 w-[40%] flex items-center justify-center flex-col rounded-xl max-lg:w-[60%] max-sm:w-[90%]">
        <div className="w-[30%] max-sm:w-[35%]">
          <img className=" w-full" src={newlogo} alt="Logo" />
        </div>

        <div className="mt-16 uppercase font-semibold text-2xl">
          <h1 className="text-center text-white  max-sm:text-lg">sign in</h1>
        </div>

        <div>
          <Link to="/signin">
            <div>
              <button className="w-full bg-[#FFFBFB] uppercase mt-3 font-bold py-4 px-12 rounded text-xl  shadow-lg hover:bg-[#4580ee] transition duration-300 max-sm:text-lg">
                login
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SigninMain;
