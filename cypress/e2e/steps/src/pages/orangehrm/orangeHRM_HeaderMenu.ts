/// <reference types="cypress" />

export default class HeaderMenu
{
    private readonly PTM_LINK = '.oxd-main-menu li:nth-child(2) a'
    private readonly ADD_EMPLOYEE = '#menu_pim_addEmployee'
    private readonly RECRUITMENT = '#menu_recruitment_viewRecruitmentModule'
    private readonly JOB_VACANCY = '#menu_recruitment_viewJobVacancy'
    private readonly WELCOME = '.oxd-userdropdown span'
    private readonly VIEW_EMPLOYEE_LIST = '#menu_pim_viewEmployeeList'
    private readonly VIEW_DIRECTORY ='menu_directory_viewDirectory'

    getLinkPIM(): void {
        cy.get(this.PTM_LINK).click()
    }

    getLinkAddEmployee(): void {
        cy.contains('Add').click()
    }

    getLinkRecruitment(): void{
        cy.get(this.RECRUITMENT).click()
    }

    getLinkVacancies(): void{
        cy.get(this.JOB_VACANCY)
    }

    getLinkLogoutMenu(): void{
        cy.get(this.WELCOME).click()
    }

    getLinkLogout(): void{
        cy.contains('Logout').click()
    }

    getLinkEmployeeList(): void{
        cy.get(this.VIEW_EMPLOYEE_LIST)
    }

    getLinkDirectory(): void{
        cy.get(this.VIEW_DIRECTORY)
    }
}