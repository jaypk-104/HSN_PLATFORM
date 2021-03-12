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

Ext.define('S_TAX_DISTR.controller.TbButtonController', {
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
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	
    	store.removeAll();
    	store1.removeAll();
    	
    	var nows = new Date();

//		Ext.getCmp('V_BILL_DT').setValue(nows);
//		Ext.getCmp('V_SALE_TYPE').setValue(null);
//		Ext.getCmp('V_S_BP_CD2').setValue('');
//		Ext.getCmp('V_S_BP_NM2').setValue('');
//		Ext.getCmp('V_R_BP_CD').setValue('');
//		Ext.getCmp('V_R_BP_NM').setValue('');
//		Ext.getCmp('V_DN_ISSUE_DT').setValue(nows);
//		Ext.getCmp('V_TAX_CD').setValue('TX3');
//		Ext.getCmp('V_CUR').setValue('KRW');
//		Ext.getCmp('V_IN_TERMS').setValue(null);
//		Ext.getCmp('V_PAY_METH').setValue('CH');
//		Ext.getCmp('V_SALE_TYPE').setValue('DSO');
    	
    	store.load({
    		params: {
    			V_TYPE: 'SH',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_TAX_DT_FR: Ext.getCmp('V_TAX_DT_FR').getValue(),
    			V_TAX_DT_TO: Ext.getCmp('V_TAX_DT_TO').getValue(),
				V_S_BP_NM : Ext.getCmp('V_S_BP_NM').getValue()
    		},
    		callback: function(records,operations,success){
    			if(Ext.getCmp('V_TAX_BILL_NO').getValue() != '') {
    				Ext.Ajax.request({
    					url : 'sql/S_TAX_DISTR.jsp',
    					method : 'post',
    					params: {
    						V_TYPE: 'S',
    		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    						V_TAX_BILL_NO : Ext.getCmp('V_TAX_BILL_NO').getValue(),
    					},
    					success: function(response) {
    						var res = Ext.JSON.decode(response.responseText).resultList[0];
    						
    						Ext.getCmp('V_TAX_BILL_YN').setValue(res.TAX_BILL_YN);
    						Ext.getCmp('V_TAX_BILL_SEND_YN').setValue(res.TAX_BILL_SEND_YN);
    						Ext.getCmp('V_CR_TYPE').setValue(res.CR_TYPE);
    						
    						Ext.getCmp('V_ISSUED_DT').setValue(res.ISSUED_DT);
    		    			Ext.getCmp('V_TAX_BILL_TYPE').setValue(res.TAX_BILL_TYPE);
    		    			Ext.getCmp('V_BIZ_AREA_CD').setValue(res.BIZ_AREA_CD);
    		    			Ext.getCmp('V_TAX_DOC_NO').setValue(res.TAX_DOC_NO);
    		    			Ext.getCmp('V_VAT_TYPE').setValue(res.VAT_TYPE);
    		    			Ext.getCmp('V_NET_AMT').setValue(res.NET_AMT);
    						Ext.getCmp('V_VAT_AMT').setValue(res.VAT_AMT);
    						Ext.getCmp('V_NET_LOC_AMT').setValue(res.NET_LOC_AMT);
    						Ext.getCmp('V_TOTAL_AMT').setValue(res.TOTAL_AMT);
    						Ext.getCmp('V_TEMP_GL_NO').setValue(res.TEMP_GL_NO);
    						

    				    	Ext.getCmp('V_S_BP_CD2').setValue(res.S_BP_CD);
    						Ext.getCmp('V_S_BP_NM2').setValue(res.S_BP_NM);
    				    	
//    						
    						if(res.TEMP_GL_NO != undefined) {	
    							Ext.getCmp('cfmBtn').setDisabled(true);
    							Ext.getCmp('gridDelBtn').setDisabled(true);
    							Ext.getCmp('tempGlCfmBtn').setDisabled(true);
    							Ext.getCmp('tempGlCancelBtn').setDisabled(false);
    						} else {
    							Ext.getCmp('cfmBtn').setDisabled(false);
    							Ext.getCmp('gridDelBtn').setDisabled(false);
    							Ext.getCmp('tempGlCfmBtn').setDisabled(false);
    							Ext.getCmp('tempGlCancelBtn').setDisabled(true);
    						}
//    		    			
    		    			store1.load({
    				    		params: {
    				    			V_TYPE: 'SD',
    				    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    								V_TAX_BILL_NO : Ext.getCmp('V_TAX_BILL_NO').getValue(),
    				    		},
    				    		callback: function(records,operations,success){
    				    		}
    						});
    					}
    		    	});
    				
    				
//    				store1.load({
//    		    		params: {
//    		    			V_TYPE: 'SD',
//    		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
//    						V_BILL_NO : Ext.getCmp('V_BILL_NO').getValue()
//    		    		},
//    		    		callback: function(records,operations,success){
//    		    			
//    		    		}
//    				});
    			}
    		}
    	});
    	
    },

    saveBtnClick: function(button, e, eOpts) {
    	
    	
    },

    clrBtnClick: function(button, e, eOpts) {

    	var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		
		store.removeAll();
		store1.removeAll();
		
    	Ext.getCmp('V_TAX_BILL_NO').setValue('');
    	Ext.getCmp('V_TAX_DOC_NO').setValue('');
    	
    	Ext.getCmp('V_S_BP_CD2').setValue('');
		Ext.getCmp('V_S_BP_NM2').setValue('');
    	
		var nows = new Date();
//
		Ext.getCmp('V_ISSUED_DT').setValue(nows);
		Ext.getCmp('V_TAX_BILL_TYPE').setValue('DSO');
		Ext.getCmp('V_BIZ_AREA_CD').setValue('TX3');
		Ext.getCmp('V_VAT_TYPE').setValue('K');
		Ext.getCmp('V_VAT_AMT').setValue('0');
		Ext.getCmp('V_NET_AMT').setValue('0');
		Ext.getCmp('V_NET_LOC_AMT').setValue('0');
		Ext.getCmp('V_TOTAL_AMT').setValue('0');
//		
		Ext.getCmp('tempGlCfmBtn').setDisabled(true);
		Ext.getCmp('tempGlCancelBtn').setDisabled(true);
    	
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
    }

});
