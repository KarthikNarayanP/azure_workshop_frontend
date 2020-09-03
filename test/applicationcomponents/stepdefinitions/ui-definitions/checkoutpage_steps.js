import * as checkoutpage_methods from '../../pagemethods/checkoutpage_methods'

export async function checkoutAndPay(jsonData, testParameter) {
    await checkoutpage_methods.entertxt_title(jsonData.title,testParameter);
    await checkoutpage_methods.entertxt_firstname(jsonData.firstName,testParameter);
    await checkoutpage_methods.entertxt_lastname(jsonData.lastName,testParameter);
    await checkoutpage_methods.entertxt_addressine1(jsonData.countryData[0].shippingAddress.address1,testParameter);
    await checkoutpage_methods.entertxt_addressine2(jsonData.countryData[0].shippingAddress.address2,testParameter);
    await checkoutpage_methods.entertxt_city(jsonData.countryData[0].shippingAddress.town_city,testParameter);
    await checkoutpage_methods.entertxt_state(jsonData.countryData[0].shippingAddress.state_province,testParameter);
    await checkoutpage_methods.entertxt_zipcode(jsonData.countryData[0].shippingAddress.postcode,testParameter);
    await checkoutpage_methods.clickbtn_next(testParameter);
    await checkoutpage_methods.entertxt_cardnumber(jsonData.countryData[0].payment.cardNumber,testParameter);
    await checkoutpage_methods.entertxt_nameoncard(jsonData.firstName,testParameter);
    await checkoutpage_methods.entertxt_expirymonth(jsonData.countryData[0].payment.expiration_month,testParameter);
    await checkoutpage_methods.entertxt_expiryyear(jsonData.countryData[0].payment.expiration_year,testParameter);
    await checkoutpage_methods.entertxt_cvv(jsonData.countryData[0].payment.cvv,testParameter);
    await checkoutpage_methods.clickbtn_confirm(testParameter);
    await checkoutpage_methods.ispresentele_confirmation(testParameter);
}