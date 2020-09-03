import * as registrationpage_methods from '../../pagemethods/registrationpage_methods'

export async function launchRegistration(testParameter) {
    await registrationpage_methods.launchRegistration(testParameter);
 }
export async function registerAccount(jsonData, testParameter) {
    await registrationpage_methods.entertxt_firstname(jsonData.firstName,testParameter);
    await registrationpage_methods.entertxt_lastname(jsonData.lastName,testParameter);
    await registrationpage_methods.entertxt_email(jsonData.email,testParameter);
    await registrationpage_methods.entertxt_password(jsonData.password,testParameter);
    await registrationpage_methods.entertxt_confirmpassword(jsonData.password,testParameter);
    await registrationpage_methods.clickbtn_createaccount(testParameter);
}
