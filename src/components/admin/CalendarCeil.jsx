import React from "react";

const CalendarCell = ({ date, datas }) => {
  if (!date) {
    return (
      <div className="border border-gray-300 p-2 rounded shadow-sm flex flex-col space-y-1 h-[60px]"></div>
    );
  }

  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  const dayContent = datas.filter((data) => data.date === formattedDate);
  return (
    <div className="border border-gray-300 p-2 rounded shadow-sm flex flex-col space-y-1 h-[60px] overflow-auto">
      <div className="text-sm font-bold text-gray-700">{date.getDate()}</div>

      {dayContent.map((item) => (
        <div
          key={item.id}
          className="bg-blue-100 text-blue-700 text-xs rounded px-2 py-1 "
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default CalendarCell;
