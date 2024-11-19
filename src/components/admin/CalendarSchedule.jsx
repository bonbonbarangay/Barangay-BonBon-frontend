import React from "react";
import CalendarCell from "./CalendarCeil";
const CalendarSchedule = ({ data, currentDate }) => {
  const getMonthDays = (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from(
      { length: daysInMonth },
      (_, i) => new Date(year, month, i + 1)
    );
  };

  const getLeadingBlanks = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Weekday of the 1st
    return Array.from({ length: firstDayOfMonth }, () => null); // Empty slots for alignment
  };

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const monthDays = getMonthDays(month, year);
  const leadingBlanks = getLeadingBlanks(month, year);

  const calendarCells = [...leadingBlanks, ...monthDays];
  return (
    <div className="grid grid-cols-7 gap-1 ">
      {calendarCells.map((date, index) => (
        <CalendarCell key={index} date={date} datas={data} />
      ))}
    </div>
  );
};

export default CalendarSchedule;
