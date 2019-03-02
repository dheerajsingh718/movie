Ext.define('Final.view.description.DescriptionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.description-description'
    , listen: {
        controller: {
            '#searchcontroller': {
                show_desc: 'change'
            }
        }

        //Ext global listen
        , global: {
            back1: 'back1'
        }
    }
    , routes: {
        'fromdash/:x': 'change',

    }

    //plugin function for camera upload
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
    , upload_cam: function () {
        var opt =
        {
            mediatype: Camera.MediaType.PictureSourceType,
            quality: 50,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: Camera.DestinationType.FILE_URI
        };
        var me = this;
        navigator.camera.getPicture(onSuccess, onFail, opt);

        function onSuccess(imageURI) {
            C(imageURI);
            me.image_data = imageURI;
            var input_size = imageURI.length;
            var output_size = ((input_size * 4) / 3) + (input_size / 96) + 6;
            C('output_size', output_size);
            if (output_size > 130) {
                C(output_size);
                alert('File size is is >50kb');
            }
            else {
                me.rightMenu.down('#picture').setSrc(imageURI);
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

    //Toolbar and hardware back button function
    , back1: function (btn) {
        if (this.rightMenu) {
            this.rightMenu.destroy();
        }
        history.back();
        var Main_st1 = Ext.getStore('Main');
        Main_st1.load();
    }

    //When the movie is being selected to see the description from the Dashboard 
    , change: function (x) {
        this.record = x;
        C(x);
        Final.app.getMainView().setActiveItem('description');
        var st = Ext.getStore('Main');
        st.reload();
        var find = st.getById(x).data;
        var imageref = this.lookupReference('imageof');
        imageref.setSrc(find.poster_file);
        var getref1 = this.lookupReference('titleref');
        getref1.setHtml(find.title);
        var getref2 = this.lookupReference('overviewref');
        getref2.setHtml(find.overview);
        var getref2 = this.lookupReference('year');
        getref2.setHtml(find.year);
    }

    , toggleMenu1: function () {
        Ext.Viewport.toggleMenu('right');
    }
    //When the user taps on the pencil button which intents to edit the poster values that will be done in a menu
    , toggleMenu: function () {
        this.create();
        C('toggleMenu');
        Ext.Viewport.toggleMenu('right');
        var y = this.record;
        var Mainst = Ext.getStore('Main');
        Mainst.load();
        var dataof = Mainst.getById(y).data;
        var picture_set = this.rightMenu.down('#picture');
        picture_set.setSrc(dataof.poster_file);
        var title_set = this.rightMenu.down('#title_edit');
        title_set.setValue(dataof.title);
        var year_set = this.rightMenu.down('#year_edit');
        year_set.setValue(dataof.year);
        var overview_set = this.rightMenu.down('#overview_edit');
        overview_set.setValue(dataof.overview);
    }
    //this is used to save the edited values
    , save_form: function (btn) {
        var a = this.view.getReferences();
        this.title = a.titleref;
        this.year = a.year;
        this.overview = a.overviewref;
        this.image_des = a.imageof;
        btn.up('formpanel').setValues({ token: localStorage.getItem('token') });
        var d = Ext.getStore('Main');
        var p = btn.up('formpanel').getValues();
        p.poster = this.image_data;
        if (p.poster) {
            Ext.Ajax.request({
                url: "http://192.168.1.112:9292/movies/" + this.record
                , method: "put"
                , params: p
                , success: function (response) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj.values);
                    C('p' + p);
                    Ext.Msg.alert('Success');
                    this.title.setHtml(p.title);
                    this.year.setHtml(p.year);
                    this.overview.setHtml(p.overview);
                    if (this.image_data) {
                        this.image_des.setSrc(this.image_data);
                    }
                    this.image_data = "";
                    Ext.Viewport.toggleMenu('right');
                },
                failure: function (response, opts) {
                    Ext.Msg.alert('Update Failed');
                    C('server-side failure with status code ' + response.status);
                }
                , scope: this
            });
        } else {
            //This is called when the image is not getting changed
            btn.up('formpanel').submit({
                url: "http://192.168.1.112:9292/movies/" + this.record
                , method: 'post',
                success: function (response) {
                    Ext.Msg.alert('Success');
                    this.title.setHtml(p.title);
                    this.year.setHtml(p.year);
                    this.overview.setHtml(p.overview);
                    Ext.Viewport.toggleMenu('right');
                }, failure: function (response) {
                    Ext.Msg.alert('Update Failed');
                    C('server-side failure with status code ' + response.status);
                }
                , scope: this
            });
        }
    }
    //this gets all the references of the view and those can be used without calling references again
    , init: function () {
        var n = this.view.getReferences();
        this.form_ref = n.edit_form;
        this.pencil = n.pencil;
        this.image_ref = n.image_edit;
        this.title_ref = n.title_edit;
        this.year_ref = n.year_edit;
        this.summary_ref = n.summary_edit;
    },

    //Menu creation 
    create: function () {
        var cfg = {
            side: 'right'
            , reference: 'menu1'
            , cls: 'Menu_form'
            , items: [{
                xtype: 'formpanel'
                , height: '100%'
                , cls: 'the_form'
                , reference: 'description_form'
                , itemId: 'form_edit'
                , items: [
                    {
                        xtype: 'button'
                        , itemId: 'upload_btn'
                        , reference: 'upload_btn'
                        , scope: this
                        , ui: 'dhe'
                        , text: 'upload'
                        , handler: this.upload_cam
                        , style: 'left:125px;bottom:10px;'
                    },
                    {
                        xtype: 'image'
                        , reference: 'picture'
                        , scope: this
                        , itemId: 'picture'
                        , height: 200
                        , name: 'poster'
                    },
                    {
                        xtype: 'textfield'
                        , name: 'title'
                        , margin: 0
                        , itemId: 'title_edit'
                        , reference: 'title_form'

                        , scope: this
                        , required: true
                    }, {
                        xtype: 'numberfield'
                        , minLength: 1900
                        , maxLength: new Date().getFullYear()
                        , name: 'year'
                        , margin: 0
                        , required: true
                        , itemId: 'year_edit'
                        , reference: 'year_form'
                        , scope: this
                    }, {
                        xtype: 'button'
                        , iconCls: 'x-fa fa-remove'
                        , margin: 0
                        , cls: 'rem_btn'
                        , docked: 'left'
                        , ui: 'nnn'
                        , handler: this.toggleMenu1
                        , reference: 'rem'
                        , scope: this
                    }, {
                        xtype: 'textareafield'
                        , maxRows: 5
                        , name: 'overview'
                        , itemId: 'overview_edit'
                        , margin: 0
                        , reference: 'overview_form'
                        , scope: this
                        , required: true
                    }, {
                        xtype: 'hiddenfield'
                        , name: 'token'
                        , reference: 'token'
                    }, {
                        xtype: 'button'
                        , text: 'Save'
                        , ui: 'dhe'
                        , handler: this.save_form
                        , scope: this
                        , docked: 'bottom'
                        , cls: 'save_button'
                        , style: 'width:82px;left:141px'
                    }]
            }]
        };

        this.rightMenu = Ext.Viewport.setMenu(cfg, {
            side: 'right'
        });
    },

    //To delete a movie from the Database
    delete_from_list: function (btn) {
        this.form_del = this.lookupReference('formdelete');
        var tit_del = this.lookup('titleref');
        Ext.Msg.confirm('Delete', 'Are you sure?', function (answer) {
            if (answer == 'yes') {
                this.form_del.submit({
                    url: "http://192.168.1.112:9292/movies/" + this.record + "?token=" + localStorage.getItem('token')
                    , method: 'delete'
                    , success: function (f, result, data) {
                        var store = Ext.getStore('Main');
                        store.load();
                        C('success result', result);
                        C('success data', data);
                        Ext.Msg.alert(tit_del.getHtml() + ' movie is deleted!');
                        if (this.rightMenu) {
                            this.rightMenu.destroy();
                        }
                        history.back();
                    }
                    , failure: function (f, result) {
                        C('Deletion failed!', result);
                    }
                    , scope: this
                })
            }
        }, this
        );
    }
});
