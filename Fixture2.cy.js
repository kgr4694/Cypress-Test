/// <reference types="cypress"/>

describe ('fixture using auto fill data',()=>{
    let givendata;
    before(()=>{
        cy.fixture('example').then((getdata)=>{
            givendata=getdata
        })
    })

it('using login page',()=>{

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]').eq(0).type(givendata.username)
        cy.get('input[name="email"]').type(givendata.email)
        cy.get('#exampleInputPassword1').type(givendata.password)
        cy.scrollTo('bottom')
        cy.scrollTo('top')
        



})
})
