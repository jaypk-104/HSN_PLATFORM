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

Ext.define('Y_APPROV_DISTR.store.OriginStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Y_APPROV_DISTR.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'OriginStore',
            model: 'Y_APPROV_DISTR.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: '/HSPF01/common/sql/Combobox.jsp',
                    create: '/HSPF01/common/sql/Combobox.jsp',
                    destroy: '/HSPF01/common/sql/Combobox.jsp',
                    update: '/HSPF01/common/sql/Combobox.jsp'
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