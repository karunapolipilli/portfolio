import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Menu() {
  let menu = (
    <div id="menu">
      <label>
        <input type="checkbox" id="menu_checkbox" />
        <div id="menu_icon">
          <div id="top_line" className="menu_lines"></div>
          <div id="middle_line" className="menu_lines"></div>
          <div id="bottom_line" className="menu_lines"></div>
        </div>
        <div id="slidebar">
          <h2>Menu</h2>
          <div id="menu_text">
            <div className="menu_text">Profile</div>
            <div className="menu_text">About</div>
            <div className="menu_text">Skills</div>
            <div className="menu_text">Resume</div>
            <div className="menu_text">Projects</div>
            <div className="menu_text">Contacts</div>
          </div>
        </div>
      </label>
    </div>
  );
  return menu;
}

function MobileHeader() {
  return (
    <div id="header_part">
      <h2 id="portfolio_name">Portfolio</h2>
      <Menu />
    </div>
  );
}

export default MobileHeader;
