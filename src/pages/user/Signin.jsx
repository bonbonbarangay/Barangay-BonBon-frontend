import React from "react";
import SiginHook from "../../hooks/authentication/Sigin";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { handleInvalid } from "../../components/toastify/Toastify";

const Signin = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);

  const { handleSignin, mutation } = SiginHook();
  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };

  const handleLogin = () => {
    if (username == "" || password == "") {
      handleInvalid("invalid");
      return;
    }
    handleSignin({
      username: username,
      password: password,
    });
  };
  return (
    <div className="w-full h-screen	 bg-[#FFFBFB] flex items-center justify-center flex-col ">
      <div>
        <h1 className="text-3xl font-semibold font-sans	max-lg:text-2xl max-sm:text-xl">
          USER ACCOUNT
        </h1>
      </div>
      <div className="mt-5 bg-[#76A0EE] w-[40%] z-10 rounded-xl	relative max-lg:w-[60%] max-sm:w-[90%]">
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
              {passwordShow ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                  onClick={handleShowPassword}
                >
                  <path
                    fill="currentColor"
                    d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                  onClick={handleShowPassword}
                >
                  <path
                    fill="currentColor"
                    d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                  />
                </svg>
              )}
            </div>
            <div className="relative">
              <input
                type={passwordShow ? "text" : "password"}
                placeholder="Password"
                className="w-full py-3 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            className="text-2xl	 font-bold py-3 px-3 w-full bg-[#FFFBFB] mt-5 text-center rounded-lg max-lg:text-xl max-sm:text-lg "
            onClick={handleLogin}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Loading" : "SIGN IN"}
          </button>
          <div>
            <Link to="/signup">
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
