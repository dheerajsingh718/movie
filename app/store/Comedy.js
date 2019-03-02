Ext.define('Final.store.Comedy', {
    extend: 'Ext.data.Store',
    alias: 'store.comedy',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Comedy&token='+localStorage.getItem('token')
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    pageSize:100
});
