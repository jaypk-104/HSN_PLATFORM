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
        'MyStore4',
        'MyStore5',
        'MyStore6',
        'MyStore7',
        'PopStore',
        'PopStore1',
        'PopStore2',
        'PopStore3',
        'CalcStore',
        'CalcStore1',
        'CalcStore2',
        'CostStore',
        'DeptStore',
        'ArrayStore',
        'FileStore',
        'Popup.store.WinBpPopStore',
    ],
    views: [
        'MyViewport',
        'TbButton',
        'MyForm',
        'MyForm1',
        'MyPanel',
        'MyPanel1',
        'MyPanel2',
        'MyPanel3',
        'MyPanel4',
        'MyPanel5',
        'MyPanel6',
        'MyWindow',
        'MyWindow1',
        'MyWindow2',
        'MyWindow3',
        'FileWindow',
        'WinAddRow',
        'WinAddRow1',
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyGridController1',
        'MyGridController2',
        'WinPopController',
        'WinAddRowController',
        'WinAddRowController1',
        'FileGridController',
        'Popup.controller.WinBpPopController',
    ],
    name: 'A_AR_RECEIPT',

    launch: function() {
        Ext.create('A_AR_RECEIPT.view.MyViewport');
    }

});
