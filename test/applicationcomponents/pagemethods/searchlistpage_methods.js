import * as searchlistpage_locators from '../pageobjects/searchlistpage_locators'
import * as uifactory from '../../utilities/uidriverimplemantation'

export async function entertxt_search(value, testParameter) {
    let object = searchpage_locators.elements.txt_search;
    await uifactory.enterText(object, value, testParameter);
}
export async function clickbtn_link_dynamic_productby_text(value, testParameter) {
    let object = searchlistpage_locators.elements.link_dynamic_productby_text;
    object.locator[0].value = object.locator[0].value.replace('${parameter1}',value);
    object.description = value;
    await uifactory.click(object, testParameter);
}
