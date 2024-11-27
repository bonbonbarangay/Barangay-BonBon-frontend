import React, { useState } from "react";
import Profiling from "../../components/user/Profiling";
const ResidentProfiling = () => {
  const [combine, setCombine] = useState({
    household: "",
    children: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setCombine((prevState) => ({
      ...prevState,
      [name]: value, // Update the specific property dynamically
    }));
  };

  const [data, setData] = useState([
    {
      lastname: "",
      firstname: "",
      mi: "",
      ext: "",
      address: "",
      dateofbirth: "",
      age: "",
      gender: "",
      civilstatus: "",
      religion: "",
      typeofid: "",
      idno: "",
      mobileno: "",
      occupation: "",
      skills: "",
      companyaddress: "",
      college: "",
      highschool: "",
      elementary: "",
      vocationalcourse: "",
    },
    {
      lastname: "",
      firstname: "",
      mi: "",
      ext: "",
      address: "",
      dateofbirth: "",
      age: "",
      gender: "",
      civilstatus: "",
      religion: "",
      typeofid: "",
      idno: "",
      mobileno: "",
      occupation: "",
      skills: "",
      companyaddress: "",
      college: "",
      highschool: "",
      elementary: "",
      vocationalcourse: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedFormData = [...data];
    updatedFormData[index][field] = value;
    setData(updatedFormData);
  };
  const handleSubmit = (household) => {
    const dataConcat = [...data, ...household, combine];

    console.log(dataConcat.map((item) => item.firstname));
  };

  return (
    <div className="w-full bg-[#DEE5F8] px-5 py-3 h-auto">
      <div>
        <h1 className="text-center text-2xl font-bold">
          RESIDENT AND HOUSEHOLD PROFILING
        </h1>
      </div>

      <div className="w-full flex  gap-5 mt-5">
        <div className="w-[65%] pr-3 border-r-2 border-[#000] ">
          <div>
            <h1 className="text-lg font-semibold">Personal Information</h1>
          </div>

          <div>
            {data.map((person, index) => (
              <div className="mt-5">
                <div className="mt-5 flex items-center gap-3">
                  <div>
                    <h1>Name of Household Head:</h1>
                  </div>
                  <div className="flex items-center gap-5">
                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] placeholder-[#000]"
                        placeholder="Last Name "
                        value={person.lastname}
                        onChange={(e) =>
                          handleInputChange(index, "lastname", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] placeholder-[#000] "
                        placeholder="First Name "
                        value={person.firstname}
                        onChange={(e) =>
                          handleInputChange(index, "firstname", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] placeholder-[#000] w-[50px]"
                        placeholder="M. I"
                        value={person.mi}
                        onChange={(e) =>
                          handleInputChange(index, "mi", e.target.value)
                        }
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] placeholder-[#000] w-[80px]"
                        placeholder="Ext."
                        value={person.ext}
                        onChange={(e) =>
                          handleInputChange(index, "ext", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-3 w-full">
                  <div>
                    <h1>Address:</h1>
                  </div>
                  <div className=" w-[60%]">
                    <div className="w-full">
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] placeholder-[#000] w-full"
                        placeholder="(House No./Zone#/ City/Province/ Region) "
                        value={person.address}
                        onChange={(e) =>
                          handleInputChange(index, "address", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <h1>Date of Birth:</h1>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] "
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "dateofbirth",
                            e.target.value
                          )
                        }
                        value={person.dateofbirth}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div>
                      <h1>Age:</h1>
                    </div>
                    <div>
                      <input
                        type="number"
                        className="px-2 py-1 border border-[#000] w-[60px]"
                        value={person.age}
                        onChange={(e) =>
                          handleInputChange(index, "age", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div>
                      <h1>Gender:</h1>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] w-[60px]"
                        value={data.gender}
                        onChange={(e) =>
                          handleInputChange(index, "gender", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div>
                      <h1>Civil Status:</h1>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] w-[100px]"
                        value={person.civilstatus}
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "civilstatus",
                            e.target.value
                          )
                        }
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
                        value={person.religion}
                        onChange={(e) =>
                          handleInputChange(index, "religion", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div>
                      <h1>Type of ID:</h1>
                    </div>
                    <div>
                      <input
                        type="text"
                        className="px-2 py-1 border border-[#000] "
                        onChange={(e) =>
                          handleInputChange(index, "typeofid", e.target.value)
                        }
                        value={person.typeofid}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div>
                      <h1>ID No:</h1>
                    </div>
                    <div>
                      <input
                        type="number"
                        className="px-2 py-1 border border-[#000]"
                        onChange={(e) =>
                          handleInputChange(index, "idno", e.target.value)
                        }
                        value={person.idno}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <div>
                      <h1>Mobile/Tel No:</h1>
                    </div>
                    <div>
                      <input
                        type="number"
                        className="px-2 py-1 border border-[#000] "
                        onChange={(e) =>
                          handleInputChange(index, "mobileno", e.target.value)
                        }
                        value={person.mobileno}
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
                        onChange={(e) =>
                          handleInputChange(index, "occupation", e.target.value)
                        }
                        value={person.occupation}
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
                        onChange={(e) =>
                          handleInputChange(index, "skills", e.target.value)
                        }
                        value={person.skills}
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
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "companyaddress",
                            e.target.value
                          )
                        }
                        value={person.companyaddress}
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
                        onChange={(e) =>
                          handleInputChange(index, "college", e.target.value)
                        }
                        value={person.college}
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
                        onChange={(e) =>
                          handleInputChange(index, "highschool", e.target.value)
                        }
                        value={person.highschool}
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
                        onChange={(e) =>
                          handleInputChange(index, "elementary", e.target.value)
                        }
                        value={person.elementary}
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
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "vocationalcourse",
                            e.target.value
                          )
                        }
                        value={person.vocationalcourse}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>No. of Household members living in the house:</h1>
            </div>
            <div className="w-[60%]">
              <input
                type="text" // Corrected type
                name="household" // Added name attribute
                className="px-2 py-1 border border-[#000] w-[20%]"
                value={combine.household}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 w-full">
            <div>
              <h1>No. of Children:</h1>
            </div>
            <div className="w-[60%]">
              <input
                type="text" // Corrected type
                name="children" // Added name attribute
                className="px-2 py-1 border border-[#000] w-[20%]"
                value={combine.children}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="w-[35%]">
          <Profiling handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ResidentProfiling;
