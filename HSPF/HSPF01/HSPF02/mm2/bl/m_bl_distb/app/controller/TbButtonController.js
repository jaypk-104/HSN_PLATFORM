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

Ext.define('M_BL_DISTB.controller.TbButtonController', {
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
        "myform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
        "myform datefield[name=search_field]": {
        	specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	
    	store.removeAll();
		store1.removeAll();
		
		//[상단]발주-L/C조회
    	store.load({
    		params: {
    			V_TYPE: 'SH',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_PO_NO: Ext.getCmp('V_PO_NO').getValue(),
    			V_LC_DOC_NO: Ext.getCmp('V_LC_DOC_NO').getValue(),
    			V_APPROV_NO: Ext.getCmp('V_APPROV_NO').getValue(),
    			V_PO_DT_FR: Ext.getCmp('V_PO_DT_FR').getValue(),
    			V_PO_DT_TO: Ext.getCmp('V_PO_DT_TO').getValue(),
    			V_M_BP_NM: Ext.getCmp('V_M_BP_NM').getValue()
    		},
    		callback: function(records,operations,success){
    		}
    	});
    	
    	//[하단]발주참조조회
    	if(Ext.getCmp('V_BL_NO').getValue() != '') {
        	Ext.Ajax.request({
    			url : 'sql/M_BL_DISTB_H.jsp',
    			method : 'post',
    			params: {
    				V_TYPE: 'S',
        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    				V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
    			},
    			success: function(response) {
    				var res = Ext.JSON.decode(response.responseText).resultList[0];
    				
    				Ext.getCmp('V_LOADING_DT').setValue(res.LOADING_DT);
        			Ext.getCmp('V_M_BP_NM2').setValue(res.M_BP_NM);
        			Ext.getCmp('V_M_BP_CD2').setValue(res.M_BP_CD);
    				Ext.getCmp('V_BL_DOC_NO').setValue(res.BL_DOC_NO);
    				Ext.getCmp('V_TRANS_TYPE').setValue(res.TRANS_TYPE);
    				Ext.getCmp('V_VESSEL_NO').setValue(res.VESSEL_NO);
    				Ext.getCmp('V_VESSEL_NM').setValue(res.VESSEL_NM);
    				Ext.getCmp('V_IN_TERMS').setValue(res.IN_TERMS);
    				Ext.getCmp('V_PAY_METH').setValue(res.PAY_METH);
        			Ext.getCmp('V_CUR').setValue(res.CUR);
        			Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
        			Ext.getCmp('V_TEMP_GL_NO').setValue(res.TEMP_GL_NO);
        			Ext.getCmp('V_TT_PAY_DT').setValue(res.TT_PAY_DT);
        			
//        			/*전표유무*/
        			if(res.TEMP_GL_NO== undefined) {
        				Ext.getCmp('blRegBtn').setDisabled(false);
        				Ext.getCmp('blCfmBtn').setDisabled(false);
        				Ext.getCmp('blCancelBtn').setDisabled(true);
        				Ext.getCmp('gridDelBtn').setDisabled(false);
        			} else {
        				Ext.getCmp('blRegBtn').setDisabled(true);
        				Ext.getCmp('blCfmBtn').setDisabled(true);
        				Ext.getCmp('blCancelBtn').setDisabled(false);
        				Ext.getCmp('gridDelBtn').setDisabled(true);
        			}

        			/*마지막 B/L유무*/
        			if(res.LAST_YN == 'Y') {
        				Ext.getCmp('V_LAST_YN').setValue(true);
        			} else {
        				Ext.getCmp('V_LAST_YN').setValue(false);
        			}
    		    	
        			store1.load({
    		    		params: {
    		    			V_TYPE: 'S',
    		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    	    				V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
    	    				V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
    		    		},
    		    		callback: function(records,operations,success){
    		    		}
    		    	});
    			}
        	});
    	}
    },

    saveBtnClick: function(button, e, eOpts) {
        alert('save');
    },

    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	
    	store.removeAll();
    	store1.removeAll();

    	var nows = new Date();
    	Ext.getCmp('V_BL_NO').setValue('');
		var nows = new Date();

		Ext.getCmp('V_LOADING_DT').setValue('');
		Ext.getCmp('V_M_BP_NM2').setValue('');
		Ext.getCmp('V_M_BP_CD2').setValue('');
		Ext.getCmp('V_BL_DOC_NO').setValue('');
		Ext.getCmp('V_TRANS_TYPE').setValue('');
		Ext.getCmp('V_VESSEL_NO').setValue('');
		Ext.getCmp('V_VESSEL_NM').setValue('');
		Ext.getCmp('V_IN_TERMS').setValue(null);
		Ext.getCmp('V_PAY_METH').setValue(null);
		Ext.getCmp('V_CUR').setValue('USD');
		Ext.getCmp('V_XCH_RATE').setValue(1);
		Ext.getCmp('V_IV_TYPE').setValue('');
		
		Ext.getCmp('V_PO_DT_TO').setValue(nows);
		nows.setDate(1);
    	Ext.getCmp('V_PO_DT_FR').setValue(nows);
    	Ext.getCmp('V_PO_NO').setValue('');
    	Ext.getCmp('V_LC_DOC_NO').setValue('');
    	Ext.getCmp('V_APPROV_NO').setValue('');
    	Ext.getCmp('V_M_BP_NM').setValue('');
    	Ext.getCmp('V_EXPECT_LOC_AMT').setValue(0);
    	
    	Ext.getCmp('V_LAST_YN').setValue(false);
    	Ext.getCmp('V_TEMP_GL_NO').setValue('');
    	Ext.getCmp('V_TT_PAY_DT').setValue('');
    	
		Ext.getCmp('blCfmBtn').setDisabled(true);
		Ext.getCmp('blCancelBtn').setDisabled(true);

		Ext.getCmp('gridDelBtn').setDisabled(false);
		Ext.getCmp('blRegBtn').setDisabled(false);
    	
    	
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
    
//    onlaunch: function() {
//    	Ext.Ajax.request({
//			url : '/HSPF01/common/sql/ERP_DB.jsp',
//			method : 'post',
//			params: {
//				V_TYPE: 'XCH_RT',
//				V_DATE : Ext.getCmp('V_LOADING_DT').getValue(),
//				V_CUR : Ext.getCmp('V_CUR').getValue(),
//				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
//			},
//			success: function(response) {
//				var res = response.responseText;
//				if(res == 'NODATA') {
//					Ext.Msg.alert('확인', '해당 날짜 환율정보가 없습니다. 관리자에게 문의하거나 임의로 입력하세요.');
//				} else {
//					Ext.getCmp('V_XCH_RATE').setValue(res);
//				}
//			}
//		});
//    }

});