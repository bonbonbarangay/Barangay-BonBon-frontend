import React, { useState } from "react";
import MapHook from "../../hooks/map/Map";
import { handleInvalid } from "../toastify/Toastify";
import CreateProjectManagementModal from "../modal/CreateProjectManagementModal";
import UpdateProjectManageModal from "../modal/UpdateProjectManageModal";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const Maps = () => {
  const { data, isLoading, handleDelete, deleteMutation, handleDrag } =
    MapHook();
  const position = [8.508866488411472, 124.6491032995961];
  const [locationData, setLocationData] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [clickedPosition, setClickedPosition] = useState({
    latitude: null,
    longitude: null,
  });

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

    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
        <path fill="${color}" d="M18 2A11.79 11.79 0 0 0 6.22 13.73c0 4.67 2.62 8.58 4.54 11.43l.35.52a100 100 0 0 0 6.14 8l.76.89l.76-.89a100 100 0 0 0 6.14-8l.35-.53c1.91-2.85 4.53-6.75 4.53-11.42A11.79 11.79 0 0 0 18 2m0 17a6.56 6.56 0 1 1 6.56-6.56A6.56 6.56 0 0 1 18 19" class="clr-i-solid clr-i-solid-path-1"/>
        <circle cx="18" cy="12.44" r="3.73" fill="${color}" class="clr-i-solid clr-i-solid-path-2"/>
        <path fill="none" d="M0 0h36v36H0z"/>
      </svg>
    `;

    return new L.Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(svgIcon)}`, // Convert the dynamic SVG to base64
      iconSize: [32, 32], // Set the size of the icon
      iconAnchor: [16, 32], // Set anchor position (adjust if necessary)
      popupAnchor: [0, -32], // Adjust the popup anchor position
    });
  };

  const LocationFinder = () => {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setClickedPosition({ latitude: lat, longitude: lng });
        setLocationData(null);
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

  const handleDragEnd = (event, id) => {
    const { lat, lng } = event.target.getLatLng();

    const data = {
      latitude: lat,
      longitude: lng,
      id: id,
    };

    handleDrag(data);
  };
  const handleUpdateOpen = () => {
    if (locationData == null) {
      handleInvalid("select a location to be updated");
      return;
    }
    setUpdateOpen(true);
  };
  const handleCLoseUpdate = () => {
    setUpdateOpen(false);
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
    <>
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
              position={[clickedPosition.latitude, clickedPosition.longitude]}
            ></Marker>
          )}
          {data?.map((item, index) => (
            <Marker
              key={index}
              position={[item.latitude, item.longitude]}
              icon={getIcon(item.color)}
              draggable={true}
              eventHandlers={{
                click: () => setLocationData(item),
                dragend: (event) => handleDragEnd(event, item.id),
              }}
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

          <LocationFinder />
        </MapContainer>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div>
          <div className="flex gap-2">
            <div className="w-[100px] h-[20px] bg-green-500"></div>
            <div>
              <h1 className="font-semibold">Satisfactory</h1>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-[100px] h-[20px] bg-red-500"></div>
            <div>
              <h1 className="font-semibold">With Serious Defenciencies</h1>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="w-[100px] h-[20px] bg-yellow-500"></div>
            <div>
              <h1 className="font-semibold">Minor Defenciencies</h1>
            </div>
          </div>
        </div>
        <div>
          <div
            className="bg-green-500 text-white px-2 py-2 rounded  mr-2 "
            onClick={createLocation}
          >
            <button className="text-sm">CREATE</button>
          </div>

          <div
            className="bg-orange-500 text-white px-2 py-2 rounded  mr-2 mt-2"
            onClick={handleUpdateOpen}
          >
            <button className="text-sm">UPDATE</button>
          </div>
          <div
            className="bg-red-500 text-white px-2 py-2 rounded  mr-2 mt-2"
            onClick={deleteLocation}
          >
            <button className="text-sm">DELETE</button>
          </div>
        </div>
      </div>

      <CreateProjectManagementModal
        handleCloseCreate={handleCloseCreate}
        createOpen={createOpen}
        clickedPosition={clickedPosition}
      />
      <UpdateProjectManageModal
        handleCLoseUpdate={handleCLoseUpdate}
        updateOpen={updateOpen}
        locationData={locationData}
      />
    </>
  );
};

export default Maps;
