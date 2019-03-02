Ext.define('Final.store.Action', {
    extend: 'Ext.data.Store',
    alias: 'store.action',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Action&token='+localStorage.getItem('token')
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    pageSize:100
});
