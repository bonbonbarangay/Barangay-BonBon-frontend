import React, { useState, useRef, useEffect } from "react";
import Profiling from "../../components/user/Profiling";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
import { getFromLocalStorage } from "../../utils/localStorage";
import HouseMembersHook from "../../hooks/residentprofiling/HouseMembers";
import { Toaster } from "react-hot-toast";
import { handleInvalid } from "../../components/toastify/Toastify";
import FormStatusHook from "../../hooks/formstatus/FormStatus";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "../../App.css";
const getAgeByBirthdate = (birthdate) => {
  const birthDate = dayjs(birthdate);
  const today = dayjs();
  const age = today.diff(birthDate, "year");
  return age;
};
const ResidentProfiling = () => {
  const [photo, setPhoto] = useState("");
  const [dateOfBirthHead1, setDateOfBirthHead1] = useState(dayjs());
  const [dateOfBirthHead2, setDateOfBirthHead2] = useState(dayjs());
  const maxDate = dayjs().subtract(365 * 18, "day");
  const noFutureDates = dayjs().subtract(1, "day");
  const { handleCreateFormStatus } = FormStatusHook();
  const { handleCreateHouseHold, mutation } = HouseHoldHook();
  const { handleCreateHouseMembers } = HouseMembersHook();
  const [houseHoldHead, setHouseHoldHead] = useState({
    //additional
    userid: getFromLocalStorage("id"),

    // data1
    lastnamehead1: "",
    agehead1: "",
    firstnamehead1: "",
    mihead1: "",
    exthead1: "",
    addresshead1: "",
    dateofbirthhead1: "",
    genderhead1: "",
    civilstatushead1: "",
    religionhead1: "",
    typeofidhead1: "",
    idnohead1: "",
    mobilenohead1: "",
    occupationhead1: "",
    skillshead1: "",
    companyaddresshead1: "",
    collegehead1: "",
    highschoolhead1: "",
    elementaryhead1: "",
    vocationalcoursehead1: "",
    // data2
    lastnamehead2: "",
    firstnamehead2: "",
    mihead2: "",
    exthead2: "",
    addresshead2: "",
    dateofbirthhead2: "",
    genderhead2: "",
    civilstatushead2: "",
    religionhead2: "",
    typeofidhead2: "",
    idnohead2: "",
    mobilenohead2: "",
    occupationhead2: "",
    skillshead2: "",
    companyaddresshead2: "",
    collegehead2: "",
    highschoolhead2: "",
    elementaryhead2: "",
    vocationalcoursehead2: "",
    agehead2: "",
    //data3
    members: "",
    children: "",
    //data 4
    questionPrecinctNo: "0",
    question1: "",
    question2: "",
    renting: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    image: photo,
  });
  const areAllFieldsFilled = (object, isExcluded = false) => {
    const excludedKeys = [
      "agehead2",
      "addresshead2",
      "lastnamehead2",
      "firstnamehead2",
      "mihead2",
      "exthead2",
      "dateofbirthhead2",
      "genderhead2",
      "civilstatushead2",
      "religionhead2",
      "typeofidhead2",
      "idnohead2",
      "mobilenohead2",
      "occupationhead2",
      "skillshead2",
      "companyaddresshead2",
      "collegehead2",
      "highschoolhead2",
      "elementaryhead2",
      "vocationalcoursehead2",
    ];

    const keysToCheck = isExcluded
      ? Object.keys(object).filter((key) => !excludedKeys.includes(key))
      : Object.keys(object);

    return keysToCheck.every(
      (key) =>
        object[key] !== "" && object[key] !== null && object[key] !== undefined
    );
  };
  const handleDateOfBirthHead1 = (date) => {
    if (date) {
      // Calculate the age and update both dateofbirthhead2 and agehead2
      const calculatedAge = getAgeByBirthdate(date);
      setDateOfBirthHead1(date);

      setHouseHoldHead((prevState) => ({
        ...prevState,
        agehead1: calculatedAge.toString(),
      }));
    }
  };
  const handleDateOfBirthHead2 = (date) => {
    if (date) {
      // Calculate the age and update both dateofbirthhead2 and agehead2
      const calculatedAge = getAgeByBirthdate(date);
      setDateOfBirthHead2(date);

      setHouseHoldHead((prevState) => ({
        ...prevState,
        agehead2: calculatedAge.toString(),
      }));
    }
  };
  const formatDate = (date) => {
    return date ? date.format("MM/DD/YYYY") : "";
  };
  const fileInputRef = useRef(null);
  const handleFileChangePhoto = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleMaritalStatus = (name, value) => {
    const valueUpper = value.toUpperCase();

    setHouseHoldHead((prevState) => ({
      ...prevState,
      [name]: valueUpper,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const valueUpper = value.toUpperCase();
    console.log(valueUpper);
    setHouseHoldHead((prevState) => ({
      ...prevState,
      [name]: valueUpper,
    }));
  };

  const handleCheckboxChange = (questionKey, value) => {
    setHouseHoldHead((prev) => ({
      ...prev,
      [questionKey]: prev[questionKey] === value ? "" : value,
    }));
  };

  const handleSubmit = (household) => {
    const data = {
      userid: getFromLocalStorage("id"),
      status: "pending",
    };

    if (photo === "") {
      handleInvalid("Update ID Photo");
      return;
    }

    const isSingleOrWidow =
      houseHoldHead.civilstatushead1 === "SINGLE" ||
      houseHoldHead.civilstatushead1 === "WIDOW";

    const validHouseHoldHead = areAllFieldsFilled(
      houseHoldHead,
      isSingleOrWidow
    );
    const validHouseHoldMembers = areAllFieldsFilled(household);
    const validData = areAllFieldsFilled(data);

    if (validHouseHoldHead && validHouseHoldMembers && validData) {
      handleCreateHouseHold(houseHoldHead);
      handleCreateHouseMembers(household);
      handleCreateFormStatus(data);
      setHouseHoldHead((prev) => ({
        ...prev,

        dateofbirthhead2:
          houseHoldHead.civilstatushead1.toUpperCase() === "SINGLE"
            ? ""
            : formatDate(dateOfBirthHead2),
      }));
    } else {
      handleInvalid("All fields are required");
    }
  };
  useEffect(() => {
    setHouseHoldHead((prev) => ({
      ...prev,
      image: photo,
      dateofbirthhead1: formatDate(dateOfBirthHead1),
      dateofbirthhead2:
        houseHoldHead.civilstatushead1.toUpperCase() === "SINGLE"
          ? "" // Set empty string if civilstatushead1 is "SINGLE"
          : formatDate(dateOfBirthHead2),
    }));

    return () => {
      setHouseHoldHead((prev) => ({
        ...prev,
        image: "",
        dateofbirthhead1: "",
        dateofbirthhead2: "",
      }));
    };
  }, [photo]);
  return (
    <div className="w-full bg-[#DEE5F8] py-3 h-auto">
      <div>
        <h1 className="text-center text-3xl font-bold max-md:text-lg max-sm:text-sm">
          RESIDENT AND HOUSEHOLD PROFILING
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 ">
        <table id="tbl-profiling">
          <tr className="noborder">
            <td className="font-bold" colSpan={2}>
              <p className="text-2xl max-sm:text-lg max-sm:text-center">
                Household Head Information
              </p>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Last Name</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                name="lastnamehead1"
                value={houseHoldHead.lastnamehead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>First Name</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                name="firstnamehead1"
                value={houseHoldHead.firstnamehead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Middle Name</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                name="mihead1"
                value={houseHoldHead.mihead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>

          <tr className="tbl-row">
            <td>Extension Name</td>
            <td>
              <select
                id="status"
                value={houseHoldHead.exthead1}
                onChange={(e) =>
                  handleMaritalStatus("exthead1", e.target.value)
                }
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT EXTENSION NAME
                </option>
                <option value="JR">JR</option>
                <option value="SR">SR</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="NONE">NONE</option>
              </select>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Zone</td>
            <td>
              <select
                id="status"
                value={houseHoldHead.addresshead1} // Assume you have a state variable for the selected religion
                onChange={(e) =>
                  handleMaritalStatus("addresshead1", e.target.value)
                }
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT ZONE
                </option>
                <option value="ZONE 1">ZONE 1</option>
                <option value="ZONE 2">ZONE 2</option>
                <option value="ZONE 3">ZONE 3</option>
                <option value="ZONE 4">ZONE 4</option>
                <option value="ZONE 5">ZONE 5</option>
                <option value="ZONE 6">ZONE 6</option>
                <option value="ZONE 7">ZONE 7</option>
                <option value="ZONE 8">ZONE 8</option>
                <option value="ZONE 9">ZONE 9</option>
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
                      className="px-1 border  cursor-pointer"
                      value={dateOfBirthHead1}
                      onChange={handleDateOfBirthHead1}
                      maxDate={maxDate}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Age</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                name="agehead1"
                value={getAgeByBirthdate(dateOfBirthHead1)}
                onChange={handleInputChange}
                readOnly={true}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Gender</td>
            <td>
              <select
                id="status"
                value={houseHoldHead.genderhead1} // Assume you have a state variable for the selected religion
                onChange={(e) =>
                  handleMaritalStatus("genderhead1", e.target.value)
                }
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT GENDER
                </option>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
                <option value="LGBTQ">LGBTQ</option>
              </select>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Civil Status</td>
            <td>
              <select
                id="status"
                value={houseHoldHead.civilstatushead1}
                onChange={(e) => {
                  const selectedValue = e.target.value.toUpperCase();

                  handleMaritalStatus("civilstatushead1", selectedValue);

                  if (selectedValue !== "SINGLE") {
                    handleMaritalStatus("civilstatushead2", selectedValue);
                  } else {
                    setHouseHoldHead((prevState) => ({
                      ...prevState,
                      civilstatushead2: "",
                    }));
                  }
                }}
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT CIVILSTATUS
                </option>
                <option value="SINGLE">SINGLE</option>
                <option value="MARRIED">MARRIED</option>
                <option value="WIDOW">WIDOW</option>
              </select>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Religion</td>
            <td>
              <select
                id="religion"
                value={houseHoldHead.religionhead1} // Assume you have a state variable for the selected religion
                onChange={(e) =>
                  handleMaritalStatus("religionhead1", e.target.value)
                }
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT RELIGION
                </option>
                <option value="CATHOLIC">Roman Catholic</option>
                <option value="PROTESTANT">Protestant</option>
                <option value="ISLAM">Islam</option>
                <option value="IGLESIA NI CRISTO">Iglesia Ni Cristo</option>
                <option value="SEVENTH-DAY ADVENTIST">
                  Seventh-Day Adventist
                </option>
                <option value="ATHEIST">Atheist</option>
                <option value="OTHER">Other</option>
              </select>
            </td>
          </tr>

          <tr className="tbl-row">
            <td>Type of ID</td>
            <td>
              <select
                id="status"
                value={houseHoldHead.typeofidhead1}
                onChange={(e) =>
                  handleMaritalStatus("typeofidhead1", e.target.value)
                }
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT ID TYPE
                </option>
                <option value="BIR">
                  BIR (Bureau of Internal Revenue) ID{" "}
                </option>
                <option value="DRIVER LICENSE">Driver’s License</option>
                <option value="GSIS">
                  Government Service Insurance System (GSIS) eCard
                </option>
                <option value="PHILSYS">
                  Philippine National ID (PhilSys)
                </option>
                <option value="PHILIPPHINE PASSSPORT">
                  Philippine Passport
                </option>
                <option value="POSTAL ID">Postal ID</option>
                <option value="PRC">
                  Professional Regulation Commission (PRC) ID
                </option>
                <option value="SSS">Social Security System (SSS) ID</option>
                <option value="TIN">Tax Identification Number (TIN) ID</option>
                <option value="UMID">
                  Unified Multi-Purpose ID (UMID) (issued by the SSS, GSIS,
                  Pag-IBIG, and PhilHealth)
                </option>
                <option value="VOTERS ID">Voter’s ID</option>
              </select>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>ID No</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="idnohead1"
                value={houseHoldHead.idnohead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Mobile/Tel No</td>
            <td>
              <input
                type="number"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="mobilenohead1"
                value={houseHoldHead.mobilenohead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Occupation</td>
            <td>
              <select
                id="job-category"
                value={houseHoldHead.occupationhead1} // Assume you have a state variable for the selected job category
                onChange={(e) =>
                  handleMaritalStatus("occupationhead1", e.target.value)
                } // Function to handle changes
                className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
              >
                <option value="" disabled>
                  SELECT OCCUPATION
                </option>
                <option value="IT">Information Technology</option>
                <option value="BPO">Business Process Outsourcing</option>
                <option value="HEALTHCARE">Healthcare</option>
                <option value="EDUCATION">Education</option>
                <option value="ENGINEERING">Engineering</option>
                <option value="SALES_MARKETING">Sales and Marketing</option>
                <option value="FINANCE_ACCOUNTING">
                  Finance and Accounting
                </option>
                <option value="CONSTRUCTION">Construction</option>
                <option value="HOSPITALITY_TOURISM">
                  Hospitality and Tourism
                </option>
                <option value="MANUFACTURING">Manufacturing</option>
                <option value="LOGISTICS_SUPPLY_CHAIN">
                  Logistics and Supply Chain
                </option>
                <option value="TELECOMMUNICATIONS">Telecommunications</option>
                <option value="CREATIVE_ARTS_DESIGN">
                  Creative Arts and Design
                </option>
                <option value="REAL_ESTATE">Real Estate</option>
                <option value="LEGAL_SERVICES">Legal Services</option>
                <option value="AGRICULTURE">Agriculture</option>
                <option value="RESEARCH_DEVELOPMENT">
                  Research and Development
                </option>
                <option value="HUMAN_RESOURCES">Human Resources</option>
                <option value="ENVIRONMENTAL_SERVICES">
                  Environmental Services
                </option>
                <option value="SOCIAL_SERVICES">Social Services</option>
                <option value="OTHERS">Others</option>
              </select>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Skills</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="skillshead1"
                value={houseHoldHead.skillshead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Company Address</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="companyaddresshead1"
                value={houseHoldHead.companyaddresshead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="noborder">
            <td colSpan={2}>Educational Attainment</td>
          </tr>
          <tr className="tbl-row">
            <td>College</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="collegehead1"
                value={houseHoldHead.collegehead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>High School</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="highschoolhead1"
                value={houseHoldHead.highschoolhead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Elementary School</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="elementaryhead1"
                value={houseHoldHead.elementaryhead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>Vocational Course</td>
            <td>
              <input
                type="text"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="vocationalcoursehead1"
                value={houseHoldHead.vocationalcoursehead1}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </table>
        {houseHoldHead.civilstatushead1.toUpperCase() === "MARRIED" && (
          <table id="tbl-profiling">
            <tr className="noborder">
              <td className="font-bold" colSpan={2}>
                <p className="text-2xl">Spouse Information</p>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Last Name</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                  name="lastnamehead2"
                  value={houseHoldHead.lastnamehead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>First Name</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                  name="firstnamehead2"
                  value={houseHoldHead.firstnamehead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Middle Name</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                  name="mihead2"
                  value={houseHoldHead.mihead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Extension Name</td>
              <td>
                <select
                  id="status"
                  value={houseHoldHead.exthead2}
                  onChange={(e) =>
                    handleMaritalStatus("exthead2", e.target.value)
                  }
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT EXTENSION NAME
                  </option>
                  <option value="JR">JR</option>
                  <option value="SR">SR</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="NONE">NONE</option>
                </select>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Zone</td>
              <td>
                <select
                  id="status"
                  value={houseHoldHead.addresshead2} // Assume you have a state variable for the selected religion
                  onChange={(e) =>
                    handleMaritalStatus("addresshead2", e.target.value)
                  }
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT ZONE
                  </option>
                  <option value="ZONE 1">ZONE 1</option>
                  <option value="ZONE 2">ZONE 2</option>
                  <option value="ZONE 3">ZONE 3</option>
                  <option value="ZONE 4">ZONE 4</option>
                  <option value="ZONE 5">ZONE 5</option>
                  <option value="ZONE 6">ZONE 6</option>
                  <option value="ZONE 7">ZONE 7</option>
                  <option value="ZONE 8">ZONE 8</option>
                  <option value="ZONE 9">ZONE 9</option>
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
                        className="px-1 border  cursor-pointer"
                        value={dateOfBirthHead2}
                        onChange={(date) => {
                          handleDateOfBirthHead2(date);
                        }}
                        maxDate={maxDate}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Age</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
                  name="agehead2"
                  value={getAgeByBirthdate(dateOfBirthHead2)}
                  onChange={handleInputChange}
                  readOnly={true}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Gender</td>
              <td>
                <select
                  id="status"
                  value={houseHoldHead.genderhead2} // Assume you have a state variable for the selected religion
                  onChange={(e) =>
                    handleMaritalStatus("genderhead2", e.target.value)
                  }
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT GENDER
                  </option>
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
                  <option value="LGBTQ">LGBTQ</option>
                </select>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Civil Status</td>
              <td>
                <select
                  id="status"
                  value={houseHoldHead.civilstatushead2}
                  disabled={true}
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT CIVILSTATUS
                  </option>
                  <option value="SINGLE">SINGLE</option>
                  <option value="MARRIED">MARRIED</option>
                  <option value="WIDOW">WIDOW</option>
                </select>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Religion</td>
              <td>
                <select
                  id="religion"
                  value={houseHoldHead.religionhead2} // Assume you have a state variable for the selected religion
                  onChange={(e) =>
                    handleMaritalStatus("religionhead2", e.target.value)
                  } // Function to handle changes
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT RELIGION
                  </option>
                  <option value="CATHOLIC">Roman Catholic</option>
                  <option value="PROTESTANT">Protestant</option>
                  <option value="ISLAM">Islam</option>
                  <option value="IGLESIA NI CRISTO">Iglesia Ni Cristo</option>
                  <option value="SEVENTH-DAY ADVENTIST">
                    Seventh-Day Adventist
                  </option>
                  <option value="ATHEIST">Atheist</option>
                  <option value="OTHER">Other</option>
                  {/* Option for those who may not identify with the listed religions */}
                </select>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Type of ID</td>
              <td>
                <select
                  id="status"
                  value={houseHoldHead.typeofidhead2}
                  onChange={(e) =>
                    handleMaritalStatus("typeofidhead2", e.target.value)
                  }
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT ID TYPE
                  </option>
                  <option value="BIR">
                    BIR (Bureau of Internal Revenue) ID{" "}
                  </option>
                  <option value="DRIVER LICENSE">Driver’s License</option>
                  <option value="GSIS">
                    Government Service Insurance System (GSIS) eCard
                  </option>
                  <option value="PHILSYS">
                    Philippine National ID (PhilSys)
                  </option>
                  <option value="PHILIPPHINE PASSSPORT">
                    Philippine Passport
                  </option>
                  <option value="POSTAL ID">Postal ID</option>
                  <option value="PRC">
                    Professional Regulation Commission (PRC) ID
                  </option>
                  <option value="SSS">Social Security System (SSS) ID</option>
                  <option value="TIN">
                    Tax Identification Number (TIN) ID
                  </option>
                  <option value="UMID">
                    Unified Multi-Purpose ID (UMID) (issued by the SSS, GSIS,
                    Pag-IBIG, and PhilHealth)
                  </option>
                  <option value="VOTERS ID">Voter’s ID</option>
                </select>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>ID No</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="idnohead2"
                  value={houseHoldHead.idnohead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Mobile/Tel No</td>
              <td>
                <input
                  type="number"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="mobilenohead2"
                  value={houseHoldHead.mobilenohead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Occupation</td>
              <td>
                <select
                  id="job-category"
                  value={houseHoldHead.occupationhead2} // Assume you have a state variable for the selected job category
                  onChange={(e) =>
                    handleMaritalStatus("occupationhead2", e.target.value)
                  } // Function to handle changes
                  className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                >
                  <option value="" disabled>
                    SELECT OCCUPATION
                  </option>
                  <option value="IT">Information Technology</option>
                  <option value="BPO">Business Process Outsourcing</option>
                  <option value="HEALTHCARE">Healthcare</option>
                  <option value="EDUCATION">Education</option>
                  <option value="ENGINEERING">Engineering</option>
                  <option value="SALES_MARKETING">Sales and Marketing</option>
                  <option value="FINANCE_ACCOUNTING">
                    Finance and Accounting
                  </option>
                  <option value="CONSTRUCTION">Construction</option>
                  <option value="HOSPITALITY_TOURISM">
                    Hospitality and Tourism
                  </option>
                  <option value="MANUFACTURING">Manufacturing</option>
                  <option value="LOGISTICS_SUPPLY_CHAIN">
                    Logistics and Supply Chain
                  </option>
                  <option value="TELECOMMUNICATIONS">Telecommunications</option>
                  <option value="CREATIVE_ARTS_DESIGN">
                    Creative Arts and Design
                  </option>
                  <option value="REAL_ESTATE">Real Estate</option>
                  <option value="LEGAL_SERVICES">Legal Services</option>
                  <option value="AGRICULTURE">Agriculture</option>
                  <option value="RESEARCH_DEVELOPMENT">
                    Research and Development
                  </option>
                  <option value="HUMAN_RESOURCES">Human Resources</option>
                  <option value="ENVIRONMENTAL_SERVICES">
                    Environmental Services
                  </option>
                  <option value="SOCIAL_SERVICES">Social Services</option>
                  <option value="OTHERS">Others</option>
                </select>
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Skills</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="skillshead2"
                  value={houseHoldHead.skillshead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Company Address</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="companyaddresshead2"
                  value={houseHoldHead.companyaddresshead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="noborder">
              <td colSpan={2}>Educational Attainment</td>
            </tr>
            <tr className="tbl-row">
              <td>College</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="collegehead2"
                  value={houseHoldHead.collegehead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>High School</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="highschoolhead2"
                  value={houseHoldHead.highschoolhead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Elementary School</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="elementaryhead2"
                  value={houseHoldHead.elementaryhead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="tbl-row">
              <td>Vocational Course</td>
              <td>
                <input
                  type="text"
                  className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                  name="vocationalcoursehead2"
                  value={houseHoldHead.vocationalcoursehead2}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </table>
        )}
      </div>
      <div className="my-2 flex flex-col justify-center items-center">
        <table id="tbl-profiling">
          <tr className="noborder">
            <td colSpan={2}>
              <p className="font-bold text-2xl max-sm:text-lg max-sm:text-center">
                Household Head Member Information
              </p>
            </td>
          </tr>
          <tr className="tbl-row">
            <td>No of Household members living in the house</td>
            <td>
              <input
                type="number"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="members"
                value={houseHoldHead.members}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr className="tbl-row">
            <td>No. of Children:</td>
            <td>
              <input
                type="number"
                className="px-2 py-1 bg-transparent focus:outline-none w-[100%] max-sm:w-full"
                name="children"
                value={houseHoldHead.children}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </table>
      </div>
      <Profiling
        handleSubmit={handleSubmit}
        houseHoldHead={houseHoldHead}
        handleInput={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        photo={photo}
        handleIconClick={handleIconClick}
        handleFileChangePhoto={handleFileChangePhoto}
        fileInputRef={fileInputRef}
        mutation={mutation}
        noFutureDates={noFutureDates}
      />
      <Toaster />
    </div>
  );
};

export default ResidentProfiling;
