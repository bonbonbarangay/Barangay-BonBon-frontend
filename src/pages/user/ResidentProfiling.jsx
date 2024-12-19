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
    agehead1: "",
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
    agehead2: "",
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
    question1: "",
    question2: "",
    renting: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    image: photo,
  });

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
    handleCreateHouseHold(houseHoldHead);
    handleCreateHouseMembers(household);
    handleCreateFormStatus(data);
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
    <div className="w-full bg-[#DEE5F8] px-5 py-3 h-auto">
      <div>
        <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
          RESIDENT AND HOUSEHOLD PROFILING
        </h1>
      </div>

      <div className="w-full flex  gap-5 mt-5 max-xl:flex-col">
        <div className="w-[60%] pr-3 border-r-2 border-[#000] max-xl:w-full">
          <div className="mt-5 w-full">
            <div className="mt-5 flex items-center  w-full max-xl:gap-2 max-sm:flex-col max-sm:items-start">
              <div className="w-[25%] max-xl:w-auto ">
                <h1 className="max-sm:text-sm">Name of Household Head:</h1>
              </div>
              <div className="flex items-center gap-5 w-[75%] max-sm:w-full  max-sm:flex-col">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[40%] max-sm:w-full"
                  placeholder="Last Name  "
                  name="lastnamehead1"
                  value={houseHoldHead.lastnamehead1}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[40%] max-sm:w-full"
                  placeholder="First Name "
                  name="firstnamehead1"
                  value={houseHoldHead.firstnamehead1}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%] max-sm:w-full"
                  placeholder="M. I"
                  name="mihead1"
                  value={houseHoldHead.mihead1}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%] max-sm:w-full"
                  placeholder="Ext."
                  name="exthead1"
                  value={houseHoldHead.exthead1}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 w-full max-sm:flex-col max-sm:items-start">
              <div>
                <h1 className="max-sm:text-sm">Zone:</h1>
              </div>
              <div className=" w-[80%] max-xl:w-[60%] max-sm:w-full">
                <div className="w-full">
                  <select
                    id="status"
                    value={addresshead1Selection}
                    onChange={(e) => setAddressHead1Selection(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-full text-sm	bg-[#fff] "
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
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 w-full max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-1 w-[50%] max-xl:w-auto max-sm:w-full max-sm:flex-col max-sm:items-start ">
                <div>
                  <h1 className="max-sm:text-sm">Date of Birth:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
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
                          className="px-1 border border-[#000] bg-white cursor-pointer "
                          value={dateOfBirthHead1}
                          onChange={handleDateOfBirthHead1}
            
                          maxDate={maxDate}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="flex items-center gap-1 max-xl:w-[15%] max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Age:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[50px] max-xl:w-full "
                    name="agehead1"
                    value={getAgeByBirthdate(dateOfBirthHead1)}
                    onChange={handleInputChange}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Gender:</h1>
                </div>
                <div className="max-xl:w-full">
                  <select
                    id="status"
                    value={genderSelectionHead1}
                    onChange={(e) => setGenderSelectionHead1(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-[70px]  max-xl:w-full text-xs	bg-[#fff]"
                  >
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="LGBTQ">LGBTQ</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Civil Status:</h1>
                </div>
                <div className="max-xl:w-[50%] max-sm:w-full">
                  <select
                    id="status"
                    value={houseHoldHead.civilstatushead1}
                    onChange={(e) => handleMaritalStatus("civilstatushead1",e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-[70px]  max-xl:w-full text-xs	bg-[#fff]"
                  >
                    <option value="SINGLE">SINGLE</option>
                    <option value="MARRIED">MARRIED</option>
                    <option value="WIDOW">WIDOW</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Religion:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[100px] max-sm:w-full"
                    name="religionhead1"
                    value={houseHoldHead.religionhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 w-full max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm ">Type of ID:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="typeofidhead1"
                    value={houseHoldHead.typeofidhead1}
                    onChange={handleInputChange}
                    
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">ID No:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
                  <input
                    type="number"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="idnohead1"
                    value={houseHoldHead.idnohead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Mobile/Tel No:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
                  <input
                    type="number"
                    className="px-2 py-1 border border-[#000] w-full "
                    name="mobilenohead1"
                    value={houseHoldHead.mobilenohead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Occupation:</h1>
                </div>
                <div className="max-sm:w-full">
                    <select
                      id="job-category"
                      value={houseHoldHead.occupationhead1} // Assume you have a state variable for the selected job category
                      onChange={(e) => handleMaritalStatus("occupationhead1",e.target.value)} // Function to handle changes
                      className="border border-[#000] rounded-md p-2  max-xl:w-full text-xs bg-[#fff]"
                  >
                      <option value="" disabled>Select Job Category</option>
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
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Skills:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="skillshead1"
                    value={houseHoldHead.skillshead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 w-full max-sm:flex-col max-sm:items-start ">
              <div>
                <h1 className="max-sm:text-sm">Company Address:</h1>
              </div>
              <div className=" w-[60%] max-sm:w-full">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000]  w-full"
                  name="companyaddresshead1"
                  value={houseHoldHead.companyaddresshead1}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:w-full">
              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">
                    Educational Attainment: College:
                  </h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full "
                    name="collegehead1"
                    value={houseHoldHead.collegehead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1>High School:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="highschoolhead1"
                    value={houseHoldHead.highschoolhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 border-b-2 border-[#000] py-3 max-sm:flex-col max-sm:items-start max-sm:w-full">
              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Elementary:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="elementaryhead1"
                    value={houseHoldHead.elementaryhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Vocational Course:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="vocationalcoursehead1"
                    value={houseHoldHead.vocationalcoursehead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {houseHoldHead.civilstatushead1.toUpperCase() === "MARRIED" && <div className="mt-5 w-full">
            <div className="mt-5 flex items-center  w-full max-xl:gap-2 max-sm:flex-col max-sm:items-start">
              <div className="w-[25%] max-xl:w-auto xl:w-auto   xl:mr-2">
                <h1 className="max-sm:text-sm">Spouse Name:</h1>
              </div>
              <div className="flex items-center gap-5 w-[75%] max-sm:w-full  max-sm:flex-col">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[40%] max-sm:w-full"
                  placeholder="Last Name  "
                  name="lastnamehead2"
                  value={houseHoldHead.lastnamehead2}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[40%] max-sm:w-full"
                  placeholder="First Name "
                  name="firstnamehead2"
                  value={houseHoldHead.firstnamehead2}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%] max-sm:w-full"
                  placeholder="M. I"
                  name="mihead2"
                  value={houseHoldHead.mihead2}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%] max-sm:w-full"
                  placeholder="Ext."
                  name="exthead2"
                  value={houseHoldHead.exthead2}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 w-full max-sm:flex-col max-sm:items-start">
              <div>
                <h1 className="max-sm:text-sm">Zone:</h1>
              </div>
              <div className=" w-[80%] max-xl:w-[60%] max-sm:w-full">
                <div className="w-full">
                  <select
                    id="status"
                    value={addresshead2Selection}
                    onChange={(e) => setAddressHead2Selection(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-full text-sm	bg-[#fff] "
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
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 w-full max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-1 w-[50%] max-xl:w-auto max-sm:w-full max-sm:flex-col max-sm:items-start ">
                <div>
                  <h1 className="max-sm:text-sm">Date of Birth:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
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
                          className="px-1 border border-[#000] bg-white cursor-pointer "
                          value={dateOfBirthHead2}
                          onChange={handleDateOfBirthHead2}
                          maxDate={maxDate}
                        />
                      </DemoItem>
                    </DemoContainer>
                  </LocalizationProvider>
                </div>
              </div>

              <div className="flex items-center gap-1 max-xl:w-[15%] max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Age:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[50px] max-xl:w-full "
                    name="agehead2"
                    value={getAgeByBirthdate(dateOfBirthHead2)}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Gender:</h1>
                </div>
                <div className="max-xl:w-full">
                  <select
                    id="status"
                    value={genderSelectionHead2}
                    onChange={(e) => setGenderSelectionHead2(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-[70px]  max-xl:w-full text-xs	bg-[#fff]"
                  >
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="LGBTQ">LGBTQ</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Civil Status:</h1>
                </div>
                <div className="max-xl:w-[50%] max-sm:w-full">
                 <select
                    id="status"
                    value={houseHoldHead.civilstatushead1}
                    onChange={(e) => handleMaritalStatus("civilstatushead2",e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-[70px]  max-xl:w-full text-xs	bg-[#fff]"
                    disabled={true}
                  >
                    <option value="SINGLE">SINGLE</option>
                    <option value="MARRIED">MARRIED</option>
                    <option value="WIDOW">WIDOW</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Religion:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[100px] max-sm:w-full"
                    name="religionhead2"
                    value={houseHoldHead.religionhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 w-full max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Type of ID:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="typeofidhead2"
                    value={houseHoldHead.typeofidhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">ID No:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
                  <input
                    type="number"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="idnohead2"
                    value={houseHoldHead.idnohead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Mobile/Tel No:</h1>
                </div>
                <div className="w-[60%] max-sm:w-full">
                  <input
                    type="number"
                    className="px-2 py-1 border border-[#000] w-full "
                    name="mobilenohead2"
                    value={houseHoldHead.mobilenohead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 max-sm:flex-col max-sm:items-start">
              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Occupation:</h1>
                </div>
                <div className="max-sm:w-full">
                   <select
                      id="job-category"
                      value={houseHoldHead.occupationhead2} // Assume you have a state variable for the selected job category
                      onChange={(e) => handleMaritalStatus("occupationhead2",e.target.value)} // Function to handle changes
                      className="border border-[#000] rounded-md p-2  max-xl:w-full text-xs bg-[#fff]"
                  >
                      <option value="" disabled>Select Job Category</option>
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
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">Skills:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="skillshead2"
                    value={houseHoldHead.skillshead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 w-full max-sm:flex-col max-sm:items-start ">
              <div>
                <h1 className="max-sm:text-sm">Company Address:</h1>
              </div>
              <div className=" w-[60%] max-sm:w-full">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000]  w-full"
                  name="companyaddresshead2"
                  value={houseHoldHead.companyaddresshead2}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 max-sm:flex-col max-sm:items-start max-sm:w-full">
              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">
                    Educational Attainment: College:
                  </h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full "
                    name="collegehead2"
                    value={houseHoldHead.collegehead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:flex-col max-sm:items-start max-sm:w-full">
                <div>
                  <h1 className="max-sm:text-sm">High School:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="highschoolhead2"
                    value={houseHoldHead.highschoolhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 border-b-2 border-[#000] py-3 max-sm:flex-col max-sm:items-start max-sm:w-full">
              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Elementary:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="elementaryhead2"
                    value={houseHoldHead.elementaryhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1 max-sm:w-full max-sm:flex-col max-sm:items-start">
                <div>
                  <h1 className="max-sm:text-sm">Vocational Course:</h1>
                </div>
                <div className="max-sm:w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] max-sm:w-full"
                    name="vocationalcoursehead2"
                    value={houseHoldHead.vocationalcoursehead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>}
          <div className="mt-5 flex items-center gap-3 w-full max-sm:flex-col max-sm:items-start">
            <div>
              <h1 className="max-sm:text-sm">
                No. of Household members living in the house:
              </h1>
            </div>
            <div className="w-[60%]">
              <input
                type="number" // Corrected type
                name="members" // Added name attribute
                className="px-2 py-1 border border-[#000] w-[20%]"
                value={houseHoldHead.members}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 w-full max-sm:flex-col max-sm:items-start">
            <div>
              <h1 className="max-sm:text-sm">No. of Children:</h1>
            </div>
            <div className="w-[60%]">
              <input
                type="number"
                className="px-2 py-1 border border-[#000] w-[20%] "
                name="children"
                value={houseHoldHead.children}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="w-[40%] max-xl:w-full">
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
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ResidentProfiling;
