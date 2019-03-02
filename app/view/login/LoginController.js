Ext.define('Final.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    id:'login',
    alias: 'controller.login-login'
    , forgot: function () {
        this.redirectTo('forgot');
    }
    , check_up: function (btn) {
        if (this.view.validate()) {
            var res=this.view.getValues();
            Ext.Ajax.request({
                url:'http://192.168.1.112:9292/login'
                ,method:'post'
                ,jsonData:res
                , success: function (response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);
                    localStorage.setItem('token',obj.values.token);
                    C(obj.values.token);
                    this.view.reset();
                    Final.app.load_to();
                },scope:this,

                failure: function (response, opts) {
                    var obj1 = Ext.decode(response.responseText);
                    Ext.Msg.alert(obj1.error);
                    C('server-side failure with status code ' + response.status);
                }
            });
        }
        else {
            Ext.Msg.alert('invalid fields');
        }
    }
    ,routes:{
        'login-page':'log'
    }
    ,log:function(){
        Final.app.getMainView().setActiveItem('login');
    }
    ,goto_register:function(){
        this.redirectTo('regview');
    }
});
