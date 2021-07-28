import { makeAutoObservable} from "mobx";

class DataStore {
    darkMode = true
    dashboardData = [1, 2, 3, 4, 5, 6, 7, 8];
    toggle = false;
    dropDownValue = ["English"];
    formList = [''];
    inputFieldValue = [];

    constructor() {
        makeAutoObservable(this) 
    }

    setToggle = toggle => this.toggle = toggle

    setDashboardData = increment => this.dashboardData = increment;

    setDarkMode = mode => this.darkMode = mode

    setDropDownValue = value => this.dropDownValue = value

    setFormList = listValue => this.formList = listValue

    setInputFieldValue = fieldValue => this.inputFieldValue = fieldValue
}

export default new DataStore(); 