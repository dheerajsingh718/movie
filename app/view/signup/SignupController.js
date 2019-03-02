Ext.define('Final.view.signup.SignupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.signup-signup'
    , routes: {
        'regview': 'regview'
    }
    , regview: function () {
        Final.app.getMainView().setActiveItem('register');
    }
    , backtologin: function () {
        this.view.reset();
        history.back();
    }
    , register: function () {
        if (this.view.validate()) {
            var recs = this.view.getValues();
            if (recs.password.length < 5 || recs.confirm < 5) {
                Ext.Msg.alert('password too small')
            }
            if (recs.password == recs.confirm) {
                Ext.Ajax.request({
                    url: 'http://192.168.1.112:9292/register'
                    , method: 'post'
                    , jsonData: recs
                    , success: function (response, opts) {
                        var obj = Ext.decode(response.responseText);
                        console.dir(obj);
                        C(obj.values.token);
                        Ext.Msg.alert('Registeration successful');
                        history.back();
                        this.view.reset();
                    },scope:this,

                    failure: function (response, opts) {
                        var obj2 = Ext.decode(response.responseText);
                        Ext.Msg.alert(obj2.error);
                        C('server-side failure with status code ' + response.status);
                    }
                });
            } else {
                Ext.Msg.alert('Passwords donot Match');
            }
        } else {
            Ext.Msg.alert('Invalid Fields');
        }
    }
});
