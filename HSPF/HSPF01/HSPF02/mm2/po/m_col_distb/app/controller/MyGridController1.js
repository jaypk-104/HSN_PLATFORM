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

Ext.define('M_COL_DISTB.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore'],
	control : {
		"#tempGlCfmBtn" : {
			click : 'tempGlCfmBtnClick'
		},
		"#tempGlCancelBtn" : {
			click : 'tempGlCancelBtnClick'
		},
		"#tempGlCfmBtn2" : {
			click : 'tempGlCfmBtnClick2'
		},
		"#tempGlCancelBtn2" : {
			click : 'tempGlCancelBtnClick2'
		},
		"#bankRefBtn" : {
			click : 'bankRefBtnClick'
		},
	},


	tempGlCfmBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_MAST_DB_NO').getValue() == '' || Ext.getCmp('V_MAST_DB_NO').getValue() == null) {
			flag = 'F';
			msg = '담보 저장 후 ERP 담보를 생성하세요.';
		} else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', 'ERP에 담보를 생성하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					
					Ext.Ajax.request({
						url : 'sql/M_COL_DISTB.jsp',
						method : 'post',
						params: {
							V_TYPE: 'ERP',
							U_TYPE: 'I',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_MAST_DB_NO : Ext.getCmp('V_MAST_DB_NO').getValue(),
						},
						success: function(response) {
							Ext.getCmp('V_ERP_DB_YN').setValue('Y');
							Ext.getCmp('tempGlCfmBtn').setDisabled(true);
							Ext.getCmp('tempGlCancelBtn').setDisabled(false);
							Ext.getCmp('saveBtn').setDisabled(true);
							Ext.getCmp('delBtn').setDisabled(true);
							Ext.getCmp('gridAddBtn').setDisabled(true);
							Ext.getCmp('gridDelBtn').setDisabled(true);
							
							Ext.getCmp('tempGlCfmBtn2').setDisabled(false);
							Ext.getCmp('tempGlCancelBtn2').setDisabled(true);
							
					    	var jsonResult = Ext.JSON.decode(response.responseText);
					    	var tryCnt = jsonResult.tryCnt;
    						var finCnt = jsonResult.finCnt;
    						var resMSG = jsonResult.resMSG;
    						var resDATE = jsonResult.resDATE;
    						var resString = jsonResult.resString;
					    
    						if(resMSG == 'SUCCESS') {
    							var tbController = M_IV_DISTR.app.getController("TbButtonController");
    							tbController.selBtnClick();
								
    							Ext.toast({
									title : ' ',
									timeout : 1000,
									html : '담보생성완료',
									style : 'text-align: center',
									align : 't',
									width : 130,
								});
    						} else {
    							Ext.Msg.alert('확인', '담보생성실패<br>' + resString);
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
		
		if (Ext.getCmp('V_MAST_DB_NO').getValue() == '' || Ext.getCmp('V_MAST_DB_NO').getValue() == null) {
			flag = 'F';
			msg = '담보번호를 입력하세요.';
		} else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', 'ERP 담보를 취소하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					
					Ext.Ajax.request({
						url : 'sql/M_COL_DISTB.jsp',
						method : 'post',
						params: {
							V_TYPE: 'ERP',
							U_TYPE: 'D',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_MAST_DB_NO : Ext.getCmp('V_MAST_DB_NO').getValue(),
						},
						success: function(response) {
							Ext.getCmp('V_ERP_DB_YN').setValue('N');
							Ext.getCmp('tempGlCfmBtn').setDisabled(false);
							Ext.getCmp('tempGlCancelBtn').setDisabled(true);
							Ext.getCmp('saveBtn').setDisabled(false);
							Ext.getCmp('delBtn').setDisabled(false);
							Ext.getCmp('gridAddBtn').setDisabled(false);
							Ext.getCmp('gridDelBtn').setDisabled(false);
							
							Ext.getCmp('tempGlCfmBtn2').setDisabled(true);
							Ext.getCmp('tempGlCancelBtn2').setDisabled(true);
							
							var jsonResult = Ext.JSON.decode(response.responseText);
					    	var tryCnt = jsonResult.tryCnt;
    						var finCnt = jsonResult.finCnt;
    						var resMSG = jsonResult.resMSG;
    						var resDATE = jsonResult.resDATE;
    						var resString = jsonResult.resString;
    						
    						if(resMSG == 'SUCCESS') {
    							var tbController = M_IV_DISTR.app.getController("TbButtonController");
    							tbController.selBtnClick();
    							
    							Ext.toast({
									title : ' ',
									timeout : 1000,
									html : '담보취소완료',
									style : 'text-align: center',
									align : 't',
									width : 130,
								});
    						} else {
    							Ext.Msg.alert('확인', '담보취소실패<br>' + resString);
    						}
							
						}
					})
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
		
	},
	tempGlCfmBtnClick2 : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_ERP_DB_YN').getValue() == '' || Ext.getCmp('V_ERP_DB_YN').getValue() == 'N') {
			flag = 'F';
			msg = 'ERP담보생성 후 전표를 생성하세요.';
		} else if (Ext.getCmp('V_DB_TYPE_CHK').getValue() == '' || Ext.getCmp('V_DB_TYPE_CHK').getValue() == 'C') {
			flag = 'F';
			msg = '무담보는 전표 생성이 불가능합니다.';
		}else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', 'ERP에 전표를 생성하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					
					Ext.Ajax.request({
						url : 'sql/M_COL_DISTB.jsp',
						method : 'post',
						params: {
							V_TYPE: 'ERP',
							U_TYPE: 'I_GL',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_MAST_DB_NO : Ext.getCmp('V_MAST_DB_NO').getValue(),
						},
						success: function(response) {
							try{
								var jsonResult = Ext.JSON.decode(response.responseText);
						    	var tryCnt = jsonResult.tryCnt;
	    						var finCnt = jsonResult.finCnt;
	    						var resMSG = jsonResult.resMSG;
	    						var resDATE = jsonResult.resDATE;
	    						var resString = jsonResult.resString;
	    						var TEMP_GL_NO = jsonResult.TEMP_GL_NO;
								
	    						if(resMSG == 'SUCCESS') {
	    							Ext.getCmp('V_TEMP_GL_NO').setValue(TEMP_GL_NO);
	    							Ext.getCmp('tempGlCfmBtn').setDisabled(true);
	    							Ext.getCmp('tempGlCancelBtn').setDisabled(true);
	    							
	    							Ext.getCmp('tempGlCfmBtn2').setDisabled(true);
	    							Ext.getCmp('tempGlCancelBtn2').setDisabled(false);
	    							
	    							Ext.toast({
	    								title : ' ',
	    								timeout : 1000,
	    								html : '전표생성완료',
	    								style : 'text-align: center',
	    								align : 't',
	    								width : 130,
	    							});
	    						}
							}
							catch (e){
								Ext.Msg.alert('확인', '전표생성실패<br>' + response.responseText);
							}
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
		
	},
	tempGlCancelBtnClick2 : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (Ext.getCmp('V_MAST_DB_NO').getValue() == '' || Ext.getCmp('V_MAST_DB_NO').getValue() == null) {
			flag = 'F';
			msg = '담보번호를 입력하세요.';
		} else {
			flag = 'T';
		}
		
		if (flag == 'T') {
			var selModel1 = Ext.getCmp('myGrid').getSelectionModel();
			selModel1.selectAll();
			
			Ext.Msg.confirm('확인', 'ERP 전표를 취소하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
					
					Ext.Ajax.request({
						url : 'sql/M_COL_DISTB.jsp',
						method : 'post',
						params: {
							V_TYPE: 'ERP',
							U_TYPE: 'D_GL',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_MAST_DB_NO : Ext.getCmp('V_MAST_DB_NO').getValue(),
						},
						success: function(response) {
							Ext.getCmp('V_TEMP_GL_NO').setValue('');
							Ext.getCmp('tempGlCfmBtn2').setDisabled(false);
							Ext.getCmp('tempGlCancelBtn2').setDisabled(true);
						
							Ext.getCmp('tempGlCfmBtn').setDisabled(true);
							Ext.getCmp('tempGlCancelBtn').setDisabled(false);
							Ext.getCmp('saveBtn').setDisabled(true);
							Ext.getCmp('delBtn').setDisabled(true);
							Ext.getCmp('gridAddBtn').setDisabled(true);
							Ext.getCmp('gridDelBtn').setDisabled(true);
							
							Ext.toast({
								title : ' ',
								timeout : 1000,
								html : '전표취소완료',
								style : 'text-align: center',
								align : 't',
								width : 130,
							});
						}
					})
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
		
	},
	
	bankRefBtnClick : function(button, e, eOpts) {
		if(!!!Ext.getCmp('V_MAST_DB_NO').getValue()){
			Ext.Msg.alert('확인', '담보 조회 후 가능합니다.');
		} else {
			var popup = Ext.create("M_COL_DISTB.view.MyWindow1");
			popup.center();
	        popup.show();

	        var popStore = Ext.getStore('PopStore1');
	        popStore.removeAll();
	        
	        Ext.getCmp('W_DT_FR').setValue(Ext.getCmp('V_COL_DT').getValue());
		}
	},

});
