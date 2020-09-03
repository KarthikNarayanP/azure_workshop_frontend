const page = {
    elements: {
        txt_firstname: {locator: [{type:"css",value:'#firstName'}],description: "FirstName",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_lastname: {locator: [{type:"css",value:'#lastName'}],description: "Last Name",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_email: {locator: [{type:"css",value:'#email'}],description: "Email",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_password: {locator: [{type:"css",value:'#password'}],description: "Password",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        txt_confirmpassword: {locator: [{type:"css",value:'#confirmpassword'}],description: "Confirm Password",actions: ["SENDKEYS"], createmethod:true, alwaysAvailable:true},
        btn_createaccount: {locator: [{type:"css",value:'#registerbutton'}],description: "Create Your E-Shop Account",actions: ["CLICK"], createmethod:true, alwaysAvailable:true}
    },
    screenvalidation:{
        pageName:"registrationpage",
        fullpage:true,
        fullpage_Update_snaphot:false,
        update_snaphot:false,
        blocks:[
            
        ]
    },
    url:'/register',
};

module.exports = page;
