import React from "react";
import RightBar from "../../components/user/RightBar";
import Map from "../../components/user/Map";

const ProjectManagement = () => {
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-[100%] ">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                PROJECT MANAGEMENT
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] max-lg:w-full overflow-y-auto h-[100vh] py-5 px-10 mt-5 border-2 border-[#000] max-lg:h-[70vh] max-md:h-[60vh] max-sm:h-[50vh] max-md:px-5 max-sm:px-2 max-sm:py-2">
                <div className="w-full">
                  <Map />
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="w-[100px] h-[20px] bg-[#42D732]"></div>
                  <div>
                    <h1 className="font-bold text-lg max-md:text-sm">
                      Satisfactory
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[100px] h-[20px] bg-[#FD4513]"></div>
                  <div>
                    <h1 className="font-bold text-lg max-md:text-sm">
                      With Serious Defeciencies
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[100px] h-[20px] bg-[#F8C20A] "></div>
                  <div>
                    <h1 className="font-bold text-lg max-md:text-sm">
                      Minor Defeciencies
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000] max-lg:border-none max-lg:w-full   ">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
