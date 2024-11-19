import React from "react";
import RightBar from "../../components/user/RightBar";
const ProjectManagement = () => {
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5">
        <div className="w-[70%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold">
                PROJECT MANAGEMENT
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] overflow-y-auto h-[100vh] py-5 px-10 mt-5 border-2 border-[#000]">
                <div className="flex items-center gap-2">
                  <div className="w-[100px] h-[20px] bg-[#42D732]"></div>
                  <div>
                    <h1 className="font-bold text-lg">Satisfactory</h1>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[100px] h-[20px] bg-[#FD4513]"></div>
                  <div>
                    <h1 className="font-bold text-lg">
                      With Serious Defeciencies
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[100px] h-[20px] bg-[#F8C20A]"></div>
                  <div>
                    <h1 className="font-bold text-lg">Minor Defeciencies</h1>
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
    </div>
  );
};

export default ProjectManagement;
