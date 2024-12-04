import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const ViewResidentModal = ({
  viewOpen,
  handleViewClose,
  viewByUserIdMutation,
  houseMembers,
  houseHold,
}) => {
  return (
    <div>
      <Modal
        open={viewOpen}
        onClose={handleViewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>
            <div className="flex items-end justify-end  py-2">
              <div
                className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                onClick={handleViewClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="text-2xl "
                >
                  <path
                    fill="currentColor"
                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                  />
                </svg>
              </div>
            </div>

            <div className="h-[70vh] overflow-y-auto">
              <div>
                <h1 className="text-lg font-semibold text-center">
                  RESIDENT AND HOUSEHOLD PROFILING
                </h1>
              </div>
              <div className="mt-5 flex items-center justify-center flex-col">
                <div>
                  <h1 className="text-sm font-bold">ID Picture</h1>
                </div>
                <div>
                  <img
                    src={houseHold?.image}
                    className="w-[150px] h-[100px] object-center"
                  />
                </div>
              </div>
              <div className="border-b-2  border-[#000] py-3">
                <div>
                  <h1 className="text-sm font-bold">Household Head</h1>
                </div>
                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">LAST NAME</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.lastnamehead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">FIRST NAME</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.firstnamehead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">M. I</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.mihead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">Ext</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.exthead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">ADDRESS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.addresshead1}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">DATE OF BIRTH</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.dateofbirthhead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">AGE</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.agehead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">GENDER</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.genderhead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">CIVIL STATUS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.civilstatushead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">RELIGION</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.religionhead1}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">TYPE OF ID</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.typeofidhead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">ID NO</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.idnohead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">MOBILE/TEL NO:</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.mobilenohead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">OCCUPATION</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.occupationhead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">SKILLS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.skillshead1}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">COMPANY ADDRESS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.companyaddresshead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">COLLEGE</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.collegehead1}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">HIGHSCHOOL</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.highschoolhead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">ELEMENTARY</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.elementaryhead1}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">VOCATION COURSE</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.vocationalcoursehead1}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b-2  border-[#000] py-3">
                <div>
                  <h1 className="text-sm font-bold">Spouse</h1>
                </div>
                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">LAST NAME</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.lastnamehead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">FIRST NAME</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.firstnamehead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">M. I</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.mihead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">Ext</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.exthead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">ADDRESS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.addresshead2}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">DATE OF BIRTH</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.dateofbirthhead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">AGE</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.agehead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">GENDER</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.genderhead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">CIVIL STATUS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.civilstatushead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">RELIGION</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.religionhead2}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">TYPE OF ID</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.typeofidhead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">ID NO</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.idnohead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">MOBILE/TEL NO:</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.mobilenohead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">OCCUPATION</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.occupationhead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">SKILLS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.skillshead2}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-5">
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">COMPANY ADDRESS</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.companyaddresshead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">COLLEGE</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.collegehead2}</p>
                    </div>
                  </div>
                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">HIGHSCHOOL</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.highschoolhead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">ELEMENTARY</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.elementaryhead2}</p>
                    </div>
                  </div>

                  <div className="flex items-center flex-col">
                    <div>
                      <h1 className="text-sm font-semibold">VOCATION COURSE</h1>
                    </div>
                    <div>
                      <p className="mt-1">{houseHold?.vocationalcoursehead2}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between mt-5 px-10 border-b-2  border-[#000] py-3">
                <div className="flex items-center flex-col">
                  <div>
                    <h1 className="text-sm font-semibold">
                      NO. OF HOUSEHOLD MEMBERS LIVING IN THE HOUSE
                    </h1>
                  </div>
                  <div>
                    <p className="mt-1">{houseHold?.members}</p>
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <div>
                    <h1 className="text-sm font-semibold">NO. OF CHILDREN</h1>
                  </div>
                  <div>
                    <p className="mt-1">{houseHold?.children}</p>
                  </div>
                </div>
              </div>

              <div className="w-full  border-b-2  border-[#000] py-3">
                <div>
                  <h1 className="text-sm font-bold">
                    Name of all Household Members living in the house
                  </h1>
                </div>
                <div>
                  {houseMembers?.map((item) => (
                    <div className="w-full">
                      <div className="w-full grid grid-cols-5 place-items-center gap-5 mt-16">
                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">FULL NAME</h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.fullname}</p>
                          </div>
                        </div>
                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">RELATION</h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.relation}</p>
                          </div>
                        </div>
                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">PWD</h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.pwd}</p>
                          </div>
                        </div>

                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">GENDER</h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.gender}</p>
                          </div>
                        </div>

                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">
                              DATE OF BIRTH
                            </h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.dob}</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex items-center justify-around  mt-10">
                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">
                              HIGHEST EDUCATION ATTAINMENT
                            </h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.highesteducation}</p>
                          </div>
                        </div>
                        <div className="flex items-center flex-col">
                          <div>
                            <h1 className="text-sm font-semibold">
                              OCCUPATION
                            </h1>
                          </div>
                          <div>
                            <p className="mt-1">{item.occupation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full  py-3 ">
                <div>
                  <h1 className="text-sm font-bold">
                    Household Census Questions:
                  </h1>
                </div>
                <div className="mt-5">
                  <div>
                    <h1 className="text-sm font-semibold">
                      1. DO YOU OWN THE HOUSE YOU ARE LIVING?
                    </h1>
                  </div>
                  <div className="flex gap-10 pl-4 mt-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">Answer:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.question1}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">RENTING:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.renting}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-sm font-semibold">
                      2. HOW LONG HAVE YOU BEEN STAYING IN BARANGAY BONBON?
                    </h1>
                  </div>
                  <div className=" pl-4 mt-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">Answer:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.question2}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-sm font-semibold">
                      3. ARE YOU REGISTERED VOTERS IN BARANGAY?
                    </h1>
                  </div>
                  <div className=" pl-4 mt-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">Answer:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.question3}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-sm font-semibold">
                      4. DO YOU HAVE YOUR OWN C.R?
                    </h1>
                  </div>
                  <div className=" pl-4 mt-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">Answer:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.question4}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-sm font-semibold">
                      5. DO YOU HAVE YOUR OWN SOURCE OF WATER SUPPLY?
                    </h1>
                  </div>
                  <div className=" pl-4 mt-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">Answer:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.question5}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div>
                    <h1 className="text-sm font-semibold">
                      6. DO YOU HAVE YOUR OWN ELECTRICITY
                    </h1>
                  </div>
                  <div className=" pl-4 mt-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <h1 className="text-sm semibold">Answer:</h1>
                      </div>
                      <div>
                        <p>{houseHold?.question6}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewResidentModal;
