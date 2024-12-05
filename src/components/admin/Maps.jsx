import React, { useState } from "react";
import MapHook from "../../hooks/map/Map";
import { handleInvalid } from "../toastify/Toastify";
import CreateProjectManagementModal from "../modal/CreateProjectManagementModal";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const Maps = () => {
  const { data, isLoading, handleDelete, deleteMutation } = MapHook();
  const position = [8.50892060310247, 124.649098318599];

  const [locationData, setLocationData] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);
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

  const createLocation = () => {
    if (!clickedPosition.latitude || !clickedPosition.longitude) {
      handleInvalid("Select Location");
      return;
    }
    setCreateOpen(true);
  };

  const deleteLocation = () => {
    if (locationData == null) {
      handleInvalid("Pls Select Your Delete Location");
      return;
    }

    handleDelete(locationData?.id);
  };

  const handleCloseCreate = () => {
    setCreateOpen(false);
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

      <div className="mt-10 flex items-center justify-around ">
        <div
          className="bg-green-500 text-white px-2 py-2 rounded  mr-2"
          onClick={createLocation}
        >
          <button className="text-sm">CREATE</button>
        </div>

        <div className="bg-orange-500 text-white px-2 py-2 rounded  mr-2 ">
          <button className="text-sm">UPDATE</button>
        </div>
        <div
          className="bg-red-500 text-white px-2 py-2 rounded  mr-2 "
          onClick={deleteLocation}
        >
          <button className="text-sm">DELETE</button>
        </div>
      </div>

      <CreateProjectManagementModal
        handleCloseCreate={handleCloseCreate}
        createOpen={createOpen}
        clickedPosition={clickedPosition}
      />
    </>
  );
};

export default Maps;
