import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";

Given("I open Orange page", () => {
  cy.visit("/");
});
When("I write username and password", (Datatable) => {
  Datatable.hashes().forEach((row)=>{
      loginPage.writeUserName(row.username);
      loginPage.writePassword(row.password);
    })
}
);
Then("I click on the button", () => {
  loginPage.clickButton();
});
