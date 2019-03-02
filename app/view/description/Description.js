Ext.define('Final.view.description.Description', {
    extend: 'Ext.panel.Panel',
    xtype: 'description'
    , cls: 'desci1'
    , reference: 'desc'
    , requires: [
        'Final.view.description.DescriptionController',
        'Final.view.description.DescriptionModel'
    ],
    controller: 'description-description',
    viewModel: {
        type: 'description-description'
    }
    , scrollable: 'y'
    , items: [{
        xtype: 'toolbar'
        , items: [{
            xtype: 'button'
            , iconCls: 'x-fa fa-arrow-left'
            , ui: 'nnn'

            , listeners: {
                tap: 'back1'
            }
        }]
    }, {
        xtype: 'image'
        , height: '200px'
        , reference: 'imageof'
    }, {
        xtype: 'container'
        , style: 'margin-left:1vh'
        , html: '<h2 style="color:#a60c5f"><u>Title:</u></h2>'
        , items: [{
            xtype: 'container'
            , reference: 'titleref'
            , margin: 20
        }, {
            xtype: 'button'
            , iconCls: 'x-fa fa-pencil'
            , ui: 'purp'
            , docked: 'right'
            , style: 'position:fixed;left:320px'
            , cls: 'but_of'
            , reference: 'pencil'
            , handler: 'toggleMenu'
        }
        ]
    }, {
        xtype: 'container'
        , style: 'margin-left:1vh'
        , html: '<h2 style="color:#a60c5f"><u>Year:</u></h2>'
        , items: {
            xtype: 'container'
            , reference: 'year'
            , margin: 20,
        }
    },
    {
        xtype: 'container'
        , style: 'margin-left:1vh'
        , html: '<h2 style="color:#a60c5f"><u>Overview:</u></h2>'
        , items: {
            xtype: 'container'
            , reference: 'overviewref'
            , margin: 20,
        }
    }, {
        xtype: 'formpanel'
        , reference: 'formdelete'
        , items: [{
            xtype: 'button'
            , iconCls: 'x-fa fa-trash'
            , ui: 'purp'
            , cls: 'but_of'
            , style: 'position:fixed;left:300px;bottom:7px'
            , handler: 'delete_from_list'
        }]
    }
    ]
});

