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

Ext.define('B_BIZ_PAY_INFO_HSPF.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: [ 'MyStore' ],
    
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
    			V_TYPE_CD: Ext.getCmp('V_TYPE_CD').getValue(),
    			V_BP_CD: Ext.getCmp('V_BP_CD').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});

    },

    saveBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	store.each(function(record, idx) {
			if (record.get('V_TYPE') != 'I' && record.dirty == true) {
				record.set('V_TYPE', 'U');
			}
		});
    	
    	Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
			if (button == 'yes') {
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						var tbController = B_BIZ_PAY_INFO_HSPF.app.getController("TbButtonController");
						tbController.selBtnClick();
						
						Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '저장완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
					},
				});
			}
    	});
    	
    },

    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	store.removeAll();
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
    	var BPstore1 = Ext.getStore('WinBpPopStore');
        BPstore1.load();
    },
    
});