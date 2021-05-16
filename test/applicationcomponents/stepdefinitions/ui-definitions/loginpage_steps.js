import * as loginpage_methods from '../../pagemethods/loginpage_methods'

export async function launchLogin(testParameter) {
    await loginpage_methods.launchLogin(testParameter);
 }
export async function clickRegisterAccount(testParameter) {
    await loginpage_methods.clickbtn_registeraccount(testParameter);
}
export async function loginApplication(jsondata, testParameter) {
    await loginpage_methods.launchLogin(testParameter);
    await loginpage_methods.entertxt_email(jsondata.email,testParameter);
    await loginpage_methods.entertxt_password(jsondata.password,testParameter);
    await loginpage_methods.clickbtn_login(testParameter);
 }
