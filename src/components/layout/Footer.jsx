import React from "react";
import newlogo from "../../assets/newlogo.png";
import newlogo2 from "../../assets/newlogo2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#F0F0F0]">
      <div className="py-3 px-5 w-full">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold">Contact Information</h1>
            <div className="ml-10 mt-5">
              <h1 className="font-semibold text-sm">
                Barangay Bonbon, Cagayan de Oro City,9000
              </h1>
              <div className="mt-5">
                <h1 className="font-semibold text-sm">
                  Telephone : (062) 992-0420 | 991-4525
                </h1>
                <h1 className="font-semibold text-sm">
                  Email Address :barangaybonbon@gmail.com
                </h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Our Social Media</h1>
            <div className="text-center flex items-center justify-center mt-2">
              <Link to="https://www.facebook.com/brgybonboncdoofficial?mibextid=LQQJ4d&rdid=aYoKzs075zWVpD4s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15dRzKSbiR%2F%3Fmibextid%3DLQQJ4d#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  className="text-2xl "
                >
                  <path
                    fill="#1877f2"
                    d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                  />
                  <path
                    fill="#fff"
                    d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex items-center ">
            <div>
              <Link to="https://www.facebook.com/brgybonboncdoofficial?mibextid=LQQJ4d&rdid=aYoKzs075zWVpD4s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15dRzKSbiR%2F%3Fmibextid%3DLQQJ4d#">
                <img src={newlogo} className="w-auto h-[120px]" />
              </Link>
            </div>
            <div>
              <img src={newlogo2} className="w-auto h-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
