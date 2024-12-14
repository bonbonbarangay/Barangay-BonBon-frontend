import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
const ViewOfficialModal = ({
  handleCloseViewOfficial,
  viewOfficial,
  OfficialData,
  title,
  getOfficialByPositionMutation,
}) => {
  return (
    <div>
      <Modal
        open={viewOfficial}
        onClose={handleCloseViewOfficial}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handleCloseViewOfficial}
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
            <div>
              <div>
                <h1 className="text-center text-xl font-bold">{title}</h1>
              </div>

              {getOfficialByPositionMutation.isPending ? (
                ""
              ) : (
                <div className="max-h-[70vh] overflow-x-auto px-3 py-5">
                  {OfficialData?.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
                      {OfficialData.map((item, index) => (
                        <div
                          key={index}
                          className="w-full max-w-xs bg-[#76A0EE] rounded-lg shadow-md p-4"
                        >
                          <div>
                            <img
                              src={item.image}
                              className="w-full h-[150px] object-cover rounded-t-lg"
                            />
                          </div>
                          <div className="mt-3">
                            <h2 className="text-sm font-semibold  text-white">
                              Fullname: {item.fullname || "N/A"}
                            </h2>
                            <p className="text-white mt-1">
                              Position: {item.position || "N/A"}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-gray-600">
                      No officials found.
                    </p>
                  )}
                </div>
              )}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewOfficialModal;
