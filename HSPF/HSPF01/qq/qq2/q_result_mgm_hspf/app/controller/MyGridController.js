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

Ext.define('Q_RESULT_MGM.controller.MyGridController', {
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
    gridDblClick:  function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	var store = Ext.getCmp('myGrid').getStore();
    	
    	if(record.data['INSP_DT'] == null || record.data['INSP_DT'] == ''){
    		Ext.Ajax.request({
    			url: 'sql/q_result_mgm_hspf.jsp',
    			method: 'post',
				params: {
					V_TYPE: 'I',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_ASN_NO : record.data['ASN_NO'],
					V_LOT_NO : record.data['LOT_NO'],
					V_ITEM_CD : record.data['ITEM_CD'],
				},
				success : function(response) {
					showPop();
					var now = new Date();
					Ext.getCmp('W_INSP_DT').setValue(now);
					Ext.getCmp('W_INSP_USR_ID').setValue(parent.Ext.getCmp('GUSER_ID').getValue());
		            store.reload();
		            
		            var jsonResult = Ext.JSON.decode(response.responseText);
		            Ext.getCmp('W_Q_RS_NO').setValue(jsonResult.resultList[0].Q_RS_NO);
				}
    		});
    	}
    	else{
    		showPop();
    	}
    	
    	function showPop(){
    		var popup = Ext.create("Q_RESULT_MGM.view.Popup");
            popup.show();
            var store1 = Ext.getCmp('myGrid1').getStore();
//                store1.removeAll();
            store1.load({
            	params:{
            		V_TYPE : 'WS',
            		V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                    V_ASN_NO : record.data['ASN_NO']
            	}
            });
            
            
            
            record = store.getAt(rowIndex);
            
            Ext.getCmp('W_ASN_NO').setValue(record.data['ASN_NO']);
            Ext.getCmp('W_LOT_QTY').setValue(record.data['LOT_QTY']);
            Ext.getCmp('W_UNIT').setValue(record.data['UNIT']);
            Ext.getCmp('W_BP_NM').setValue(record.data['BP_NM']);
//                Ext.getCmp('W_SAMPLE_QTY').setValue(record.data['W_SAMPLE_QTY']);
            Ext.getCmp('W_LOT_NO').setValue(record.data['LOT_NO']);
            if(record.data['DLVY_AVL_DT'] != null && record.data['DLVY_AVL_DT'] != ''){
            	Ext.getCmp('W_DLVY_AVL_DT').setValue(record.data['DLVY_AVL_DT'].substring(0,10));
            }
            Ext.getCmp('W_ITEM_CD').setValue(record.data['ITEM_CD']);
            Ext.getCmp('W_BP_ITEM_CD').setValue(record.data['BP_ITEM_CD']);
            Ext.getCmp('W_OK_QTY').setValue(record.data['OK_QTY']);
            Ext.getCmp('W_HS_TYPE_NM').setValue(record.data['HS_TYPE_NM']);
            Ext.getCmp('W_BAD_QTY').setValue(record.data['BAD_QTY']);
            Ext.getCmp('W_LOT_ETC').setValue(record.data['LOT_ETC']);
            Ext.getCmp('W_INSP_USR_ID').setValue(record.data['INSP_USR_ID']);
            if(record.data['INSP_DT'] != null && record.data['INSP_DT'] != ''){
            	Ext.getCmp('W_INSP_DT').setValue(record.data['INSP_DT'].substring(0,10));
            }
            Ext.getCmp('W_Q_RS_NO').setValue(record.data['Q_RS_NO']);
    	}
		

    },
    
    gridSaveBtn1Click: function(button, e, eOpts) {
    	var store1 = Ext.getCmp('myGrid1').getStore();
    	Ext.Msg.confirm('확인','저장하시겠습니까?', function(button){
			if(button == 'yes') {
		    	store1.sync({
		    		params: {
		    			V_TYPE : 'WU',
		    			V_Q_RS_NO : Ext.getCmp('W_Q_RS_NO').getValue(),
		    		},
		    		callback: function(records, operation, success) {
		    			store1.reload();
					}
		    	});
			}
    	});
    }

});
