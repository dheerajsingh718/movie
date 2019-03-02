Ext.define('Final.store.Animated', {
    extend: 'Ext.data.Store',
    alias: 'store.animated',
    model: 'Final.model.Main',
    // proxy: {
    //     type: 'ajax',
    //     url:'http://training.mobignosis.net:9193/movies?genres=Animated&token='+localStorage.getItem('token')
    //     ,reader: {
    //         type: 'json',
    //         rootProperty: 'values'
    //     }
    // }
    pageSize:100
});
