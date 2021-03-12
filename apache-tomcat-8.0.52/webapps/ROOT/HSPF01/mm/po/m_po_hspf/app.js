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
        'Popup.view.WinPoPopViewModel',
        'Popup.view.WinSBpPopViewModel',
        'Popup.view.WinItemPopViewModel'
    ],
    stores: [
        'MyStore',
        'MyStore1',
        'WinMBpPopStore',
        'Popup.store.WinPoPopStore',
        'Popup.store.WinItemPopStore',
        'Popup.store.WinSBpPopStore'
    ],
    views: [
        'MyViewport',
        'TbButton',
        'WinAddRow',
        'RPoReg',
        'LPurReq',
    ],
    controllers: [
        'TbButtonController',
        'LPurReqController',
        'MyController',
        'WinAddRowController',
        'RPoRegController',
        'WinMBpPopController',
        'Popup.controller.WinPoPopController',
        'Popup.controller.WinItemPopController',
        'Popup.controller.WinSBpPopController'
    ],
    name: 'M_PO_HSPF',

    launch: function() {
        Ext.create('M_PO_HSPF.view.MyViewport');
    }

});
