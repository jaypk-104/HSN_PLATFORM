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

Ext.define('M_BC_DISTB.controller.WinPopController', {
	extend : 'Ext.app.Controller',
	stores : [ 'ArPopStore', ],

	control : {
		"#w_selBtn1" : {
			click : 'w_selBtn1Click'
		},
		'#w_saveBtn1' : {
			click : 'w_saveBtn1Click'
		},
		'#arPopGrid' : {
			celldblclick : 'w_arPopGridDblClick'
		},
	},

	w_selBtn1Click : function(button, e, eOpts) {
		var popStore = Ext.getStore('ArPopStore');
		popStore.load({
			params : {
				V_TYPE : 'T1D1',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_DT_FR : Ext.getCmp('W_DT_FR').getValue(),
				V_DT_TO : Ext.getCmp('W_DT_TO').getValue(),
				V_DEPT_CD : '5124',
				V_BP_CD : Ext.getCmp('W3_S_BP_CD').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	w_saveBtn1Click : function(button, e, eOpts) {
		var popStore = Ext.getStore('ArPopStore');
		
		Ext.Msg.confirm('확인', '저장하시겠습니까?', function(btn) {
			if (btn == 'yes') {

				Ext.Ajax.request({
					url : '/HSPF01/HSPF02/mm2/po/m_col_distb/sql/A_AR_RECEIPT.jsp',
					method : 'post',
					params : {
						V_TYPE : 'WH_COL',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
						V_CLS_DT : Ext.getCmp('V_COL_DT').getValue(),
						V_BP_CD : Ext.getCmp('W3_S_BP_CD').getValue(),
						V_DEPT_CD : '5124',
						V_CUR : 'KRW',
						V_MAST_DB_NO : Ext.getCmp('V_MAST_DB_NO').getValue(),
					},
					success : function(response) {
						var res = response.responseText;

						// 정상등록
						if (res.match('CR') || res.match('UPDATE')) {
							if (res.match('CR')) {
								Ext.getCmp('V_CLS_AR_NO').setValue(res);
							}
							
							popStore.each(function(rec, idx) {
								if (rec.isDirty()) {
									rec.set('V_TYPE', 'I');
								}
							});
							
							popStore.sync({
								params : {
									V_TYPE : 'WD_COL',
									V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
									V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
									V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
									V_CLS_DT : Ext.getCmp('V_NEW_COL_DT').getValue(),
									V_CUR : 'KRW',
									V_MAST_DB_NO : Ext.getCmp('V_NEW_MAST_DB_NO').getValue(),
								},
								callback : function(records, operation, success) {
									popStore.removeAll();
									
									var popWin = button.up().up();
									popWin.destroy();
									
									Ext.toast({
		    							title : ' ',
		    							timeout : 1000,
		    							html : '저장완료',
		    							style : 'text-align: center',
		    							align : 't',
		    							width : 130,
		    						});
								}
							});
						} else {
							Ext.Msg.alert('확인', res);
						}
					}
				});
			}
		});
		
	},
	
	w_arPopGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var gridRecord = Ext.getCmp('colGrid').getSelectionModel().getSelection()[0]; 
		
		gridRecord.set('BC_NO',record.get('BC_NO'));
		gridRecord.set('COL_AMT',record.get('REMAIN_AMT'))
		gridRecord.set('REMAIN_AMT',record.get('REMAIN_AMT'))
		
		var arPopStore = Ext.getStore('ArPopStore');
		arPopStore.removeAll();

		var popWin = tableview.up().up();
		popWin.destroy();
	},

//	w_popGrid1DblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
//		Ext.getCmp('V_CLS_AR_NO').setValue(record.get('CLS_AR_NO'));
//
//		var tbController = A_AR_RECEIPT.app.getController("TbButtonController");
//		tbController.selBtnClick();
//
//		var popStore1 = this.getPopStore1Store();
//		popStore1.removeAll();
//
//		var popWin = tableview.up().up();
//		popWin.destroy();
//	},

});
