import React, { useState } from "react";
import RightBar from "../../components/user/RightBar";
import newlogo from "../../assets/newlogo.png";
import OfficialHook from "../../hooks/official/Official";
import ViewOfficialModal from "../../components/modal/ViewOfficialModal";
const Transparency = () => {
  const {
    handleOfficialGetPosition,
    OfficialData,
    getOfficialByPositionMutation,
  } = OfficialHook();
  const [title, setTitle] = useState("");
  const [viewOfficial, setViewOfficial] = useState(false);
  const OfficialGetPosition = (position) => {
    handleOfficialGetPosition(position);
    setViewOfficial(true);
    setTitle(position);
  };
  const handleCloseViewOfficial = () => {
    setViewOfficial(false);
  };
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-[100%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                TRANSPARENCY
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] overflow-y-auto h-[100vh] max-lg:h-auto py-5 px-10 mt-5 border-2 border-[#000] max-sm:w-full max-sm:px-3">
                <div>
                  <div className="flex items-center justify-center flex-col">
                    <img
                      src={newlogo}
                      className="w-[150px] max-md:w-[140px] max-sm:w-[100px]"
                    />
                  </div>
                  <div className="w-[90%] mt-5 max-md:w-full">
                    <div
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer max-sm:py-2 max-sm:px-2"
                      onClick={() => OfficialGetPosition("Barangay Council")}
                    >
                      <h1 className="max-sm:text-sm">Barangay Council</h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 max-md:w-full">
                    <div
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer  max-sm:py-2 max-sm:px-2"
                      onClick={() => OfficialGetPosition("Sanguniang Kabataan")}
                    >
                      <h1 className="max-sm:text-sm">
                        Sanguniang Kabataan (SK)
                      </h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 max-md:w-full">
                    <div className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer  max-sm:py-2 max-sm:px-2">
                      <h1 className="max-sm:text-sm">Bids and Projects</h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 max-md:w-full">
                    <div className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer  max-sm:py-2 max-sm:px-2">
                      <h1 className="max-sm:text-sm">
                        Budget and Financial Accountability Reports
                      </h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 max-md:w-full">
                    <div className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer max-sm:py-2 max-sm:px-2">
                      <h1 className="max-sm:text-sm ">
                        Status of Implementation, Evaluation or Assessment
                        Reports
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000] max-lg:border-none max-lg:w-full ">
          <RightBar />
        </div>
      </div>
      <ViewOfficialModal
        handleCloseViewOfficial={handleCloseViewOfficial}
        viewOfficial={viewOfficial}
        OfficialData={OfficialData}
        title={title}
        getOfficialByPositionMutation={getOfficialByPositionMutation}
      />
    </div>
  );
};

export default Transparency;
