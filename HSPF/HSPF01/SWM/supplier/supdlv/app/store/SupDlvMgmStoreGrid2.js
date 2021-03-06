/*
 * File: app/store/SupDlvMgmStoreGrid2.js
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

Ext.define('SupDlvMgm.store.SupDlvMgmStoreGrid2', {
    extend: 'Ext.data.Store',

    requires: [
        'SupDlvMgm.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SupDlvMgmStoreGrid2',
            model: 'SupDlvMgm.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/SupDlvMgmSqlGrid1.jsp',
                    //create: 'sql/z_role_hspf_trans.jsp',
                    //destroy: 'sql/z_role_hspf_trans.jsp',
                    //update: 'sql/z_role_hspf_trans.jsp'
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