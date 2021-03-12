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

Ext.define('M_OFFER_CFM.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore', 'MyStore1'],
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
        /*발주팝업*/
        "#w_selBtn": {
        	click: 'w_selBtnClick'
        },
        "#popGrid" : {
			celldblclick : 'cellDblClick'
		},
    },

    selBtnClick: function(button, e, eOpts) {
//    	console.log('click');
    	
    	var store = Ext.getStore('MyStore');
    	var store1 = Ext.getStore('MyStore1');
    	store.load({
    		params: {
				V_TYPE: 'SH',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
				V_MAST_PO_NO: Ext.getCmp('V_MAST_PO_NO').getValue(),
    			V_PO_DT_FR : Ext.getCmp('V_PO_DT_FR').getValue(),
    			V_PO_DT_TO : Ext.getCmp('V_PO_DT_TO').getValue(),
    			V_M_BP_CD : Ext.getCmp('V_M_BP_CD').getValue(),
    			V_PO_USR_NM : Ext.getCmp('V_PO_USR_NM').getValue(),
			},
    		callback: function(records,operations,success){
    			store1.removeAll();
    		}
    	});
    },

    saveBtnClick: function() {
        var store = Ext.getStore('MyStore');
        var gridRecord = 'temp';

    	if(gridRecord.length > 0 || true) {
    		Ext.Msg.confirm('확인','저장하시겠습니까?', function(button){
    			if(button == 'yes') {
    				var V_TYPE = '';
    				if(Ext.getCmp('V_MAST_PO_NO').getValue() == '') {
    					V_TYPE = 'I'
    				} else {
    					V_TYPE = 'U'
    				}
    				
    				Ext.Ajax.request({
						url:'sql/M_PO_TOT_MGM.jsp',
						method: 'post',
						params: {
			    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
			    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
							V_TYPE: V_TYPE, //저장
							V_MAST_PO_NO: Ext.getCmp('V_MAST_PO_NO').getValue(),
							V_PO_TYPE: Ext.getCmp('V_PO_TYPE').getValue(),
							V_PO_DT: Ext.getCmp('V_PO_DT').getValue(),
							V_CUR: Ext.getCmp('V_CUR').getValue(),
							V_XCHG_RATE: Ext.getCmp('V_XCHG_RATE').getValue(),
							V_IN_TERMS: Ext.getCmp('V_IN_TERMS').getValue(),
							V_PAY_METH: Ext.getCmp('V_PAY_METH').getValue(),
							V_VAT_TYPE: Ext.getCmp('V_VAT_TYPE').getValue(),
							V_GR_TYPE: Ext.getCmp('V_GR_TYPE').getValue(),
							V_DLV_TYPE: Ext.getCmp('V_DLV_TYPE').getValue(),
							V_M_BP_CD: Ext.getCmp('V_M_BP_CD').getValue(),
							V_M_BP_NM: Ext.getCmp('V_M_BP_NM').getValue(),
							V_S_BP_CD: Ext.getCmp('V_S_BP_CD').getValue(),
							V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
							V_REMARK: Ext.getCmp('V_REMARK').getValue(),
							V_SYS_TYPE: Ext.getCmp('V_SYS_TYPE').getValue(),
						},
						callback : function(records,operations,success){
							
					    },
					    success : function(response) {
					    	var PO_NO = response.responseText;
					    	Ext.getCmp('V_MAST_PO_NO').setValue(PO_NO);
					    	
					    	store.each(function(rec, idx) {
					    		if(rec.phantom == true) {
					    			rec.set('V_TYPE', 'I');
					    		} else {
					    			rec.set('V_TYPE', 'U');
					    		}
					    		rec.get(V_TYPE);
					    	});
					    	
					    	store.sync({
		    					params: {
		    						V_TYPE : 'SYNC',
		    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		    						V_MAST_PO_NO: Ext.getCmp('V_MAST_PO_NO').getValue(),
									V_VAT_TYPE: Ext.getCmp('V_VAT_TYPE').getValue(),
		    					},
		    		    		callback: function(records, operation, success) {
		    		    			var tbController = M_PO_TOT_MGM.app.getController("TbButtonController");
		    				    	tbController.selBtnClick();
		    					}
		    		    	});
					    },
						scope: this
					});
    				
    			}
    		});
    	}
    },

    delBtnClick: function(button, e, eOpts) {
//    	Ext.Msg.confirm('확인','전체삭제 하시겠습니까?', function(button){
//			if(button == 'yes') {
//				Ext.Ajax.request({
//					url:'sql/M_PO_TOT_MGM.jsp',
//					method: 'post',
//					params: {
//		    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
//		    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
//						V_TYPE: "D", //저장,
//						V_MAST_PO_NO: Ext.getCmp('V_MAST_PO_NO').getValue(),
//					},
//					callback : function(records,operations,success){
//						
//				    },
//				    success : function(response) {
//
//				    	var tbController = M_PO_TOT_MGM.app.getController("TbButtonController");
//				    	tbController.clrBtnClick();
//				    	
//				    }
//				});
//			}
//    	});
    	
    },
    clrBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	store.removeAll();
    	
    	var nows = new Date();
    	nows.setMonth(nows.getMonth()-1);
        
    	Ext.getCmp('V_MAST_PO_NO').setValue('');
    	Ext.getCmp('V_PO_DT_FR').setValue(nows);
		Ext.getCmp('V_PO_DT_TO').setValue(new Date());
		Ext.getCmp('V_M_BP_CD').setValue('');
		Ext.getCmp('V_M_BP_NM').setValue('');
		
    	
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
        BPstore1.load();
    },

    w_selBtnClick: function(button, e, eOpts) {
    	var store1 = Ext.getStore('PopStore');
    	store1.removeAll();
    	store1.load({
    		params: {
    			V_TYPE: 'SP',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			W_PO_DT_FR : Ext.getCmp('W_PO_DT_FR').getValue(),
    			W_PO_DT_TO : Ext.getCmp('W_PO_DT_TO').getValue(),
    			W_M_BP_NM : Ext.getCmp('W_M_BP_NM').getValue()
    		},
    		callback: function(records,operations,success){
    			
    		}
    	});
    	
    },
    cellDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	var MAST_PO_NO = record.get('MAST_PO_NO');
    	Ext.getCmp('V_MAST_PO_NO').setValue(MAST_PO_NO);
    	
    	var tbController = M_OFFER_CFM.app.getController("TbButtonController");
    	tbController.selBtnClick();
    	
    	var popWin=  Ext.getCmp('MyWindow1');
		popWin.destroy();
    }
});
