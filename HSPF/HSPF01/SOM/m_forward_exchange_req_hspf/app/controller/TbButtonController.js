/*
 * File: app/controller/TbButtonController.js
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

Ext.define('M_FORWARD_EXCHANGE_REQ_HSPF.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore', 'MyStore1'],
    control: {
        "#selBtn": {
            click: 'selBtnClick'
        },
        "#saveBtn": {
            click: 'saveBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "myform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	store.removeAll();
    		
    	store.load({
    		params: {
    			V_TYPE: 'S',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
    			V_LC_DOC_NO: Ext.getCmp('V_LC_DOC_NO').getValue(),
    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    		},
    		callback: function(records,operations,success){
    		},
    	});
		
    },

    saveBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var record = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	
    	var controller = this;
    	
    	if(record.length < 1){
    		Ext.Msg.alert('확인', '행을 선택하고 저장해주세요');
    	}
    	else{
    		Ext.MessageBox.confirm('확인', '저장 하시겠습니까?', function(btn) {
    			if (btn == 'yes') {
    				for(var i = 0 ; i < record.length ; i ++){
    	        		if(record[i].phantom == true){
    	        			record[i].set('V_TYPE', 'I');
    	        		}
    	        		else{
    	        			record[i].set('V_TYPE', 'U');
    	        		}
    	        			
    	        	}
    	        	store.sync({
    	        		params:{
    	        			V_TYPE : 'SYNC',
    	        			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    	        			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    	        		},
    	        		callback: function(records,operations,success){
    	        			controller.selBtnClick();
    	        		}
    	        	});
    			}
    		});
    		
    	}
	},
	


    clsBtnClick: function(button, e, eOpts) {
        var tab=parent.Ext.getCmp('myTab');
        var activeTab=tab.getActiveTab();
        var tabIndex=tab.items.indexOf(activeTab);
        tab.remove(tabIndex, true);
    },

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    },

});
