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

});


Ext.application({
    models: [
        'MyModel'
    ],
    stores: [
        'MyStore',
        'WindowStore',
        'FileStore',
        'PayStore',
        'ERPYNStore',
        'GLYNStore'
    ],
    views: [
        'MyViewport',
        'MyGrid',
        'MySearchForm',
        'TbButton',
        'WinAddRow',
        'MyWindow'
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyController',
        'WinAddRowController',
        'FileGridController',
        'MyWindowController'
    ],
    name: 'CHARGE_OUT_DISTR_SELECT_SAMHYUN',

    launch: function() {
        Ext.create('CHARGE_OUT_DISTR_SELECT_SAMHYUN.view.MyViewport');
    }

});