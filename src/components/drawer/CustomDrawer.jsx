import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  removeFromLocalStorage,
  getFromLocalStorage,
} from "../../utils/localStorage";
import FormStatusHook from "../../hooks/formstatus/FormStatus";
const CustomDrawer = ({ open, handleToggleDrawer }) => {
  const userid = getFromLocalStorage("id");
  const username = getFromLocalStorage("username");
  const { pending } = FormStatusHook();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeFromLocalStorage("id");
    removeFromLocalStorage("username");
    removeFromLocalStorage("email");
    navigate("/");
    window.location.reload();
  };
  const [sideBar, setSideBar] = useState([
    {
      id: 1,
      label: "HOME",
      path: "/user",
    },
    {
      id: 2,
      label: "TRANSPARENCY",
      path: "/user/transparency",
    },
    {
      id: 3,
      label: "DEMOGRAPHIC",
      path: "/user/demographic",
    },
    {
      id: 4,
      label: "GEOTAGGING",
      path: "/user/geotagging",
    },
    {
      id: 5,
      label: "PROJECT MANAGEMENT",
      path: "/user/projectmanagement",
    },

    {
      id: 6,
      label: "STRATEGIC ROAD",
      path: "/user/strategic",
    },
    {
      id: 7,
      label: "RESIDENT PROFILLING",
      path: "/user/residentprofiling",
      pending: pending,
    },
    {
      id: 8,
      label: "ACCOUNT SETTING",
      path: `/user/setting/${userid}`,
    },

    {
      id: 9,
      label: "LOGOUT",
      onClick: handleLogout,
    },
  ]);
  const location = useLocation();
  const isActive = (item) => location.pathname === item.path;
  useEffect(() => {
    setSideBar((prevSideBar) =>
      prevSideBar.map((item) => (item.id === 7 ? { ...item, pending } : item))
    );
  }, [pending]);

  return (
    <Drawer anchor="left" open={open} onClose={handleToggleDrawer}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        className="bg-[#DEE5F8] h-[100vh] overflow-y-auto"
      >
        <div className="w-full p-5">
          <div className="w-full flex items-end justify-end ">
            <div className=" px-1 py-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                className="text-lg "
                onClick={handleToggleDrawer}
              >
                <path
                  fill="currentColor"
                  d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-lg  font-semibold  max-sm:text-base">
              {username ? username.toUpperCase() : ""}
            </h3>
          </div>
        </div>

        <div className="p-3">
          <div className="max-sm:hidden">
            {sideBar
              .filter(
                (item) =>
                  item.id !== 1 &&
                  item.id !== 2 &&
                  item.id !== 3 &&
                  item.id !== 4
              )
              .map((item) => (
                <div className="py-5" key={item.id}>
                  <Link key={item.path} to={item.path}>
                    <div
                      onClick={item.onClick}
                      className={` ${
                        isActive(item) ? "bg-[#76A0EE] text-white" : ""
                      } hover:bg-[#76A0EE] hover:text-white`}
                    >
                      <h1 className="text-sm font-semibold px-3 py-3 max-sm:text-xs">
                        {item.label}
                        {item.pending === "pending" ? (
                          <span className="text-xs ml-1 text-red-500 ">
                            Pending
                          </span>
                        ) : item.pending === "sucess" ? (
                          <span className="text-xs ml-1 text-green-500 font-bold">
                            Sucess
                          </span>
                        ) : item.pending === "decline" ? (
                          <span className="text-xs ml-1 text-red-500 font-bold">
                            decline
                          </span>
                        ) : item.pending === "delete" ? (
                          ""
                        ) : (
                          ""
                        )}
                      </h1>
                    </div>
                  </Link>
                </div>
              ))}
          </div>

          <div className="max-sm:block hidden">
            {sideBar.map((item) => (
              <div className="py-5" key={item.id}>
                <Link key={item.path} to={item.path}>
                  <div
                    onClick={item.onClick}
                    className={` ${
                      isActive(item) ? "bg-[#76A0EE] text-white" : ""
                    } hover:bg-[#76A0EE] hover:text-white`}
                  >
                    <h1 className="text-sm font-semibold px-3 py-3 max-sm:text-xs">
                      {item.label}
                      {item.pending === "pending" ? (
                        <span className="text-xs ml-1 text-red-500 ">
                          Pending
                        </span>
                      ) : item.pending === "sucess" ? (
                        <span className="text-xs ml-1 text-green-500 font-bold">
                          Sucess
                        </span>
                      ) : item.pending === "decline" ? (
                        <span className="text-xs ml-1 text-red-500 font-bold">
                          decline
                        </span>
                      ) : item.pending === "delete" ? (
                        ""
                      ) : (
                        ""
                      )}
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
