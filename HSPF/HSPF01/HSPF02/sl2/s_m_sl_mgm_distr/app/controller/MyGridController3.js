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

Ext.define('S_M_SL_MGM_DISTR.controller.MyGridController3', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore3' ],
	control : {
		"#slBnCfmBtn" : {
			click : 'slBnCfmBtnClick'
		},
		"#slBnCancelBtn" : {
			click : 'slBnCancelBtnClick'
		},
		"#xlsxDown3" : {
			click : 'xlsxDown3Click'
		}
	},
	
	slBnCfmBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore3');
		var gridRecord = Ext.getCmp('myGrid3').getSelectionModel().getSelection();
		var flag = 'T';
		var msg = '';
		
		if (!!!Ext.getCmp('V_TEMP_GL_DT2').getValue()) {
			flag = 'F';
			msg = '전표일자를 입력하십시오.';
		} else if (gridRecord.length < 1) {
			flag = 'F';
			msg = '선택된 행이 없습니다.';
		} else {
			for(var i=0; i<gridRecord.length; i++) {
				if(gridRecord[i].get('GL_YN') == 'Y'){
					flag = 'F';
					msg = '전표가 이미 생성된 행이 선택되었습니다.';
					break;
				}
			}
		}
		
		if (flag == 'T') {
			
			Ext.Msg.confirm('확인', '전표를 생성하시겠습니까?', function(button) {
				if (button == 'yes') {
					for(var i=0; i<gridRecord.length; i++) {
						gridRecord[i].set('V_TYPE', 'I');
					}

					store.sync({ 
						params : {
							V_TYPE : 'GL_BN',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_YYYYMM: Ext.getCmp('V_DATE').getValue(),
							V_TEMP_GL_DT: Ext.getCmp('V_TEMP_GL_DT2').getValue(),
						},
						callback : function(batch) {
							var tbController = S_M_SL_MGM_DISTR.app.getController("TbButtonController");
				    		tbController.selBtnClick();
				    		
				    		try{
				    			var jsonResult = Ext.JSON.decode(batch.operations[0]._response.responseText);
				    			var tryCnt = jsonResult.tryCnt;
				    			var finCnt = jsonResult.finCnt;
				    			var resMSG = jsonResult.resMSG;
				    			var resDATE = jsonResult.resDATE;
				    			var resString = jsonResult.resString;
				    			var TEMP_GL_NO = jsonResult.TEMP_GL_NO;
				    			
				    			if(resMSG == 'SUCCESS') {
				    				Ext.toast({
				    					title : ' ',
				    					timeout : 1000,
				    					html : '전표생성완료',
				    					style : 'text-align: center',
				    					align : 't',
				    					width : 130,
				    				});
				    			}
				    			else{
				    				Ext.Msg.alert('확인', '전표생성실패<br>' + resString);
				    			}
				    		}
				    		catch (e){
				    			myMask.hide();
				    			Ext.Msg.alert('확인', '전표생성실패<br>' + batch.operations[0]._response.responseText);
				    		}
						}, 
						success: function() {
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
	},
	
	slBnCancelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore3');
		var gridRecord = Ext.getCmp('myGrid3').getSelectionModel().getSelection();
		var flag = 'T';
		var msg = '';
		
		if (gridRecord.length < 1) {
			flag = 'F';
			msg = '선택된 행이 없습니다.';
		} else {
			for(var i=0; i<gridRecord.length; i++) {
				if(gridRecord[i].get('GL_YN') != 'Y'){
					flag = 'F';
					msg = '전표가 존재하지 않는 행이 선택되었습니다.';
					break;
				}
			}
		}
		
		if (flag == 'T') {
			
			Ext.Msg.confirm('확인', '전표를 취소하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					for(var i=0; i<gridRecord.length; i++) {
						gridRecord[i].set('V_TYPE', 'D');
					}
					
					store.sync({ 
						params : {
							V_TYPE : 'GL_BN',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GEMP_NO').getValue(),
							V_YYYYMM: Ext.getCmp('V_DATE').getValue(),
						},
						callback : function(records, operation, success) {
							var tbController = S_M_SL_MGM_DISTR.app.getController("TbButtonController");
				    		tbController.selBtnClick();
				    		
				    		Ext.toast({
								title : ' ',
								timeout : 1000,
								html : '전표취소완료',
								style : 'text-align: center',
								align : 't',
								width : 130,
							});
						}, 
						success: function() {
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
		
	},
	
	xlsxDown3Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid3');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '매출처 집계', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    }
});
