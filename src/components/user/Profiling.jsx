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
  noFutureDates,
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
      pwd: "YES",
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

    // Format the value to MM/DD/YYYY if it's a valid Day.js object
    const convertValue = value ? value.format("MM/DD/YYYY") : "";

    if (convertValue) {
      const birthDate = dayjs(convertValue);
      const today = dayjs();
      const age = today.isBefore(birthDate) ? 0 : today.diff(birthDate, "year");
      handleInputChange(index, "age", age.toString());
    }

    // Update the form data with the new date value
    updatedFormData[index][field] = convertValue;

    // Set the updated form data state
    setFormData(updatedFormData);
  };

  return (
    <div className="w-full justify-center items-center flex flex-col ">
      <div className="h-auto pb-5 w-1/2 max-sm:w-[90%]">
        <div className="h-auto w-full">
          {formData.map((data, index) => (
            <table className="tbl-profiling2 mb-2" key={index}>
              <tr className="noborder">
                <td colSpan={2}>
                  <p className="font-bold text-xl max-sm:text-lg max-sm:text-center">
                    House Member {index + 1}
                  </p>
                </td>
              </tr>
              <tr className="tbl-row">
                <td>FullName (Last Name, First Name, M.I)</td>
                <td>
                  <input
                    type="text"
                    className="px-2 py-1  w-full border-none bg-transparent focus:outline-none"
                    value={data.lastNameFirstName}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        "lastNameFirstName",
                        e.target.value
                      )
                    }
                  />
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Is Person with Disability?</td>
                <td>
                  <select
                    id="status"
                    value={data.pwd}
                    onChange={(e) =>
                      handleInputChange(index, "pwd", e.target.value)
                    }
                    className="rounded-md p-2 w-full text-sm	bg-transparent focus:outline-none"
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Occupation</td>
                <td>
                  <input
                    type="text"
                    className="px-2 py-1  w-full border-none bg-transparent focus:outline-none"
                    value={data.occupation}
                    onChange={(e) =>
                      handleInputChange(index, "occupation", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Relationship</td>
                <td>
                  <input
                    type="text"
                    className="px-2 py-1  w-full border-none bg-transparent focus:outline-none"
                    value={data.relation}
                    onChange={(e) =>
                      handleInputChange(index, "relation", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Age</td>
                <td>
                  <input
                    type="text"
                    className="px-2 py-1  w-full border-none bg-transparent focus:outline-none"
                    value={data.age}
                    disabled={true}
                  />
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Gender</td>
                <td>
                  <select
                    id="status"
                    value={data.gender}
                    onChange={(e) =>
                      handleInputChange(index, "gender", e.target.value)
                    }
                    className="px-2 py-1  w-full border-none bg-transparent focus:outline-none"
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="LGBTQ">LGBTQ</option>
                  </select>
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Educational Attainment</td>
                <td>
                  <select
                    id="status"
                    value={data.education}
                    onChange={(e) =>
                      handleInputChange(index, "education", e.target.value)
                    }
                    className="rounded-md p-2 w-full text-sm bg-transparent focus:outline-none max-sm:w-full"
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
                </td>
              </tr>
              <tr className="tbl-row">
                <td>Date of Birth</td>
                <td>
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
                          className=" bg-transparent cursor-pointer "
                          value={dayjs(data.dob)} // Ensure `data.dob` is a valid dayjs object
                          onChange={(value) => {
                            console.log({ value });
                            handleMembersAge(index, "dob", value);
                          }}
                          maxDate={noFutureDates}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </td>
              </tr>
            </table>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-5 ">
          {formData.length >= 2 && (
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
      <div className="w-1/2 max-sm:w-[90%]">
        <table className="tbl-profiling2 ">
          <tr className="tbl-row">
            <td>Question</td>
            <td className="text-center">Yes</td>
            <td className="text-center">No</td>
          </tr>
          <tr className="tbl-row">
            <td>1. Do you own the house you are living?</td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4 bg-transparent bg-none"
                checked={houseHoldHead.question1 === "YES"}
                onChange={() => handleCheckboxChange("question1", "YES")}
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question1 === "NO"}
                onChange={() => handleCheckboxChange("question1", "NO")}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>2. Renting</td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4 bg-transparent bg-none"
                checked={houseHoldHead.renting === "YES"}
                onChange={() => handleCheckboxChange("renting", "YES")}
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.renting === "NO"}
                onChange={() => handleCheckboxChange("renting", "NO")}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>3. How long have you been staying in Barangay Bonbon:</td>
            <td className="text-center" colSpan={2}>
              <input
                type="text"
                className="w-[100%] bg-transparent text-center outline-none"
                name="question2"
                value={houseHoldHead.question2}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>4. Are you registered voters in Barangay?</td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question3 === "YES"}
                onChange={() => {
                  handleCheckboxChange("question3", "YES");
                }}
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question3 === "NO"}
                onChange={() => {
                  handleCheckboxChange("question3", "NO");
                }}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>5. VOTER's ID Precinct No.</td>
            <td className="text-center" colSpan={2}>
              <input
                type="text"
                className="w-[100%] bg-transparent text-center outline-none"
                name="questionPrecinctNo"
                value={houseHoldHead.questionPrecinctNo}
                onChange={handleInput}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>6. Do you have your own C.R?</td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question4 === "YES"}
                onChange={() => {
                  handleCheckboxChange("question4", "YES");
                }}
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question4 === "NO"}
                onChange={() => {
                  handleCheckboxChange("question4", "NO");
                }}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>7. Do you have your own source of water supply?</td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question5 === "YES"}
                onChange={() => {
                  handleCheckboxChange("question5", "YES");
                }}
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question5 === "NO"}
                onChange={() => {
                  handleCheckboxChange("question5", "NO");
                }}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>8. Do you have your own electricity?.</td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question6 === "YES"}
                onChange={() => {
                  handleCheckboxChange("question6", "YES");
                }}
              />
            </td>
            <td className="text-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="w-5 h-5 max-sm:w-4 max-sm:h-4"
                checked={houseHoldHead.question6 === "NO"}
                onChange={() => {
                  handleCheckboxChange("question6", "NO");
                }}
              />
            </td>
          </tr>
        </table>

        <div className="flex flex-col items-center my-4">
          {photo && (
            <img
              src={photo}
              className="w-[50px h-[50px] cursor-pointer"
              alt="profile"
              onClick={handleIconClick}
            />
          )}
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
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChangePhoto}
          />
        </div>
      </div>
      <button
        className="bg-[#B1C7F4] px-2 py-2  border border-[#000] w-[150px] rounded-lg"
        onClick={submit}
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Loading..." : "SUBMIT"}
      </button>
    </div>
  );
};

export default Profiling;
