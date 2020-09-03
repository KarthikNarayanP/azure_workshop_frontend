import * as reportfactory from '../../../../utilities/reportfactory'
import * as uifactory from '../../../../utilities/uidriverimplemantation'
import * as registrationpage_steps from '../../../stepdefinitions/ui-definitions/registrationpage_steps'
import * as generalutility from '../../../../utilities/generalutilityfactory'

describe('Feature To Validate Registration Functionality', () => {
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
  
  let testcaseName = "Registration Validation"
  let testdescription = "To Validate if user is able to register an account";
    test(testcaseName, async () => {
      let testParameter = await reportfactory.createTestReport(testcaseName, page, testdescription);
      try {
        await registrationpage_steps.launchRegistration(testParameter);
        let fakedData = await generalutility.getFakedtData('US');
        await registrationpage_steps.registerAccount(fakedData,testParameter);
       
      }
      finally {
        await reportfactory.endTestReport(testParameter);
      }
    });



    
  });