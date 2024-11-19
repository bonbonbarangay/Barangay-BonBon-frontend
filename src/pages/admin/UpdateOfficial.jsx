import React from "react";

const UpdateOfficial = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col bg-[#FFFBFB]">
      <div className="w-[50%]  border-2 border-[#000] ">
        <div className="w-full bg-[#B1C7F4] py-3 px-3">
          <h1 className="text-center text-xl font-bold">
            UPDATE BARANGAY OFFICIAL
          </h1>
        </div>
        <div className="px-3 py-3 w-full">
          <div>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
            />
          </div>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter Position"
              className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
            />
          </div>

          <div className="mt-5">
            <input
              type="text"
              placeholder="Enter Official Type"
              className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
            />
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div>
              <div>
                <h1 className="text-lg">ADD IMAGE</h1>
              </div>
              <div className="flex item-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="text-5xl mt-2"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M1.75 2.75h12.5v10.5H1.75z" />
                    <path d="m3.75 13.2l6.5-5.5l4 3" />
                    <circle cx="5.25" cy="6.25" r=".5" fill="currentColor" />
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <button className="text-lg font-semibold bg-[#739CE7] px-3 py-2 w-[150px]">
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOfficial;
