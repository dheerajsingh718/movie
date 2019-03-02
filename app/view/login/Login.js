
Ext.define('Final.view.login.Login', {
    extend: 'Ext.form.Panel'
    , xtype: 'login'
    , reference: 'login_form'
    , cls: 'login'
    , requires: [
        'Final.view.login.LoginController',
        'Final.view.login.LoginModel'
    ],

    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },

    items: [{
        xtype: 'image'
        , height: 160
        , src: "resources/video-camera.png"
    }, {
        xtype: 'emailfield'
        , label: 'Email-id'
        , required: true
        , reference: 'email'
        , placeholder: 'stuart@gmail.com'
        , name: 'email'
        , validators: 'email'
        , requiredMessage: 'this field is required'
    }, {
        xtype: 'passwordfield'
        , reference: 'password'
        , minLength: 6
        , maxLength: 10
        , label: 'Password'
        , name: 'password'
        , required: true
        , revealable: true
    }, {
        xtype: 'button'
        , text: 'forgot password?'
        ,style:'float:right'
        , listeners: {
            tap: 'forgot'
        }
    }, {
        xtype: 'button'
        , text: 'Login'
        ,width:'100%'
        ,style:'top:5px'
        , ui: 'rev'
        , listeners: {
            tap: 'check_up'
        }
    }, {
        xtype: 'button'
        , text: 'New user? Register'
        , ui: 'rev'
        ,style:'top:10px'
        ,width:'100%'
        , listeners: {
            tap: 'goto_register'
        }
    }]
});
