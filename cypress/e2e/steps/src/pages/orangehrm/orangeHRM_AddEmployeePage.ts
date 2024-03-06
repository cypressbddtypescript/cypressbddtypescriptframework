/// <reference types="cypress" />

export default class AddEmployee
{

    private readonly FIRSTNAME = '[name="firstName"]';
    private readonly LASTNAME = '[name="lastName"]';
    private readonly EMPLOYEEID = '.orangehrm-full-width-grid > div > div > div:nth-child(2) > input';
    private readonly CHKLOGIN = '[type="checkbox"] ~ span';
    private readonly USERNAME = 'div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input';
    private readonly PASSWORD = '.user-password-cell > div > div:nth-child(2) > input[type="password"]';
    private readonly RE_PASSWORD = '.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input[type="password"]';
    private readonly STATUS = '#status';
    //private readonly BTNSAVE = 'btnSave';
    private readonly PROFILE_PIC = '#profile-pic h1';


    getTxtFirstName(text: string): void{
        cy.get(this.FIRSTNAME).should('be.visible').type(text)
    }

    getTxtLastName(text: string): void{
        cy.get(this.LASTNAME).should('be.visible').type(text)
    }

    getTxtEmpID(text: string){
        cy.get(this.EMPLOYEEID).type(text)
    }

    getCheckLoginDetails(): void{
        cy.get(this.CHKLOGIN).click()
    }

    getTxtUsername(text: string): void{
        cy.get(this.USERNAME).type(text)
    }

    getTxtPassword(text: string): void{
        cy.get(this.PASSWORD).type(text)
    }

    getTxtConfirmPassword(text: string): void {
        cy.get(this.RE_PASSWORD).type(text)
    }

    getDrpDwnStatus(): void{
        cy.get(this.STATUS).should('have.value','Enabled')
    }

    getBtnSave(): void{
        cy.contains('Save').click()
    }

    getLblProfileName(text: string): void{
        cy.get(this.PROFILE_PIC).contains(text)
    }

    getToastMessage(): void{
        cy.contains('Success').should('be.visible')
        cy.contains('Successfully Saved').should('be.visible')
    }
}
