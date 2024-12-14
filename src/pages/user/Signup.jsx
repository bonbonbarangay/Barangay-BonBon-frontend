import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpHook from "../../hooks/authentication/Signup";
import { Toaster } from "react-hot-toast";
import { handleInvalid } from "../../components/toastify/Toastify";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const { handleSignUp, mutation } = SignUpHook();

  const handleConfirmPassword = (data) => {
    if (username == "" || email == "" || password == "") {
      handleInvalid("Invalid");
      return;
    }
    if (password !== confirmPassword) {
      handleInvalid("did not match password");
      return;
    }
    handleSignUp(data);
  };
  const handleShowConfirmPassword = () => {
    setConfirmShowPassword(!confirmShowPassword);
  };
  const handleShowPassword = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <div className="w-full h-screen	 bg-[#FFFBFB] flex items-center justify-center flex-col ">
      <div>
        <h1 className="text-3xl font-semibold font-sans	max-lg:text-2xl max-sm:text-xl mb-2">
          Create Resident Account
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
                viewBox="0 0 24 24"
                className="text-2xl ]"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  fill="currentColor"
                  d="M22 3H2c-1.09.04-1.96.91-2 2v14c.04 1.09.91 1.96 2 2h20c1.09-.04 1.96-.91 2-2V5a2.074 2.074 0 0 0-2-2m0 16H2V5h20zm-8-2v-1.25c0-1.66-3.34-2.5-5-2.5s-5 .84-5 2.5V17zM9 7a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9 12a2.5 2.5 0 0 0 2.5-2.5A2.5 2.5 0 0 0 9 7m5 0v1h6V7zm0 2v1h6V9zm0 2v1h4v-1z"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Account Name"
                className="w-full py-3 px-3"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                className="text-2xl "
              >
                <path
                  fill="currentColor"
                  d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="E-mail Address"
                className="w-full py-3 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          <div className="relative mt-5">
            <div className="absolute top-[10px] z-20 px-2 right-0 ">
              {confirmShowPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="text-2xl"
                  viewBox="0 0 24 24"
                  onClick={handleShowConfirmPassword}
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
                  onClick={handleShowConfirmPassword}
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
                type={confirmShowPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full py-3 px-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="text-2xl	 font-bold py-3 px-3 w-full bg-[#FFFBFB] mt-5 text-center rounded-lg  max-lg:text-xl "
            disabled={mutation.isPending}
            onClick={() =>
              handleConfirmPassword({
                username: username,
                emailaddress: email,
                password: password,
                type: "user",
              })
            }
          >
            {mutation.isPending ? "Loading" : "SIGN UP"}
          </button>

          <div>
            <Link to="/signin">
              <h1 className="mt-3 text-[#000000]">Already have an Account</h1>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
