import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import AccountSettingHook from "../../hooks/authentication/AccountSetting";
import { useParams } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { handleInvalid } from "../../components/toastify/Toastify";
const Setting = () => {
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
    setConfirmPassword("");
    setPassword("");
  };
  return (
    <div className="w-full">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#DEE5F8]">
          <div className="py-3 px-5  ">
            <div className="w-full   h-auto px-3 py-3 ">
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
                        <h1 className="text-xl font-semibold">
                          Change Password
                        </h1>
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
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Setting;
