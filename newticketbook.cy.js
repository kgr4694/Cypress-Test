///<referance type="cypress"/>
describe ('make my trip', () =>{
    it('open make my trip web page', () =>{
        cy.visit('https://ticketnew.com/movies/chennai')
        cy.get('.H5RunningMovieV2_imgWrapper__Tadcr').eq(0).click()
        cy.get('.MovieSessionsListing_timeblock__S_Z44').eq(0).click()
        cy.wait(2000)
        cy.get('[aria-label="available  seat, class CORPORATE, row CL, column 24, price 150  "]').click()
        cy.get('[aria-label="available  seat, class CORPORATE, row CL, column 23, price 150  "]').click()
        cy.wait(3000)
        cy.get('.Button_btn__NHo2w').eq(0).click()
        cy.wait(4000)
        cy.get('#email_mobile_login').type('9047947947')
})
})