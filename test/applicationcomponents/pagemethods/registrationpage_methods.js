import * as registrationpage_locators from '../pageobjects/registrationpage_locators'
import * as uifactory from '../../utilities/uidriverimplemantation'

export async function launchRegistration(testParameter) {
    let url = process.env.url;
    await uifactory.launchUrl(testParameter, url+registrationpage_locators.url);
 }
export async function entertxt_firstname(value, testParameter) {
    let object = registrationpage_locators.elements.txt_firstname;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_lastname(value, testParameter) {
    let object = registrationpage_locators.elements.txt_lastname;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_email(value, testParameter) {
    let object = registrationpage_locators.elements.txt_email;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_password(value, testParameter) {
    let object = registrationpage_locators.elements.txt_password;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_confirmpassword(value, testParameter) {
    let object = registrationpage_locators.elements.txt_confirmpassword;
    await uifactory.enterText(object, value, testParameter);
}
export async function clickbtn_createaccount(testParameter) {
    let object = registrationpage_locators.elements.btn_createaccount;
    await uifactory.click(object, testParameter);
}