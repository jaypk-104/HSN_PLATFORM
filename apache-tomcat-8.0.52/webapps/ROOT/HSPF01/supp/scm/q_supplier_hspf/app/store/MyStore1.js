/*
 * File: app/store/MyStore.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Q_SUPPLIER_HSPF.store.MyStore1', {
    extend: 'Ext.data.Store',

    requires: [
        'Q_SUPPLIER_HSPF.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore1',
            model: 'Q_SUPPLIER_HSPF.model.MyModel',
            sorters: [{
                property: 'INSPSEQ',
                direction: 'ASC'
            }],
            sortRoot: 'INSPSEQ',
            sortOnLoad: true,
            remoteSort: false,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/Q_SUPPLIER_HSPF_hspf.jsp',
                    create: 'sql/Q_SUPPLIER_HSPF_hspf.jsp',
                    destroy: 'sql/Q_SUPPLIER_HSPF_hspf.jsp',
                    update: 'sql/Q_SUPPLIER_HSPF_hspf.jsp'
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