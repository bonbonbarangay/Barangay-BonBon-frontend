import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SignUpHook from "../../hooks/authentication/Signup";
const VerifyAccount = () => {
  const { id } = useParams();
  const { handleVerifyAccount } = SignUpHook();
  useEffect(() => {
    handleVerifyAccount(id);
  }, [id]);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <div className="w-[90%] bg-[#76A0EE] px-3 py-4 shadow-lg shadow-[#f4f4f4] rounded-lg  md:w-[60%] lg:w-[50%] xl:w-[40%]">
        <div>
          <h1 className="text-center font-semibold md:text-xl xl:text-2xl">
            Congrats Your Account is Verified
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col mt-5">
          <div className="bg-[#FFFBFB] px-3 py-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-[100px]"
            >
              <path
                fill="#0b0b0b"
                d="m9.55 15.15l8.475-8.475q.3-.3.7-.3t.7.3t.3.713t-.3.712l-9.175 9.2q-.3.3-.7.3t-.7-.3L4.55 13q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3z"
              />
            </svg>
          </div>
        </div>
        <div className="w-full mt-5">
          <Link to="/">
            <button className="w-full bg-[#FFFBFB] px-3 py-3 font-semibold  md:text-lg xl:text-xl text-black">
              Back To Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
