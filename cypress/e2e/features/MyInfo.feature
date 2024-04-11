Feature: Orange My Info
    I want to see My Info and Update

  @regression
  Scenario: Opening a search Orange page
    Given I open Orange page
    When I write "Admin" and "admin123"
    Then I click on the button
    When I click on the nav Menu My Info
    And I write full name "Jorge" and "Cuadros" and "Bautista"
    And I write employer info "Jorge2494" and "249424"
    And I write License drive "12A12B12C12C12D" and  select "2024-11-11"
    And I select nationality "American" and marital status "Married"
    And I select "1999-12-10" and check Female
    And I select bloodtype "B-" and write testfield "777"
    And I click on the button Attachment
    And I click on the button Browse to find png
    Then I click on the button Save and update png
