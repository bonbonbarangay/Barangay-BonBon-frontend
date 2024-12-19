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
import "../../App.css"
const getAgeByBirthdate = (birthdate) => {
  const birthDate = dayjs(birthdate);
  const today = dayjs();
  const age = today.diff(birthDate, 'year');
  return age;
}
const ResidentProfiling = () => {
  const [photo, setPhoto] = useState("");
  const [genderSelectionHead1, setGenderSelectionHead1] = useState("MALE");
  const [genderSelectionHead2, setGenderSelectionHead2] = useState("MALE");
  const [addresshead1Selection, setAddressHead1Selection] = useState("ZONE 1");
  const [addresshead2Selection, setAddressHead2Selection] = useState("ZONE 1");
  const [dateOfBirthHead1, setDateOfBirthHead1] = useState(dayjs());
  const [dateOfBirthHead2, setDateOfBirthHead2] = useState(dayjs());
  const maxDate = dayjs().subtract(365*18, 'day');
  const noFutureDates = dayjs().subtract(1, 'day');
  const { handleCreateFormStatus } = FormStatusHook();
  const [ headMaritalStatus, setHeadMaritalStatus ] = useState("");
  const { handleCreateHouseHold, mutation } = HouseHoldHook();
  const { handleCreateHouseMembers } =
    HouseMembersHook();
  const [houseHoldHead, setHouseHoldHead] = useState({
    //additional
    userid: getFromLocalStorage("id"),

    // data1
    lastnamehead1: "",
    firstnamehead1: "",
    mihead1: "",
    exthead1: "",
    addresshead1: "",
    dateofbirthhead1: "",
    genderhead1: genderSelectionHead1,
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
    genderhead2: genderSelectionHead2,
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

   const areAllFieldsFilled = (object, isExcluded=false) => {
    // List of keys to exclude from validation
    const excludedKeys = [
        'addresshead2', 
        'lastnamehead2', 
        'firstnamehead2', 
        'mihead2', 
        'exthead2', 
        'dateofbirthhead2', 
        'genderhead2', 
        'civilstatushead2', 
        'religionhead2', 
        'typeofidhead2', 
        'idnohead2', 
        'mobilenohead2', 
        'occupationhead2', 
        'skillshead2', 
        'companyaddresshead2', 
        'collegehead2', 
        'highschoolhead2', 
        'elementaryhead2', 
        'vocationalcoursehead2'
    ];

    // Determine which keys to filter based on the isExcluded flag
    const keysToCheck = isExcluded ? Object.keys(object).filter(key => !excludedKeys.includes(key)) : Object.keys(object);

    // Check if all relevant fields are filled
    return keysToCheck.every(key => object[key] !== "");
};
  const handleDateOfBirthHead1 = (date) => {
    if (date) {
      setDateOfBirthHead1(date);
    }
  };
  const handleDateOfBirthHead2 = (date) => {
    if (date) {
      setDateOfBirthHead2(date);
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

  const handleMaritalStatus = (name,value)  =>{
    const valueUpper = value.toUpperCase();
    setHouseHoldHead((prevState) => ({
      ...prevState,
      [name]: valueUpper,
    }));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const valueUpper = value.toUpperCase();
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
    if (photo == "") {
      handleInvalid("Update ID Photo");
      return;
    }

    const isSingleOrWidow = houseHoldHead.civilstatushead1 === "SINGLE" || houseHoldHead.civilstatushead1 === "WIDOW";
    console.log({isSingleOrWidow,status:houseHoldHead.civilstatushead1})
    const validHouseHoldHead = areAllFieldsFilled(houseHoldHead, isSingleOrWidow);
    const validHouseHoldMembers = areAllFieldsFilled(household);
    const validData = areAllFieldsFilled(data);
    if(validHouseHoldHead && validHouseHoldMembers && validData){
        handleCreateHouseHold(houseHoldHead);
        handleCreateHouseMembers(household);
        handleCreateFormStatus(data);
    }else{
      console.log({houseHoldHead,household,data});
        handleInvalid("All fields are required");
    }
  };

  useEffect(() => {
    setHouseHoldHead((prev) => ({
      ...prev,
      image: photo,
      genderhead1: genderSelectionHead1.toUpperCase(),
      genderhead2: genderSelectionHead2.toUpperCase(),
      addresshead1: addresshead1Selection.toUpperCase(),
      addresshead2: addresshead2Selection.toUpperCase(),
      dateofbirthhead1: formatDate(dateOfBirthHead1),
      dateofbirthhead2: formatDate(dateOfBirthHead2),
    }));

    return () => {
      setHouseHoldHead((prev) => ({
        ...prev,
        image: "",
        genderhead1: "",
        genderhead2: "",
        addresshead1: "",
        addresshead2: "",
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

    <div className="flex flex-row justify-center items-center gap-4">
        <table id="tbl-profiling">
        <tr className="noborder">
          <td className="font-bold" colSpan={2}>
            <p className="text-2xl">Household Head Information</p>
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
            <input
              type="text"
              className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
              name="exthead1"
                  value={houseHoldHead.exthead1}
                  onChange={handleInputChange}
                />
          </td>
        </tr>
        <tr className="tbl-row">
          <td>Zone</td>
          <td>
           <select
            id="status"
            value={addresshead1Selection}
            onChange={(e) => setAddressHead1Selection(e.target.value)}
            className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
          >
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
                    value={genderSelectionHead1}
                    onChange={(e) => setGenderSelectionHead1(e.target.value)}
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"

                  >
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
                    onChange={(e) =>{ handleMaritalStatus("civilstatushead1",e.target.value)
handleMaritalStatus("civilstatushead2",e.target.value)

                    }}
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
                  >
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
                  onChange={(e) => handleMaritalStatus("religionhead1", e.target.value)} // Function to handle changes
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"

              >
                  <option value="CATHOLIC">Roman Catholic</option>
                  <option value="PROTESTANT">Protestant</option>
                  <option value="ISLAM">Islam</option>
                  <option value="IGLESIA NI CRISTO">Iglesia Ni Cristo</option>
                  <option value="SEVENTH-DAY ADVENTIST">Seventh-Day Adventist</option>
                  <option value="ATHEIST">Atheist</option>
                  <option value="OTHER">Other</option> {/* Option for those who may not identify with the listed religions */}
              </select>
          </td>
        </tr>
        <tr className="tbl-row">
          <td>Type of ID</td>
          <td>
             <input
              type="text"
              className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
              name="typeofidhead1"
              value={houseHoldHead.typeofidhead1}
              onChange={handleInputChange}
              
            />
          </td>
        </tr>
        <tr className="tbl-row">
          <td>ID No</td>
          <td>
             <input
              type="number"
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
                      onChange={(e) => handleMaritalStatus("occupationhead1",e.target.value)} // Function to handle changes
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"

                  >
                      <option value="IT">Information Technology</option>
                      <option value="BPO">Business Process Outsourcing</option>
                      <option value="HEALTHCARE">Healthcare</option>
                      <option value="EDUCATION">Education</option>
                      <option value="ENGINEERING">Engineering</option>
                      <option value="SALES_MARKETING">Sales and Marketing</option>
                      <option value="FINANCE_ACCOUNTING">Finance and Accounting</option>
                      <option value="CONSTRUCTION">Construction</option>
                      <option value="HOSPITALITY_TOURISM">Hospitality and Tourism</option>
                      <option value="MANUFACTURING">Manufacturing</option>
                      <option value="LOGISTICS_SUPPLY_CHAIN">Logistics and Supply Chain</option>
                      <option value="TELECOMMUNICATIONS">Telecommunications</option>
                      <option value="CREATIVE_ARTS_DESIGN">Creative Arts and Design</option>
                      <option value="REAL_ESTATE">Real Estate</option>
                      <option value="LEGAL_SERVICES">Legal Services</option>
                      <option value="AGRICULTURE">Agriculture</option>
                      <option value="RESEARCH_DEVELOPMENT">Research and Development</option>
                      <option value="HUMAN_RESOURCES">Human Resources</option>
                      <option value="ENVIRONMENTAL_SERVICES">Environmental Services</option>
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
      {houseHoldHead.civilstatushead1.toUpperCase() === "MARRIED" && <table id="tbl-profiling">
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
            <input
              type="text"
              className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
              name="exthead2"
                  value={houseHoldHead.exthead2}
                  onChange={handleInputChange}
                />
          </td>
        </tr>
        <tr className="tbl-row">
          <td>Zone</td>
          <td>
           <select
            id="status"
            value={addresshead2Selection}
            onChange={(e) => setAddressHead2Selection(e.target.value)}
            className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"
          >
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
                          onChange={handleDateOfBirthHead2}
            
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
                    value={genderSelectionHead2}
                    onChange={(e) => setGenderSelectionHead2(e.target.value)}
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"

                  >
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
                  onChange={(e) => handleMaritalStatus("religionhead2", e.target.value)} // Function to handle changes
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"

              >
                  <option value="CATHOLIC">Roman Catholic</option>
                  <option value="PROTESTANT">Protestant</option>
                  <option value="ISLAM">Islam</option>
                  <option value="IGLESIA NI CRISTO">Iglesia Ni Cristo</option>
                  <option value="SEVENTH-DAY ADVENTIST">Seventh-Day Adventist</option>
                  <option value="ATHEIST">Atheist</option>
                  <option value="OTHER">Other</option> {/* Option for those who may not identify with the listed religions */}
              </select>
          </td>
        </tr>
        <tr className="tbl-row">
          <td>Type of ID</td>
          <td>
             <input
              type="text"
              className="px-2 py-1 bg-transparent focus:outline-none w-[40%] max-sm:w-full"
              name="typeofidhead2"
              value={houseHoldHead.typeofidhead2}
              onChange={handleInputChange}
              
            />
          </td>
        </tr>
        <tr className="tbl-row">
          <td>ID No</td>
          <td>
             <input
              type="number"
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
                      onChange={(e) => handleMaritalStatus("occupationhead2",e.target.value)} // Function to handle changes
                    className=" border rounded-md p-2 w-full text-sm bg-transparent focus:outline-none"

                  >
                      <option value="IT">Information Technology</option>
                      <option value="BPO">Business Process Outsourcing</option>
                      <option value="HEALTHCARE">Healthcare</option>
                      <option value="EDUCATION">Education</option>
                      <option value="ENGINEERING">Engineering</option>
                      <option value="SALES_MARKETING">Sales and Marketing</option>
                      <option value="FINANCE_ACCOUNTING">Finance and Accounting</option>
                      <option value="CONSTRUCTION">Construction</option>
                      <option value="HOSPITALITY_TOURISM">Hospitality and Tourism</option>
                      <option value="MANUFACTURING">Manufacturing</option>
                      <option value="LOGISTICS_SUPPLY_CHAIN">Logistics and Supply Chain</option>
                      <option value="TELECOMMUNICATIONS">Telecommunications</option>
                      <option value="CREATIVE_ARTS_DESIGN">Creative Arts and Design</option>
                      <option value="REAL_ESTATE">Real Estate</option>
                      <option value="LEGAL_SERVICES">Legal Services</option>
                      <option value="AGRICULTURE">Agriculture</option>
                      <option value="RESEARCH_DEVELOPMENT">Research and Development</option>
                      <option value="HUMAN_RESOURCES">Human Resources</option>
                      <option value="ENVIRONMENTAL_SERVICES">Environmental Services</option>
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
      </table>}
     
    </div>
    <div className="my-2 flex flex-col justify-center items-center">
       <table id="tbl-profiling">
        <tr className="noborder">
          <td colSpan={2}>
            <p className="font-bold text-2xl">Household Head Member Information</p>
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
