Cypress.Commands.add("login", (email, password) => {
    cy.get('#nav-link-accountList > .nav-line-1').click()
    email != null && cy.get('#ap_email').type(email)
    password != null && cy.get('#ap_password').type(password)
    cy.get('#signInSubmit').click()
})
