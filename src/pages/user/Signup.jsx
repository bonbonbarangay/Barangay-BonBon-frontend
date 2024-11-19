import React from "react";

const Signup = () => {
  return (
    <div className="w-full h-screen	 bg-[#FFFBFB] flex items-center justify-center flex-col ">
      <div>
        <h1 className="text-3xl font-semibold font-sans	">
          Create Resident Account
        </h1>
      </div>
      <div className="mt-5 bg-[#76A0EE] w-[40%] z-10 rounded-xl	relative">
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
                placeholder="Confirm Password"
                className="w-full py-3 px-3"
              />
            </div>
          </div>
          <div className="bg-[#FFFBFB] mt-5 text-center rounded-lg	">
            <button className="text-2xl	 font-bold py-3 px-3">SIGN IN</button>
          </div>

          <div>
            <h1 className="mt-3 text-[#000000]">Already have an Account</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
