import React from "react";
import { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../utils/localStorage";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
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
  const [currentDate, setCurrentDate] = useState(dayjs());
  const formatDate = (date) => {
    return date ? date.format("MM/DD/YYYY") : "";
  };
  const [formData, setFormData] = useState([
    {
      userid: getFromLocalStorage("id"),
      year: currentYear,
      lastNameFirstName: "",
      relation: "",
      pwd: "",
      gender: "",
      age: "",
      dob: formatDate(currentDate),
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
        dob: formatDate(currentDate),
        education: "",
        occupation: "",
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index][field] = value.toUpperCase();
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
  const handleMembersAge = (index, field, value) => {
    const updatedFormData = [...formData];
    const convertValue = value ? value.format("MM/DD/YYYY") : "";
    updatedFormData[index][field] = convertValue;
    setFormData(updatedFormData);
  };

  return (
    <div className="w-full">
      <div className="h-auto pb-5">
        <div>
          <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
            Name of all Household Members living in the house:
          </h1>
        </div>
        <div className="h-auto">
          {formData.map((data, index) => (
            <div key={index} className="mb-5 border-b pb-4">
              <div className="mt-5 max-xl:flex max-xl:items-center max-xl:justify-center max-sm:items-start  max-sm:justify-start">
                <div className="max-xl:w-[60%] max-sm:w-full">
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
              </div>

              <div className="flex items-center gap-2 mt-5 max-sm:flex-col max-sm:w-full">
                <select
                  id="status"
                  value={data.pwd}
                  onChange={(e) =>
                    handleInputChange(index, "pwd", e.target.value)
                  }
                  className=" border border-[#000] rounded-md p-2 w-full text-sm	bg-[#fff]"
                >
                  <option value="" disabled>
                    Pwd?
                  </option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
                {["relation", "age"].map((field, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="px-2 py-1  border border-[#000]  w-[100px] bg-[#fff] max-sm:w-full"
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
                    Gender
                  </option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="LGBTQ">LGBTQ</option>
                </select>
              </div>

              <div className="mt-5 flex items-center gap-2 max-sm:flex-col max-sm:w-full">
                <div className="w-[50%] max-sm:w-full">
                  <select
                    id="status"
                    value={data.education}
                    onChange={(e) =>
                      handleInputChange(index, "education", e.target.value)
                    }
                    className="border border-[#000] rounded-md p-2 w-full text-sm bg-[#fff] max-sm:w-full"
                  >
                    <option value="" disabled>
                      HIGHEST EDUCATIONAL ATTAINMENT
                    </option>
                    <option value="ELEMENTARY LEVEL">ELEMENTARY LEVEL</option>
                    <option value="ELEMENTARY GRADUATE">
                      ELEMENTARY GRADUATE
                    </option>
                    <option value="HIGH SCHOOL LEVEL">HIGH SCHOOL LEVEL</option>
                    <option value="HIGH SCHOOL GRADUATE">
                      HIGH SCHOOL GRADUATE
                    </option>
                    <option value="VOCATIONAL COURSE">VOCATIONAL COURSE</option>
                    <option value="COLLEGE LEVEL">COLLEGE LEVEL</option>
                    <option value="COLLEGE GRADUATE">COLLEGE GRADUATE</option>
                    <option value="POSTGRADUATE (E.G, MASTER'S DOCTORATE)">
                      POSTGRADUATE (E.G, MASTER'S DOCTORATE)
                    </option>
                    <option value="OUT OF SCHOOL YOUTHS">
                      OUT OF SCHOOL YOUTHS
                    </option>
                  </select>
                </div>
                <div className="w-[50%] max-sm:w-full">
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

              <div className="mt-5  flex items-center gap-2 w-full max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div className="w-[20%] max-xl:w-auto">
                  <h1 className="max-sm:text-sm">Date Of Birth</h1>
                </div>
                <div className="w-[80%]  max-xl:w-[30%] max-sm:w-full">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                      components={[
                        "DatePicker",
                        "MobileDatePicker",
                        "DesktopDatePicker",
                        "StaticDatePicker",
                      ]}
                    >
                      <DemoItem>
                        <MobileDatePicker
                          className=" border border-[#000] bg-white cursor-pointer "
                          value={dayjs(data.dob)} // Ensure `data.dob` is a valid dayjs object
                          onChange={(value) =>
                            handleMembersAge(index, "dob", value)
                          }
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-end justify-end gap-5 ">
          {formData.length >= 2 ? (
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
          <h1 className="text-lg font-semibold max-sm:text-sm">
            Household Census Questions:
          </h1>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold max-sm:text-sm">
              1. Do you own the house you are living?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3 max-sm:ml-0 max-sm:items-start">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">YES</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question1 === "YES"}
                  onChange={() => handleCheckboxChange("question1", "YES")}
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">NO</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question1 === "NO"}
                  onChange={() => handleCheckboxChange("question1", "NO")}
                />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">Renting: YES</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.renting === "YES"}
                  onChange={() => handleCheckboxChange("renting", "YES")}
                />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">NO</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.renting === "NO"}
                  onChange={() => handleCheckboxChange("renting", "NO")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 max-sm:flex-col max-sm:items-start">
          <div>
            <h1 className="mt-lg font-semibold max-sm:text-sm">
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
            <h1 className="mt-lg font-semibold max-sm:text-sm">
              3. Are you registered voters in Barangay?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3 max-sm:ml-0">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">YES</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question3 === "YES"}
                  onChange={() => handleCheckboxChange("question3", "YES")}
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">NO</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question3 === "NO"}
                  onChange={() => handleCheckboxChange("question3", "NO")}
                />
              </div>
            </div>

            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">VOTER's ID Precinct No.</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question3 === "PRECINCT NO"}
                  onChange={() =>
                    handleCheckboxChange("question3", "PRECINCT NO")
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold max-sm:text-sm">
              4. Do you have your own C.R?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">YES</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question4 === "YES"}
                  onChange={() => handleCheckboxChange("question4", "YES")}
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">NO</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question4 === "NO"}
                  onChange={() => handleCheckboxChange("question4", "NO")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold max-sm:text-sm">
              5. Do you have your own source of water supply?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">YES</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question5 === "YES"}
                  onChange={() => handleCheckboxChange("question5", "YES")}
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">NO</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question5 === "NO"}
                  onChange={() => handleCheckboxChange("question5", "NO")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div>
            <h1 className="mt-lg font-semibold max-sm:text-sm">
              6. Do you have your own electricity?
            </h1>
          </div>
          <div className="flex items-center gap-5 ml-12 mt-3">
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">YES</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question6 === "YES"}
                  onChange={() => handleCheckboxChange("question6", "YES")}
                />
              </div>
            </div>
            <div className="flex items-center  gap-2 ">
              <div>
                <h1 className="max-sm:text-sm">No</h1>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                  className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                  checked={houseHoldHead.question6 === "NO"}
                  onChange={() => handleCheckboxChange("question6", "NO")}
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
