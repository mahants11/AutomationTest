package com.BulletProofAutomation.pageObject;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class FullCastPage extends AbstractPage {

	//Constructor
	public FullCastPage(WebDriver driver) {
		super(driver);
	}
	
	/**
	 * @Description:This method validate message for a actor
	 */
	public FullCastPage validateMessage(String message, String actor)
	{
		String compare=actor+' '+'.'+'.'+'.'+' '+ message;
		Assert.assertTrue(driver.findElement(By.xpath
				(".//*[@id='fullcredits_content']/table[29]")).getText().equalsIgnoreCase(compare));
		return new FullCastPage(driver);
	}
}
