/// <reference types='cypress'/>
describe('proto type commercial',()=>{
    it('order the product',()=>{

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.navbar-brand').eq(0).click()
        cy.get('input[name="name"]').eq(0).type('Rajkumar')
        cy.get('input[name="email"]').type('rajkumar@gmail.com')
        cy.get('#exampleInputPassword1').type('Pass@123')
        cy.get('#exampleCheck1').click()
        cy.get('#exampleCheck1').check().should('be.checked')
        cy.get('#exampleFormControlSelect1').select('Male')
        cy.get('#inlineRadio1').click().should('be.checked')
        cy.get('input[name="bday"]').type('1994-10-10')
        cy.get('input[type="submit"]').click()
        cy.get('strong').should ('have.text','Success!')
        //cy.get('strong').invoke('Success!').should('include','Success!');

        //cy.get('div strong').should('include','Success!')

        //form filling completed

        cy.get('.nav-link').eq(1).click()
        cy.get('.btn.btn-info').eq(0).click()
        cy.get('.btn.btn-info').eq(3).click()
        cy.get('.nav-link.btn.btn-primary').click()

// //         cy.get('.col-sm-1.col-md-1').eq(1).type('100000'); // User enters the integer value

// // // To get the integer value entered by the user
// // cy.get('.col-sm-1.col-md-1').invoke('val').then((value) => {
// //   const intValue = parseInt(value, 100000); // Convert the value to an integer
// //   // Now 'intValue' holds the integer value entered by the user
// //   // You can perform assertions or further actions with this integer value
// //   // For example, you can assert that the entered value is indeed an integer
// //   expect(intValue).to.be.a('number'); // Assert that it's a number
// //   expect(Number.isInteger(intValue)).to.be.true; // Assert that it's an integer
// // });

        
//         // need to add calculation value command

        cy.get('.btn.btn-success').click()
        cy.get('#country').type('in')
        cy.wait(5000)
        cy.get('div ul').each(($concho)=>{
            if ($concho.text().includes('India')){
                cy.wrap($concho).click()
            }
        })
        //cy.wait(5000)
        //cy.get('div ul li a:nth-child(1)').eq(5).click()
        cy.get('input[type="checkbox"]').click({force: true}).should('be.checked')
        cy.get('.btn.btn-success.btn-lg').click()
        cy.get('.alert.alert-success.alert-dismissible').should('be.visible')
        //cy.screenshot('order success status')

        

    })
})