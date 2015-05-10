package com.BulletProofAutomation.pageObject;
import org.openqa.selenium.WebDriver;

/**
 * @Description:Abstract class for the driver object. this class is extended by all classes which requires driver object
 */
public class AbstractPage {
	protected WebDriver driver;

	//Constructor
	public AbstractPage (WebDriver driver)
	{
		this.driver= driver;
	}

	/**
	 * @Description:This method navigate to IMDB site and maximize to window
	 */
	public LandingPage navigateToWebApp()
	{
		driver.navigate().to("http://www.imdb.com");
		//Thread.sleep(5000);
		driver.manage().window().maximize();
		return new LandingPage(driver);
	}

	/**
	 * @Description:This method to close the driver.
	 */
	public void closeDriver()
	{
		driver.close();
	}
}
