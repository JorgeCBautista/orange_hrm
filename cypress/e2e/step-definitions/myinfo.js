import { When, And, Then } from "cypress-cucumber-preprocessor/steps";
import myInfoPage from "../pages/myInfoPage";

When("I click on the nav Menu My Info", () => {
    myInfoPage.clickSpanMyInfo();
});

And("I write full name {string} and {string} and {string}",
    (firstname, middlename, lastname) => {
    myInfoPage.writeFirstName(firstname);
    myInfoPage.writeMiddleName(middlename);
    myInfoPage.writeLastName(lastname);
  }
);
And("I enter data information of the client",
    (Datatable) => {
      Datatable.hashes().forEach((row)=>{
      //| firstname | secondname | lastname |
        myInfoPage.writeFirstName(row.firstname);
        myInfoPage.writeMiddleName(row.secondname);
        myInfoPage.writeLastName(row.lastname);
      })
  }
);

And("I write employer info {string} and {string}", (employeeid, otherid) => {
    myInfoPage.writeEmployeeId(employeeid);
    myInfoPage.writeOtherId(otherid);
});

And("I write License drive {string} and  select {string}",
    (drivelicnumber, selecexpirelicdate) => {
    myInfoPage.writeDriveLicNumber(drivelicnumber);
    myInfoPage.selectExpireLicDate(selecexpirelicdate);
  }
);
And("I select nationality {string} and marital status {string}",
    (inputelectnationality, inputelectmaritalstatus) => {
    myInfoPage.comboInputElectNationality(inputelectnationality);
    myInfoPage.comboInputElectMaritalStatus(inputelectmaritalstatus);
  }
);
And("I select {string} and check Female", (dateofbirth) => {
    myInfoPage.selecDateOfBirth(dateofbirth);
    myInfoPage.radioGenderFemale();
  }
);
And("I select bloodtype {string} and write testfield {string}", (bloodtype,testfield) => {
  myInfoPage.comboInputBloodType(bloodtype);
  myInfoPage.writeTestField(testfield);
}
);
And("I click on the button Attachment", () => {
  myInfoPage.clickAttachmentButton();
});
And("I click on the button Browse to find png", () => {
  myInfoPage.clickButtonBrowse();
});
Then("I click on the button Save and update png", () => {
  myInfoPage.clickButtonSave();
});