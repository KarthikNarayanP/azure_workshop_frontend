import * as productdetailspage_locators from '../pageobjects/productdetailspage_locators '
import * as uifactory from '../../utilities/uidriverimplemantation'

export async function clickbtn_add_tobasket(testParameter) {
    let object = productdetailspage_locators .elements.btn_add_tobasket;
    await uifactory.click(object, testParameter);
}
export async function selectlst_product_quantity(value, testParameter) {
    let object = productdetailspage_locators .elements.lst_product_quantity;
    await uifactory.selectDropDown(object, value, testParameter);
}
export async function clickbtn_minicart(testParameter) {
    let object = productdetailspage_locators .elements.btn_minicart;
    await uifactory.click(object, testParameter);
}