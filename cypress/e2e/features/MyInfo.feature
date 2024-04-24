Feature: Orange My Info
    I want to see My Info and Update

  @regression
  Scenario: Opening a search Orange page
    Given I open Login orange HRM page
    When I write username and password
      | username | password |
      | Admin    | admin123 |
    And I click on the button
    Then I should be redirected to orange dashboard page
    When I click on the nav Menu My Info
    And I write the data information of the client
      | firstname | middlename | lastname |
      | Jorge     | Cuadros    | Bautista |
    And I write employer information
      | employeid | otherid |
      | Jorge2494 |  249424 |
    And I write the driver's license identifier and select when it expires
      | licensedrive    | expirelicense |
      | 12A12B12C12C12D |    2024-11-11 |
    And I select nationality , marital status and date of birth
      | nationality | marital | dateofbirth |
      | American    | Married |  1999-12-10 |
    And Choose gender
    And I select bloodtype and write testfield
      | bloodtype | testfield |
      | B-        |       777 |
    And I click on the button Attachment
    And I click on the button Browse to find png
    Then I click on the button Save and update png
