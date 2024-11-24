import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import CalendarSchedule from "../../components/admin/CalendarSchedule";
import EventHook from "../../hooks/event/Event";
import CreateEventModal from "../../components/modal/createEventModal";
const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date()); // State to track the current month and year
  const { handleCreateEvent, data } = EventHook();
  const days = ["Sunday", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="w-full h-screen ">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#DEE5F8]">
          <div className="px-5 py-3">
            <div className="flex items-end justify-end">
              <h1 className="text-2xl font-semibold ">Dashboard</h1>
            </div>
          </div>
          <div className="w-full bg-[#76A0EE]  px-3 py-3">
            <div className="bg-[#FFFBFB] py-3 px-3 w-fit">
              <div className="flex items-center gap-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    className="text-5xl"
                  >
                    <path
                      fill="currentColor"
                      d="M24 7.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M18 11a6 6 0 1 1 12 0a6 6 0 0 1-12 0m19-1.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M32 12a5 5 0 1 1 10 0a5 5 0 0 1-10 0M8.5 12a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M11 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m4 16.25A4.25 4.25 0 0 1 19.25 19h9.5A4.25 4.25 0 0 1 33 23.25V34a9 9 0 1 1-18 0zm9 17.25a6.5 6.5 0 0 0 6.5-6.5V23.25a1.75 1.75 0 0 0-1.75-1.75h-9.5a1.75 1.75 0 0 0-1.75 1.75V34a6.5 6.5 0 0 0 6.5 6.5m-13-3a4.5 4.5 0 0 0 2.367-.672c.219.826.532 1.613.926 2.35A7 7 0 0 1 4 33v-9.749A4.25 4.25 0 0 1 8.25 19h5.5q.433.001.841.083a6.24 6.24 0 0 0-1.343 2.417H8.25a1.75 1.75 0 0 0-1.75 1.75V33a4.5 4.5 0 0 0 4.5 4.5M37 40a7 7 0 0 1-3.293-.821c.394-.738.707-1.525.926-2.351A4.5 4.5 0 0 0 41.5 33v-9.75a1.75 1.75 0 0 0-1.75-1.75h-4.998a6.24 6.24 0 0 0-1.344-2.417q.41-.082.842-.083h5.5A4.25 4.25 0 0 1 44 23.25V33a7 7 0 0 1-7 7"
                    />
                  </svg>
                </div>

                <div>
                  <h1 className="text-xl font-semibold">TOTAL RESIDENT</h1>
                  <h1 className="text-xl font-semibold text-center">14,000</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex  w-full">
            <div className="w-[60%] pl-3">
              <div className="bg-[#F0F0F0] ">
                <div className="flex items-center justify-between  px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className=" border-2 border-[#000] px-1 py-1  cursor-pointer"
                      onClick={handlePrevMonth}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.78em"
                        height="1em"
                        viewBox="0 0 16 9"
                        className="text-sm"
                      >
                        <path
                          fill="currentColor"
                          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
                        />
                        <path
                          fill="currentColor"
                          d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
                        />
                      </svg>
                    </div>

                    <div
                      className=" border-2 border-[#000] px-1 py-1 cursor-pointer"
                      onClick={handleNextMonth}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.78em"
                        height="1em"
                        viewBox="0 0 16 9"
                        className="text-sm"
                      >
                        <path
                          fill="currentColor"
                          d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
                        />
                        <path
                          fill="currentColor"
                          d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold">
                      {currentMonth} <span>{currentYear}</span>
                    </h1>
                  </div>
                  <div className="flex items-center gap-2  border-2 border-[#000] px-1 py-1  cursor-pointer">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-xl"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="m19 9l-7 6l-7-6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">Filter</h1>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1  p-2 rounded">
                  {days.map((day, index) => (
                    <div
                      key={index}
                      className="text-center font-medium text-gray-600"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div>
                  <div>
                    <CalendarSchedule data={data} currentDate={currentDate} />
                  </div>
                </div>
              </div>
              <div
                className="flex items-end justify-end px-3 mt-3 "
                onClick={() => setOpen(true)}
              >
                <button className="bg-[#76A0EE] px-2 py-2 font-semibold rounded-lg">
                  Create Event
                </button>
              </div>
            </div>
            <div className="w-[40%]  px-3 ">
              <div className=" border-2 border-[#000] ">
                <div className="w-full bg-[#76A0EE]">
                  <h1 className="text-2xl font-bold text-center">
                    BARANGAY COUNCIL
                  </h1>
                </div>
                <div className="px-2 py-2">
                  <div className="h-[280px]  overflow-auto">
                    <div>
                      <h1 className="text-xl  text-center">Punong Barangay</h1>
                      <h1 className="text-xl text-center">
                        Hon. Lelit B. Molina
                      </h1>
                    </div>
                    <div className="mt-5 flex items-center justify-center  w-full">
                      <div className="w-[50%]">
                        <h1 className="text-lg">Barangay Kagawad</h1>
                        <h1 className="text-lg">Hon. Lope Q. Matildo</h1>
                      </div>
                      <div className="w-[50%]">
                        <h1 className="text-lg">Infrastructure and Chairman</h1>
                        <h1 className="text-lg"> of Bids of Committee</h1>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center  w-full">
                      <div className="w-[50%]">
                        <h1 className="text-lg">Barangay Kagawad</h1>
                        <h1 className="text-lg">Hon. Jack Lynne B. Merto</h1>
                      </div>
                      <div className="w-[50%]">
                        <h1 className="text-lg text-left">
                          Finance and Health
                        </h1>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-center  w-full">
                      <div className="w-[50%]">
                        <h1 className="text-lg">Barangay Kagawad</h1>
                        <h1 className="text-lg">Hon. Norberta L. Baslot</h1>
                      </div>
                      <div className="w-[50%]">
                        <h1 className="text-lg text-left">
                          Women's and Solo Parents, BCPCT
                        </h1>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center  w-full">
                      <div className="w-[50%]">
                        <h1 className="text-lg">Barangay Kagawad</h1>
                        <h1 className="text-lg">Hon. Jerome L. Sambaan</h1>
                      </div>
                      <div className="w-[50%]">
                        <h1 className="text-lg text-left">
                          Fisher, Folks, Environment and Sanitation
                        </h1>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-center  w-full">
                      <div className="w-[50%]">
                        <h1 className="text-lg">Barangay Kagawad</h1>
                        <h1 className="text-lg">Hon. Irvin Paul D. Paasa</h1>
                      </div>
                      <div className="w-[50%]">
                        <h1 className="text-lg text-left"></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 mt-5 w-full">
                <div className="w-[50%]">
                  <div>
                    <button className="bg-[#FFFBFB] px-3 py-3 rounded-lg">
                      View Sanguniang Kabataan
                    </button>
                  </div>

                  <div className="mt-3">
                    <button className="bg-[#FFFBFB] px-3 py-3 rounded-lg">
                      View Lupon Members
                    </button>
                  </div>
                </div>
                <div className="w-[50%]">
                  <div className="border-2 border-[#000] w-auto">
                    <div className="w-full bg-[#76A0EE] flex py-1">
                      <div className="flex-1 px-2">
                        <h1>Purok/ Zone</h1>
                      </div>

                      <div className="border-l-2 border-[#000]"></div>

                      <div className="flex-1 px-2">
                        <h1>Population</h1>
                      </div>
                    </div>

                    <div className="w-full bg-[#FFFBFB] flex ">
                      <div className="flex-1 px-2">
                        <h1>Zone 1</h1>
                        <h1>Zone 2</h1>
                        <h1>Zone 3</h1>
                      </div>

                      <div className="border-l-2 border-[#000] "></div>

                      <div className="flex-1 px-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CreateEventModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminDashboard;
