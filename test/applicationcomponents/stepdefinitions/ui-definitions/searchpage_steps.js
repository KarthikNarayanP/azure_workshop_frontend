import * as searchpage_methods from '../../pagemethods/searchpage_methods'
import * as searchlistpage_methods from '../../pagemethods/searchlistpage_methods'

export async function launchAPP(testParameter) {
    await searchpage_methods.launchAPP(testParameter);
}

export async function searchProduct(searchKey, testParameter) {
    await searchpage_methods.entertxt_search(searchKey,testParameter);
    await searchpage_methods.clickbtn_searchIcon(testParameter);
}

export async function searchAndSelectProduct(searchKey, testParameter) {
    await searchProduct(searchKey, testParameter) 
    await searchlistpage_methods.clickbtn_link_dynamic_productby_text(searchKey, testParameter);
}
export async function switchToWindow(window, testParameter) {
    await searchlistpage_methods.switchToWindow(window, testParameter);
}
