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

Ext.define('M_BL_STEEL.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#blRegBtn" : {
			click : 'blRegBtnClick'
		},
		"#blCfmBtn" : {
			click : 'blCfmBtnClick'
		},
		"#blCancelBtn" : {
			click : 'blCancelBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#xlsxDown1" : {
			click : 'xlsxDown1Click'
		},
		"#V_LAST_YN" : {
			change: 'V_LAST_YN_change',
			active: 'V_LAST_YN_change2',
		},
		"#gridSaveBtn" : {
			click : 'gridSaveBtnClick'
		},
		"#myGrid1" : {
			cellclick : 'myGrid1CellClick'
		},
	},

	blRegBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_BL_DOC_NO').getValue() == '' || Ext.getCmp('V_BL_DOC_NO').getValue() == null) {
			flag = 'F';
			msg = 'B/L번호를 입력하세요.';
		} else if (Ext.getCmp('V_LOADING_DT').getValue() == null) {
			flag = 'F';
			msg = '선적일 입력하세요.';
		} else if (Ext.getCmp('V_M_BP_CD2').getValue() == '') {
			flag = 'F';
			msg = '공급사를 선택하세요.';
		} else if (Ext.getCmp('V_IN_TERMS').getValue() == null) {
			flag = 'F';
			msg = '가격조건을 입력하세요.';
		} else if (Ext.getCmp('V_PAY_METH').getValue() == null) {
			flag = 'F';
			msg = '결제방법을 입력하세요.';
		} 
		else if (Ext.getCmp('V_CUR').getValue() == null) {
			flag = 'F';
			msg = '통화를 선택하세요.';
		} 
		else if (Ext.getCmp('V_VESSEL_NM').getValue() == null || Ext.getCmp('V_VESSEL_NM').getValue() == undefined || Ext.getCmp('V_VESSEL_NM').getValue() == '') {
			flag = 'F';
			msg = '모선명을 입력하세요.';
		} 
		else {
			flag = 'T';
			
			store1.each(function(rec,idx) {
				if (rec.get('CHARGE_YN') == 'Y') {
					flag = 'F';
					msg = '경비가 존재합니다. 변경할 수 없습니다.';
					return false;
				} 
				if (rec.get('CC_YN') == 'Y') {
					flag = 'F';
					msg = '통관이 존재합니다. 변경할 수 없습니다.';
					return false;
				} 
				else {
					flag = 'T';
				}
			})
			
		}
		
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
			if (button == 'yes') {

				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
				
	    		Ext.Ajax.request({
	    			url : 'sql/M_BL_STEEL_H.jsp',
	    			method : 'post',
	    			params: {
	    				V_TYPE: 'I',
	        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    				V_LOADING_DT : Ext.getCmp('V_LOADING_DT').getValue(),
	    				V_M_BP_CD2 : Ext.getCmp('V_M_BP_CD2').getValue(),
	    				V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
	    				V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO').getValue(),
	    				V_TRANS_TYPE : Ext.getCmp('V_TRANS_TYPE').getValue(),
	    				V_VESSEL_NM : Ext.getCmp('V_VESSEL_NM').getValue(),
	    				V_VESSEL_NO : Ext.getCmp('V_VESSEL_NO').getValue(),
	    				V_IN_TERMS : Ext.getCmp('V_IN_TERMS').getValue(),
	    				V_PAY_METH : Ext.getCmp('V_PAY_METH').getValue(),
	    				V_CUR : Ext.getCmp('V_CUR').getValue(),
	    				V_XCH_RATE : Ext.getCmp('V_XCH_RATE').getValue(),
	    				V_IV_TYPE : Ext.getCmp('V_IV_TYPE').getValue(),
	    				V_LAST_YN : Ext.getCmp('V_LAST_YN').getValue(),
	    				V_DISCHGE_PORT : Ext.getCmp('V_DISCHGE_PORT').getValue(),
	    				V_REC_CHARGE_NO : Ext.getCmp('V_REC_CHARGE_NO').getValue(),
	    			},
	    			success: function(response) {
	    				var res = response.responseText;
	    				store1.each(function(record, idx) {
	    					if(record.phantom == true) {
	    						record.set('V_TYPE', 'I');
	    					} else {
	    						record.set('V_TYPE', 'U');
	    					}
	    				});
	    				//BL 정상등록
	    				if(res.match('VB')) {
	    					Ext.getCmp('V_BL_NO').setValue(res);
	    					
	    					store1.sync({ 
	    						params : {
	    							V_TYPE : 'SYNC',
	    							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
	    							V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO').getValue(),
	    						},
	    						callback : function(records, operation, success) {
						    		var tbController = M_BL_STEEL.app.getController("TbButtonController");
						    		tbController.selBtnClick();
	    						}, 
	    						success: function() {
	    							
	    						}
	    					});
	    				} else if(res.match('UPDATE')) {
	    					store1.sync({ 
	    						params : {
	    							V_TYPE : 'SYNC',
	    							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
	    							V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO').getValue(),
	    						},
	    						callback : function(records, operation, success) {
						    		var tbController = M_BL_STEEL.app.getController("TbButtonController");
						    		tbController.selBtnClick();
	    						}, 
	    						success: function() {
	    							
	    						}
	    					});
	    					
	    				}
	    				else if(res.match('DUPLICATE')) {
	    					Ext.Msg.alert('확인', 'BL번호가 이미 존재합니다. (' + Ext.getCmp('V_BL_DOC_NO').getValue() +')');
	    				}
	    				
	    				else {
	    					Ext.Msg.alert('확인', res);
	    				}
	    		    	
	    				
	    			}
	        	})
			}
		});
		} else {
			Ext.Msg.alert('확인', msg);
		}

	},
	blCfmBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_BL_DOC_NO').getValue() == '' || Ext.getCmp('V_BL_DOC_NO').getValue() == null) {
			flag = 'F';
			msg = 'B/L번호를 입력하세요.';
		} else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', '전표를 생성하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
					
					Ext.Ajax.request({
						url : 'sql/M_BL_STEEL_D.jsp',
						method : 'post',
						params: {
							V_TYPE: 'I',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
							V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO').getValue(),
						},
						success: function(response) {
							try{
						    	var jsonResult = Ext.JSON.decode(response.responseText);
						    	var tryCnt = jsonResult.tryCnt;
	    						var finCnt = jsonResult.finCnt;
	    						var resMSG = jsonResult.resMSG;
	    						var resDATE = jsonResult.resDATE;
	    						var resString = jsonResult.resString;
						    
	    						if(resMSG == 'SUCCESS') {
	    							var tbController = M_BL_STEEL.app.getController("TbButtonController");
	    							tbController.selBtnClick();
	    							
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
								Ext.Msg.alert('확인', '전표생성실패<br>' + response.responseText);
							}
    						
							
							
						}
					})
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
		
	},
	blCancelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_BL_DOC_NO').getValue() == '' || Ext.getCmp('V_BL_DOC_NO').getValue() == null) {
			flag = 'F';
			msg = 'B/L번호를 입력하세요.';
		} else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', '전표를 취소하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
					
					Ext.Ajax.request({
						url : 'sql/M_BL_STEEL_D.jsp',
						method : 'post',
						params: {
							V_TYPE: 'D',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
							V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO').getValue(),
						},
						success: function(response) {
							
							var jsonResult = Ext.JSON.decode(response.responseText);
					    	var tryCnt = jsonResult.tryCnt;
    						var finCnt = jsonResult.finCnt;
    						var resMSG = jsonResult.resMSG;
    						var resDATE = jsonResult.resDATE;
    						var resString = jsonResult.resString;
    						
    						if(resMSG == 'SUCCESS') {
    							var tbController = M_BL_STEEL.app.getController("TbButtonController");
    							tbController.selBtnClick();
    							
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
					})
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
		
	},

	gridDelBtnClick : function(button, e, eOpts) {
		
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var store2 = Ext.getStore('MyStore2');
		var flag = '';
		var msg = '';
		
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

		for(var i=0; i<gridRecord1.length; i++) {
			if(gridRecord1[i].get('CHARGE_YN') == 'Y') {
				flag = 'F';
				msg = '경비가 존재합니다. 변경할 수 없습니다.';
				break;
			}
			if(gridRecord1[i].get('CC_YN') == 'Y') {
				flag = 'F';
				msg = '통관이 존재합니다. 변경할 수 없습니다.';
				break;
			}
			else if(gridRecord1[i].get('V_TYPE') == 'V') {
				gridRecord1[i].set('V_TYPE', 'D');
				flag = 'T';
			}
		}
		
		if(flag == 'T') {
			Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					store1.each(function(rec, idx) {
						if(rec.get('V_TYPE') == 'V') {
							rec.set('V_TYPE', 'D')
						}
					})
					store1.sync({
						params : {
							V_TYPE : 'SYNC',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							var tbController = M_BL_STEEL.app.getController("TbButtonController");
							tbController.selBtnClick();
							
							store2.removeAll();
							
						}, 
						success: function() {
						}
					});
				}
			});
			
		} else {
			Ext.Msg.alert('확인',  msg);
		}
	},
	
	V_LAST_YN_change: function(field, newValue, oldValue, eOpts) {
		
			Ext.Ajax.request({
			url : 'sql/M_BL_STEEL_H.jsp',
			method : 'post',
			params: {
				V_TYPE: 'BL',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
				V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
				V_LAST_YN : newValue,
			},
			success: function(response) {

				var tbController = M_BL_STEEL.app.getController("TbButtonController");
				tbController.selBtnClick();
			}
		})
	},

   xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid2');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'B/L등록-강종', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },
    gridSaveBtnClick: function(button, e, eOpts) {
    	var store1= Ext.getStore('MyStore1');
    	var store2= Ext.getStore('MyStore2');
    	var flag = 'T';
		var msg = '';
    	
    	store2.each( function(rec,idx) {
    		if (rec.get('CHARGE_YN') == 'Y') {
				flag = 'F';
				msg = '경비가 존재합니다. 변경할 수 없습니다.';
				return false;
			} 
			if (rec.get('CC_YN') == 'Y') {
				flag = 'F';
				msg = '통관이 존재합니다. 변경할 수 없습니다.';
				return false;
			} 
    		if(rec.phantom == true) {
    			rec.set('V_TYPE', 'I');
    		} else {
    			rec.set('V_TYPE', 'U');
    		}
    	});
    	
    	if (flag == 'T') {
	    	store2.sync({ 
				params : {
					V_TYPE : 'SYNC',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
				},
				callback : function(records, operation, success) {
					store1.reload();
					store2.reload()
				}, 
				success: function() {
					
				}
			});
    	}
    	else {
			Ext.Msg.alert('확인',  msg);
		}
    },
    myGrid1CellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
			var store2 = Ext.getStore('MyStore2');
		 store2.load({
				params: {
					V_TYPE: 'S',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_BL_NO :  record.get('BL_NO'),
					V_BL_SEQ :  record.get('BL_SEQ'),
				},
				callback: function(records,operations,success){
				}
			});
		 
	},
   
});
