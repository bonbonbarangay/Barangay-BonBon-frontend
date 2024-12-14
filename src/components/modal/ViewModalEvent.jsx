import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
const ViewModalEvent = ({ viewOpen, handleViewClose, eventData }) => {
  return (
    <div>
      <Modal
        open={viewOpen}
        onClose={handleViewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handleViewClose}
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
              <div className="w-full">
                <img
                  src={eventData?.image}
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="mt-5 w-full">
                <h1 className="text-center line-clamp-5">
                  {eventData?.description}
                </h1>
              </div>

              <div className="mt-5">
                <h1>
                  <span className="font-semibold">TITLE: </span>
                  {eventData?.title}
                </h1>
                <h1>
                  <span className="font-semibold">WHERE: </span>
                  {eventData?.location}
                </h1>
                <h1>
                  <span className="font-semibold">DATE: </span>
                  {eventData?.date}
                </h1>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewModalEvent;
