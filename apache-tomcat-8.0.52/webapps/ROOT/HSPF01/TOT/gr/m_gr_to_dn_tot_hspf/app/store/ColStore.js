/*
 * File: app/store/MyStore1.js
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

Ext.define('M_GR_TO_DN_TOT_HSPF.store.ColStore', {
    extend: 'Ext.data.Store',

    requires: [
        'M_GR_TO_DN_TOT_HSPF.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ColStore',
            model: 'M_GR_TO_DN_TOT_HSPF.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: '/HSPF01/HSPF02/mm2/po/m_col_distb/sql/M_COL_DISTB.jsp',
                    create: '/HSPF01/HSPF02/mm2/po/m_col_distb/sql/M_COL_DISTB.jsp',
                    destroy: '/HSPF01/HSPF02/mm2/po/m_col_distb/sql/M_COL_DISTB.jsp',
                    update: '/HSPF01/HSPF02/mm2/po/m_col_distb/sql/M_COL_DISTB.jsp'
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