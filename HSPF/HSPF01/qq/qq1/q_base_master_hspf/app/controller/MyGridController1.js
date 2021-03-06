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

Ext.define('Q_BASE_MASTER.controller.MyGridController1', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore1'
    ],

    control: {
        "#gridAddBtn1": {
            click: 'gridAddBtn1Click'
        },
        "#gridDelBtn1": {
            click: 'gridDelBtn1Click'
        },
        "#xlsxDown1": {
            click: 'xlsxDown1Click'
        },
        "#xmlDown1": {
            click: 'xmlDown1Click'
        },
        "#gridSaveBtn1": {
        	click: 'gridSaveBtn1Click'
        },
    },

    gridAddBtn1Click: function(button, e, eOpts) {
        var popup = Ext.create("Q_BASE_MASTER.view.WinAddRow");
        popup.show();
        Ext.getCmp('rowCount').setValue(1);
    },

    gridDelBtn1Click: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var record = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	var store1 = Ext.getStore('MyStore1');
    	var record1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

    	if(record1.length > 0) {
    		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
    			if(button == 'yes') {
    				for(var i=0; i<record1.length; i++) {
    		    		if(record1[i].data['V_TYPE']=='V') {
    		    			record1[i].data['V_TYPE'] = 'DD';
    		    		}
    		    	}
    		    	store1.sync({
    					params: {
    						V_TYPE: 'DD',
    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    						V_Q_ID : record[0].data['Q_ID']
    					},
    		    		callback: function(records, operation, success) {
    		    			store1.reload();
    					}
    		    	});
    			}
    		});
    	}
    },

    xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid1');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    xmlDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid1');
            	grid.saveDocumentAs({
                    type: 'xml',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xml' //엑셀파일이름
        		});
    },
    
    gridSaveBtn1Click: function(button, e, eOpts) {
    	var grid = Ext.getCmp('myGrid');
    	var record = grid.getSelectionModel().getSelection();
    	var grid1 = Ext.getCmp('myGrid1');
    	var store1 = grid1.getStore();
    	var record1 = grid1.getSelectionModel().getSelection();
    	if(record1.length >= 1){
    		Ext.Msg.confirm('확인','저장 하시겠습니까?',
        			function(button){
            	    	if(button=='yes') {
            	    		for( var i = 0 ; i < record.length ; i ++){
            	    			if(record[i].data['V_TYPE'] == 'V'){
            	    				record[i].set('V_TYPE', 'DU');
            	    			}
            	    		}
            	    		store1.sync({
            	    			params: {
	        	    				V_TYPE : 'DU',
	        	    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	            					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	            					V_Q_ID : record[0].data['Q_ID']
	        	    			},
	        	    			callback: function(records, operation, success) {
	        		    			store1.reload();
	        					}
            	    		});
            	    	}
    		});
    	}
    	else{
    		Ext.Msg.alert('확인', '저장할 항목을 선택해주세요.');
    	}
    }

});
