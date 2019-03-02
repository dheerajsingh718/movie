Ext.define('Final.store.Disaster', {
    extend: 'Ext.data.Store',
    alias: 'store.disaster',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Disaster&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    autoLoad:true
    ,pageSize:100
});
