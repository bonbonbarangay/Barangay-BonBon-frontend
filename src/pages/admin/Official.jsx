import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

const Official = () => {
  const [users, _] = useState([
    {
      id: 1,
      name: "Hon. Lelit B. Molina",
      position: "Punong Barangay",
      Officialtype: "Punong Barangay",
    },

    {
      id: 2,
      name: "Hon. Lope Q. Matildo",
      position: "Kagawad",
      Officialtype: "Infrastructure and Chairman of Bids and Committee",
    },
    {
      id: 3,
      name: "Hon. Jack Lynne B. Merto",
      position: "Kagawad",
      Officialtype: "Finance and Health",
    },
    {
      id: 4,
      name: "Hon. Norberta L. Baslot",
      position: "Kagawad",
      Officialtype: "BCPCA",
    },
    {
      id: 5,
      name: "Hon. Jerome L. Sambaan",
      position: "Kagawad",
      Officialtype: "Fisher Folks, Environment and Sanitation",
    },

    {
      id: 6,
      name: "Hon. Irvin Paul D. Paasa",
      position: "Kagawad",
      Officialtype: "Transportation and Peace and Order",
    },
  ]);
  return (
    <div className="w-full ">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full ">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#DEE5F8]">
          <div className="px-5 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <div>
                  <button className="bg-green-500	 px-2 py-1 text-lg font-semibold">
                    Add
                  </button>
                </div>
                <div>
                  <button className="bg-orange-500	 px-2 py-1 text-lg font-semibold">
                    Update
                  </button>
                </div>
                <div>
                  <button className="bg-red-500	 px-2 py-1 text-lg font-semibold">
                    Delete
                  </button>
                </div>
              </div>
              <div>
                <h1 className=" text-xl font-semibold">Barangay Officials</h1>
              </div>
            </div>
            <div className="mt-10 w-full bg-[#B1C7F4]  border border-[#000]">
              <div className="grid grid-cols-4 gap-4  place-items-center px-2 py-2 ">
                <div>
                  <h1 className="text-lg font-bold">Full Name</h1>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Position</h1>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Official Type</h1>
                </div>
                <div>
                  <h1 className="text-lg font-bold">Image</h1>
                </div>
              </div>

              <div className=" h-[65vh]  overflow-auto">
                {users.map((item, index) => (
                  <div
                    className="bg-[#fff] grid grid-cols-4 gap-4 py-2 px-2 place-items-center mt-5 h-20"
                    key={index}
                  >
                    <div>
                      <h1 className="text-lg font-medium text-center">
                        {item.name}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-lg font-medium text-center">
                        {item.position}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-lg font-medium text-center">
                        {item.Officialtype}
                      </h1>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="text-4xl"
                      >
                        <path
                          fill="currentColor"
                          d="m8.5 13.5l2.5 3l3.5-4.5l4.5 6H5m16 1V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2"
                        />
                      </svg>
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

export default Official;
