import React, { useState, useRef, useEffect } from "react";
import Profiling from "../../components/user/Profiling";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
import { getFromLocalStorage } from "../../utils/localStorage";
import HouseMembersHook from "../../hooks/residentprofiling/HouseMembers";
import { Toaster } from "react-hot-toast";
import { handleInvalid } from "../../components/toastify/Toastify";
import FormStatusHook from "../../hooks/formstatus/FormStatus";
const ResidentProfiling = () => {
  const [photo, setPhoto] = useState("");
  const [genderSelectionHead1, setGenderSelectionHead1] = useState("male");
  const [genderSelectionHead2, setGenderSelectionHead2] = useState("male");
  const [addresshead1Selection, setAddressHead1Selection] = useState("zone1");
  const [addresshead2Selection, setAddressHead2Selection] = useState("zone1");

  const { handleCreateFormStatus } = FormStatusHook();
  const { handleCreateHouseHold, mutation } = HouseHoldHook();
  const { handleCreateHouseMembers, createHouseMembersMutation } =
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHouseHoldHead((prevState) => ({
      ...prevState,
      [name]: value,
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
      genderhead1: genderSelectionHead1,
      genderhead2: genderSelectionHead2,
      addresshead1: addresshead1Selection,
      addresshead2: addresshead2Selection,
    }));

    return () => {
      setHouseHoldHead((prev) => ({
        ...prev,
        image: "",
        genderhead1: "",
        genderhead2: "",
        addresshead1: "",
        addresshead2: "",
      }));
    };
  }, [photo]);
  return (
    <div className="w-full bg-[#DEE5F8] px-5 py-3 h-auto">
      <div>
        <h1 className="text-center text-2xl font-bold">
          RESIDENT AND HOUSEHOLD PROFILING
        </h1>
      </div>

      <div className="w-full flex  gap-5 mt-5">
        <div className="w-[60%] pr-3 border-r-2 border-[#000] ">
          <div className="mt-5 w-full">
            <div className="mt-5 flex items-center  w-full">
              <div className="w-[25%]">
                <h1>Name of Household Head:</h1>
              </div>
              <div className="flex items-center gap-5 w-[75%]">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-auto"
                  placeholder="Last Name  "
                  name="lastnamehead1"
                  value={houseHoldHead.lastnamehead1}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-auto"
                  placeholder="First Name "
                  name="firstnamehead1"
                  value={houseHoldHead.firstnamehead1}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%]"
                  placeholder="M. I"
                  name="mihead1"
                  value={houseHoldHead.mihead1}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%]"
                  placeholder="Ext."
                  name="exthead1"
                  value={houseHoldHead.exthead1}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 w-full">
              <div>
                <h1>Zone:</h1>
              </div>
              <div className=" w-[80%]">
                <div className="w-full">
                  <select
                    id="status"
                    value={addresshead1Selection}
                    onChange={(e) => setAddressHead1Selection(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-full text-sm	bg-[#fff] "
                  >
                    <option value="zone1">Zone 1</option>
                    <option value="zone2">Zone 2</option>
                    <option value="zone3">Zone 3</option>
                    <option value="zone4">Zone 4</option>
                    <option value="zone5">Zone 5</option>
                    <option value="zone6">Zone 6</option>
                    <option value="zone7">Zone 7</option>
                    <option value="zone8">Zone 8</option>
                    <option value="zone9">Zone 9</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 w-full">
              <div className="flex items-center gap-1 w-[40%]">
                <div>
                  <h1>Date of Birth:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]  "
                    name="dateofbirthhead1"
                    value={houseHoldHead.dateofbirthhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Age:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[50px]"
                    name="agehead1"
                    value={houseHoldHead.agehead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <h1>Gender:</h1>
                </div>
                <div>
                  <select
                    id="status"
                    value={genderSelectionHead1}
                    onChange={(e) => setGenderSelectionHead1(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-[70px] text-xs	bg-[#fff]"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="lgbtq">LGBTQ</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1 ">
                <div>
                  <h1>Civil Status:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[100px]"
                    name="civilstatushead1"
                    value={houseHoldHead.civilstatushead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Religion:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[100px]"
                    name="religionhead1"
                    value={houseHoldHead.religionhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 w-full">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Type of ID:</h1>
                </div>
                <div className="w-[60%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="typeofidhead1"
                    value={houseHoldHead.typeofidhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>ID No:</h1>
                </div>
                <div className="w-[60%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="idnohead1"
                    value={houseHoldHead.idnohead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Mobile/Tel No:</h1>
                </div>
                <div className="w-[60%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="mobilenohead1"
                    value={houseHoldHead.mobilenohead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Occupation:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] "
                    name="occupationhead1"
                    value={houseHoldHead.occupationhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Skills:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]"
                    name="skillshead1"
                    value={houseHoldHead.skillshead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 w-full">
              <div>
                <h1>Company Address:</h1>
              </div>
              <div className=" w-[60%]">
                <div className="w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]  w-full"
                    name="companyaddresshead1"
                    value={houseHoldHead.companyaddresshead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Educational Attainment: College:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] "
                    name="collegehead1"
                    value={houseHoldHead.collegehead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>High School:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]"
                    name="highschoolhead1"
                    value={houseHoldHead.highschoolhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 border-b-2 border-[#000] py-3 ">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Elementary:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] "
                    name="elementaryhead1"
                    value={houseHoldHead.elementaryhead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Vocational Course:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]"
                    name="vocationalcoursehead1"
                    value={houseHoldHead.vocationalcoursehead1}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full">
            <div className="mt-5 flex items-center  w-full">
              <div className="w-[15%]">
                <h1>Spouse Name:</h1>
              </div>
              <div className="flex items-center gap-5 w-[80%]">
                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-auto"
                  placeholder="Last Name  "
                  name="lastnamehead2"
                  value={houseHoldHead.lastnamehead2}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-auto"
                  placeholder="First Name "
                  name="firstnamehead2"
                  value={houseHoldHead.firstnamehead2}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%]"
                  placeholder="M. I"
                  name="mihead2"
                  value={houseHoldHead.mihead2}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  className="px-2 py-1 border border-[#000] placeholder-[#000] w-[10%]"
                  placeholder="Ext."
                  name="exthead2"
                  value={houseHoldHead.exthead2}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3 w-full">
              <div>
                <h1>Zone:</h1>
              </div>
              <div className=" w-[80%]">
                <div className="w-full">
                  <select
                    id="status"
                    value={addresshead2Selection}
                    onChange={(e) => setAddressHead2Selection(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-full text-sm	bg-[#fff] "
                  >
                    <option value="zone1">Zone 1</option>
                    <option value="zone2">Zone 2</option>
                    <option value="zone3">Zone 3</option>
                    <option value="zone4">Zone 4</option>
                    <option value="zone5">Zone 5</option>
                    <option value="zone6">Zone 6</option>
                    <option value="zone7">Zone 7</option>
                    <option value="zone8">Zone 8</option>
                    <option value="zone9">Zone 9</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 w-full">
              <div className="flex items-center gap-1 w-[50%]">
                <div>
                  <h1>Date of Birth:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]  "
                    name="dateofbirthhead2"
                    value={houseHoldHead.dateofbirthhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Age:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[50px]"
                    name="agehead2"
                    value={houseHoldHead.agehead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <h1>Gender:</h1>
                </div>
                <div>
                  <select
                    id="status"
                    value={genderSelectionHead2}
                    onChange={(e) => setGenderSelectionHead2(e.target.value)}
                    className=" border border-[#000] rounded-md p-2 w-[70px] text-xs	bg-[#fff]"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="lgbtq">LGBTQ</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-1 ">
                <div>
                  <h1>Civil Status:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[100px]"
                    name="civilstatushead2"
                    value={houseHoldHead.civilstatushead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Religion:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-[100px]"
                    name="religionhead2"
                    value={houseHoldHead.religionhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 w-full">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Type of ID:</h1>
                </div>
                <div className="w-[60%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="typeofidhead2"
                    value={houseHoldHead.typeofidhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>ID No:</h1>
                </div>
                <div className="w-[60%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="idnohead2"
                    value={houseHoldHead.idnohead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Mobile/Tel No:</h1>
                </div>
                <div className="w-[60%]">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] w-full"
                    name="mobilenohead2"
                    value={houseHoldHead.mobilenohead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Occupation:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] "
                    name="occupationhead2"
                    value={houseHoldHead.occupationhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Skills:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]"
                    name="skillshead2"
                    value={houseHoldHead.skillshead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 w-full">
              <div>
                <h1>Company Address:</h1>
              </div>
              <div className=" w-[60%]">
                <div className="w-full">
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]  w-full"
                    name="companyaddresshead2"
                    value={houseHoldHead.companyaddresshead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Educational Attainment: College:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] "
                    name="collegehead2"
                    value={houseHoldHead.collegehead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>High School:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]"
                    name="highschoolhead2"
                    value={houseHoldHead.highschoolhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2 py-3 ">
              <div className="flex items-center gap-1">
                <div>
                  <h1>Elementary:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000] "
                    name="elementaryhead2"
                    value={houseHoldHead.elementaryhead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-1">
                <div>
                  <h1>Vocational Course:</h1>
                </div>
                <div>
                  <input
                    type="text"
                    className="px-2 py-1 border border-[#000]"
                    name="vocationalcoursehead2"
                    value={houseHoldHead.vocationalcoursehead2}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>No. of Household members living in the house:</h1>
            </div>
            <div className="w-[60%]">
              <input
                type="text" // Corrected type
                name="members" // Added name attribute
                className="px-2 py-1 border border-[#000] w-[20%]"
                value={houseHoldHead.members}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>No. of Children:</h1>
            </div>
            <div className="w-[60%]">
              <input
                type="text"
                className="px-2 py-1 border border-[#000] w-[20%]"
                name="children"
                value={houseHoldHead.children}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <Profiling
            handleSubmit={handleSubmit}
            houseHoldHead={houseHoldHead}
            handleInput={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            photo={photo}
            handleIconClick={handleIconClick}
            handleFileChangePhoto={handleFileChangePhoto}
            fileInputRef={fileInputRef}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ResidentProfiling;
