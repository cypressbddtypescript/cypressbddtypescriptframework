import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import orangeHRM_HeaderMenu from '../../src/pages/orangehrm/orangeHRM_HeaderMenu'
import orangeHRM_AddEmployee from '../../src/pages/orangehrm/orangeHRM_AddEmployeePage'
import orangeHRM_ListEmployee from '../../src/pages/orangehrm/orangeHRM_ListEmployeePage'
import EnumConstants from '../../../../enums/constants'
import { forEach } from 'cypress/types/lodash'

const headerMenu = new orangeHRM_HeaderMenu()
const addEmployee = new orangeHRM_AddEmployee()
const listEmployee = new orangeHRM_ListEmployee()
const toastMessages = new EnumConstants()

Given('Navigate to PIM and select Add Employee',function(){
    headerMenu.getLinkPIM();
    headerMenu.getLinkAddEmployee();
})

When('I enter employee details',function(){
    //console.log(this.data[0])
    addEmployee.getTxtFirstName(this.firstUserData.firstname);
    addEmployee.getTxtLastName(this.firstUserData.lastname);
    addEmployee.getTxtEmpID(this.firstUserData.empid);
    addEmployee.getCheckLoginDetails();
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    addEmployee.getTxtUsername(this.firstUserData.new_username+`${randomNumber}`)
    addEmployee.getTxtPassword(this.firstUserData.new_password)
    addEmployee.getTxtConfirmPassword(this.firstUserData.new_password)
})

Then('I click on Save Button',function(){
    addEmployee.getBtnSave();
})

Then('verify the toast success message',function(){
    addEmployee.getToastMessage(toastMessages.TOAST_DETAILS, toastMessages.TOAST_CREATE_SUMMARY);
})

Given('Click on Employee List Link',function(){
    headerMenu.getLinkEmployeeList();
})

Then('user click on the emplyee edit details',function(){
    listEmployee.getEmployeeEditDetails();
})

Then('user update the {string} employee last name',function(lastName: string){
    listEmployee.getTxtLastName(lastName);
})

Then('I click on personal details Save Button',function(){
    listEmployee.getSaveButton();
})

Then('verify the toast success message after update employee',function(){
    addEmployee.getToastMessage(toastMessages.TOAST_DETAILS, toastMessages.TOAST_CREATE_SUMMARY);
})

Then('user click on the emplyee delete details',function(){
    listEmployee.getEmployeeDeleteDetails();
})

Then('user click on yes delete button',function(){
    listEmployee.getYesDeleteButton();
})

Then('verify the toast success message after delete employee',function(){
    addEmployee.getToastMessage(toastMessages.TOAST_DETAILS, toastMessages.TOAST_DELETE_SUMMARY);
})

Then('user click on the Navigate to PIM Menu',function(){
    headerMenu.getLinkPIM();
})

When('create employee with {string}',function(validDetails:string){
    if (validDetails.includes('firstUserData')) {
        addEmployee.getTxtFirstName(this.firstUserData.firstname);
        addEmployee.getTxtLastName(this.firstUserData.lastname);
        addEmployee.getTxtEmpID(this.firstUserData.empid);
        addEmployee.getCheckLoginDetails();
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        addEmployee.getTxtUsername(this.firstUserData.new_username+`${randomNumber}`)
        addEmployee.getTxtPassword(this.firstUserData.new_password)
        addEmployee.getTxtConfirmPassword(this.firstUserData.new_password)
    }

    if (validDetails.includes('secondUserData')) {
        addEmployee.getTxtFirstName(this.secondUserData.firstname);
        addEmployee.getTxtLastName(this.secondUserData.lastname);
        addEmployee.getTxtEmpID(this.secondUserData.empid);
        addEmployee.getCheckLoginDetails();
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        addEmployee.getTxtUsername(this.secondUserData.new_username+`${randomNumber}`)
        addEmployee.getTxtPassword(this.secondUserData.new_password)
        addEmployee.getTxtConfirmPassword(this.secondUserData.new_password)
        }
    
})