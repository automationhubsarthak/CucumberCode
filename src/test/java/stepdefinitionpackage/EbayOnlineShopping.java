package stepdefinitionpackage;

import static org.assertj.core.api.Assertions.*;

import org.assertj.core.api.SoftAssertions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EbayOnlineShopping {
	
	SoftAssertions softassert = new SoftAssertions();
	
	@Before("@ShopOnEbay")
	public void beforeScenario() {
		System.out.println("--------------------Before Executing------------------");
		softassert.assertAll();
	}
	
	@After("@ShopOnEbay")
	public void afterScenario() {
		System.out.println("-----------------After Executing-------------------");
		softassert.assertAll();
	}
	
	/*@Given ("^I log on to website ([^\"]*)$")
	public void I_log(String URL) {                                                              //copying this and pasting it in StepDefinition.java
		System.out.println("I log on to website :" + URL);
	} */
    
	@And("^I search for ([a-zA-Z]{1,})$")
	public void I_search(String cloth) {
		System.out.println("I search for :" + cloth);
	}
    
	@When("^I add a shirt in ([^\"]*)$")
	public void I_add(String bucket) {
		System.out.println("I add a shirt in :" + bucket);
	}
    
	@Then("^The cart item count should ([a-zA-Z]{1,})$")
	public void The_cart(String value) {
		System.out.println("The cart item count should :" + value);
		//assertThat("A").isEqualTo("B");
		//assertThat("A".equals("B"));
		//fail("Reason of failure");
		
		softassert.assertThat(false).isEqualTo(false);
		softassert.assertAll();
		
		
	}
	
	

}
