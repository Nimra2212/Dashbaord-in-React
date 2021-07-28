import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import plus from "../assets/images/add-icon.svg";
import DropdownButton from "react-bootstrap/DropdownButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Multiselect from "multiselect-react-dropdown";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PaymentIcon from "@material-ui/icons/Payment";
import SecurityIcon from "@material-ui/icons/Security";
import AddBoxIcon from "@material-ui/icons/AddBox";
import store from "./DashboardStore/dataStore";
import { observer } from "mobx-react";

const Popup = observer((props) => {
  const {
    dropDownValue,
    formList,
    inputFieldValue,
    setDropDownValue,
    setFormList,
    setInputFieldValue,
  } = store;

  const inputValue = (e, id) => {
    let addVal = [...inputFieldValue];
    addVal[id] = e.target.value;
    setInputFieldValue(addVal);
  };
  const handleSelect = (e, id) => {
    let selectVal = [...dropDownValue];
    selectVal[id] = e;
    setDropDownValue(selectVal);
  };

  const increment = () => {
    let incVlaue = {
      id: new Date().getTime().toString(),
    };
    setFormList([...formList, incVlaue]);
  };
  const decrement = (ind) => {
    formList.splice(ind, 1);
    setFormList([...formList]);
    dropDownValue.splice(ind, 1);
    setDropDownValue(dropDownValue);
    inputFieldValue.splice(ind, 1);
    setInputFieldValue(inputFieldValue);
  };

  return (
    <div>
      {props.check && (
        <div className="popup-box">
          <div className="box col-8">
            <div className="card">
              <div className="card-header">
                <AddBoxIcon className="icon"></AddBoxIcon>
                <p>CREATE NEW DASHBOARD</p>
              </div>
              <Tabs>
                <TabList>
                  <Tab>
                    <PaymentIcon className="tabIcon"></PaymentIcon>GENERAL INFO
                  </Tab>
                  <Tab>
                    <SecurityIcon className="tabIcon"></SecurityIcon>DATA
                    SECURITY
                  </Tab>
                </TabList>
                <TabPanel>
                  {formList.map((data, ind) => {
                    return (
                      <form
                        key={ind}
                        className="d-flex align-content-start flex-wrap align-items-center"
                      >
                        <div className="languageDiv">
                          <label className="label1" key={ind}>
                            Language
                          </label>
                          <DropdownButton
                            className="languageDropdown"
                            title={dropDownValue[ind] || "English"}
                            onSelect={(e) => handleSelect(e, ind)}
                          >
                            <Dropdown.Item eventKey="English">
                              English
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="Arabic">
                              Arabic
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="French">
                              French
                            </Dropdown.Item>
                          </DropdownButton>
                        </div>
                        <div className="fieldTwo form-group">
                          <label>Catogery Name</label>
                          <input
                            onChange={(e) => inputValue(e, ind)}
                            type="input"
                            value={inputFieldValue[ind] || ""}
                            className="form-control"
                            placeholder="Enter Name"
                          ></input>
                        </div>
                        {formList.length > 1 ? (
                          <DeleteForeverIcon
                            onClick={() => decrement(ind)}
                            className="deleteIcon"
                          ></DeleteForeverIcon>
                        ) : (
                          ""
                        )}
                      </form>
                    );
                  })}
                  <Button className="addLanguage" onClick={increment}>
                    <img className="icon" src={plus} alt="" /> Add Language
                  </Button>
                </TabPanel>
                <TabPanel>
                  <div className="form-group">
                    <label>USER</label>
                    <Multiselect
                      displayValue="key"
                      onRemove={function noRefCheck() {}}
                      onSelect={function noRefCheck() {}}
                      options={[
                        {
                          key: "Muhammad Abdullah",
                        },
                        {
                          key: "Ali Hassan",
                        },
                        {
                          key: "Muhammad Abdullah",
                        },
                        {
                          key: "Aqsa Ameen",
                        },
                      ]}
                    />
                  </div>
                  <div className="form-group group1">
                    <label>ROLE</label>
                    <Multiselect
                      displayValue="key"
                      onRemove={function noRefCheck() {}}
                      onSelect={function noRefCheck() {}}
                      options={[
                        {
                          key: "Admin",
                        },
                        {
                          key: "Add",
                        },
                        {
                          key: "Edit",
                        },
                        {
                          key: "Delete",
                        },
                      ]}
                    />
                  </div>
                </TabPanel>
              </Tabs>

              {/* tab  */}
              <div className="card-footer text-muted">
                <Button
                  className="createButton"
                  onClick={props.addCard}
                  disabled={inputFieldValue === ""}
                >
                  <AddCircleOutlineIcon className="icon"></AddCircleOutlineIcon>{" "}
                  Create
                </Button>
                <Button className="cancelButton" onClick={props.togglePopup}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Popup;
