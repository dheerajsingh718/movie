
Ext.define('Final.view.forgot.Forgot', {
    extend: 'Ext.form.Panel',
    xtype: 'forgot',
    requires: [
        'Final.view.forgot.ForgotController',
        'Final.view.forgot.ForgotModel'
    ],

    controller: 'forgot-forgot',
    viewModel: {
        type: 'forgot-forgot'
    },

    items: [{
        xtype: 'toolbar'
        , docked: 'top'
        , title: 'Forgot password?'
        , items: [{
            xtype: 'button'
            , iconCls: 'x-fa fa-arrow-left'
            , ui: 'rev'
            , listeners: {
                tap: 'back_to_login'
            }
        }]
    }, {
        xtype: 'emailfield'
        , label: 'Email-id'
        , name: 'email'
        , reference: 'email'
        , validators: 'email'
        , required: true
    }, {
        xtype: 'numberfield'
        , name: 'otp'
        , label: 'OTP'
        , reference: 'otp'
        , maxLength: 4
        , required: true
        , hidden: true
    }, {
        xtype: 'passwordfield'
        , label: 'New-password'
        , name: 'password'
        , reference: 'pass'
        , hidden: true
        , required: true
        , maxLength: 10

    }, {
        xtype: 'passwordfield'
        , label: 'Confirm-password'
        , name: 'confirm'
        , reference: 'confirm_pwd'
        , hidden: true
        , required: true
        , maxLength: 10
    }, {
        xtype: 'button'
        , text: 'Submit'
        , style: 'float:right'
        , reference: 'sub'
        , ui: 'rev'
        , listeners: {
            tap: 'val'
        }
    }, {
        xtype: 'button'
        , text: 'reset'
        , ui: 'rev'
        , reference: 'reset_pwd'
        , width: '100%'
        ,style:'top:5px'
        , hidden: true
        , listeners: {
            tap: 'res'
        }
    }]
});
