import React from "react";
import SiginHook from "../../hooks/authentication/Sigin";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignin, mutation } = SiginHook();

  return (
    <div className="w-full h-screen	 bg-[#FFFBFB] flex items-center justify-center flex-col ">
      <div>
        <h1 className="text-3xl font-semibold font-sans	">USER ACCOUNT</h1>
      </div>
      <div className="mt-5 bg-[#76A0EE] w-[40%] z-10 rounded-xl	relative">
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
                type="text"
                placeholder="Username"
                className="w-full py-3 px-3"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          <div className="relative mt-5">
            <div className="absolute top-[10px] z-20 px-2 right-0 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl"
              >
                <path
                  fill="currentColor"
                  d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10zm0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full py-3 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-[#FFFBFB] mt-5 text-center rounded-lg	">
            <button
              className="text-2xl	 font-bold py-3 px-3"
              onClick={() =>
                handleSignin({
                  username: username,
                  password: password,
                })
              }
              disabled={mutation.isSuccess}
            >
              SIGN IN
            </button>
          </div>
          <div>
            <Link to="/user/signup">
              <h1 className="mt-3 text-[#000000]">Don't have an account?</h1>
            </Link>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Signin;
