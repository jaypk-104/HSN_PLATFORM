/*
 * File: app/controller/MyGridController1.js
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

Ext.define('M_LOCAL_LC_MGM.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#lcRegBtn" : {
			click : 'lcRegBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		}
	},

	lcRegBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		

		if (Ext.getCmp('V_LC_DOC_NO').getValue() == '') {
			flag = 'F';
			msg = 'Local L/C 관리번호를 입력하세요.';
		} else if (Ext.getCmp('V_BANK_CD').getValue() == null) {
			flag = 'F';
			msg = '개설은행을 선택하세요.';
		} else if (Ext.getCmp('V_OPEN_DT').getValue() == null) {
			flag = 'F';
			msg = '개설신청일을 입력하세요.';
		} else if (Ext.getCmp('V_EXPIRY_DT').getValue() == null) {
			flag = 'F';
			msg = '유효일을 입력하세요.';
		} else if (Ext.getCmp('V_CUR').getValue() == null) {
			flag = 'F';
			msg = '통화를 선택하세요.';
		} else {
			flag = 'T';
		}
		
		for(var i=0; i<gridRecord.length; i++) {
			if(gridRecord[i].get('LC_NO') != undefined) {
				flag = 'F';
				msg = 'LC등록 된 항목이 존재합니다.';
				break;
			}
		}
		
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', '등록하시겠습니까?', function(button) {
				if (button == 'yes') {

					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

					
					for(var i=0; i<gridRecord1.length; i++) {
						if(gridRecord1[i].get('V_TYPE2') == 'V') {
							gridRecord[i].set('V_TYPE', 'SI');
							gridRecord1[i].set('V_TYPE2', 'DI');
						}
					}
					
					store1.sync({
						params : {
							V_TYPE : 'SYNC',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_LC_DOC_NO : Ext.getCmp('V_LC_DOC_NO').getValue(),
							V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
							V_XCH_RATE : Ext.getCmp('V_XCH_RATE').getValue(),
							V_OPEN_DT : Ext.getCmp('V_OPEN_DT').getValue(),
							V_EXPIRY_DT : Ext.getCmp('V_EXPIRY_DT').getValue(),
							V_AMEND_DT : Ext.getCmp('V_AMEND_DT').getValue(),
							V_CUR : Ext.getCmp('V_CUR').getValue(),
						},
						callback : function(records, operation, success) {
							store.reload();
							store1.removeAll();
						}, 
						success: function() {
							
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}

	},

	gridDelBtnClick : function(button, e, eOpts) {
		
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var flag = '';
		var msg = '';
		
		var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		
		Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
			if (button == 'yes') {

				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

				
				for(var i=0; i<gridRecord1.length; i++) {
					if(gridRecord1[i].get('V_TYPE2') == 'V') {
//						gridRecord[i].set('V_TYPE', 'SI');
						gridRecord1[i].set('V_TYPE2', 'DD');
					}
				}
				
				store1.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_LC_DOC_NO : Ext.getCmp('V_LC_DOC_NO').getValue(),
						V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
						V_XCH_RATE : Ext.getCmp('V_XCH_RATE').getValue(),
						V_OPEN_DT : Ext.getCmp('V_OPEN_DT').getValue(),
						V_EXPIRY_DT : Ext.getCmp('V_EXPIRY_DT').getValue(),
						V_AMEND_DT : Ext.getCmp('V_AMEND_DT').getValue(),
						V_CUR : Ext.getCmp('V_CUR').getValue(),
					},
					callback : function(records, operation, success) {
						store.reload();
						store1.reload();
					}, 
					success: function() {
					}
				});
			}
		});
	},

});
