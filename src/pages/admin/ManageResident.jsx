import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useState } from "react";
const ManageResident = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  const data = [
    {
      id: 1,
      fullName: "John Doe",
      gender: "Male",
      birthday: "1990-01-01",
      houseNo: "123",
      purok: "Zone 1",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      gender: "Female",
      birthday: "1992-05-15",
      houseNo: "456",
      purok: "Zone 2",
    },
    {
      id: 3,
      fullName: "Mark Taylor",
      gender: "Male",
      birthday: "1988-03-10",
      houseNo: "789",
      purok: "Zone 3",
    },
    {
      id: 4,
      fullName: "Lucy Gray",
      gender: "Female",
      birthday: "1995-11-23",
      houseNo: "101",
      purok: "Zone 4",
    },
    {
      id: 5,
      fullName: "Liam Brown",
      gender: "Male",
      birthday: "1985-08-18",
      houseNo: "202",
      purok: "Zone 5",
    },
    {
      id: 6,
      fullName: "Emma White",
      gender: "Female",
      birthday: "1998-06-30",
      houseNo: "303",
      purok: "Zone 6",
    },
    {
      id: 7,
      fullName: "Emma White",
      gender: "Female",
      birthday: "1998-06-30",
      houseNo: "303",
      purok: "Zone 6",
    },
  ];
  return (
    <div className="w-full ">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#DEE5F8]">
          <div className="py-3 px-3 w-full">
            <div>
              <h1 className="text-right text-xl font-semibold">
                Manage Resident
              </h1>
            </div>

            <div className="mt-5">
              <div>
                <button className="bg-[#1FAF10] px-2 py-2 font-semibold text-xl w-[150px] rounded-lg text-[#fff]">
                  Pending
                </button>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center justify-center gap-10">
                  <div>
                    <button className="text-lg font-semibold bg-[#EFEFEF] border border-[#000]  px-1 w-[70px]">
                      PDF
                    </button>
                  </div>
                  <div>
                    <button className="text-lg font-semibold bg-[#EFEFEF] border border-[#000]  px-1 w-[70px]">
                      EXCEL
                    </button>
                  </div>
                  <div>
                    <button className="text-lg font-semibold bg-[#EFEFEF] border border-[#000]  px-1 w-[70px]">
                      PRINT
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-[10px] z-20 px-2 right-0 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      className="text-2xl"
                    >
                      <path
                        fill="currentColor"
                        d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="search"
                      className="w-[250px] py-2 px-2  border border-[#000] placeholder:text-[#000] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <div className="container mx-auto p-4">
                  <div className="border border-gray-500 overflow-hidden">
                    <table className="table-auto w-full border-collapse">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            Full Name
                          </th>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            Gender
                          </th>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            Birthday
                          </th>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            House No.
                          </th>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            Purok/Zone
                          </th>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="overflow-y-auto max-h-[50vh]">
                        {data.map((item) => (
                          <tr key={item.id} className="hover:bg-gray-100">
                            <td className="border border-gray-500 px-4 py-2 text-center">
                              {item.fullName}
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-center">
                              {item.gender}
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-center">
                              {item.birthday}
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-center">
                              {item.houseNo}
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-center">
                              {item.purok}
                            </td>
                            <td className="border border-gray-500 px-4 py-2 text-center">
                              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2">
                                Edit
                              </button>
                              <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2">
                                View
                              </button>
                              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className=" ml-5 flex items-center gap-5 relative">
              <div>
                <h1 className="text-lg">Show</h1>
              </div>
              <div>
                <select
                  id="dropdown"
                  value={selectedValue}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="option1">5</option>
                  <option value="option2">Option 6</option>
                  <option value="option3">Option 7</option>
                </select>
              </div>
              <div>
                <h1 className="text-lg">Entries</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageResident;
