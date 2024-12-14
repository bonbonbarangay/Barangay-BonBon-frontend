import React from "react";
import RightBar from "../components/user/RightBar";
import EventHook from "../hooks/event/Event";
const Dashboard = () => {
  const { data } = EventHook();
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5  max-lg:flex-col">
        <div className="w-[70%]  max-lg:w-[100%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                ANNOUNCEMENTS AND EVENTS
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] max-md:w-full max-md:px-5 w-[90%]  max-lg:w-full max-lg py-5 px-10 mt-5 border-2 border-[#000]  max-h-[100vh] overflow-y-auto max-lg:max-h-[60vh]">
                {data?.map((item) => (
                  <div className="bg-[#DEE5F8] py-5 mt-2 px-4 w-full flex  gap-5 max-sm:flex-col ">
                    <div className="w-[50%] flex items-center justify-center max-sm:w-full">
                      <img
                        src={item.image}
                        className="w-[85%] h-[200px] object-center max-md:h-[180px] max-sm:w-full  max-sm:h-[150px]"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-full">
                      <div className="w-full">
                        <h1 className="w-full line-clamp-7 max-md:text-sm	 max-sm:text-xs max-sm:text-center">
                          {item.description}
                        </h1>
                      </div>
                      <div className="mt-5">
                        <h1 className=" max-md:text-base max-sm:text-xs">
                          <span className="font-semibold  ">TITLE: </span>
                          {item.title}
                        </h1>
                        <h1 className=" max-md:text-base max-sm:text-xs">
                          <span className="font-semibold  ">WHERE: </span>
                          {item.location}
                        </h1>
                        <h1 className=" max-md:text-base max-sm:text-xs">
                          <span className="font-semibold  ">DATE: </span>
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
        <div className="w-[30%] border-2 border-[#000] max-lg:border-none max-lg:w-[100%]">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
