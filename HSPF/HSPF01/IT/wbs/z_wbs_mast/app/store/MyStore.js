/*
 * File: app/store/MyStore.js
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

Ext.define('Z_WBS_MAST.store.MyStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Z_WBS_MAST.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore',
            model: 'Z_WBS_MAST.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/Z_WBS_MAST.jsp',
                    create: 'sql/Z_WBS_MAST.jsp',
                    destroy: 'sql/Z_WBS_MAST.jsp',
                    update: 'sql/Z_WBS_MAST.jsp'
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