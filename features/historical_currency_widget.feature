Feature: Historical Currency Rate Widget Functionality Verification

  @UI
  Scenario: Check USD per EUR rate
    Given User is opening the website
    When User selects the "USD" currency
    And User selects the "2023-02-01" date
    Then User verifies the currency unit
      | value                  |
      | 1.0918121631244302     |
  
  @UI
  Scenario: Check GBP per EUR rate
    Given User is opening the website
    When User selects the "GBP" currency
    When User selects the "2023-02-01" date
    Then User verifies the currency unit 
      | value                  |
      | 0.8871386636267415     |