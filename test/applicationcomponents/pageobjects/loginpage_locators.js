const page = {
    elements: {
        txt_email: {locator: [{type:"css",value:'#email'}],description: "Email",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_password: {locator: [{type:"css",value:'#password'}],description: "Password",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        btn_registeraccount: {locator: [{type:"xpath",value:'//*[text()="Create Your E-Shop Account"]'}],description: "Create Your E-Shop Account",actions: ["CLICK"], createmethod:true, alwaysAvailable:true},
        btn_login: {locator: [{type:"css",value:'#buttonlogin'}],description: "Button Login",actions: ["CLICK"], createmethod:true, alwaysAvailable:true},
    },
    screenvalidation:{
        pageName:"loginpage",
        fullpage:true,
        fullpage_Update_snaphot:false,
        update_snaphot:false,
        blocks:[
            
        ]
    },
    url:'/login',
};

module.exports = page;
