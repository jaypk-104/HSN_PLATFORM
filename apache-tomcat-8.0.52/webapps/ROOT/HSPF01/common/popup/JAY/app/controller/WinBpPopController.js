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

Ext.define('Popup.controller.WinBpPopController', {
	extend : 'Ext.app.Controller',

	views: ['WinBpPop'],
	stores: ['WinBpPopStore'],
	control : {
		"#bpSelBtn" : {
			click : 'bpSelBtnClick'
		},
		"#WinBpGrid" : {
			beforecelldblclick : 'cellDblClick'
		},
		"winbppop textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		}
	},

	bpSelBtnClick : function(button, e, eOpts) {
		var store = this.getWinBpPopStoreStore();
		store.removeAll();
		store.load({
			params : {
				V_TYPE : 'BP',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				W_BP_CD : Ext.getCmp('W_BP_CD').getValue(),
				W_BP_NM : Ext.getCmp('W_BP_NM').getValue()
			},
			callback : function(records, operations, success) {
			}
		});
	},

	cellDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var BP_CD = record.get('BP_CD');
		var BP_NM = record.get('BP_NM');
		
		if(Ext.getCmp('fieldType').getValue() == 'textfield') {
			Ext.getCmp('V_BP_CD').setValue(BP_CD);
		}
		else if(Ext.getCmp('fieldType').getValue() == 'Z_USR_INFO_HSPF') { //사용자등록
			var gridRecord =  Ext.getCmp('myGrid');
			gridRecord.actionables['0'].context.record.set('BP_CD', BP_CD);
			gridRecord.actionables['0'].context.record.set('BP_NM', BP_NM);
		} else {
			var BP_CD = record.get('BP_CD');
			var BP_NM = record.get('BP_NM');
			var gridRecord =  Ext.getCmp('myGrid').editingPlugin.getEditor();
			var index = gridRecord.activeField.column.fullColumnIndex;
			
			gridRecord.items.items[index].setValue(BP_CD);
			gridRecord.items.items[index+1].setValue(BP_NM);
		}
		
		var popWin=  Ext.getCmp('WinBpPop');
		popWin.destroy();
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.bpSelBtnClick();
		}
	},
	
});
