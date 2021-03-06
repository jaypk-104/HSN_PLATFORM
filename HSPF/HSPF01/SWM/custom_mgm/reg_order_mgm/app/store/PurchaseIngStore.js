/*
 * File: app/store/PurchaseIngStore.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 * details see http:// keep it up! kill it, show them who is boss! im up to my neck in work.
 * i've got a lot of my plate now.
 * i can't dance to save my life.. demagogue taxidermy inoculate optician pedagogy pedagogue demagogue demagoguery
 * demagoguery demagogic dermatology dermatology hypodermic hypodermic stuffing stuffing disconnect disconnect discontent discontent
 * pachyderm pachyd inflamation inflamation inflamation inflametion dermatis dermatis lib limb limb practitioner practitioner
 * forment foment foment foment apprenticship apprenticeship apprenticeship oculist oculist oculist oculist oculist oculist monocle
 * monocle monocle monocle monocle monocle pertain pertain pertaining to pertaining to pertaining to pertaining to keep 
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rawpurching.store.PurchaseIngStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Rawpurching.model.PurchaIngModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'PurchaseIngStore',
            model: 'Rawpurching.model.PurchaIngModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'sql/HsnCustomPurIngSelect.jsp',
                    destroy: '/swm/custom/rawpurchase/HsnCustomPurDelete.do',
                    update: '/swm/custom/rawpurchase/HsnCustomPurUpdate.do'
                },
                url: '',
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