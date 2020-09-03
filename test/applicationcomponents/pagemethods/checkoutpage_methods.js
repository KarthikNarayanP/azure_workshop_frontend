import * as checkoutpage_locators from '../pageobjects/checkoutpage_locators'
import * as uifactory from '../../utilities/uidriverimplemantation'
import * as reportfactory from '../../utilities/reportfactory'

export async function entertxt_title(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_title;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_firstname(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_firstname;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_lastname(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_lastname;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_addressine1(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_addressine1;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_addressine2(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_addressine2;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_city(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_city;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_state(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_state;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_zipcode(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_zipcode;
    await uifactory.enterText(object, value, testParameter);
}
export async function clickbtn_next(testParameter) {
    let object = checkoutpage_locators.elements.btn_next;
    await uifactory.click(object, testParameter);
}
export async function entertxt_cardnumber(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_cardnumber;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_nameoncard(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_nameoncard;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_expirymonth(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_expirymonth;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_expiryyear(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_expiryyear;
    await uifactory.enterText(object, value, testParameter);
}
export async function entertxt_cvv(value, testParameter) {
    let object = checkoutpage_locators.elements.txt_cvv;
    await uifactory.enterText(object, value, testParameter);
}
export async function clickbtn_confirm(testParameter) {
    let object = checkoutpage_locators.elements.btn_confirm;
    await uifactory.click(object, testParameter);
}
export async function ispresentele_confirmation(testParameter) {
    let object = checkoutpage_locators.elements.ele_confirmation;
    let confirmation = await uifactory.isElementPresent(object, testParameter);
    if(confirmation){
        await reportfactory.report(`${object.description} should be displayed`, `${object.description} is displayed`, 'pass', testParameter);
    }else{
        await reportfactory.report(`${object.description} should be displayed`, `${object.description} is NOT displayed`, 'fail', testParameter);
    }
}