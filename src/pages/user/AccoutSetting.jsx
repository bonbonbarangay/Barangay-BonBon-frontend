import React, { useEffect, useState } from "react";
import AccountSettingHook from "../../hooks/authentication/AccountSetting";
import { useParams } from "react-router-dom";
import { handleInvalid } from "../../components/toastify/Toastify";
import { Toaster } from "react-hot-toast";

const AccoutSetting = () => {
  const { id } = useParams();
  const { userData, handleGetByUserId, handleUpdateUser, updateUserMutation } =
    AccountSettingHook();

  const [username, setUserName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  useEffect(() => {
    if (id) {
      handleGetByUserId(id);
    }
  }, [id]);

  useEffect(() => {
    if (userData) {
      setUserName(userData.username || "");
      setEmailAddress(userData.emailaddress || "");
      setAccountType(userData.type || "");
    }
  }, [userData]);

  const handleUpdateUserData = () => {
    if (confirmPassword !== password) {
      handleInvalid("Password Did not Match");
      return;
    } else if (password == "") {
      handleInvalid("Password Empty");

      return;
    }
    const data = {
      id: id,
      username: username,
      emailaddress: emailAddress,
      password: password,
    };
    handleUpdateUser(data);
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div className="w-full h-auto bg-[#DEE5F8]">
      <div className="py-3 px-5 flex  ">
        <div className="w-[20%] bg-[#76A0EE] h-[80vh] px-3 py-3  max-lg:w-[25%] max-md:w-[30%] max-sm:w-[40%] max-md:px-0">
          <div>
            <h1 className="text-xl font-bold text-center max-lg:text-base max-md:text-sm max-sm:text-[10px]">
              ACCOUNT SETTING
            </h1>
          </div>
          <div className="flex items-center justify-center mb-5">
            <img
              src="https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg"
              className="w-[40%] mt-5 max-md:w-[30%] max-sm:w-[40%]"
            />
          </div>
          <div className="px-5 ">
            <div className="py-5">
              <h1 className="text-center text-2xl font-bold max-lg:text-base max-md:text-sm max-sm:text-[10px] ">
                Account
              </h1>
              <h1 className="text-center text-2xl font-bold mt-5 max-lg:text-base max-md:text-sm max-sm:text-[10px] ">
                Change Password
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[80%]  bg-[#FFFFFF] h-[80vh] overflow-y-auto px-3 py-3 border-2 border-[#000] max-lg:w-[75%] max-md:w-[70%]   max-sm:w-[60%] max-sm:px-1">
          <div className="py-5 px-5 w-full flex justify-center gap-10 max-sm:flex-col max-sm:px-2">
            <div className="w-[50%] pl-10 max-lg:pl-0 max-sm:w-full">
              <div>
                <h1 className="text-xl font-semibold max-lg:text-base  max-sm:text-sm">
                  Username
                </h1>
                <div className="w-[60%] max-lg:w-full">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 max-md:text-sm max-sm:text-xs"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-10">
                <h1 className="text-xl font-semibold max-lg:text-base max-sm:text-sm ">
                  Account Type
                </h1>
                <div className="w-[60%] max-lg:w-full">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 max-md:text-sm max-sm:text-xs"
                    value={accountType}
                    readOnly
                  />
                </div>
              </div>
              <div className="mt-10 max-sm:block hidden">
                <h1 className="text-xl font-semibold max-lg:text-base max-sm:text-sm">
                  Account Type
                </h1>
                <div className="w-[60%] max-lg:w-full ">
                  <input
                    type="email"
                    name="email"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 max-md:text-sm max-sm:text-xs"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-xl font-semibold max-lg:text-base max-sm:text-sm">
                  Change Password
                </h1>
                <div className="w-[60%] max-lg:w-full">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 max-md:text-sm max-sm:text-xs"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-10">
                <div className="w-[60%] max-lg:w-full">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 max-md:text-sm max-sm:text-xs"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="w-[50%] max-sm:hidden">
              <div>
                <h1 className="text-xl font-semibold max-lg:text-base max-sm:text-sm">
                  Email Address
                </h1>
                <div className="w-[60%] max-lg:w-full">
                  <input
                    type="email"
                    name="email"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3 max-md:text-sm max-sm:text-xs"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end mt-10">
            <button
              className="bg-[#FFFFFF] py-2 px-5 border-2 border-[#000] rounded-lg font-semibold max-lg:text-base max-sm:text-xs"
              onClick={handleUpdateUserData}
              disabled={updateUserMutation.isPending}
            >
              {updateUserMutation.isPending ? "Loading" : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AccoutSetting;
