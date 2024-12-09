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
      <div className="flex px-5">
        <div className="w-[70%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold">TRANSPARENCY</h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] overflow-y-auto h-[100vh] py-5 px-10 mt-5 border-2 border-[#000] ">
                <div>
                  <div className="flex items-center justify-center flex-col">
                    <img src={newlogo} className="w-[150px]" />
                  </div>
                  <div className="w-[90%] mt-5 ">
                    <div
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer"
                      onClick={() => OfficialGetPosition("Barangay Council")}
                    >
                      <h1>Barangay Council</h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 ">
                    <div
                      className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer"
                      onClick={() => OfficialGetPosition("Sanguniang Kabataan")}
                    >
                      <h1>Sanguniang Kabataan (SK)</h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 ">
                    <div className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer">
                      <h1>Bids and Projects</h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 ">
                    <div className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer">
                      <h1>Budget and Financial Accountability Reports</h1>
                    </div>
                  </div>

                  <div className="w-[90%] mt-5 ">
                    <div className="w-full py-3 px-3 border border-[#000] placeholder-[#000] bg-[#fff] cursor-pointer">
                      <h1>
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
        <div className="w-[30%] border-2 border-[#000]  ">
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
