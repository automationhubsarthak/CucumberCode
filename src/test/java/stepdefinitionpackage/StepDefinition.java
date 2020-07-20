package stepdefinitionpackage;
import java.util.List;
import java.util.Map;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en. Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	@Before("@BookHotel")           //hooks in cucumber
	public void beforeScenario() {
		System.out.println("------------------------Before Executing-----------------------------");
	}
	
	@After("@BookHotel")         //hooks in cucumber
	public void afterScenario() {
		System.out.println("---------------------After Executing----------------------------------");
	}
	
	@Given("^I live in ([a-zA-Z]{1,})$")
	public void I_live(String cityName) {
		System.out.println("I live in : " +  cityName);
	}
	
    @And("^I want to go on a ([a-zA-Z]{1,})$")
    public void I_want(String plan) {
    	System.out.println("I want to go on a :" + plan);
    }
    
    @And("^We are (\\d+) adults$")
    public void We_are(int totalPeople, List<Map<String, String>> names) {
    	System.out.println("We are :" + totalPeople + " adults" + names.toString());
    }
    
    @And("^We want to book from ([^\"]*) to ([^\"]*)$")
    public void We_want(String fromDate, String toDate) {
    	System.out.println("We want to book from :" + fromDate + "  to : " + toDate);
    }
    
    @When( "^I go to Travel ([a-zA-Z]{1,})$")
    public void I_go(String bookingmedium) {
    	System.out.println("I go to Travel :" + bookingmedium);
    }
    
    @Then("^I should be able to book both hotel in budget of (\\d+) INR per head$")
    public void I_should(int hotelbookingamount) {
    	System.out.println("I should be able to book both hotel in budget of " + hotelbookingamount + " INR per head");
    }
    
    @And("^I should be able to exercise ([a-zA-Z]{1,}) option$")
    public void I_should_be(String action) {
    	System.out.println("I should be able to exercise " + action + " option");
    }
    
    @But("^I should not be asked for advance more than (\\d+) INR per head in case I want to book in advance$")
    public void I_should_not(int advanceamount) {
    	System.out.println("I should not be asked for advance more than" + advanceamount + "INR per head in case I want to book in advance");
    }
    
    
    @And ("^We want to book flight to ([a-zA-Z]{1,}) on ([^\"]*)$")
    public void We_want_to(String toPlace, String toFlightDate) {
    	System.out.println("We want to book flight to " + toPlace + " on " + toFlightDate);
    }
    
    @And ("^return flight on ([^\"]*)$")
    public void return_flight(String returnFlightDate) {
    	System.out.println("return flight on :" + returnFlightDate);
    }
    
    @Given ("^I log on to website ([^\"]*)$")
	public void I_log_on(String URL) {                                                              //copied from EbayOnlineShopping
		System.out.println("I log on to website :" + URL);
	}

}
