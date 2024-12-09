import React from "react";
import newlogo from "../../assets/newlogo.png";
import { Link } from "react-router-dom";

function SigninMain() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col bg-[#FFFBFB]  ">
      <div>
        <img className="w-60  " src={newlogo} alt="Logo" />
      </div>

      <div className="mt-16 uppercase font-semibold text-3xl">
        <h1>sign in</h1>
      </div>

      <div>
        <Link to="/signin">
          <div>
            <button className="w-full bg-[#76A0EE] uppercase mt-3 font-bold py-4 px-20 rounded text-xl  shadow-lg hover:bg-[#4580ee] transition duration-300">
              login
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SigninMain;
