/*
 * File: app/controller/MyGridController1.js
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

Ext.define('M_GR_STEEL2.controller.MyGridController1', {
    extend: 'Ext.app.Controller',
    
    control: {
        "#gridAddBtn1": {
            click: 'gridAddBtn1Click'
        },
        "#gridDelBtn1": {
            click: 'gridDelBtn1Click'
        },
        "#gridSaveBtn": {
        	click: 'gridSaveBtnClick'
        },
        "#xlsxDown1": {
            click: 'xlsxDownClick'
        },
        "#myGrid1" : {
			cellclick : 'myGrid1Click'
		}
    },

    gridDelBtn1Click: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
        var store1 = Ext.getStore('MyStore1');
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

    	if(gridRecord.length > 0) {
    		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
    			if(button == 'yes') {
    				for(var i=0; i<gridRecord.length; i++) {
    		    		if(gridRecord[i].data['V_TYPE']=='V') {
    		    			gridRecord[i].data['V_TYPE'] = 'D';
    		    		}
    		    	}
    		    	store1.sync({
    					params: {
    						V_TYPE: 'SYNC',
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    		    		callback: function(records, operation, success) {
    		    			store.reload();
    		    			store1.reload();
    					}
    		    	});
    			}
    		});
    	}
    },
    
    gridSaveBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
        var store1 = Ext.getStore('MyStore1');
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();
    	selModel1.selectAll();
    	
    	if(gridRecord.length > 0) {
    		Ext.Msg.confirm('확인','저장하시겠습니까?', function(button){
    			if(button == 'yes') {
    				
//    				for(var i=0; i<gridRecord.length; i++) {
//    		    		if(gridRecord[i].get('V_TYPE') == 'V') {
//    		    			gridRecord[i].set('V_TYPE', 'U');
//    		    		}
//    		    	}
    				
    				store1.each(function(rec, idx) {
    					rec.set('V_TYPE', 'U');
    				})
    				
    		    	store1.sync({
    					params: {
    						V_TYPE: 'SYNC',
    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    		    		callback: function(records, operation, success) {
    		    			store.reload();
    		    			store1.reload();
    					}
    		    	});
    			}
    		});
    	}
    },
    
	myGrid1Click : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var store2 = Ext.getStore('MyStore2');
		var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

		var GR_NO = record.get('GR_NO');
		var MVMT_NO = record.get('MVMT_NO');
		

		store2.load({
			params : {
				V_TYPE : 'SD2',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_MVMT_NO: MVMT_NO,
			},
			callback : function(records, operations, success) {

			}
		});

	},

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid1');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: '국내상품입고등록(상세)', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    }
});
