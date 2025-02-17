import React from "react";
import Sidebar from "../../components/admin/Sidebar";
import { useState } from "react";
import PendingModal from "../../components/modal/PendingModal";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
import ViewResidentModal from "../../components/modal/ViewResidentModal";
import { Toaster } from "react-hot-toast";
import Pdf from "../../components/admin/Pdf";
import { pdf } from "@react-pdf/renderer";
import FormStatusHook from "../../hooks/formstatus/FormStatus";
const ManageResident = () => {
  const [search, setSearch] = useState("");
  const [pendingOpen, setPendingOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const { handleUpdateFormData } = FormStatusHook();
  const {
    data,
    isLoading,
    handleView,
    houseHold,
    houseMembers,
    handleDelete,
    deleteByUserIdMutation,
  } = HouseHoldHook();
  const handlePendingClose = () => {
    setPendingOpen(false);
  };
  const handleViewClose = () => {
    setViewOpen(false);
  };

  const handleViewOpen = (userid) => {
    handleView(userid);
    setViewOpen(true);
  };
  const deleteForm = (data) => {
    handleDelete(data);
    const dataForm = {
      userid: data.userid,
      status: "delete",
    };
    handleUpdateFormData(dataForm);
  };
  const handleOpenPDF = async () => {
    const blob = await pdf(<Pdf data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url);
  };
  return (
    <div className="w-full ">
      <div className="h-[10vh] w-full bg-[#76A0EE]"></div>
      <div className="flex w-full">
        <div className="w-[20%] h-auto">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#DEE5F8] ">
          <div className="py-3 px-3 w-full">
            <div>
              <h1 className="text-right text-xl font-semibold">
                Manage Resident
              </h1>
            </div>

            <div className="mt-5">
              <div>
                <button
                  className="bg-red-500 px-2 py-2 font-semibold text-xl w-[150px] rounded-lg text-[#fff]"
                  onClick={() => setPendingOpen(true)}
                >
                  Pending
                </button>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div>
                  <div>
                    <button
                      className="text-lg font-semibold bg-[#EFEFEF] border border-[#000]  px-1 w-[70px]"
                      onClick={handleOpenPDF}
                    >
                      PDF
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
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="w-[250px] py-2 px-2  border border-[#000] placeholder:text-[#000] outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 ">
                <div className="container mx-auto p-4">
                  <div className="border border-gray-500 max-h-[60vh] overflow-y-auto">
                    <table className="table-auto w-full border-collapse">
                      <thead className="sticky top-0 z-10">
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
                            Address
                          </th>
                          <th className="border border-gray-500 px-4 py-2 text-center">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td colSpan="5" className="text-center py-4">
                              Loading...
                            </td>
                          </tr>
                        ) : (
                          data
                            .filter((item) => !item.pending)
                            .filter((item) => {
                              const fullName =
                                `${item.firstnamehead1} ${item.lastnamehead1}`.toLowerCase();
                              const zone = item.addresshead1.toLowerCase();
                              const searchQuery = search.toLowerCase();

                              return (
                                fullName.includes(searchQuery) ||
                                zone.includes(searchQuery)
                              );
                            })
                            .map((item) => (
                              <tr key={item.id} className="hover:bg-gray-100">
                                <td className="border border-gray-500 px-4 py-2 text-center">
                                  {item.firstnamehead1} {item.lastnamehead1}
                                </td>
                                <td className="border border-gray-500 px-4 py-2 text-center">
                                  {item.genderhead1}
                                </td>
                                <td className="border border-gray-500 px-4 py-2 text-center">
                                  {item.dateofbirthhead1}
                                </td>
                                <td className="border border-gray-500 px-4 py-2 text-center">
                                  {item.addresshead1}
                                </td>
                                <td className="border border-gray-500 px-4 py-2 text-center">
                                  <button
                                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
                                    onClick={() => handleViewOpen(item.userid)}
                                  >
                                    View
                                  </button>
                                  <button
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                    disabled={deleteByUserIdMutation.isPending}
                                    onClick={() => deleteForm(item)}
                                  >
                                    {deleteByUserIdMutation.isPending
                                      ? "Loading"
                                      : "Delete"}
                                  </button>
                                </td>
                              </tr>
                            ))
                        )}

                        {!isLoading &&
                          data.filter((item) => {
                            const fullName =
                              `${item.firstnamehead1} ${item.lastnamehead1}`.toLowerCase();
                            const zone = item.addresshead1.toLowerCase();
                            const searchQuery = search.toLowerCase();

                            return (
                              !item.pending &&
                              (fullName.includes(searchQuery) ||
                                zone.includes(searchQuery))
                            );
                          }).length === 0 && (
                            <tr>
                              <td colSpan="5" className="text-center py-4">
                                No results found.
                              </td>
                            </tr>
                          )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PendingModal
        handlePendingClose={handlePendingClose}
        pendingOpen={pendingOpen}
        data={data}
      />
      <ViewResidentModal
        handleViewClose={handleViewClose}
        viewOpen={viewOpen}
        houseHold={houseHold}
        houseMembers={houseMembers}
      />
      <Toaster />
    </div>
  );
};

export default ManageResident;
