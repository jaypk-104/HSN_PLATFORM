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

Ext.define('Q_SUPPLIER_HSPF.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'MyStore1',
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
        '#myGrid': {
    		celldblclick: 'gridDblClick'
    	},
    	'#gridSaveBtn1': {
    		click: 'gridSaveBtn1Click'
    	},
    },

    gridAddBtnClick: function(button, e, eOpts) {
    },

    gridDelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
            	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

            	if(gridRecord.length > 0) {
            		Ext.Msg.confirm('확인','삭제 하시겠습니까?', function(button){
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
    gridDblClick:  function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	var store = Ext.getCmp('myGrid').getStore();
    	
    	//function showPop(){
    		if(record.data['STS'] == "交货中"){
    			Ext.Msg.alert('확인','납품중인 데이터입니다.');//납품중 데이터 입니다.
    		}
    		else{
    			var popup = Ext.create("Q_SUPPLIER_HSPF.view.Popup");

    			popup.setSize(Ext.getBody().getViewSize());
    			popup.show();
    			
                var store1 = Ext.getCmp('myGrid1').getStore();
                store1.removeAll();
                
                store1.load({
                	params:{
                		V_TYPE : 'WS',
                		V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                        V_SL_CD : Ext.getCmp('V_SL_CD').getValue(),
                        V_ASN_NO : record.data['ASN_NO'],
                        V_LOT_NO : record.data['LOT_NO'],
                        V_ITEM_CD : record.data['ITEM_CD'],
                        V_DLVY_AVL_DT : record.data['DLVY_AVL_DT'].substring(0,10)
                	}
                });
                
                record = store.getAt(rowIndex);
                
                Ext.getCmp('W_SL_CD').setValue(Ext.getCmp('V_SL_CD').getValue());
                Ext.getCmp('W_ASN_NO').setValue(record.data['ASN_NO']);
                Ext.getCmp('W_LOT_QTY').setValue(record.data['LOT_QTY']);
                Ext.getCmp('W_UNIT').setValue(record.data['UNIT']);
                Ext.getCmp('W_SAMPLE_QTY').setValue(record.data['SAMPLE_QTY']);
                Ext.getCmp('W_LOT_NO').setValue(record.data['LOT_NO']);
                if(record.data['DLVY_AVL_DT'] != null && record.data['DLVY_AVL_DT'] != ''){
                	Ext.getCmp('W_DLVY_AVL_DT').setValue(record.data['DLVY_AVL_DT'].substring(0,10));
                }
                Ext.getCmp('W_HSTN_ITEM_CD').setValue(record.data['HSTN_ITEM_CD']);
                Ext.getCmp('W_ITEM_CD').setValue(record.data['ITEM_CD']);
                Ext.getCmp('W_ITEM_NM').setValue(record.data['ITEM_NM']);
                //if(record.data['OK_QTY'] == 0){
                //	Ext.getCmp('W_OK_QTY').setValue(record.data['LOT_QTY']);
                //}
                //else{
                //	Ext.getCmp('W_OK_QTY').setValue(record.data['OK_QTY']);
                //}
                Ext.getCmp('W_OK_QTY').setValue(record.data['OK_QTY']);
                Ext.getCmp('W_BAD_QTY').setValue(record.data['BAD_QTY']);
                Ext.getCmp('W_INSPECTOR').setValue(record.data['INSPECTOR']);
                if(record.data['INSP_DT'] != null && record.data['INSP_DT'] != ''){
                	Ext.getCmp('W_INSP_DT').setValue(record.data['INSP_DT'].substring(0,10));
                }
                else{
                	var nows = new Date();
                	Ext.getCmp('W_INSP_DT').setValue(nows);
                }
                
                if(record.data['INSPECTOR'] != null && record.data['INSPECTOR'] != ''){
                	Ext.getCmp('W_INSPECTOR').setValue(record.data['INSPECTOR'].substring(0,10));
                }
                else{
                	var nows = new Date();
                	Ext.getCmp('W_INSPECTOR').setValue(parent.Ext.getCmp('GUSER_NM').getValue());
                }
                
                Ext.getCmp('W_HS_TYPE_NM').setValue(record.data['HS_QCM_INS']);
                Ext.getCmp('W_WRITERYN').setDisabled(false);
                
                if(record.data['WRITERYN'] == "Y"){
                	Ext.getCmp('W_WRITERYN').setValue(1);
                	Ext.getCmp('W_WRITER').setValue(record.data['WRITER']);
                	Ext.getCmp('W_APPDATE1').setValue(record.data['APPDATE1']);
                	
                	Ext.getCmp('W_OK_QTY').setFieldStyle('background-color: #EEEEEE');
                	Ext.getCmp('W_OK_QTY').setReadOnly(true);
                	Ext.getCmp('W_BAD_QTY').setFieldStyle('background-color: #EEEEEE');
                	Ext.getCmp('W_BAD_QTY').setReadOnly(true);
                	Ext.getCmp('W_INSPECTOR').setFieldStyle('background-color: #EEEEEE');
                	Ext.getCmp('W_INSPECTOR').setReadOnly(true);
                	Ext.getCmp('W_INSP_DT').setFieldStyle('background-color: #EEEEEE');
                	Ext.getCmp('W_INSP_DT').setReadOnly(true);
                }
                
                if(record.data['APPROVERYN'] == "Y"){
                	Ext.getCmp('W_APPROVERYN').setValue(1);
                	Ext.getCmp('W_APPROVER').setValue(record.data['APPROVER']);
                	Ext.getCmp('W_APPDATE2').setValue(record.data['APPDATE2']);
                	Ext.getCmp('W_WRITERYN').setDisabled(true);
                	Ext.getCmp('W_APPROVERYN').setDisabled(false);
                }
                
                Ext.getCmp('W_FILE').setValue('[ ' + record.data['FILE_CNT'] + ' ] ');
    		}
    		
            
    	//}
		

    }

});
