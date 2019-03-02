Ext.define('Final.store.Documentary', {
    extend: 'Ext.data.Store',
    alias: 'store.documentary',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Documentary&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    autoLoad:true
    ,pageSize:100
});
