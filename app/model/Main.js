Ext.define('Final.model.Main', {
    extend: 'Ext.data.Model',
    fields: [
        'id'
        ,'title'
        ,'year'
        ,'director'
        ,'overview'
        // ,'poster_file'
        ,{
            name: 'poster_file'
            ,convert: function(v,rec) {
                return "http://192.168.1.112:9292" + rec.data.poster_file
            }
        }
        ,'genres'
    ]
});
