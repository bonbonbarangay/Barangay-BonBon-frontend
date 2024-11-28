import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ViewModalEvent from "./ViewModalEvent";
import { style } from "../../utils/style";
import UpdateEventModal from "./UpdateEventModal";
const OptionModal = ({ openOption, handleCloseOption, eventData }) => {
  const [viewOpen, setViewOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  const handleViewClose = () => {
    setViewOpen(false);
  };
  const handleViewOpen = () => {
    handleCloseOption();
    setViewOpen(true);
  };
  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };
  const handleUpdateOpen = () => {
    handleCloseOption();
    setUpdateOpen(true);
  };

  return (
    <div>
      <div>
        <Modal
          open={openOption}
          onClose={handleCloseOption}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography>
              <div className="flex items-end justify-end  py-2">
                <div
                  className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                  onClick={handleCloseOption}
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

              <div className="mt-5">
                <div className="flex items-center justify-evenly">
                  <div>
                    <button
                      className="text-lg font-semibold px-3 py-3 bg-blue-500 text-white rounded w-[150px]"
                      onClick={handleUpdateOpen}
                    >
                      Edit
                    </button>
                  </div>
                  <div>
                    <button
                      className="text-lg font-semibold px-3 py-3 bg-green-500 text-white rounded w-[150px]"
                      onClick={handleViewOpen}
                    >
                      View
                    </button>
                  </div>
                  <div>
                    <button className="text-lg font-semibold px-3 py-3 bg-red-500 text-white rounded w-[150px]">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      <ViewModalEvent
        handleViewClose={handleViewClose}
        viewOpen={viewOpen}
        eventData={eventData}
      />
      <UpdateEventModal
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        eventData={eventData}
      />
    </div>
  );
};

export default OptionModal;
