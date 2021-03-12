/*
 * File: app/controller/TbButtonController.js
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

Ext.define('M_GR_TOT_HSPF2.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore', 'MyStore1'],
    control: {
        "#selBtn": {
            click: 'selBtnClick'
        },
        "#saveBtn": {
            click: 'saveBtnClick'
        },
        "#clrBtn": {
            click: 'clrBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
        "textfield[name=search_field2]": {
        	specialkey: 'tfEnter2'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
		store.removeAll();
		store1.removeAll();
		
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    		
    	//[상단]조회
    	store.load({
    		params: {
    			V_TYPE: 'SH',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_PO_DT_FR: Ext.getCmp('V_PO_DT_FR').getValue(),
    			V_PO_DT_TO: Ext.getCmp('V_PO_DT_TO').getValue(),
    			V_M_BP_NM: Ext.getCmp('V_M_BP_NM').getValue(),
    			V_PO_NO: Ext.getCmp('V_PO_NO').getValue(),
    			V_ITEM_CD: Ext.getCmp('V_ITEM_CD').getValue(),
    			V_ITEM_NM: Ext.getCmp('V_ITEM_NM').getValue(),
    		},
    		callback: function(records,operations,success){
    			//[하단]조회
//    	    	if(Ext.getCmp('V_M_BP_NM2').getValue() != '') {
//    	    		store1.load({
//    	    			params : {
//    	    				V_TYPE : 'SD',
//    	    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//    	    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
//    	    				V_M_BP_NM2 : Ext.getCmp('V_M_BP_NM2').getValue(),
//    	    				V_MVMT_DT_FR: Ext.getCmp('V_MVMT_DT_FR2').getValue(),
//    	    				V_MVMT_DT_TO: Ext.getCmp('V_MVMT_DT_TO2').getValue(),
//    	    			},
//    	    			callback : function(records, operations, success) {
//
//    	    			}
//    	    		});
//    	    	}
    	    	
    		}
    	});
    	
    	
    	
    },
    selBtnClick2: function(button, e, eOpts) {
    	var store1 = this.getMyStore1Store();
    	store1.removeAll();
    	
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
    	if(Ext.getCmp('V_M_BP_NM2').getValue() != '') {
    		store1.load({
    			params : {
    				V_TYPE : 'SD',
    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    				V_M_BP_NM2: Ext.getCmp('V_M_BP_NM2').getValue(),
    				V_MVMT_DT_FR: Ext.getCmp('V_MVMT_DT_FR2').getValue(),
    				V_MVMT_DT_TO: Ext.getCmp('V_MVMT_DT_TO2').getValue(),
    			},
    			callback : function(records, operations, success) {

    			}
    		});
    	}
    	
    	
    	
    },

    saveBtnClick: function(button, e, eOpts) {},


    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	
    	store.removeAll();
    	store1.removeAll();

		Ext.getCmp('V_M_BP_NM').setValue('');
		Ext.getCmp('V_M_BP_NM2').setValue('');
		Ext.getCmp('V_PO_NO').setValue('');
		Ext.getCmp('V_ITEM_CD').setValue('');
		Ext.getCmp('V_ITEM_NM').setValue('');
    },
    
    clsBtnClick: function(button, e, eOpts) {
		var tab = parent.Ext.getCmp('myTab');
		var activeTab = tab.getActiveTab();
		var tabIndex = tab.items.indexOf(activeTab);
		tab.remove(tabIndex, true);
	},

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    },
    
    tfEnter2: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.selBtnClick2();
    	}
    }

});
