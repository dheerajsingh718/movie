Ext.define('Final.store.Romance', {
    extend: 'Ext.data.Store',
    alias: 'store.romance',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Romance&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    // ,autoLoad:true
    pageSize:100
});
