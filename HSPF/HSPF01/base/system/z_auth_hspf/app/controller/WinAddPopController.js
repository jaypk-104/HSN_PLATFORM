/*
 * File: app/controller/WinAddPopController.js
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

Ext.define('Z_AUTH_HSPF.controller.WinAddPopController', {
	extend : 'Ext.app.Controller',
	stores : [ 'WinAddPopStore' ],
	control : {
		"#pSelBtn" : {
			click : 'pSelBtnClick'
		},
		"#pAddBtn" : {
			click : 'pAddBtnClick'
		},
	},

	pSelBtnClick : function(button, e, eOpts) {
		var store = this.getWinAddPopStoreStore();
		store.removeAll();
		store.load({
			params : {
				V_TYPE : 'P',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_ROLE_CD : Ext.getCmp('V_ROLE_CD').getValue(),
				V_P_PGM_ID : Ext.getCmp('V_P_PGM_ID').getValue(),
				V_P_PGM_NM : Ext.getCmp('V_P_PGM_NM').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	pAddBtnClick : function(button, e, eOpts) {
		var myStore = Ext.getStore('MyStore');
		var winPopStore = this.getWinAddPopStoreStore();
		var gridRecord = Ext.getCmp('NonGrid').getSelectionModel().getSelection();
		
		for(var i=0; i<gridRecord.length; i++) {
			gridRecord[i].data['V_TYPE'] = 'I';
		}
		
		winPopStore.sync({
			params: {
				S_TYPE: 'I',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_ROLE_CD : Ext.getCmp('V_ROLE_CD').getValue(),
			},
			callback: function(records, operation, success) {
				myStore.reload();
			}
		})

		var win = Ext.WindowManager.getActive();
		if (win) {
			win.close();
		}
	}

});
