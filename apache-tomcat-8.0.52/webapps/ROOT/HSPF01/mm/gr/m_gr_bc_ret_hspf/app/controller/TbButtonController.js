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

Ext.define('M_GR_BC_RET_HSPF.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore'],
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
    	var store = this.getMyStoreStore();
    	var radio1 = Ext.getCmp('radio1').getChecked()[0].inputValue;
    	var radio2 = Ext.getCmp('radio2').getChecked()[0].inputValue;
    	
    	store.removeAll();
    	store.load({
    		params: {
    			V_TYPE: 'S',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_RE_DT_FR: Ext.getCmp('V_RE_DT_FR').getValue(),
    			V_RE_DT_TO: Ext.getCmp('V_RE_DT_TO').getValue(),
    			V_ITEM_CD: Ext.getCmp('V_ITEM_CD').getValue(),
    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    			V_RE_DN_YN: radio1,
    			V_RE_GN_YN: radio2,
    		},
    		callback: function(records,operations,success){
    		}
    	})
    },

    saveBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	
    	var record = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	
    	if(record.length < 1){
    		Ext.Msg.alert('확인', '행을 선택하고 저장해주세요');
    	}
    	else{
    		for(var i = 0 ; i < record.length ; i ++){
        		if(record[i].phantom == true){
        			record[i].set('V_TYPE', 'I');
        		}
        	}
        	store.sync({
        		params:{
        			V_TYPE : 'SYNC',
        			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
        			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
        		},
        		callback: function(records,operations,success){
        			store.reload();
        		}
        	});
    	}
    	
    },

    delBtnClick: function(button, e, eOpts) {
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
