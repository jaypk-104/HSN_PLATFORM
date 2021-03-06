/*
 * File: app/controller/WinAddRowController.js
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

Ext.define('M_BL_CHG_STEEL.controller.WinBlPopController', {
	extend : 'Ext.app.Controller',
	
	views: ['WinBlPop'],
	stores : [ 'PopStore' ],

	control : {
		"#popSelBtn" : {
			click : 'popSelBtnClick'
		},
		'#popRegBtn' : {
			click : 'popRegBtnClick'
		},
		'#popGrid' : {
			celldblclick : 'popGridDblClick'
		},
		"textfield[name=pop_search]" : {
			specialkey : 'tfEnter'
		},
	},

//	initComponent: function() {
//		debugger;
//		this.popSelBtnClick();
//    },
    
	popSelBtnClick : function(button, e, eOpts) {
		var popStore = this.getPopStoreStore();

		popStore.load({
			params : {
				V_TYPE : 'P',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO2').getValue(),
				V_APPROV_NO : Ext.getCmp('V_APPROV_NO2').getValue(),
				V_APPROV_NM : Ext.getCmp('V_APPROV_NM2').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	popRegBtnClick : function(button, e, eOpts) {
		var popGridRecord = Ext.getCmp('popGrid').getSelectionModel().getSelection();
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection()[0];

		gridRecord.set('BL_NO', popGridRecord[0].get('BL_NO'));
		gridRecord.set('BL_DOC_NO', popGridRecord[0].get('BL_DOC_NO'));
		gridRecord.set('APPROV_NO', popGridRecord[0].get('APPROV_NO'));
		gridRecord.set('APPROV_NM', popGridRecord[0].get('APPROV_NM'));

		var popWin = Ext.getCmp('WinBlPop');
		popWin.destroy();

		Ext.getStore('PopStore').removeAll();
	},

	popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var popGridRecord = Ext.getCmp('popGrid').getSelectionModel().getSelection();
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection()[0];

		gridRecord.set('BL_NO', popGridRecord[0].get('BL_NO'));
		gridRecord.set('BL_DOC_NO', popGridRecord[0].get('BL_DOC_NO'));
		gridRecord.set('APPROV_NO', popGridRecord[0].get('APPROV_NO'));
		gridRecord.set('APPROV_NM', popGridRecord[0].get('APPROV_NM'));

		var popWin = Ext.getCmp('WinBlPop');
		popWin.destroy();

		Ext.getStore('PopStore').removeAll();
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.popSelBtnClick();
		}
	}

});
