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

Ext.define('S_INV_HSPF.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

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
        alert('select');
        //    	var store = this.getMyStoreStore();
        //    	store.removeAll();
        //    	store.load({
        //    		params: {
        //    			V_TYPE: 'S',
        //    			V_COMP_ID: Ext.getCmp('V_COMP_ID').getValue(),
        //    			V_COMP_NM: Ext.getCmp('V_COMP_NM').getValue()
        //    		},
        //    		callback: function(records,operations,success){
        //    		}
        //    	})
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
