import React, { useEffect, useState } from "react";
import RightBar from "../components/user/RightBar";
import EventHook from "../hooks/event/Event";

const Dashboard = () => {
  const { data } = EventHook();
  const [sortData, setSortData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // Initialize as an empty string

  useEffect(() => {
    // Sort event data by date from latest to oldest
    const sortedEventData = data?.sort((a, b) => {
      // Convert date strings to Date objects for comparison
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      // Compare dates: return negative if a is before b, positive if a is after b
      return dateB - dateA; // For descending order (latest first)
    });
    setSortData(sortedEventData);
  }, [data]);

  const filteredData = sortData?.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(search.toLowerCase());

    // Convert item.date from "MM/DD/YYYY" to "YYYY-MM-DD" for comparison
    const [month, day, year] = item.date.split("/");
    const formattedItemDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
      2,
      "0"
    )}`;

    // Check if selectedDate matches formattedItemDate
    const dateMatch = selectedDate ? formattedItemDate === selectedDate : true;

    return titleMatch && dateMatch; // Return true if both conditions are met
  });

  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value); // Update selectedDate with the input value
  };

  return (
    <div className="w-full h-auto bg-[#DEE5F8] ">
      <div className="flex px-5 max-lg:flex-col">
        <div className="w-[70%] max-lg:w-[100%]">
          <div className="w-full py-5">
            <div>
              <h1 className="text-center text-xl font-bold max-md:text-lg max-sm:text-sm">
                ANNOUNCEMENTS AND EVENTS
              </h1>
            </div>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="flex flex-row gap-2 justify-between w-[90%] max-sm:flex-col max-sm:w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-3 px-3 border border-[#000] flex-1 placeholder-[#000] placeholder:text-lg placeholder:font-semibold text-lg rounded-lg max-sm:w-full"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <input
                  type="date"
                  className="h-full p-3 max-sm:w-full"
                  onChange={handleChangeDate} // Update selectedDate on change
                />
              </div>
              <div className="bg-[#F0F0F0] max-md:w-full max-md:px-5 w-[90%] max-lg:w-full max-lg py-5 px-10 mt-5 border-2 border-[#000] max-h-[100vh] overflow-y-auto max-lg:max-h-[60vh]">
                {filteredData?.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#DEE5F8] py-5 flex-1 mt-2 px-4 w-full flex gap-5 max-sm:flex-col "
                  >
                    <div className="w-[50%] flex items-center justify-center max-sm:w-full">
                      <img
                        src={item.image}
                        className="w-[85%] h-[250px] object-cover max-md:h-[180px] max-sm:w-full max-sm:h-[250px]"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-full">
                      <div className="w-full">
                        <h1 className="w-full line-clamp-7 max-md:text-sm max-sm:text-xs max-sm:text-center">
                          {item.description}
                        </h1>
                      </div>
                      <div className="mt-5">
                        <h1 className="max-md:text-base max-sm:text-xs">
                          <span className="font-semibold">TITLE: </span>
                          {item.title}
                        </h1>
                        <h1 className="max-md:text-base max-sm:text-xs">
                          <span className="font-semibold">WHERE: </span>
                          {item.location}
                        </h1>
                        <h1 className="max-md:text-base max-sm:text-xs">
                          <span className="font-semibold">DATE: </span>
                          {item.date}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] border-2 border-[#000] max-lg:border-none max-lg:w-[100%]">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
