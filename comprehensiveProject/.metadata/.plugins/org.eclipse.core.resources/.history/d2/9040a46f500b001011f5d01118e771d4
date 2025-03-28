package com.comprehensive.com.assignment;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;

public class Program3TestGoogleSearch extends Program3And4BaseTest {

    @Test
    public void searchInGoogle() {
        driver.get("https://www.google.com");

        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("TestNG Selenium");
        searchBox.sendKeys(Keys.RETURN);

        Assert.assertTrue(driver.getTitle().contains("TestNG Selenium"), "Search results page title does not contain expected text.");
    }
}
