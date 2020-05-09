import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInbox,
  faStar,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <button className="mail-compose-container">
        <span className="compose-icon">+</span>
        <span className="compose-title">Compose</span>
      </button>
      <div className="sidebar-item">
        <span className="sidebar-item-main">
          <span>
            <FontAwesomeIcon icon={faInbox}></FontAwesomeIcon>
          </span>
          <span className="sidebar-item-title">Inbox</span>
        </span>
        <span className="sidebar-item-number">1</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-item-main">
          <span>
            <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
          </span>
          <span className="sidebar-item-title">Sent</span>
        </span>
        {/* <span className="sidebar-item-number">1</span> */}
      </div>
      <div className="sidebar-item">
        <span className="sidebar-item-main">
          <span>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </span>
          <span className="sidebar-item-title">Starred</span>
        </span>
        {/* <span className="sidebar-item-number">1</span> */}
      </div>
    </div>
  );
}

export default Sidebar;