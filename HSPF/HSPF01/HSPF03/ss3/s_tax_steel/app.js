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
        'PopStore',
        'Popup.store.WinSBpPopStore',
        'Popup.store.WinMBpPopStore',
        'Popup.store.WinBpPopStore',
        'Popup.store.WinBillPopStore',
        'Popup.store.WinBillEmpPopStore'
    ],
    views: [
        'MyViewport',
        'TbButton',
        'MyForm',
        'MyGrid',
        'MyGrid1'
    ],
    controllers: [
        'TbButtonController',
        'PopController',
        'MyGridController1',
        'MyGridController',
        'Popup.controller.WinSBpPopController',
        'Popup.controller.WinMBpPopController',
        'Popup.controller.WinBpPopController',
        'Popup.controller.WinBillPopController',
    ],
    name: 'S_TAX_STEEL',

    launch: function() {
        Ext.create('S_TAX_STEEL.view.MyViewport');
    }

});
