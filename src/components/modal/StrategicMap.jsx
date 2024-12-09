import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
import CreateStrategicModal from "./CreateStrategicModal";
import StrategicHook from "../../hooks/strategic/Strategic";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import { handleInvalid, handleSucess } from "../toastify/Toastify";

const StrategicMap = ({
  openStrategic,
  handleCloseStrategic,
  setOpenStrategic,
}) => {
  const { data, handleDeletePolyData, deleteByUserIdMutation } =
    StrategicHook();
  const [createStrategic, setCreateStrategic] = useState(false);
  const position = [8.508866488411472, 124.6491032995961];
  const [id, setId] = useState(null);

  const handleCLickLine = (id) => {
    setId(id);
    handleSucess("Selected");
  };
  const handleCLoseModalStrategic = () => {
    setOpenStrategic(true);
    setCreateStrategic(false);
  };

  const handleOpen = () => {
    setOpenStrategic(false);
    setCreateStrategic(true);
  };
  const handlePolylineClick = () => {
    if (id == null) {
      handleInvalid("Pls Select Before Delete");
      return;
    }
    handleDeletePolyData(id);
    setId(null);
  };
  return (
    <div>
      <Modal
        open={openStrategic}
        onClose={handleCloseStrategic}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end py-2">
              <div
                className="bg-[#e5e7eb] rounded-full w-fit px-2 py-2 cursor-pointer"
                onClick={handleCloseStrategic}
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

            <div>
              <MapContainer
                center={position}
                zoom={16}
                style={{ height: "300px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {data?.map((polyline, index) => (
                  <Polyline
                    key={polyline.id}
                    positions={polyline.polylinedata}
                    pathOptions={{ color: polyline.color }}
                    weight={10}
                    eventHandlers={{
                      click: () => handleCLickLine(polyline.id),
                    }}
                  />
                ))}
              </MapContainer>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <div>
                <div className="flex gap-2">
                  <div className="w-[100px] h-[20px] bg-gray-500"></div>
                  <div>
                    <h1 className="font-semibold">Concreate</h1>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[100px] h-[20px] bg-yellow-500"></div>
                  <div>
                    <h1 className="font-semibold">Improvement</h1>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="w-[100px] h-[20px] bg-blue-500"></div>
                  <div>
                    <h1 className="font-semibold">Widening</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <button
                  className="text-sm bg-green-500 text-white px-2 py-2 rounded  mr-2 "
                  onClick={handleOpen}
                >
                  CREATE
                </button>

                <button
                  className="bg-red-500 text-white px-2 py-2 rounded  mr-2 mt-2 text-sm"
                  onClick={handlePolylineClick}
                  disabled={deleteByUserIdMutation.isPending}
                >
                  {deleteByUserIdMutation.isPending ? "Loading" : "Delete"}
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>

      <CreateStrategicModal
        createStrategic={createStrategic}
        handleCLoseModalStrategic={handleCLoseModalStrategic}
      />
    </div>
  );
};

export default StrategicMap;
