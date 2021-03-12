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

Ext.define('M_TO_DN_PR_TOT_HSPF.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: ['MyStore'],
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
        "#myGrid": {
        	click: 'clrBtnClick'
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
    			V_DN_DT_FR: Ext.getCmp('V_DN_DT_FR').getValue(),
    			V_DN_DT_TO: Ext.getCmp('V_DN_DT_TO').getValue(),
    			V_S_BP_CD: Ext.getCmp('V_S_BP_CD').getValue(),
    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    			V_M_BP_CD: Ext.getCmp('V_M_BP_CD').getValue(),
    			V_PRINT_TYPE: Ext.getCmp('V_PRINT_TYPE').getValue(),
    			V_SALE_TYPE: Ext.getCmp('V_SALE_TYPE').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
    },

    saveBtnClick: function(button, e, eOpts) {},

    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	store.removeAll();

    	Ext.getCmp('V_DN_NO').setValue('');
//    	Ext.getCmp('V_S_BP_CD').setValue('');
//    	Ext.getCmp('V_S_BP_NM').setValue('');
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
    
    onLaunch: function(application) {
    	var BPstore1 = Ext.getStore('WinMBpPopStore');
    	var BPstore2 = Ext.getStore('WinSBpPopStore');
        BPstore1.load();
        BPstore2.load();
    },
    
});
