/*
 * File: app/controller/MyGridController.js
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

Ext.define('S_DN_REQ_HSPF.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore', 'MyStore1'
    ],

    control: {
        "#gridAddBtn": {
            click: 'gridAddBtnClick'
        },
        "#gridDelBtn": {
            click: 'gridDelBtnClick'
        },
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
        "#xmlDown": {
            click: 'xmlDownClick'
        },
        "#gridRequestBtn": {
            click: 'gridRequestBtnClick'
        },
        '#myGrid' : {
        	cellclick: 'mygridCellClick'
        },
        "#printInvoiceBtn": {
            click: 'printInvoiceBtnClick'
        },
        "#printPackingBtn": {
            click: 'printPackingBtnClick'
        },
    },

    gridAddBtnClick: function(button, e, eOpts) {
        var popup = Ext.create("S_DN_REQ_HSPF.view.WinAddRow");
        popup.show();
        Ext.getCmp('rowCount').setValue(1);
    },

    gridDelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
            	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

            	if(gridRecord.length > 0) {
            		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
            			if(button == 'yes') {
            				store.remove(gridRecord);
//            				for(var i=0; i<gridRecord.length; i++) {
//            		    		if(gridRecord[i].data['V_TYPE']=='V') {
//            		    			gridRecord[i].data['V_TYPE'] = 'D';
//            		    		}
//            		    	}
//            		    	store.sync({
//            					params: {
//            						V_USR_ID : 'admin',//parent.Ext.getCmp('GUSER_ID').getValue(),
//            					},
//            		    		callback: function(records, operation, success) {
//            		    			store.reload();
//            					}
//            		    	});
            			}
            		});
            	}
    },
    
    gridRequestBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	var flag = '';
    	
    	for(var i=0; i<gridRecord.length; i++) {
    		if(gridRecord[i].data['DR_QTY'] == null || gridRecord[i].data['DR_QTY'] == undefined ||  gridRecord[i].data['DR_QTY'] == 0) {
    			flag = 'F';
    			msg = '출고요청수량을 확인하세요.';
    		} else if(gridRecord[i].data['TO_SL_CD'] == null || gridRecord[i].data['TO_SL_CD'] == undefined) {
				flag = 'F';
				msg = '요청창고(TO)를 선택하세요.';
    		} else {
    			if(gridRecord[i].data['V_TYPE'] == 'V') {
    				gridRecord[i].set('V_TYPE', 'DI');
    				flag = 'T';
    			}
    		}
    	}
    	
    	var date = Ext.getCmp('V_DR_DT').getValue();
    	var year = date.getFullYear();                                
		var month = (1 + date.getMonth());                     
		
		month = month >= 10 ? month : '0' + month;     
		var day = date.getDate();                      
		day = day >= 10 ? day : '0' + day;    
		
		date =  year + '-' + month + '-' + day;
    	
		if(gridRecord.length > 0) {
			if(flag == 'T') {
				Ext.MessageBox.confirm('확인', '출고요청하시겠습니까?<br>출고요청일: ' + date
		    			 , function(btn) {
					if(btn == 'yes') {
						store.sync({
				    		params : {
								V_TYPE : 'SYNC',
				    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				    			V_DR_DT: Ext.getCmp('V_DR_DT').getValue(),
				    		},
				    		callback : function(records, operation, success) {
				    			store.reload();
				    			store1.reload();
				    		}
				    	});
					}
		    	});
			} else {
				Ext.Msg.alert('확인', msg);
			}

		}
    },

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: '출고요청등록', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },
    printInvoiceBtnClick: function(button, e, eOpts) {
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	
    	if(gridRecord.length < 1){
    		Ext.Msg.alert('확인', '선택된 행이 없습니다.');
    		return;
    	} else if(!!!gridRecord[0].get('DD_NO')){
    		Ext.Msg.alert('확인', '출고지시번호가 존재하지 않는 행이 선택되었습니다.');
    		return;
    	} else {
    		var V_DD_NO= gridRecord[0].get('DD_NO');
    		
    		if(parent.Ext.getCmp('MAIN_SERVER_YN').getValue() == 'Y'){
		    	url = 'http://123.142.124.170:8080/aireport/on_server/S_BL_INVOICE_DD_TOT_HSPF.jsp?DD_NO=' + V_DD_NO;  		
			} else{
				url = 'http://123.142.124.170:8080/aireport/on_server/S_BL_INVOICE_DD_TOT_HSPF_TEST.jsp?DD_NO=' + V_DD_NO;  	 	
			}
	    	
			Ext.Msg.confirm('확인', 'INVOICE를 출력하시겠습니까?', function(button) {
        		if (button == 'yes') {
					var myWin = new Ext.Window({
						title : 'COMMERCIAL INVOICE',
						html : '<iframe name="xxx" border =0 src="'+url+'" width="100%" height="100%"></iframe>',
						width : 1000,
						height : 768,
						modal : true
					});
					
					myWin.show();
					myWin.setSize(Ext.getBody().getViewSize());
					myWin.setPagePosition(0, 0);
        		}
        	});
    	}
    },

    printPackingBtnClick: function(button, e, eOpts) {
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	
    	if(gridRecord.length < 1){
    		Ext.Msg.alert('확인', '선택된 행이 없습니다.');
    		return;
    	} else if(!!!gridRecord[0].get('DD_NO')){
    		Ext.Msg.alert('확인', '출고지시번호가 존재하지 않는 행이 선택되었습니다.');
    		return;
    	} else {
    		var V_DD_NO= gridRecord[0].get('DD_NO');
    		
    		if(parent.Ext.getCmp('MAIN_SERVER_YN').getValue() == 'Y'){
		    	url = 'http://123.142.124.170:8080/aireport/on_server/S_BL_PACKING_LIST_DD_TOT_HSPF.jsp?DD_NO=' + V_DD_NO;  	
			} else{
				url = 'http://123.142.124.170:8080/aireport/on_server/S_BL_PACKING_LIST_DD_TOT_HSPF_TEST.jsp?DD_NO=' + V_DD_NO;  		  	
			}
	    	
			Ext.Msg.confirm('확인', 'PACKING LIST를 출력하시겠습니까?', function(button) {
        		if (button == 'yes') {
					var myWin = new Ext.Window({
						title : 'PACKING LIST',
						html : '<iframe name="xxx" border =0 src="'+url+'" width="100%" height="100%"></iframe>',
						width : 1000,
						height : 768,
						modal : true
					});
					
					myWin.show();
					myWin.setSize(Ext.getBody().getViewSize());
					myWin.setPagePosition(0, 0);
        		}
        	});
    	}
    },


});
