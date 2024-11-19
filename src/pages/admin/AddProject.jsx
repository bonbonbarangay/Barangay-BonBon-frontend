import React from "react";

const AddProject = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center flex-col bg-[#FFFBFB]">
      <div className="w-[50%]  border-2 border-[#000] ">
        <div className="w-full bg-[#B1C7F4] py-3 px-3">
          <h1 className="text-center text-xl font-bold">ADD PROJECT</h1>
        </div>
        <div className="px-3 py-3 w-full">
          <div>
            <div>
              <h1 className="text-xl font-bold mb-2">Project Title</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Project Location</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Contructor</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Contract Payment</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Update Status</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Date-Monitoring</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Issues</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Project Engineer</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-5">
            <div className="w-[50%]">
              <div>
                <h1 className="text-xl font-bold mb-2">Date Start</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full py-3 px-3 border border-[#000]  text-lg"
                />
              </div>
            </div>
            <div className="w-[50%]">
              <div>
                <h1 className="text-xl font-bold mb-2">Overall</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="w-full py-3 px-3 border border-[#000]  text-lg"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Project Color</h1>
            </div>
            <div className="flex items-center justify-around">
              <div>
                <input type="radio" className="w-6 h-6" />
              </div>
              <div>
                <input type="radio" className="w-6 h-6" />
              </div>
              <div>
                <input type="radio" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">Budget Year</h1>
            </div>
            <div>
              <input
                type="text"
                className="w-full py-3 px-3 border border-[#000]  text-lg"
              />
            </div>
          </div>

          <div className="mt-5">
            <div>
              <h1 className="text-xl font-bold mb-2">MAP</h1>
            </div>
          </div>

          <div className="mt-5">
            <div className="w-full flex items-end justify-end">
              <button className="text-lg font-semibold bg-[#739CE7] px-3 py-2 w-[150px]">
                Create Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
