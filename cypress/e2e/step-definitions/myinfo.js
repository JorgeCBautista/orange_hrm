import {When} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";
import myInfoPage from "../pages/myInfoPage";

When('I click in the button', () => {
    loginPage.clickButton()
    })

When('I click on the info Menu', () => {
    myInfoPage.clickSpanMyInfo();
});

When('I write full name {string} and {string} and {string}', (firstname,middlename,lastname) => {
    myInfoPage.writeFirstName(firstname)
    myInfoPage.writeMiddleName(middlename)
    myInfoPage.writeLastName(lastname)
    })

When('I write employer info {string} and {string}', (employeeid,otherid) => {
        myInfoPage.writeEmployeeId(employeeid)
        myInfoPage.writeOtherId(otherid)
    })
