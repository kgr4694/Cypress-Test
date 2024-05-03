///<reference types="cypress"/>
describe ('Task_2-Rahul page test',()=>{
    it('all elements test',()=>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('img[src="images/rs_logo.png"]').should('be.visible')
cy.title().should('include','Practice Page')
cy.get('input[value="radio1"]').click()
cy.get('input[value="radio2"]').click()
cy.get('input[value="radio3"]').click()
cy.get('#autocomplete').type('af')
    cy.get('.ui-menu-item').each(($con1)=>{
        if($con1.text().includes('Afghanistan')){
            cy.wrap($con1).click()
        }
    })
    cy.wait(2000)
cy.get('#dropdown-class-example').select('Select')
cy.get('select').select('Option1')
cy.get('#dropdown-class-example').select('Option2')
cy.get('#dropdown-class-example').select('Option3')

cy.get('#checkBoxOption1').click().should('be.checked')
cy.get('#checkBoxOption2').click().should('be.checked')
cy.get('#checkBoxOption3').click().should('be.checked')
cy.get('#checkBoxOption2').click().should('not.be.checked')

cy.get('#openwindow').click();

// Wait for the new window to open
cy.window('#openwindow').then(newWindow => {
  // Assert that the new window has opened successfully
  expect(newWindow).to.exist;

  // Perform actions in the new window
  newWindow.document.querySelector('img[alt="Logo"]').click();
});


    
})


})