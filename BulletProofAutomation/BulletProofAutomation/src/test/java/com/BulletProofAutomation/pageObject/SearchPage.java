package com.BulletProofAutomation.pageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class SearchPage extends AbstractPage {

	//Constructor
	public SearchPage(WebDriver driver) {
		super(driver);
		}
	
	/**
	 * @Description:This method click on link.
	 */
	public SearchPage clickOnLink(String link)
	{
		driver.findElement(By.linkText(link)).click();
		return new SearchPage(driver);	
	}
	
	/**
	 * @Description:This method is click on full cast link
	 */
		public FullCastPage clickOnCastLink(String link)
	{
		driver.findElement(By.linkText(link)).click();
		return new FullCastPage(driver);	
	}
}
