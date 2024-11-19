import React from "react";
import image1 from "../assets/annoucement-img1.png";
import image2 from "../assets/annoucement-img2.png";
import RightBar from "../components/user/RightBar";

const Dashboard = () => {
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5">
        <div className="w-[70%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold">
                ANNOUNCEMENTS AND EVENTS
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] h-auto py-5 px-10 mt-5 border-2 border-[#000] ">
                <div className="bg-[#DEE5F8] py-4 px-4 w-[80%] flex items-center gap-5">
                  <div className="w-full">
                    <img src={image1} className="w-[230px] h-[140px]" />
                  </div>

                  <div>
                    <h1 cl>
                      Notice to all, from Barangay Bonbon, we will have a
                      Phil-Health Card Distrubution Tonight- Coming April
                      26,2018 (Thursday), we will start at 9:00am - 5:00pm at
                      the Barangay Hall
                    </h1>
                  </div>
                </div>

                <div className="bg-[#DEE5F8] py-4 px-4 w-[80%] flex items-center gap-5 mt-5">
                  <div className="w-full">
                    <img src={image2} className="w-[230px] h-[140px]" />
                  </div>

                  <div>
                    <h1 cl>
                      Notice to all, from Barangay Bonbon, we will have a
                      Phil-Health Card Distrubution Tonight- Coming April
                      26,2018 (Thursday), we will start at 9:00am - 5:00pm at
                      the Barangay Hall
                    </h1>
                  </div>
                </div>
                <div className="bg-[#DEE5F8] py-4 px-4 w-[80%] flex items-center gap-5 mt-5">
                  <div className="w-full">
                    <img src={image1} className="w-[230px] h-[140px]" />
                  </div>

                  <div>
                    <h1 cl>
                      Notice to all, from Barangay Bonbon, we will have a
                      Phil-Health Card Distrubution Tonight- Coming April
                      26,2018 (Thursday), we will start at 9:00am - 5:00pm at
                      the Barangay Hall
                    </h1>
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

export default Dashboard;
