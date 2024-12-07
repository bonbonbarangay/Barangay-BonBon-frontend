import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "../../utils/style";
import { useRef, useState, useEffect } from "react";
const UpdateOfficialModal = ({
  updateOpen,
  handleCloseUpdate,
  activeData,
  handleUpdateOfficial,
  updateMutation,
  setActiveData,
}) => {
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(activeData?.image || "");
  const [fullname, setFullName] = useState(activeData?.fullname || "");
  const [position, setPosition] = useState(activeData?.position || "");
  const [type, setType] = useState(activeData?.type || "");
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

  useEffect(() => {
    if (activeData) {
      setPhoto(activeData.image);
      setFullName(activeData.fullname);
      setPosition(activeData.position);
      setType(activeData.type);
    }
  }, [activeData]);
  const handleUpdate = () => {
    const data = {
      id: activeData?.id,
      fullname: fullname,
      position: position,
      type: type,
      image: photo,
      cloudinaryid: activeData?.cloudinaryid,
    };
    handleUpdateOfficial(data);
    setActiveData(null);
  };
  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleCloseUpdate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Typography>
              <div className="flex items-end justify-end  py-2">
                <div
                  className="bg-[#e5e7eb] rounded-full  w-fit px-2 py-2 cursor-pointer"
                  onClick={handleCloseUpdate}
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
              <div className="w-full h-auto  bg-[#FFFBFB]">
                <div className="w-full border-2 border-[#000] ">
                  <div className="w-full bg-[#B1C7F4] py-3 px-3">
                    <h1 className="text-center text-xl font-bold">
                      UPDATE BARANGAY OFFICIAL
                    </h1>
                  </div>
                  <div className="px-3 py-3 w-full">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                      />
                    </div>

                    <div className="mt-5">
                      <select
                        className="w-full py-3 bg-[#fff] px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                      >
                        <option value="Barangay Council">
                          Barangay Council
                        </option>
                        <option value="Sanguniang Kabataan">
                          Sanguniang Kabataan
                        </option>
                      </select>
                    </div>

                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Enter Official Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full py-3 px-3 border border-[#000] placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg"
                      />
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <div>
                        <div>
                          <h1 className="text-lg">ADD IMAGE</h1>
                        </div>
                        <div className="flex items-center justify-center  mt-2">
                          {photo == "" ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="text-5xl cursor-pointer"
                              onClick={handleIconClick}
                            >
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              >
                                <path d="M1.75 2.75h12.5v10.5H1.75z" />
                                <path d="m3.75 13.2l6.5-5.5l4 3" />
                                <circle
                                  cx="5.25"
                                  cy="6.25"
                                  r=".5"
                                  fill="currentColor"
                                />
                              </g>
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
                      <div>
                        <button
                          className="text-lg font-semibold bg-[#739CE7] px-3 py-2 w-[150px]"
                          onClick={handleUpdate}
                          disabled={updateMutation.isPending}
                        >
                          {updateMutation.isPending ? "Loading" : "Save"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateOfficialModal;
