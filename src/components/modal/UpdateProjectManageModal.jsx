import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import MapHook from "../../hooks/map/Map";

const UpdateProjectManageModal = ({
  updateOpen,
  handleCLoseUpdate,
  locationData,
}) => {
  const { handleUpdateData, updateDataMutation } = MapHook();
  const [projectTitle, setProjectTitle] = useState(
    locationData?.projecttitle || ""
  );
  const [projectlocation, setProjectLocation] = useState(
    locationData?.projectlocation || ""
  );
  const [contractor, setContractor] = useState(locationData?.contractor || "");
  const [contractPayment, setContractPayment] = useState(
    locationData?.contractpayment || ""
  );
  const [updateStatus, setUpdateStatus] = useState(
    locationData?.updatestatus || ""
  );
  const [dateMonitoring, setDateMonitoring] = useState(null);
  const [issues, setIssues] = useState(locationData?.issues || "");
  const [projectEngineer, setProjectEngineer] = useState(
    locationData?.projectengineer || ""
  );
  const [dateStart, setDateStart] = useState(null);
  const [overall, setOverall] = useState(locationData?.overall || "");
  const [colorSelection, setColorSelection] = useState(
    locationData?.color || ""
  );
  const [budgetYear, setBudgetYear] = useState(locationData?.budgetyear || "");

  const datemonitoring = locationData?.datemonitoring
    ? dayjs(locationData.datemonitoring, "MM/DD/YYYY")
    : null;
  const datestart = locationData?.datestart
    ? dayjs(locationData.datestart, "MM/DD/YYYY")
    : null;

  const handleDateMonitoring = (date) => {
    if (date && dayjs(date).isValid()) {
      setDateMonitoring(date);
    }
  };

  const handleDateStart = (date) => {
    if (date && dayjs(date).isValid()) {
      setDateStart(date);
    }
  };
  const formatDate = (date) => {
    return date ? date.format("MM/DD/YYYY") : "";
  };
  useEffect(() => {
    if (locationData) {
      setProjectTitle(locationData.projecttitle);
      setProjectLocation(locationData.projectlocation);
      setContractor(locationData.contractor);
      setContractPayment(locationData.contractpayment);
      setUpdateStatus(locationData.updatestatus);
      setDateMonitoring(datemonitoring);
      setIssues(locationData.issues);
      setProjectEngineer(locationData.projectengineer);
      setDateStart(datestart);
      setOverall(locationData.overall);
      setColorSelection(locationData.color);
      setBudgetYear(locationData.budgetyear);
    }
  }, [locationData]);

  const handleUpdate = () => {
    const data = {
      id: locationData?.id,
      projecttitle: projectTitle,
      projectlocation: projectlocation,
      contractor: contractor,
      contractpayment: contractPayment,
      updatestatus: updateStatus,
      datemonitoring:
        dateMonitoring == null
          ? formatDate(datemonitoring)
          : formatDate(dateMonitoring),
      issues: issues,
      projectengineer: projectEngineer,
      datestart:
        dateStart == null ? formatDate(datestart) : formatDate(dateStart),
      overall: overall,
      color: colorSelection,
      budgetyear: budgetYear,
      latitude: locationData?.latitude,
      longitude: locationData?.longitude,
    };
    handleUpdateData(data);
  };
  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleCLoseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handleCLoseUpdate}
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
                <h1 className="text-center text-xl font-bold">
                  UPDATE PROJECT
                </h1>
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
                      value={projectTitle}
                      onChange={(e) => setProjectTitle(e.target.value)}
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
                      value={projectlocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
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
                      value={contractor}
                      onChange={(e) => setContractor(e.target.value)}
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
                      value={contractPayment}
                      onChange={(e) => setContractPayment(e.target.value)}
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
                      value={updateStatus}
                      onChange={(e) => setUpdateStatus(e.target.value)}
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
                          <MobileDatePicker
                            className="w-full py-3 px-3 border border-[#000]  text-lg"
                            value={dateMonitoring || datemonitoring}
                            onChange={handleDateMonitoring}
                          />
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
                      value={issues}
                      onChange={(e) => setIssues(e.target.value)}
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
                      value={projectEngineer}
                      onChange={(e) => setProjectEngineer(e.target.value)}
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
                            <MobileDatePicker
                              className="w-full py-3 px-3 border border-[#000]  text-lg"
                              value={dateStart || datestart}
                              onChange={handleDateStart}
                            />
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
                        value={overall}
                        onChange={(e) => setOverall(e.target.value)}
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
                        <input
                          type="radio"
                          value="Satisfactory"
                          checked={colorSelection === "Satisfactory"}
                          onChange={(e) => setColorSelection(e.target.value)}
                          className="w-6 h-6"
                        />
                      </div>
                      <div>
                        <h1>Satisfactory</h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <input
                          type="radio"
                          className="w-6 h-6"
                          value="Serious Deficiencies"
                          checked={colorSelection === "Serious Deficiencies"}
                          onChange={(e) => setColorSelection(e.target.value)}
                        />
                      </div>
                      <div>
                        <h1>Serious Defenciencies</h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <input
                          type="radio"
                          className="w-6 h-6"
                          value="Minor Deficiencies"
                          checked={colorSelection === "Minor Deficiencies"}
                          onChange={(e) => setColorSelection(e.target.value)}
                        />
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
                      value={budgetYear}
                      onChange={(e) => setBudgetYear(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="w-full flex items-end justify-end">
                    <button
                      className="text-lg font-semibold bg-[#739CE7] px-3 py-2 w-[200px]"
                      onClick={handleUpdate}
                      disabled={updateDataMutation.isPending}
                    >
                      {updateDataMutation.isPending
                        ? "Loading"
                        : "Update Project"}
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

export default UpdateProjectManageModal;
