package com.BulletProofAutomation.BulletProofAutomation;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(
		features={"src/test/resource"},
		format ={"pretty","html:target/CucumberHTMLReport"}
		)
public class RunnerTest {

}
