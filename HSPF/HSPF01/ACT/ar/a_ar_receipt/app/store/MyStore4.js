/*
 * File: app/store/MyStore.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('A_AR_RECEIPT.store.MyStore4', {
    extend: 'Ext.data.Store',

    requires: [
        'A_AR_RECEIPT.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore4',
            model: 'A_AR_RECEIPT.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/A_AR_RECEIPT.jsp',
                    create: 'sql/A_AR_RECEIPT.jsp',
                    destroy: 'sql/A_AR_RECEIPT.jsp',
                    update: 'sql/A_AR_RECEIPT.jsp'
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