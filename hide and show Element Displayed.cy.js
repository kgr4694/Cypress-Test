///referance types="cypress"/
describe('partices page training',()=>{
    it('training page',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#show-textbox'). click()
        cy.get('input[style="display: block;"]').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('input[style="display: none;"]').should('not.be.visible');
        
    })
})