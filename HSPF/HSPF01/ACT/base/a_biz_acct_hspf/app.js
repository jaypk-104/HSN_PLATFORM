/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
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
        'Popup.store.WinBpPopStore',
    ],
    views: [
        'MyViewport',
        'MyGrid',
        'TbButton',
        'WinAddRow',
        'MyForm',
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyController',
        'WinAddRowController',
        'Popup.controller.WinBpPopController',
    ],
    name: 'A_BIZ_ACCT_HSPF',

    launch: function() {
        Ext.create('A_BIZ_ACCT_HSPF.view.MyViewport');
    }

});
