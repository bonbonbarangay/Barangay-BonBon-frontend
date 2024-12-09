import React from "react";
import { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../utils/localStorage";
const Profiling = ({
  handleSubmit,
  houseHoldHead,
  handleInput,
  handleCheckboxChange,
  photo,
  handleIconClick,
  handleFileChangePhoto,
  fileInputRef,
  mutation,
}) => {
  const currentYear = new Date().getFullYear(); // Get the current year

  const [formData, setFormData] = useState([
    {
      userid: getFromLocalStorage("id"),
      year: currentYear,
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
        userid: getFromLocalStorage("id"),
        year: currentYear,
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
    console.log(index, field);
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  const handleRemoveField = () => {
    setFormData((prevData) => {
      if (prevData.length > 1) {
        return prevData.slice(0, -1);
      }
      return prevData;
    });
  };

  const lenghtOfForm = formData.length;

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
                <select
                  id="status"
                  value={data.pwd}
                  onChange={(e) =>
                    handleInputChange(index, "pwd", e.target.value)
                  }
                  className=" border border-[#000] rounded-md p-2 w-full text-sm	bg-[#fff]"
                >
                  <option value="" disabled>
                    Pwd
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                {["relation", "age", "dob"].map((field, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="px-2 py-1  border border-[#000]  w-[100px] bg-[#fff]"
                    value={data[field]} // Access dynamic field value
                    onChange={(e) =>
                      handleInputChange(index, field, e.target.value)
                    }
                  />
                ))}

                <select
                  id="status"
                  value={data.gender}
                  onChange={(e) =>
                    handleInputChange(index, "gender", e.target.value)
                  }
                  className="  border border-[#000] rounded-md p-2 w-full text-sm bg-[#fff]	"
                >
                  <option value="" disabled>
                    GENDER
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="lgbtq">Lgbtq</option>
                </select>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="w-[50%]">
                  <select
                    id="status"
                    value={data.education}
                    onChange={(e) =>
                      handleInputChange(index, "education", e.target.value)
                    }
                    className=" border border-[#000] rounded-md p-2 w-full text-sm	 bg-[#fff]"
                  >
                    <option value="" disabled>
                      Highest Educational Attainment
                    </option>
                    <option value="yes">No Out of School Youths</option>
                    <option value="no">Out of School Youths</option>
                  </select>
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

        <div className="mt-10 flex items-end justify-end gap-5 ">
          {lenghtOfForm >= 2 ? (
            <div
              className="bg-red-500 py-3 px-3 cursor-pointer"
              onClick={handleRemoveField}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-2xl text-white"
              >
                <path
                  fill="currentColor"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                />
              </svg>
            </div>
          ) : (
            ""
          )}
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
                  checked={houseHoldHead.question1 === "Yes"}
                  onChange={() => handleCheckboxChange("question1", "Yes")}
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
                  checked={houseHoldHead.question1 === "No"}
                  onChange={() => handleCheckboxChange("question1", "No")}
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
                  checked={houseHoldHead.renting === "Yes"}
                  onChange={() => handleCheckboxChange("renting", "Yes")}
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
                  checked={houseHoldHead.renting === "No"}
                  onChange={() => handleCheckboxChange("renting", "No")}
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
            <input
              type="text"
              className="w-[50px] px-1 py-1"
              name="question2"
              value={houseHoldHead.question2}
              onChange={handleInput}
            />
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
                  checked={houseHoldHead.question3 === "Yes"}
                  onChange={() => handleCheckboxChange("question3", "Yes")}
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
                  checked={houseHoldHead.question3 === "No"}
                  onChange={() => handleCheckboxChange("question3", "No")}
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
                  checked={houseHoldHead.question3 === "Precinct No"}
                  onChange={() =>
                    handleCheckboxChange("question3", "Precinct No")
                  }
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
                  checked={houseHoldHead.question4 === "Yes"}
                  onChange={() => handleCheckboxChange("question4", "Yes")}
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
                  checked={houseHoldHead.question4 === "No"}
                  onChange={() => handleCheckboxChange("question4", "No")}
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
                  checked={houseHoldHead.question5 === "Yes"}
                  onChange={() => handleCheckboxChange("question5", "Yes")}
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
                  checked={houseHoldHead.question5 === "No"}
                  onChange={() => handleCheckboxChange("question5", "No")}
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
                  checked={houseHoldHead.question6 === "Yes"}
                  onChange={() => handleCheckboxChange("question6", "Yes")}
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
                  checked={houseHoldHead.question6 === "No"}
                  onChange={() => handleCheckboxChange("question6", "No")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full flex-col mt-10">
          <div className="flex items-center justify-center flex-col gap-2">
            <div>
              <h1 className="text-lg font-semibold">Upload ID</h1>
            </div>
            <div>
              {photo == "" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-4xl"
                  onClick={handleIconClick}
                >
                  <path
                    fill="currentColor"
                    d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"
                  />
                </svg>
              ) : (
                <img
                  src={photo}
                  className="w-[50px h-[50px] cursor-pointer"
                  onClick={handleIconClick}
                />
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChangePhoto}
              />
            </div>
          </div>
        </div>
        <div className="mt-20 flex items-end justify-end">
          <button
            className="bg-[#B1C7F4] px-2 py-2  border border-[#000] w-[150px] rounded-lg"
            onClick={submit}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Loading..." : "SUBMIT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profiling;
