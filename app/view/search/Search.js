
Ext.define('Final.view.search.Search', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Final.view.search.SearchController',
        'Final.view.search.SearchModel'
    ],
    xtype: 'search'
    , controller: 'search-search',
    viewModel: {
        type: 'search-search'
    }

    , scrollable: 'y'
    , items: [{
        xtype: 'toolbar'
        , docked: 'top'
        , items: [{
            xtype: 'button'
            , iconCls: 'x-fa fa-arrow-left'
            , handler: 'backtodash'
            ,ui:'nnn'
        }]
    },
    {
        xtype: 'searchfield'
        , reference: 'search_view'
        ,ui:'solo'
        ,height:30
        ,margin:15
        ,style:'border:1px solid black'
        , listeners: {
            change: 'show_results'
        }
    },
    {
        xtype: 'list'
        , store: 'Main'
        , flex: 1
        , itemTpl: '{title}'
        , listeners: {
            select: 'goto_desc'
        }
    }]
});
