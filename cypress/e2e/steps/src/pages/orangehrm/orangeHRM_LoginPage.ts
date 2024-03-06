/// <reference types="cypress" />

export default class LoginPage
{

    private readonly BASE_URL = 'https://opensource-demo.orangehrmlive.com/'

    private readonly CSS_INPUT_SEARCH = '[name="username"]'
    private readonly CSS_BUTTON_SEARCH = '[name="password"]'
    private readonly CSS_BUTTON_LOGIN = '[type="submit"]'

    getOrangeHRMUrl(): void{
         cy.visit(this.BASE_URL)
         cy.get('body').should('be.visible')
    }

    getLoginPageTitle(title: string): void {
        cy.title().should('include',title)
    }

    getTxtUsername(text: string): void{
        cy.get(this.CSS_INPUT_SEARCH).type(text)
    }
    getTxtPassword(text: string): void {
        cy.get(this.CSS_BUTTON_SEARCH).type(text,{log:false})
    }

    getLoginBtn(): void{
        cy.get(this.CSS_BUTTON_LOGIN).click()
    }

    getCurrentURL(): void{
        cy.url().should('include','dashboard')
    }
}