package stepdefinitionpackage;


import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        features = "src/test/resources/",
        glue = {"stepdefinitionpackage"},
        tags = {"@BookHotelAndFlights, @ShoppingInEbay"},
        plugin = {
              
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        })
        

public class MyTestNGRunner  extends AbstractTestNGCucumberTests{

}
