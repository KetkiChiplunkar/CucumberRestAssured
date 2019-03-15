@TweetterApi_Feature
Feature: Get the latest twit
  I want to get the latest tweet in tweetter

  Background: 
    Given user provide base URI and authorization information

  Scenario: Create tweet in Tweeter
    When the user post its tweets
    Then the tweets is successfully added to the user wall
    And the tweet works fine
