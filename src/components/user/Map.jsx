import React from "react";
import MapHook from "../../hooks/map/Map";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const { data, isLoading, isError } = MapHook();
  const position = [8.50892060310247, 124.649098318599];

  const getIcon = (color) => {
    return new L.DivIcon({
      className: "custom-icon",
      html: `<div style="background-color:${color}; width: 30px; height: 30px; border-radius: 50%; border: 2px solid black;"></div>`,
    });
  };
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "550px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {data?.map((item, index) => (
        <Marker
          key={index}
          position={[item.latitude, item.longitude]}
          icon={getIcon(item.color)}
        >
          <Popup>
            <strong>{item.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
