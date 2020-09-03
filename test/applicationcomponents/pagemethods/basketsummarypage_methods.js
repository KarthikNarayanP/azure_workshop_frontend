import * as basketsummarypage_locators from '../pageobjects/basketsummarypage_locators'
import * as uifactory from '../../utilities/uidriverimplemantation'

export async function clickbtn_proceedtocheckout(testParameter) {
    let object = basketsummarypage_locators.elements.btn_proceedtocheckout;
    await uifactory.click(object, testParameter);
}