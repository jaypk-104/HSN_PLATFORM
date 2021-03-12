/*
 * File: app/store/MyStore.js
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

Ext.define('CHARGE_OUT_DISTR_SELECT.store.MyStore', {
    extend: 'Ext.data.Store',

    requires: [
        'CHARGE_OUT_DISTR_SELECT.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore',
            model: 'CHARGE_OUT_DISTR_SELECT.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/charge_out_distr_select.jsp',
                    create: 'sql/charge_out_distr_select.jsp',
                    destroy: 'sql/charge_out_distr_select.jsp',
                    update: 'sql/charge_out_distr_select.jsp'
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
                },
                listeners: {
                    exception: {
                        fn: me.onAjaxException,
                        scope: me
                    }
                }
            }
        }, cfg)]);
    },

    onAjaxException: function(proxy, response, operation, eOpts) {

        if(response.responseText.indexOf(':') != -1){
           Ext.Msg.alert('결과', response.responseText);
        }

    }

});