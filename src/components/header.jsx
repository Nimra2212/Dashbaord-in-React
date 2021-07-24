import React from "react";
import logo from "../assets/images/logo.svg";
import logoLight from "../assets/images/logo-light.svg";
import user from "../assets/images/user.png";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import option from "../assets/images/left-align.svg";
import plus from "../assets/images/add-icon.svg";
import noti from "../assets/images/notifications-icon.svg";
import notiLight from "../assets/images/notifications-icon -light.svg";
import { useState } from "react";
import Popup from "./popup";
import Dashboard from "./dashboard";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Switch from "@material-ui/core/Switch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dashData, setDashData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [dark, setMode] = useState(true);
  const [inputField, setinputField] = useState("");

  const inputValue = (e) => {
    setinputField(e);
  };
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const removeCard = (id) => {
    setDashData((oldData) => {
      return oldData.filter((newData) => {
        return newData !== dashData[id];
      });
    });
  };
  const addCard = () => {
    setDashData([...dashData, 1]);
    setIsOpen(!isOpen);
    setinputField("");
  };
  return (
    <div className={dark ? "mainDiv dark-mode" : "mainDiv light-mode"}>
      <div className="mainHeader">
        <div className="logoDiv">
          {dark ? <img src={logo} alt="" /> : <img src={logoLight} alt="" />}
        </div>
        <div className="dropDownDiv">
          <div>
            <Dropdown>
              <Dropdown.Toggle className="dropdownIcon" id="dropdown-basic">
                {dark ? (
                  <img className="notificationIcon" src={noti} alt="" />
                ) : (
                  <img className="notificationIcon" src={notiLight} alt="" />
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu className="notifications">
                <p className="notificationsHeading">Notifications</p>
                <Dropdown.Item className="msg" href="#/message">
                  <MailOutlineIcon className="msgicon"></MailOutlineIcon>
                  <span>
                    <p>Your message goes here...</p>
                    <p className="msgP">12 Dec, 2019</p>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="msg" href="#/message">
                  <MailOutlineIcon className="msgicon"></MailOutlineIcon>
                  <span>
                    <p>Your message goes here...</p>
                    <p className="msgP">12 Dec, 2019</p>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="msg" href="#/message">
                  <MailOutlineIcon className="msgicon"></MailOutlineIcon>
                  <span>
                    <p>Your message goes here...</p>{" "}
                    <p className="msgP">12 Dec, 2019</p>
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="msg" href="#/message">
                  <p className="showAll">Show All</p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Dropdown>
            <Dropdown.Toggle className="userDropdown" id="dropdown-basic">
              <img className="userImage" src={user} alt="" /> Muhammad Abdullah
            </Dropdown.Toggle>

            <Dropdown.Menu className="userDropdownDiv">
              <Dropdown.Item className="dropDownTextColor" href="#/Profile">
                <PersonIcon className="icon"></PersonIcon>Profile
              </Dropdown.Item>
              <Dropdown.Item className="dropDownTextColor" href="#/Setting">
                <SettingsIcon className="icon"></SettingsIcon>Setting
              </Dropdown.Item>
              <Dropdown.Item className="redicon" href="#/Logout">
                <ExitToAppIcon className="icon"></ExitToAppIcon>Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="header2">
        <div className="headerLeftDiv">
          <p>
            <DashboardIcon className="categoryIcon"></DashboardIcon> Category
          </p>
        </div>
        <div className="headerRightDiv">
          <Button className="btnleft" onClick={togglePopup}>
            <img className="btnIcon" src={plus} alt="" /> Create New Category
          </Button>
          <Dropdown className="dropdownDots">
            <Dropdown.Toggle className="btnright" id="dropdown-basic">
              <img className="btnIcon" src={option} alt="" /> option
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdownButtons">
              <Dropdown.Item className="dropDownTextColor">
                Light Mode
                <Switch
                  checked={dark ? false : true}
                  onClick={() => setMode(!dark)}
                  color="primary"
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Popup
        check={isOpen}
        togglePopup={togglePopup}
        addCard={addCard}
        inputField={inputField}
        inputValue={inputValue}
      />
      <div className="dashboard d-flex align-content-start flex-wrap">
        {dashData.map((data, ind) => {
          return (
            <Dashboard
              key={ind}
              ind={ind}
              deleteDash={() => removeCard(ind)}
              checkPopup={togglePopup}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
