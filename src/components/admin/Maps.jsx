import React, { useState } from "react";
import MapHook from "../../hooks/map/Map";
import { handleInvalid } from "../toastify/Toastify";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const Maps = () => {
  const {
    data,
    isLoading,
    handleCreateLocation,
    handleDelete,
    deleteMutation,
  } = MapHook();
  const [selectedStatus, setSelectedStatus] = useState("");
  const [name, setName] = useState("");
  const position = [8.50892060310247, 124.649098318599];
  const [locationData, setLocationData] = useState(null);
  const [clickedPosition, setClickedPosition] = useState({
    latitude: null,
    longitude: null,
  });

  const getIcon = (color) => {
    return new L.DivIcon({
      className: "custom-icon",
      html: `<div style="background-color:${color}; width: 30px; height: 30px; border-radius: 50%; border: 2px solid black;"></div>`,
    });
  };
  const LocationFinder = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedPosition({ latitude: lat, longitude: lng });
      },
    });
    return null;
  };

  // const handleDragEnd = (id, event) => {
  //   const { lat, lng } = event.target.getLatLng();

  //   console.log(lat, lng, id);
  // };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const createLocation = () => {
    if (
      !clickedPosition.latitude ||
      !clickedPosition.longitude ||
      !name ||
      !selectedStatus
    ) {
      handleInvalid("Please complete all fields.");
      return; // Prevent further execution
    }

    const statusColorMap = {
      Satisfactory: "green",
      "Serious Deficiencies": "red",
      "Minor Deficiencies": "yellow",
    };

    const selectColor = statusColorMap[selectedStatus];

    const locationData = {
      name,
      latitude: clickedPosition.latitude,
      longitude: clickedPosition.longitude,
      color: selectColor,
    };

    handleCreateLocation(locationData);
    setClickedPosition({ latitude: null, longitude: null });
  };

  const deleteLocation = () => {
    if (locationData == null) {
      handleInvalid("Pls Select Your Delete Location");
      return;
    }

    handleDelete(locationData?.id);
  };
  return (
    <>
      <div>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "300px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {clickedPosition.latitude && clickedPosition.longitude && (
            <Marker
              position={[clickedPosition.latitude, clickedPosition.longitude]}
            ></Marker>
          )}
          {data?.map((item, index) => (
            <Marker
              key={index}
              position={[item.latitude, item.longitude]}
              icon={getIcon(item.color)}
              eventHandlers={{
                click: () => setLocationData(item), // Triggered when the marker is clicked
              }}
            >
              <Popup>
                <strong>{item.name}</strong>
              </Popup>
            </Marker>
          ))}

          <LocationFinder />
        </MapContainer>
      </div>

      <div className="mt-10 flex  justify-between">
        <div>
          <div
            className="bg-green-500 text-white px-2 py-2 rounded  mr-2"
            onClick={createLocation}
          >
            <button className="text-sm">CREATE</button>
          </div>

          <div className="bg-orange-500 text-white px-2 py-2 rounded  mr-2 mt-5">
            <button className="text-sm">UPDATE</button>
          </div>
          <div
            className="bg-red-500 text-white px-2 py-2 rounded  mr-2 mt-5"
            onClick={deleteLocation}
          >
            <button className="text-sm">DELETE</button>
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-2 border border-[#000] placeholder-[#000] placeholder:text-sm placeholder:font-semibold text-sm"
          />
        </div>

        <div className="status-selection">
          <select
            id="status"
            value={selectedStatus}
            onChange={handleStatusChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="Satisfactory">Satisfactory</option>
            <option value="Serious Deficiencies">Serious Deficiencies</option>
            <option value="Minor Deficiencies">Minor Deficiencies</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Maps;
