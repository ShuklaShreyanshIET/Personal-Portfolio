import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
            <div className="navbar-profile-pic">
              <img
                src="images/ProfilePic.jpg"
                alt="profile pic"
              />
            </div>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                    <FcHome />
                    Home
                </div>
                <div className="nav-link">
                    <FcAbout />
                    About
                </div>
                <div className="nav-link">
                    <FcReadingEbook />
                    Education
                </div>

                <div className="nav-link">
                    <FcBiotech />
                    Tech Stack
                </div>

                <div className="nav-link">
                    <FcPortraitMode />
                    Work Experince
                </div>

                <div className="nav-link">
                    <FcBusinessContact />
                    Contact
                </div>
              </div>
            </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                  <FcHome />
              </div>
              <div className="nav-link">
                  <FcAbout />
              </div>
              <div className="nav-link">
                  <FcReadingEbook />
              </div>

              <div className="nav-link">
                  <FcBiotech />
              </div>

              <div className="nav-link">
                  <FcPortraitMode />
              </div>
              <div className="nav-link">
                  <FcBusinessContact />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;