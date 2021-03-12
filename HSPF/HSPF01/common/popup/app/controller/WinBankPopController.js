/*
 * File: app/controller/WinBpPopController.js
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

Ext.define('Popup.controller.WinBankPopController', {
	extend : 'Ext.app.Controller',

	views: ['WinBankPop'],
	stores: ['WinBankPopStore'],
	control : {
		"#bankSelBtn" : {
			click : 'bankSelBtnClick'
		},
		"#WinBankGrid" : {
			beforecelldblclick : 'cellDblClick'
		},
		"winbankpop textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		}
	},

	bankSelBtnClick : function(button, e, eOpts) {
		var store = this.getWinBankPopStoreStore();
		store.removeAll();
		store.load({
			params : {
				V_TYPE : 'BP',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				W_BANK_CD : Ext.getCmp('W_BANK_CD').getValue(),
				W_BANK_NM : Ext.getCmp('W_BANK_NM').getValue()
			},
			callback : function(records, operations, success) {
			}
		});
	},

	cellDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var BANK_CD = record.get('BANK_CD');
		var BANK_NM = record.get('BANK_NM');
		
		var gridRecord =  Ext.getCmp('myGrid');
		gridRecord.actionables['0'].context.record.set('BANK_CD', BANK_CD);
		gridRecord.actionables['0'].context.record.set('BANK_NM', BANK_NM);

		var popWin=  Ext.getCmp('WinBankPop');
		popWin.destroy();
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.bankSelBtnClick();
		}
	},
	
});