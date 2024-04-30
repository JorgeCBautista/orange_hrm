class loginPage{
    elements = {
        inputUser: () => cy.get('[name="username"]'),
        inputPassword: () => cy.get('[name="password"]'),
        buttonSubmit: () => cy.get('[type="submit"]'),
        invalidCredentials: () => cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text'),
        messageerrorcase: () => cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
    }
    openloginpage(){
        cy.visit("/");
    }
    writeUserName(option){
        const input = this.elements.inputUser();
            if (option === '') {
                input.clear().type(' ').clear()
                    } else {
                input.clear().type(option)
                    }
    }
    writePassword(option){
        const input2 = this.elements.inputPassword();
            if (option === '') {
                input2.clear().type(' ').clear()
                    } else {
                input2.clear().type(option)
    } 
}
    clickButton(){
        this.elements.buttonSubmit().should('be.visible').click();
    }
    orangedashboard(){
        cy.url().should("include", "/dashboard");
    }
    invalidCredential(){
        this.elements.invalidCredentials().should('be.visible')
    }
    messageErrorcase1(){
        this.elements.messageerrorcase().should('be.visible');
    }
    messageErrorcase3(){
        this.elements.messageerrorcase().eq(0).should('be.visible');
        this.elements.messageerrorcase().eq(1).should('be.visible')
    }
}
export default  new loginPage()
