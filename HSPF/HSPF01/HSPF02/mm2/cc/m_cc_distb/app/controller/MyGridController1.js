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

Ext.define('M_CC_DISTB.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#ccRegBtn" : {
			click : 'ccRegBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#xlsxDown1" : {
			click : 'xlsxDown1Click'
		}
	},

	ccRegBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		

		if (Ext.getCmp('V_BL_DOC_NO2').getValue() == '') {
			flag = 'F';
			msg = 'B/L번호를 입력하세요.';
		} else if (Ext.getCmp('V_DISCHGE_PORT').getValue()  == '') {
			flag = 'F';
			msg = '도착항을 입력하세요.';
		} else if (Ext.getCmp('V_TAX_CUSTOM').getValue() == '') {
			flag = 'F';
			msg = '세관을 선택하세요.';
		} else if (Ext.getCmp('V_ID_NO').getValue() == '') {
			flag = 'F';
			msg = '신고번호 입력하세요.';
		} else if (Ext.getCmp('V_ID_DT').getValue() == null) {
			flag = 'F';
			msg = '신고일을 입력하세요.';
		} else if (Ext.getCmp('V_XCH_RATE').getValue() == null) {
			flag = 'F';
			msg = '선적환율을 입력하세요.';
		} else if (Ext.getCmp('V_FORWARD_XCH').getValue() == null) {
			flag = 'F';
			msg = '선물환율을 입력하세요.';
		} else if (Ext.getCmp('V_CUR').getValue() == null) {
			flag = 'F';
			msg = '통화를 선택하세요.';
		} else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
			selModel1.selectAll();
			var V_TYPE = '';
			if(Ext.getCmp('V_CC_NO').getValue() == '' || Ext.getCmp('V_CC_NO').getValue() == null) {
				V_TYPE = 'I';
			} else {
				V_TYPE = 'U';
			}
			
			var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
			var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
			
			
			
			store1.each(function(rec, idx) {
				if((rec.get('DATA') == '' || rec.get('DATA') == undefined) && rec.get('ITEM_CD').substring(1,2) != 'C') {
					flag = 'F';
					msg = '유통이력번호를 입력하세요.';
					return false;
				} else if((rec.get('REMARK') == '' || rec.get('REMARK') == undefined) && rec.get('EX_YN') == 'Y') {
					flag = 'F';
					msg = '비고를 입력하세요.';
					return false;
				} 
			});
			
			
			if(flag == 'T') {
				Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
					if (button == 'yes') {
			    		Ext.Ajax.request({
			    			url : 'sql/M_CC_DISTB_H.jsp',
			    			method : 'post',
			    			params: {
			    				V_TYPE: V_TYPE,
								V_CC_NO : Ext.getCmp('V_CC_NO').getValue(),
			        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
			    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
			    				V_BL_DOC_NO2 : Ext.getCmp('V_BL_DOC_NO2').getValue(),
			    				V_DISCHGE_PORT : Ext.getCmp('V_DISCHGE_PORT').getValue(),
			    				V_TAX_CUSTOM : Ext.getCmp('V_TAX_CUSTOM').getValue(),
			    				V_ID_NO : Ext.getCmp('V_ID_NO').getValue(),
			    				V_ID_DT : Ext.getCmp('V_ID_DT').getValue(),
			    				V_TOTAL_QTY : Ext.getCmp('V_TOTAL_QTY').getValue(),
			    				V_CUR : Ext.getCmp('V_CUR').getValue(),
			    				V_XCH_RATE : Ext.getCmp('V_XCH_RATE').getValue(), //선적환율
			    				V_FORWARD_XCH : Ext.getCmp('V_FORWARD_XCH').getValue(), //선물환율
			    				V_PAY_METH : Ext.getCmp('V_PAY_METH').getValue(),
			    				V_IN_TERMS : Ext.getCmp('V_IN_TERMS').getValue(),
			    				V_M_BP_CD : Ext.getCmp('V_M_BP_CD2').getValue(),
			    			},
			    			success: function(response) {
			    				var res = response.responseText;
			    				//BL 정상등록
			    				if(res.match('V') || res.match('CU')) {
			    					Ext.getCmp('V_CC_NO').setValue(res);
			    					
			    					store1.each(function(record, idx) {
				    					if(record.phantom == true) {
				    						record.set('V_TYPE', 'I');
				    					} else {
				    						record.set('V_TYPE', 'U');
				    					}
				    				});
			    					
			    					store1.sync({ 
			    						params : {
			    							V_TYPE : 'SYNC',
			    							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
			    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
			    							V_CC_NO : Ext.getCmp('V_CC_NO').getValue(),
			    						},
			    						callback : function(records, operation, success) {
								    		var tbController = M_CC_DISTB.app.getController("TbButtonController");
								    		tbController.selBtnClick();
			    						}, 
			    						success: function() {
			    							
			    						}
			    					});
//			    					
			    				} else {
			    					Ext.Msg.alert('확인', res);
			    				}
			    			}
			        	})
					}
				});
			} else {
				Ext.Msg.alert('확인', msg);
			}
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
					if(gridRecord1[i].get('V_TYPE') == 'V') {
						gridRecord1[i].set('V_TYPE', 'D');
					}
				}
				
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
							Ext.getCmp('V_CC_NO').setValue('');
							Ext.getCmp('V_BL_DOC_NO2').setValue('');
							Ext.getCmp('V_DISCHGE_PORT').setValue('PUS');
							Ext.getCmp('V_TAX_CUSTOM').setValue('PU');
							Ext.getCmp('V_ID_NO').setValue('');
							Ext.getCmp('V_ID_USR').setValue('');
							Ext.getCmp('V_M_BP_NM2').setValue('');
							Ext.getCmp('V_M_BP_CD2').setValue('');
		        			var nows = new Date();
		        			Ext.getCmp('V_ID_DT').setValue(nows);
		        			Ext.getCmp('V_TOTAL_QTY').setValue(0);
							Ext.getCmp('V_IN_TERMS').setValue(null);
							Ext.getCmp('V_PAY_METH').setValue(null);
		        			Ext.getCmp('V_CUR').setValue('USD');
		        			Ext.getCmp('V_XCH_RATE').setValue(1);
		        			Ext.getCmp('V_FORWARD_XCH').setValue(1);
		        			
		        			store1.removeAll();
		            }
					}, 
					success: function() {
					}
				});
			}
		});
	},
	xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid1');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: '통관등록 세부항목', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    }

});
