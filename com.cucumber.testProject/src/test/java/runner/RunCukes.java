package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
        plugin={"pretty","json:target/RunCuke/cucmber_repot.json"
        		,"html:target/RunCuke/cucumber-html-report"},
        features = "src\\test\\resources\\Feature",
        		
        glue="stepDefinition",
       tags={"@Request_Response_Information"}
        )

public class RunCukes extends AbstractTestNGCucumberTests {
	

}
