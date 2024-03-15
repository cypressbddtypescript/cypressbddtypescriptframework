@smoke
Feature: Add New Employee
    
    Add New Employee,Validate and Delete

 Background:
    Given I open the orangeHRM Login Page
    When I see "OrangeHRM" in the title
    When I enter username and password
    When I click on Login
    Then I should be navigated to Application HomePage

  Scenario: Verify able to add the employee to the employee list
    Given Navigate to PIM and select Add Employee
    When I enter employee details
    And I click on Save Button
    Then verify the toast success message
    And I navigate to Logout Button
    Then I click on Logout

  Scenario Outline: Validate and Edit Employee in the Employee List
    Given user click on the Navigate to PIM Menu
    And user click on the emplyee edit details
    And user update the "<lastName>" employee last name
    And I click on personal details Save Button
    Then verify the toast success message after update employee
    And I navigate to Logout Button
    Then I click on Logout

    Examples:
    | lastName   |
    |  Hernandez |

  Scenario: Delete the Employee
    Given user click on the Navigate to PIM Menu
    And user click on the emplyee delete details
    And user click on yes delete button
    Then verify the toast success message after delete employee
    And I navigate to Logout Button
    Then I click on Logout

  Scenario Outline: Verify user is able to add the multiple employees to the employee list
    And Navigate to PIM and select Add Employee
    When create employee with "<validDetails>"
    And I click on Save Button
    Then verify the toast success message
    And I navigate to Logout Button
    Then I click on Logout

    Examples:
    | validDetails       |
    | firstUserData      |
    | secondUserData     |