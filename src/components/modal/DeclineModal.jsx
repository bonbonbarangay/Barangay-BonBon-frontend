import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import EmailNotificationHook from "../../hooks/emailNotification/EmailNotification";
import FormStatusHook from "../../hooks/formstatus/FormStatus";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const DeclineModal = ({ declineOpen, handleCloseDecline, declineData }) => {
  const [input, setInput] = useState("");
  const { handleNotification } = EmailNotificationHook();
  const { handleUpdateFormData } = FormStatusHook();
  const { handleDelete, deleteByUserIdMutation } = HouseHoldHook();

  const handleDecline = () => {
    const notificationData = {
      userid: declineData?.userid,
      status: "Decline",
      reason: input,
    };
    handleNotification(notificationData);
    const dataForm = {
      userid: declineData?.userid,
      status: "decline",
    };
    handleUpdateFormData(dataForm);
    handleDelete(declineData);

    setInput("");
    handleCloseDecline();
  };

  return (
    <Modal
      open={declineOpen}
      onClose={handleCloseDecline}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>
          <div className="flex items-end justify-end  py-2">
            <div
              className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
              onClick={handleCloseDecline}
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
          <div className="flex items-center justify-center flex-col w-full h-full">
            <div className="w-[70%] px-3 py-3">
              <div>
                <h1 className="text-center text-xl font-bold">
                  Reason For Decline
                </h1>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                  placeholder="Enter Reason"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
              </div>
              <div className="w-full flex items-center justify-center mt-10 gap-10">
                <button
                  className="bg-green-500 text-white px-3 py-3 rounded hover:bg-green-700 mr-2 text-xl"
                  onClick={handleDecline}
                  disabled={deleteByUserIdMutation.isPending}
                >
                  {deleteByUserIdMutation.isPending ? "Loading" : "Submit"}
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-3 rounded hover:bg-red-700 text-xl"
                  onClick={handleCloseDecline}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default DeclineModal;
