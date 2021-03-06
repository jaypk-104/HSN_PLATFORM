/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
	 paths : {
	        'Popup' : '/HSPF01/common/popup/app/'
},
});


Ext.application({
    models: [
        'MyModel'
    ],
    stores: [
        'MyStore',
        'MyStore1',
        'RefStore',
        'RefStore2',
        'Popup.store.WinMBpPopStore',
        'Popup.store.WinBpPopStore',
        'Popup.store.WinSBpPopStore',
        'Popup.store.ItemStore',
        'PoBaseInfoStore',        
    ],
    views: [
        'MyViewport',
        'TbButton',
        'MyForm',
        'MyGrid',
        'WinAddRow',
        'MyWindow'
    ],
    controllers: [
        'TbButtonController',
        'MyGridController1',
        'MyGridController',
        'WinAddRowController',
        'RefWindowController',
        'RemarkWindowController',
    ],
    name: 'M_PO_TOT_MGM',

    launch: function() {
        Ext.create('M_PO_TOT_MGM.view.MyViewport');
    }

});
