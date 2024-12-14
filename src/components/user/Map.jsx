import React from "react";
import MapHook from "../../hooks/map/Map";
import MarkerCustomize from "../../utils/MarkerCustomize";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  const { data, isLoading, isError } = MapHook();
  const { getIcon } = MarkerCustomize();

  const position = [8.508866488411472, 124.6491032995961];

  return (
    <MapContainer
      center={position}
      zoom={16}
      className="w-full h-[70vh] max-lg:h-[50vh] max-md:h-[40vh] max-sm:h-[32vh]"
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
              <div className="flex items-center gap-4 justify-between ">
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">
                      Project title
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center  max-md:text-xs">
                      {item.projecttitle}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold  max-md:text-xs">
                      Project Location
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center  max-md:text-xs">
                      {item.projectlocation}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold  max-md:text-xs">
                      Contructor
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center max-md:text-xs">
                      {item.contractor}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold  max-md:text-xs">
                      Contract Payment
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center  max-md:text-xs">
                      {item.contractpayment}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">Contructor</h1>
                  </div>
                  <div>
                    <h1 className="text-center  max-md:text-xs">
                      {item.contractor}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold  max-md:text-xs">
                      Contract Payment
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center  max-md:text-xs">
                      {item.contractpayment}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold  max-md:text-xs">
                      Update Status
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center  max-md:text-xs">
                      {item.updatestatus}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold  max-md:text-xs">
                      Date Monitoring
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center">{item.datemonitoring}</h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 justify-between">
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">Date Start</h1>
                  </div>
                  <div>
                    <h1 className="text-center max-md:text-xs">
                      {item.datestart}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">
                      Project Engineer
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-center max-md:text-xs">
                      {item.projectengineer}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 justify-around">
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">issues</h1>
                  </div>
                  <div>
                    <h1 className="text-center max-md:text-xs">
                      {item.issues}
                    </h1>
                  </div>
                </div>
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">overall</h1>
                  </div>
                  <div>
                    <h1 className="text-center max-md:text-xs">
                      {item.overall}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-col mt-2 justify-center">
                <div>
                  <div>
                    <h1 className="font-semibold max-md:text-xs">Budget</h1>
                  </div>
                  <div>
                    <h1 className="text-center max-md:text-xs">
                      {item.budgetyear}
                    </h1>
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
