/// <reference types = "cypress" />
import { logForm } from '/cypress/support/Page_Objects/loginForm'

describe('Pecode Automation test task', () => {
    beforeEach('Open the main page', () => {
        cy.visit('https://www.pecodesoftware.com/qa-portal/greet.php')
    })

    it('Check the login tab', () => {
        logForm.auth('TestUser123', 'testpass001');
    })

    it('Verify that all the elements are present on page', () => {
        logForm.elements();
    })
    it('Make sure a screenshot is taken when the test fails', () => {
        logForm.testFailed();
    })
})