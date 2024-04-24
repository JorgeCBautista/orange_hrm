class myInfoPage {
    elements = {
        clickSpanMyInfo: () => cy.get('.oxd-sidepanel-body ul.oxd-main-menu li a span'),
        inputFirstName: () =>cy.get('[name="firstName"]'),
        inputMiddleName: () =>cy.get('[name="middleName"]'),
        inputLastName: () =>cy.get('[name="lastName"]'),
        inputEmployeeId: ()=>cy.get('.oxd-grid-item.oxd-grid-item--gutters .oxd-input.oxd-input--active'),
        inputOtherId: () =>cy.get('.oxd-grid-item.oxd-grid-item--gutters .oxd-input.oxd-input--active'),
        driveLicNumber : () =>cy.get('.oxd-grid-item.oxd-grid-item--gutters .oxd-input.oxd-input--active'),
        inputExpireLicDate: () =>cy.get('.oxd-date-input .oxd-input.oxd-input--active'),
        inputElectNationality: ()=>cy.get('.oxd-select-text-input'),
        inputElectMaritalStatus: ()=>cy.get('.oxd-select-text-input'),
        inputDateofBirth: () =>cy.get('.oxd-date-input .oxd-input.oxd-input--active'),
        radioFemale: ()=>cy.get('[type="radio"]'),
        inputBloodType: ()=>cy.get('.oxd-select-text-input'),
        inputTestField: () =>cy.get('.oxd-input.oxd-input--active'),
        buttonAttachment: () => cy.get('.oxd-button.oxd-button--medium.oxd-button--text'),
        buttonBrowse: () => cy.get('.oxd-file-input'),
        buttonSave:() => cy.get('[type="submit"]')
    }

    clickSpanMyInfo() {
        this.elements.clickSpanMyInfo().eq(5).should('be.visible').click();
    }
    writeFirstName(option){
        this.elements.inputFirstName().should('be.visible').clear().type(option)
    }
    writeMiddleName(option){
        this.elements.inputMiddleName().should('be.visible').clear().type(option)
    }
    writeLastName(option){
        this.elements.inputLastName().should('be.visible').clear().type(option)
    }

    writeEmployeeId(option){
        this.elements.inputEmployeeId().eq(2).should('be.visible').clear().type(option)
    }
    writeOtherId(option){
        this.elements.inputOtherId().eq(3).should('be.visible').clear().type(option)
    }
    writeDriveLicNumber(option){
        this.elements.driveLicNumber().eq(4).should('be.visible').clear().type(option)
    }
    selectExpireLicDate(date){
        this.elements.inputExpireLicDate().eq(0).clear().type(date).click()
    }
    comboInputElectNationality(option){
        this.elements.inputElectNationality().eq(0).click().then(() => {
            cy.contains(option).click()
        });
    }
    comboInputElectMaritalStatus(option){
        this.elements.inputElectMaritalStatus().eq(1).click().then(() => {
            cy.contains(option).click();
        });     
    }
    selecDateOfBirth(date){
        this.elements.inputDateofBirth().eq(1).clear().type(date).click()
    }
    radioGenderFemale(){
        this.elements.radioFemale().eq(1).click({force: true});
    }
    comboInputBloodType(option){
        this.elements.inputBloodType().eq(2).click().then(() => {
            cy.contains(option).click();
        });     
    }
    writeTestField(option){
        this.elements.inputTestField().eq(9).should('be.visible').clear().type(option)
    }
    clickAttachmentButton(){
        this.elements.buttonAttachment().should('be.visible').and('contain','Add').click();
    }
    clickButtonBrowse() {
        //cy.get('input[type="file"]').selectFile("cypress/fixtures/tes2222.png", {force: true});
        this.elements.buttonBrowse().click({force: true}).selectFile("cypress/fixtures/test123cty.pdf", {force: true});
    }
    clickButtonSave(){
        this.elements.buttonSave().eq(2).should('be.visible').wait(1000).click({force: true});
    }  
}
export default new myInfoPage();