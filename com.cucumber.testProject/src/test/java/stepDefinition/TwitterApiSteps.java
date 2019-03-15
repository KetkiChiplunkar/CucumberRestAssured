package stepDefinition;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static io.restassured.RestAssured.given;

public class TwitterApiSteps {

	Response response;
	RequestSpecification request;
	private static String consumerKey = "S3QC59jafODn1MWOchGSXPOB5";
	private static String consumerSecret = "AHb9VxYmecSMmdlXu0U0VPiq7QXTBXzivsyZQKnOVTp8oiL9gQ";
	private static String secretToken = "1084740103849750529-xVOV58Q3nQlsx4vvhnnyKcXrVkyxQ9";
	private static String accessTokenSecret = "v0D243HxADgtKEvRzrcNN8VhXBRZjdsDVYVLL4OvHALB4";

	@Given("^user provide base URI and authorization information$")
	public void user_provide_base_URI_and_authorization_information()
			throws Throwable {
		// RestAssured.baseURI = "https://api.twitter.com/1.1/statuses/";

		RestAssured.baseURI = "https://api.twitter.com";
		RestAssured.basePath = "/1.1/statuses";
		

	}

	@When("^the user triggers the get request for view the tweets$")
	public void the_user_triggers_the_get_request_for_view_the_twits()
			throws Throwable {
		given().auth()
		.oauth(consumerKey, consumerSecret, accessTokenSecret,
				secretToken)
		.queryParam("status", "This is a new tweet").when().get("/home_timeline.json");

	}

	@Then("^the user is able to see the response with latest tweets$")
	public void the_user_is_able_to_see_the_response_with_latest_twits()
			throws Throwable {
		response.then().log().all();
	}

	@When("^the user post its tweets$")
	public void the_user_post_its_tweets() throws Throwable {
		
		given().auth()
		.oauth(consumerKey, consumerSecret, accessTokenSecret,
				secretToken)
		.queryParam("status", "This is a new tweet").when().post("/update.json");
		//response = request.when().post("/update.json");
	}

	@Then("^the tweets is successfully added to the user wall$")
	public void the_tweets_is_successfully_added_to_the_user_wall()
			throws Throwable {
		response.then().log().all();
	}

}
