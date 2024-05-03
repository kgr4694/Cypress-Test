///<reference types="cypress"/>

describe("data driven from fixture",()=>{

    it("Orangehrmlive to test",()=>{

cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get("input[name='username']").type("Admin")
cy.get("input[type='password']").type("admin123")
cy.get("button[type='submit']").click()
cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text","Dashboard")



    })
})
