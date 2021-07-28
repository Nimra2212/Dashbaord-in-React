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
import Popup from "./popup";
import Dashboard from "./dashboard";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Switch from "@material-ui/core/Switch";
import store from "./DashboardStore/dataStore";
import { observer } from "mobx-react";

const Header = observer(() => {
  
  const { toggle, dashboardData, darkMode, setToggle, setDashboardData, setDarkMode } = store;

  const togglePopup = () => {
    setToggle(!toggle);
    
  };
  const removeCard = (id) => {
    dashboardData.splice(id, 1)
    setDashboardData(dashboardData)
  };
  const addCard = () => {
    setDashboardData([...dashboardData, 1]);
    setToggle(!toggle);
  };
  return (
    <div className={darkMode ? "mainDiv dark-mode" : "mainDiv light-mode"}>
      <div className="mainHeader">
        <div className="logoDiv">
          {darkMode ? <img src={logo} alt="" /> : <img src={logoLight} alt="" />}
        </div>
        <div className="dropDownDiv">
          <div>
            <Dropdown>
              <Dropdown.Toggle className="dropdownIcon" id="dropdown-basic">
                {darkMode ? (
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
                  checked={darkMode ? false : true}
                  onClick={() => setDarkMode(!darkMode)}
                  color="primary"
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <Popup check={toggle} togglePopup={togglePopup} addCard={addCard} />
      <div className="dashboard d-flex align-content-start flex-wrap">
        {dashboardData.map((data, ind) => {
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
});

export default Header;
