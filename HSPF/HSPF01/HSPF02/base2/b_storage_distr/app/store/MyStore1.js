/*
 * File: app/store/MyStore1.js
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

Ext.define('B_STORAGE_DISTR.store.MyStore1', {
    extend: 'Ext.data.Store',

    requires: [
        'B_STORAGE_DISTR.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore1',
            model: 'B_STORAGE_DISTR.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/M_BL_DISTB_H.jsp',
                    create: 'sql/M_BL_DISTB_H.jsp',
                    destroy: 'sql/M_BL_DISTB_H.jsp',
                    update: 'sql/M_BL_DISTB_H.jsp'
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