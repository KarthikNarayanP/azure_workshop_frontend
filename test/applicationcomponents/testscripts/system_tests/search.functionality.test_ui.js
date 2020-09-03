import * as reportfactory from '../../../utilities/reportfactory'
import * as uifactory from '../../../utilities/uidriverimplemantation'
import * as searchpage_steps from '../../stepdefinitions/ui-definitions/searchpage_steps'
import * as searchpage_locators from '../../pageobjects/searchpage_locators'

describe('Feature To Validate Seach Functionality', () => {
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


  const testCases = require('../../testdata/testcasedata/Search Functionality Validation.json');
  testCases.forEach(async (testData)   => {
  let testcaseName = "Search Functionality Validation "+testData.product
  let testdescription = "To Validate if we are able to search with Key Word";
    test(testcaseName, async () => {
      let testParameter = await reportfactory.createTestReport(testcaseName, page, testdescription);
      try {
        await searchpage_steps.launchAPP(testParameter);
        await searchpage_steps.searchProduct(testData.product,testParameter);   
      }
      finally {
        await reportfactory.endTestReport(testParameter);
      }
    });
  });


    
  });