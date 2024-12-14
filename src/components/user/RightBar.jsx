import React from "react";
import image3 from "../../assets/annoucement-img3.png";
import image4 from "../../assets/annoucement-img4.png";
import { Link } from "react-router-dom";
const RightBar = () => {
  return (
    <div className="mt-12  px-3 py-2  max-lg:flex  max-lg:justify-center max-lg:gap-5 max-sm:gap-2 max-md:px-0 max-md:py-0 ">
      <div className="max-lg:w-[50%]">
        <div>
          <Link to="https://www.facebook.com/brgybonboncdoofficial?mibextid=LQQJ4d&rdid=aYoKzs075zWVpD4s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15dRzKSbiR%2F%3Fmibextid%3DLQQJ4d#">
            <button className="bg-[#76A0EE] py-2 px-3 text-center w-[130px] font-semibold max-sm:w-auto max-sm:px-2 max-sm:text-sm">
              SERVICES
            </button>
          </Link>
        </div>
        <div className="mt-5 w-full bg-[#B9BECD] py-2 px-2 flex items-center justify-center max-lg:h-[250px]   max-sm:h-auto">
          <img
            src={image3}
            className="object-cover max-sm:h-[150px]  max-lg:h-[250px] w-full max-lg:py-3"
          />
        </div>
      </div>

      <div className="mt-5 max-lg:mt-0 max-lg:w-[50%]">
        <div>
          <Link to="https://www.facebook.com/brgybonboncdoofficial?mibextid=LQQJ4d&rdid=aYoKzs075zWVpD4s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15dRzKSbiR%2F%3Fmibextid%3DLQQJ4d#">
            <button className="bg-[#76A0EE] py-2 px-3 text-center w-[130px] font-semibold max-sm:w-auto max-sm:px-2 max-sm:text-sm">
              FACEBOOK
            </button>
          </Link>
        </div>
        <div className="mt-5 w-full bg-[#B9BECD] py-2 px-2 flex items-center justify-center max-lg:h-[250px]  max-sm:h-auto">
          <img
            src={image4}
            className="object-cover max-sm:h-[150px]  max-lg:h-[250px] w-full max-lg:py-3 "
          />
        </div>

        <div className="bg-[#F0F0F0] w-fit mt-2 px-2 py-2 flex items-center gap-2 border border-[#000] max-lg:hidden">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              className="text-lg"
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
          </div>
          <div>
            <Link to="https://www.facebook.com/brgybonboncdoofficial?mibextid=LQQJ4d&rdid=aYoKzs075zWVpD4s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15dRzKSbiR%2F%3Fmibextid%3DLQQJ4d#">
              <h1>Follow Page</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
