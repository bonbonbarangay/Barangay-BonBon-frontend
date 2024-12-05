import React from "react";
import CalendarCell from "./CalendarCeil";
const CalendarSchedule = ({ data, currentDate, handleOpen }) => {
  const getMonthDays = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from(
      { length: daysInMonth },
      (_, i) => new Date(year, month, i + 1)
    );
  };

  const getLeadingBlanks = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return Array.from({ length: firstDayOfMonth }, () => null);
  };

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthDays = getMonthDays(month, year);
  const leadingBlanks = getLeadingBlanks(month, year);

  const calendarCells = [...leadingBlanks, ...monthDays];
  return (
    <div className="grid grid-cols-7 gap-1  ">
      {calendarCells.map((date, index) => (
        <CalendarCell
          key={index}
          date={date}
          data={data}
          handleOpen={handleOpen}
        />
      ))}
    </div>
  );
};

export default CalendarSchedule;
