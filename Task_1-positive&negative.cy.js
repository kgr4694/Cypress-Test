///<reference types = "cypress"/>
describe('Practise page',() => {
    it('Account login', ()=> {

        //web page login 
        cy.visit('https://practicetestautomation.com/')
        // to click the practice page
        cy.get('#menu-item-20').click()
        //to click login test page
        cy.get('p a').eq(0).click()
        // to check the title is match
        cy.title().should('include','Practice Test Automation')
        // to check the title name
        cy.title().should('include','Test Login')
        // to check logo or image is visible or not check
        cy.get('.custom-logo').should('be.visible')
        // to enter text in username field or textbox
        cy.get('input[type="text"]').type('student')
        // to enter text in password field or textbox
        cy.get('input[type="password"]').type('Password123')
        // to click submit button
        cy.get('.btn').click()
        // to check title name for after login successfully
        cy.title().should('include','Logged In Successfully')
        // to click logout button
        cy.get('.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color').click()

        // Negative test case
        // to enter invalid username 
        cy.get('input[type="text"]').type('xxxxxxxx')
        // to enter valid password
        cy.get('input[type="password"]').type('Password123')
        // to enter submit button 
        cy.get('.btn').click()
        // to check expect error message is visible or not
        cy.get('div [class="show"]').contains('Your username is invalid!').should('be.visible');
        // to enter valid Username
        cy.get('input[type="text"]').type('student')
        // to enter invalid password
        cy.get('input[type="password"]').type('Password')
         // to enter submit button 
        cy.get('.btn').click()
        // to check expect error message is visible or not
        cy.get('div [class="show"]').contains('Your password is invalid!').should('be.visible')

    })
})

///////////// Task I=====Test case completed