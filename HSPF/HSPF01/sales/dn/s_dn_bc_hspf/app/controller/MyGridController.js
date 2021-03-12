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

Ext.define('S_DN_BC_HSPF.controller.MyGridController', {
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
        "#gridErpBtn": {
        	click: 'gridErpBtnClick'
        },
        "#gridErpCancelBtn": {
        	click: 'gridErpCancelBtnClick'
        },
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
        "#barcodeReprintBtn": {
        	click: 'barcodeReprintBtnClick'
        },
        "#barcodePrintBtn": {
        	click: 'barcodePrintBtnClick'
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
    						V_TYPE : 'SYNC',
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
    
    gridErpBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"인터페이스 중"});
    	var flag = '';
    	var msg = '';
    	
    	
    	for(var i=0; i<gridRecord.length; i++) {
    		if(gridRecord[i].get('IF_YN')=='Y') {
    			flag = 'F';
    			msg = '이미 전송 된 바코드입니다.';
    		} else {
				gridRecord[i].data['V_TYPE'] = 'IF';
				flag = 'T';
			}
		}
    	
    	
    	if(gridRecord.length > 0) {
    		if(flag =='T') {
    			Ext.Msg.confirm('확인','ERP로 데이터를 전송하시겠습니까?', function(button){
        			if(button == 'yes') {
        				myMask.show();
        				store.sync({
        					params: {
        						V_TYPE : 'SYNC',
        						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
        						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
        					},
        					callback: function(records, operation, success) {
        						var response = records.operations[0]._response.responseText;
        						var jsonResult = Ext.JSON.decode(response);
        						
        						var tryCnt = jsonResult.tryCnt;
        						var finCnt = jsonResult.finCnt;
        						var resMSG = jsonResult.resMSG;
        						var resDATE = jsonResult.resDATE;
    							var resString = jsonResult.resString;
    							
    							if(resString == 'SUCCESS') {
    								Ext.Msg.alert('확인', '총 [ ' + finCnt + ' ] 건 전송 완료');
    	    						store.reload();
    	    	    				myMask.hide();
    							} else if (resMSG == 'ERROR'){
    								Ext.Msg.alert('확인', '총 [ ' + tryCnt + ' ] 건 중 [ ' + finCnt + ' ] 건 전송 완료 <br>관리자 문의요망<br>' + resString + '<br>' + resDATE);
    								myMask.hide();
    							} else {
    								Ext.Msg.alert('확인', '인터페이스 오류, 관리자 문의요망<br>' + resString + '<br>' + resDATE);
    								myMask.hide();
    							}
        					}
        				});
        			}
        		});
    		} else {
    			Ext.Msg.alert('확인', msg);
    		}
    	} else {
    		Ext.Msg.alert('확인', '전송할 데이터를 선택하세요.');
    	}
    },
    
    gridErpCancelBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"인터페이스 중"});
    	var flag = '';
    	var msg = '';
    	
    	
    	for(var i=0; i<gridRecord.length; i++) {
    		if(gridRecord[i].get('IF_YN')=='N') {
    			flag = 'F';
    			msg = '전송이력이 없습니다.';
    		} else {
    			gridRecord[i].data['V_TYPE'] = 'IF_CANCEL';
    			flag = 'T';
    		}
    	}
    	
    	if(gridRecord.length > 0) {
    		if(flag =='T') {
    			Ext.Msg.confirm('확인','ERP에 전송한 데이터를 삭제(전송취소)하시겠습니까?', function(button){
    				if(button == 'yes') {
    					myMask.show();
    					store.sync({
    						params: {
    							V_TYPE : 'SYNC',
    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						},
    						callback: function(records, operation, success) {
    							var response = records.operations[0]._response.responseText;
    							var jsonResult = Ext.JSON.decode(response);
    							
    							var tryCnt = jsonResult.tryCnt;
    							var finCnt = jsonResult.finCnt;
    							var resMSG = jsonResult.resMSG;
    							var resDATE = jsonResult.resDATE;
    							var resString = jsonResult.resString;
    							
    							if(resString == 'SUCCESS') {
    								Ext.Msg.alert('확인', '총 [ ' + finCnt + ' ] 건 전송취소완료');
    								store.reload();
    								myMask.hide();
    							} else if (resMSG == 'ERROR'){
    								Ext.Msg.alert('확인', '총 [ ' + tryCnt + ' ] 건 중 [ ' + finCnt + ' ] 건 전송취소완료 <br>관리자 문의요망<br>' + resString + '<br>' + resDATE);
    								myMask.hide();
    							} else {
    								Ext.Msg.alert('확인', '인터페이스 오류, 관리자 문의요망<br>' + resString + '<br>' + resDATE);
    								myMask.hide();
    							}
    						}
    					});
    				}
    			});
    		} else {
    			Ext.Msg.alert('확인', msg);
    		}
    	} else {
    		Ext.Msg.alert('확인', '전송취소 할 데이터를 선택하세요.');
    	}
    },

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '바코드출고현황', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },
    
    barcodeReprintBtnClick: function(button, e, eOpts) {
    	var grid = Ext.getCmp('myGrid');
    	var store = grid.getStore();
    	var record = grid.getSelectionModel().getSelection();
    	var flag = 'Y';
    	
    	if(record.length >= 1){
    		for(var i = 0 ; i < record.length ; i ++){
    			if(record[0].data['BOX_BC_NO'] != record[i].data['BOX_BC_NO']){
    				flag = 'N';
    				msg = '바코드 재발행은 같은 박스 바코드만 가능합니다.<br>단순 출력을 원하시면 우측 바코드 출력버튼을 눌러주세요.';
    			}
    		}
    		if(flag == 'N'){
    			Ext.Msg.alert('확인',msg);
    		}
    		else{
    			Ext.Msg.confirm('확인','박스바코드를 재발행 하시겠습니까?', function(button){
    				if(button == 'yes') {
    					var lot_no = record[0].data['LOT_BC_NO'];
    		    		record[0].set('V_TYPE', 'B2');   //TODO SYNC 에서 사용할 V_TYPE을 넣어주세요
    		    		
    		    		for( var i = 1 ; i < record.length ; i ++){
    						record[i].set('V_TYPE', 'B2'); //TODO SYNC 에서 사용할 V_TYPE을 넣어주세요
    						lot_no += '<>';
    		    			lot_no += record[i].data['LOT_BC_NO'];
    		    		}
    		    		lot_no = encodeURI(lot_no);
    		    		store.sync({
    		    			params:{
    		    				V_TYPE : 'SYNC',
    		    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    							
    		    			},
    		    			callback: function(records,operations,success){
    		    				var myWin = new Ext.Window({
    		    					title : '바코드출력',
    		    					html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/S_DN_REPRINT.jsp?V_TYPE=S&V_LOT_NO='+lot_no+'" width="100%" height="100%"></iframe>',
    		    					width : 1000,
    		    					height : 768,
    		    					modal : true
    		    				});
    		    				myWin.show();
    		    				myWin.setSize(Ext.getBody().getViewSize());
    		    				myWin.setPagePosition(0, 0);
    		    				store.reload();
    						}
    		    		});
    				}
        		});
    		}
    		
    	}
    	else{
    		Ext.Msg.alert('확인', '박스바코드를 선택하세요.');
    	}
    },
    
    barcodePrintBtnClick: function(button, e, eOpts) {
    	var grid = Ext.getCmp('myGrid');
    	var store = grid.getStore();
    	var record = grid.getSelectionModel().getSelection();
    	
    	if(record.length >= 1){
    		var lot_no = record[0].data['LOT_BC_NO'];
    		for( var i = 1 ; i < record.length ; i ++){
				lot_no += '<>';
    			lot_no += record[i].data['LOT_BC_NO'];
    		}
    		lot_no = encodeURI(lot_no);
    		
    		var myWin = new Ext.Window({
				title : '바코드출력',
				html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/DLVY_BARCODE_LOT.jsp?V_TYPE=S&V_LOT_NO='+lot_no+'" width="100%" height="100%"></iframe>',
				width : 1000,
				height : 768,
				modal : true
			});
			myWin.show();
			myWin.setSize(Ext.getBody().getViewSize());
			myWin.setPagePosition(0, 0);
    	}
    	else{
    		Ext.Msg.alert('확인', '바코드를 선택하세요.');
    	}
    }

});
