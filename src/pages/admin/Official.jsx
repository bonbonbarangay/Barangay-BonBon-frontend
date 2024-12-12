import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import OfficialHook from "../../hooks/official/Official";
import CreateOfficialModal from "../../components/modal/CreateOfficialModal";
import UpdateOfficialModal from "../../components/modal/UpdateOfficialModal";
import { Toaster } from "react-hot-toast";
import { handleInvalid } from "../../components/toastify/Toastify";

const Official = () => {
  const [open, setOpen] = useState(false);
  const [activeData, setActiveData] = useState(null);
  const [updateOpen, setUpdateOpen] = useState(false);

  const {
    handleCreateOfficial,
    isError,
    isLoading,
    data,
    mutation,
    handleUpdateOfficial,
    updateMutation,
    handleDelete,
    deleteMutation,
  } = OfficialHook();

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseUpdate = () => {
    setUpdateOpen(false);
  };
  const deleteData = () => {
    if (activeData == null) {
      handleInvalid("Pls Select Before Delete");
      return;
    }
    handleDelete(activeData);
    setActiveData(null);
  };
  const handleUpdateData = () => {
    if (activeData == null) {
      handleInvalid("Pls Select Before Update");
      return;
    }
    setUpdateOpen(true);
  };
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
                  <button
                    className="bg-green-500	 px-2 py-1 text-lg font-semibold"
                    onClick={() => setOpen(true)}
                  >
                    Add
                  </button>
                </div>
                <div>
                  <button
                    className="bg-orange-500	 px-2 py-1 text-lg font-semibold"
                    onClick={handleUpdateData}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <button
                    className="bg-red-500	 px-2 py-1 text-lg font-semibold"
                    onClick={deleteData}
                    disabled={deleteMutation.isPending}
                  >
                    {deleteMutation.isPending ? "Loading" : "Delete"}
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

              <div className=" h-[70vh]  overflow-auto">
                {data?.map((item, index) => (
                  <div
                    className={`${
                      activeData?.id === item.id ? "bg-[#DEE5F8]" : "bg-[#fff]"
                    } grid grid-cols-4 gap-4 py-2 px-2 place-items-center mt-5 hover:bg-[#DEE5F8] cursor-pointer`}
                    key={index}
                    onClick={() => setActiveData(item)}
                  >
                    <div>
                      <h1 className="text-lg font-medium text-center">
                        {item.fullname}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-lg font-medium text-center">
                        {item.position}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-lg font-medium text-center">
                        {item.type}
                      </h1>
                    </div>
                    <div>
                      <img
                        src={item.image}
                        className="w-[50px] h-[50px]"
                        alt={item.fullname}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CreateOfficialModal
          open={open}
          handleClose={handleClose}
          handleCreateOfficial={handleCreateOfficial}
          mutation={mutation}
        />

        <UpdateOfficialModal
          updateOpen={updateOpen}
          handleCloseUpdate={handleCloseUpdate}
          activeData={activeData}
          handleUpdateOfficial={handleUpdateOfficial}
          updateMutation={updateMutation}
          setActiveData={setActiveData}
        />
      </div>

      <Toaster />
    </div>
  );
};

export default Official;
