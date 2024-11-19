import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

const Pending = () => {
  const [users, _] = useState([
    {
      id: 1,
      name: "Jessa Mae O Betita",
      document: "View Profiling",
      pending: true,
    },

    {
      id: 2,
      name: "JNiece Joy Bachinicha",
      document: "View Profiling",
      pending: false,
    },
    {
      id: 3,
      name: "Lalaine Delarmente",
      document: "View Profiling",
      pending: true,
    },
    {
      id: 4,
      name: "JNiece Joy Bachinicha",
      document: "View Profiling",
      pending: false,
    },
    {
      id: 5,
      name: "kirk Eric Garcia",
      document: "View Profiling",
      pending: true,
    },

    {
      id: 6,
      name: "Gil Luther Magdugo",
      document: "View Profiling",
      pending: false,
    },

    {
      id: 6,
      name: "Robert Asenas",
      document: "View Profiling",
      pending: false,
    },
  ]);
  return (
    <div className="w-full h-screen bg-[#FFFBFB]">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex  w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%]">
          <div className="px-5 py-3">
            <div className="flex items-end justify-end">
              <button className="px-3 py-2 bg-[#EB1B1B] text-center text-white rounded-lg text-xl ">
                PENDING
              </button>
            </div>
            <div className="mt-5 w-full ">
              <div className="grid grid-cols-4 gap-4 border-b-2 pb-2 place-items-center">
                <div>
                  <h1 className="text-lg font-bold">Household Head</h1>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Document</h1>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Approved</h1>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Reject</h1>
                </div>
              </div>

              <div className="mt-5">
                {users.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 py-2 border-b place-items-center"
                  >
                    <div>
                      <h1 className="text-lg font-medium">{item.name}</h1>
                    </div>
                    <div>
                      <h1 className="text-lg font-medium">{item.document}</h1>
                    </div>
                    <div>
                      {item.pending ? (
                        <div className="w-[50px] h-[30px] border-2 border-[#000] flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            className="text-2xl"
                          >
                            <path
                              fill="currentColor"
                              d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-[50px] h-[30px] border-2 border-[#000]"></div>
                      )}
                    </div>
                    <div>
                      <div className="w-[50px] h-[30px] border-2 border-[#000]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pending;
