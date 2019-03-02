Ext.define('Final.store.Adventure', {
    extend: 'Ext.data.Store',
    alias: 'store.adventure',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Adventure&token='+localStorage.getItem('token')

    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    pageSize:100
});
