/// <reference types="cypress" />

export const navToApp = () =>
    cy.visit('/');

export const userName = () => {
    const signInIcon = cy.get(".login").should("be.visible");
    signInIcon.click();
};

export const createNewAcc = () => {
    const emailAddress = cy.get("#email_create").should("be.visible");
        var email='';
        var nameResult = '';
        var characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        var emailIndex = ["@gmail.com", "@yahoo.com", "@doc-mail.net"];
        var mailResult = emailIndex[Math.floor(Math.random() * emailIndex.length)];
        for (var i = 0; i < 8; i++) {
            nameResult += characters.charAt(Math.random() * charactersLength);
        }
        email=nameResult+mailResult;
        emailAddress.type(email);
    const submitCreate = cy.get("#SubmitCreate").should("be.visible");
    submitCreate.click();
    cy.wait(3000);
};

export const generatePerInfo = () =>{
    const createAnAccTitle = cy.get('.page-heading').should('have.text','Create an account');
}
