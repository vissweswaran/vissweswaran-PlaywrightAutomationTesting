Feature: Login to Naukri

    Scenario: User logs in with valid credentials
        Given the user is on the Naukri login page
        When the user enters valid email and password
        And clicks on the login button
        Then the user should be redirected to the homepage
        And the profile section should be visible

    Scenario: User uploads a new resume file
        Given the user is logged into their Naukri profile
        When the user navigates to the resume upload section
        And uploads a valid resume file
        Then a success message should appear
        And the resume filename should be updated

    Scenario: User logs out successfully
        Given the user is logged into the dashboard
        When the user clicks on the logout option
        Then the user should be redirected to the login page