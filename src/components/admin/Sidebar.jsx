import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full border-2 border-[#000] ">
      <div className="border-2 border-b-[#000] h-[12vh] px-3 py-3 ">
        <div className="flex items-center gap-3 ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-4xl"
            >
              <circle cx="12" cy="6" r="4" fill="currentColor" />
              <path
                fill="currentColor"
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-lg">ADMIN</h1>
            <h1 className="text-lg">BARANGAY BONBON</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#DEE5F8] h-[78vh] py-10 px-5">
        <Link to="/admin/dashboard">
          <div className="flex items-center gap-3  ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl"
              >
                <path
                  fill="currentColor"
                  d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1m0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1m10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1M13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-normal">Dashboard</h1>
            </div>
          </div>
        </Link>
        <Link to="/admin/manageresident">
          <div className="flex items-center gap-3 mt-10 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
                className="text-4xl"
              >
                <path
                  fill="currentColor"
                  d="M21.066 20.667c1.227-.682 1.068-3.31-.354-5.874c-.61-1.104-1.36-1.998-2.11-2.623a5.23 5.23 0 0 1-3.1 1.03a5.23 5.23 0 0 1-3.105-1.03c-.75.625-1.498 1.52-2.11 2.623c-1.423 2.563-1.58 5.192-.35 5.874c.548.312 1.126.078 1.722-.496a10.5 10.5 0 0 0-.167 1.874c0 2.938 1.14 5.312 2.543 5.312c.846 0 1.265-.865 1.466-2.188c.2 1.314.62 2.188 1.46 2.188c1.397 0 2.546-2.375 2.546-5.312c0-.66-.062-1.29-.168-1.873c.6.575 1.176.813 1.726.497zM15.5 12.2a4.279 4.279 0 1 0-.003-8.557A4.279 4.279 0 0 0 15.5 12.2m8.594 2.714a3.514 3.514 0 0 0 0-7.025a3.513 3.513 0 1 0 .001 7.027zm4.28 2.13c-.502-.908-1.116-1.642-1.732-2.155a4.3 4.3 0 0 1-2.546.845c-.756 0-1.46-.207-2.076-.55c.496 1.093.803 2.2.86 3.19c.094 1.516-.38 2.64-1.328 3.165a2 2 0 0 1-.653.224c-.057.392-.096.8-.096 1.23c0 2.413.935 4.362 2.088 4.362c.694 0 1.04-.71 1.204-1.796c.163 1.08.508 1.796 1.2 1.796c1.145 0 2.09-1.95 2.09-4.36c0-.543-.053-1.06-.14-1.54c.492.473.966.668 1.418.408c1.007-.56.877-2.718-.29-4.82zm-21.468-2.13a3.512 3.512 0 1 0-3.514-3.512a3.515 3.515 0 0 0 3.514 3.514zm2.535 6.622c-1.592-.885-1.738-3.524-.456-6.354a4.24 4.24 0 0 1-2.078.553c-.956 0-1.832-.32-2.55-.846c-.615.512-1.228 1.246-1.732 2.153c-1.167 2.104-1.295 4.262-.287 4.82c.45.258.925.065 1.414-.406a9 9 0 0 0-.135 1.538c0 2.412.935 4.36 2.088 4.36c.694 0 1.04-.71 1.204-1.795c.165 1.08.51 1.796 1.2 1.796c1.147 0 2.09-1.95 2.09-4.36c0-.433-.04-.842-.097-1.234a2 2 0 0 1-.66-.226z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-normal">Manage Resident</h1>
            </div>
          </div>
        </Link>

        <Link to="/admin/geotagging">
          <div className="flex items-center gap-3 mt-10 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl"
              >
                <path
                  fill="currentColor"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-normal">Geotagging</h1>
            </div>
          </div>
        </Link>
        <Link to="/admin/official">
          <div className="flex items-center gap-3 mt-10 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl"
              >
                <path
                  fill="currentColor"
                  d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46l-7.05 7.04l-.66-.63a3 3 0 0 1 0-4.24l4.24-4.24a3 3 0 0 1 4.24 0L16.48 9c.39.39.39 1.02 0 1.41m.7-2.12c.78.78.78 2.05 0 2.83c-1.27 1.27-2.61.22-2.83 0l-3.76-3.76l-5.57 5.57a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 0 0 0 1.41c.39.39 1.02.39 1.42 0l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 1 0 1.41 1.41l4.62-4.62l.71.71l-4.62 4.62a.996.996 0 1 0 1.41 1.41l8.32-8.34a3 3 0 0 0 0-4.24l-4.24-4.24a3 3 0 0 0-4.18-.06z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-normal">Barangay Officials</h1>
            </div>
          </div>
        </Link>
        <Link to="/admin/setting">
          <div className="flex items-center gap-3 mt-10 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="text-4xl"
              >
                <path
                  fill="currentColor"
                  d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-normal">Settings</h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
