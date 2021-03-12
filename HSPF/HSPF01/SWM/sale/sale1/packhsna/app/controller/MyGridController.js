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

Ext.define('Packhsna.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'InvoiceReg',
        'PackHsnaStore',
        'PalletReg'
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
             	var popup = Ext.create("Packhsna.view.WinAddRow");
        		popup.show();
        		Ext.getCmp('rowCount').setValue(1);
    },

    gridDelBtnClick: function(button, e, eOpts) {
        	var store = this.getPackHsnaStoreStore();
            	var InvoiceRegstore = this.getInvoiceRegStore();
            	var gridObj = Ext.getCmp('grid1');
            	var gridRecord = gridObj.getSelectionModel().getSelection();

            	if(gridRecord.length==0) {
            		Ext.Msg.alert('확인', '삭제할 행을 선택하세요.');
            	} else if (InvoiceRegstore.getCount()>0) {
            		Ext.Msg.alert('확인', '팔레트 상세내역이 존재합니다.');
            	} else {
        	    	for(var i = 0; i < gridRecord.length; i++){
        	    		if(gridRecord[i].data['INV_MGM_NO']==undefined) {
        	    			store.remove(gridRecord[i]);
        	    		} else if(gridRecord[i].data['CFM_YN']=='Y') {
        	    			Ext.Msg.alert('확인', '확정된 내역은 삭제할 수 없습니다.');
        	    			break;
        	    		} else {
        	    			Ext.Msg.confirm('확인','삭제하시겠습니까?',
                                function(button){
                                	if(button=='yes') {
                                		for(var c=0; c<gridRecord.length; c++) {
            				    			if(gridRecord[c].data['CFM_YN']=='Y') {
            					    			Ext.Msg.alert('확인', '확정된 내역은 삭제할 수 없습니다.');
            					    			break;
            					    		}
            				    			gridRecord[c].set('V_TYPE', 'D');
            				    		}
        	                			store.sync({
        	                    			params: {
        	                    				V_TYPE: 'D',
        	                	                V_USR: parent.Ext.getCmp('GUSER_ID').getValue(),
        	                    			},
        	                    			callback: function(records, operation, success){
        	                    				store.reload();
        	                    			},
        	                    			scope: this
        	                    		});
                                	}
                                }
                            );
        	    		}
        	    	}
            	}
    },

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('grid1');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: '인보이스/패킹등록', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    xmlDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xml',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xml' //엑셀파일이름
        		});
    }

});
