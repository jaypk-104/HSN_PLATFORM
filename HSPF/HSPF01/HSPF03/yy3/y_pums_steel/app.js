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
        'MyStore2',
        'MyStore3',
        'PopStore',
        'PopStore_w',
        'Popup.store.WinSBpPopStore'
    ],
    views: [
        'MyViewport',
        'TbButton',
        'MyForm',
        'MyGrid',
        'WinAddRow',
        'WinRiskPop',
    ],
    controllers: [
        'TbButtonController',
        'MyGridController1',
        'MyGridController',
        'WinAddRowController',
        'RiskPopController',
        'Popup.controller.WinSBpPopController'
    ],
    name: 'Y_PUMS_STEEL',

    launch: function() {
        Ext.create('Y_PUMS_STEEL.view.MyViewport');
    }

});
