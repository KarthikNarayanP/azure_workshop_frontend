const page = {
    elements: {
        btn_proceedtocheckout: {locator: [{type:"xpath",value:'//*[contains(text(),"Proceed to checkout")]'}],description: "Proceed to checkout",actions: ["CLICK"], createmethod:true, alwaysAvailable:true}
    },
    screenvalidation:{
        pageName:"basketsummary",
        fullpage:true,
        fullpage_Update_snaphot:false,
        update_snaphot:false,
        blocks:[
            
        ]
    },
    url:'http://localhost:3000/cts-shop/products/iphone',
};

module.exports = page;
