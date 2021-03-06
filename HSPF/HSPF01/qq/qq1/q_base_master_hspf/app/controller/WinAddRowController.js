/*
 * File: app/controller/WinAddRowController.js
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

Ext.define('Q_BASE_MASTER.controller.WinAddRowController', {
    extend: 'Ext.app.Controller',

    control: {
        "#addRowBtn": {
            click: 'addRowBtnClick'
        }
    },

    addRowBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore1');
    	var count = store.getCount();
    	var rowCount = Number(Ext.getCmp('rowCount').getValue());
    	
    	var grid = Ext.getCmp('myGrid');
    	var record = grid.getSelectionModel().getSelection();
		Ext.Ajax.request({
			url:'sql/q_base_master_hspf_d.jsp',
			method: 'post',
			params: {
				V_TYPE: 'DI',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_Q_ID : record[0].data['Q_ID'],
				count : rowCount
			},
			success : function(response) {
				store.load({
	            	params:{
	            		V_TYPE : 'DS',
	            		V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
	                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	                    V_Q_ID : record[0].data['Q_ID']
	                    
	            	},
	            	callback: function(records, operation, success) {
	                },
	            });
			}
        });
    	

    	var win = Ext.WindowManager.getActive();
    	if(win){
    	     win.close();
    	}
    }

});
