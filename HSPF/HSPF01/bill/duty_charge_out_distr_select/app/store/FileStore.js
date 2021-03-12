/*
 * File: app/store/FileStore.js
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

Ext.define('DUTY_CHARGE_OUT_DISTR_SELECT.store.FileStore', {
    extend: 'Ext.data.Store',

    requires: [
        'DUTY_CHARGE_OUT_DISTR_SELECT.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'FileStore',
            model: 'DUTY_CHARGE_OUT_DISTR_SELECT.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: '/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp',
                    create: '/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp',
                    destroy: '/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp',
                    update: '/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp'
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