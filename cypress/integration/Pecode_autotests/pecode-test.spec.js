/// <reference types = "cypress" />
import { logForm } from 'C:/Users/Роман/Desktop/Automation task/cypress/support/Page_Objects/loginForm'

import { urls } from 'C:/Users/Роман/Desktop/Automation task/cypress/support/Page_Objects/links'

describe('Pecode Automation test task', () => {
    beforeEach('Open the main page', () => {
        urls.main();
        // Verify if url was changed
        urls.new_main();
    })
    it('Check the login tab', () => {
        logForm.basicReg();
    })
})