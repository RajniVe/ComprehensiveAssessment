Feature: Flight Booking on MakeMyTrip

  Scenario: Search for a Round Trip Flight
    Given User launches the MakeMyTrip website
    When User clicks on the Flights option
    And User selects ROUND TRIP option
    And User enters "HYD" as the From Location
    And User enters "MAA" as the To Location
    And User selects Departure and Return dates
    And User clicks on the Search button
    Then Verify the search results page is displayed

