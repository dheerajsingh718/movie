Ext.define('Final.store.Main', {
    extend: 'Ext.data.Store',
    alias: 'store.main',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    // ,autoLoad:true
    pageSize: 100
});
