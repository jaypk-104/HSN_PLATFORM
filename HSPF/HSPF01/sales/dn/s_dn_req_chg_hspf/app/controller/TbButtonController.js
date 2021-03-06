/*
 * File: app/controller/TbButtonController.js
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

Ext.define('S_REQ_DN_CHG.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: [
        'MyStore',
        'MyStore1',
    ],

    control: {
        "#selBtn": {
            click: 'selBtnClick'
        },
        "#selBtn1": {
        	click: 'selBtn1Click'
        },
        "#saveBtn": {
            click: 'saveBtnClick'
        },
        "#delBtn": {
            click: 'delBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "#clsBtn1": {
        	click: 'clsBtn1Click'
        },
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
        "mysearchform1 textfield[name=search_field1]": {
            specialkey: 'tfEnter1'
        }
        
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	store.removeAll();
    	store.load({
    		params: {
    			V_TYPE: 'S',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_DD_NO : Ext.getCmp('V_DD_NO').getValue(),
				V_ITEM_CD : Ext.getCmp('V_ITEM_CD').getValue(),
				V_S_BP_NM : Ext.getCmp('V_S_BP_NM').getValue(),
				V_DD_DT_FROM : Ext.getCmp('V_DD_DT_FROM').getValue(),
				V_DD_DT_TO : Ext.getCmp('V_DD_DT_TO').getValue(),
				
    		},
    		callback: function(records,operations,success){
    		}
    	})
    },
    
    selBtn1Click: function(button, e, eOpts) {
  	var store1 = this.getMyStore1Store();
  	store1.removeAll();
  	store1.load({
  		params: {
  			V_TYPE: 'RS_N',
  			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_DR_DT_FROM : Ext.getCmp('W_DR_DT_FROM').getValue(),
				V_DR_DT_TO : Ext.getCmp('W_DR_DT_TO').getValue(),
				V_ITEM_CD : Ext.getCmp('W_ITEM_CD').getValue(),
				V_DR_NO : Ext.getCmp('W_DR_NO').getValue(),
				
  		},
  		callback: function(records,operations,success){
  		}
  	})
  },

    saveBtnClick: function(button, e, eOpts) {
        alert('save');
    },

    delBtnClick: function(button, e, eOpts) {
        alert('delete');
    },

    clsBtnClick: function(button, e, eOpts) {
        var tab=parent.Ext.getCmp('myTab');
                 var activeTab=tab.getActiveTab();
                 var tabIndex=tab.items.indexOf(activeTab);
        tab.remove(tabIndex,true);
    },
    clsBtn1Click: function(button, e, eOpts) {
    	
    	var win = Ext.WindowManager.getActive();
    	if(win){
    	     win.close();
    	}
    },

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    },
    tfEnter1: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.selBtn1Click();
    	}
    }

});
