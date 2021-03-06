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

Ext.define('M_BL_DISTB.controller.MyGridController1', {
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
			click : 'xlsxDownClick'
		},
		"#V_LAST_YN" : {
			change: 'V_LAST_YN_change',
			active: 'V_LAST_YN_change2',
		},
		"#savePlantNoBtn" : {
			click : 'savePlantNoBtnClick'
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
		} else if (Ext.getCmp('V_CUR').getValue() == null) {
			flag = 'F';
			msg = '통화를 선택하세요.';
		} 
		else if (Ext.getCmp('V_PAY_METH').getValue() == 'TT' && Ext.getCmp('V_TT_PAY_DT').getValue() == null){
			flag = 'F';
			msg = 'TT인 경우 결제일을 입력하세요.';
		}
		else {
			flag = 'T';
			
			store1.each(function(rec,idx) {
				if(rec.get('BOX_QTY') == 0) {
					flag = 'F';
					msg = '박스수량을 입력하세요';
					return false;
				} else if (rec.get('CHARGE_YN') == 'Y') {
					flag = 'F';
					msg = '경비가 존재합니다. 변경할 수 없습니다.';
					return false;
				} else if (rec.get('BOX_WGT_UNIT') == 0) {
					flag = 'F';
					msg = '단위중량을 입력하세요';
					return false;
				} else {
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
	    			url : 'sql/M_BL_DISTB_H.jsp',
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
	    				V_TT_PAY_DT : Ext.getCmp('V_TT_PAY_DT').getValue(),
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
						    		var tbController = M_BL_DISTB.app.getController("TbButtonController");
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
						    		var tbController = M_BL_DISTB.app.getController("TbButtonController");
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
						url : 'sql/M_BL_DISTB_D.jsp',
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
	    							var tbController = M_BL_DISTB.app.getController("TbButtonController");
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
						url : 'sql/M_BL_DISTB_D.jsp',
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
    							var tbController = M_BL_DISTB.app.getController("TbButtonController");
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
			else if(gridRecord1[i].get('V_TYPE') == 'V') {
				gridRecord1[i].set('V_TYPE', 'D');
				flag = 'T';
			}
		}
		
		if(flag == 'T') {
			Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					store1.sync({
						params : {
							V_TYPE : 'SYNC',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							store.reload();
							store1.reload();
							
							if(store1.getCount() == gridRecord1.length) {
								
								Ext.getCmp('V_BL_NO').setValue('');
								var nows = new Date();
								
								Ext.getCmp('V_LOADING_DT').setValue(nows);
								Ext.getCmp('V_M_BP_NM2').setValue('');
								Ext.getCmp('V_M_BP_CD2').setValue('');
								Ext.getCmp('V_BL_DOC_NO').setValue('');
								Ext.getCmp('V_TRANS_TYPE').setValue('');
								Ext.getCmp('V_VESSEL_NO').setValue('');
								Ext.getCmp('V_VESSEL_NM').setValue('');
								Ext.getCmp('V_IN_TERMS').setValue(null);
								Ext.getCmp('V_PAY_METH').setValue(null);
								Ext.getCmp('V_CUR').setValue('USD');
								Ext.getCmp('V_XCH_RATE').setValue(1);
								Ext.getCmp('V_IV_TYPE').setValue('');
								Ext.getCmp('V_LAST_YN').setValue(false);
							}
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
			url : 'sql/M_BL_DISTB_H.jsp',
			method : 'post',
			params: {
				V_TYPE: 'BL',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
				V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
				V_LAST_YN : newValue,
			},
			success: function(response) {

				var tbController = M_BL_DISTB.app.getController("TbButtonController");
				tbController.selBtnClick();
				
//				Ext.toast({
//					title : ' ',
//					timeout : 1000,
//					html : 'B/L유무변경완료',
//					style : 'text-align: center',
//					align : 't',
//					width : 130,
//				});
			}
		})
	},
	
	savePlantNoBtnClick : function(button, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		
		Ext.Msg.confirm('확인', '공장번호 저장하시겠습니까?', function(button) {
			if (button == 'yes') {
				store1.each(function(record, idx) {
					if(record.isDirty()) record.set('V_TYPE', 'PLANT');
				});
					
				store1.sync({ 
					params : {
						V_TYPE : 'PLANT',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
			    		var tbController = M_BL_DISTB.app.getController("TbButtonController");
			    		tbController.selBtnClick();
					}, 
				});
					
			}
		});
		
	},
	
});
