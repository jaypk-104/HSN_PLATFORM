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

Ext.define('CUS_DN_DAILY.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    control: {
//        "#gridAddBtn": {
//            click: 'gridAddBtnClick'
//        },
        "#ccReqBtn": {
            click: 'ccReqBtnClick'
        },
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
     
    },

    gridAddBtnClick: function(button, e, eOpts) {
        //var popup = Ext.create("B_COMP_HSPF.view.WinAddRow");
        //popup.show();
        //Ext.getCmp('rowCount').setValue(1);
    },

    ccReqBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var flag = '';
    	var msg = '';
    	for(var i=0; i< gridRecord.length; i++) {
	    		if(gridRecord[i].get('CC_REQ_YN') == 'Y') {
	    			flag = 'F';
	    			msg = '이미 통관요청 된 품목입니다.';
	    		} else {
	    			flag = 'T';
	    		}
    	}

    	if(gridRecord.length > 0) {
    		if(flag == 'T') {
	    		Ext.Msg.confirm('확인','통관요청 하시겠습니까?', function(button){
	    			if(button == 'yes') {
	    		    	store.sync({
	    					params: {
	    						V_TYPE: 'SYNC',
	    						V_SP_TYPE: 'CC_REQ',
	    						V_S_BP_CD: parent.Ext.getCmp('GBP_CD').getValue(),
	    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	        					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    						
	    					},
	    		    		callback: function(records, operation, success) {
	    		    			store.reload();
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
                    title: '일일출고현황', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },
    
});
