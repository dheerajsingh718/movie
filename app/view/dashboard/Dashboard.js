
Ext.define('Final.view.dashboard.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard'
    , cls: 'dashboard'
    , requires: [
        'Final.view.dashboard.DashboardController',
        'Final.view.dashboard.DashboardModel'
    ],
    controller: 'dashboard-dashboard',
    viewModel: {
        type: 'dashboard-dashboard'
    },
    listeners: {
        painted: 'reload'
    },
    scrollable: 'y',
    items: [{
        xtype: 'toolbar'
        , docked: 'top'
        , items: [{
            xtype: "button"
            , iconCls: 'x-fa fa-sign-out'
            , ui: 'nnn'
            , docked: 'left'
            , listeners: {
                tap: 'sign_out'
            }
        }, {
            xtype: 'button'
            , iconCls: 'x-fa fa-search'
            , docked: 'right'
            , name: 'search'
            , ui: 'nnn'
            , listeners: {
                tap: 'search_for'
            }
        }]
    }, {
        xtype: 'carousel'
        , height: '220'
        , cls: 'carousel'
        , indicator: false
        ,draggable:false
        , listeners:
            {
                'painted': function (carousel) {
                    scope: this
                    carousel.pageTurner = new Ext.util.DelayedTask(function () {
                        if (carousel.getActiveIndex() == carousel.items.length - 1) {
                            carousel.setActiveItem(0, 'slide');
                        }
                        else {
                            carousel.next();
                        }
                    }, carousel);
                    carousel.pageTurner.delay(2000);
                },

                'activeitemchange': function (carousel) {
                    if (carousel.getActiveIndex() == 0) {
                        carousel.fireEvent('painted', this);

                    } else
                        carousel.pageTurner.delay(2000);
                },

            }
        , items: [{
            xtype: 'image'
            , src: 'resources/f1.jpg'
            , reference: 'car_item1'
        },
        {
            xtype: 'image'
            , src: 'resources/f2.jpg'
            , reference: 'car_item2'
        }, {
            xtype: 'image'
            , src: 'resources/f3.jpg'
            , reference: 'car_item3'
        }, {
            xtype: 'image'
            , src: 'resources/f4.jpg'
            , reference: 'car_item4'
        }]
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Action'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , reference: 'action'
        , store: 'Action'
        , itemTpl: '<div style="text-align:center;width:100px" class="comedycl"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Adventure'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Adventure'
        , itemTpl: '<div class="actioncl" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Animated'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Animated'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Comedy'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Comedy'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Crime'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Crime'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Disaster'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Disaster'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Documentary'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Documentary'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Drama'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Drama'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Family'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Family'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Fantasy'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Fantasy'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Gangster'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Gangster'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Horror'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Horror'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Live-action'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Live-action'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Music'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Music'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Mystery'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Mystery'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Political'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Political'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Romance'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Romance'
        , reference: 'items1'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Sci-fi'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Sci-fi'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Sports'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Sports'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Spy-film'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Thriller'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'War'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'War'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    }, {
        xtype: 'container'
        , items: [{
            xtype: 'button'
            , text: 'Western'
            , docked: 'left'
        }, {
            xtype: 'button'
            , docked: 'right'
            , iconCls: 'x-fa fa-plus-circle'
            , listeners: {
                tap: 'popout'
            }
        }]
    }, {
        xtype: 'dataview'
        , height: '180'
        , layout: 'hbox'
        , store: 'Western'
        , itemTpl: '<div class="horror" style="text-align:center;width:100px"><img height="80" width="90vh" src="{poster_file}"><p>{title}<p></div>'
        , listeners: {
            select: 'describe'
        }
    },]
});
