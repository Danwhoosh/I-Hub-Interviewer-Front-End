import React from "react";
import Sidebar from "./Sidebar";
import MyAvailability from "./MyAvailability";
import Footer from "./Footer"; // Import Footer
import "../styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Wrap sidebar and content together */}
      <div className="main-wrapper">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <MyAvailability />
          </div>
        </div>
      </div>
      {/* Footer stays at the bottom of the page */}
      <Footer />
    </div>
  );
};

export default App;
