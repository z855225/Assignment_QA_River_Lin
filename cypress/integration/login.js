const validEmail = Cypress.env('email')
const validPassword = Cypress.env('password')
const invalidEmail = 'testqwer1234@sdfsd.com'
const invalidPassword = 'test'

describe('Login Test', function () {
    beforeEach(function () {
        cy.visit('https://www.amazon.com/')
    })

    it('Should login with valid email and password', function () {
        cy.login(validEmail, validPassword)
        cy.get('#nav-link-accountList > .nav-line-1').trigger('mouseover')
        cy.get('#nav-item-signout').should('exist')
    })

    it('Should show an error message with valid email and invalid password', function () {
        cy.login(validEmail, invalidPassword)
        cy.get('#auth-error-message-box').should('exist')
        cy.url().should('include', 'https://www.amazon.com/ap/signin')
    })

    it('Should show an error message with invalid email and valid password', function () {
        cy.login(invalidEmail, validPassword)
        cy.get('#auth-error-message-box').should('exist')
        cy.url().should('include', 'https://www.amazon.com/ap/signin')
    })

    it('Should show an error message with empty email and valid password', function () {
        cy.login(null, validPassword)
        cy.get('#auth-email-missing-alert').should('exist')
        cy.url().should('include', 'https://www.amazon.com/ap/signin')
    })

    it('Should show an error message with empty email and password', function () {
        cy.login(null, null)
        cy.get('#auth-email-missing-alert').should('exist')
        cy.get('#auth-password-missing-alert')
        cy.url().should('include', 'https://www.amazon.com/ap/signin')
    })
})