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
  };
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
              <h1 className="text-center text-2xl font-bold mt-5">
                Change Password
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[80%]  bg-[#FFFFFF] h-[80vh] px-3 py-3 border-2 border-[#000]">
          <div className="py-5 px-5 w-full">
            <div className="flex  justify-around">
              <div>
                <div>
                  <div>
                    <h1 className="text-xl font-semibold">Username</h1>
                  </div>
                  <div className="w-[250px]">
                    <input
                      type="text"
                      className="py-2 px-2 border-2 border-[#000] w-full mt-3"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <div>
                    <h1 className="text-xl font-semibold">Account Type</h1>
                  </div>
                  <div className="w-[250px]">
                    <input
                      type="text"
                      className="py-2 px-2 border-2 border-[#000] w-full mt-3"
                      value={accountType}
                      readonly
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <div className="w-[250px]">
                    <input
                      placeholder="Confirm Password"
                      type="text"
                      className="py-2 px-2 border-2 border-[#000] w-full mt-3  placeholder:text-xl"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="text-xl font-semibold">Email Address</h1>
                </div>
                <div className="w-[250px]">
                  <input
                    type="text"
                    className="py-2 px-2 border-2 border-[#000] w-full mt-3"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end mt-10">
              <button
                className="bg-[#FFFFFF] py-2 px-5 border-2 border-[#000] rounded-lg font-"
                onClick={handleUpdateUserData}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default AccoutSetting;
