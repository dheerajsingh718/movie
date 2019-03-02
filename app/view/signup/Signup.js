
Ext.define('Final.view.signup.Signup', {
    extend: 'Ext.form.Panel',
    xtype: 'register'
    , requires: [
        'Final.view.signup.SignupController',
        'Final.view.signup.SignupModel'
    ],

    controller: 'signup-signup',
    viewModel: {
        type: 'signup-signup'
    },

    items: [{
        xtype: 'toolbar'
        , docked: 'top'
        , title: 'Registration'
        , items: [{
            xtype: 'button'
            , iconCls: 'x-fa fa-arrow-left'
            , ui: 'rev'
            , listeners: {
                tap: 'backtologin'
            }
        }]
    }, {
        xtype: 'image'
        , height: 160
        , src: "resources/video-camera.png"
    }, {
        xtype: 'emailfield'
        , validators: 'email'
        , required: true
        , name: 'email'
        , label: 'Email-id'
        , placeholder: 'xxxx.x.com'
    }, {
        xtype: 'passwordfield'
        , label: 'Password'
        , name: 'password'
        , required: true
        , revealable: true
        , maxLength: 10
    }, {
        xtype: 'passwordfield'
        , label: 'Confirm-Password'
        , required: true
        , name: 'confirm'
        , revealable: true
        , maxLength: 10
    }, {
        xtype: 'button'
        , ui: 'rev'
        , width: '100%'
        , style: 'top:5px'
        , text: 'Register'
        , listeners: {
            tap: 'register'
        }
    }]
});
