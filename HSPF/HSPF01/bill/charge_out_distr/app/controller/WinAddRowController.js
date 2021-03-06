/*
 * File: app/controller/WinAddRowController.js
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

Ext.define('M_CHARGE_OUT_DISTR2.controller.WinAddRowController', {
    extend: 'Ext.app.Controller',

    control: {
        "#W_D_addBtn": {
            click: 'W_D_addBtnClick'
        },
        "#W_D_selectBtn": {
            click: 'W_D_selectBtnClick'
        },
        "[cls=W_D_search]": {
            specialkey: 'onTextfieldSpecialkey'
        },
        "#W_D_grid": {
            celldblclick: 'onGridpanelCellDblClick'
        }
    },

    W_D_addBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');

        var newChargeGrid = Ext.getCmp('W_D_grid');
        var newGridRecord = newChargeGrid.getSelectionModel().getSelection();

        var oldRecord = store.getRange();

        var msg = '';

        for(var i=0; i<newGridRecord.length; i++) {
            var rec = Ext.create('M_CHARGE_OUT_DISTR2.model.MyModel', {
                CHARGE_TYPE: newGridRecord[i].data['CHARGE_TYPE'],
                CHARGE_NAME: newGridRecord[i].data['CHARGE_NAME'],
                REG_NO : ''
            });
            store.insert(oldRecord.length+1, rec);
            msg += newGridRecord[i].data['CHARGE_TYPE'] + ' ' + newGridRecord[i].data['CHARGE_NAME'] + ' 추가 완료.<br>';
        }



        var win = Ext.WindowManager.getActive();
        if(win){
            win.close();
        }

        Ext.Msg.alert('확인',msg);
    },

    W_D_selectBtnClick: function(button, e, eOpts) {
        var grid = Ext.getCmp('W_D_grid');
        var store =grid.getStore();

        store.load({
            params:{
                V_TYPE : 'W_D_S',
                V_CHARGE_NM : Ext.getCmp('W_D_CHARGE_NM').getValue(),
            }
        });
    },

    onTextfieldSpecialkey: function(field, e, eOpts) {
        if (e.getKey() == e.ENTER) {
            this.W_D_selectBtnClick();
        }
    },

    onGridpanelCellDblClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        this.W_D_addBtnClick();
    }

});
