import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const CreateEventModal = ({ open, handleClose }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const formatDate = (date) => {
    return date ? date.format("MM-DD-YYYY") : "";
  };
  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <Typography>
                <div className="mt-3">
                  <div>
                    <p className="text-xl text-[#b3b3b3]">Title *</p>
                  </div>
                  <div>
                    <input
                      placeholder="Enter your Event"
                      type="text"
                      className="w-full mt-3 bg-[#e5e5e5] text-[#111111] px-4 py-4 border border-[#e5e5e5] outline-none rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer
                        components={[
                          "DatePicker",
                          "MobileDatePicker",
                          "DesktopDatePicker",
                          "StaticDatePicker",
                        ]}
                      >
                        <DemoItem>
                          <div>
                            <p className="text-xl text-[#b3b3b3]">Date *</p>
                          </div>
                          <MobileDatePicker
                            value={selectedDate}
                            onChange={handleDateChange}
                          />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                  <div className="flex items-end justify-end mt-4">
                    <div className="flex items-center gap-5">
                      <button
                        className="bg-[#EFEFEF] px-3 w-[150px] py-3 text-base text-black rounded-md border border-[#000]"
                        onClick={handleClose}
                      >
                        Close
                      </button>
                      <button className="bg-[#3C7FFF] px-3 w-[150px] py-3 text-base text-black rounded-md">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Typography>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CreateEventModal;
