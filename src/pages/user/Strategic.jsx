import React from "react";
import RightBar from "../../components/user/RightBar";
import StrategicHook from "../../hooks/strategic/Strategic";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";

const Strategic = () => {
  const { data } = StrategicHook();
  const position = [8.508866488411472, 124.6491032995961];

  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-[100%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                STRATEGIC ROAD
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] max-lg:w-full overflow-y-auto h-[100vh] py-5 px-10 mt-5 border-2 border-[#000] max-lg:h-[70vh] max-md:h-[60vh] max-sm:h-[50vh] max-md:px-5 max-sm:px-2 max-sm:py-2">
                <div className="w-full">
                  <MapContainer
                    center={position}
                    zoom={16}
                    className="w-full h-[70vh] max-lg:h-[50vh] max-md:h-[40vh] max-sm:h-[32vh]"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {data?.map((polyline) => (
                      <Polyline
                        key={polyline.id}
                        positions={polyline.polylinedata}
                        pathOptions={{ color: polyline.color }}
                        weight={10}
                      />
                    ))}
                  </MapContainer>
                </div>

                <div className="flex items-center gap-2 mt-5">
                  <div className="w-[100px] h-[20px] bg-gray-500"></div>
                  <div>
                    <h1 className="font-bold text-lg max-md:text-sm">
                      Concreate
                    </h1>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[100px] h-[20px] bg-yellow-500"></div>
                  <div>
                    <h1 className="font-bold text-lg max-md:text-sm">
                      Improvement
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-[100px] h-[20px] bg-blue-500 "></div>
                  <div>
                    <h1 className="font-bold text-lg max-md:text-sm">
                      Widening{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000] max-lg:border-none max-lg:w-full  ">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Strategic;
