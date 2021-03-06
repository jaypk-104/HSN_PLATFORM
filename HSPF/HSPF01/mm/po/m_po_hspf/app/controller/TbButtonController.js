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

Ext.define('M_PO_HSPF.controller.TbButtonController', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#selBtn" : {
			click : 'selBtnClick'
		},
		"#delBtn" : {
			click : 'delBtnClick'
		},
		"#clearBtn" : {
			click : 'clearBtnClick'
		},
		"#clsBtn" : {
			click : 'clsBtnClick'
		},
		"lpurreq textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		},
		"rporeg textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		}
	},
	
	/* 발주등록 최상단버튼 */
	/* MyStore : [ M_PO_HSPF_H, M_PO_HSPF_D ] */
	/* MyStore1 : [ M_PO_HSPF_D ] */
	
	/* [조회]버튼 */
	selBtnClick : function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var store1 = this.getMyStore1Store();
		
		store.removeAll();
		store.load({
			params : {
				V_TYPE : 'RS',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_REQ_DT_FR : Ext.getCmp('V_REQ_DT_FR').getValue(),
				V_REQ_DT_TO : Ext.getCmp('V_REQ_DT_TO').getValue(),
				V_M_BP_NM : Ext.getCmp('V_M_BP_NM').getValue(),
				V_ITEM_CD : Ext.getCmp('V_ITEM_CD').getValue()
			},
			callback : function(records, operations, success) {
			}
		});

		// 우측의 발주번호가 있으면 수행한다!
		if (Ext.getCmp('V_PO_NO').getValue() != '') {
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
					var result = Ext.JSON.decode(response.responseText);
					Ext.getCmp('V_PO_TYPE').setValue(result.resultList[0].PO_TYPE); // 발주유형
					Ext.getCmp('V_PO_TYPE_N').setValue(result.resultList[0].PO_TYPE_NM); // 발주유형
					Ext.getCmp('V_PO_DT').setValue(result.resultList[0].PO_DT); // 발주일자
					Ext.getCmp('V_PO_DT_N').setValue(result.resultList[0].PO_DT); // 발주일자
					Ext.getCmp('V_M_BP_CD2').setValue(result.resultList[0].BP_CD); // 공급사코드
					Ext.getCmp('V_M_BP_NM2').setValue(result.resultList[0].BP_NM); // 공급사이름
					Ext.getCmp('V_CUR').setValue(result.resultList[0].CUR); // 화폐단위
					Ext.getCmp('V_CUR_N').setValue(result.resultList[0].CUR); // 화폐단위
					Ext.getCmp('V_RATE').setValue(result.resultList[0].XCH_RATE); // 환율
					Ext.getCmp('V_RATE_N').setValue(result.resultList[0].XCH_RATE); // 환율
					Ext.getCmp('V_COMM_NO').setValue(result.resultList[0].APPROV_NO); // 품의번호
					Ext.getCmp('V_PAY').setValue(result.resultList[0].PAY_METH); // 결제방법
					Ext.getCmp('V_PAY_N').setValue(result.resultList[0].PAY_METH_NM); // 결제방법
					Ext.getCmp('V_IN_TERMS').setValue(result.resultList[0].IN_TERMS); // 가격조건
					Ext.getCmp('V_IN_TERMS_N').setValue(result.resultList[0].IN_TERMS_NM); // 가격조건
					Ext.getCmp('V_DLV_TYPE').setValue(result.resultList[0].DLV_TYPE); // 입고구분
					Ext.getCmp('V_DLV_TYPE_N').setValue(result.resultList[0].DLV_TYPE_NM); // 입고구분
					Ext.getCmp('V_PO_CFM').setValue(result.resultList[0].PO_CFM); // 발주확정유무
					Ext.getCmp('V_REMARK').setValue(result.resultList[0].REMARK); // 비고
					Ext.getCmp('V_COMM_NO').setValue(result.resultList[0].BL_NO); // B/L NO
					if(result.resultList[0].DLV_TYPE == 'B' || result.resultList[0].DLV_TYPE == 'E') {
						Ext.getCmp('V_S_BP_CD').setValue(result.resultList[0].S_BP_CD + ', ' + result.resultList[0].S_BP_NM); // 고객사
					}

					// 발주확정상태이면, 수정할 수 없다.
					if (result.resultList[0].PO_CFM == 'Y') {
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
						Ext.getCmp('V_DLV_TYPE').hide();
						Ext.getCmp('V_DLV_TYPE_N').show();
						Ext.getCmp('V_REMARK').setEditable(false);
						Ext.getCmp('V_S_BP_CD').setEditable(false);
					}
					// 발주미확정상태이면, 수정할 수 있다.
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
						Ext.getCmp('V_DLV_TYPE').show();
						Ext.getCmp('V_DLV_TYPE_N').hide();
						Ext.getCmp('V_REMARK').setEditable(true);
						Ext.getCmp('V_S_BP_CD').setEditable(true);

					}
				},
				scope : this
			});

			store1.removeAll();
			store1.load({
				params : {
					V_TYPE : 'S',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_PO_NO : Ext.getCmp('V_PO_NO').getValue()
				},
				callback : function(records, operations, success) {
				}
			});
		} else {
			store1.removeAll();

			Ext.getCmp('V_PO_TYPE').setValue(''); // 발주유형
			Ext.getCmp('V_PO_TYPE_N').setValue(''); // 발주유형
			Ext.getCmp('V_PO_DT').setValue(new Date()); // 발주일자
			Ext.getCmp('V_PO_DT_N').setValue(''); // 발주일자
			Ext.getCmp('V_M_BP_CD2').setValue(''); // 공급사코드
			Ext.getCmp('V_M_BP_NM2').setValue(''); // 공급사이름
			Ext.getCmp('V_CUR').setValue('KRW');// 화폐단위
			Ext.getCmp('V_CUR_N').setValue(''); // 화폐단위
			Ext.getCmp('V_RATE').setValue('1'); // 환율
			Ext.getCmp('V_RATE_N').setValue(''); // 환율
			Ext.getCmp('V_COMM_NO').setValue(''); // 품의번호
			Ext.getCmp('V_PAY').setValue(''); // 결제방법
			Ext.getCmp('V_PAY_N').setValue('');// 결제방법
			Ext.getCmp('V_IN_TERMS').setValue('AON'); // 가격조건
			Ext.getCmp('V_IN_TERMS_N').setValue(''); // 가격조건
			Ext.getCmp('V_DLV_TYPE').setValue(''); // 입고구분
			Ext.getCmp('V_DLV_TYPE_N').setValue(''); // 입고구분
			Ext.getCmp('V_PO_CFM').setValue(''); // 발주확정유무
			Ext.getCmp('V_REMARK').setValue(''); // 비고
			Ext.getCmp('V_S_BP_CD').setValue(''); // 비고

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
			Ext.getCmp('V_DLV_TYPE').show();
			Ext.getCmp('V_DLV_TYPE_N').hide();
			Ext.getCmp('V_REMARK').setEditable(true);
			Ext.getCmp('V_S_BP_CD').setEditable(false);
		}
	},

	clearBtnClick : function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var store1 = this.getMyStore1Store();

		store.removeAll();
		store1.removeAll();


		Ext.getCmp('gridPoBtn').setDisabled(false); //좌측발주 ON
		Ext.getCmp('gridAddBtn1').setDisabled(false); //발주+ ON
		Ext.getCmp('gridDelBtn1').setDisabled(false); //발주- ON
		Ext.getCmp('gridPoBtn1').setDisabled(false); // 발주생성 ON
		Ext.getCmp('gridPoSave').setDisabled(true);  //발주저장 OFF
		Ext.getCmp('gridPoConfBtn').setDisabled(true);  //발주확정 OFF
		
		Ext.getCmp('V_M_BP_NM').setValue(''); // 공급사
		Ext.getCmp('V_M_BP_CD').setValue(''); // 공급사
		Ext.getCmp('V_ITEM_CD').setValue(''); // 품목코드

		Ext.getCmp('V_PO_NO').setValue(''); // 발주유형
		Ext.getCmp('V_PO_TYPE').setValue(''); // 발주유형
		Ext.getCmp('V_PO_TYPE_N').setValue(''); // 발주유형
		Ext.getCmp('V_PO_DT').setValue(new Date()); // 발주일자
		Ext.getCmp('V_PO_DT_N').setValue(''); // 발주일자
		Ext.getCmp('V_M_BP_CD2').setValue(''); // 공급사코드
		Ext.getCmp('V_M_BP_NM2').setValue(''); // 공급사이름
		Ext.getCmp('V_CUR').setValue('KRW');// 화폐단위
		Ext.getCmp('V_CUR_N').setValue(''); // 화폐단위
		Ext.getCmp('V_RATE').setValue('1'); // 환율
		Ext.getCmp('V_RATE_N').setValue(''); // 환율
		Ext.getCmp('V_COMM_NO').setValue(''); // 품의번호
		Ext.getCmp('V_PAY').setValue(''); // 결제방법
		Ext.getCmp('V_PAY_N').setValue('');// 결제방법
		Ext.getCmp('V_IN_TERMS').setValue('AON'); // 가격조건
		Ext.getCmp('V_IN_TERMS_N').setValue(''); // 가격조건
		Ext.getCmp('V_DLV_TYPE').setValue(''); // 입고구분
		Ext.getCmp('V_DLV_TYPE_N').setValue(''); // 입고구분
		Ext.getCmp('V_PO_CFM').setValue(''); // 발주확정유무
		Ext.getCmp('V_REMARK').setValue(''); // 비고
		Ext.getCmp('V_S_BP_CD').setValue(''); // 비고

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
		Ext.getCmp('V_DLV_TYPE').show();
		Ext.getCmp('V_DLV_TYPE_N').hide();
		Ext.getCmp('V_REMARK').setEditable(true);
		Ext.getCmp('V_S_BP_CD').setEditable(true);
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
	}

});
