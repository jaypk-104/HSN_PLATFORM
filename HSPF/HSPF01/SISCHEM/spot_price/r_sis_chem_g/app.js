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
        'G01_Grid_Store',
        'G02_Grid_Store',
        'G03_Grid_Store',
        'G04_Grid_Store',
        'G05_Grid_Store',
        'G06_Grid_Store',
        'G07_Grid_Store',
        'G08_Grid_Store',
        'G09_Grid_Store'
    ],
    views: [
        'MySearchForm',
        'MyViewport',
        'TbButton'
    ],
    controllers: [
        'MyGridController',
        'TbButtonController'
    ],
    name: 'R_SIS_CHEM_G2',

    launch: function() {
        Ext.create('R_SIS_CHEM_G2.view.MyViewport');
    }

});
