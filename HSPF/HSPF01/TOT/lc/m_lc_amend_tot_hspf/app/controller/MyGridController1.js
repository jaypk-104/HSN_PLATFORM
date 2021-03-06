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

Ext.define('M_LC_AMEND_TOT_HSPF.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#lcRegBtn" : {
			click : 'lcRegBtnClick'
		},
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#xlsxDown1" : {
			click : 'xlsxDownClick'
		}
	},

	lcRegBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';

		if (Ext.getCmp('V_LC_DOC_NO').getValue() == '' || Ext.getCmp('V_LC_DOC_NO').getValue() == undefined  || Ext.getCmp('V_LC_DOC_NO').getValue() == null ) {
			flag = 'F';
			msg = 'L/C번호를 입력하세요.';
		} else if (Ext.getCmp('V_OPEN_DT').getValue() == null) {
			flag = 'F';
			msg = 'L/C오픈일을 입력하세요.';
		} else if (Ext.getCmp('V_AMEND_DT').getValue() == null) {
			flag = 'F';
			msg = 'L/C AMEND일을 입력하세요.';
		} else if (Ext.getCmp('V_M_BP_CD2').getValue() == '') {
			flag = 'F';
			msg = '공급사를 선택하세요.';
		} else if (Ext.getCmp('V_BANK_CD').getValue() == null) {
			flag = 'F';
			msg = '개설은행을 선택하세요.';
//		} else if (Ext.getCmp('V_IN_TERMS').getValue() == null) {
//			flag = 'F';
//			msg = '가격조건을 입력하세요.';
//		} else if (Ext.getCmp('V_PAY_METH').getValue() == null) {
//			flag = 'F';
//			msg = '결제방법을 입력하세요.';
		} else if (Ext.getCmp('V_CUR').getValue() == null) {
			flag = 'F';
			msg = '통화를 선택하세요.';
		} else {
			store1.each(function(rec,idx) {
				if (rec.get('CHARGE_YN') == 'Y') {
					flag = 'F';
					msg = '경비가 존재합니다. 변경할 수 없습니다.';
					return false;
				} 
//				if (rec.get('BL_YN') == 'Y') {
//					flag = 'F';
//					msg = 'BL이 존재합니다. 변경할 수 없습니다.';
//					return false;
//				} 
//				else {
			flag = 'T';
//				}
			});
		}
		
		
		if (flag == 'T') {
			Ext.Msg.confirm('확인', '등록하시겠습니까?', function(button) {
			if (button == 'yes') {
				var V_PO_NO="", V_PAY_METH="", V_IN_TERMS="", V_DOC_AMT=0;
				var activeTab = Ext.getCmp('myTab').getActiveTab().xtype;
				if(activeTab == 'mypanel1'){
					V_PO_NO = Ext.getCmp('V_PO_NO').getValue();
					V_PAY_METH = Ext.getCmp('V_PAY_METH').getValue();
					V_IN_TERMS = Ext.getCmp('V_IN_TERMS').getValue();
					
					store1.each(function(rec,idx) {
						V_DOC_AMT += rec.get('AT_DOC_AMT');
					});
				}

	    		Ext.Ajax.request({
	    			url : 'sql/M_LC_AMEND_TOT_HSPF.jsp',
	    			method : 'post',
	    			params: {
	    				V_TYPE: 'IH',
	        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    				V_OPEN_DT : Ext.getCmp('V_OPEN_DT').getValue(),
	    				V_AMEND_DT : Ext.getCmp('V_AMEND_DT').getValue(),
	    				V_M_BP_CD2 : Ext.getCmp('V_M_BP_CD2').getValue(),
	    				V_LC_DOC_NO : Ext.getCmp('V_LC_DOC_NO').getValue(),
	    				V_LC_NO : Ext.getCmp('V_LC_NO').getValue(),
	    				V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
	    				V_CUR : Ext.getCmp('V_CUR').getValue(),
	    				V_XCH_RATE : Ext.getCmp('V_XCH_RATE').getValue(),
	    				V_LC_KIND : Ext.getCmp('V_LC_KIND').getValue(),
	    				
	    				/* LC 등록 */
	    				V_PO_NO : V_PO_NO,
	    				V_IN_TERMS : V_IN_TERMS,
	    				V_PAY_METH : V_PAY_METH,
	    				V_DOC_AMT : V_DOC_AMT,
	    			},
	    			success: function(response) {
	    				var res = response.responseText;
	    				var resItem = Ext.JSON.decode(res);

	    				var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
	    				selModel1.selectAll();
	    				
	    				var store1 = Ext.getStore('MyStore1');
	    				store1.each(function(record, idx) {
	    					record.set('V_TYPE', 'I');
	    				});
	    				
	    				//LC헤더 정상등록
	    				if(res.match('LA')) {
	    					Ext.getCmp('V_LC_AMD_NO').setValue(resItem.LC_AMD_NO);

	    					store1.sync({ 
	    						params : {
	    							V_TYPE : 'SYNC',
	    							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    							V_LC_AMD_NO : Ext.getCmp('V_LC_AMD_NO').getValue(),
	    							V_LC_NO : resItem.LC_NO
	    						},
	    						callback : function(records, operation, success) {
	    							var tbController = M_LC_AMEND_TOT_HSPF.app.getController("TbButtonController");
						    		tbController.selBtnClick();
	    						}, 
	    						success: function() {
	    						}
	    					});
	    				} else if(res.match('UPDATE')) {
	    					
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

	},
	
	gridAddBtnClick : function(button, e, eOpts) {
		var popup = Ext.create("M_LC_AMEND_TOT_HSPF.view.WinAddRow");
		popup.show();
		Ext.getCmp('rowCount').setValue(1);
	},

	gridDelBtnClick : function(button, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		var flag = '';
		var msg = '';
		
		var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

		for(var i=0; i<gridRecord1.length; i++) {
			if(gridRecord1[i].get('CHARGE_YN') == 'Y') {
				flag = 'F';
				msg = '경비가 존재합니다. 변경할 수 없습니다.';
				break;
			} else if(gridRecord1[i].get('V_TYPE') == 'V') {
				gridRecord1[i].set('V_TYPE', 'D');
				flag = 'T';
			}
		}
		
		if(gridRecord1.length > 0 ) {
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
								store1.reload();
								
								if(store1.getCount() == gridRecord1.length) {
									
									Ext.getCmp('V_LC_NO').setValue('');
									Ext.getCmp('V_LC_DOC_NO').setValue('');
									Ext.getCmp('V_LC_AMD_NO').setValue('');
									Ext.getCmp('V_LC_AMEND_SEQ').setValue('');
									
									var nows = new Date();
									Ext.getCmp('V_OPEN_DT').setValue(nows);
									Ext.getCmp('V_AMEND_DT').setValue(nows);
									Ext.getCmp('V_M_BP_NM2').setValue('');
									Ext.getCmp('V_M_BP_CD2').setValue('');
									Ext.getCmp('V_BANK_CD').setValue(null);
									Ext.getCmp('V_CUR').setValue('USD');
									Ext.getCmp('V_XCH_RATE').setValue(1);
									
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
		} else {
			Ext.Msg.alert('확인',  '삭제할 항목을 선택하세요.');
		}
	},
	
	xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
        var grid = Ext.getCmp('myGrid');
        grid.saveDocumentAs({
            type: 'xlsx',
            title: 'L/C AMEND 등록', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
       });
    }

});
