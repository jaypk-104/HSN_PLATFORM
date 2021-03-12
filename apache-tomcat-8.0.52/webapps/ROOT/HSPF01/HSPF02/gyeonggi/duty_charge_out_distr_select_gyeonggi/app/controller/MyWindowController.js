/*
 * File: app/controller/MyWindowController.js
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

Ext.define('DUTY_CHARGE_OUT_DISTR_SELECT_GYEONGGI.controller.MyWindowController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore'
    ],

    control: {
        "#W_HSPFSendBtn": {
            click: 'W_HSPFSendBtnClick'
        }
    },

    W_HSPFSendBtnClick: function(button, e, eOpts) {
        var store = this.getMyStoreStore();
        Ext.Msg.confirm('확인','전송 하시겠습니까?', function(button){
            if(button == 'yes') {
                Ext.Ajax.request({
                    url:'sql/duty_charge_out_distr_select.jsp',
                    method: 'post',
                    params: {
                        V_TYPE: 'W_SEND',
                        V_M_CHARGE_NO: Ext.getCmp('W_M_CHARGE_NO').getValue(),
                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),

                    },
                    callback : function(records,operations,success){
                        Ext.getCmp('S_ERP_LC_NO').setValue(Ext.getCmp('W_LC_NO').getValue());
                        Ext.getCmp('S_ERP_BL_NO').setValue(Ext.getCmp('W_BL_NO').getValue());
                        Ext.getCmp('S_ERP_BL_SEQ').setValue(Ext.getCmp('W_BL_SEQ').getValue());
                        Ext.getCmp('W_HSPFSendBtn').setDisabled(true);
                        store.reload();
                    },
                    success : function(response) {

                    },
                    scope: this
                });
            }
        });
    }

});
