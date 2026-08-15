Feature: Validate Login To Application and Validated

  @FailedTest
  Scenario: Login To Apllication
    Given Open Browser and Launch "https://www.saucedemo.com/"
    When Login With Correct "standard_user" and "secret_sauce"
    Then Validated the "Swag Labs Failed" Screen have "Home"
 
 @FailedTest
  Scenario: Login To Apllication and Validate Different Titel
    Given Open Browser and Launch "https://www.saucedemo.com/"
    When Login With Correct "standard_user" and "secret_sauce"
    Then Validated the " <Value_Titel> " Screen have "Home"

    Examples:
    |Value_Titel|
    |Swag Labs |
