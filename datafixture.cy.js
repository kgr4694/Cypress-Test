describe('data fixture using to login page',()=>{
    let userdata;
     before(()=>{
            cy.fixture('example').then((testdata)=>{
            userdata=testdata
        })
    })

    it("enter the cretinial",()=>{

    cy.visit('https://practicetestautomation.com/practice-test-login/');
             cy.get('input[type="text"]').type(userdata.username);
             cy.get('input[type="password"]').type(userdata.password);
             cy.get('.btn').click()
}
)

})