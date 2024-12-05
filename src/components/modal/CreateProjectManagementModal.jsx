import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
const CreateProjectManagementModal = ({
  createOpen,
  handleCloseCreate,
  clickedPosition,
}) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectlocation, setProjectLocation] = useState("");
  const [contractor, setContractor] = useState("");
  const [contractPayment, setContractPayment] = useState("");
  const [updateStatus, setUpdateStatus] = useState("");
  const [dateMonitoring, setDateMonitoring] = useState("");
  const [issues, setIssues] = useState("");
  const [projectEngineer, setProjectEngineer] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [overall, setOverall] = useState("");
  const [colorSelection, setColorSelection] = useState("");
  const [budgetYear, setBudgetYear] = useState("");

  return (
    <div>
      <Modal
        open={createOpen}
        onClose={handleCloseCreate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handleCloseCreate}
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

            <div className="w-full  border-2 border-[#000] h-[80vh] overflow-x-auto">
              <div className="w-full bg-[#B1C7F4] py-3 px-3">
                <h1 className="text-center text-xl font-bold">ADD PROJECT</h1>
              </div>
              <div className="px-3 py-3 w-full">
                <div>
                  <div>
                    <h1 className="text-xl font-bold mb-2">Project Title</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Project Location</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Contructor</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Contract Payment</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Update Status</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Date-Monitoring</h1>
                  </div>
                  <div>
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
                          <MobileDatePicker className="w-full py-3 px-3 border border-[#000]  text-lg" />
                        </DemoItem>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Issues</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Project Engineer</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-5">
                  <div className="w-[50%]">
                    <div>
                      <h1 className="text-xl font-bold mb-2">Date Start</h1>
                    </div>
                    <div>
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
                            <MobileDatePicker className="w-full py-3 px-3 border border-[#000]  text-lg" />
                          </DemoItem>
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <div>
                      <h1 className="text-xl font-bold mb-2">Overall</h1>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full py-3 px-3 border border-[#000]  text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Project Color</h1>
                  </div>
                  <div className="flex items-center justify-around">
                    <div className="flex items-center gap-2">
                      <div>
                        <input type="radio" className="w-6 h-6" />
                      </div>
                      <div>
                        <h1>Satisfactory</h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <input type="radio" className="w-6 h-6" />
                      </div>
                      <div>
                        <h1>Serious Defenciencies</h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <input type="radio" className="w-6 h-6" />
                      </div>
                      <div>
                        <h1>Minor Defeciencies</h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">Budget Year</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full py-3 px-3 border border-[#000]  text-lg"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-xl font-bold mb-2">MAP</h1>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="w-full flex items-end justify-end">
                    <button className="text-lg font-semibold bg-[#739CE7] px-3 py-2 w-[150px]">
                      Create Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateProjectManagementModal;
