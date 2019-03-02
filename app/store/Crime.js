Ext.define('Final.store.Crime', {
    extend: 'Ext.data.Store',
    alias: 'store.crime',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Crime&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    autoLoad:true
    ,pageSize:100
});
