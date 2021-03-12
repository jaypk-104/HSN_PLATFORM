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

Ext.define('A_AR_RECEIPT.controller.WinPopController', {
	extend : 'Ext.app.Controller',
	stores : [ 'PopStore', 'PopStore1', 'PopStore2', 'PopStore3' ],

	control : {
		"#w_selBtn" : {
			click : 'w_selBtnClick'
		},
		'#w_regBtn' : {
			click : 'w_regBtnClick'
		},
		'#popGrid' : {
			celldblclick : 'w_popGridDblClick',
			cellclick : 'w_popGridClick',
		},

		"#w_selBtn1" : {
			click : 'w_selBtn1Click'
		},
		'#w_regBtn1' : {
			click : 'w_regBtn1Click'
		},
		'#popGrid1' : {
			celldblclick : 'w_popGrid1DblClick'
		},

		"#w_selBtn2" : {
			click : 'w_selBtn2Click'
		},
		'#w_regBtn2' : {
			click : 'w_regBtn2Click'
		},
		'#popGrid2' : {
			celldblclick : 'w_popGrid2DblClick'
		},
		
		"#w_selBtn3" : {
			click : 'w_selBtn3Click'
		},
		'#w_regBtn3' : {
			click : 'w_regBtn3Click'
		},
//		'#popGrid3' : {
//			celldblclick : 'w_popGrid3DblClick'
//		},
		
		"#popXlsxDown" : {
			click : 'popXlsxDownClick'
		},
		"#popXlsxDown1" : {
			click : 'popXlsxDown1Click'
		},
	},

	w_selBtnClick : function(button, e, eOpts) {
		var popStore = this.getPopStoreStore();
		popStore.load({
			params : {
				V_TYPE : 'RP',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_AR_TYPE : Ext.getCmp('W_AR_TYPE').getValue(),
				V_DT_FR : Ext.getCmp('W_AR_DT_FR').getValue(),
				V_DT_TO : Ext.getCmp('W_AR_DT_TO').getValue(),
				V_DEPT_CD : Ext.getCmp('W_DEPT_CD').getValue(),
				V_BP_CD : Ext.getCmp('W_BP_CD').getValue(),
				V_DT_BS : Ext.getCmp('W_AR_DT_BS').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	w_regBtnClick : function(button, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		var store5 = Ext.getStore('MyStore5');
		var store6 = Ext.getStore('MyStore6');
		var store7 = Ext.getStore('MyStore7');
		var popGrid = Ext.getCmp('popGrid').getSelection();
		var count = store1.getCount();
		var flag = 'T';
		var msg = '';
		var CLS_TYPE = 'B';
		var totalRemainAmt = 0;
		
		for (var i = 0; i < popGrid.length; i++) {
			var selectedArNo = popGrid[i].get('AR_NO');
			var selectedBpCd = popGrid[i].get('S_BP_CD');
			
			totalRemainAmt += popGrid[i].get('BAL_LOC_AMT');
			store1.each(function(rec, idx) {
				var storeArNo = rec.get('AR_NO');
				var storeBpCd = rec.get('BP_CD');
				
				if (selectedArNo == storeArNo) {
					flag = 'F';
					msg = '동일한 채권번호가 이미 존재합니다.';
					return;
				} else if (selectedBpCd != storeBpCd) {
					flag = 'F';
					msg = '등록된 채권과 다른 거래처가 선택되었습니다.';
					return;
				}
			});
		}
		
		store5.each(function(rec, idx) {
			CLS_TYPE = rec.get('REF_TYPE');
			return;
		});

		if (flag == 'F') {
			Ext.Msg.alert('확인', msg);
			return;
		}
		
		if(totalRemainAmt == 0){
			Ext.Msg.alert('확인', '선택된 잔액이 모두 0원 입니다.');
			return;
		}

		for (var i = 0; i < popGrid.length; i++) {
			var record = popGrid[i];
			let AR_NO = record.get('AR_NO');
			let AR_DT = record.get('AR_DT');
			let BP_CD = record.get('S_BP_CD');
			
			if(record.get('BAL_LOC_AMT') == 0) continue;
			
			count += 1;
			var rec = Ext.create('A_AR_RECEIPT.model.MyModel', {
				V_TYPE : 'I',
				AR_TYPE : record.get('AR_TYPE'),
				AR_NO : record.get('AR_NO'),
				AR_DT : record.get('AR_DT'),
				CLS_TYPE : CLS_TYPE, 
				BP_CD : record.get('S_BP_CD'),
				BP_NM : record.get('BP_NM'),
				ACCT_CD : record.get('ACCT_CD'),
				ACCT_NM : record.get('ACCT_NM'),
				COST_CD : record.get('COST_CD'),
				DEPT_CD : record.get('DEPT_CD'),
				DEPT_NM : record.get('DEPT_NM'),
				CUR : record.get('CUR'),
				XCH_RATE : record.get('XCH_RATE'),
				DOC_AMT : record.get('DOC_AMT'),
				LOC_AMT : record.get('LOC_AMT'),
				REMAIN_AMT : record.get('BAL_LOC_AMT'),
				REMAIN_DOC_AMT : record.get('BAL_LOC_AMT'),
				REMAIN_LOC_AMT : record.get('BAL_LOC_AMT'),
				REMARK : record.get('REMARK'),
				GOCHUL_YN : record.get('GOCHUL_YN'),
				BL_DOC_NO : record.get('BL_DOC_NO'),
				INTER_AMT : record.get('INTER_AMT'),
				INTER_VAT : record.get('INTER_VAT'),
			});
			store1.insert(store1.getCount() - 1, rec);
			
			Ext.Ajax.request({
				url : 'sql/A_AR_RECEIPT.jsp',
				method : 'post',
				params : {
					V_TYPE : 'COL',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_AR_NO : AR_NO,
				},
				success : function(response) {
					var res = Ext.JSON.decode(response.responseText);
					for(var i=0; i<res.resultList.length; i++){
						var exist = false;
						var resItem = res.resultList[i];
						
						store6.each(function(rec, idx) {
							var storeColNo = rec.get('COL_NO');
							var storeColSeq = rec.get('COL_SEQ');
							if (storeColNo == resItem.COL_NO && storeColSeq == resItem.COL_SEQ) {
								exist = true;
								return;
							}
						});
						
						if(!exist){
							var rec2 = Ext.create('A_AR_RECEIPT.model.MyModel', {
								V_TYPE : 'I',
								MAST_DB_NO : resItem.MAST_DB_NO,
								COL_NO : resItem.COL_NO,
								COL_SEQ : resItem.COL_SEQ,
								COL_DT : resItem.COL_DT,
								COL_AMT : resItem.COL_AMT,
								BF_COL_AMT : resItem.BF_COL_AMT,
								REMAIN_AMT : resItem.BF_COL_AMT,
								BAL_AMT : resItem.BF_COL_AMT,
							});
							store6.insert(store6.getCount() - 1, rec2);
							
							var selModel2 = Ext.getCmp('myGrid6').getSelectionModel();
							selModel2.selectAll();
						}
						
						store1.each(function(rec, idx) {
							var storeArNo = rec.get('AR_NO');
							if (storeArNo == AR_NO) {
								if(store5.data.length == 0){
									rec.set('CLS_TYPE', 'C');
								} else {
									rec.set('CLS_TYPE', '');
								}
								return;
							}
						});
					}
				}
			});
			
			Ext.Ajax.request({
				url : 'sql/A_AR_RECEIPT.jsp',
				method : 'post',
				params : {
					V_TYPE : 'IV',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_BP_CD : BP_CD,
					V_DT_FR : AR_DT,
				},
				success : function(response) {
					var res = Ext.JSON.decode(response.responseText);
					for(var i=0; i<res.resultList.length; i++){
						var exist = false;
						var resItem = res.resultList[i];
						
						store7.each(function(rec, idx) {
							var storeIvNo = rec.get('IV_NO');
							if (storeIvNo == resItem.IV_NO) {
								exist = true;
								return;
							}
						});
						
						if(!exist){
							var rec2 = Ext.create('A_AR_RECEIPT.model.MyModel', {
								V_TYPE : 'I',
								IV_NO : resItem.IV_NO,
								IV_DT : resItem.IV_DT,
								BP_CD : resItem.BP_CD,
								BP_NM : resItem.BP_NM,
								CUR : resItem.CUR,
								XCH_RATE : resItem.XCH_RATE,
								DOC_AMT : resItem.DOC_AMT,
								LOC_AMT : resItem.LOC_AMT,
								REMAIN_DOC_AMT : resItem.REMAIN_DOC_AMT,
								REMAIN_AMT : resItem.REMAIN_AMT,
								REMARK : resItem.REMARK,
							});
							store7.insert(store7.getCount() - 1, rec2);
						}
					}
				}
			});
		}
		
		Ext.getCmp('V_CLS_TYPE').setValue(CLS_TYPE);

		var selModel = Ext.getCmp('myGrid1').getSelectionModel();
		selModel.selectAll();

		var popStore = this.getPopStoreStore();
		popStore.removeAll();

		var popWin = button.up().up();
		popWin.destroy();
	},

	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		var store5 = Ext.getStore('MyStore5');
		var store6 = Ext.getStore('MyStore6');
		var store7 = Ext.getStore('MyStore7');
		var flag = 'T';
		var msg = '';
		var CLS_TYPE = 'B';

		var selectedArNo = record.get('AR_NO');
		var selectedBpCd = record.get('S_BP_CD');
		store1.each(function(rec, idx) {
			var storeArNo = rec.get('AR_NO');
			var storeBpCd = rec.get('BP_CD');
			
			if (selectedArNo == storeArNo) {
				flag = 'F';
				msg = '동일한 채권번호가 이미 존재합니다.';
				return;
			} else if (selectedBpCd != storeBpCd) {
				flag = 'F';
				msg = '등록된 채권과 다른 거래처가 선택되었습니다.';
				return;
			}
		});
		
		store5.each(function(rec, idx) {
			CLS_TYPE = rec.get('REF_TYPE');
			return;
		});
		
		if(record.get('BAL_LOC_AMT') == 0){
			flag = 'F';
			msg = '잔액이 0원 입니다.';
		}

		if (flag == 'F') {
			Ext.Msg.alert('확인', msg);
			return;
		}

		var rec = Ext.create('A_AR_RECEIPT.model.MyModel', {
			V_TYPE : 'I',
			AR_TYPE : record.get('AR_TYPE'),
			AR_NO : record.get('AR_NO'),
			AR_DT : record.get('AR_DT'),
			CLS_TYPE : CLS_TYPE, 
			BP_CD : record.get('S_BP_CD'),
			BP_NM : record.get('BP_NM'),
			ACCT_CD : record.get('ACCT_CD'),
			ACCT_NM : record.get('ACCT_NM'),
			COST_CD : record.get('COST_CD'),
			DEPT_CD : record.get('DEPT_CD'),
			DEPT_NM : record.get('DEPT_NM'),
			CUR : record.get('CUR'),
			XCH_RATE : record.get('XCH_RATE'),
			DOC_AMT : record.get('DOC_AMT'),
			LOC_AMT : record.get('LOC_AMT'),
			REMAIN_AMT : record.get('BAL_LOC_AMT'),
			REMAIN_DOC_AMT : record.get('BAL_LOC_AMT'),
			REMAIN_LOC_AMT : record.get('BAL_LOC_AMT'),
			REMARK : record.get('REMARK'),
			GOCHUL_YN : record.get('GOCHUL_YN'),
			BL_DOC_NO : record.get('BL_DOC_NO'),
			INTER_AMT : record.get('INTER_AMT'),
			INTER_VAT : record.get('INTER_VAT'),
		});
		store1.insert(store1.getCount() - 1, rec);
		
		Ext.Ajax.request({
			url : 'sql/A_AR_RECEIPT.jsp',
			method : 'post',
			params : {
				V_TYPE : 'COL',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_AR_NO : record.get('AR_NO'),
			},
			success : function(response) {
				var res = Ext.JSON.decode(response.responseText);
				for(var i=0; i<res.resultList.length; i++){
					var exist = false;
					var resItem = res.resultList[i];
					
					store6.each(function(rec, idx) {
						var storeColNo = rec.get('COL_NO');
						var storeColSeq = rec.get('COL_SEQ');
						if (storeColNo == resItem.COL_NO && storeColSeq == resItem.COL_SEQ) {
							exist = true;
							return;
						}
					});
					
					if(!exist){
						var rec2 = Ext.create('A_AR_RECEIPT.model.MyModel', {
							V_TYPE : 'I',
							MAST_DB_NO : resItem.MAST_DB_NO,
							COL_NO : resItem.COL_NO,
							COL_SEQ : resItem.COL_SEQ,
							COL_DT : resItem.COL_DT,
							COL_AMT : resItem.COL_AMT,
							BF_COL_AMT : resItem.BF_COL_AMT,
							REMAIN_AMT : resItem.BF_COL_AMT,
							BAL_AMT : resItem.BF_COL_AMT,
						});
						store6.insert(store6.getCount() - 1, rec2);
						
						var selModel2 = Ext.getCmp('myGrid6').getSelectionModel();
						selModel2.selectAll();
					}
					
					store1.each(function(rec, idx) {
						var storeArNo = rec.get('AR_NO');
						if (storeArNo == selectedArNo) {
							if(store5.data.length == 0){
								rec.set('CLS_TYPE', 'C');
							} else {
								rec.set('CLS_TYPE', '');
							}
							return;
						}
					});
				}
			}
		});
		
		Ext.Ajax.request({
			url : 'sql/A_AR_RECEIPT.jsp',
			method : 'post',
			params : {
				V_TYPE : 'IV',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_BP_CD : record.get('S_BP_CD'),
				V_DT_FR : record.get('AR_DT'),
			},
			success : function(response) {
				var res = Ext.JSON.decode(response.responseText);
				for(var i=0; i<res.resultList.length; i++){
					var exist = false;
					var resItem = res.resultList[i];
					
					store7.each(function(rec, idx) {
						var storeIvNo = rec.get('IV_NO');
						if (storeIvNo == resItem.IV_NO) {
							exist = true;
							return;
						}
					});
					
					if(!exist){
						var rec2 = Ext.create('A_AR_RECEIPT.model.MyModel', {
							V_TYPE : 'I',
							IV_NO : resItem.IV_NO,
							IV_DT : resItem.IV_DT,
							BP_CD : resItem.BP_CD,
							BP_NM : resItem.BP_NM,
							CUR : resItem.CUR,
							XCH_RATE : resItem.XCH_RATE,
							DOC_AMT : resItem.DOC_AMT,
							LOC_AMT : resItem.LOC_AMT,
							REMAIN_DOC_AMT : resItem.REMAIN_DOC_AMT,
							REMAIN_AMT : resItem.REMAIN_AMT,
							REMARK : resItem.REMARK,
						});
						store7.insert(store7.getCount() - 1, rec2);
					}
				}
			}
		});
		
		Ext.getCmp('V_CLS_TYPE').setValue(CLS_TYPE);

		var selModel = Ext.getCmp('myGrid1').getSelectionModel();
		selModel.selectAll();
		
		var popStore = this.getPopStoreStore();
		popStore.removeAll();

		var popWin = tableview.up().up().up();
		popWin.destroy();
	},
	
	w_popGridClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var gridRecord = Ext.getCmp('popGrid').getSelectionModel().getSelection();
		var store1 = Ext.getStore('MyStore1');
		var selectedAmt = 0;
		var totArAmt = 0;
		var remainAmt = 0;
		
    	for(var i in gridRecord){
    		selectedAmt += Number(gridRecord[i].get('BAL_LOC_AMT'));
    	}
    	
    	store1.each(function(rec, idx) {
        	totArAmt += rec.get('REMAIN_AMT');
		});
    	
    	remainAmt = Ext.getCmp('W_TOT_AMT').getValue() - selectedAmt - totArAmt;
    	Ext.getCmp('W_REMAIN_AMT').setValue(remainAmt);
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.w_selBtnClick();
		}
	},

	w_selBtn1Click : function(button, e, eOpts) {
		var popStore1 = this.getPopStore1Store();
		popStore1.load({
			params : {
				V_TYPE : 'SP',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_CLS_DT_FR : Ext.getCmp('W_CLS_DT_FR').getValue(),
				V_CLS_DT_TO : Ext.getCmp('W_CLS_DT_TO').getValue(),
				V_DT_FR : Ext.getCmp('W_AR_DT_FR2').getValue(),
				V_DT_TO : Ext.getCmp('W_AR_DT_TO2').getValue(),
				V_DEPT_CD : Ext.getCmp('W_DEPT_CD2').getValue(),
				V_BP_CD : Ext.getCmp('W_BP_CD2').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	w_regBtn1Click : function(button, e, eOpts) {
		var record = Ext.getCmp('popGrid1').getSelection()[0];
		if (!!record)
			this.w_popGrid1DblClick(button, '', '', record, '', '', '', '');
	},

	w_popGrid1DblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_CLS_AR_NO').setValue(record.get('CLS_AR_NO'));

		var tbController = A_AR_RECEIPT.app.getController("TbButtonController");
		tbController.selBtnClick();

		var popStore1 = this.getPopStore1Store();
		popStore1.removeAll();

		var popWin = tableview.up().up();
		popWin.destroy();
	},

	w_selBtn2Click : function(button, e, eOpts) {
		var popStore2 = this.getPopStore2Store();
		popStore2.load({
			params : {
				V_TYPE : 'ACCT_POP',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_ACCT_CD : Ext.getCmp('W_ACCT_CD').getValue(),
				V_ACCT_NM : Ext.getCmp('W_ACCT_NM').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	w_regBtn2Click : function(button, e, eOpts) {
		var record = Ext.getCmp('popGrid2').getSelection()[0];
		if (!!record)
			this.w_popGrid2DblClick(button, '', '', record, '', '', '', '');
	},

	w_popGrid2DblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var selectedRecord = Ext.getCmp('myGrid2').getSelection()[0];
		selectedRecord.set('ACCT_CD', record.get('ACCT_CD'));
		selectedRecord.set('ACCT_NM', record.get('ACCT_NM'));

		var popStore2 = this.getPopStore2Store();
		popStore2.removeAll();

		var popWin = tableview.up().up();
		popWin.destroy();
	},
	
	w_selBtn3Click : function(button, e, eOpts) {
		var popStore3 = this.getPopStore3Store();
		popStore3.load({
			params : {
				V_TYPE : 'COL',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_DEPT_CD : Ext.getCmp('W_DEPT_CD3').getValue(),
				V_AR_NO : Ext.getCmp('W_BL_DOC_NO').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	w_regBtn3Click : function(button, e, eOpts) {
		var record = Ext.getCmp('popGrid3').getSelection()[0];
		if (!!record)
			this.w_popGrid3DblClick(button, '', '', record, '', '', '', '');
	},

	w_popGrid3DblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var popStore3 = this.getPopStore3Store();
		var popWin = tableview.up().up();
		var flag = true;
		
		// 그리드에 이미 동일한 COL_NO,COL_SEQ 있으면 리턴하도록 추가 필요
		var selected = Ext.getCmp('myGrid6').getSelection();
		for(var i=0; i<selected.length; i++){
			if(selected[i].get('COL_NO') == record.get('COL_NO') && selected[i].get('COL_SEQ') == record.get('COL_SEQ')){
				flag = false;
				break;
			} 
		}
		
		if(flag){
			for(var i=0; i<selected.length; i++){
				if(!!!selected[i].get('COL_NO')){
					selected[i].set('MAST_DB_NO', record.get('MAST_DB_NO'));
					selected[i].set('COL_NO', record.get('COL_NO'));
					selected[i].set('COL_SEQ', record.get('COL_SEQ'));
					selected[i].set('COL_DT', record.get('COL_DT'));
					selected[i].set('COL_AMT', record.get('COL_AMT'));
					selected[i].set('BF_COL_AMT', record.get('BF_COL_AMT'));
					selected[i].set('REMAIN_AMT', record.get('BF_COL_AMT'));
					selected[i].set('BAL_AMT', record.get('BF_COL_AMT'));
					break;
				} 
			}
		}
		
		popStore3.removeAll();
		popWin.destroy();
	},
	
	popXlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('popGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '수금대상팝업', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },
    popXlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('popGrid1');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '수금등록팝업', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },

});
