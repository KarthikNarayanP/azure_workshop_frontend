import * as reportfactory from '../../../../utilities/reportfactory'
import * as uifactory from '../../../../utilities/uidriverimplemantation'
import * as registrationpage_steps from '../../../stepdefinitions/ui-definitions/registrationpage_steps'
import * as loginpage_steps from '../../../stepdefinitions/ui-definitions/loginpage_steps'
import * as searchpage_steps from '../../../stepdefinitions/ui-definitions/searchpage_steps'
import * as productdetailspage_steps from '../../../stepdefinitions/ui-definitions/productdetailspage_steps'
import * as basketsummaypage_steps from '../../../stepdefinitions/ui-definitions/basketsummaypage_steps'
import * as generalutility from '../../../../utilities/generalutilityfactory'
import * as checkoutpage_steps from '../../../stepdefinitions/ui-definitions/checkoutpage_steps'

describe('Feature To Validate Order Placement Functionality', () => {
  let driver;
  let page;
  beforeEach(async () => {
    jest.resetModules() // this is important - it clears the cache
    jest.setTimeout(1000000);
    driver = await uifactory.initiatBrowserDriver();
    page = await uifactory.getDriver(driver);
  });

  afterEach(async () => {
    await uifactory.quitDriver(driver) ;
  });
  
  let testcaseName = "Checkout - Order Placement Validation"
  let testdescription = "To Validate if user is able to place an order";
    test(testcaseName, async () => {
      let testParameter = await reportfactory.createTestReport(testcaseName, page, testdescription);
      try {
        await searchpage_steps.launchAPP(testParameter);
        await searchpage_steps.searchAndSelectProduct('Apple iPhone XR',testParameter);
        //testParameter.driver = await driver.contexts()[0].pages()[1];
        await productdetailspage_steps.selectQTYAndAddToBasket('5',testParameter);
        await basketsummaypage_steps.proceedsToCheckout(testParameter);
        let fakedData = await generalutility.getFakedtData('US');
        await loginpage_steps.clickRegisterAccount(testParameter);
        await registrationpage_steps.registerAccount(fakedData,testParameter);
        await productdetailspage_steps.navigateToMinicart(testParameter);
        await basketsummaypage_steps.proceedsToCheckout(testParameter);
        await checkoutpage_steps.checkoutAndPay(fakedData, testParameter);
       }
      finally {
        await reportfactory.endTestReport(testParameter);
      }
    });



    
  });