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
    	'M_BL_HSPF' : '/HSPF01/mm/td/m_bl_hspf/app/',
    	'M_LC_HSPF' : '/HSPF01/mm/td/m_lc_hspf/app/',
    	'M_IMPORT_HSPF' : '/HSPF01/mm/td/m_import_hspf/app/',
    	'M_CC_HSPF' : '/HSPF01/mm/td/m_cc_hspf/app/',
    	'M_PUR_CHARGE_HSPF' : '/HSPF01/mm/td/m_pur_charge_hspf/app/'
    },
});


Ext.application({
    models: [
        'MyModel'
    ],
    stores: [
        'MyStore',
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
    ],
    name: 'M_TR_HSPF',

    launch: function() {
        Ext.create('M_TR_HSPF.view.MyViewport');
    }

});
