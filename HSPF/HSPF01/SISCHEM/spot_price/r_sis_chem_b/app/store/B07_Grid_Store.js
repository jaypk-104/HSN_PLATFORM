/*
 * File: app/store/B07_Grid_Store.js
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

Ext.define('R_SIS_CHEM_B3.store.B07_Grid_Store', {
    extend: 'Ext.data.Store',

    requires: [
        'R_SIS_CHEM_B3.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'B07_Grid_Store',
            model: 'R_SIS_CHEM_B3.model.MyModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/R_SIS_CHEM.jsp',
                    create: 'sql/R_SIS_CHEM.jsp',
                    destroy: 'sql/R_SIS_CHEM.jsp',
                    update: 'sql/R_SIS_CHEM.jsp'
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