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

Ext.define('B_BIZ_ADD_HSPF.controller.MyGridController', {
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
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
        "#xmlDown": {
            click: 'xmlDownClick'
        }
    },

    gridAddBtnClick: function(button, e, eOpts) {
    	if(Ext.getCmp('V_BP_CD').getValue() == '' || Ext.getCmp('V_BP_CD').getValue() == null 
    			|| Ext.getCmp('V_BP_NM').getValue() == '' || Ext.getCmp('V_BP_NM').getValue() == null) {
    		Ext.Msg.alert('확인', '상단의 거래처코드, 거래처명을 입력해주세요.');
    	}
    	else{
    		var popup = Ext.create("B_BIZ_ADD_HSPF.view.WinAddRow");
            popup.show();
            Ext.getCmp('rowCount').setValue(1);
    	}
        
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
            						V_USR_ID : 'admin',//parent.Ext.getCmp('GUSER_ID').getValue(),
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
                    title: '거래처추가정보등록', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    xmlDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xml',
                    title: '거래처추가정보등록', //엑셀내타이틀
                    fileName: currentDate+'.xml' //엑셀파일이름
        		});
    }

});
