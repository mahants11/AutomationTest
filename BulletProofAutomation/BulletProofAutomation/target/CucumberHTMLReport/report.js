$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BulletProof.feature");
formatter.feature({
  "id": "launch-imdb-site,search-for-star-wars:-episode-i-and-validate-jim-morris-has-special-thanks.",
  "description": "",
  "name": "Launch IMDB site,search for Star Wars: Episode I and validate Jim Morris has special thanks.",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 3,
  "type": "background"
});
formatter.step({
  "name": "I am on the IMDB site",
  "keyword": "Given ",
  "line": 4
});
formatter.match({
  "location": "Steps.I_am_on_the_IMDB_site()"
});
formatter.result({
  "duration": 30947286050,
  "status": "passed"
});
formatter.scenario({
  "id": "launch-imdb-site,search-for-star-wars:-episode-i-and-validate-jim-morris-has-special-thanks.;to-verify-jim-morris-has-special-thanks-mentioned-for-star-wars:-episode-i",
  "description": "",
  "name": "To Verify Jim Morris has special thanks mentioned for Star Wars: Episode I",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I Enter \"Star Wars: Episode I\" in search field",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "I click on  Button",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "I click on \"Star Wars: Episode I - The Phantom Menace\" link",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "I navigate to \"See full cast and crew\" cast full link",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "I check \"special thanks\" message for \"Jim Morris\"",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "I close browser",
  "keyword": "And ",
  "line": 13
});
formatter.match({
  "arguments": [
    {
      "val": "Star Wars: Episode I",
      "offset": 9
    }
  ],
  "location": "Steps.I_Enter_in_search_field(String)"
});
formatter.result({
  "duration": 1625480031,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_click_on_Button()"
});
formatter.result({
  "duration": 13842948325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Star Wars: Episode I - The Phantom Menace",
      "offset": 12
    }
  ],
  "location": "Steps.I_click_on_link(String)"
});
formatter.result({
  "duration": 1354627669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "See full cast and crew",
      "offset": 15
    }
  ],
  "location": "Steps.I_navigate_to_cast_full_link(String)"
});
formatter.result({
  "duration": 16315053711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "special thanks",
      "offset": 9
    },
    {
      "val": "Jim Morris",
      "offset": 38
    }
  ],
  "location": "Steps.I_check_message_for(String,String)"
});
formatter.result({
  "duration": 8884963165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.I_close_browser()"
});
formatter.result({
  "duration": 172850586,
  "status": "passed"
});
});