import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
const PendingModal = ({ pendingOpen, handlePendingClose }) => {
  const {
    data,
    isError,
    isLoading,
    handleAcceptPending,
    acceptPendingMutation,
    houseHold,
  } = HouseHoldHook();
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
                    <thead className=" sticky top-0 z-10">
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
                                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700 mr-2"
                                  disabled={acceptPendingMutation.isPending}
                                  onClick={() => handleAcceptPending(item.id)}
                                >
                                  {acceptPendingMutation.isPending
                                    ? "Loading"
                                    : "Accept"}
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
    </div>
  );
};

export default PendingModal;
