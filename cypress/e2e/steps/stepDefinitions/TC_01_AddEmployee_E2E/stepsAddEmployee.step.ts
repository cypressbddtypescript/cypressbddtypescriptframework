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
    //addEmployee.getDrpDwnStatus();
})

Then('I click on Save Button',function(){
    addEmployee.getBtnSave();
    //addEmployee.getLblProfileName(this.data.firstname)
})

Then('verify the toast success message',function(){
    addEmployee.getToastMessage();
})

Given('Click on Employee List Link',function(){
    headerMenu.getLinkEmployeeList()
})

When('Search Employee with Name',function(){
    cy.wait(1000)
    listEmployee.getTxtEmployeeName(this.data.firstname)
    listEmployee.getDynamicDrpDwn_EmployeeName(this.data.firstname)
    listEmployee.getBtnSearch()
})

Then('Check the Employee details in WebTable',function(){
    listEmployee.getWebTable_NameColumn().each(($el,index)=>{
        if($el.text().includes(this.data.firstname)){
            listEmployee.getWebTable_LastNameColumn().eq(index).then(function(lastname)
            {
                const lname = lastname.text()
                expect(lname).to.equal(this.data.lastname)

            })
        }
    })
    
})

When('Delete the Employee',function(){
    listEmployee.getWebTable_NameColumn().each(($el,index)=>{
        if($el.text().includes(this.data.firstname)){
            listEmployee.getWebTable_CheckBoxColumn().eq(index).click()
            listEmployee.getBtnDelete()
           
        }
        listEmployee.getAlertBtnOk();
    })
     
})

Then('Check the Success Message',function(){
    listEmployee.getSuccessMsg()
})