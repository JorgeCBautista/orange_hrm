Feature: Orange Main Page
    I want to open a Orange page

  @focus
  Scenario: Opening a search Orange page
    Given I open Orange page
    When I write "Admin" and "admin123"
    Then I click in the button
