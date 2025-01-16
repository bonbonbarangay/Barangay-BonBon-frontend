import React from "react";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { style } from "../../utils/style";

const CreateEventModal = ({
  open,
  handleClose,
  handleCreateEvent,
  mutation,
}) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const fileInputRef = useRef(null);
  const handleFileChangePhoto = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleIconClick = () => {
    fileInputRef.current.click();
  };
  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const formatDate = (date) => {
    return date ? date.format("MM/DD/YYYY") : "";
  };

  const createEvent = () => {
    handleCreateEvent({
      title: title,
      date: formatDate(selectedDate),
      description: description,
      location: location,
      image: photo,
    });
    setTitle("");
    setDescription("");
    setLocation("");
    setPhoto("");
    handleClose();
  };
  return (
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
              <div className="flex items-end justify-end  py-2">
                <div
                  className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                  onClick={handleClose}
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
              <div className="w-full h-auto  bg-[#FFFBFB]">
                <div className="w-full border-2 border-[#000] ">
                  <div className="w-full bg-[#B1C7F4] py-3 px-3">
                    <h1 className="text-center text-xl font-bold">ADD Event</h1>
                  </div>
                  <div className="px-3 py-3 w-full">
                    <div>
                      <input
                        type="text"
                        placeholder="Title"
                        className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="mt-5">
                      <textarea
                        placeholder="Description"
                        className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="1" // You can adjust this for more or fewer lines of space
                      />
                    </div>

                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="mt-5">
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
                            <MobileDatePicker
                              value={selectedDate}
                              onChange={handleDateChange}
                              className="w-full py-3 px-3 border border-[#000] placeholder-[#000]"
                            />
                          </DemoItem>
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                    <div className="mt-10 flex items-center justify-between">
                      <div>
                        <div>
                          <h1 className="text-lg">ADD IMAGE</h1>
                        </div>
                        <div className="flex items-center justify-center  mt-2">
                          {photo == "" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="text-5xl cursor-pointer"
                              onClick={handleIconClick}
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              >
                                <path d="M1.75 2.75h12.5v10.5H1.75z" />
                                <path d="m3.75 13.2l6.5-5.5l4 3" />
                                <circle
                                  cx="5.25"
                                  cy="6.25"
                                  r=".5"
                                  fill="currentColor"
                                />
                              </g>
                            </svg>
                          ) : (
                            <img
                              src={photo}
                              className="w-[50px h-[50px] cursor-pointer"
                              onClick={handleIconClick}
                            />
                          )}
                          <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChangePhoto}
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          className="text-lg font-semibold bg-[#739CE7] px-3 py-2 w-[150px]"
                          onClick={createEvent}
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? "Loading" : "Create"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateEventModal;
