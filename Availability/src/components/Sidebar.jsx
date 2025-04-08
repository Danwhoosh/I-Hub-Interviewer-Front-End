import React from "react";
import "./../styles/Sidebar.css";
import homeIcon from "./../assets/icons/home.svg";
import myProfileIcon from "./../assets/icons/myprofile.svg";
import myAvailabilityIcon from "./../assets/icons/Calendar.svg";
import interviewIcon from "./../assets/icons/interview.svg";


const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
      <h2 style={{ fontSize: "16px", letterSpacing: "0", overflow: "visible", whiteSpace: "nowrap" }}>
       OpportunityHub
      </h2>
       </div>



      {/* Navigation Menu */}
      <div className="menu-section">
        <ul className="menu">
          <li className="menu-item">
            <a href="/dashboard">
              <img src={homeIcon} alt="Home" className="icon" />
              Dashboard
            </a>
          </li>
          <li className="menu-item">
            <a href="/profile">
              <img src={myProfileIcon} alt="MyPublicProfile" className="icon" /> My Public Profile
            </a>
          </li>
          
          <li className="menu-item active">
            <a href="/myavailability">
              <img src={myAvailabilityIcon} alt="My Availability" className="icon" /> My Avalibility
            </a>
          </li>
          <li className="menu-item">
            <a href="/interviews">
              <img src={interviewIcon} alt="Interviews" className="icon" /> Interviews
            </a>
          </li>
          
        </ul>
      </div>

      {/* User Profile Section */}
      <div className="user-profile">
        <div className="user-details">
          <img src="src\assets\icons\avatara.svg" alt="User" className="profile-pic-left" />
          <div className="user-info">
            <span className="user-name">Alden Olivero</span>
            <span className="user-email">aldenolivero12@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;