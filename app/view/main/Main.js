Ext.define('Final.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    cls:'Main',
    scrollable:'y'
    ,activeItem:'login'
    ,layout:'card'
    ,items:[{
        xtype:'dashboard'
    },{
        xtype:'description'
    },{
        xtype:'search'
    },{
        xtype:'login'
    },{
        xtype:'register'
    },{
        xtype:'forgot'
    }]
    });
