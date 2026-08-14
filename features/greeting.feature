Feature: Greeting

  Scenario: Login To Apllication
    Given Open Browser and Launch "https://www.saucedemo.com/"
    When Login With Correct "standard_user" and "secret_sauce"
    Then Validated the "Swag Labs" Screen have "Home"