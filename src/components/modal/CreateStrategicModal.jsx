import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
import StrategicHook from "../../hooks/strategic/Strategic";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents,
} from "react-leaflet";
import { handleInvalid } from "../toastify/Toastify";

const CreateStrategicModal = ({
  createStrategic,
  handleCLoseModalStrategic,
}) => {
  const { handleCreatePolyData, createPolyLineMutation } = StrategicHook();
  const position = [8.508866488411472, 124.6491032995961];
  const [polynLineData, setPolynLineData] = useState([]);
  const [selection, setSelection] = useState("gray");

  const [clickedPosition, setClickedPosition] = useState({
    latitude: null,
    longitude: null,
  });
  const LocationFinder = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedPosition({ latitude: lat, longitude: lng });
        setPolynLineData((prev) => [...prev, [lat, lng]]);
      },
    });
    return null;
  };
  const limeOptions = {
    color: selection,
  };
  const handleDeleteAllLine = () => {
    setPolynLineData([]);
    setClickedPosition({
      latitude: null,
      longitude: null,
    });
  };

  const handleCreateData = () => {
    if (polynLineData.length == 1) {
      handleInvalid("Pin Another Location");
      return;
    }

    const data = {
      color: selection,
      polylinedata: polynLineData,
    };
    handleCreatePolyData(data);
    setPolynLineData([]);
    setClickedPosition({
      latitude: null,
      longitude: null,
    });
  };

  const svgIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="#2100f8" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a100 100 0 0 0 6.14 8l.76.89l.76-.89a100 100 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m0 17a6.56 6.56 0 1 1 6.56-6.56A6.56 6.56 0 0 1 18 19" class="clr-i-solid clr-i-solid-path-1"/><circle cx="18" cy="12.44" r="3.73" fill="#2100f8" class="clr-i-solid clr-i-solid-path-2"/><path fill="none" d="M0 0h36v36H0z"/></svg>`;
  const customIcon = new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  return (
    <div>
      <Modal
        open={createStrategic}
        onClose={handleCLoseModalStrategic}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end py-2">
              <div
                className="bg-[#e5e7eb] rounded-full w-fit px-2 py-2 cursor-pointer"
                onClick={handleCLoseModalStrategic}
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

                {clickedPosition.latitude && clickedPosition.longitude && (
                  <Marker
                    icon={customIcon}
                    position={[
                      clickedPosition.latitude,
                      clickedPosition.longitude,
                    ]}
                  ></Marker>
                )}
                <Polyline
                  pathOptions={limeOptions}
                  positions={polynLineData}
                  weight={10}
                />

                <LocationFinder />
              </MapContainer>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <div className="w-full">
                <select
                  className=" py-3 w-[60%] bg-[#fff] px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                  value={selection}
                  onChange={(e) => setSelection(e.target.value)}
                >
                  <option value="" disabled>
                    -- Select an Options --
                  </option>
                  <option value="gray">Concreate</option>
                  <option value="yellow">Improvement</option>
                  <option value="blue">Widening</option>
                </select>
              </div>
              <div className="flex flex-col">
                <button
                  className="text-lg  bg-[#739CE7] px-3 py-2 w-[200px] text-white"
                  onClick={handleCreateData}
                  disabled={createPolyLineMutation.isPending}
                >
                  {createPolyLineMutation.isPending ? "Loading" : "Save"}
                </button>
                <button
                  className="text-lg  bg-red-500 px-3 py-2 w-[200px] mt-2 text-white"
                  onClick={handleDeleteAllLine}
                >
                  Remove All Line
                </button>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateStrategicModal;
