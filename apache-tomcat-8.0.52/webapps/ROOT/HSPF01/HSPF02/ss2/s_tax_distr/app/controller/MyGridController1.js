/*
 * File: app/controller/MyGridController1.js
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

Ext.define('S_TAX_DISTR.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#tempGlCfmBtn" : {
			click : 'tempGlCfmBtnClick'
		},
		"#tempGlCancelBtn" : {
			click : 'tempGlCancelBtnClick'
		},
		"#taxBillBtn" : {
			click : 'taxBillBtnClick'
		},
	},

	
	
	tempGlCfmBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_TAX_BILL_NO').getValue() == '' || Ext.getCmp('V_TAX_BILL_NO').getValue() == null) {
			flag = 'F';
			msg = '세금계산서관리번호를 입력하세요.';
		} else if (Ext.getCmp('V_TEMP_GL_NO').getValue() != '') {
			flag = 'F';
			msg = '이미 전표가 존재합니다.';
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
						url : 'sql/S_TAX_DISTR.jsp',
						method : 'post',
						params: {
							V_TYPE: 'I',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_TAX_BILL_NO : Ext.getCmp('V_TAX_BILL_NO').getValue(),
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
	    							var tbController = S_TAX_DISTR.app.getController("TbButtonController");
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
	tempGlCancelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		

		if (Ext.getCmp('V_TAX_BILL_NO').getValue() == '' || Ext.getCmp('V_TAX_BILL_NO').getValue() == null) {
			flag = 'F';
			msg = '매출번호를 입력하세요.';
		} else if (Ext.getCmp('V_TEMP_GL_NO').getValue() == '' || Ext.getCmp('V_TEMP_GL_NO').getValue() == null) {
			flag = 'F';
			msg = '취소할 전표가 없습니다.';
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
						url : 'sql/S_TAX_DISTR.jsp',
						method : 'post',
						params: {
							V_TYPE: 'D',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_TAX_BILL_NO : Ext.getCmp('V_TAX_BILL_NO').getValue(),
						},
						success: function(response) {
							
							var jsonResult = Ext.JSON.decode(response.responseText);
					    	var tryCnt = jsonResult.tryCnt;
    						var finCnt = jsonResult.finCnt;
    						var resMSG = jsonResult.resMSG;
    						var resDATE = jsonResult.resDATE;
    						var resString = jsonResult.resString;
    						
    						if(resMSG == 'SUCCESS') {
    							var tbController = S_TAX_DISTR.app.getController("TbButtonController");
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
	
	taxBillBtnClick : function(button, e, eOpts) {
		var TAX_BILL_NO = Ext.getCmp('V_TAX_BILL_NO').getValue();
		
		if(!!!TAX_BILL_NO){
			Ext.Msg.alert('확인', '세금계산서 관리번호가 없습니다.');
		} else {
			var popup = Ext.create("Popup.view.WinBillPop");
			Ext.getCmp('V_SHOW_TYPE').setValue('S_TAX_DISTR');
			Ext.getCmp('V_SUPP_BP_CD').setValue('TX3');
			Ext.getCmp('V_BYR_BP_CD').setValue(Ext.getCmp('V_S_BP_CD2').getValue());
			
			
			var WinBillController = this.getController("WinBillPopController");
//			var WinBillController = Popup.app.getController("WinBillPopController");
			WinBillController.loadWinPopInfo();
			
			popup.show();
		}
		
	},


});
