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
        'MyModel'
    ],
    stores: [
        'MyStore',
        'Popup.store.WinMBpPopStore',
        'Popup.store.WinItemPopStore',
    ],
    views: [
        'MyViewport',
        'MyGrid',
        'MySearchForm',
        'TbButton',
        'WinAddRow'
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyController',
        'WinAddRowController',
        'Popup.controller.WinMBpPopController',
        'Popup.controller.WinItemPopController',
    ],
    name: 'I_BARCD_REPRINT',

    launch: function() {
        Ext.create('I_BARCD_REPRINT.view.MyViewport');
    }

});
