/*
 * File: app/store/MyStore1.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
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

Ext.define('Y_APPROV_STEEL.store.MeatStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Y_APPROV_STEEL.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MeatStore',
            model: 'Y_APPROV_STEEL.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/Y_APPROV_STEEL.jsp',
                    create: 'sql/Y_APPROV_STEEL.jsp',
                    destroy: 'sql/Y_APPROV_STEEL.jsp',
                    update: 'sql/Y_APPROV_STEEL.jsp'
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