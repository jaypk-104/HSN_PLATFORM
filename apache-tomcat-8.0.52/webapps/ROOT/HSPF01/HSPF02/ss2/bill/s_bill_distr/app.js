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
        'Popup.store.WinBpPopStore',
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
        'MyGridController1',
        'MyGridController',
        'PopController',
        'Popup.controller.WinSBpPopController',
        'Popup.controller.WinBpPopController',
    ],
    name: 'S_BILL_DISTR',

    launch: function() {
        Ext.create('S_BILL_DISTR.view.MyViewport');
    }

});
