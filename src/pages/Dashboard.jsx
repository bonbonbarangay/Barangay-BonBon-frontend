import React from "react";
import image1 from "../assets/annoucement-img1.png";
import image2 from "../assets/annoucement-img2.png";
import RightBar from "../components/user/RightBar";
import EventHook from "../hooks/event/Event";
const Dashboard = () => {
  const { data } = EventHook();
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
                {data?.map((item) => (
                  <div className="bg-[#DEE5F8] py-4 px-4 w-[90%] flex items-center gap-5">
                    <div className="w-[50%]">
                      <img
                        src={item.image}
                        className="w-full h-[150px] object-cover"
                      />
                    </div>
                    <div className="w-[50%]">
                      <div>
                        <h1>{item.description}</h1>
                      </div>
                      <div className="mt-5">
                        <h1>
                          <span className="font-semibold">TITLE: </span>
                          {item.title}
                        </h1>
                        <h1>
                          <span className="font-semibold">WHERE: </span>
                          {item.location}
                        </h1>

                        <h1>
                          <span className="font-semibold">DATE: </span>
                          {item.date}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
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
