Feature: Orange Main Page Login
    I want to open a Orange page

  Scenario: Login successful
    Given I open Login orange HRM page
    When I write username and password
      | username | password |
      | Admin    | admin123 |
    And I click on the button
    Then I should be redirected to orange dashboard page

  Scenario: Login unsuccessful
    Given I open Login orange HRM page
    Then I write invalid credentials and see error message
      | username | password |
      | Acmind   | admin123 |
      | Admin    |          |
      |          | admin111 |
      |          |          |
