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

Ext.define('S_BL_MST_TOT_HSPF.controller.TbButtonController', {
	extend : 'Ext.app.Controller',

	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#selBtn" : {
			click : 'selBtnClick'
		},
		"#saveBtn" : {
			click : 'saveBtnClick'
		},
		"#clrBtn" : {
			click : 'clrBtnClick'
		},
		"#clsBtn" : {
			click : 'clsBtnClick'
		},
		"myform textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		},
		"myform datefield[name=search_field]" : {
			specialkey : 'tfEnter'
		},
		"mysearchform textfield[name=search_field]" : {
			specialkey : 'tfEnter2'
		},
	},

	selBtnClick : function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var store1 = this.getMyStore1Store();

		store.removeAll();
		store1.removeAll();

		// [상단]발주-L/C조회
		store.load({
			params : {
				V_TYPE : 'SR',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_DN_DT_FR : Ext.getCmp('V_DN_DT_FR').getValue(),
				V_DN_DT_TO : Ext.getCmp('V_DN_DT_TO').getValue(),
				V_S_BP_CD : Ext.getCmp('V_S_BP_NM').getValue(),
				V_ITEM_CD : Ext.getCmp('V_ITEM_CD').getValue(),
				V_ITEM_NM : Ext.getCmp('V_ITEM_NM').getValue(),
				V_INV_NO : Ext.getCmp('V_INV_NO').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});

		// [하단]발주참조조회
		if (Ext.getCmp('V_BL_NO').getValue() != '') {
			Ext.Ajax.request({
				url : 'sql/S_BL_MST_TOT_HSPF.jsp',
				method : 'post',
				params : {
					V_TYPE : 'SH',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
				},
				success : function(response) {
					var res = Ext.JSON.decode(response.responseText).resultList[0];

					Ext.getCmp('V_LOADING_DT').setValue(res.LOADING_DT);
					Ext.getCmp('V_S_BP_CD2').setValue(res.S_BP_CD);
					Ext.getCmp('V_S_BP_NM2').setValue(res.S_BP_NM);
					Ext.getCmp('V_BL_DOC_NO').setValue(res.BL_DOC_NO);
//					Ext.getCmp('V_ED_DOC_NO').setValue(res.ED_DOC_NO);
//					Ext.getCmp('V_ED_DT').setValue(res.ED_DT);
//					Ext.getCmp('V_INVOICE_NO').setValue(res.INVOICE_NO);
					Ext.getCmp('V_ORIGIN_CNTRY').setValue(res.ORIGIN_CNTRY);
					Ext.getCmp('V_VESSEL_NM').setValue(res.VESSEL_NM);
					Ext.getCmp('V_IN_PLAN_DT').setValue(res.IN_PLAN_DT);
					Ext.getCmp('V_ETA').setValue(res.ETA);
					Ext.getCmp('V_ETD').setValue(res.ETD);
					Ext.getCmp('V_DISCHGE_PORT').setValue(res.DISCHGE_PORT);
					Ext.getCmp('V_LOADING_PORT').setValue(res.LOADING_PORT);
					Ext.getCmp('V_IN_TERMS').setValue(res.IN_TERMS);
					Ext.getCmp('V_PAY_METH').setValue(res.PAY_METH);
					Ext.getCmp('V_SALE_GRP').setValue(res.SALE_GRP);
					Ext.getCmp('V_CUR').setValue(res.CUR);
					Ext.getCmp('V_XCHG_RT').setValue(res.XCHG_RT);
					Ext.getCmp('V_SALE_TYPE').setValue(res.SALE_TYPE);
					Ext.getCmp('V_TEMP_GL_NO').setValue(res.TEMP_GL_NO);
					Ext.getCmp('V_INVOICE_NO').setValue(res.INVOICE_NO);
					Ext.getCmp('V_INVOICE_DT').setValue(res.INVOICE_DT);
					Ext.getCmp('V_HS_CODE').setValue(res.HS_CODE);
					Ext.getCmp('V_PAY_DUR').setValue(res.PAY_DUR);
					
					//console.log(Ext.getCmp('V_TEMP_GL_NO').getValue());
					
					// /*전표유무*/
					if (!!!res.TEMP_GL_NO) {
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

					store1.load({
						params : {
							V_TYPE : 'SD',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
						},
						callback : function(records, operations, success) {
						}
					});
					
					var fileStore = Ext.getStore('FileStore');
					fileStore.removeAll();
					fileStore.load({
						params : {
							V_TYPE : 'S',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
						},
						callback : function(records, operations, success) {
							var filePreview = '';
		   					for(var i=0; i<records.length; i++) {
		   						filePreview += records[i].get('FILE_NM') + '<br>';
		   					}
		   					
		   					var qText = '';
		   					if(filePreview.length == 0) {
		   						qText = '없음';
		   					} else {
		   						qText = filePreview;
		   					}
		   					
		                	Ext.tip.QuickTipManager.register({
		                          target: 'blDocRegBtn', // Target button's ID
		                          title : '<span style=\'color:#9CFFFA\'>첨부파일현황</span>',  // QuickTip Header
		                          text  : qText,
		                          dismissDelay: 10000 // Hide after 10 seconds hover
		                    });
							
						}
					});
				}
			});
		}
	},

	saveBtnClick : function(button, e, eOpts) {
	},

	clrBtnClick : function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var store1 = this.getMyStore1Store();

		store.removeAll();
		store1.removeAll();

		Ext.getCmp('V_BL_NO').setValue('');

//		var nows = new Date();
		Ext.getCmp('V_LOADING_DT').setValue('');
		Ext.getCmp('V_S_BP_CD2').setValue('');
		Ext.getCmp('V_S_BP_NM2').setValue('');
		Ext.getCmp('V_BL_DOC_NO').setValue('');
//		Ext.getCmp('V_ED_DOC_NO').setValue('');
//		Ext.getCmp('V_ED_DT').setValue('');
//		Ext.getCmp('V_INVOICE_NO').setValue('');
		Ext.getCmp('V_ORIGIN_CNTRY').setValue('');
		Ext.getCmp('V_VESSEL_NM').setValue('');
		Ext.getCmp('V_IN_PLAN_DT').setValue('');
		Ext.getCmp('V_ETA').setValue('');
		Ext.getCmp('V_ETD').setValue('');
		Ext.getCmp('V_DISCHGE_PORT').setValue('');
		Ext.getCmp('V_LOADING_PORT').setValue('');
		Ext.getCmp('V_IN_TERMS').setValue(null);
		Ext.getCmp('V_PAY_METH').setValue(null);
		Ext.getCmp('V_SALE_GRP').setValue(null);
		Ext.getCmp('V_CUR').setValue('USD');
		Ext.getCmp('V_XCHG_RT').setValue(1);
		Ext.getCmp('V_SALE_TYPE').setValue('');
		Ext.getCmp('V_TEMP_GL_NO').setValue('');
		Ext.getCmp('V_INVOICE_NO').setValue('');
		Ext.getCmp('V_INVOICE_DT').setValue('');
		Ext.getCmp('V_HS_CODE').setValue('');
		Ext.getCmp('V_PAY_DUR').setValue('');
		
		Ext.getCmp('blCfmBtn').setDisabled(true);
		Ext.getCmp('blCancelBtn').setDisabled(true);
		Ext.getCmp('gridDelBtn').setDisabled(false);
		Ext.getCmp('blRegBtn').setDisabled(false);

	},

	clsBtnClick : function(button, e, eOpts) {
		var tab = parent.Ext.getCmp('myTab');
		var activeTab = tab.getActiveTab();
		var tabIndex = tab.items.indexOf(activeTab);
		tab.remove(tabIndex, true);
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.selBtnClick();
		}
	},
	
	tfEnter2 : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.selBtnClick2();
		}
	},
	
	selBtnClick2 : function(button, e, eOpts) {
		var store1 = this.getMyStore1Store();
		store1.removeAll();

		// [하단]발주참조조회
		if (Ext.getCmp('V_BL_NO').getValue() != '') {
			Ext.Ajax.request({
				url : 'sql/S_BL_MST_TOT_HSPF.jsp',
				method : 'post',
				params : {
					V_TYPE : 'SH',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
				},
				success : function(response) {
					var res = Ext.JSON.decode(response.responseText).resultList[0];
					if(!!!res){
						Ext.Msg.alert('확인', 'B/L정보가 존재하지 않습니다.');
						return;
					}
					
					Ext.getCmp('V_LOADING_DT').setValue(res.LOADING_DT);
					Ext.getCmp('V_S_BP_CD2').setValue(res.S_BP_CD);
					Ext.getCmp('V_S_BP_NM2').setValue(res.S_BP_NM);
					Ext.getCmp('V_BL_DOC_NO').setValue(res.BL_DOC_NO);
					Ext.getCmp('V_ORIGIN_CNTRY').setValue(res.ORIGIN_CNTRY);
					Ext.getCmp('V_VESSEL_NM').setValue(res.VESSEL_NM);
					Ext.getCmp('V_IN_PLAN_DT').setValue(res.IN_PLAN_DT);
					Ext.getCmp('V_ETA').setValue(res.ETA);
					Ext.getCmp('V_ETD').setValue(res.ETD);
					Ext.getCmp('V_DISCHGE_PORT').setValue(res.DISCHGE_PORT);
					Ext.getCmp('V_LOADING_PORT').setValue(res.LOADING_PORT);
					Ext.getCmp('V_IN_TERMS').setValue(res.IN_TERMS);
					Ext.getCmp('V_PAY_METH').setValue(res.PAY_METH);
					Ext.getCmp('V_SALE_GRP').setValue(res.SALE_GRP);
					Ext.getCmp('V_CUR').setValue(res.CUR);
					Ext.getCmp('V_XCHG_RT').setValue(res.XCHG_RT);
					Ext.getCmp('V_SALE_TYPE').setValue(res.SALE_TYPE);
					Ext.getCmp('V_TEMP_GL_NO').setValue(res.TEMP_GL_NO);
					Ext.getCmp('V_INVOICE_NO').setValue(res.INVOICE_NO);
					Ext.getCmp('V_INVOICE_DT').setValue(res.INVOICE_DT);
					Ext.getCmp('V_HS_CODE').setValue(res.HS_CODE);
					
					// /*전표유무*/
					if (!!!res.TEMP_GL_NO) {
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

					store1.load({
						params : {
							V_TYPE : 'SD',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
						},
						callback : function(records, operations, success) {
						}
					});
					
					var fileStore = Ext.getStore('FileStore');
					fileStore.removeAll();
					fileStore.load({
						params : {
							V_TYPE : 'S',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_BL_NO : Ext.getCmp('V_BL_NO').getValue(),
						},
						callback : function(records, operations, success) {
							var filePreview = '';
		   					for(var i=0; i<records.length; i++) {
		   						filePreview += records[i].get('FILE_NM') + '<br>';
		   					}
		   					
		   					var qText = '';
		   					if(filePreview.length == 0) {
		   						qText = '없음';
		   					} else {
		   						qText = filePreview;
		   					}
		   					
		                	Ext.tip.QuickTipManager.register({
		                          target: 'blDocRegBtn', // Target button's ID
		                          title : '<span style=\'color:#9CFFFA\'>첨부파일현황</span>',  // QuickTip Header
		                          text  : qText,
		                          dismissDelay: 10000 // Hide after 10 seconds hover
		                    });
		                	
		                	Ext.getCmp('blDocRegBtn').setText('선적서류저장[ ' + records.length + ' ]');
							
						}
					});
				}
			});
		}
	},

});
