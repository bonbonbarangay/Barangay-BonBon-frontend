import React from "react";
import MapHook from "../../hooks/map/Map";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const { data, isLoading, isError } = MapHook();
  const position = [8.508866488411472, 124.6491032995961];

  const getIcon = (colorSelection) => {
    let color;
    switch (colorSelection) {
      case "Satisfactory":
        color = "green";
        break;
      case "Serious Deficiencies":
        color = "red";
        break;
      case "Minor Deficiencies":
        color = "yellow";
        break;
      default:
        color = "gray";
        break;
    }

    console.log(colorSelection);
    return new L.DivIcon({
      className: "custom-icon",
      html: `<div style="background-color:${color}; width: 30px; height: 30px; border-radius: 50%; border: 2px solid black;"></div>`,
    });
  };
  return (
    <MapContainer
      center={position}
      zoom={16}
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
            <div>
              <div className="flex items-center gap-4 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold">Project title</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.projecttitle}</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold">Project Location</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.projectlocation}</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold">Contructor</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.contractor}</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold">Contract Payment</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.contractpayment}</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold">Contructor</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.contractor}</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold">Contract Payment</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.contractpayment}</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold">Update Status</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.updatestatus}</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold">Date Monitoring</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.datemonitoring}</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold">Date Start</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.datestart}</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold">Project Engineer</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.projectengineer}</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 justify-around">
                <div>
                  <div>
                    <h1 className="font-semibold">issues</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.issues}</h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold">overall</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.overall}</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-col mt-2 justify-center">
                <div>
                  <div>
                    <h1 className="font-semibold">Budget</h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.budgetyear}</h1>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
