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

Ext.define('M_PO_NON_DLV_MGM.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'MyStore1',
    ],

    control: {
        "#selBtn": {
            click: 'selBtnClick'
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
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	console.log(Ext.getCmp('V_M_BP_CD').getValue());
    	console.log(Ext.getCmp('V_M_BP_NM').getValue());
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	store.removeAll();
    	store1.removeAll();
    	store.load({
    		params: {
    			V_TYPE: 'SH',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_PO_DT_FR : Ext.getCmp('V_PO_DT_FR').getValue(),
				V_PO_DT_TO : Ext.getCmp('V_PO_DT_TO').getValue(),
				V_DL_HP_DT_FR : Ext.getCmp('V_DL_HP_DT_FR').getValue(),
				V_DL_HP_DT_TO : Ext.getCmp('V_DL_HP_DT_TO').getValue(),
				V_DLVY_AVL_DT_FR : Ext.getCmp('V_DLVY_AVL_DT_FR').getValue(),
				V_DLVY_AVL_DT_TO : Ext.getCmp('V_DLVY_AVL_DT_TO').getValue(),
				V_BP_CD : Ext.getCmp('V_M_BP_CD').getValue(),
				V_BP_NM : Ext.getCmp('V_M_BP_NM').getValue(),
				V_ITEM_CD : Ext.getCmp('V_ITEM_CD').getValue(),
				V_ITEM_NM : Ext.getCmp('V_ITEM_NM').getValue(),
				V_DLV_YN : Ext.getCmp('V_DLV_YN').getValue(),
				V_SL_CD : Ext.getCmp('V_SL_CD').getValue(),
				V_GR_YN : Ext.getCmp('V_GR_YN').getValue(),
				
				V_PO_DT_CHECK : Ext.getCmp('V_PO_DT_CHECK').getValue(),
				V_DL_HP_DT_CHECK : Ext.getCmp('V_DL_HP_DT_CHECK').getValue(),
				V_DLVY_AVL_DT_CHECK : Ext.getCmp('V_DLVY_AVL_DT_CHECK').getValue(),
    		},
    		callback: function(records,operations,success){
    			
    		}
    	});
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

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    }

});
