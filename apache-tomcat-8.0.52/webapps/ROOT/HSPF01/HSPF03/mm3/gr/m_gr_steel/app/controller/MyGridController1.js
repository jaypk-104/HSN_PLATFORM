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

Ext.define('M_GR_STEEL.controller.MyGridController1', {
    extend: 'Ext.app.Controller',
    
    control: {
        "#gridAddBtn1": {
            click: 'gridAddBtn1Click'
        },
        "#gridDelBtn1": {
            click: 'gridDelBtn1Click'
        },
        "#gridSaveBtn": {
        	click: 'gridSaveBtnClick'
        },
        "#chargeReCalcBtn": {
        	click: 'chargeReCalcBtnClick'
        },
        "#xlsxDown1": {
            click: 'xlsxDownClick'
        },
        "#xlsxDownW": {
        	click: 'xlsxDownWClick'
        },
		"#tempGlCfmBtn" : {
			click : 'tempGlCfmBtnClick'
		},
		"#tempGlCancelBtn" : {
			click : 'tempGlCancelBtnClick'
		},
		"#chargeUpdateBtn" : {
			click : 'chargeUpdateBtnClick'
		},
		"#w_selBtn" : {
			click : 'w_selBtnClick'
		},
		"#w_saveBtn" : {
			click : 'w_saveBtnClick'
		},
		"#myGrid" : {
			cellclick : 'myGridClick'
		},
		"#myGrid1" : {
			cellclick : 'myGridClick1'
		}
    },

    gridDelBtn1Click: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
        var store1 = Ext.getStore('MyStore1');
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	var flag = '';
    	var msg = '';
    	
    	for(var i=0; i<gridRecord.length; i++) {
    		if(gridRecord[i].data['V_TYPE']=='V') {
    			if(gridRecord[i].get('DN_YN') == 'Y') {
    				flag = 'F';
    				msg = '이미 출고 된 내역입니다.';
    			} else if (gridRecord[i].get('TEMP_GL_NO') != undefined) {
    				flag = 'F';
    				msg = '전표가 존재합니다.';
    			} else {
    				gridRecord[i].data['V_TYPE'] = 'D';
    				flag = 'T';
    			}
    		}
    	}
    	if(gridRecord.length > 0) {
    		if(flag == 'T') {
    			Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
    				if(button == 'yes') {
    					
    					store1.sync({
    						params: {
    							V_TYPE: 'SYNC',
    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    						},
    						callback: function(records, operation, success) {
    							store.reload();
    							store1.reload();
    						}
    					});
    				}
    			});
    		} else {
    			Ext.Msg.alert('확인', msg);
    		}
    	}
    },
    
    gridSaveBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
        var store1 = Ext.getStore('MyStore1');
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
    	selModel1.selectAll();
    	
    	if(gridRecord.length > 0) {
    		Ext.Msg.confirm('확인','저장하시겠습니까?', function(button){
    			if(button == 'yes') {
    				
    				store1.each(function(rec, idx) {
    					rec.set('V_TYPE', 'U');
    				})
    				
    		    	store1.sync({
    					params: {
    						V_TYPE: 'SYNC',
    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    		    		callback: function(records, operation, success) {
    		    			store.reload();
    		    			store1.reload();
    					}
    		    	});
    			}
    		});
    	}
    },
    chargeReCalcBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	var store1 = Ext.getStore('MyStore1');
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
    	selModel1.selectAll();
    	
    	var flag = '';
    	var msg = '';
    	
    	store1.each(function(rec, idx) {
			if(rec.get('DN_YN') == 'Y') {
				flag = 'N';
				msg = '이미 출고된 항목은 부대경비를 재배부 할 수 없습니다.';
				return false;
			} else if (rec.get('TEMP_PRC_YN') =='Y') {
				flag = 'T';
				msg = '가단가 항목입니다. <br>부대경비를 재배부 하시겠습니까?';
			} else {
				flag = 'T';
				msg = '부대경비를 재배부 하시겠습니까?';	
			}
		});
    	
    	if(gridRecord.length > 0) {
    		if(flag == 'T') {
    			Ext.Msg.confirm('확인',msg, function(button){
    				if(button == 'yes') {
    					
    					store1.each(function(rec, idx) {
    						rec.set('V_TYPE', 'U');
    					})
    					
    					store1.sync({
    						params: {
    							V_TYPE: 'CHARGE_RECALC',
    							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    						},
    						callback: function(records, operation, success) {
    							store1.reload();
    						}
    					});
    				}
    			});
    		} else {
    			Ext.Msg.alert('확인', msg);
    		}
    	}
    },

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid1');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: '상품입고대체등록(상세)', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },
    xlsxDownWClick: function(button, e, eOpts) {
    	var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('chargeGrid');
    	grid.saveDocumentAs({
    		type: 'xlsx',
    		title: '경비수정', //엑셀내타이틀
    		fileName: currentDate+'.xlsx' //엑셀파일이름
    	});
    },
    
    tempGlCfmBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
			var selModel = Ext.getCmp('myGrid').getSelectionModel();
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', '전표를 생성하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
					
					store1.sync({
    					params: {
    						V_TYPE: 'ERP',
    						U_TYPE: 'I',
    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
    					},
    					callback: function(records, operation, success) {
    						var response = records.operations[0]._response.responseText;
    						
    						try{
	    						var jsonResult = Ext.JSON.decode(response);
	    						
	    						var tryCnt = jsonResult.tryCnt;
	    						var finCnt = jsonResult.finCnt;
	    						var resMSG = jsonResult.resMSG;
	    						var resDATE = jsonResult.resDATE;
	    						var resString = jsonResult.resString;
	    						
	    						if(resMSG == 'SUCCESS') {
	    							store.reload();
	    							store1.reload();
	    							Ext.getCmp('tempGlCfmBtn').setDisabled(true);
	    							Ext.getCmp('tempGlCancelBtn').setDisabled(false);
	    							Ext.getCmp('gridDelBtn1').setDisabled(true);
	    							Ext.getCmp('chargeReCalcBtn').setDisabled(true);
	    							Ext.getCmp('gridSaveBtn').setDisabled(true);
	    							
	    							Ext.toast({
										title : ' ',
										timeout : 1000,
										html : '전표생성완료',
										style : 'text-align: center',
										align : 't',
										width : 130,
									});
	    						} else {
	    							Ext.Msg.alert('확인', '전표생성실패<br>' + resString);
	    						}
    						}
    						catch (e){
    							Ext.Msg.alert('확인', '전표생성실패<br>' + response);
    						}

    					}
    				});
				}
			});
	},
	
	tempGlCancelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', '전표를 취소하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
					
					store1.sync({
    					params: {
    						V_TYPE: 'ERP',
    						U_TYPE: 'D',
    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
    					},
    					callback: function(records, operation, success) {

    						var response = records.operations[0]._response.responseText;
    						var jsonResult = Ext.JSON.decode(response);
    						
    						var tryCnt = jsonResult.tryCnt;
    						var finCnt = jsonResult.finCnt;
    						var resMSG = jsonResult.resMSG;
    						var resDATE = jsonResult.resDATE;
    						var resString = jsonResult.resString;
    						
    						if(resMSG == 'SUCCESS') {
    							store.reload();
    							store1.reload();
    							Ext.getCmp('tempGlCfmBtn').setDisabled(false);
    							Ext.getCmp('tempGlCancelBtn').setDisabled(true);
    							Ext.getCmp('gridDelBtn1').setDisabled(false);
    							Ext.getCmp('chargeReCalcBtn').setDisabled(false);
    							Ext.getCmp('gridSaveBtn').setDisabled(false);
    							
    							Ext.toast({
									title : ' ',
									timeout : 1000,
									html : '전표취소완료',
									style : 'text-align: center',
									align : 't',
									width : 130,
								});
    						} else {
    							Ext.Msg.alert('확인', '전표취소실패<br>' + resString);
    						}
						}
    				});
					
				}
			});
	},
	chargeUpdateBtnClick : function(button, e, eOpts) {
		var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		if(gridRecord1.length == 1) {
			var chargeStore = Ext.getStore('ChargeStore');
			var flag = '';
			
			if(gridRecord1[0].get('DN_YN') == 'Y') {
				flag = 'F';
				msg = '이미 출고되었습니다. 경비를 수정할 수 없습니다.';
			} else {
				flag = 'T';
			}
			 
			if(flag == 'T') {
				var popup = Ext.create("M_GR_STEEL.view.MyWindow1");
				popup.setSize(Ext.getBody().getViewSize());
		        popup.show();
		        
		        if(gridRecord1[0].get('TEMP_GL_NO') == undefined) {
		    		Ext.getCmp('w_saveBtn').setDisabled(false);
		        } else {
		        	Ext.getCmp('w_saveBtn').setDisabled(true);
		        }
				 
				 Ext.Ajax.request({
						url:'sql/M_GR_DISTR_H.jsp',
						method: 'post',
						params: {
							V_TYPE: 'CHARGE',
			    			U_TYPE: 'H',
			    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
			    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
			    			V_MVMT_NO: gridRecord1[0].get('MVMT_NO')
						},
						callback : function(records,operations,success){
						},
					    success : function(response) {
					    	
					    	var jsonResult = Ext.JSON.decode(response.responseText);
							
				 			Ext.getCmp('W_LC_DOC_NO').setValue(jsonResult.resultList[0].LC_DOC_NO);
				 			Ext.getCmp('W_BL_DOC_NO').setValue(jsonResult.resultList[0].BL_DOC_NO);
				 			Ext.getCmp('W_BOX_QTY').setValue(jsonResult.resultList[0].BOX_QTY);
				 			Ext.getCmp('W_ITEM_CD').setValue(jsonResult.resultList[0].ITEM_CD);
				 			Ext.getCmp('W_ITEM_NM').setValue(jsonResult.resultList[0].ITEM_NM);
				 			Ext.getCmp('W_BL_QTY').setValue(Ext.util.Format.number(jsonResult.resultList[0].QTY, '0,000.00'));
					    	
					    	chargeStore.load({
					    		params: {
					    			V_TYPE: 'CHARGE',
					    			U_TYPE: 'S',
					    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
					    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
					    			V_MVMT_NO: gridRecord1[0].get('MVMT_NO')
					    		},
					    		callback: function(records,operations,success){
					    			
					    		}
					    	});
					    	
					    	
					    },
						scope: this
					});
			} else {
				Ext.Msg.alert("확인", msg);
			}
			
		 } else {
			 Ext.Msg.alert('확인', '1개의 입고를 선택하세요.');
		 }
		 
	},
	w_selBtnClick : function(button, e, eOpts) {

		var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		var chargeStore = Ext.getStore('ChargeStore');
		
		Ext.Ajax.request({
			url:'sql/M_GR_DISTR_H.jsp',
			method: 'post',
			params: {
				V_TYPE: 'CHARGE',
    			U_TYPE: 'H',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_MVMT_NO: gridRecord1[0].get('MVMT_NO')
			},
			callback : function(records,operations,success){
			},
		    success : function(response) {
		    	
		    	var jsonResult = Ext.JSON.decode(response.responseText);
//		    	console.log(jsonResult);
				
	 			Ext.getCmp('W_LC_DOC_NO').setValue(jsonResult.resultList[0].LC_DOC_NO);
	 			Ext.getCmp('W_BL_DOC_NO').setValue(jsonResult.resultList[0].BL_DOC_NO);
	 			Ext.getCmp('W_BOX_QTY').setValue(jsonResult.resultList[0].BOX_QTY);
	 			Ext.getCmp('W_ITEM_CD').setValue(jsonResult.resultList[0].ITEM_CD);
	 			Ext.getCmp('W_ITEM_NM').setValue(jsonResult.resultList[0].ITEM_NM);
	 			Ext.getCmp('W_BL_QTY').setValue(Ext.util.Format.number(jsonResult.resultList[0].QTY, '0,000.00'));
		    	
		    	chargeStore.load({
		    		params: {
		    			V_TYPE: 'CHARGE',
		    			U_TYPE: 'S',
		    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
		    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
		    			V_MVMT_NO: gridRecord1[0].get('MVMT_NO')
		    		},
		    		callback: function(records,operations,success){
		    			
		    		}
		    	});
		    	
		    	
		    },
			scope: this
		});
	},
	w_saveBtnClick : function(button, e, eOpts) {
		
		var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		var chargeRecord = Ext.getCmp('chargeGrid').getSelectionModel().getSelection();
		var chargeStore = Ext.getStore('ChargeStore');

		for(var i=0; i<chargeRecord.length; i++) {
			if(chargeRecord[i].get('V_TYPE') == 'V') {
				chargeRecord[i].set('V_TYPE', 'U');
			}
		}
		
		chargeStore.sync({
			params: {
				V_TYPE: 'CHARGE',
    			U_TYPE: 'SYNC',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_MVMT_NO: gridRecord1[0].get('MVMT_NO')
			},
			callback: function(records, operation, success) {
				chargeStore.reload();
			}
		});
		
	}
});
