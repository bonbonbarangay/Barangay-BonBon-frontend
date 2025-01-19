import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import AccountSettingHook from "../../hooks/authentication/AccountSetting";
export const ForgotPassword = () => {
  const { handleForgotPassword, forgotPasswordMutation } = AccountSettingHook();
  const [email, setEmail] = useState("");

  return (
    <div className="w-full h-screen	 bg-[#FFFBFB] flex items-center justify-center flex-col ">
      <div>
        <h1 className="text-3xl font-semibold font-sans	max-lg:text-2xl max-sm:text-xl mb-2">
          FORGOT ACCOUNT
        </h1>
      </div>
      <div className=" bg-[#76A0EE] w-[40%] z-10 rounded-xl	relative max-lg:w-[60%] max-sm:w-[90%]">
        <div className="w-full  h-auto py-5 px-5">
          <div className="relative ">
            <div className="absolute top-[10px] z-20 px-2 right-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                className="text-2xl "
              >
                <path
                  fill="currentColor"
                  d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full py-3 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <button
            className="text-2xl	 font-bold py-3 px-3 w-full bg-[#FFFBFB] mt-5 text-center rounded-lg max-lg:text-xl max-sm:text-lg "
            onClick={() => handleForgotPassword(email)}
            disabled={forgotPasswordMutation.isPending}
          >
            {forgotPasswordMutation.isPending ? "Loading" : "SUBMIT"}
          </button>
          <div className="flex items-center justify-between max-sm:flex-col">
            <Link to="/signin">
              <h1 className="mt-3 text-[#000000]">Already have an Account</h1>
            </Link>
            <Link to="/signup">
              <h1 className="mt-3 text-[#000000] ">Don't have an account?</h1>
            </Link>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};
