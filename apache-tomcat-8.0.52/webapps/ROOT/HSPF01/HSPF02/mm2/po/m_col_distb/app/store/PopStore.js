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

Ext.define('M_COL_DISTB.store.PopStore', {
    extend: 'Ext.data.Store',

    requires: [
        'M_COL_DISTB.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'PopStore',
            model: 'M_COL_DISTB.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                	read: 'sql/M_COL_DISTB.jsp',
                    create: 'sql/M_COL_DISTB.jsp.jsp',
                    destroy: 'sql/M_COL_DISTB.jsp',
                    update: 'sql/M_COL_DISTB.jsp'
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