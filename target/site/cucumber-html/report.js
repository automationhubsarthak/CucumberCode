$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/stepdefinitionpackage/holiday.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to book flight tickets and a hotel",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BookHotelAndFlights"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I live in Delhi",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.I_live(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to go on a holiday",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.I_want(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We are 3 adults",
  "rows": [
    {
      "cells": [
        "adult1",
        "adult2",
        "adult3"
      ]
    },
    {
      "cells": [
        "Sarthak",
        "Mohit",
        "Ramu"
      ]
    },
    {
      "cells": [
        "35",
        "25",
        "26"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.We_are(int,String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to book hotel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BookHotelAndFlights"
    },
    {
      "name": "@BookHotel"
    }
  ]
});
formatter.step({
  "name": "We want to book from 10th Feb 2020 to 20th Feb 2020",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.We_want(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to Travel Website",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.I_go(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to book both hotel in budget of 10000 INR per head",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.I_should(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to exercise Cancel option",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.I_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not be asked for advance more than 5000 INR per head in case I want to book in advance",
  "keyword": "But "
});
formatter.match({
  "location": "StepDefinition.I_should_not(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "I want to book flight",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We want to book flight to \u003cDestination\u003e on \u003cToFlightDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "return flight on \u003cFromFlightDate\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Destination",
        "FromFlightDate",
        "ToFlightDate"
      ]
    },
    {
      "cells": [
        "Malaysia",
        "20th Feb 2020",
        "9th Feb 2020"
      ]
    },
    {
      "cells": [
        "Penang",
        "10th Mar 2020",
        "1st Mar 2020"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I live in Delhi",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.I_live(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to go on a holiday",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.I_want(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We are 3 adults",
  "rows": [
    {
      "cells": [
        "adult1",
        "adult2",
        "adult3"
      ]
    },
    {
      "cells": [
        "Sarthak",
        "Mohit",
        "Ramu"
      ]
    },
    {
      "cells": [
        "35",
        "25",
        "26"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.We_are(int,String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to book flight",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BookHotelAndFlights"
    },
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We want to book flight to Malaysia on 9th Feb 2020",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.We_want_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "return flight on 20th Feb 2020",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.return_flight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I live in Delhi",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.I_live(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I want to go on a holiday",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.I_want(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We are 3 adults",
  "rows": [
    {
      "cells": [
        "adult1",
        "adult2",
        "adult3"
      ]
    },
    {
      "cells": [
        "Sarthak",
        "Mohit",
        "Ramu"
      ]
    },
    {
      "cells": [
        "35",
        "25",
        "26"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.We_are(int,String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to book flight",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BookHotelAndFlights"
    },
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We want to book flight to Penang on 1st Mar 2020",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.We_want_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "return flight on 10th Mar 2020",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.return_flight(String)"
});
formatter.result({
  "status": "passed"
});
});