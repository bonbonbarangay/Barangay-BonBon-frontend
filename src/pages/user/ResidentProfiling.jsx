import { useState, useEffect } from "react";
import { houseHeadSchema } from "../../zod/schema";
import { calculateAge } from "../../utils/computeAge";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
import HouseMembersHook from "../../hooks/residentprofiling/HouseMembers";
import { Toaster } from "react-hot-toast";

const ResidentProfiling = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(houseHeadSchema),
    defaultValues: {
      members: "",
      householdMembers: [],
      exthead1: "JR",
      genderhead1: "FEMALE",
      civilstatushead1: "SINGLE",
      religionhead1: "CATHOLIC",
    },
  });
  const [preview, setPreview] = useState(null);
  const civilStatus = watch("civilstatushead1");
  const question1 = watch("question1");
  const question3 = watch("question3");
  const selectedDate = watch("dateofbirthhead1");
  const selectedDateSpouse = watch("dateofbirthhead2");
  const { handleCreateHouseHold, mutation } = HouseHoldHook();
  const { handleCreateHouseMembers } = HouseMembersHook();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "householdMembers",
  });
  const householdMembers = watch("householdMembers");
  const religionHead1 = watch("religionhead1");

  const religionHead2 = watch("religionhead2");
  const occupationHead1 = watch("occupationhead1");
  const occupationHead2 = watch("occupationhead2");
  const numberOfMembers = watch("members");

  useEffect(() => {
    if (selectedDate) {
      const age = calculateAge(selectedDate);
      setValue("agehead1", age.toString(), { shouldValidate: true });
    }
  }, [selectedDate, setValue]);

  useEffect(() => {
    if (selectedDateSpouse) {
      const age = calculateAge(selectedDate);
      setValue("agehead2", age.toString(), { shouldValidate: true });
    }
  }, [selectedDateSpouse, setValue]);

  useEffect(() => {
    if (civilStatus == "MARRIED") {
      setValue("civilstatushead2", "MARRIED", { shouldValidate: true });
    }
  }, [civilStatus, setValue]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Must be an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        setValue("image", base64);
        setPreview(base64);
      };
      reader.onerror = () => {
        alert("Failed to read file");
      };
      reader.readAsDataURL(file);
    } else {
      setValue("image", "");
      setPreview(null);
    }
  };

  useEffect(() => {
    if (householdMembers) {
      householdMembers.forEach((member, index) => {
        console.log(member.dob);
        if (member.dob) {
          const age = calculateAge(member.dob);
          setValue(`householdMembers.${index}.age`, age.toString(), {
            shouldValidate: true,
          });
        }
      });
    }
  }, [JSON.stringify(householdMembers), setValue]);

  useEffect(() => {
    const currentMembers = fields.length;
    const newMembers = parseInt(numberOfMembers) || 0;

    if (newMembers > currentMembers) {
      for (let i = currentMembers; i < newMembers; i++) {
        append({
          lastNameFirstName: "",
          dob: "",
          age: "0",
          relation: "HUSBAND",
          pwd: "NO",
          gender: "MALE",
          education: "ELEMENTARY LEVEL",
          occupation: "NONE",
        });
      }
    } else if (newMembers < currentMembers) {
      // Remove extra members
      const membersToRemove = currentMembers - newMembers;
      for (let i = 0; i < membersToRemove; i++) {
        remove(currentMembers - 1 - i); // Remove from the end
      }
    }
  }, [numberOfMembers, append, remove, fields.length]);
  const onSubmit = (data) => {
    const householdMembersOnly = data.householdMembers;
    const { householdMembers, ...restOfData } = data;
    handleCreateHouseHold(restOfData);
    handleCreateHouseMembers(householdMembersOnly);

    reset();
  };

  return (
    <div className="w-full h-auto">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h1 className="text-2xl font-bold mb-6">Resident Profiling Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full h-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                {...register("firstnamehead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.firstnamehead1 && (
                <p className="text-red-500 text-sm">
                  {errors.firstnamehead1.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                {...register("lastnamehead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.lastnamehead1 && (
                <p className="text-red-500 text-sm">
                  {errors.lastnamehead1.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                M.I
              </label>
              <input
                {...register("mihead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.mihead1 && (
                <p className="text-red-500 text-sm">{errors.mihead1.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Extension Name
              </label>
              <select
                {...register("exthead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="NONE">None</option>
                <option value="JR">Jr</option>
                <option value="SR">Sr</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
              {errors.exthead1 && <p>{errors.exthead1.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                {...register("addresshead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.addresshead1 && (
                <p className="text-red-500 text-sm">
                  {errors.addresshead1.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                {...register("dateofbirthhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.dateofbirthhead1 && (
                <p className="text-red-500 text-sm">
                  {errors.dateofbirthhead1.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>
              <input
                type="text" // Use type="text" since age is a string
                {...register("agehead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                readOnly
              />
              {errors.agehead1 && (
                <p className="text-red-500 text-sm">
                  {errors.agehead1.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                {...register("genderhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="FEMALE">Female</option>
                <option value="MALE">Male</option>
                <option value="LGBTQ">LGTBQ</option>
              </select>
              {errors.genderhead1 && <p>{errors.genderhead1.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Civil Status
              </label>
              <select
                {...register("civilstatushead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="MARRIED">MARRIED</option>
                <option value="SINGLE">SINGLE</option>
              </select>
              {errors.civilstatushead1 && (
                <p>{errors.civilstatushead1.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Religion
              </label>
              <select
                {...register("religionhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="CATHOLIC">Catholic</option>
                <option value="INC">Iglesia ni Cristo</option>
                <option value="AGLIPAYAN">Aglipayan Church</option>
                <option value="BAPTIST">Baptist</option>
                <option value="EVANGELICAL_PROTESTANTISM">
                  Evangelical Protestantism
                </option>
                <option value="ISLAM">Islam</option>
                <option value="ROMAN_CATHOLIC">Roman Catholic</option>
                <option value="SEVENTH_DAY_ADVENTIST">
                  Seventh-Day Adventist
                </option>
                <option value="BUDDHISM">Buddhism</option>
                <option value="OTHERS">Other</option>
              </select>
              {errors.religionhead1 && <p>{errors.religionhead1.message}</p>}
            </div>

            {religionHead1 == "OTHERS" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Other Religion
                </label>
                <input
                  {...register("religionotherhead1")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.religionotherhead1 && (
                  <p className="text-red-500 text-sm">
                    {errors.religionotherhead1.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type of ID
              </label>
              <select
                {...register("typeofidhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="SSS">SSS</option>
                <option value="PAGIBIG">PAG-IBIG</option>
                <option value="BIR">BIR (Bureau of Internal Revenue) ID</option>
                <option value="DRIVERS_LICENSE">Driver’s License</option>
                <option value="GSIS">
                  Government Service Insurance System (GSIS) eCard
                </option>
                <option value="PHILSYS">
                  Philippine National ID (PhilSys)
                </option>
                <option value="PASSPORT">Philippine Passport</option>
                <option value="POSTAL_ID">Postal ID</option>
                <option value="PRC">
                  Professional Regulation Commission (PRC) ID
                </option>
                <option value="TIN">Tax Identification Number (TIN) ID</option>
                <option value="UMID">Unified Multi-Purpose ID (UMID)</option>
                <option value="VOTERS_ID">Voter’s ID</option>
              </select>
              {errors.typeofidhead1 && <p>{errors.typeofidhead1.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                ID NO
              </label>
              <input
                {...register("idnohead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.idnohead1 && (
                <p className="text-red-500 text-sm">
                  {errors.idnohead1.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel" // Use "tel" or "text" for better mobile support
                {...register("mobilenohead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              {errors.mobilenohead1 && (
                <p className="text-red-500 text-sm">
                  {errors.mobilenohead1.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Occupation
              </label>
              <select
                {...register("occupationhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
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
              {errors.occupationhead1 && (
                <p>{errors.occupationhead1.message}</p>
              )}
            </div>
            {occupationHead1 == "OTHERS" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Other Occupation
                </label>
                <input
                  {...register("occupationotherhead1")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.occupationotherhead1 && (
                  <p className="text-red-500 text-sm">
                    {errors.occupationotherhead1.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Skills
              </label>
              <input
                {...register("skillshead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Address
              </label>
              <input
                {...register("companyaddresshead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                College
              </label>
              <select
                {...register("collegehead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>
                <option value="COLLEGE LEVEL">COLLEGE LEVEL</option>
                <option value="UNDER GRADUATE">UNDER GRADUATE</option>
                <option value="POST GRADUATE">POST GRADUATE</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                High School
              </label>
              <select
                {...register("highschoolhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>
                <option value="HIGH SCHOOL LEVEL">HIGH SCHOOL LEVEL</option>
                <option value="HIGH SCHOOL GRADUATE">
                  HIGH SCHOOL GRADUATE
                </option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Elementary
              </label>
              <select
                {...register("elementaryhead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>
                <option value="ELEMENTARY LEVEL">ELEMENTARY LEVEL</option>
                <option value="ELEMENTARY GRADUATE">ELEMENTARY GRADUATE</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Vocational Course{" "}
              </label>
              <input
                {...register("vocationalcoursehead1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          {/* Spouse Information (Shown Only if Married) */}
          <div className="w-full h-auto">
            {civilStatus == "MARRIED" && (
              <div className="w-full h-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Spouse</h1>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    {...register("firstnamehead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.firstnamehead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.firstnamehead2.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    {...register("lastnamehead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.lastnamehead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.lastnamehead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    M.I
                  </label>
                  <input
                    {...register("mihead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.mihead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.mihead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Extension Name
                  </label>
                  <select
                    {...register("exthead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="NONE">None</option>
                    <option value="JR">Jr</option>
                    <option value="SR">Sr</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                  </select>
                  {errors.exthead2 && <p>{errors.exthead2.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <input
                    {...register("addresshead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.addresshead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.addresshead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    {...register("dateofbirthhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.dateofbirthhead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.dateofbirthhead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Age
                  </label>
                  <input
                    type="text" // Use type="text" since age is a string
                    {...register("agehead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    readOnly
                  />
                  {errors.agehead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.agehead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <select
                    {...register("genderhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="FEMALE">Female</option>
                    <option value="MALE">Male</option>
                    <option value="LGBTQ">LGTBQ</option>
                  </select>
                  {errors.genderhead2 && <p>{errors.genderhead2.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Civil Status
                  </label>
                  <input
                    {...register("civilstatushead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    readOnly
                  />
                  {errors.civilstatushead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.civilstatushead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Religion
                  </label>
                  <select
                    {...register("religionhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="CATHOLIC">Catholic</option>
                    <option value="INC">Iglesia ni Cristo</option>
                    <option value="AGLIPAYAN">Aglipayan Church</option>
                    <option value="BAPTIST">Baptist</option>
                    <option value="EVANGELICAL_PROTESTANTISM">
                      Evangelical Protestantism
                    </option>
                    <option value="ISLAM">Islam</option>
                    <option value="ROMAN_CATHOLIC">Roman Catholic</option>
                    <option value="SEVENTH_DAY_ADVENTIST">
                      Seventh-Day Adventist
                    </option>
                    <option value="BUDDHISM">Buddhism</option>
                    <option value="OTHERS">Other</option>
                  </select>
                  {errors.religionhead2 && (
                    <p>{errors.religionhead2.message}</p>
                  )}
                </div>

                {religionHead2 == "OTHERS" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Other Religion
                    </label>
                    <input
                      {...register("religionotherhead2")}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.religionotherhead2 && (
                      <p className="text-red-500 text-sm">
                        {errors.religionotherhead2.message}
                      </p>
                    )}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Type of ID
                  </label>
                  <select
                    {...register("typeofidhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="SSS">SSS</option>
                    <option value="PAGIBIG">PAG-IBIG</option>
                    <option value="BIR">
                      BIR (Bureau of Internal Revenue) ID
                    </option>
                    <option value="DRIVERS_LICENSE">Driver’s License</option>
                    <option value="GSIS">
                      Government Service Insurance System (GSIS) eCard
                    </option>
                    <option value="PHILSYS">
                      Philippine National ID (PhilSys)
                    </option>
                    <option value="PASSPORT">Philippine Passport</option>
                    <option value="POSTAL_ID">Postal ID</option>
                    <option value="PRC">
                      Professional Regulation Commission (PRC) ID
                    </option>
                    <option value="TIN">
                      Tax Identification Number (TIN) ID
                    </option>
                    <option value="UMID">
                      Unified Multi-Purpose ID (UMID)
                    </option>
                    <option value="VOTERS_ID">Voter’s ID</option>
                  </select>
                  {errors.typeofidhead2 && (
                    <p>{errors.typeofidhead2.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ID NO
                  </label>
                  <input
                    {...register("idnohead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.idnohead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.idnohead2.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </label>
                  <input
                    type="tel" // Use "tel" or "text" for better mobile support
                    {...register("mobilenohead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                  {errors.mobilenohead2 && (
                    <p className="text-red-500 text-sm">
                      {errors.mobilenohead2.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Occupation
                  </label>
                  <select
                    {...register("occupationhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
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
                    <option value="TELECOMMUNICATIONS">
                      Telecommunications
                    </option>
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
                  {errors.occupationhead2 && (
                    <p>{errors.occupationhead2.message}</p>
                  )}
                </div>
                {occupationHead2 == "OTHERS" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Other Occupation
                    </label>
                    <input
                      {...register("occupationotherhead2")}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.occupationotherhead2 && (
                      <p className="text-red-500 text-sm">
                        {errors.occupationotherhead2.message}
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Skills
                  </label>
                  <input
                    {...register("skillshead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company Address
                  </label>
                  <input
                    {...register("companyaddresshead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    College
                  </label>
                  <select
                    {...register("collegehead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Option</option>
                    <option value="COLLEGE LEVEL">COLLEGE LEVEL</option>
                    <option value="UNDER GRADUATE">UNDER GRADUATE</option>
                    <option value="POST GRADUATE">POST GRADUATE</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    High School
                  </label>
                  <select
                    {...register("highschoolhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Option</option>
                    <option value="HIGH SCHOOL LEVEL">HIGH SCHOOL LEVEL</option>
                    <option value="HIGH SCHOOL GRADUATE">
                      HIGH SCHOOL GRADUATE
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Elementary
                  </label>
                  <select
                    {...register("elementaryhead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Option</option>
                    <option value="ELEMENTARY LEVEL">ELEMENTARY LEVEL</option>
                    <option value="ELEMENTARY GRADUATE">
                      ELEMENTARY GRADUATE
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Vocational Course{" "}
                  </label>
                  <input
                    {...register("vocationalcoursehead2")}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            )}
          </div>
          {/* Type of Beneficiaries */}

          <div className="w-full h-auto">
            <div>
              <h1 className="text-2xl font-semibold">Type of Beneficiaries</h1>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                4ps
              </label>
              <select
                {...register("fourps")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>

                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                UCT
              </label>
              <select
                {...register("uct")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>

                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Solo Parent
              </label>
              <select
                {...register("soloparent")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>

                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senior Citizen
              </label>
              <select
                {...register("seniorcitizen")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>

                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pwd
              </label>
              <select
                {...register("pwd")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>
                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                IP
              </label>
              <select
                {...register("ip")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Option</option>
                <option value="NO">No</option>
                <option value="YES">Yes</option>
              </select>
            </div>
          </div>

          {/* members and children */}
          <div className="w-full h-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of House hold member living in the house
              </label>
              <input
                type="tel" // Use "tel" or "text" for better mobile support
                {...register("members")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              {errors.members && (
                <p className="text-red-500 text-sm">{errors.members.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Number of Children
              </label>
              <input
                type="tel" // Use "tel" or "text" for better mobile support
                {...register("children")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              {errors.children && (
                <p className="text-red-500 text-sm">
                  {errors.children.message}
                </p>
              )}
            </div>
          </div>
          {/* questions */}
          <div className="w-full h-auto">
            <div>
              <h1 className="text-xl font-semibold mb-2">
                HOUSEHOLD CENSUS QUESTIONS
              </h1>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                1. DO YOU OWN THE HOUSE YOU ARE LIVING?
              </label>
              <select
                {...register("question1")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </div>
            {question1 === "NO" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  IF NO, RENTED?
                </label>
                <select
                  {...register("renting")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="NO">NO</option>
                  <option value="YES">YES</option>
                </select>
                {errors.renting && (
                  <p className="text-red-500 text-sm">
                    {errors.renting.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                2.HOW LONG HAVE YOU BEEN STAYING IN BARANGAY BONBON?{" "}
              </label>
              <input
                {...register("question2")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.question2 && (
                <p className="text-red-500 text-sm">
                  {errors.question2.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                3. ARE YOU A REGISTERED VOTER IN THIS BARANGAY?
              </label>
              <select
                {...register("question3")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
              {errors.question3 && <p>{errors.question3.message}</p>}
            </div>

            {question3 === "YES" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  VOTER'S ID PRECINCT NUMBER:
                </label>
                <input
                  {...register("questionPrecinctNo")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.questionPrecinctNo && (
                  <p className="text-red-500 text-sm">
                    {errors.questionPrecinctNo.message}
                  </p>
                )}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                4. DO YOU HAVE YOUR OWN CR?
              </label>
              <select
                {...register("question4")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>

              {errors.question4 && <p>{errors.question4.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                5. DO YOU HAVE YOUR SOURCE OF WATER SUPPLY?
              </label>
              <select
                {...register("question5")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
              {errors.question5 && <p>{errors.question5.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                6. DO YOU HAVE YOUR OWN ELECTRICITY?
              </label>
              <select
                {...register("question6")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="NO">NO</option>
                <option value="YES">YES</option>
              </select>
              {errors.question6 && <p>{errors.question6.message}</p>}
            </div>
          </div>
          {/* Household Members */}
          {/* Household Members Section */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-4">Household Members</h2>
            {fields.map((field, index) => {
              const occupation = watch(`householdMembers.${index}.occupation`);

              return (
                <div key={field.id} className="mb-6 p-4 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">
                    Household Member {index + 1}
                  </h3>

                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      {...register(
                        `householdMembers.${index}.lastNameFirstName`,
                        {
                          onChange: (e) => {
                            e.target.value = e.target.value.toUpperCase(); // Convert input to uppercase
                          },
                        }
                      )}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />

                    {errors.householdMembers?.[index]?.lastNameFirstName && (
                      <p className="text-red-500 text-sm">
                        {
                          errors.householdMembers[index]?.lastNameFirstName
                            ?.message
                        }
                      </p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      {...register(`householdMembers.${index}.dob`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.householdMembers?.[index]?.dob && (
                      <p className="text-red-500 text-sm">
                        {errors.householdMembers[index]?.dob?.message}
                      </p>
                    )}
                  </div>

                  {/* Age (Read-only) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      {...register(`householdMembers.${index}.age`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      readOnly
                    />
                    {errors.householdMembers?.[index]?.age && (
                      <p className="text-red-500 text-sm">
                        {errors.householdMembers[index]?.age?.message}
                      </p>
                    )}
                  </div>

                  {/* Relationship */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Relation
                    </label>
                    <select
                      {...register(`householdMembers.${index}.relation`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="HUSBAND">Husband</option>
                      <option value="WIFE">Wife</option>
                      <option value="LIVE-IN-PARTNER">Live-in Partner</option>
                      <option value="SON">Son</option>
                      <option value="DAUGHTER">Daughter</option>
                      <option value="FATHER">Father</option>
                      <option value="MOTHER">Mother</option>
                      <option value="BROTHER">Brother</option>
                      <option value="SISTER">Sister</option>
                      <option value="GRANDFATHER">Grandfather</option>
                      <option value="GRANDMOTHER">Grandmother</option>
                      <option value="GRANDSON">Grandson</option>
                      <option value="GUARDIAN">Guardian</option>
                      <option value="GRANDDAUGHTER">Granddaughter</option>
                      <option value="UNCLE">Uncle</option>
                      <option value="AUNT">Aunt</option>
                      <option value="NEPHEW">Nephew</option>
                      <option value="NIECE">Niece</option>
                      <option value="COUSIN">Cousin</option>
                    </select>
                  </div>
                  {/* PWD */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      PWD
                    </label>
                    <select
                      {...register(`householdMembers.${index}.pwd`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="YES">Yes</option>
                      <option value="NO">No</option>
                    </select>
                    {errors.householdMembers?.[index]?.pwd && (
                      <p className="text-red-500 text-sm">
                        {errors.householdMembers[index]?.pwd?.message}
                      </p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Gender
                    </label>
                    <select
                      {...register(`householdMembers.${index}.gender`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                      <option value="LGBTQ">LGBTQ</option>
                    </select>
                    {errors.householdMembers?.[index]?.gender && (
                      <p className="text-red-500 text-sm">
                        {errors.householdMembers[index]?.gender?.message}
                      </p>
                    )}
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Highest Educational Attainment
                    </label>
                    <select
                      {...register(`householdMembers.${index}.education`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      defaultValue="ELEMENTARY LEVEL" // Add this line
                    >
                      <option value="ELEMENTARY LEVEL">Elementary Level</option>
                      <option value="ELEMENTARY GRADUATE">
                        Elementary Graduate
                      </option>
                      <option value="HIGH SCHOOL LEVEL">
                        High School Level
                      </option>
                      <option value="HIGH SCHOOL GRADUATE">
                        High School Graduate
                      </option>
                      <option value="VOCATIONAL COURSE">
                        Vocational Course
                      </option>
                      <option value="COLLEGE LEVEL">College Level</option>
                      <option value="COLLEGE GRADUATE">College Graduate</option>
                      <option value="POSTGRADUATE (E.G, MASTER'S DOCTORATE)">
                        Postgraduate (e.g., Master's, Doctorate)
                      </option>
                      <option value="OUT OF SCHOOL YOUTHS">
                        Out of School Youths
                      </option>
                    </select>
                    {errors.householdMembers?.[index]?.education && (
                      <p className="text-red-500 text-sm">
                        {errors.householdMembers[index]?.education?.message}
                      </p>
                    )}
                  </div>

                  {/* Occupation */}

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Occupation
                    </label>
                    <select
                      {...register(`householdMembers.${index}.occupation`)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    >
                      <option value="IT">Information Technology</option>
                      <option value="BPO">Business Process Outsourcing</option>
                      <option value="HEALTHCARE">Healthcare</option>
                      <option value="EDUCATION">Education</option>
                      <option value="ENGINEERING">Engineering</option>
                      <option value="SALES_MARKETING">
                        Sales and Marketing
                      </option>
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
                      <option value="TELECOMMUNICATIONS">
                        Telecommunications
                      </option>
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

                      <option value="NONE">None</option>
                    </select>
                    {errors.householdMembers?.[index]?.occupation && (
                      <p className="text-red-500 text-sm">
                        {errors.householdMembers[index]?.occupation?.message}
                      </p>
                    )}
                  </div>

                  <div>
                    {occupation === "OTHERS" && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Specify Occupation
                        </label>
                        <input
                          {...register(
                            `householdMembers.${index}.occupationother`
                          )}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                          placeholder="Enter your occupation"
                        />
                        {errors.householdMembers?.[index]?.occupationother && (
                          <p className="text-red-500 text-sm">
                            {
                              errors.householdMembers[index]?.occupationother
                                ?.message
                            }
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Remove Member
                  </button>
                </div>
              );
            })}
          </div>
          {/* image */}

          <div>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Upload Image
            </h1>

            {/* File Input */}
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                UPLOAD VALID ID
              </label>
              <input
                type="file"
                id="image"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.image.message}
                </p>
              )}
            </div>

            {preview && (
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Preview:
                </h3>
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-64 rounded-lg shadow-sm"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ResidentProfiling;
