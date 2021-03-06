/*
 * File: app/store/RawPurStore.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('rawpurchase.store.RawPurStore', {
    extend: 'Ext.data.Store',

    requires: [
        'rawpurchase.model.RawPurModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'RawPurStore',
            model: 'rawpurchase.model.RawPurModel',
            proxy: {
                type: 'ajax',
                api: {
                    // create: '/swm/bitemmgm/HsnMBitemManageInsrt.do',
                    read: 'sql/HsnCustomPurSelect.jsp',
                    // destroy: '/swm/bitemmgm/HsnMBitemManageDelete.do',
                    // update: '/swm/bitemmgm/HsnMBitemManageInsrt.do'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'resultList'
                }
            }
        }, cfg)]);
    }
});