Ext.define('Final.store.Gangster', {
    extend: 'Ext.data.Store',
    alias: 'store.gangster',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Gangster&token='+localStorage.getItem('token')
    //     ,autoLoad:true
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    // ,autoLoad:true
    pageSize:100
});
