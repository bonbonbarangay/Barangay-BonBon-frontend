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
  const [updateData, setUpdateData] = useState(null);
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

    console.log(colorSelection);
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
