import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/loginPage";

Given("I open Orange page", () => {
  cy.visit("/");
});

When("I write {string} and {string}", (username, password) => {
  loginPage.writeUserName(username);
  loginPage.writePassword(password);
});

Then("I click on the button", () => {
  loginPage.clickButton();
});
