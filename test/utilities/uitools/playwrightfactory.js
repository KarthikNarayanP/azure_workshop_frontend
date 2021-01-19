const playwright = require('playwright');
//const { chromium, firefox, webkit } = require('playwright');
import * as reportfactory from '../reportfactory'
//require('jest-extended');

export async function initiatWebDriver(browser) {
  // let browser = await puppeteer.launch({headless: headlessFalg});
    let headlessFalg = true;
   // let executable = process.env.CHROME_PATH;
    //,executablePath: executable
    let browserdriver = await playwright[browser].launch({headless: headlessFalg, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    
    return browserdriver;
}


export async function getPuppeteerObject(locator, testParameter){
    let byLocator; 
    switch(locator[0].type) {
        case "css":
            await testParameter.driver.waitForSelector('css='+locator[0].value, { state: 'attached' });
            byLocator =await testParameter.driver.$('css='+locator[0].value);
          break;
        case "xpath":
            await testParameter.driver.waitForSelector('xpath='+locator[0].value, { state: 'attached' });
            byLocator =await testParameter.driver.$('xpath='+locator[0].value);
          break;
          case "id":
            byLocator = locator[0].value;
          break;
        default:
          // code block
      }
      return byLocator;
}

export async function launchUrl(testParameter, url) {
    await testParameter.driver.goto(url);
    //await testParameter.driver.waitForNavigation({ waitUntil: 'networkidle0' });
}
export async function quitDriver(driver) {
    await driver.close();
}
export async function getDriver(driver) {
    let page = await driver.newPage()
    await page.setDefaultNavigationTimeout(45000);
    return page;
}
export async function click(object, testParameter) {
    try {
        let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
        //await testParameter.driver.waitForLoadState();
       // let opts = { timeout: 45000, waitFor: 'visible'}
       // await testParameter.driver.waitForSelector(locatorPuppeteer, opts);
        await locatorPuppeteer.click();
        await reportfactory.report(`${object.description} should be clicked`, `${object.description} is clicked`, 'actionPass', testParameter);
    } catch (err) {
        await reportfactory.report(`${object.description} should be clicked`, `${object.description} is Not clicked, Error:`+err, 'fail', testParameter);
        throw new Error(`${object.description} is Not clicked, Error:`+err);
    }
}

export async function clickOnlyIfElementExist(object, testParameter) {
    try {
        let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
        await locatorPuppeteer.click();
        await reportfactory.report(`${object.description} should be clicked`, `${object.description} is clicked`, 'actionPass', testParameter);
    } catch (err) {
        
    }
}

export async function pageReload(testParameter) {
    for (let index = 0; index < 5; index++) {
        await testParameter.driver.reload({ waitUntil:'domcontentloaded' });
    }
        
}


export async function reloadClick(object, testParameter) {
    let clickFlag = false;
    for (let index = 0; index < 3; index++) {
        try {
            let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
            await locatorPuppeteer.click();
            clickFlag = true;
        } catch (err) {
            await testParameter.driver.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
            await sleep(3000);
        }
        if(clickFlag){
            break;
        }
    }  
    if(clickFlag){
        await reportfactory.report(`${object.description} should be clicked`, `${object.description} is clicked`, 'actionPass', testParameter);
    }else{
        await reportfactory.report(`${object.description} should be clicked`, `${object.description} is Not clicked, Error: Object Not Loaded even after reload`, 'fail', testParameter);
        throw new Error(`${object.description} is Not clicked, Error: Object Not Loaded even after reload`);
    }
}



export async function enterText(object, value, testParameter) {
    try {
        let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
        await locatorPuppeteer.type(value);
        await reportfactory.report(`${object.description} should be entered with value ${value}`, `${object.description} is entered with value ${value}`, 'actionPass', testParameter);
    } catch (err) {
        await reportfactory.report(`${object.description} should be entered with value ${value}`, `${object.description} is not entered with value ${value} , Error:`+err, 'fail', testParameter);
    }
}
export async function enterTextAndPressEnter(object, value, testParameter) {
    try {
        let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
        await locatorPuppeteer.type(value);
        await locatorPuppeteer.keyboard.press('Enter');
        await reportfactory.report(`${object.description} should be entered with value ${value} and Enter Should be Clicked`, `${object.description} is entered with value ${value} and Enter is Clicked`, 'actionPass', testParameter);
    } catch (err) {
        await reportfactory.report(`${object.description} should be entered with value ${value} and Enter Should be Clicked`, `${object.description} is not entered with value ${value} , Error:`+err, 'fail', testParameter);
    }
}
 

export async function selectDropDown(object, value, testParameter) {
    try {
        let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
        await locatorPuppeteer.selectOption({ label: value });
        await reportfactory.report(`${object.description} should be selected with value ${value}`, `${object.description} is selected with value ${value}`, 'actionPass', testParameter);
    } catch (err) {
        await reportfactory.report(`${object.description} should be selected with value ${value}`, `${object.description} is not selected with value ${value} , Error:`+err, 'fail', testParameter);
    }
}

export async function takeScreenshotOfElement(screenshotPath, testParameter, object) {
    let locatorPuppeteer = await getPuppeteerObject(object.locator);   
    let image = await locatorPuppeteer.screenshot();
    await require('fs').writeFileSync(screenshotPath, image, 'base64', function (err) {
        console.log(err);
    });
}


export async function takeScreenshotFullPage(pagename, testParameter) {
    let pathFP = `${process.env.reportpath}/screenshots/${pagename}_FullPage_Actual.png`;
    await testParameter.driver.screenshot({path: pathFP, fullPage: true}); 
    return pathFP;
}


export async function takeScreenshotOfPage(screenshotpath, testParameter) {
   let image = await testParameter.driver.screenshot();
   require('fs').writeFileSync(screenshotpath, image, 'base64', function (err) {
    console.log(err);
    });
}


export async function isElementPresent(object, testParameter) {
    try {
        let locatorPuppeteer = await getPuppeteerObject(object.locator, testParameter);
        if(await locatorPuppeteer !== null){
            return true;
        }else{
            return false;
        }
    } catch (err) {
        return false;
    }
}

export async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 1000);
    });
}