import React from "react";
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
    total18below,
    totalabove18,
    totalSenior,
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
    labels: ["Male", "Female", "Lgbtq"],
    datasets: [
      {
        label: "GENDER",
        data: [totalMale, totalFemale, totalLgbtq],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const ageData = {
    labels: ["18 Above", "18 Below"],
    datasets: [
      {
        label: "AGE",
        data: [totalabove18, total18below],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)", "rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-[100%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                DEMOGRAPHICS
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="bg-[#F0F0F0] w-[90%] max-lg:w-full  max-md:w-full overflow-y-auto  h-[100vh] py-5 px-10 max-md:px-5 mt-5 border-2 border-[#000] ">
                <div className="flex items-center justify-between max-md:gap-5">
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] max-md:w-[50%] rounded-lg max-sm:px-2">
                    <div>
                      <p className="font-semibold text-lg max-md:text-sm max-sm:text-xs">
                        Barangay Population
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3 max-md:text-lg max-sm:text-base">
                        {totalPopulation.toString()}
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] max-md:w-[50%] rounded-lg max-sm:px-2">
                    <div>
                      <p className="font-semibold text-lg max-md:text-sm max-sm:text-xs">
                        Population of Male
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3 max-md:text-lg max-sm:text-base">
                        {totalMale.toString()}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between max-md:gap-5 mt-5">
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] max-md:w-[50%] rounded-lg  max-sm:px-2">
                    <div>
                      <p
                        className="font-semibold text-lg max-md:text-sm max-sm:text-xs
"
                      >
                        Out of School Youths
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3 max-md:text-lg max-sm:text-base">
                        {totalOutOfSchoolYouths.toString()}
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] max-md:w-[50%] rounded-lg  max-sm:px-2">
                    <div>
                      <p className="font-semibold text-lg max-md:text-sm max-sm:text-xs">
                        Senior Citizen
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3 max-md:text-lg max-sm:text-base">
                        {totalSenior.toString()}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between max-md:gap-5 mt-5">
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] max-md:w-[50%] rounded-lg  max-sm:px-2">
                    <div>
                      <p className="font-semibold text-lg max-md:text-sm max-sm:text-xs">
                        Population of Female
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3 max-md:text-lg max-sm:text-base">
                        {totalFemale.toString()}
                      </h1>
                    </div>
                  </div>
                  <div className="bg-[#739CE7] py-2 px-5 w-[40%] max-md:w-[50%] rounded-lg  max-sm:px-2">
                    <div>
                      <p className="font-semibold text-lg max-md:text-sm max-sm:text-xs">
                        Population of Lgbtq
                      </p>
                    </div>

                    <div>
                      <h1 className="text-2xl font-semibold mt-3 max-md:text-lg max-sm:text-base">
                        {totalLgbtq.toString()}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="w-full flex  gap-5 max-sm:flex-col">
                  <div className="w-[50%] max-sm:w-full  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 rounded-md">
                    <div className="flex  justify-between">
                      <div>
                        <h1 className="font-semibold text-lg max-md:text-base">
                          Population Details
                        </h1>
                      </div>

                      <div>
                        <h1 className="text-sm">Population </h1>
                        <h1 className="text-lg font-bold text-center max-md:text-base">
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
                  <div className="w-[50%] max-sm:w-full  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 max-sm:mt-10 rounded-md">
                    <div>
                      <div>
                        <h1 className="font-semibold text-lg max-md:text-base">
                          Population by Age
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mt-5 w-full h-[200px]">
                        <Bar data={ageData} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center flex-col gap-5 ">
                  <div className="w-[50%] max-sm:w-full  bg-[#FFFBFB] px-3 py-2 border-2 border-[#000] h-auto mt-20 rounded-md max-sm:mt-10">
                    <div>
                      <div>
                        <h1 className="font-semibold text-lg max-md:text-base">
                          Gender Population Detailss
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="mt-5 w-full h-[200px]">
                        <Bar data={barData} />
                      </div>
                    </div>
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

export default Demographic;
