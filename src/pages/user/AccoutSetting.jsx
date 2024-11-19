import React from "react";

const AccoutSetting = () => {
  return (
    <div className="w-full h-auto bg-[#DEE5F8]">
      <div className="py-3 px-5 flex  ">
        <div className="w-[20%] bg-[#76A0EE] h-[80vh] px-3 py-3 ">
          <div>
            <h1 className="text-xl font-bold text-center">ACCOUNT SETTING</h1>
          </div>
          <div className="flex items-center justify-center mb-5">
            <img
              src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
              className="w-[40%] mt-5"
            />
          </div>
          <div className="px-5">
            <div className="py-5">
              <h1 className="text-center text-2xl font-bold">Account</h1>
            </div>
            <div className="py-5">
              <h1 className="text-left text-2xl font-bold">Change Password</h1>
            </div>

            <div className="py-5">
              <h1 className="text-left text-2xl font-bold">Notification</h1>
            </div>

            <div className="py-5">
              <h1 className="text-left text-2xl font-bold">
                Security & Privacy
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[80%]  bg-[#FFFFFF] h-[80vh] px-3 py-3 border-2 border-[#000]">
          <div className="py-5 px-5 w-full">
            <div className="flex items-center justify-around">
              <div>
                <div>
                  <h1 className="text-xl font-semibold">First Name</h1>
                </div>
                <div className="w-[250px]">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3"
                  />
                </div>
              </div>
              <div>
                <div>
                  <h1 className="text-xl font-semibold">Last Name</h1>
                </div>
                <div className="w-[250px]">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3"
                  />
                </div>
              </div>
            </div>

            <div className="flex  justify-around mt-10">
              <div>
                <div>
                  <div>
                    <h1 className="text-xl font-semibold">Email Address</h1>
                  </div>
                  <div className="w-[250px]">
                    <input
                      type="text"
                      className="py-2 px-2 border-2 border-[#000] w-full mt-3"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <div>
                    <h1 className="text-xl font-semibold">Change Password</h1>
                  </div>
                  <div className="w-[250px]">
                    <input
                      type="text"
                      className="py-2 px-2 border-2 border-[#000] w-full mt-3 placeholder:text-xl"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <div className="w-[250px]">
                    <input
                      placeholder="Confirm Password"
                      type="text"
                      className="py-2 px-2 border-2 border-[#000] w-full mt-3  placeholder:text-xl"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="text-xl font-semibold">Date of Birth</h1>
                </div>
                <div className="w-[250px]">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 "
                  />
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end mt-10">
              <button className="bg-[#FFFFFF] py-2 px-5 border-2 border-[#000] rounded-lg font-">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccoutSetting;
