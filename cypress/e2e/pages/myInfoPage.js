class myInfoPage {
    elements = {
        clickSpanMyInfo: () => cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name'),
        inputFirstName: () =>cy.get('[placeholder="First Name"]'),
        inputMiddleName: () =>cy.get('[placeholder="Middle Name"]'),
        inputLastName: () =>cy.get('[placeholder="Last Name"]'),
        inputOtherId: () =>cy.get('.oxd-input.oxd-input--active'),
        inputEmployeeId: ()=>cy.get('.oxd-input.oxd-input--active')
    }

    clickSpanMyInfo() {
        this.elements.clickSpanMyInfo().should('be.visible').contains('My Info').click();
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
        this.elements.inputEmployeeId().eq(3).should('be.visible').clear().type(option)
    }
    writeOtherId(option){
        this.elements.inputOtherId().eq(4).should('be.visible').clear().type(option)
    }
    

}

export default new myInfoPage();