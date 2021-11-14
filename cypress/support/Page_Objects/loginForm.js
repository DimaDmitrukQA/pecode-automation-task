export class loginForm{
    auth(name, pass){
        cy.get('form').then( form => {
            cy.wrap(form).find('[name="username"]').type(name)
            cy.wrap(form).find('[name="password"]').type(pass)
        })
        cy.get('[class="btn btn-success"]').should('be.visible').click()
        cy.contains('No account found with that username.').should('be.visible')
        .should('have.text', 'No account found with that username.')
    }
    elements(){
        cy.get('[class="wrapper"]').should('be.visible')
        cy.get('[id="logomini"]').should('be.visible')
        cy.contains('QA Portal Login').should('be.visible')
        cy.get('[name="username"]').invoke('attr', 'placeholder').should('eq', 'Username')
        cy.get('[name="password"]').invoke('attr', 'placeholder').should('eq', 'Password')
        cy.get('[class="btn btn-success"]').should('be.visible')
    }
    testFailed(){
        cy.get('[class="wrapper"]').should('be.visible')
        cy.get('[id="logomini"]').should('be.visible')
        cy.contains('QA Portal Login').should('be.visible')
        cy.get('[name="username"]').invoke('attr', 'placeholder').should('eq', 'Failed')
    }
}

export const logForm = new loginForm()