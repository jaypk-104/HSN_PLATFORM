/*
 * File: app/view/MyPanel2ViewController.js
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

Ext.define('M_SL_TRANS_STEEL.view.MyPanel2ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mypanel2',

    onDatefieldRender2: function(component, eOpts) {


        var nows = new Date();
        nows.setDate(1);
        component.setValue(nows);
    },

    onDatefieldRender11: function(component, eOpts) {

        var nows = new Date();
        component.setValue(nows);

    }

});
