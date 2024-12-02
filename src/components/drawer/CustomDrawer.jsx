import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  removeFromLocalStorage,
  getFromLocalStorage,
} from "../../utils/localStorage";
import HouseHoldHook from "../../hooks/residentprofiling/HouseHold";
const CustomDrawer = ({ open, handleToggleDrawer, username }) => {
  const userid = getFromLocalStorage("id");
  const { pending } = HouseHoldHook();
  const handleLogout = () => {
    removeFromLocalStorage("id");
    removeFromLocalStorage("user");

    navigate("/");
    window.location.reload();
  };
  const [sideBar, setSideBar] = useState([
    {
      id: 1,
      label: "PROJECT MANAGEMENT",
      path: "/user/projectmanagement",
    },
    {
      id: 2,
      label: "ACCOUNT SETTING",
      path: `/user/setting/${userid}`,
    },
    {
      id: 3,
      label: "RESIDENT PROFILLING",
      path: "/user/residentprofiling",
      pending: pending,
    },
    {
      id: 4,
      label: "LOGOUT",
      onClick: handleLogout,
    },
  ]);
  const location = useLocation();
  const isActive = (item) => location.pathname === item.path;
  const navigate = useNavigate();
  useEffect(() => {
    setSideBar((prevSideBar) =>
      prevSideBar.map((item) => (item.id === 3 ? { ...item, pending } : item))
    );
  }, [pending]);

  return (
    <Drawer anchor="left" open={open} onClose={handleToggleDrawer}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        className="bg-[#DEE5F8] h-[100vh]"
      >
        <div className="w-full p-5">
          <div className="w-full flex items-end justify-end ">
            <div className=" px-1 py-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                className="text-lg  "
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
            <h3 className="text-lg  font-semibold">
              {username ? username.toUpperCase() : ""}
            </h3>
          </div>
        </div>

        <div className=" p-3">
          {sideBar.map((item) => (
            <div className="py-5" key={item.id}>
              <Link key={item.path} to={item.path}>
                <div
                  onClick={item.onClick}
                  className={` ${
                    isActive(item) ? "bg-[#76A0EE] text-white" : ""
                  } hover:bg-[#76A0EE] hover:text-white`}
                >
                  <h1 className="text-sm font-semibold px-3 py-3 ">
                    {item.label}
                    {item.pending === true ? (
                      <span className="text-xs ml-1 text-red-500">Pending</span>
                    ) : item.pending === false ? (
                      <span className="text-xs ml-1 text-green-500 font-bold">
                        Sucess
                      </span>
                    ) : (
                      ""
                    )}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
