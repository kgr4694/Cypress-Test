/// <reference types = "cypress"/>

describe('flipkat automation test',()=>{
    it('flipkar home test',()=>{

        // to visit web page
        cy.visit('https://www.flipkart.com/')
        // to check flipkart logo
        cy.get('._16ZfEv').eq(0).should('be.visible')
        // to click one product 'mobile'
        cy.get('._1XjE3T').eq(1).click()
        // to click link 'downarrow'// to click mobile name
        cy.get('.RWB9Wm').eq(0).click()
        // to click mobile name
        cy.get('._3QN6WI').eq(3).click()
        // to select exact model and remove new tab open
        cy.get('.s1Q9rs').eq(9).invoke('removeAttr', 'target').click();
        // to click 'buy button'
        cy.get('._2KpZ6l._2U9uOA ihZ75k._3AWRsL').click()



    })
})