/*
 * File: app/controller/MainController.js
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

Ext.define('HSPF_REQ_BOARD.controller.MainController', {
    extend: 'Ext.app.Controller',

    onLaunch: function(application) {
        var store = this.getStore('MainStore');
        store.load({
            params: {
                V_COMP_ID : 'HSN',
                V_TYPE : 'S',
                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
            }
        });


        Ext.getCmp('list_container').show();
        Ext.getCmp('board_container').hide();
        Ext.getCmp('write_container').hide();

        Ext.getCmp('list_container').setWidth(Ext.getBody().getViewSize().width);
        Ext.getCmp('list_container').setHeight(Ext.getBody().getViewSize().height);
    }

});
