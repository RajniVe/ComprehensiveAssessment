package runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    features = "/com.assignment/src/test/java/com/comprehensive/com/assignment/features/flight_booking.feature",
    glue = "/com.assignment/src/main/java/stepDefinitions/FlightBookingSteps.java",
    plugin = {"pretty", "html:target/cucumber-reports.html"},
    monochrome = true
)
public class TestRunner extends AbstractTestNGCucumberTests {
}
