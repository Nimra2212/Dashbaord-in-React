import React from "react";
import ss from "../assets/images/screenshot.png";
import user from "../assets/images/user.png";
import Dropdown from "react-bootstrap/Dropdown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Dashboard = (props) => {
  return (
    <div key={props.ind} className="cards">
      <div className="cardTop">
        <div className="dotmenu">
          <Dropdown className="dropdownDots">
            <Dropdown.Toggle className="dotsDropdown dropdownDiv" id="dropdown-basic">
              <h5>...</h5>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdownButtons">
              <Dropdown.Item
                className="dropDownTextColor"
                onClick={props.checkPopup}
              >
                <EditIcon className="icon"></EditIcon> Edit
              </Dropdown.Item>
              <Dropdown.Item
                className="dropDownTextColor"
                onClick={props.deleteDash}
              >
                <DeleteForeverIcon className="icon"></DeleteForeverIcon>{" "}
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="cardInnerTop">
          <p>DASHBOARDS NAME GOES HERE</p>
        </div>
        <div className="cardInnerBottom">
          {" "}
          <img className="userImage" src={user} alt="" />{" "}
          <p>Muhammad Abdullah</p>{" "}
        </div>
      </div>
      <div className="cardBottom">
        <img src={ss} alt="" />
        <img src={ss} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
