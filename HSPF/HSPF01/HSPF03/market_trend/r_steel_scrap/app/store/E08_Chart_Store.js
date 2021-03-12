/*
 * File: app/store/E08_Chart_Store.js
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

Ext.define('R_STEEL_SCRAP.store.E08_Chart_Store', {
    extend: 'Ext.data.Store',

    requires: [
        'R_STEEL_SCRAP.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'E08_Chart_Store',
            model: 'R_STEEL_SCRAP.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/R_STEEL_SCRAP_SELECT.jsp',
                    create: 'sql/R_STEEL_SCRAP_SELECT.jsp',
                    destroy: 'sql/R_STEEL_SCRAP_SELECT.jsp',
                    update: 'sql/R_STEEL_SCRAP_SELECT.jsp'
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