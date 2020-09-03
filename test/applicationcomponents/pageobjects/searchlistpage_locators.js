const page = {
    elements: {
        link_dynamic_productby_text: {locator: [{type:"xpath",value:'//a[contains(text(),"${parameter1}")]'}],description: "Search",actions: ["CLICK"], createmethod:true, alwaysAvailable:true}
    },
    screenvalidation:{
        pageName:"searchpage",
        fullpage:true,
        fullpage_Update_snaphot:false,
        update_snaphot:false,
        blocks:[
            
        ]
    },
    url:'http://localhost:3000/cts-shop/products/iphone',
};

module.exports = page;
