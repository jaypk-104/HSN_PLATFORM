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

});


Ext.application({
    models: [
        'MyModel'
    ],
    stores: [
        'MyStore',
        'MyStore1',
        'MyStore2'
    ],
    views: [
        'MyViewport',
        'MyGrid',
        'MySearchForm',
        'TbButton',
        'WinAddRow',
        'MyGrid1',
        'MyGrid2'
    ],
    controllers: [
        'TbButtonController',
        'MyGridController',
        'MyController',
        'WinAddRowController',
        'MyGridController1',
        'MyGridController2'
    ],
    name: 'M_PO_PLAN_LOCAL_HSPF',

    launch: function() {
        Ext.create('M_PO_PLAN_LOCAL_HSPF.view.MyViewport');
    }

});
