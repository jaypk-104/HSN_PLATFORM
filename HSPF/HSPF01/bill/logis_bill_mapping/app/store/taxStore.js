/*
 * File: app/store/taxStore.js
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

Ext.define('M_CHARGE_OUT_DISTR2.store.taxStore', {
    extend: 'Ext.data.Store',

    requires: [
        'M_CHARGE_OUT_DISTR2.model.taxModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'taxStore',
            autoLoad: true,
            model: 'M_CHARGE_OUT_DISTR2.model.taxModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: '/HSPF01/common/sql/Combobox.jsp'
                },
                extraParams: {
                    V_MAST_CD: 'BA05',
                    V_GRID: 'Y'
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