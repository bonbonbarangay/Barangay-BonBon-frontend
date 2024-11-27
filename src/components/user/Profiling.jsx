import React from "react";
import { useState } from "react";
const Profiling = ({ handleSubmit }) => {
  const [formData, setFormData] = useState([
    {
      lastNameFirstName: "",
      relation: "",
      pwd: "",
      gender: "",
      age: "",
      dob: "",
      education: "",
      occupation: "",
    },
  ]);

  const handleAddFields = () => {
    setFormData([
      ...formData,
      {
        lastNameFirstName: "",
        relation: "",
        pwd: "",
        gender: "",
        age: "",
        dob: "",
        education: "",
        occupation: "",
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className="w-full">
      <div className="h-auto pb-5">
        <div>
          <h1 className="text-lg font-semibold">
            Name of all Household Members living in the house:
          </h1>
        </div>
        <div className="h-auto">
          {formData.map((data, index) => (
            <div key={index} className="mb-5 border-b pb-4">
              <div className="mt-5">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] w-full"
                  placeholder="(Last Name, First Name, M.I)"
                  value={data.lastNameFirstName}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "lastNameFirstName",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="flex items-center gap-2 mt-5">
                {/* Each input field with its own value and onChange */}
                {["relation", "pwd", "gender", "age", "dob"].map((field, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="px-2 py-1 border border-[#000] w-[100px]"
                    value={data[field]} // Access dynamic field value
                    onChange={(e) =>
                      handleInputChange(index, field, e.target.value)
                    }
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="w-[50%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    placeholder="Highest Educational Attainment"
                    value={data.education}
                    onChange={(e) =>
                      handleInputChange(index, "education", e.target.value)
                    }
                  />
                </div>
                <div className="w-[50%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    placeholder="Occupation"
                    value={data.occupation}
                    onChange={(e) =>
                      handleInputChange(index, "occupation", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-end justify-end">
          <div className="bg-[#5ABC50] py-3 px-3" onClick={handleAddFields}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-2xl"
            >
              <path
                fill="currentColor"
                d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <h1 className="text-lg font-semibold">Household Census Questions:</h1>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold">
              1. Do you own the house you are living?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>Yes</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <div>
                <h1>Renting: Yes</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <div>
                <h1>No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <div>
            <h1 className="mt-lg font-semibold">
              2. How long have you been staying in Barangay Bonbon:
            </h1>
          </div>
          <div>
            <input type="text" className="w-[50px] px-1 py-1" />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold">
              3. Are you registered voters in Barangay?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>Yes</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <div>
                <h1>VOTER's ID Precinct No.</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold">
              4. Do you have your own C.R?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>Yes</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold">
              5. Do you have your own source of water supply?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>Yes</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold">
              6. Do you have your own electricity?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>Yes</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1>No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full flex-col mt-10">
          <div className="flex items-center justify-center flex-col gap-2">
            <div>
              <h1 className="text-lg font-semibold">Upload Signature</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl"
              >
                <path
                  fill="currentColor"
                  d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-end justify-end">
          <button
            className="bg-[#B1C7F4] px-2 py-2  border border-[#000] w-[150px] rounded-lg"
            onClick={submit}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiling;
