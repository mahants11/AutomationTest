Feature: Launch IMDB site,search for Star Wars: Episode I and validate Jim Morris has special thanks.

  Background: 
    Given I am on the IMDB site

  Scenario: To Verify Jim Morris has special thanks mentioned for Star Wars: Episode I
  
    When I Enter "Star Wars: Episode I" in search field
    And I click on  Button
    And I click on "Star Wars: Episode I - The Phantom Menace" link
    And I navigate to "See full cast and crew" cast full link
    Then I check "special thanks" message for "Jim Morris"
    And I close browser
