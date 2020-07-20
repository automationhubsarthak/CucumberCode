#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@BookHotelAndFlights
Feature: Title of your feature
  I want to book flight tickets and a hotel

Background: 
    Given I live in Delhi
    And I want to go on a holiday
    And We are 3 adults 
    |adult1  |adult2|adult3|
    |Sarthak|Mohit |Ramu |
    |35          | 25      | 26      |
  @BookHotel
  Scenario: I want to book hotel
   # Given I live in Delhi
   # And I want to go on a holiday
    #And We are 3 adults 
   # |adult1  |adult2|adult3|
   # |Sarthak|Mohit |Ramu |
    #|35          | 25      | 26      |
     And We want to book from 10th Feb 2020 to 20th Feb 2020
    When I go to Travel Website
    Then I should be able to book both hotel in budget of 10000 INR per head
    And I should be able to exercise Cancel option
    But I should not be asked for advance more than 5000 INR per head in case I want to book in advance
 

  @BookFlight
  Scenario Outline:  I want to book flight
      # Given I live in Delhi
   # And I want to go on a holiday
    #And We are 3 adults 
   # |adult1  |adult2|adult3|
   # |Sarthak|Mohit |Ramu |
    #|35          | 25      | 26      |
    And We want to book flight to <Destination> on <ToFlightDate>
    And return flight on <FromFlightDate>
    
    Examples:
    |Destination   | FromFlightDate   | ToFlightDate    |
    | Malaysia       |    20th Feb 2020   | 9th Feb 2020    |
    |Penang           |    10th Mar 2020   | 1st Mar 2020   |
    
   