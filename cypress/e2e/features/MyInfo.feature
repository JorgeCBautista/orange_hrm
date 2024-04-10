Feature: Orange My Info
    I want to see My Info and Update

  @regression
  Scenario: Update My Info
    Given I open Orange page
    When I write "Admin" and "admin123"
    When I click in the button
    When I click on the info Menu
    When I write full name "Jorge" and "Cuadros" and "Bautista"
    When I write employer info "Jorge2494" and "249424"