/*
 * File: app/controller/WinPoPopController.js
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

Ext.define('Popup.controller.WinPoPopController', {
	extend : 'Ext.app.Controller',
	views : [ 'WinPoPop' ],
	stores : [ 'WinPoPopStore' ],
	control : {
		"#poSelBtn" : {
			click : 'poSelBtnClick'
		},
		"#poNoInsrtBtn" : {
			click : 'poNoInsrtBtnClick'
		},
		"#WinPoPopGrid" : {
			beforecelldblclick : 'cellDblClick'
		},
		"winpopop textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		}
	},

	poSelBtnClick : function(button, e, eOpts) {
		var store = this.getWinPoPopStoreStore();
		store.removeAll();
		store.load({
			params : {
				V_TYPE: 'PO',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				W_PO_NO1 : Ext.getCmp('W_PO_NO1').getValue(),
				W_M_BP_CD_PO : Ext.getCmp('W_M_BP_CD_PO').getValue(),
				W_M_BP_NM_PO : Ext.getCmp('W_M_BP_NM_PO').getValue(),
				W_PO_DT_FROM : Ext.getCmp('W_PO_DT_FROM').getValue(),
				W_PO_DT_TO : Ext.getCmp('W_PO_DT_TO').getValue()
			},
			callback : function(records, operations, success) {
			}
		});
	},
	poNoInsrtBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('WinPoPopGrid').getSelectionModel().getSelection();

		store1.removeAll();
		store1.load({
			params : {
				V_TYPE : 'S',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_PO_NO : Ext.getCmp('V_PO_NO').getValue()
			},
			callback : function(records, operations, success) {

				Ext.Ajax.request({
					url : 'sql/M_PO_HSPF_H.jsp',
					method : 'post',
					params : {
						V_TYPE : 'S',
						V_PO_NO : Ext.getCmp('V_PO_NO').getValue(),
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					success : function(response) {
						var result1 = Ext.JSON.decode(response.responseText);
						Ext.getCmp('V_PO_NO').setValue(gridRecord[0].data['PO_NO']);

						var popWin = Ext.getCmp('WinPoPop');
						popWin.destroy();

						Ext.getCmp('gridPoBtn').setDisabled(true); // ???????????? OFF
						Ext.getCmp('gridPoBtn1').setDisabled(true); // ???????????? OFF
						Ext.getCmp('gridPoConfBtn').setDisabled(false); // ????????????

						Ext.getCmp('V_PO_TYPE').setValue(result1.resultList[0].PO_TYPE); // ????????????
						Ext.getCmp('V_PO_TYPE_N').setValue(result1.resultList[0].PO_TYPE); // ????????????
						Ext.getCmp('V_PO_DT').setValue(result1.resultList[0].PO_DT); // ????????????
						Ext.getCmp('V_PO_DT_N').setValue(result1.resultList[0].PO_DT); // ????????????
						Ext.getCmp('V_M_BP_CD2').setValue(result1.resultList[0].BP_CD); // ???????????????
						Ext.getCmp('V_M_BP_NM2').setValue(result1.resultList[0].BP_NM); // ???????????????
						Ext.getCmp('V_CUR').setValue(result1.resultList[0].CUR); // ????????????
						Ext.getCmp('V_CUR_N').setValue(result1.resultList[0].CUR); // ????????????
						Ext.getCmp('V_RATE').setValue(result1.resultList[0].XCH_RATE); // ??????
						Ext.getCmp('V_RATE_N').setValue(result1.resultList[0].XCH_RATE); // ??????
						Ext.getCmp('V_COMM_NO').setValue(result1.resultList[0].APPROV_NO); // ????????????
						Ext.getCmp('V_PAY').setValue(result1.resultList[0].PAY_METH); // ????????????
						Ext.getCmp('V_PAY_N').setValue(result1.resultList[0].PAY_METH_NM); // ????????????
						Ext.getCmp('V_IN_TERMS').setValue(result1.resultList[0].IN_TERMS); // ????????????
						Ext.getCmp('V_IN_TERMS_N').setValue(result1.resultList[0].IN_TERMS_NM); // ????????????
						Ext.getCmp('V_PO_CFM').setValue(result1.resultList[0].PO_CFM); // ??????????????????
						Ext.getCmp('V_REMARK').setValue(result1.resultList[0].REMARK); // ??????????????????
						Ext.getCmp('V_COMM_NO').setValue(result1.resultList[0].BL_NO); // BL_NO
						if(result1.resultList[0].DLV_TYPE == 'B' || result1.resultList[0].DLV_TYPE == 'E') {
							Ext.getCmp('V_S_BP_CD').setValue(result1.resultList[0].S_BP_CD + ', ' + result1.resultList[0].S_BP_NM); // ?????????
						}

						// ????????????????????????, ????????? ??? ??????.
						if (gridRecord[0].data['PO_CFM'] == 'Y') {
							Ext.getCmp('V_PO_NO').setEditable(false);
							Ext.getCmp('V_PO_TYPE').hide();
							Ext.getCmp('V_PO_TYPE_N').show();
							Ext.getCmp('V_PO_DT').hide();
							Ext.getCmp('V_PO_DT_N').show();
							Ext.getCmp('V_M_BP_CD2').setEditable(false);
							Ext.getCmp('V_M_BP_NM2').setEditable(false);
							Ext.getCmp('V_CUR').hide();
							Ext.getCmp('V_CUR_N').show();
							Ext.getCmp('V_RATE').hide();
							Ext.getCmp('V_RATE_N').show();
							Ext.getCmp('V_COMM_NO').setEditable(false);
							Ext.getCmp('V_PAY').hide();
							Ext.getCmp('V_PAY_N').show();
							Ext.getCmp('V_IN_TERMS').hide();
							Ext.getCmp('V_IN_TERMS_N').show();
							Ext.getCmp('V_REMARK').setEditable(false);
							Ext.getCmp('V_S_BP_CD').setEditable(false);

							Ext.getCmp('gridAddBtn1').setDisabled(true); // ??????+ OFF
							Ext.getCmp('gridDelBtn1').setDisabled(true); // ??????- OFF
							Ext.getCmp('gridPoSave').setDisabled(true); // ???????????? OFF

						}
						// ???????????????????????????, ????????? ??? ??????.
						else {
							Ext.getCmp('V_PO_NO').setEditable(true);
							Ext.getCmp('V_PO_TYPE').show();
							Ext.getCmp('V_PO_TYPE_N').hide();
							Ext.getCmp('V_PO_DT').show();
							Ext.getCmp('V_PO_DT_N').hide();
							Ext.getCmp('V_M_BP_CD2').setEditable(true);
							Ext.getCmp('V_M_BP_NM2').setEditable(true);
							Ext.getCmp('V_CUR').show();
							Ext.getCmp('V_CUR_N').hide();
							Ext.getCmp('V_RATE').show();
							Ext.getCmp('V_RATE_N').hide();
							Ext.getCmp('V_COMM_NO').setEditable(true);
							Ext.getCmp('V_PAY').show();
							Ext.getCmp('V_PAY_N').hide();
							Ext.getCmp('V_IN_TERMS').show();
							Ext.getCmp('V_IN_TERMS_N').hide();
							Ext.getCmp('V_REMARK').setEditable(true);
							Ext.getCmp('V_S_BP_CD').setEditable(true);

							Ext.getCmp('gridAddBtn1').setDisabled(false); // ??????+ ON
							Ext.getCmp('gridDelBtn1').setDisabled(false); // ??????- ON
							Ext.getCmp('gridPoSave').setDisabled(false); // ???????????? ON
						}
						
						M_PO_HSPF.app.getController('TbButtonController').selBtnClick(); //??????????????????

					},
					scope : this
				});

			}
		});

	},
	cellDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		this.poNoInsrtBtnClick();
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.poSelBtnClick();
		}
	},

});
