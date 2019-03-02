Ext.define('Final.store.Mystery', {
    extend: 'Ext.data.Store',
    alias: 'store.mystery',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Mystery&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    // ,autoLoad:true
    pageSize:100
});
