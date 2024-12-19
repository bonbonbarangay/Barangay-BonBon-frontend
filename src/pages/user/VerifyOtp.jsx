import React, { useState } from "react";
import { handleInvalid } from "../../components/toastify/Toastify";
import SiginHook from "../../hooks/authentication/Sigin";
import { getFromLocalStorage } from "../../utils/localStorage";
import { Toaster } from "react-hot-toast";

const VerifyOtp = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const { handleVerifyOtp, verifyOtpMutation } = SiginHook();
  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,6}$/.test(value)) {
      setVerificationCode(value);
    }
  };

  const handleSubmit = () => {
    if (verificationCode.length !== 6) {
      handleInvalid("The OTP number incomplete");
      return;
    }
    const data = {
      emailaddress: getFromLocalStorage("email"),
      otp: verificationCode,
    };
    handleVerifyOtp(data);
  };
  return (
    <div>
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="w-[90%] bg-[#76A0EE] px-3 py-4 shadow-lg shadow-[#f4f4f4] rounded-lg  md:w-[60%] lg:w-[50%] xl:w-[40%]">
          <div>
            <h1 className="text-center font-semibold md:text-xl xl:text-2xl">
              OTP Verification
            </h1>
          </div>
          <div className="bg-[#FFFBFB] px-3 py-2 w-full mt-2 rounded-sm">
            <h1 className="text-sm text-center text-black  md:text-lg xl:text-xl">
              We've sent a verification code to your email
            </h1>
          </div>

          <div className="w-full mt-5">
            <input
              type="text"
              name="number"
              placeholder="Enter verification code"
              className="px-2 py-2 w-full  border border-[#000] md:text-lg bg-white placeholder:text-[#a7a7a7]"
              onChange={handleChange}
              value={verificationCode}
            />
          </div>
          <div className="w-full mt-5">
            <button
              className="w-full bg-[#FFFBFB] px-3 py-3 font-semibold text-black md:text-lg xl:text-xl"
              onClick={handleSubmit}
              disabled={verifyOtpMutation.isPending}
            >
              {verifyOtpMutation.isPending ? "Loading" : "Submit"}
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default VerifyOtp;
