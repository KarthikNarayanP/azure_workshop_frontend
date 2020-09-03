import * as productdetailspage_methods from '../../pagemethods/productdetailspage_methods'

export async function selectQTYAndAddToBasket(strQty,testParameter) {
    await productdetailspage_methods.selectlst_product_quantity(strQty,testParameter);
    await productdetailspage_methods.clickbtn_add_tobasket(testParameter);
    await productdetailspage_methods.clickbtn_minicart(testParameter);
}
export async function navigateToMinicart(testParameter) {
    await productdetailspage_methods.clickbtn_minicart(testParameter);
}