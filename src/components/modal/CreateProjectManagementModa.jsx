import React from "react";
import Maps from "../admin/Maps";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";

const CreateProjectManagementModa = ({
  openProjectManage,
  handleCloseProjectManage,
}) => {
  return (
    <div>
      <Modal
        open={openProjectManage}
        onClose={handleCloseProjectManage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handleCloseProjectManage}
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
              <Maps />
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateProjectManagementModa;
