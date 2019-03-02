Ext.define('Final.store.Live-action', {
    extend: 'Ext.data.Store',
    alias: 'store.family',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Live-action&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    // ,autoLoad:true
    pageSize:100
});
