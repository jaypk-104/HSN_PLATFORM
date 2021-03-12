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

Ext.define('R_SIS_CHEM_B3.controller.MyGridController', {
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
        },
        "[cls=execl_btn]": {
            click: 'onButtonClick'
        },
        "[cls=chart_btn]": {
            click: 'onButtonClick1'
        }
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
                    title: 'test', //엑셀내타이틀
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
    },

    onButtonClick: function(button, e, eOpts) {

        var prefix = button.id.substring(0,3);

        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
        var grid = Ext.getCmp(prefix + '_Grid');
        grid.saveDocumentAs({
            type: 'xlsx',
            title: '주간스팟가격', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
        });
    },

    onButtonClick1: function(button, e, eOpts) {
        var prefix = button.id.substring(0,3);
        var fileName = 'chart';
        if(prefix == 'B01'){
            fileName = 'Ethylene';
        }
        else if(prefix == 'B02'){
            fileName = 'Propylene';
        }
        else if(prefix == 'B03'){
            fileName = 'Butadiene';
        }

        Ext.getCmp(prefix + '_Chart').download({

                filename : fileName

        });
    }

});
