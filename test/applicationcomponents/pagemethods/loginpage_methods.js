import * as loginpage_locators from '../pageobjects/loginpage_locators'
import * as uifactory from '../../utilities/uidriverimplemantation'

export async function launchLogin(testParameter) {
    let url = process.env.url;
    await uifactory.launchUrl(testParameter, url+loginpage_locators.url);
 }

 export async function entertxt_email(value, testParameter) {
    let object = loginpage_locators.elements.txt_email;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_password(value, testParameter) {
    let object = loginpage_locators.elements.txt_password;
    await uifactory.enterText(object, value, testParameter);
}
export async function clickbtn_registeraccount(testParameter) {
    let object = loginpage_locators.elements.btn_registeraccount;
    await uifactory.click(object, testParameter);
}
export async function clickbtn_login(testParameter) {
    let object = loginpage_locators.elements.btn_login;
    await uifactory.click(object, testParameter);
}