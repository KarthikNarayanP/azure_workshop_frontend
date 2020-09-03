const page = {
    elements: {
        txt_title: {locator: [{type:"css",value:'#datitle'}],description: "Title",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_firstname: {locator: [{type:"css",value:'#dafirstname'}],description: "FirstName",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_lastname: {locator: [{type:"css",value:'#dalastname'}],description: "Last Name",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_addressine1: {locator: [{type:"css",value:'#daaddressline1'}],description: "Address Line 1",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_addressine2: {locator: [{type:"css",value:'#daaddressline2'}],description: "Address Line 2",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_city: {locator: [{type:"css",value:'#dacity'}],description: "City",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_state: {locator: [{type:"css",value:'#dastateprovinceregion'}],description: "State/Province/Region",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_zipcode: {locator: [{type:"css",value:'#dazippostcode'}],description: "Zipcode",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        btn_next: {locator: [{type:"xpath",value:'//*[text()="Next"]'}],description: "Next",actions: ["CLICK"], createmethod:true, alwaysAvailable:true},
        txt_cardnumber: {locator: [{type:"css",value:'#cardnumber'}],description: "Card Number",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_nameoncard: {locator: [{type:"css",value:'#nameoncard'}],description: "Name On Card",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_expirymonth: {locator: [{type:"css",value:'#expirymonth'}],description: "Expiry Month",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_expiryyear: {locator: [{type:"css",value:'#expiryyear'}],description: "Expiry Year",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_cvv: {locator: [{type:"css",value:'#securitycode'}],description: "Security Code",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        btn_confirm: {locator: [{type:"css",value:'#buttonconfirm'}],description: "Confirm",actions: ["CLICK"], createmethod:true, alwaysAvailable:true},
        ele_confirmation: {locator: [{type:"xpath",value:'//*[text()="Thanks for your order!"]'}],description: "Thanks for your order!",actions: ["CLICK"], createmethod:true, alwaysAvailable:true}
    
    },
    screenvalidation:{
        pageName:"checkout",
        fullpage:true,
        fullpage_Update_snaphot:false,
        update_snaphot:false,
        blocks:[
            
        ]
    },
    url:'/checkout',
};

module.exports = page;
