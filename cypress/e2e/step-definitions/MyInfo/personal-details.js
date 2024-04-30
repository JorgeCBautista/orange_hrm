import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import myInfoPage from "../../pages/dashboard/personal-details-page";

When("I click on the nav Menu My Info", () => {
  myInfoPage.clickSpanMyInfo();
});
And("I write the data information of the client", (Datatable) => {
  Datatable.hashes().forEach((row) => {
    myInfoPage.writeFirstName(row.firstname);
    myInfoPage.writeMiddleName(row.middlename);
    myInfoPage.writeLastName(row.lastname);
  });
});
And("I write employer information", (Datatable) => {
  Datatable.hashes().forEach((row) => {
    myInfoPage.writeEmployeeId(row.employeid);
    myInfoPage.writeOtherId(row.otherid);
  });
});
And(
  "I write the driver's license identifier and select when it expires",
  (Datatable) => {
    Datatable.hashes().forEach((row) => {
      myInfoPage.writeDriveLicNumber(row.licensedrive);
      myInfoPage.selectExpireLicDate(row.expirelicense);
  });
});
And("I select nationality , marital status and date of birth", (Datatable) => {
  Datatable.hashes().forEach((row) => {
    myInfoPage.comboInputElectNationality(row.nationality);
    myInfoPage.comboInputElectMaritalStatus(row.marital);
    myInfoPage.selecDateOfBirth(row.dateofbirth);
  });
});
And("Choose gender", () => {
  myInfoPage.radioGenderFemale();
});
And("I select bloodtype and write testfield", (Datatable) => {
  Datatable.hashes().forEach((row) => {
    myInfoPage.comboInputBloodType(row.bloodtype);
    myInfoPage.writeTestField(row.testfield);
  });
});
And("I click on the button Attachment", () => {
  myInfoPage.clickAttachmentButton();
});
And("I click on the button Browse to find png", () => {
  myInfoPage.clickButtonBrowse();
});
Then("I click on the button Save and update png", () => {
  myInfoPage.clickButtonSave();
});