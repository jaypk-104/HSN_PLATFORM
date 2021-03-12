Ext.define('M_L_LC_TOT_HSPF.store.MyStore1', {
    extend: 'Ext.data.Store',

    requires: [
        'M_L_LC_TOT_HSPF.model.MyModel1',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore1',
            model: 'M_L_LC_TOT_HSPF.model.MyModel1',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/M_L_LC_TOT_HSPF_D.jsp',
                    create: 'sql/M_L_LC_TOT_HSPF_D.jsp',
                    destroy: 'sql/M_L_LC_TOT_HSPF_D.jsp',
                    update: 'sql/M_L_LC_TOT_HSPF_D.jsp'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'resultList'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    encode: true,
                    rootProperty: 'data'
                }
            }
        }, cfg)]);
    }
});