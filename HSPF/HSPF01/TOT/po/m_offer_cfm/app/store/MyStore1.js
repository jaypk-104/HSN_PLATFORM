/*
 * File: app/store/MyStore.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('M_OFFER_CFM.store.MyStore1', {
    extend: 'Ext.data.Store',

    requires: [
        'M_OFFER_CFM.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore1',
            model: 'M_OFFER_CFM.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/M_OFFER_CFM.jsp',
                    create: 'sql/M_OFFER_CFM.jsp',
                    destroy: 'sql/M_OFFER_CFM.jsp',
                    update: 'sql/M_OFFER_CFM.jsp'
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