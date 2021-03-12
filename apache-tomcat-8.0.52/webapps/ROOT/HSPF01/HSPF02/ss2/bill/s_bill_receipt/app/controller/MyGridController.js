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

Ext.define('S_BILL_RECEIPT.controller.MyGridController', {
    extend: 'Ext.app.Controller',
    
    control: {
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
        "#receiptPrintBtn": {
            click: 'receiptPrintBtnClick'
        },

    },
    
    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '거래명세서출력', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },
    
    receiptPrintBtnClick: function(button, e, eOpts) {
    	var grid = Ext.getCmp('myGrid');
    	var store = grid.getStore();
    	var record = grid.getSelectionModel().getSelection();
    	var V_DN_NO = '';
    	var V_REGION = Ext.getCmp('V_REGION').getValue();
    	
    	if(record.length >= 1){
    		V_DN_NO = record[0].data['DN_NO'];
//    		console.log(V_DN_NO);
    		for( var i = 1 ; i < record.length ; i ++){
				V_DN_NO += '<>';
				V_DN_NO += record[i].data['DN_NO'];
    		}
    		V_DN_NO = encodeURI(V_DN_NO);
    		
    		var myWin = new Ext.Window({
				title : '거래명세서출력',
				html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/on_server/S_DN_BILL_RECEIPT.jsp?V_DN_NO='+V_DN_NO+'&V_REGION='+V_REGION+'" width="100%" height="100%"></iframe>',
				width : 1000,
				height : 768,
				modal : true
			});
			myWin.show();
			myWin.setSize(Ext.getBody().getViewSize());
			myWin.setPagePosition(0, 0);
    		
    	}
    	else{
    		Ext.Msg.alert('확인', '목록을 선택해주세요.');
    	}
    },
    
    
    
});