/// <reference types="cypress" />

export default class ListEmployee
{
    private readonly EMPLOYNAME  = '#empsearch_employee_name_empName'
    private readonly AC_RESULTS = '.ac_results li'
    private readonly SEARCH_BUTTON = '#searchBtn'
    private readonly DELETE_BUTTON = '#btnDelete'
    private readonly SUCCESS_MESSAGE = '.message'
    private readonly TABLE_COLUMN_FIRSTNAME= 'tr td:nth-child(3)'
    private readonly TABLE_COLUMN_LASTNAME = 'tr td:nth-child(4)'
    private readonly CHECKBOX_COLUMN = 'tr td:nth-child(1)'
    private readonly DIALOG_DELETE_BUTTON = '#dialogDeleteBtn'


    getTxtEmployeeName(text: string): void {
        cy.get(this.EMPLOYNAME).clear().type(text)
    }

    getDynamicDrpDwn_EmployeeName(text: string): void{
        cy.get(this.AC_RESULTS).contains(text).click()
    }

    getBtnSearch(): void{
        cy.get(this.SEARCH_BUTTON).click()
    }

    getBtnDelete(): void{
        cy.get(this.DELETE_BUTTON).click()
    }

    getSuccessMsg(): void{
        cy.get(this.SUCCESS_MESSAGE).should('include.text','Successfully Deleted')
    }

    getWebTable_NameColumn(){
       return cy.get(this.TABLE_COLUMN_FIRSTNAME)
    }

    getWebTable_LastNameColumn() {
        return cy.get(this.TABLE_COLUMN_LASTNAME)
    }

    getWebTable_CheckBoxColumn() {
        return cy.get(this.CHECKBOX_COLUMN)
    }

    getAlertBtnOk(): void{
        cy.get(this.DIALOG_DELETE_BUTTON).click({force:true})
    }
}