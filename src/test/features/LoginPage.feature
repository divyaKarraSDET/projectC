Feature: verify Login functionality

Scenario: verify user should be able to login with valid credentials


Given user is on login page
When user enters valid "shainug12345@gmail.com" and "Shainug@12345"
Then user should be in dashboard page
