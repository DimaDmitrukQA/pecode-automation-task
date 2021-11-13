export class loginForm{
    basicReg(){
        cy.get('[name="username"]').invoke('attr', 'placeholder').should('eq', 'Username')
        cy.get('[name="username"]').should('be.visible').type('TestUser001')
        cy.get('[name="password"]').invoke('attr', 'placeholder').should('eq', 'Password')
        cy.get('[name="password"]').type('testpass123')
        cy.get('[class="btn btn-success"]').should('be.visible').click()
    }
}

export const logForm = new loginForm()