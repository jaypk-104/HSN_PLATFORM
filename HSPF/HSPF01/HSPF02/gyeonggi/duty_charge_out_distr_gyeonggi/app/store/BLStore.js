/*
 * File: app/store/BLStore.js
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

Ext.define('M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.store.BLStore', {
    extend: 'Ext.data.Store',

    requires: [
        'M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.data.field.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'BLStore',
            model: 'M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/BLCombo.jsp',
                    
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
            },
            fields: [
                {
                    name: 'BL_DOC_NO'
                }
            ]
        }, cfg)]);
    }
});