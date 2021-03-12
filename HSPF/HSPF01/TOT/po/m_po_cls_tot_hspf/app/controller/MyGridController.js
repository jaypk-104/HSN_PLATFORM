/*
 * File: app/controller/MyGridController.js
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

Ext.define('M_PO_CLS_TOT_HSPF.controller.MyGridController', {
	extend : 'Ext.app.Controller',

	control : {
		"#gridClsBtn" : {
			click : 'gridClsBtnClick'
		},
		"#gridCancelBtn" : {
			click : 'gridCancelBtnClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		},
	},

	gridClsBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
	
		if(gridRecord.length < 1){
			Ext.Msg.alert('확인', '선택된 행이 없습니다.');
			return;
		}
			
		for (var i = 0; i < gridRecord.length; i++) {
			gridRecord[i].set('V_TYPE', 'CLS');
		}
		
		Ext.Msg.confirm('확인', '마감등록 하시겠습니까?', function(button) {
			if (button == 'yes') {
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						var tbController = M_PO_CLS_TOT_HSPF.app.getController("TbButtonController");
						tbController.selBtnClick();
					},
					success : function(response) {
						Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '등록완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
						
					}
				});
			}
		});
	},
	
	gridCancelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
	
		if(gridRecord.length < 1){
			Ext.Msg.alert('확인', '선택된 행이 없습니다.');
			return;
		}
			
		for (var i = 0; i < gridRecord.length; i++) {
			gridRecord[i].set('V_TYPE', 'CANCEL');
		}
		
		Ext.Msg.confirm('확인', '마감취소 하시겠습니까?', function(button) {
			if (button == 'yes') {
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						var tbController = M_PO_CLS_TOT_HSPF.app.getController("TbButtonController");
						tbController.selBtnClick();
					},
					success : function(response) {
						Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '취소완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
						
					}
				});
			}
		});
	},
	
	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '발주마감관리', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	},

});
