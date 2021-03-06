/*
 * File: app/controller/MyGridController.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
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

Ext.define('S_DN_TO_SRM_HSPF.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore'
    ],

    control: {
        "#gridAddBtn": {
            click: 'gridAddBtnClick'
        },
        "#gridDelBtn": {
            click: 'gridDelBtnClick'
        },
        "#dnIfBtn": {
        	click: 'dnIfBtnClick'
        },
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
        "#ifBtn": {
        	click: 'ifBtnClick'
        },
        "#ifBtn2": {
        	click: 'ifBtn2Click'
        },
        "#ifBtn3": {
        	click: 'ifBtn3Click'
        },
        "#retBtn": {
        	click: 'retBtnClick'
        },
        "#myGrid" : {
    		celldblclick: 'myGridDblClick'
        },
		'#fileGrid' : { /*파일다운더블클릭*/
			celldblclick : 'fileGridDblClick',
		}, 
		"#dataHideBtn": {
        	click: 'dataHideBtnClick'
        },
    },

    gridAddBtnClick: function(button, e, eOpts) {
        //var popup = Ext.create("B_COMP_HSPF.view.WinAddRow");
        //popup.show();
        //Ext.getCmp('rowCount').setValue(1);
    },

    gridDelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

    	if(gridRecord.length > 0) {
    		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
    			if(button == 'yes') {
    				for(var i=0; i<gridRecord.length; i++) {
    		    		if(gridRecord[i].data['V_TYPE']=='V') {
    		    			gridRecord[i].data['V_TYPE'] = 'D';
    		    		}
    		    	}
    		    	store.sync({
    					params: {
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    		    		callback: function(records, operation, success) {
    		    			store.reload();
    					}
    		    	});
    			}
    		});
    	}
    },

    
    retBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

    	if(gridRecord.length > 0) {
    		Ext.Msg.confirm('확인','해당기능 수행 시 SRM출고번호가 새로 생성되며 <br>인터페이스 가능단계로 변경됩니다.', function(button){
    			if(button == 'yes') {
    				for(var i=0; i<gridRecord.length; i++) {
    		    		if(gridRecord[i].data['V_TYPE']=='V') {
    		    			gridRecord[i].data['V_TYPE'] = 'R';
    		    		}
    		    	}
    		    	store.sync({
    					params: {
    						V_TYPE: 'SYNC',
    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    		    		callback: function(records, operation, success) {
    		    			store.reload();
    					}
    		    	});
    			}
    		});
    	}
    },
    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'SRM발주등록', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    
    ifBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var V_MAT_IF_DLV_NO = '';
    	var V_DD_NO_SEQ = '';
    	var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"인터페이스 중"});
    	var flag = 'T';
    	
    	if(gridRecord.length > 0) {
    		myMask.show();
			for(var i=0; i<gridRecord.length; i++) {
				if(gridRecord[i].data['IF_YN'] == 'N') { //인터페이스 되지않은 항목만..
					V_DD_NO_SEQ += (gridRecord[i].data['DD_NO']+gridRecord[i].data['DD_SEQ']+',');
				} else if(gridRecord[i].data['IF_YN'] == 'Y') {
					flag = 'F';
					break;
				}
	    	}
			
			if(flag == 'T') {
				Ext.Msg.confirm('확인','인터페이스 하시겠습니까?.', function(button){
	    			if(button == 'yes') {
	    				Ext.Ajax.request({
	    		    		url:'sql/s_dn_if_anylink_hspf.jsp',
	    		    		method: 'post',
	    		    		params: {
	    		    			V_TYPE : 'V1',
	    		    			V_DD_NO_SEQ : V_DD_NO_SEQ
	    		    		},
	    		    		callback : function(records,operations,success){
	    		    	    },
	    		    	    success : function(response) {
	    		    	    	myMask.hide();
	    		    	    	store.reload();
	    		    	    	var jsonResult = Ext.JSON.decode(response.responseText);
	    						var resMSG = jsonResult.resMSG;
	    						var tryCnt = gridRecord.length;
	    						var finCnt = gridRecord.length;
	    						var resDATE = jsonResult.resDATE;
	    						var resString = jsonResult.resString;
	    						
	    						if(resString == 'SUCCESS') {
	    							Ext.Msg.alert('확인', '총 [ ' + finCnt + ' ] 건 인터페이스 완료');
	    							store.reload();
	    		    				myMask.hide();
	    						} else if (resString == 'ERROR'){
	    							Ext.Msg.alert('확인', '일부실패, 총 [ ' + finCnt + ' ] 건 전송 완료 <br>관리자 문의요망<br>' + resString + '<br>' + resDATE);
	    							store.reload();
	    							myMask.hide();
	    						} else {
	    							Ext.Msg.alert('확인', '인터페이스 오류, 관리자 문의요망<br>' + resString);
	    							store.reload();
	    							myMask.hide();
	    						}
	    		    	    },
	    		    		scope: this
	    		    	});
	    			} else {
    					myMask.hide();
    				}
				});
			} else {
				myMask.hide();
				Ext.Msg.alert('확인', '이미 인터페이스 된 내역입니다.');
			}
    	}
    },
    
    ifBtn2Click: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var V_MAT_IF_DLV_NO = '';
    	var V_DD_NO_SEQ = '';
    	var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"인터페이스 중"});
    	var flag = 'T';
    	
    	var V_CHECK_DD_NO_SEQ = '';
    	
    	if(gridRecord.length > 0) {
    		for(var i=0; i<gridRecord.length; i++) {
    			if(gridRecord[i].data['IF_YN'] == 'Y') {
    				flag = 'F';
    				break;
    			} else {
    				V_CHECK_DD_NO_SEQ += ("\'" + gridRecord[i].data['DD_NO'] + gridRecord[i].data['DD_SEQ'] + "\',") ;
    				flag = 'T';
    			}
    		}
    		
    		V_DD_NO_SEQ += (gridRecord[0].data['DD_NO']+gridRecord[0].data['DD_SEQ']+',');
    		
    		
    		if(flag == 'T') {
    			Ext.Ajax.request({
    				url:'sql/s_dn_to_srm_hspf.jsp',
    				method: 'post',
    				params: {
    					V_TYPE : 'BOX_CHECK',
    					V_CHECK_DD_NO_SEQ : V_CHECK_DD_NO_SEQ,
    					
    				},
    				timeout : 180000,
    				success : function(response) {
    					var jsonResult = Ext.JSON.decode(response.responseText);
    					var existCount = jsonResult.resultList.length;
    					
    					if(existCount >= 1){
    						var errMsg = '아래의 박스 바코드는 이미 소재로 출고 기록이 있는 바코드입니다.<br> ';
    						for(var i = 0 ; i < existCount ; i ++){
    							errMsg += (jsonResult.resultList[i].BOX_BC_NO + '<br>');
    						}
    						errMsg += '바코드출고현황 페이지에서 확인 바랍니다.';
    						Ext.Msg.alert('확인', errMsg);
    					}
    					else{
    						Ext.Msg.confirm('확인','(자동매핑)인터페이스 하시겠습니까?.', function(button){
    		    				if(button == 'yes') {
    		    					myMask.show();
    		    					
    		    					
    		    					Ext.Ajax.request({
    		    						url:'sql/s_dn_to_srm_hspf.jsp',
    		    						method: 'post',
    		    						timeout : 180000,
    		    						params: {
    		    							V_TYPE : 'SRM_IF1',
    		    							V_DN_DT : Ext.getCmp('V_DN_DT').getValue(),
    		    							V_FROM_SL_CD : Ext.getCmp('V_FROM_SL_CD').getValue()
    		    						},
    		    						callback : function(records,operations,success){
    		    						},
    		    						success : function(response) {
    		    							var SRM_DLV_NO = response.responseText; 
    		    							
    		    							store.sync({
    		    		    					params: {
    		    		    						V_TYPE: 'SYNC2',
    		    		    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    		    		    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    		    		    						V_SRM_DLV_NO : SRM_DLV_NO,
    		    		    					},
    		    		    		    		callback: function(records, operation, success) {
//    		    		    		    			store.reload();
    		    		    		    			
    		    		    		    			Ext.Ajax.request({
    		    		        						url:'sql/s_dn_if_anylink_hspf_190325.jsp',
    		    		        						method: 'post',
    		    		        						params: {
    		    		        							V_TYPE : 'V1',
    		    		        							V_DD_NO_SEQ : V_DD_NO_SEQ
    		    		        						},
    		    		        						timeout : 180000,
    		    		        						callback : function(records,operations,success){
    		    		        						},
    		    		        						success : function(response) {
    		    		        							myMask.hide();
    		    		        							store.reload();
    		    		        							var jsonResult = Ext.JSON.decode(response.responseText);
    		    		        							var resMSG = jsonResult.resMSG;
    		    		        							var tryCnt = gridRecord.length;
    		    		        							var finCnt = gridRecord.length;
    		    		        							var resDATE = jsonResult.resDATE;
    		    		        							var resString = jsonResult.resString;
    		    		        							
    		    		        							if(resString == 'SUCCESS') {
    		    		        								Ext.Msg.alert('확인', '총 [ ' + finCnt + ' ] 건 인터페이스 완료');
    		    		        								store.reload();
    		    		        								myMask.hide();
    		    		        							} else if (resString == 'ERROR'){
    		    		        								Ext.Msg.alert('확인', '일부실패, 총 [ ' + finCnt + ' ] 건 전송 완료 <br>관리자 문의요망<br>' + resString + '<br>' + resDATE);
    		    		        								store.reload();
    		    		        								myMask.hide();
    		    		        							} else {
    		    		        								Ext.Msg.alert('확인', '인터페이스 오류, 관리자 문의요망<br>' + resString);
    		    		        								store.reload();
    		    		        								myMask.hide();
    		    		        							}
    		    		        						},
    		    		        						scope: this
    		    		        					});
    		    		    		    			
    		    		    		    			
    		    		    					}
    		    		    		    	});
    		    							
    		    							
    		    						},
    		    						scope: this
    		    					});
    		    					
    		    				} else {
    		    					myMask.hide();
    		    				}
    		    			});
    					}
    					
    				}
        		});
    		} else {
    			myMask.hide();
    			Ext.Msg.alert('확인', '이미 인터페이스 된 내역입니다.');
    		}
    		
    	}
    	
//    	console.log(V_MAT_IF_DLV_NO);
    },
    ifBtn3Click: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var V_MAT_IF_DLV_NO = '';
    	var V_DD_NO_SEQ = '';
    	var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"인터페이스 중"});
    	var flag = 'T';
    	
    		
//    		if(flag == 'T') {
    			Ext.Msg.confirm('확인','(테스트)인터페이스 하시겠습니까?.', function(button){
    				if(button == 'yes') {
    					Ext.Ajax.request({
						url:'sql/s_dn_to_srm_hspf.jsp',
						method: 'post',
						params: {
							V_TYPE : 'SRM_IF1',
							V_DN_DT : Ext.getCmp('V_DN_DT').getValue(),
							V_FROM_SL_CD : Ext.getCmp('V_FROM_SL_CD').getValue()
						},
						callback : function(records,operations,success){
						},
						success : function(response) {
							var SRM_DLV_NO = response.responseText; 
							
							store.sync({
		    					params: {
		    						V_TYPE: 'SYNC2',
		    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		    						V_SRM_DLV_NO : SRM_DLV_NO,
		    					},
		    		    		callback: function(records, operation, success) {
		    		    			store.reload();
		    					}
		    		    	});
							
							
						},
						scope: this
					});
    					
//    					Ext.Ajax.request({
//    						url:'sql/s_dn_if_anylink_hspf_190325.jsp',
//    						method: 'post',
//    						params: {
//    							V_TYPE : 'V1',
//    							V_DD_NO_SEQ : V_DD_NO_SEQ
//    						},
//    						callback : function(records,operations,success){
//    						},
//    						success : function(response) {
//    							myMask.hide();
//    							store.reload();
//    							var jsonResult = Ext.JSON.decode(response.responseText);
//    							var resMSG = jsonResult.resMSG;
////	    						var finCnt = jsonResult.finCnt;
//    							var tryCnt = gridRecord.length;
//    							var finCnt = gridRecord.length;
//    							var resDATE = jsonResult.resDATE;
//    							var resString = jsonResult.resString;
//    							
//    							if(resString == 'SUCCESS') {
//    								Ext.Msg.alert('확인', '총 [ ' + finCnt + ' ] 건 인터페이스 완료');
//    								store.reload();
//    								myMask.hide();
//    							} else if (resString == 'ERROR'){
//    								Ext.Msg.alert('확인', '일부실패, 총 [ ' + finCnt + ' ] 건 전송 완료 <br>관리자 문의요망<br>' + resString + '<br>' + resDATE);
//    								store.reload();
//    								myMask.hide();
//    							} else {
//    								Ext.Msg.alert('확인', '인터페이스 오류, 관리자 문의요망<br>' + resString);
//    								store.reload();
//    								myMask.hide();
//    							}
//    						},
//    						scope: this
//    					});
    				}
    			});
//    		} else {
//    			myMask.hide();
//    			Ext.Msg.alert('확인', '이미 인터페이스 된 내역입니다.');
//    		}
    	
//    	console.log(V_MAT_IF_DLV_NO);
    },
    
    myGridDblClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		
		var popup = Ext.create("S_DN_TO_SRM_HSPF.view.MyWindow");
		
		var width = Ext.getBody().getViewSize().width - 200;
	    var height = Ext.getBody().getViewSize().height - 200;
	    popup.setSize(width, height);
	    popup.center();
	    
	    popup.show();
		
		var fileStore = Ext.getStore('FileStore');
		fileStore.removeAll();
	   	fileStore.load({
			params : {
				V_TYPE : 'S1',
				V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
				V_DD_NO: gridRecord[0].get('DD_NO') + gridRecord[0].get('DD_SEQ') 
			},
			callback : function(records, operations, success) {
			}
		});
    },
    
    /* [파일다운] */
    fileGridDblClick:  function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var gridObj = Ext.getCmp('fileGrid');
		var gridRecord = gridObj.getSelectionModel().getSelection();
		var V_FILE_NM = gridRecord[0].data['FILE_NM'];
		var V_FILE_IN_SYSTEM_NM = gridRecord[0].data['FILE_IN_SYSTEM_NM'];
		V_FILE_NM = encodeURI(V_FILE_NM);
		V_FILE_IN_SYSTEM_NM = encodeURI(V_FILE_IN_SYSTEM_NM);
		
//		console.log(V_FILE_NM);
//		console.log(V_FILE_IN_SYSTEM_NM);
		var myWin=new Ext.Window(
				{
					title : '파일다운로드',
					html : '<iframe name="xxx" border =0 src="sql/SCM_DLVY_HSPF_FILE.jsp?V_TYPE=D&V_FILE_NM='+V_FILE_NM+'&V_FILE_IN_SYSTEM_NM='+V_FILE_IN_SYSTEM_NM+'" width="1%" height="1%"></iframe>',
					width :500,
					height:500
				});
		myWin.show();
		myWin.hide();
	},
	
	dataHideBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var V_MAT_IF_DLV_NO = '';
    	var V_DD_NO_SEQ = '';
    	var flag = 'T';
    	
    	if(gridRecord.length > 0) {
			for(var i=0; i<gridRecord.length; i++) {
				if(gridRecord[i].data['IF_YN'] == 'N') { //인터페이스 되지않은 항목만..
					V_DD_NO_SEQ += (gridRecord[i].data['DD_NO']+gridRecord[i].data['DD_SEQ']+',');
				} else if(gridRecord[i].data['IF_YN'] == 'Y') {
					flag = 'F';
					break;
				}
	    	}
			
			if(flag == 'T') {
				Ext.Msg.confirm('확인','숨기기 하시겠습니까?.', function(button){
	    			if(button == 'yes') {
	    				store.sync({
	    					params: {
	    						V_TYPE: 'SYNC_HIDE',
	    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    					},
	    		    		callback: function(records, operation, success) {
	    		    			store.reload();
	    					}
	    		    	});
	    			} 
				});
			} 
			else {
				Ext.Msg.alert('확인', '이미 인터페이스 된 내역입니다.');
			}
    	}
    },

});
