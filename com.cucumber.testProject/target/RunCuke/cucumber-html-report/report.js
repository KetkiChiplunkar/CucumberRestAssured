$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LogRequestResponseInfo.feature");
formatter.feature({
  "line": 2,
  "name": "Logging Request and Response Information of Rest Service",
  "description": "",
  "id": "logging-request-and-response-information-of-rest-service",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Request_Response_Information"
    }
  ]
});
formatter.before({
  "duration": 4182196896,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "a user provides base URI and resources",
  "keyword": "Given "
});
formatter.match({
  "location": "studentRestServiceSteps.a_user_provides_base_URI_and_resources()"
});
formatter.result({
  "duration": 629367057,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Log the header information of a rest service",
  "description": "",
  "id": "logging-request-and-response-information-of-rest-service;log-the-header-information-of-a-rest-service",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the user wants to get the header information",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user triggers get request to see the student\u0027s information",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the header information is visible for the user",
  "keyword": "Then "
});
formatter.match({
  "location": "LogRequestResponseInfoSteps.headerInfo()"
});
formatter.result({
  "duration": 23157055,
  "status": "passed"
});
formatter.match({
  "location": "LogRequestResponseInfoSteps.the_user_wants_to_see_the_header_information()"
});
formatter.result({
  "duration": 598810544,
  "status": "passed"
});
formatter.match({
  "location": "LogRequestResponseInfoSteps.the_header_information_is_visible_for_the_user()"
});
formatter.result({
  "duration": 42289,
  "status": "passed"
});
});