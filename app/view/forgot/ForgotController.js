Ext.define('Final.view.forgot.ForgotController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.forgot-forgot'
    , routes: {
        'forgot': 'forgot'
    }
    , listen: {
        controller: {
            '#application': {
                backtologin1: 'backtologin',
                backto:'back_to_login'
            }
        }}
        ,backtologin:function(){
            history.back();
        }
    , init: function () {
        var re = this.getReferences();
        this.em = re.email;
        this.pwd = re.pass;
        this.cpwd = re.confirm_pwd;
        this.sub_btn = re.sub;
        this.otp = re.otp;
        this.res_btn = re.reset_pwd;
    }

    //When the user clicks on Forgot password? it will redirect to this ViewController
    , forgot: function () {
        Final.app.getMainView().setActiveItem('forgot');
    }

    //Toolbar back function
    , back_to_login: function () {
        this.em.enable();
        this.pwd.hide();
        this.cpwd.hide();
        this.sub_btn.show();
        this.otp.hide();
        this.res_btn.hide();
        this.view.reset();
        history.back();
    }

    //When the user Enters the Email-id it will check and generate the otp which should be given while changing the password
    , val: function () {
        var v = this.view.getValues().email;
        var s = { email: v };
        Ext.Ajax.request({
            url: 'http://192.168.1.112:9292/forgot'
            , method: 'post'
            , jsonData: s
            , success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                C(obj.values.token);
                Ext.Msg.alert('OTP is' + obj.values.reset);
                this.otp.show();
                this.pwd.show();
                this.cpwd.show();
                this.em.disable();
                this.sub_btn.hide();
                this.res_btn.show();
            }, scope: this,
            failure: function (response, opts) {
                var obj2 = Ext.decode(response.responseText);
                Ext.Msg.alert(obj2.error);
                C('server-side failure with status code ' + response.status);
            }
        });
    }

    //Password  reset function
    , res: function () {
        var v = this.view.getValues();
        var p1 = v.password;
        var p2 = v.confirm;
        var o = v.otp;
        var res = { reset: o, password: p1, confirm: p2 };
        Ext.Ajax.request({
            url: 'http://192.168.1.112:9292/reset'
            , method: 'post'
            , jsonData: res
            , success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                C(obj.values.token);
                Ext.Msg.alert('Password reset successfull');
                this.view.reset();
                this.em.enable();
                this.pwd.hide();
                this.cpwd.hide();
                this.sub_btn.show();
                this.otp.hide();
                this.res_btn.hide();
                history.back();

            }, scope: this,
            failure: function (response, opts) {
                var obj2 = Ext.decode(response.responseText);
                Ext.Msg.alert('Invalid fields');
                C('server-side failure with status code ' + response.status);
            }
        });

    }
});
