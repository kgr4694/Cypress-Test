// // Import the xlsx library
// import { readFile, utils } from 'xlsx';

// // Read data from the Excel file
// const workbook = readFile('C:\Users\Hp\Desktop\datafile');
// const worksheet = workbook.Sheets['Sheet1'];
// const data = utils.sheet_to_json(worksheet);

// // Cypress test suite
// describe('Login Page', () => {
//     // Loop through the data
//     data.forEach((row, index) => {
//         // Write a test case for each set of credentials
//         it(`should login with credentials from row ${index + 1}`, () => {
//             cy.visit('https://practicetestautomation.com/practice-test-login/');
//             cy.get('input[type="text"]').type(row.username);
//             cy.get('input[type="password"]').type(row.password);
//             cy.get('.btn').click()
//             // Add assertions or further steps as needed
//         });
//     });
// });


