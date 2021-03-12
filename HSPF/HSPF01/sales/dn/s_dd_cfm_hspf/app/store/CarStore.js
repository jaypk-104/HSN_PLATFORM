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

Ext.define('S_DD_CFM_HSPF.store.CarStore', {
    extend: 'Ext.data.Store',

    requires: [
        'S_DD_CFM_HSPF.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'CarStore',
            model: 'S_DD_CFM_HSPF.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/s_dd_cfm_hspf.jsp',
                },
                reader: {
                    type: 'json',
                    rootProperty: 'resultList'
                },
            }
        }, cfg)]);
    }
});