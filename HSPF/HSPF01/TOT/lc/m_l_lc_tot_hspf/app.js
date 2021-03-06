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
        'MyModel',
        'MyModel1',
    ],
    stores: [
        'MyStore',
        'MyStore1',
        'PopStore',
        'Popup.store.WinMBpPopStore',
    ],
    views: [
        'MyViewport',
        'MyForm',
        'MySearchForm',
        'MyGrid',
        'MyGrid1',
        'TbButton',
        'WinLcPop'
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyGridController1',
        'MyController',
        'LcPopController',
        'Popup.controller.WinMBpPopController',
    ],
    name: 'M_L_LC_TOT_HSPF',

    launch: function() {
        Ext.create('M_L_LC_TOT_HSPF.view.MyViewport');
    }

});
