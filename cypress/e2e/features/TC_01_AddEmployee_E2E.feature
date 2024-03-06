Feature: Add New Employee
    
    Add New Employee,Validate and Delete

    @smoke
    Scenario: Login into orangeHRM, add, validate and delete the employye
    Given I open the orangeHRM Login Page
    When I see "OrangeHRM" in the title
    When I enter username and password
    When I click on Login
    Then I should be navigated to Application HomePage
    Given Navigate to PIM and select Add Employee
    When I enter employee details
    And I click on Save Button
    Then verify the toast success message
    And I navigate to Logout Button
    Then I click on Logout
