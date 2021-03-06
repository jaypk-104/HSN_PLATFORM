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

Ext.define('S_COG_INSP_STS_TOT_HSPF.controller.MyGridController', {
	extend : 'Ext.app.Controller',

	control : {
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#gridSaveBtn" : {
			click : 'gridSaveBtnClick'
		},
		"#cfmBtn" : {
			click : 'cfmBtnClick'
		},
		"#cfmCancelBtn" : {
			click : 'cfmCancelBtnClick'
		},
		"#prcUpdateBtn" : {
			click : 'prcUpdateClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		},
	},

	gridAddBtnClick : function(button, e, eOpts) {
		var popup = Ext.create("S_COG_INSP_STS_TOT_HSPF.view.WinAddRow");
		popup.show();
		Ext.getCmp('rowCount').setValue(1);
	},

	gridDelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

		if (gridRecord.length === 0) {
			Ext.Msg.alert('확인', '선택된 행이 없습니다.');
			return;
		}
		
		for(var i=0; i<gridRecord.length; i++) {
			if(gridRecord[i].get('V_TYPE') == 'V') {
				gridRecord[i].set('V_TYPE', 'D');
			}
		}

		Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
			if (button == 'yes') {
				store.sync({
					params : {
						V_TYPE : 'DD',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						var tbController = S_COG_INSP_STS_TOT_HSPF.app.getController("TbButtonController");
			    		tbController.selBtnClick();
					},
					success : function(response) {
						Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '삭제완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
					}
				});
			}
		});
	},

	gridSaveBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = 'T';
		
		store.each(function(rec, idx) {
			 if(rec.get('CFM_YN') == 'Y') {
				flag = 'F';
				return;
			 }
		});
		
		if(falg == 'F'){
			Ext.Msg.alert('확인', '확정된 정보가 존재합니다.');
			return;
		}

		if (gridRecord.length > 0) {
			Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
				if (button == 'yes') {
					store.sync({
						params : {
							V_TYPE : 'ID',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							var tbController = S_COG_INSP_STS_TOT_HSPF.app.getController("TbButtonController");
				    		tbController.selBtnClick();
						},
						success : function(response) {
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
				}
			});
		}
	},
	
	cfmBtnClick : function(button, e, eOpts) {
		Ext.Msg.confirm('확인', '확정하시겠습니까?', function(button) {
			if (button == 'yes') {
				Ext.Ajax.request({
					url : 'sql/S_COG_INSP_STS_TOT_HSPF.jsp',
					method : 'post',
					params : {
						V_TYPE: 'C',
		    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
		    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
		    			V_YYYYMM: Ext.getCmp('V_YYYYMM').getValue(),
					},
					callback : function(records, operation, success) {
						var tbController = S_COG_INSP_STS_TOT_HSPF.app.getController("TbButtonController");
			    		tbController.selBtnClick();
					},
					success : function(response) {
						Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '확정완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
					}
				})
			}
		});		
	},
	
	cfmCancelBtnClick : function(button, e, eOpts) {
		Ext.Msg.confirm('확인', '확정취소하시겠습니까?', function(button) {
			if (button == 'yes') {
				Ext.Ajax.request({
					url : 'sql/S_COG_INSP_STS_TOT_HSPF.jsp',
					method : 'post',
					params : {
						V_TYPE: 'X',
		    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
		    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
		    			V_YYYYMM: Ext.getCmp('V_YYYYMM').getValue(),
					},
					callback : function(records, operation, success) {
					},
					success : function(response) {
						if(response.responseText == 'SUCCESS'){
							var tbController = S_COG_INSP_STS_TOT_HSPF.app.getController("TbButtonController");
				    		tbController.selBtnClick();
				    		
							Ext.toast({
								title : ' ',
								timeout : 1000,
								html : '확정취소완료',
								style : 'text-align: center',
								align : 't',
								width : 130,
							});
						} else if(response.responseText == 'FAIL'){
							Ext.Msg.alert('확인', '매출확정된 정보가 존재합니다.');
						} else {
							Ext.Msg.alert('확인', '확정취소 실패!');
						}
						
					}
				})
			}
		});		
	},
	
	prcUpdateClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = 'T';
		
		store.each(function(rec, idx) {
			 if(rec.get('CFM_YN') == 'Y') {
				flag = 'F';
				return;
			 } else if (rec.dirty == true){
				 rec.set('V_TYPE', 'PRC');
			 }
		});
		
		if(flag == 'F'){
			Ext.Msg.alert('확인', '확정된 정보가 존재합니다.');
			return;
		}

		if (gridRecord.length > 0) {
			Ext.Msg.confirm('확인', '단가수정 하시겠습니까?', function(button) {
				if (button == 'yes') {
					store.sync({
						params : {
							V_TYPE : 'SYNC2',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_YYYYMM: Ext.getCmp('V_YYYYMM').getValue(),
						},
						callback : function(records, operation, success) {
							var tbController = S_COG_INSP_STS_TOT_HSPF.app.getController("TbButtonController");
				    		tbController.selBtnClick();
						},
						success : function(response) {
							Ext.toast({
								title : ' ',
								timeout : 1000,
								html : '단가수정완료',
								style : 'text-align: center',
								align : 't',
								width : 130,
							});
						}
					});
				}
			});
		}
	},
	
	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '소재원부자재원가도출현황', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	},

});
