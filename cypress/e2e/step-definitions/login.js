import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";

Given("I open Login orange HRM page", () => {
  loginPage.openloginpage();
});
When("I write username and password", (Datatable) => {
  Datatable.hashes().forEach((row)=>{
      loginPage.writeUserName(row.username);
      loginPage.writePassword(row.password);
    })
}
);
And("I click on the button", () => {
  loginPage.clickButton();
});
Then("I should be redirected to orange dashboard page", () => {
  loginPage.orangedashboard();
});

Then("I write invalid credentials and see error message", (Datatable) => {
  cy.wrap(Datatable.hashes()).each((row) => {
    loginPage.writeUserName(row.username);
    loginPage.writePassword(row.password);
    loginPage.clickButton();
    if (row.username === '' && row.password === '') {
      loginPage.messageErrorcase3(); 
    } else if (row.username === '' || row.password === '' ) {
      loginPage.messageErrorcase1(); 
    } else {
      loginPage.invalidCredential();
    }
  });
  cy.wait(1000);
});
