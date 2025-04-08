import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaPlus } from "react-icons/fa";
import "../styles/MyAvailability.css";

const MyAvailability = () => {
  const [view, setView] = useState("dayGridMonth");
  const events = [
    { title: "9 AM Nutanix", date: "2025-03-05" },
    { title: "5 PM Google", date: "2025-02-15" },
    { title: "10 AM FloCareer Interview", date: "2025-02-20" },
  ];

  // Click Handlers
  const handleSetVacation = () => alert("Set Vacation clicked!");
  const handleNewEvent = () => alert("New Event clicked!");
  const handleNewRecruitmentEvent = () => alert("New Recruitment Event clicked!");

  return (
    <div className="availability-wrapper">
      <div className="availability-container">
        <h2>My Availability</h2>

        {/* Clickable Set Vacation Button */}
        <button className="set-vacation" onClick={handleSetVacation}>
          Set Vacation
        </button>

        <div className="toolbar">
          <select>
            <option disabled selected>Month</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          
          <select>
            <option disabled selected>Week</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
          
          <select>
            <option disabled selected>Year</option>
            {Array.from({ length: 26 }, (_, i) => (
              <option key={i}>{2025 + i}</option>
            ))}
          </select>

          {/* Clickable New Event Button */}
          <button className="event-button" onClick={handleNewEvent}>
            <FaPlus /> New Event
          </button>

          {/* Clickable New Recruitment Event Button */}
          <button  classname="event-button"onClick={handleNewRecruitmentEvent}>
            <FaPlus /> New Recruitment Event
          </button>
        </div>

        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView={view}
            events={events}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MyAvailability;
