import * as basketsummarypage_methods from '../../pagemethods/basketsummarypage_methods'

export async function proceedsToCheckout(testParameter) {
    await basketsummarypage_methods.clickbtn_proceedtocheckout(testParameter);
}
