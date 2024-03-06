/// <reference types="Cypress" />
import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor'

import orangeHRM_LoginPage from "../../src/pages/orangehrm/orangeHRM_LoginPage";
import orangeHRM_HeaderMenu from "../../src/pages/orangehrm/orangeHRM_HeaderMenu";

const loginPage = new orangeHRM_LoginPage()
const headerMenu = new orangeHRM_HeaderMenu()

// beforeEach(function(){
//     cy.fixture('testData').then(function(data){
//         this.data = data
//     })
// })

Given('I open the orangeHRM Login Page',function()
{
    loginPage.getOrangeHRMUrl()
})

When('I see {string} in the title',(title: string) =>{
    loginPage.getLoginPageTitle(title)
})

When('I enter username and password',function(){
    loginPage.getTxtUsername(this.data.username)
    loginPage.getTxtPassword(this.data.password)
})

When('I click on Login',function(){
    loginPage.getLoginBtn()
})

Then('I should be navigated to Application HomePage',function(){
    loginPage.getCurrentURL();
})


Given('I navigate to Logout Button',function(){
    headerMenu.getLinkLogoutMenu();
})

When('I click on Logout',function(){
    headerMenu.getLinkLogout();
})

Then('I should be navigated to Login Page',function(){
    loginPage.getCurrentURL();

})

