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

Ext.define('M_BL_TOTAL_STEEL.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: ['MyStore', 'MyStore1', 'MyStore2'],
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
        "#clrBtn": {
            click: 'clrBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "myviewport textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	var store2 = this.getMyStore2Store();
		store.removeAll();
		store1.removeAll();
		store2.removeAll();
    		
		Ext.Ajax.request({
			url : 'sql/M_BL_TOTAL_STEEL.jsp',
			method : 'post',
			params : {
				V_TYPE : 'HH',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_BL_DOC_NO : Ext.getCmp('V_BL_DOC_NO').getValue(),
			},
			success : function(response) {
				var res = Ext.JSON.decode(response.responseText).resultList[0];

				if(res != null){
					Ext.getCmp('V_APPROV_NO').setValue(res.APPROV_NO);
					Ext.getCmp('V_APPROV_NM').setValue(res.APPROV_NM);
					Ext.getCmp('V_APPROV_DT').setValue(res.APPROV_DT);
					Ext.getCmp('V_PO_NO').setValue(res.PO_NO);
					Ext.getCmp('V_LC_DOC_NO').setValue(res.LC_DOC_NO);
					Ext.getCmp('V_OPEN_DT').setValue(res.OPEN_DT);
					Ext.getCmp('V_IN_TERMS_NM').setValue(res.IN_TERMS_NM);
					Ext.getCmp('V_PAY_METH_NM').setValue(res.PAY_METH_NM);
					Ext.getCmp('V_BL_NO').setValue(res.BL_NO);
					Ext.getCmp('V_LOADING_DT').setValue(res.LOADING_DT);
					Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
					Ext.getCmp('V_FORWARD_XCH').setValue(res.FORWARD_XCH);
					Ext.getCmp('V_MVMT_DT').setValue(res.MVMT_DT);
					Ext.getCmp('V_ID_DT').setValue(res.ID_DT);
					
					// [첫번째 그리드] 조회
			    	store.load({
			    		params: {
			    			V_TYPE: 'D1',
			    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
			    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
			    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
			    		},
			    		callback: function(records,operations,success){
			    			// [두번째 그리드] 조회
			    	    	store1.load({
			    	    		params: {
			    	    			V_TYPE: 'D2',
			    	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
			    	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
			    	    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
			    	    		},
			    	    		callback: function(records,operations,success){
			    	    			// [첫번째 그리드] 조회
			    	    	    	store2.load({
			    	    	    		params: {
			    	    	    			V_TYPE: 'D3',
			    	    	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
			    	    	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
			    	    	    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
			    	    	    		},
			    	    	    		callback: function(records,operations,success){
			    	    	    			
			    	    	    		},
			    	    	    	});
			    	    		},
			    	    	});
			    		},
			    	});
				} else {
					Ext.getCmp('V_APPROV_NO').setValue('');
					Ext.getCmp('V_APPROV_NM').setValue('');
					Ext.getCmp('V_APPROV_DT').setValue('');
					Ext.getCmp('V_PO_NO').setValue('');
					Ext.getCmp('V_LC_DOC_NO').setValue('');
					Ext.getCmp('V_OPEN_DT').setValue('');
					Ext.getCmp('V_IN_TERMS_NM').setValue('');
					Ext.getCmp('V_PAY_METH_NM').setValue('');
					Ext.getCmp('V_BL_NO').setValue('');
					Ext.getCmp('V_LOADING_DT').setValue('');
					Ext.getCmp('V_XCH_RATE').setValue('');
					Ext.getCmp('V_FORWARD_XCH').setValue('');
				}
				
			}
		});
    		
    },

    saveBtnClick: function(button, e, eOpts) {
    	
    },
	
    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	var store2 = this.getMyStore2Store();
    	store.removeAll();
    	store1.removeAll();
    	store2.removeAll();

    	Ext.getCmp('V_APPROV_NO').setValue('');
		Ext.getCmp('V_APPROV_NM').setValue('');
		Ext.getCmp('V_APPROV_DT').setValue('');
		Ext.getCmp('V_PO_NO').setValue('');
		Ext.getCmp('V_LC_DOC_NO').setValue('');
		Ext.getCmp('V_OPEN_DT').setValue('');
		Ext.getCmp('V_IN_TERMS_NM').setValue('');
		Ext.getCmp('V_PAY_METH_NM').setValue('');
		Ext.getCmp('V_BL_NO').setValue('');
		Ext.getCmp('V_BL_DOC_NO').setValue('');
		Ext.getCmp('V_LOADING_DT').setValue('');
		Ext.getCmp('V_XCH_RATE').setValue('');
		Ext.getCmp('V_FORWARD_XCH').setValue('');
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

});
