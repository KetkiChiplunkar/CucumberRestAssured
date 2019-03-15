$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateOrderV2.feature");
formatter.feature({
  "line": 2,
  "name": "Test the paypal Create Order Rest Services",
  "description": "",
  "id": "test-the-paypal-create-order-rest-services",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Paypal_CreateOrder"
    }
  ]
});
formatter.before({
  "duration": 4233550090,
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
  "name": "User gets the acess token",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user gives the URI and enters the access token",
  "keyword": "And "
});
formatter.match({
  "location": "CreateOrderV2.getUserToken()"
});
formatter.result({
  "duration": 3956069512,
  "status": "passed"
});
formatter.match({
  "location": "CreateOrderV2.user_gives_the_URI_and_enters_the_access_token()"
});
formatter.result({
  "duration": 27981441,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Order Using Paypal Rest Service",
  "description": "",
  "id": "test-the-paypal-create-order-rest-services;create-order-using-paypal-rest-service",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@CreateOrder"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user triggers the Post request to create order",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user is successfully able to create order",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateOrderV2.user_triggers_the_post_reques_to_create_order()"
});
formatter.result({
  "duration": 2111770578,
  "status": "passed"
});
formatter.match({
  "location": "CreateOrderV2.user_is_successfully_able_to_create_order()"
});
formatter.result({
  "duration": 104134368,
  "status": "passed"
});
formatter.before({
  "duration": 740815,
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
  "name": "User gets the acess token",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user gives the URI and enters the access token",
  "keyword": "And "
});
formatter.match({
  "location": "CreateOrderV2.getUserToken()"
});
formatter.result({
  "duration": 1880936810,
  "status": "passed"
});
formatter.match({
  "location": "CreateOrderV2.user_gives_the_URI_and_enters_the_access_token()"
});
formatter.result({
  "duration": 954149,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get the Order created from Paypal",
  "description": "",
  "id": "test-the-paypal-create-order-rest-services;get-the-order-created-from-paypal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@GetOrder"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user triggers the Get requests to get order",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user is successfully get the order details",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateOrderV2.user_triggers_the_Get_requests_to_get_order()"
});
formatter.result({
  "duration": 1945267656,
  "status": "passed"
});
formatter.match({
  "location": "CreateOrderV2.user_is_successfully_get_the_order_details()"
});
formatter.result({
  "duration": 6196114,
  "status": "passed"
});
formatter.before({
  "duration": 579965,
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
  "name": "User gets the acess token",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user gives the URI and enters the access token",
  "keyword": "And "
});
formatter.match({
  "location": "CreateOrderV2.getUserToken()"
});
formatter.result({
  "duration": 1397855487,
  "status": "passed"
});
formatter.match({
  "location": "CreateOrderV2.user_gives_the_URI_and_enters_the_access_token()"
});
formatter.result({
  "duration": 708343,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Update the existing order using Patch resource",
  "description": "",
  "id": "test-the-paypal-create-order-rest-services;update-the-existing-order-using-patch-resource",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@UpdateOrder"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user triggers the Patch request to update the order",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user is successfully able to patch order",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateOrderV2.user_triggers_the_Patch_request_to_update_the_order()"
});
formatter.result({
  "duration": 1641977108,
  "status": "passed"
});
formatter.match({
  "location": "CreateOrderV2.user_is_successfully_able_to_patch_order()"
});
formatter.result({
  "duration": 294514,
  "status": "passed"
});
formatter.uri("PaypalRest.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Paypal using rest assured credentials",
  "description": "I want to login to Paypal using rest assured",
  "id": "login-to-paypal-using-rest-assured-credentials",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Paypal_RestAssured"
    }
  ]
});
formatter.before({
  "duration": 1020225,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Get the access token from paypal",
  "description": "",
  "id": "login-to-paypal-using-rest-assured-credentials;get-the-access-token-from-paypal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@ExtractAccessToken"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user provide rest uri",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user enter key as \"grant_type\" and value as \"client_credentials\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user sends the Post request",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the user gets the access token in the response",
  "keyword": "Then "
});
formatter.match({
  "location": "PaypalRestSteps.user_provide_rest_uri()"
});
formatter.result({
  "duration": 290360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "grant_type",
      "offset": 23
    },
    {
      "val": "client_credentials",
      "offset": 49
    }
  ],
  "location": "PaypalRestSteps.the_user_enter_key_as_and_value_as(String,String)"
});
formatter.result({
  "duration": 61748943,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.user_sends_the_Post_request()"
});
formatter.result({
  "duration": 1885237843,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_gets_the_access_token_in_the_response()"
});
formatter.result({
  "duration": 8594135,
  "status": "passed"
});
formatter.before({
  "duration": 487080,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Payment using paypal api",
  "description": "",
  "id": "login-to-paypal-using-rest-assured-credentials;create-payment-using-paypal-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@CreatePayment"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user provides rest uri for create payment",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user provides the \"Content-Type\" as \"application/json\" and its \"Authorization\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user provides the message body for create payment",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the user is successfully able to create payment",
  "keyword": "Then "
});
formatter.match({
  "location": "PaypalRestSteps.user_provides_rest_uri_for_create_payment()"
});
formatter.result({
  "duration": 69852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 19
    },
    {
      "val": "application/json",
      "offset": 37
    },
    {
      "val": "Authorization",
      "offset": 64
    }
  ],
  "location": "PaypalRestSteps.user_provides_the_as_and_its(String,String,String)"
});
formatter.result({
  "duration": 1801820,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_provides_the_message_body_for_create_payment()"
});
formatter.result({
  "duration": 2461821590,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_is_successfully_able_to_create_payment()"
});
formatter.result({
  "duration": 14835181,
  "status": "passed"
});
formatter.before({
  "duration": 872591,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create Payment using paypal api",
  "description": "",
  "id": "login-to-paypal-using-rest-assured-credentials;create-payment-using-paypal-api",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@CreatePayment_usingPojo"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user provides rest uri for create payment",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user provides the \"Content-Type\" as \"application/json\" and its \"Authorization\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user provides the intent as \"sale\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the user provides payer information",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the user provides transactions information",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user provides note to payer as \"Contact us for any questions on your order.\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the user provides redirect urls as \"https://example.com/return\" and \"https://example.com/cancel\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user provides the request to create payment",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user is successfully able to create payment",
  "keyword": "Then "
});
formatter.match({
  "location": "PaypalRestSteps.user_provides_rest_uri_for_create_payment()"
});
formatter.result({
  "duration": 87222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 19
    },
    {
      "val": "application/json",
      "offset": 37
    },
    {
      "val": "Authorization",
      "offset": 64
    }
  ],
  "location": "PaypalRestSteps.user_provides_the_as_and_its(String,String,String)"
});
formatter.result({
  "duration": 829547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sale",
      "offset": 33
    }
  ],
  "location": "PaypalRestSteps.the_user_provides_the_intent_as(String)"
});
formatter.result({
  "duration": 102324,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_provides_payer_information()"
});
formatter.result({
  "duration": 682290,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_provides_transactions_information()"
});
formatter.result({
  "duration": 4181716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact us for any questions on your order.",
      "offset": 36
    }
  ],
  "location": "PaypalRestSteps.the_user_provides_note_to_payer_as(String)"
});
formatter.result({
  "duration": 94018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://example.com/return",
      "offset": 36
    },
    {
      "val": "https://example.com/cancel",
      "offset": 69
    }
  ],
  "location": "PaypalRestSteps.the_user_provides_redirect_urls_as_and(String,String)"
});
formatter.result({
  "duration": 110631,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.triggerRequest()"
});
formatter.result({
  "duration": 3039073657,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_is_successfully_able_to_create_payment()"
});
formatter.result({
  "duration": 11233054,
  "status": "passed"
});
formatter.before({
  "duration": 471222,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Get the Payment details",
  "description": "",
  "id": "login-to-paypal-using-rest-assured-credentials;get-the-payment-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@GetPaymentDetails"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user provides rest uri for create payment",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user provides the \"Content-Type\" as \"application/json\" and its \"Authorization\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user provides Payment id",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the user gets the Payment information",
  "keyword": "Then "
});
formatter.match({
  "location": "PaypalRestSteps.user_provides_rest_uri_for_create_payment()"
});
formatter.result({
  "duration": 62679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Content-Type",
      "offset": 19
    },
    {
      "val": "application/json",
      "offset": 37
    },
    {
      "val": "Authorization",
      "offset": 64
    }
  ],
  "location": "PaypalRestSteps.user_provides_the_as_and_its(String,String,String)"
});
formatter.result({
  "duration": 1027023,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_provides_Payment_id()"
});
formatter.result({
  "duration": 1453337331,
  "status": "passed"
});
formatter.match({
  "location": "PaypalRestSteps.the_user_gets_the_Payment_information()"
});
formatter.result({
  "duration": 4620466,
  "status": "passed"
});
});