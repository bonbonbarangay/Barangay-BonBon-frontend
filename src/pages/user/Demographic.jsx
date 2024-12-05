import React from "react";
import demographic2 from "../../assets/demographic2.png";
import RightBar from "../../components/user/RightBar";
import PopulationGraph from "../../components/populationGraph/PopulationGraph";
import { Line, Bar } from "react-chartjs-2";
import { defaults } from "chart.js/auto";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";
const Demographic = () => {
  const {
    totalPopulation2024,
    totalPopulation2025,
    totalPopulation2026,
    totalPopulation2027,
    totalPopulation2028,
    totalPopulation,
    totalFemale,
    totalMale,
    totalLgbtq,
    totalOutOfSchoolYouths,
  } = PopulationGraph();
  const lineData = {
    labels: ["2024", "2025", "2026", "2027", "2028"],
    datasets: [
      {
        label: "Population (2024 - 2028)",
        data: [
          totalPopulation2024,
          totalPopulation2025,
          totalPopulation2026,
          totalPopulation2027,
          totalPopulation2028,
        ],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const barData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "GENDER",
        data: [totalMale, totalFemale],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5">
        <div className="w-[70%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold">DEMOGRAPHICS</h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] overflow-y-auto  h-[100vh] py-5 px-10 mt-5 border-2 border-[#000] ">
                <div className="flex items-center justify-between">
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] rounded-lg">
                    <div>
                      <p className="font-semibold text-lg">
                        Barangay Population
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3">
                        {totalPopulation.toString()}
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] rounded-lg">
                    <div>
                      <p className="font-semibold text-lg">
                        Population of Male
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3">
                        {totalMale.toString()}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex  justify-between mt-5">
                  <div className="w-[40%]">
                    <div className="bg-[#739CE7] py-2 px-5 w-full rounded-lg">
                      <div>
                        <p className="font-semibold text-lg">
                          Out of School Youths
                        </p>
                      </div>

                      <div>
                        <h1 className="text-2xl font-semibold mt-3">
                          {totalOutOfSchoolYouths.toString()}
                        </h1>
                      </div>
                    </div>
                    <div className="bg-[#739CE7] py-2 px-5 w-full rounded-lg mt-5">
                      <div>
                        <p className="font-semibold text-lg">Senior Citizen</p>
                      </div>

                      <div>
                        <h1 className="text-2xl font-semibold mt-3">0</h1>
                      </div>
                    </div>
                  </div>
                  <div className="w-[40%]">
                    <div className="bg-[#739CE7] py-2 px-5 w-full rounded-lg">
                      <div>
                        <p className="font-semibold text-lg">
                          Population of Female
                        </p>
                      </div>

                      <div>
                        <h1 className="text-2xl font-semibold mt-3">
                          {totalFemale.toString()}
                        </h1>
                      </div>
                    </div>

                    <div className="bg-[#739CE7] py-2 px-5 w-full rounded-lg mt-5">
                      <div>
                        <p className="font-semibold text-lg">
                          Population of Lgbtq
                        </p>
                      </div>

                      <div>
                        <h1 className="text-2xl font-semibold mt-3">
                          {totalLgbtq.toString()}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-between gap-5">
                  <div className="w-[50%]  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 rounded-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="font-semibold text-lg">
                          Population Details
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm">Population </h1>
                        <h1 className="text-lg font-bold text-center">
                          {totalPopulation.toString()}
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mt-5 w-full h-[200px]">
                        <Line data={lineData} />
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%]  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 rounded-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="font-semibold text-lg">
                          Population Details
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm">Population </h1>
                        <h1 className="text-lg font-bold">10,976 </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mt-5 w-full">
                        <img src={demographic2} className="w-full h-[200px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-between gap-5 ">
                  <div className="w-[50%]  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 rounded-md">
                    <div>
                      <div>
                        <h1 className="font-semibold text-lg">
                          Population by Age
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mt-5 w-full">
                        <img src={demographic2} className="h-[200px] w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[50%]  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 rounded-md">
                    <div>
                      <div>
                        <h1 className="font-semibold text-lg">
                          Gender Population Detailss
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mt-5 w-full h-[200px]">
                        <Bar data={barData} />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000] ">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Demographic;
