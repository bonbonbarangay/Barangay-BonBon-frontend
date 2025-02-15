import React from "react";
import GoogleMap from "../../components/user/GoogleMap";
import RightBar from "../../components/user/RightBar";
const Geotagging = () => {
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-full">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                MAP
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] max-lg:w-full max-lg:h-[50vh] max-sm:h-[35vh] overflow-y-auto h-[100vh] py-5 px-10 mt-5 border-2 border-[#000] max-lg:px-2">
                <div>
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000] max-lg:border-none max-lg:w-full ">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Geotagging;
