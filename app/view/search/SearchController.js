Ext.define('Final.view.search.SearchController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-search'
    , id: 'searchcontroller'
    , listen: {
        controller: {
            '#application': {
                backtodash: 'backtodash'
            }
        }
    }
    , routes: {
        'searching': 'search_to'
    }
    , search_to: function () {
        Final.app.getMainView().setActiveItem('search');
        var ref_search = this.getReferences();
        this.search_view = ref_search.search_view;
        this.search_view.focus();
    }
    , backtodash: function () {
        history.back();
        this.search_view.reset();
        var M_store = Ext.getStore('Main');
        M_store.clearFilter();
    }
    , show_results: function () {
        var Main_store = Ext.getStore('Main');
        Main_store.load();
        var search_val = this.search_view.getValue();
        Main_store.clearFilter();
        Main_store.filterBy(function (rec) {
            var r = rec.getData();
            regex = new RegExp(search_val, 'i');
            if (r.title.toString().search(regex) != -1)
                return true;
        });
        this.search_view.focus(false);
    }
    , goto_desc: function (the, selected) {
        this.search_view.reset();
        var id_of = selected.getData().id;
        this.redirectTo('fromdash/' + id_of);
    }
});
