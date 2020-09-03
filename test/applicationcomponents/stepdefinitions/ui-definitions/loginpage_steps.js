import * as loginpage_methods from '../../pagemethods/loginpage_methods'

export async function launchLogin(testParameter) {
    await loginpage_methods.launchLogin(testParameter);
 }
export async function clickRegisterAccount(testParameter) {
    await loginpage_methods.clickbtn_registeraccount(testParameter);
}
