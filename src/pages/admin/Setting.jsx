import React from "react";
import Sidebar from "../../components/admin/Sidebar";
const Setting = () => {
  return (
    <div className="w-full">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#DEE5F8]">
          <div className="py-3 mt-2 px-5 w-full">
            <div className="flex items-center gap-5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-3xl"
                >
                  <path
                    fill="currentColor"
                    d="M227.46 214c-16.52-28.56-43-48.06-73.68-55.09a68 68 0 1 0-51.56 0c-30.64 7-57.16 26.53-73.68 55.09a4 4 0 0 0 6.92 4C55 184.19 89.62 164 128 164s73 20.19 92.54 54a4 4 0 0 0 3.46 2a3.93 3.93 0 0 0 2-.54a4 4 0 0 0 1.46-5.46M68 96a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold">Admin Information</h1>
              </div>
            </div>
            <div className="mt-5">
              <div>
                <h1 className="text-xl font-semibold">
                  Upload Photo (Optional)
                </h1>
              </div>
              <div className="mt-5 flex items-center gap-2">
                <div>
                  <button className="bg-[#FFFBFB] border-2 border-[#000] px-2 py-1">
                    Choose File
                  </button>
                </div>
                <div>
                  <h1 className="text-base font-normal">No file choosen</h1>
                </div>
              </div>
            </div>
            <div className="mt-5 flex gap-5 w-full">
              <div className="w-[60% h-[62vh] overflow-auto ">
                <div className="pr-2">
                  <div>
                    <h1 className="text-xl font-bold">FirstName</h1>
                    <input
                      type="text"
                      className="w-full mt-2 px-2 py-2 border-2 border-[#000]"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="mt-3">
                    <h1 className="text-xl font-bold">Middle Name</h1>
                    <input
                      type="text"
                      className="w-full mt-2 px-2 py-2 border-2 border-[#000]"
                      placeholder="Enter Middle Name"
                    />
                  </div>

                  <div className="mt-3">
                    <h1 className="text-xl font-bold">Last Name</h1>
                    <input
                      type="text"
                      className="w-full mt-2 px-2 py-2 border-2 border-[#000]"
                      placeholder="Enter Last Name"
                    />
                  </div>

                  <div className="mt-3">
                    <h1 className="text-xl font-bold">Extension</h1>
                    <input
                      type="text"
                      className="w-full mt-2 px-2 py-2 border-2 border-[#000]"
                      placeholder="Jr,Sr,||,|||"
                    />
                  </div>
                  <div className="mt-3">
                    <h1 className="text-xl font-bold">Extension</h1>

                    <div className="relative mt-2">
                      <div>
                        <div className="absolute top-[20px] z-20 px-2 right-0 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="text-xl"
                          >
                            <path
                              fill="currentColor"
                              d="M8.5 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 3.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 17.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"
                            />
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M8 3.25a.75.75 0 0 1 .75.75v.75h6.5V4a.75.75 0 0 1 1.5 0v.758q.228.006.425.022c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v7.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H8.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.344V8.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 5.05c.337-.172.693-.24 1.073-.27q.197-.016.425-.022V4A.75.75 0 0 1 8 3.25M7.25 6.5v-.242a6 6 0 0 0-.303.017c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v.55h12.5V8.7c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111a6 6 0 0 0-.302-.017V6.5a.75.75 0 0 1-1.5 0v-.25h-6.5v.25a.75.75 0 0 1-1.5 0m11 3.75H5.75v6.05c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h7.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252z"
                              clip-rule="evenodd"
                            />
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M9.75 7.75A.75.75 0 0 1 10.5 7h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="MM,DD,YYYY"
                            className="w-full mt-2 px-2 py-2 border-2 border-[#000]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3 w-full">
                    <div>
                      <h1 className="text-xl font-bold">Place of Birth</h1>
                      <input
                        type="text"
                        className=" mt-2 px-2 py-2 border-2 border-[#000] w-full"
                        placeholder="Enter place of birth"
                      />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold">Nationality</h1>
                      <input
                        type="text"
                        className=" mt-2 px-2 py-2 border-2 border-[#000] w-full"
                        placeholder="Enter Nationality"
                      />
                    </div>

                    <div>
                      <h1 className="text-xl font-bold">Religion</h1>
                      <input
                        type="text"
                        className=" mt-2 px-2 py-2 border-2 border-[#000] w-full"
                        placeholder="Enter Religion"
                      />
                    </div>
                  </div>

                  <div className="mt-3">
                    <h1 className="text-xl font-bold">Residential Address</h1>
                    <input
                      type="text"
                      className="w-full mt-2 px-2 py-2 border-2 border-[#000]"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[40%] px-2 ">
                <div className="px-3">
                  <div>
                    <h1 className="text-xl font-bold">Civil Status</h1>
                  </div>

                  <div className="mt-3 grid grid-cols-2	 ">
                    <div className="flex items-center gap-2">
                      <div>
                        <input type="radio" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">Single</h1>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div>
                        <input type="radio" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">Separated</h1>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-5">
                      <div>
                        <input type="radio" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">Married</h1>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-5">
                      <div>
                        <input type="radio" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">Annuled</h1>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div>
                      <h1 className="text-xl font-bold">Gender</h1>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div>
                        <input type="radio" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">Male</h1>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <div>
                        <input type="radio" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-base font-normal">Female</h1>
                      </div>
                    </div>
                  </div>
                  <div className="mt-20 flex items-center justify-center">
                    <button className="text-2xl font-semibold text-white bg-[#76A0EE] px-3 py-3 w-[200px] rounded-lg">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
