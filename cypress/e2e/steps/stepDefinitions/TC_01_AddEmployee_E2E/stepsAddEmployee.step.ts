import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import orangeHRM_HeaderMenu from '../../src/pages/orangehrm/orangeHRM_HeaderMenu'
import orangeHRM_AddEmployee from '../../src/pages/orangehrm/orangeHRM_AddEmployeePage'
import orangeHRM_ListEmployee from '../../src/pages/orangehrm/orangeHRM_ListEmployeePage'


const headerMenu = new orangeHRM_HeaderMenu()
const addEmployee = new orangeHRM_AddEmployee()
const listEmployee = new orangeHRM_ListEmployee()

Given('Navigate to PIM and select Add Employee',function(){
    headerMenu.getLinkPIM();
    headerMenu.getLinkAddEmployee();
})

When('I enter employee details',function(){
    addEmployee.getTxtFirstName(this.data.firstname);
    addEmployee.getTxtLastName(this.data.lastname);
    addEmployee.getTxtEmpID(this.data.empid);
    addEmployee.getCheckLoginDetails();
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    addEmployee.getTxtUsername(this.data.new_username+`${randomNumber}`)
    addEmployee.getTxtPassword(this.data.new_password)
    addEmployee.getTxtConfirmPassword(this.data.new_password)
})

Then('I click on Save Button',function(){
    addEmployee.getBtnSave();
})

Then('verify the toast success message',function(){
    addEmployee.getToastMessage();
})