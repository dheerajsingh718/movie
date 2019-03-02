Ext.define('Final.Application', {
    extend: 'Ext.app.Application'
    , id: 'application'
    , name: 'Final',
    stores: [
        'Personnel', 'Main', 'Action', 'Adventure', 'Animated', 'Comedy', 'Crime', 'Disaster', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Gangster', 'Horror', 'Live-action', 'Music', 'Mystery', 'Political', 'Romance', 'Sci-fi', 'Sports', 'Thriller', 'War', 'Western'
    ]
    , quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },
    init: function () {
        C = Ext.emptyFn;
        C = console.info.bind(console);
    }
    //This is called when the user opens the app and checks if the user has already logged in if yes then it takes directly to the Dashboard page and if no then log-in page is shown.
    , launch: function () {
        if (localStorage.getItem('token')) {
            Final.app.load_to();
        }
        else {
            Final.app.redirectTo('login-page');
        }
        document.addEventListener("backbutton", this.onback, false);
    }


    //When the user is directed to the dashboard page the token will be accessed and then the stores are loaded
    , load_to: function () {
        var s1 = Ext.getStore('Action');
        var s2 = Ext.getStore('Adventure');
        var s3 = Ext.getStore('Animated');
        var s4 = Ext.getStore('Comedy');
        var s5 = Ext.getStore('Crime');
        var s6 = Ext.getStore('Disaster');
        var s7 = Ext.getStore('Documentary');
        var s8 = Ext.getStore('Drama');
        var s9 = Ext.getStore('Family');
        var s10 = Ext.getStore('Fantasy');
        var s11 = Ext.getStore('Gangster');
        var s12 = Ext.getStore('Horror');
        var s13 = Ext.getStore('Live-action');
        var s14 = Ext.getStore('Music');
        var s15 = Ext.getStore('Mystery');
        var s16 = Ext.getStore('Political');
        var s17 = Ext.getStore('Romance');
        var s18 = Ext.getStore('Sci-fi');
        var s19 = Ext.getStore('Sports');
        var s20 = Ext.getStore('Thriller');
        var s21 = Ext.getStore('War');
        var s22 = Ext.getStore('Western');
        var s23 = Ext.getStore('Main');
        s1.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Action&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s2.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Adventure&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s3.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Animated&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s4.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Comedy&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s5.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Crime&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });

        s6.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Disaster&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s7.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Documentary&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s8.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Drama&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s9.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Family&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s10.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Fantasy&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s11.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Gangster&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s12.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Horror&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s13.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Live-action&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s14.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Music&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s15.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Mystery&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s16.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Political&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s17.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Romance&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s18.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Sci-fi&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s19.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Sports&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s20.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Thriller&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s21.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=War&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s22.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?genres=Western&token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s23.setProxy({
            type: 'ajax',
            url: 'http://192.168.1.112:9292/movies?token=' + localStorage.getItem('token')
            , reader: {
                type: 'json',
                rootProperty: 'values'
            }
        });
        s1.loadPage(1);
        s2.loadPage(1);
        s3.loadPage(1);
        s4.loadPage(1);
        s5.loadPage(1);
        s6.loadPage(1);
        s7.loadPage(1);
        s8.loadPage(1);
        s9.loadPage(1);
        s10.loadPage(1);
        s11.loadPage(1);
        s12.loadPage(1);
        s13.loadPage(1);
        s14.loadPage(1);
        s15.loadPage(1);
        s16.loadPage(1);
        s17.loadPage(1);
        s18.loadPage(1);
        s19.loadPage(1);
        s20.loadPage(1);
        s21.loadPage(1);
        s22.loadPage(1);
        s23.loadPage(1);
        Final.app.redirectTo('to-dash');
    }
    //Hardware Back button functions
    , onback: function () {
        var x = window.location.hash.split('/')[0].split('#')[1];
        this.y = x;
        var flag = 0;
        var floating_comp = Ext.query('.x-floated');
        Ext.each(floating_comp, function (el) {
            var cmp = Ext.getCmp(el.id);
            if (!cmp.isHidden()) {
                cmp.hide();
                flag = 1;
                return false;
            }
        });
        if (x == 'searching') {
            localStorage.setItem('count', 0);
            Final.app.fireEvent('backtodash');
        }
        else if (x == 'fromdash' && flag == 0) {
            localStorage.setItem('count', 0);
            Ext.GlobalEvents.fireEvent('back1');
        }
        else if ((x == 'to-dash' || Final.app.getMainView().getActiveItem().xtype == 'login') && flag == 0) {
            if ((localStorage.getItem('count') == 1)) {
                localStorage.setItem('count', 0);
                navigator.app.exitApp();
                return false;
            }
            Ext.toast({ message: 'Press again to exit' });
            localStorage.setItem('count', 1);
        }
        else if (x == 'regview') {
            localStorage.setItem('count', 0);
            Final.app.fireEvent('backtologin1');
        }
        else if (x == 'forgot') {
            localStorage.setItem('count', 0);
            Final.app.fireEvent('backto');
        }
    }
});
