const page = {
    elements: {
        btn_add_tobasket: {locator: [{type:"xpath",value:'//*[contains(text(),"Add to your basket")]'}],description: "Add To Basket",actions: ["CLICK"], createmethod:true, alwaysAvailable:true},
        lst_product_quantity: {locator: [{type:"css",value:'#product-quantity'}],description: "Product Quantity",actions: ["SELECT"], createmethod:true, alwaysAvailable:true},
        btn_minicart: {locator: [{type:"css",value:'#basket'}],description: "Basket",actions: ["CLICK"], createmethod:true, alwaysAvailable:true}
     
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
