/*
 * File: app/controller/MyGridController.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('S_EX_BILL_DISTR.controller.MyGridController', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#xlsxDown" : {
			click : 'xlsxDown1Click'
		},
		"#xlsxDown1" : {
			click : 'xlsxDown1Click'
		},
		"#xlsxDown2" : {
			click : 'xlsxDown2Click'
		},
		"#cfmBtn" : {
			click : 'cfmBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
	},
	
	cfmBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
    	var rb1 = Ext.ComponentQuery.query('radiofield[name=rb1]');
    	var rb2 = Ext.ComponentQuery.query('radiofield[name=rb2]');
    	
    	if (Ext.getCmp('V_S_BP_NM2').getValue() == '' || Ext.getCmp('V_S_BP_NM2').getValue() == null) {
			flag = 'F';
			msg = '매출처를 선택하세요.';
		} else if (Ext.getCmp('V_BILL_DT').getValue() == null) {
			flag = 'F';
			msg = '매출일자를 입력하세요.';
		} else if (Ext.getCmp('V_DN_ISSUE_DT').getValue() == null) {
			flag = 'F';
			msg = '수금예정일을 선택하세요.';
		} else if (Ext.getCmp('V_R_BP_NM').getValue() == '') {
			flag = 'F';
			msg = '수금처를 선택하세요.';
		} else if (Ext.getCmp('V_SALE_TYPE').getValue() == null) {
			flag = 'F';
			msg = '매출채권형태를 선택하세요.';
		} else if (Ext.getCmp('V_TAX_CD').getValue() == null) {
			flag = 'F';
			msg = '세금계산서 신고사업장을 선택하세요.';
		} else if (Ext.getCmp('V_CUR').getValue() == null) {
			flag = 'F';
			msg = '화폐단위를 선택하세요.';
		} else if (Ext.getCmp('V_PAY_METH').getValue() == null) {
			flag = 'F';
			msg = '결제방법을 선택하세요.';
		} else {
			flag = 'T';
		}
    	
    	if(flag == 'T') {
	    	Ext.Msg.confirm('확인', '예외매출채권등록 하시겠습니까?', function(button) {
				if (button == 'yes') {
				   if(Ext.getCmp('V_BILL_NO').getValue() == '') {
				   		Ext.Ajax.request({
				    		url : 'sql/S_EX_BILL_DISTR.jsp',
				    		method : 'post',
				    		params: {
				    			V_TYPE: 'IH',
				    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				    			V_BILL_DT : Ext.getCmp('V_BILL_DT').getValue(),
				    			V_SALE_TYPE : Ext.getCmp('V_SALE_TYPE').getValue(),
				    			V_S_BP_CD2 : Ext.getCmp('V_S_BP_CD2').getValue(),
				    			V_R_BP_CD : Ext.getCmp('V_R_BP_CD').getValue(),
				    			V_DN_ISSUE_DT : Ext.getCmp('V_DN_ISSUE_DT').getValue(),
				    			V_TAX_CD : Ext.getCmp('V_TAX_CD').getValue(),
				    			V_CUR : Ext.getCmp('V_CUR').getValue(),
				    			V_PAY_METH : Ext.getCmp('V_PAY_METH').getValue(),
				    			V_IN_TERMS : Ext.getCmp('V_IN_TERMS').getValue(),
				    			V_REF_BILL_NO : Ext.getCmp('V_REF_BILL_NO').getValue(),
				    			V_VAT_INC : rb1[0].getGroupValue(),
				    			V_CFM_YN : rb2[0].getGroupValue(),
				    		},
				    		success: function(response) {
				    			var res = response.responseText;
				    			
				    			store1.each(function(record, idx) {
				   				record.set('V_TYPE', 'I');
				    			});
				    			
				    			//BL 정상등록
				    			if(!res.match('Exception')) {
				    				Ext.getCmp('V_BILL_NO').setValue(res);
				    				
				    				store1.sync({ 
				    					params : {
				    						V_TYPE : 'SYNC',
				    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				    						V_BILL_NO : res,
				    					},
				    					callback : function(records, operation, success) {
				    			    		var tbController = S_EX_BILL_DISTR.app.getController("TbButtonController");
				    			    		tbController.selBtnClick();
				    					}, 
				    					success: function() {
				    						
				    					}
				    				});
				    			} else {
				    				Ext.Msg.alert('확인', res);
				    			}
				    		}
				    	});
				   } else {
				   		Ext.Ajax.request({
				    		url : 'sql/S_EX_BILL_DISTR.jsp',
				    		method : 'post',
				    		params: {
				    			V_TYPE: 'UH',
				    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				    			V_BILL_NO : Ext.getCmp('V_BILL_NO').getValue(),
				    			V_BILL_DT : Ext.getCmp('V_BILL_DT').getValue(),
				    			V_SALE_TYPE : Ext.getCmp('V_SALE_TYPE').getValue(),
				    			V_S_BP_CD2 : Ext.getCmp('V_S_BP_CD2').getValue(),
				    			V_R_BP_CD : Ext.getCmp('V_R_BP_CD').getValue(),
				    			V_DN_ISSUE_DT : Ext.getCmp('V_DN_ISSUE_DT').getValue(),
				    			V_TAX_CD : Ext.getCmp('V_TAX_CD').getValue(),
				    			V_CUR : Ext.getCmp('V_CUR').getValue(),
				    			V_PAY_METH : Ext.getCmp('V_PAY_METH').getValue(),
				    			V_IN_TERMS : Ext.getCmp('V_IN_TERMS').getValue(),
//				    			V_REF_BILL_NO : Ext.getCmp('V_REF_BILL_NO').getValue(),
				    			V_VAT_INC : rb1[0].getGroupValue(),
				    			V_CFM_YN : rb2[0].getGroupValue(),
				    		},
				    		success: function(response) {
				    			var res = response.responseText;
				    			
				    			store1.each(function(record, idx) {
				   				record.set('V_TYPE', 'U');
				    			});
				    			
				    			store1.sync({ 
			       				params : {
			       					V_TYPE : 'SYNC',
			       					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
			       					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				    				V_BILL_NO : Ext.getCmp('V_BILL_NO').getValue(),
			       				},
			       				callback : function(records, operation, success) {
			       		    		var tbController = S_EX_BILL_DISTR.app.getController("TbButtonController");
			       		    		tbController.selBtnClick();
			       				}, 
			       				success: function() {
			       					
			       				}
			       			});
				    			
				    		}
				    	});
				   	
//				   	store1.sync({ 
//						params : {
//							V_TYPE : 'SYNC',
//							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
//							V_BILL_NO : Ext.getCmp('V_BILL_NO').getValue()
//						},
//						callback : function(records, operation, success) {
//							var tbController = S_EX_BILL_DISTR.app.getController("TbButtonController");
//	        	    		tbController.selBtnClick();
//						}, 
//						success: function() {
//						}
//					});
				  }
				    		
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
		
		if(Ext.getCmp('V_TEMP_GL_NO').getValue() != '') {
			Ext.Msg.alert('확인', '전표번호가 생성되어 있으므로 삭제할 수 없습니다.');
			return;
		}
		
		Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
			if (button == 'yes') {

				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

				for(var i=0; i<gridRecord1.length; i++) {
					if(gridRecord1[i].get('V_TYPE') == 'V') {
						gridRecord1[i].set('V_TYPE', 'D');
					}
				}
				
				store1.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_BILL_NO: Ext.getCmp('V_BILL_NO').getValue()
					},
					callback : function(records, operation, success) {
						store.reload();
						store1.reload();
						
						if(store1.getCount() == gridRecord1.length) {

							Ext.getCmp('V_BILL_NO').setValue('');
							var nows = new Date();

							Ext.getCmp('V_BILL_DT').setValue(nows);
			    			Ext.getCmp('V_SALE_TYPE').setValue(null);
			    			Ext.getCmp('V_S_BP_CD2').setValue('');
			    			Ext.getCmp('V_S_BP_NM2').setValue('');
			    			Ext.getCmp('V_R_BP_CD').setValue('');
			    			Ext.getCmp('V_R_BP_NM').setValue('');
							Ext.getCmp('V_DN_ISSUE_DT').setValue(nows);
							Ext.getCmp('V_TAX_CD').setValue('TX3');
							Ext.getCmp('V_CUR').setValue('USD');
							Ext.getCmp('V_IN_TERMS').setValue(null);
							Ext.getCmp('V_PAY_METH').setValue(null);
							Ext.getCmp('V_SALE_TYPE').setValue('DSO');
						}
					}, 
					success: function() {
					}
				});
			}
		});
	},

	xlsxDown1Click : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid1');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '예외매출채권등록상세', //엑셀내타이틀
			fileName : currentDate + '.xlsx' //엑셀파일이름
		});
	},
	
	xlsxDown2Click : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('popGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '예외매출채권조회', //엑셀내타이틀
			fileName : currentDate + '.xlsx' //엑셀파일이름
		});
	}
});
