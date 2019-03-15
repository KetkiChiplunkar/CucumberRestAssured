package stepDefinition;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class twitter {
	
	private static String consumerKey = "S3QC59jafODn1MWOchGSXPOB5";
	private static String consumerSecret = "AHb9VxYmecSMmdlXu0U0VPiq7QXTBXzivsyZQKnOVTp8oiL9gQ";
	private static String secretToken = "1084740103849750529-xVOV58Q3nQlsx4vvhnnyKcXrVkyxQ9";
	private static String accessTokenSecret = "v0D243HxADgtKEvRzrcNN8VhXBRZjdsDVYVLL4OvHALB4";
	
	
	@BeforeClass
	public static void init(){
		RestAssured.baseURI="https://api.twitter.com";
		RestAssured.basePath="/1.1/statuses";
	}
	
	
	@Test
	public void createTweet(){
		given()
		.auth()
		.oauth(consumerKey, consumerSecret, accessTokenSecret, secretToken)
		.queryParam("status","This is my first tweet from Rest Assured")
		.log()
		.all()
		.when()
		.post("/update.json")
		.then()
		.log()
		.all();
	}
	



}
