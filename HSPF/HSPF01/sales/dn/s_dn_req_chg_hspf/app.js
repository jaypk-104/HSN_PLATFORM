/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({
	paths : {
        'Popup' : '/HSPF01/common/popup/app/'
    },
});


Ext.application({
    models: [
        'MyModel',
        'MyModel1'
    ],
    stores: [
        'MyStore',
        'MyStore1',
        'Popup.store.WinMBpPopStore',
        'Popup.store.WinSBpPopStore'
    ],
    views: [
        'MyViewport',
        'MyGrid',
        'MySearchForm',
        'TbButton',
        'WinDiv',
        'WinAppend'
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyController',
        'WinAddRowController',
        'Popup.controller.WinMBpPopController',
        'Popup.controller.WinSBpPopController'
    ],
    name: 'S_REQ_DN_CHG',

    launch: function() {
        Ext.create('S_REQ_DN_CHG.view.MyViewport');
    }

});
