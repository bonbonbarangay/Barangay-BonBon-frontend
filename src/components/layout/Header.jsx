import React, { useState } from "react";
import newlogo from "../../assets/newlogo.png";
import { Link } from "react-router-dom";
import { getFromLocalStorage } from "../../utils/localStorage";
import CustomDrawer from "../drawer/CustomDrawer";
import Button from "@mui/material/Button";

const Header = () => {
  const id = getFromLocalStorage("id");
  const username = getFromLocalStorage("user");
  const [open, setOpen] = useState(false);
  const handleToggleDrawer = () => {
    setOpen(false);
  };

  return (
    <div className="w-full h-auto bg-[#DEE5F8]">
      <div className="w-full bg-[#76A0EE]">
        <div className="py-3 px-5 w-full  max-sm:px-2  ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-10 max-sm:gap-1">
              <div className="max-sm:">
                {id ? (
                  <div>
                    <div className="cursor-pointer">
                      <Button variant="contained" onClick={() => setOpen(true)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-3xl max-sm:text:2xl"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 17h14M5 12h14M5 7h14"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="text-3xl max-sm:text:2xl"
                  >
                    <path
                      fill="currentColor"
                      d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A8 8 0 0 0 8.016 16a8 8 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106m-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.2 4.2 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.2 4.2 0 0 1 8 10.342a4.18 4.18 0 0 1 2.928 1.166q.552.552.864 1.295q.168.432.24.911A7.03 7.03 0 0 1 8 14.993m-2.448-7.4a2.5 2.5 0 0 1-.208-1.024c0-.351.064-.703.208-1.023s.336-.607.576-.847s.528-.431.848-.575s.672-.208 1.024-.208c.368 0 .704.064 1.024.208s.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.8 2.8 0 0 1-.576.848a2.8 2.8 0 0 1-.848.575a2.72 2.72 0 0 1-2.064 0a2.8 2.8 0 0 1-.848-.575a2.5 2.5 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.2 5.2 0 0 0-.688-1.406a4.9 4.9 0 0 0-1.088-1.135a5.2 5.2 0 0 0-1.04-.608a3 3 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.6 3.6 0 0 0 .528-1.934a3.7 3.7 0 0 0-.288-1.47a3.8 3.8 0 0 0-.816-1.199a3.9 3.9 0 0 0-1.2-.8a3.7 3.7 0 0 0-1.472-.287a3.7 3.7 0 0 0-1.472.288a3.6 3.6 0 0 0-1.2.815a3.8 3.8 0 0 0-.8 1.199a3.7 3.7 0 0 0-.288 1.47q0 .528.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784q.216.216.48.383a5 5 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a5 5 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907"
                    />
                  </svg>
                )}
              </div>
              <div className="max-sm:hidden block">
                <Link to="/user ">
                  <h1 className="text-lg	font-bold cursor-pointer max-lg:text-sm max-sm:text-xs max-[360px]:text-[10px]">
                    HOME
                  </h1>
                </Link>
              </div>
            </div>
            <div className="max-sm:hidden block">
              <Link to="/user/transparency">
                <h1 className="text-lg	font-bold cursor-pointer max-lg:text-sm max-sm:text-xs max-[360px]:text-[10px]">
                  TRANSPARENCY
                </h1>
              </Link>
            </div>
            <div className="max-sm:hidden block">
              <Link to="/user/demographic">
                <h1 className="text-lg	font-bold cursor-pointer max-lg:text-sm max-sm:text-xs	max-[360px]:text-[10px]">
                  DEMOGRAPHICS
                </h1>
              </Link>
            </div>
            <div className="max-sm:hidden block">
              <Link to="/user/geotagging">
                <h1 className="text-lg	font-bold cursor-pointer max-lg:text-sm max-sm:text-xs max-[360px]:text-[10px]">
                  GEOTAGGING
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-2 border-[#000] py-2">
        <div className="flex items-center gap-1">
          <div className="ml-16 max-sm:ml-5">
            <img
              src={newlogo}
              className="w-[90px] h-[80px] max-lg:w-[70px] max-lg:h-[70px] max-sm:w-[50px] max-sm:h-[50px]"
            />
          </div>
          <div>
            <h1 className="text-xl font-serif	font-semibold max-lg:text-lg max-sm:text-sm">
              BARANGAY BONBON
            </h1>
            <h1 className="text-lg font-semibold max-sm:text-sm">
              Cagayan de Oro City
            </h1>
          </div>
        </div>
      </div>
      <CustomDrawer
        open={open}
        handleToggleDrawer={handleToggleDrawer}
        username={username}
      />
    </div>
  );
};

export default Header;
