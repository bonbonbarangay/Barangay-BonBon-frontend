import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ViewResidentModal from "./ViewResidentModal";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
import FormStatusHook from "../../hooks/formstatus/FormStatus";
import EmailNotificationHook from "../../hooks/emailNotification/EmailNotification";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};

const PendingModal = ({ pendingOpen, handlePendingClose }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const { handleUpdateFormData } = FormStatusHook();
  const { handleNotification } = EmailNotificationHook();
  const {
    data,
    isError,
    isLoading,
    handleAcceptPending,
    acceptPendingMutation,
    houseHold,
    houseMembers,
    viewByUserIdMutation,
    deleteByUserIdMutation,
    handleDelete,
    handleView,
  } = HouseHoldHook();

  const handleViewClose = () => {
    setViewOpen(false);
  };

  const handleViewOpen = (userid) => {
    handleView(userid);
    setViewOpen(true);
  };
  const deleteForm = (data) => {
    const notificationData = {
      userid: data.userid,
      status: "Decline",
    };
    handleNotification(notificationData);
    const dataForm = {
      userid: data.userid,
      status: "decline",
    };
    handleUpdateFormData(dataForm);
    handleDelete(data);
  };
  const handleAccept = (userdata) => {
    const notificationData = {
      userid: userdata?.userid,
      status: "Accepted",
    };
    handleNotification(notificationData);
    const dataForm = {
      userid: userdata.userid,
      status: "sucess",
    };
    handleUpdateFormData(dataForm);
    handleAcceptPending(userdata.id);
  };
  return (
    <div>
      <Modal
        open={pendingOpen}
        onClose={handlePendingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handlePendingClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-2xl "
                >
                  <path
                    fill="currentColor"
                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full mt-5">
              <div className="container mx-auto p-4">
                <div className="border border-gray-500 max-h-[60vh] overflow-y-auto">
                  <table className="table-auto w-full border-collapse">
                    <thead className="  top-0 z-10">
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
                          .filter((item) => item.pending === true)
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
                                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 mr-2"
                                  onClick={() => handleViewOpen(item.userid)}
                                >
                                  View
                                </button>
                                <button
                                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
                                  disabled={acceptPendingMutation.isPending}
                                  onClick={() => handleAccept(item)}
                                >
                                  {acceptPendingMutation.isPending
                                    ? "Loading"
                                    : "Accept"}
                                </button>
                                <button
                                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                                  disabled={deleteByUserIdMutation.isPending}
                                  onClick={() => deleteForm(item)}
                                >
                                  {deleteByUserIdMutation.isPending
                                    ? "Loading"
                                    : "Decline"}
                                </button>
                              </td>
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>

      <ViewResidentModal
        viewOpen={viewOpen}
        handleViewClose={handleViewClose}
        houseMembers={houseMembers}
        houseHold={houseHold}
      />
    </div>
  );
};

export default PendingModal;
