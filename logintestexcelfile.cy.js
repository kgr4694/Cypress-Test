import login from "../page-objects/pages/LoginPage.js";
describe("Working with cy.task()", function() {
  
  
    it.only("Login Test - Task - generateJSONFromExcel", function() {
      cy.visit('/')
      const excelFilePath = "cypress/fixtures/logindetails.xlsx";
      const sheetName = "TestData";
      
      cy.task("generateJSONFromExcel", { excelFilePath, sheetName}).then(
        (user) => {
          cy.wait(5000)
          login.Username.type(user[0].email);
          login.Password.type(user[0].password);
        }
      );
login.SubmitButton.click();
      
    });
  
  });