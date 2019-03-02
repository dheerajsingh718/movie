
Ext.define('Final.view.form.Form', {
    extend: 'Ext.form.Panel',
    margin:0
    ,padding:0
    ,cls: 'myform1',
    xtype: 'myform'
    , scrollable: 'y'
    , items: [
        {
            xtype: 'formpanel'
            , reference: 'formsave'
            , items: [{
                xtype: 'hiddenfield'
                , reference: 'text1'
                , name: 'title'
            }, {
                xtype: 'hiddenfield'
                , reference: 'text2'
                , name: 'year'
            },{
                xtype:'hiddenfield'
                ,reference:'genre'
                ,name:'genres'
            }, {
                xtype:'hiddenfield'
                ,reference:'tok'
                ,name:'token'
            },{
                xtype: 'hiddenfield'
                , reference: 'text3'
                , name: 'overview'
            },
            {
                xtype: 'button'
                , itemId: 'upload_btn'
                , reference: 'upload_img'
                , ui: 'rev'
                , style: 'float:right'
                , text: 'upload'
                , handler: 'upload_img'
                , style: 'left:150px;bottom:10px;'
            },
            {
                xtype: 'image'
                , required: true
                , reference: 'poster'
                , height: 150
                , name: 'poster'
                , style: 'border:0.5px solid black'
                , cls: 'ff7'
            }
            ]
        }
    ]
});
