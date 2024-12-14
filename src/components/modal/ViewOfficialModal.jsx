import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: 3,
};

const ViewOfficialModal = ({
  handleCloseViewOfficial,
  viewOfficial,
  OfficialData,
  title,
  getOfficialByPositionMutation,
}) => {
  return (
    <Modal
      open={viewOfficial}
      onClose={handleCloseViewOfficial}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>
          <div className="flex items-end justify-end py-2">
            <div
              className="bg-gray-200 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer"
              onClick={handleCloseViewOfficial}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl"
              >
                <path
                  fill="currentColor"
                  d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                />
              </svg>
            </div>
          </div>

          {getOfficialByPositionMutation.isPending ? (
            ""
          ) : (
            <div className="max-h-[70vh] overflow-y-auto px-3 py-2 max-md:max-h-[60vh]">
              <div>
                <h1 className="text-center text-lg font-bold  max-sm:text-base">
                  {title}
                </h1>
              </div>
              {OfficialData?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center mt-5">
                  {OfficialData.map((item, index) => (
                    <div
                      key={index}
                      className="w-full max-w-xs bg-[#76A0EE] rounded-lg shadow-md p-4"
                    >
                      <img
                        src={item.image}
                        alt="Official"
                        className="w-full h-auto max-h-[150px] sm:max-h-[200px] rounded-t-lg"
                      />
                      <div className="mt-3">
                        <h2 className="text-sm font-semibold text-white sm:text-base">
                          Fullname: {item.fullname || "N/A"}
                        </h2>
                        <p className="text-white mt-1 text-sm sm:text-base">
                          Position: {item.position || "N/A"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600">No officials found.</p>
              )}
            </div>
          )}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ViewOfficialModal;
