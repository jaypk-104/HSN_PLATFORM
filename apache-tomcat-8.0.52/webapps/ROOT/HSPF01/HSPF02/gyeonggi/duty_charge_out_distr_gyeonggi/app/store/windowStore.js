/*
 * File: app/store/windowStore.js
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

Ext.define('M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.store.windowStore', {
    extend: 'Ext.data.Store',

    requires: [
        'M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'windowStore',
            model: 'M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/duty_charge_out_distr_window.jsp',
                    create: 'sql/duty_charge_out_distr_window.jsp',
                    destroy: 'sql/duty_charge_out_distr_window.jsp',
                    update: 'sql/duty_charge_out_distr_window.jsp'
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