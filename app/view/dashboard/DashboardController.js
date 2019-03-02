Ext.define('Final.view.dashboard.DashboardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dashboard-dashboard',
    id: 'dashcontroller',
    listen: {
        controller: {
            '#application': {
                hide_dialog: 'close'
            }
        }
    }
    , routes: {
        'dash': 'dash'
        , 'to-dash': 'redir',
    },
    //Updating the dataview by loading the stores when the dashboard is shown
    reload: function () {
        var d1 = Ext.getStore('Action');
        var d2 = Ext.getStore('Adventure');
        var d3 = Ext.getStore('Animated');
        var d4 = Ext.getStore('Comedy');
        var d5 = Ext.getStore('Crime');
        var d6 = Ext.getStore('Disaster');
        var d7 = Ext.getStore('Documentary');
        var d8 = Ext.getStore('Drama');
        var d9 = Ext.getStore('Family');
        var d10 = Ext.getStore('Fantasy');
        var d11 = Ext.getStore('Gangster');
        var d12 = Ext.getStore('Horror');
        var d13 = Ext.getStore('Live-action');
        var d14 = Ext.getStore('Music');
        var d15 = Ext.getStore('Mystery');
        var d16 = Ext.getStore('Political');
        var d17 = Ext.getStore('Romance');
        var d18 = Ext.getStore('Sci-fi');
        var d19 = Ext.getStore('Sports');
        var d20 = Ext.getStore('Thriller');
        var d21 = Ext.getStore('War');
        var d22 = Ext.getStore('Western');
        d1.load();
        d2.load();
        d3.load();
        d4.load();
        d5.load();
        d6.load();
        d7.load();
        d8.load();
        d9.load();
        d10.load();
        d11.load();
        d12.load();
        d13.load();
        d14.load();
        d15.load();
        d16.load();
        d17.load();
        d18.load();
        d19.load();
        d20.load();
        d21.load();
        d22.load();
    }
    , sign_out: function () {
        Ext.Msg.confirm('Sign-Out', 'Are you sure?', function (answer) {
            if (answer == 'yes') {
                localStorage.clear();
                this.redirectTo('login-page');
            }
        }, this);
    },

    //redirect to dashboard view
    redir: function () {
        Final.app.getMainView().setActiveItem('dashboard');
    }

    //redirect to dashboard view
    , dash: function () {
        Final.app.getMainView().setActiveItem('dashboard');
    }

    // camera plugin used while updating the movie details and converting the image to Base64 format using function callback
    , upload_img: function () {
        var opt =
        {
            mediatype: Camera.MediaType.PictureSourceType,
            quality: 50,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI
        };
        var me = this;
        navigator.camera.getPicture(onSuccess, onFail, opt);

        //onSuccess of getting a proper image and checking if the chosen image is less than 50kb
        function onSuccess(imageURI) {
            C(imageURI);
            me.image_data = imageURI;
            var input_size = imageURI.length;
            var output_size = ((input_size * 4) / 3) + (input_size / 96) + 6;
            C('output_size', output_size);
            if (output_size > 130) {
                C(output_size);
                Ext.Msg.alert('File size is is >50kb');
            }
            else {
                var i_ref = me.getReferences();
                i_ref.poster.setSrc(imageURI)
                me.fileuriToDataUrl(imageURI, function (imageURI) {
                    me.image_data = imageURI;
                    C(me.image_data);
                    var input_size = imageURI.length;
                    var output_size = ((input_size * 4) / 3) + (input_size / 96) + 6;
                    C('output_size', output_size);
                });
            }
        }
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
    , fileuriToDataUrl: function (src, callback) {
        var img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var dataURL;
            canvas.height = this.height;
            canvas.width = this.width;
            ctx.drawImage(this, 0, 0);
            dataURL = canvas.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = src;
    }

    //this function is used to get the description of the movie when the user taps in dashboard//
    , describe: function (v, location) {
        var x = location.data.id;
        C('x' + x);
        var mainst = Ext.getStore('Main');
        mainst.load();
        var datastore = mainst.getById(x).data;
        this.redirectTo('fromdash/' + x);
    }
    //redirect to search page
    , search_for: function () {
        this.redirectTo('searching');
    }
    , onNext: function () {
        var index = this.Carousel.getActiveIndex();
        C('before' + index);
        this.Back.show();
        this.Back.enable();
        this.Carousel.setActiveItem(index + 1);
        index = index + 1;
        C('after' + index);
        if (index == 3) {
            this.Next.hide();
            this.submit.show();
            // this.submit.
        }
        C(index);
    }

    //Exit from the app
    , onexit: function () {
        Ext.Msg.confirm('Exit', 'Are you sure?', function (answer) {
            if (answer == 'yes') {
                navigator.app.exitApp();
            }
        }
        )
    },

    //Dialog box back button
    onBack: function () {
        var j = this.Carousel.getActiveIndex();
        C(j)
        this.Carousel.setActiveItem(j - 1);
        j = j - 1;
        if (j <= 0) {
            this.Back.hide();
        }
        if (j <= 3) {
            this.submit.hide();
            this.Next.show();
        }
    }

    //Submission of the new added movie
    , submit1: function (btn) {
        var refs = this.getReferences();
        this.save_form = refs.formsave;
        this.image = refs.image;
        this.text1 = refs.text1;
        this.text2 = refs.text2;
        this.text3 = refs.text3;
        this.genre = refs.genre;
        this.tok = refs.tok;
        var i_check = this.save_form.getItems().items[6];
        var titlesave = this.title.getValue();
        var genresave = localStorage.getItem('genre');
        var toks = localStorage.getItem('token');
        var yearsave = this.year.getValue();
        var summarysave = this.summary.getValue();
        this.text1.setValue(titlesave);
        this.text2.setValue(yearsave);
        this.text3.setValue(summarysave);
        this.genre.setValue(genresave);
        this.tok.setValue(toks);
        var send_input = this.save_form.getValues();
        send_input.poster = this.image_data;
        var date = new Date().getFullYear();
        if (Ext.isEmpty(titlesave) && Ext.isEmpty(yearsave) && Ext.isEmpty(summarysave)) {
            Ext.toast('Invalid Fields!');
        }
        else if (yearsave < 1900 || yearsave > date) {
            Ext.toast('Not a valid Year');
        } else if (i_check.getSrc() == null) {
            Ext.toast('Image not added');
        } else {
            titlesave = titlesave;
            summarysave = summarysave.trim();
            Ext.Ajax.request({
                url: "http://192.168.1.112:9292/movies/"
                , method: "post"
                , params: send_input
                , success: function (response) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj.values);
                    C('sent ip' + send_input);
                    Ext.Msg.alert(send_input.title + ' movie is added!');
                    this.Carousel.setActiveItemIndex(0);
                    this.onBack();
                    this.title.reset();
                    this.year.reset();
                    this.summary.reset();
                    this.dashf.reset();
                    this.dialog.hide();
                    this.reload();
                },
                failure: function (response, opts) {
                    C('server-side failure with status code ' + response.status);
                }
                , scope: this
            });
            var str = Ext.getStore('Main');
            str.load();
            this.dialog.hide();
        }
    }

    //Dialog box close button
    , close: function () {
        this.dialog.hide();
    }

    //on slide of carousel in dialog box
    , val: function () {
        var ind = this.Carousel.getActiveIndex();
        if (ind >= 0) {
            this.Back.show();
            this.Back.enable();
        }
        if (ind == 3) {
            this.Next.hide();
            this.submit.show();
        }
        if(ind<3){
            this.Next.show();
            this.submit.hide();
        }
        if(ind==0){
            this.Back.hide();
        }
    }

    //Creation of dialog box and using the same throughtout for the better usability
    , popout: function (btn) {
        var loc = btn.up().down().getText();
        localStorage.setItem('genre', loc);
        if (!this.dialog) {
            this.dialog = Ext.create({
                xtype: 'dialog',
                ui: 'dialog-bot'
                , right: 29
                , top: 130
                , height: 300
                , items: [{
                    xtype: 'titlebar'
                    , title: 'Add Details'
                    , docked: 'top'
                    , items: {
                        xtype: 'button'
                        , iconCls: 'x-fa fa-remove'
                        , align: 'right'
                        , listeners: {
                            tap: 'close'
                        }
                    }
                }, {
                    xtype: 'toolbar'
                    , docked: 'bottom'
                    , ui: 'tool-bot'
                    , items: [{
                        iconCls: 'x-fa fa-arrow-circle-left'
                        , reference: 'back'
                        , disabled: '{active==0}'
                        , listeners: { tap: 'onBack' }
                        , docked: 'left'
                    }, {
                        iconCls: 'x-fa fa-arrow-circle-right'
                        , reference: 'next'
                        , docked: 'right'
                        , listeners: {
                            tap: 'onNext'
                        }
                    },
                    {
                        text: 'Submit'
                        , reference: 'submitdata'
                        , hidden: true
                        , docked: 'right'
                        , listeners: {
                            tap: 'submit1'
                        }
                    }]
                }, {
                    xtype: 'carousel'
                    , indicator: false
                    , reference: 'slide'
                    , height: 150
                    , listeners: {
                        activeItemchange: 'val'
                    }
                    , items: [{
                        xtype: 'textfield'
                        , label: 'Title'
                        , required: true
                        , name: 'title'
                        , reference: 'title'
                    }, {
                        xtype: 'numberfield'
                        , label: 'Year'
                        , required: true
                        , minValue: 1940
                        , maxValue: new Date().getFullYear()
                        , reference: 'year'
                    }, {
                        xtype: 'textfield'
                        , label: 'Summary'
                        , required: 'true'
                        , reference: 'summary'
                        , maxLength: 500
                        , minLength: 20
                    }, {
                        xtype: 'myform'
                        , reference: 'dash_form'
                    }]
                }]
            });
            this.view.add(this.dialog);
        }
        var refs = this.view.getReferences();
        this.Carousel = refs.slide;
        this.Back = refs.back;
        this.Next = refs.next;
        this.dashf = refs.dash_form;
        this.submit = refs.submitdata;
        this.title = refs.title;
        this.year = refs.year;
        this.summary = refs.summary;
        this.poster = refs.poster;
        var active = this.Carousel.getActiveIndex();
        C('active', active);
        this.Carousel.setActiveItemIndex(0);
        this.onBack();
        this.title.reset();
        this.year.reset();
        this.summary.reset();
        this.dashf.reset();
        this.poster.setSrc(null);
        this.dialog.show();
    }
});
