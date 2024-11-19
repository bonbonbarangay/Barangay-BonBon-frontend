import React from "react";
import Profiling from "../../components/user/Profiling";
const ResidentProfiling = () => {
  return (
    <div className="w-full bg-[#DEE5F8] px-5 py-3 h-auto">
      <div>
        <h1 className="text-center text-2xl font-bold">
          RESIDENT AND HOUSEHOLD PROFILING
        </h1>
      </div>

      <div className="w-full flex  gap-5 mt-5">
        <div className="w-[65%] pr-3 border-r-2 border-[#000] ">
          <div>
            <h1 className="text-lg font-semibold">Personal Information</h1>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div>
              <h1>Name of Household Head:</h1>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000]"
                  placeholder="Last Name "
                />
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] "
                  placeholder="First Name "
                />
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[50px]"
                  placeholder="M. I "
                />
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[80px]"
                  placeholder="Ext. "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>Address:</h1>
            </div>
            <div className=" w-[60%]">
              <div className="w-full">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-full"
                  placeholder="(House No./Zone#/ City/Province/ Region) "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Date of Birth:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Age:</h1>
              </div>
              <div>
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000] w-[60px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <h1>Gender:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-[60px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Civil Status:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-[100px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Religion:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Type of ID:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>ID No:</h1>
              </div>
              <div>
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000]"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Mobile/Tel No:</h1>
              </div>
              <div>
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Occupation:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Skills:</h1>
              </div>
              <div>
                <input type="text" className="px-2 py-1 border border-[#000]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>Company Address:</h1>
            </div>
            <div className=" w-[60%]">
              <div className="w-full">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000]  w-full"
                  placeholder=" "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Educational Attainment: College:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>High School:</h1>
              </div>
              <div>
                <input type="text" className="px-2 py-1 border border-[#000]" />
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 border-b-2 border-[#000] py-3 ">
            <div className="flex items-center gap-1">
              <div>
                <h1>Elementary:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Vocational Course:</h1>
              </div>
              <div>
                <input type="text" className="px-2 py-1 border border-[#000]" />
              </div>
            </div>
          </div>
          {/*another info*/}
          <div className="mt-5 flex items-center gap-3 ">
            <div>
              <h1>Name of Household Head:</h1>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000]"
                  placeholder="Last Name "
                />
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] "
                  placeholder="First Name "
                />
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[50px]"
                  placeholder="M. I "
                />
              </div>

              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[80px]"
                  placeholder="Ext. "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>Address:</h1>
            </div>
            <div className=" w-[60%]">
              <div className="w-full">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-full"
                  placeholder="(House No./Zone#/ City/Province/ Region) "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Date of Birth:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Age:</h1>
              </div>
              <div>
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000] w-[60px]"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <h1>Gender:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-[60px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Civil Status:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-[100px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Religion:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Type of ID:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>ID No:</h1>
              </div>
              <div>
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000]"
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Mobile/Tel No:</h1>
              </div>
              <div>
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Occupation:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Skills:</h1>
              </div>
              <div>
                <input type="text" className="px-2 py-1 border border-[#000]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>Company Address:</h1>
            </div>
            <div className=" w-[60%]">
              <div className="w-full">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000]  w-full"
                  placeholder=" "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div>
                <h1>Educational Attainment: College:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>High School:</h1>
              </div>
              <div>
                <input type="text" className="px-2 py-1 border border-[#000]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 ">
            <div className="flex items-center gap-1">
              <div>
                <h1>Elementary:</h1>
              </div>
              <div>
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] "
                />
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div>
                <h1>Vocational Course:</h1>
              </div>
              <div>
                <input type="text" className="px-2 py-1 border border-[#000]" />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>No. of Household members living in the house:</h1>
            </div>
            <div className=" w-[60%]">
              <div className="w-full">
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000]  w-[20%]"
                  placeholder=" "
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>No. of Children:</h1>
            </div>
            <div className=" w-[60%]">
              <div className="w-full">
                <input
                  type="number"
                  className="px-2 py-1 border border-[#000]  w-[20%]"
                  placeholder=" "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <Profiling />
        </div>
      </div>
    </div>
  );
};

export default ResidentProfiling;
