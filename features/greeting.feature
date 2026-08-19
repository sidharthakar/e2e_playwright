Feature: Validate Login To Application

@Regression
  Scenario Outline: Login To Apllication
    Given Open Browser and Launch "https://www.saucedemo.com/"
    When Login With Correct "<username>" and "<password>"
    Then Validated the "Swag Labs" Screen have "Home"

    Examples:
    | username     | password     |
    | standard_user| secret_sauce |


 @Regression
  Scenario Outline: Login To Apllication
    Given Open Browser and Launch "https://www.saucedemo.com/"
    When Login With Correct "<username>" and "<password>"
    Then Validated the "Swag Labs" Screen have "Home"

    Examples:
    | username     | password     |
    | standard_user| secret_sauces |

  