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

Ext.define('S_DN_PAPER.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: ['MyStore', 'MyStore1', 'MyStore2'],
    control: {
        "#myGrid1" : {
        	cellclick: 'myGrid1Click',
        }, 
		"#sendBtn" : {
			click: 'sendBtnClick'
		},
		"#sendCancelBtn" : {
			click: 'sendCancelBtnClick'
		},
		"#w_sendOK" : {
			click: 'w_sendOKClick'
		},
		"#w_sendCancel" : {
			click: 'w_sendCancelClick'
		},
		"#sendCancelBtn" : {
			click: 'sendCancelBtnClick'
		},
		"#cfmBtn" : {
			click: 'cfmBtnClick'
		},
		"#printBtn" : {
			click: 'printBtnClick'
		},
		"#xlsxDown" : {
			click: 'xlsxDownClick'
		},
		"#xlsxDown1" : {
			click: 'xlsxDown1Click'
		},
		"#xlsxDown11" : {
			click: 'xlsxDown11Click'
		},
		"#gridDelBtn" : { 
			click: 'gridDelBtnClick'
		},
		"#gridDelBtn2" : { 
			click: 'gridDelBtn2Click'
		},
		"#gridDelBtn1" : {
			click: 'gridDelBtn1Click'
		},
		"#gridDelBtn0" : {
			click: 'gridDelBtn0Click'
		}
    },
    
    myGrid1Click: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	var store2 = this.getMyStore2Store();
    	store2.removeAll();
		
    	store2.load({
    		params: {
    			V_TYPE: 'T2D',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_PRINT_NO: record.get('PRINT_NO')
    		},
    		callback: function(records,operations,success){
    		},
    	});
    },
    
    /*탭2 승인요청서*/
	sendBtnClick: function() {
    	var store1 = Ext.getStore('MyStore1');
    	var store2 = Ext.getStore('MyStore2');
    	var flag = '';
    	var msg = '';
    	
    	var popup = Ext.create("S_DN_PAPER.view.MyWindow");
    	popup.show();
    	
    	
    	var date = new Date();
    	
    	if(date.getFullYear() == 2020 && date.getMonth() == 7 && (date.getDate() == 3 || date.getDate() == 4)){
    		//8월 3~4일
    		Ext.getCmp('m1').setValue(true); //이화엽 차장
    		Ext.getCmp('m4').setValue(false); //이용래 부장
    		Ext.getCmp('m8').setValue(false); //테스트관리자
    		Ext.getCmp('m3').setValue(false); //김동영 과장
    		Ext.getCmp('m5').setValue(false); //손경희 차장
    		Ext.getCmp('m9').setValue(false); //이해용 과장
    	}
    	else if(date.getFullYear() == 2020 && date.getMonth() == 7 && (date.getDate() == 5 || date.getDate() == 6 || date.getDate() == 7)){
    		//8월 5~7일
    		Ext.getCmp('m1').setValue(false); //이화엽 차장
    		Ext.getCmp('m4').setValue(false); //이용래 부장
    		Ext.getCmp('m8').setValue(false); //테스트관리자
    		Ext.getCmp('m3').setValue(false); //김동영 과장
    		Ext.getCmp('m5').setValue(false); //손경희 차장
    		Ext.getCmp('m9').setValue(true); //이해용 과장
    	}
    	
    	Ext.getCmp('w_mail_type').setValue('Y');
    },
    
    /*탭2 승인취소요청서*/
    sendCancelBtnClick: function() {
    	var store1 = Ext.getStore('MyStore1');
    	var store2 = Ext.getStore('MyStore2');
    	var flag = '';
    	var msg = '';
    	
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		
		for(var i=0; i<gridRecord.length; i++) {
			if(gridRecord[i].get('V_TYPE') == 'V' && gridRecord[i].get('CFM_YN') == 'N') {
				flag = 'T';
			} else {
				flag = 'F';
				break;
			}
		}

		if(flag == 'T') {
			var popup = Ext.create("S_DN_PAPER.view.MyWindow");
	    	popup.show();
	    	
	    	Ext.getCmp('w_mail_type').setValue('N');
		} else {
			Ext.Msg.alert('확인', '출하승인을 취소하세요.');
		}
    },
    
    /*탭2 메일팝업창의 발송버튼*/
    w_sendOKClick: function() {
    	var store1 = Ext.getStore('MyStore1');
    	var store2 = Ext.getStore('MyStore2');
		var myMask = new Ext.LoadMask(Ext.getCmp('myGrid1') , {msg:"Please wait..."});
		
    	
		var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		var flag = Ext.getCmp('w_mail_type').getValue();
		
		var sendFlag = '';
		var errMsg = '';
		
		if( Ext.getCmp('m1').getValue() == false && Ext.getCmp('m2').getValue() == false && Ext.getCmp('m3').getValue() == false
				&& Ext.getCmp('m4').getValue() == false && Ext.getCmp('m5').getValue() == false && Ext.getCmp('m6').getValue().length < 4
				&& Ext.getCmp('m8').getValue() == false && Ext.getCmp('m9').getValue() == false 
			)
		{
			sendFlag = 'F';
			errMsg = '출하승인/취소요청서 수신자를 선택해주세요.';
		}
		else if (Ext.getCmp('mr1').getValue() == false && Ext.getCmp('mr2').getValue() == false && Ext.getCmp('mr3').getValue() == false){
			sendFlag = 'F';
			errMsg = '출하요청서 승인/취소완료 알림 수신자를 선택해주세요.';
		}
		else{
			sendFlag = 'T';
		}
		
		
		
		if ( sendFlag == 'T'){
			myMask.show();
			for(var i=0; i<gridRecord.length; i++) {
				if(gridRecord[i].get('V_TYPE') == 'V' && flag == 'Y') {
					gridRecord[i].set('V_TYPE', 'MAIL');
				}
				else if(gridRecord[i].get('V_TYPE') == 'V' && flag == 'N') {
					gridRecord[i].set('V_TYPE', 'MAIL_CANCEL');
				}
			}
			
			store1.sync({
				params : {
					V_TYPE : 'MAIL',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_DN_DT: Ext.getCmp('V_DN_REQ_DT').getValue(),
					V_MAIN_SERVER_YN : parent.Ext.getCmp('MAIN_SERVER_YN').getValue(),
					m1: Ext.getCmp('m1').getValue() == true ? Ext.getCmp('m1').inputValue : "",
					m2: Ext.getCmp('m2').getValue() == true ? Ext.getCmp('m2').inputValue : "",
					m3: Ext.getCmp('m3').getValue() == true ? Ext.getCmp('m3').inputValue : "",
					m4: Ext.getCmp('m4').getValue() == true ? Ext.getCmp('m4').inputValue : "",
					m5: Ext.getCmp('m5').getValue() == true ? Ext.getCmp('m5').inputValue : "",
					m6: Ext.getCmp('m6').getValue(), //기타1
					m8: Ext.getCmp('m8').getValue() == true ? Ext.getCmp('m8').inputValue : "",
					m9: Ext.getCmp('m9').getValue() == true ? Ext.getCmp('m9').inputValue : "",
					mr1: Ext.getCmp('mr1').getValue() == true ? Ext.getCmp('mr1').inputValue : "",
					mr2: Ext.getCmp('mr2').getValue() == true ? Ext.getCmp('mr2').inputValue : "",
					mr3: Ext.getCmp('mr3').getValue() == true ? Ext.getCmp('mr3').inputValue : "",
				},
				callback : function(records, operation, success) {
					var res = records.operations[0]._response.responseText;
					
					if (res.match('Exception')) {
						Ext.Msg.alert('확인', res);
						myMask.hide();
					} else {
						store1.reload();
						store2.reload();
						myMask.hide();

						var popWin=  Ext.getCmp('mailPop');
						popWin.destroy();
					}
				},
				success : function(response) {
				}
			});
			myMask.hide();
		}
		else{
			Ext.Msg.alert('확인', errMsg);
		}
		
		
		
    },
    
    /*탭2 팝업창의 취소버튼*/
    w_sendCancelClick: function() {
    	var popWin=  Ext.getCmp('mailPop');
		popWin.destroy();
    },

    /*탭2 요청서 출력*/
    printBtnClick: function() {
    	var store1 = Ext.getStore('MyStore1');
    	var store2 = Ext.getStore('MyStore2');
    	var flag = '';
    	var msg = '';
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	
    	var MAIN_SERVER_YN = parent.Ext.getCmp('MAIN_SERVER_YN').getValue();
    	
//    	if((gridRecord[0].get('REQ_CFM_YN') == 'Y')) {
//    		Ext.Msg.confirm('확인', '요청서를 출력하시겠습니까?', function(button) {
//        		if (button == 'yes') {
        			var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
        			var PRINT_NO = gridRecord[0].get('PRINT_NO').replace('-','');
        			
					var html = '';
        			if(MAIN_SERVER_YN == 'Y'){
        				if(gridRecord[0].get('DN_TYPE') == '출하 취소'){
        					html = '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/STEEL/S_DN_PAPER_N_STEEL.jsp?PRINT_NO='+PRINT_NO+'" width="100%" height="100%"></iframe>'
        				}
        				else{
        					html = '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/STEEL/S_DN_PAPER_Y_STEEL.jsp?PRINT_NO='+PRINT_NO+'" width="100%" height="100%"></iframe>'
        				}
        				
        				var myWin = new Ext.Window({
        					title : '출하요청서',
        					html : html,
        					width : 1000,
        					height : 768,
        					modal : true
        				});
        				myWin.show();
        				myWin.setSize(Ext.getBody().getViewSize());
        				myWin.setPagePosition(0, 0);

        			}
        			else{
        				if(gridRecord[0].get('DN_TYPE') == '출하 취소'){
        					html = '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/STEEL/S_DN_PAPER_N_STEEL_TEST.jsp?PRINT_NO='+PRINT_NO+'" width="100%" height="100%"></iframe>'
        				}
        				else{
        					html = '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/STEEL/S_DN_PAPER_Y_STEEL_TEST.jsp?PRINT_NO='+PRINT_NO+'" width="100%" height="100%"></iframe>'
        				}
        				
        				var myWin = new Ext.Window({
        					title : '출하요청서',
        					html : html,
        					width : 1000,
        					height : 768,
        					modal : true
        				});
        				myWin.show();
        				myWin.setSize(Ext.getBody().getViewSize());
        				myWin.setPagePosition(0, 0);
        				
        			}
//        		}
//        	})
//    	} 
    	
//    	else {
//    		Ext.Msg.alert('확인', '승인상태를 확인하세요.');
//    	}
    },
    
    /*탭2 요청서 삭제*/
    gridDelBtnClick: function(button, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		var flag = '';
		var msg = '';
		var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		
		for(var i=0; i<gridRecord.length; i++) {
			if(gridRecord[i].get('V_TYPE') == 'V' && gridRecord[i].get('REQ_CFM_YN') == 'N' && gridRecord[i].get('DN_TYPE') == '출하') {
				flag = 'T';
			} else if(gridRecord[i].get('V_TYPE') == 'V' && gridRecord[i].get('REQ_CFM_YN') == 'Y' && gridRecord[i].get('DN_TYPE') == '출하') {
				flag = 'F';
				msg = '이미 승인된 요청서입니다. 삭제할 수 없습니다. <br>승인취소를 요청하세요.';
				break;
			} else if(gridRecord[i].get('V_TYPE') == 'V' && gridRecord[i].get('DN_TYPE') == '출하 취소') {
				flag = 'F';
				msg = '출하취소요청서는 삭제할 수 없습니다.';
				break;
			}
		}

		if(flag == 'T') {
			Ext.Msg.confirm('확인', '요청서를 삭제 하시겠습니까?', function(button) {
				if (button == 'yes') {

					for(var i=0; i<gridRecord.length; i++) {
						if(gridRecord[i].get('V_TYPE') == 'V') {
							gridRecord[i].set('V_TYPE', 'D');
						}
					}
					
					store1.sync({
						params : {
							V_TYPE : 'SYNC',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							var res = records.operations[0]._response.responseText;

							if (res.match('Exception')) {
								Ext.Msg.alert('확인', res);
							} else {
								store1.reload();
								Ext.getStore('MyStore2').removeAll();
							}
						},
						success : function(response) {
						}
					});

					
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
			

	},
    
    xlsxDownClick: function(button, e, eOpts) {
    	var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid1');
    	grid.saveDocumentAs({
    		type: 'xlsx',
    		title: '출고요청서삭제/승인/취소요청/출력', //엑셀내타이틀
    		fileName: currentDate+'.xlsx' //엑셀파일이름
    	});
    },
    xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid3');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '출고삭제/확정/확정취소', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },
    
    xlsxDown11Click: function(button, e, eOpts) {
    	var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid2');
    	grid.saveDocumentAs({
    		type: 'xlsx',
    		title: '출고삭제/확정/확정취소', //엑셀내타이틀
    		fileName: currentDate+'.xlsx' //엑셀파일이름
    	});
    },
    
    /*탭3 출고확정취소(계근중량삭제)*/
    gridDelBtn2Click: function(button, e, eOpts) {
		var store3 = Ext.getStore('MyStore3');
		var flag = '';
		var msg = '';

			Ext.Msg.confirm('확인', '출고확정을 취소 하시겠습니까?', function(button) {
				if (button == 'yes') {
					var gridRecord = Ext.getCmp('myGrid3').getSelectionModel().getSelection();

					for(var i=0; i<gridRecord.length; i++) {
						if(gridRecord[i].get('V_TYPE') == 'V') {
							gridRecord[i].set('V_TYPE', 'D3');
						}
					}
					
					store3.sync({
						params : {
							V_TYPE : 'SYNC',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							var res = records.operations[0]._response.responseText;

							if (res.match('Exception')) {
								Ext.Msg.alert('확인', res);
							} else {
								store3.reload();
							}
						},
						success : function(response) {
						}
					});

					
				}
			});

	},
	
	/*탭1 출고삭제*/
	gridDelBtn0Click: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var flag = '';
		var msg = '';
		
		Ext.Msg.confirm('확인', '출고를 삭제하시겠습니까?', function(button) {
			if (button == 'yes') {
				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				
				for(var i=0; i<gridRecord.length; i++) {
					if(gridRecord[i].get('V_TYPE') == 'V') {
						gridRecord[i].set('V_TYPE', 'D0');
					}
				}
				
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						var res = records.operations[0]._response.responseText;
						
						if (res.match('Exception')) {
							Ext.Msg.alert('확인', res);
						} else {
							store.reload();
						}
					},
					success : function(response) {
					}
				});
				
				
			}
		});
		
	},
});
