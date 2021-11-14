/// <reference types = "cypress" />
import { logForm } from '/cypress/support/Page_Objects/loginForm'

import { urls } from '/cypress/support/Page_Objects/links'

describe('Pecode Automation test task', () => {
    beforeEach('Open the main page', () => {
        urls.main();
        // Verify if url was changed
        urls.redirected();
    })
    it('Verify if all elements are presented on page', () => {
        logForm.elements();
    })
    it('Check the login tab', () => {
        logForm.auth('TestUser123', 'testpass001');
    })
})