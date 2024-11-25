import React from "react";

const CalendarCell = ({ date, data = [] }) => {
  if (!date) {
    return (
      <div className="border border-gray-300 p-2 rounded shadow-sm flex flex-col space-y-1 h-[60px]"></div>
    );
  }

  const formattedDate = `${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(date.getDate()).padStart(2, "0")}/${date.getFullYear()}`;

  console.log(formattedDate);
  const dayContent = Array.isArray(data)
    ? data.filter((item) => item?.date === formattedDate)
    : [];
  return (
    <div className="border border-gray-300 p-2 rounded shadow-sm flex flex-col space-y-1 h-[60px] overflow-auto">
      <div className="text-sm font-bold text-gray-700">{date.getDate()}</div>

      {dayContent.map((item, index) => (
        <div
          key={index}
          className="bg-blue-100 text-blue-700 text-xs rounded px-2 py-1"
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default CalendarCell;
