/*
 * File: app/controller/RPoRegController.js
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

Ext.define('M_PO_STEEL.controller.ConPopController', {
    extend: 'Ext.app.Controller',
	stores : [ 'PopStore1'],
	control : {
		"#w_conSelBtn" : {
			click : 'w_conSelBtnClick'
		},
		'#w_conRegBtn' : {
			click : 'w_conRegBtnClick'
		},
		'#popGrid1': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=po_search3]": {
            specialkey: 'tfEnter'
        }
	},
	
	w_conSelBtnClick: function() {
		var popStore = this.getPopStore1Store();
		popStore.load({
    		params: {
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_TYPE: 'AP',
    			V_APPROV_NO : Ext.getCmp('W_APPROV_NO3').getValue(),
    			V_S_BP_NM : Ext.getCmp('W_S_BP_NM3').getValue(),
    			V_M_BP_NM : Ext.getCmp('W_M_BP_NM3').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	
	},
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_APPROV_NO').setValue(record.get('APPROV_NO'));
		Ext.getCmp('V_APPROV_MGM_NO').setValue(record.get('APPROV_MGM_NO'));
		Ext.getCmp('V_S_BP_NM').setValue(record.get('S_BP_NM'));
		Ext.getCmp('V_S_BP_CD').setValue(record.get('S_BP_CD'));
		Ext.getCmp('V_M_BP_NM').setValue(record.get('M_BP_NM'));
		Ext.getCmp('V_M_BP_CD').setValue(record.get('M_BP_CD'));

		Ext.getCmp('V_PAY_METH').setValue(record.get('USANCE_TYPE'));
		Ext.getCmp('V_IN_TERMS').setValue(record.get('PAY_METH'));
		
		var V_VAT_TYPE = 'C';
			
		if(record.get('IV_TYPE') == 'L') { //국내
			Ext.getCmp('V_PO_TYPE').setValue('DO');
			Ext.getCmp('V_CUR').setValue('KRW');
			Ext.getCmp('V_XCH_RATE').setValue(1);
			V_VAT_TYPE = 'A';
		} else if (record.get('IV_TYPE') == 'I') { //수입
			Ext.getCmp('V_PO_TYPE').setValue('PO');
		} else if (record.get('IV_TYPE') == 'M') { //삼국간
			Ext.getCmp('V_PO_TYPE').setValue('TO');
		}
		
    	Ext.Ajax.request({
			url : 'sql/M_PO_HSPF_STEEL_H.jsp',
			method : 'post',
			params: {
				V_TYPE: 'AS',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_APPROV_NO : record.get('APPROV_MGM_NO')
			},
			success: function(response) {
				var res = Ext.JSON.decode(response.responseText).resultList;
				
				for(var i=0; i<res.length; i++) {
					if(res[i].M_BP_CD == Ext.getCmp('V_M_BP_CD').getValue()) {
						var rec = Ext.create('M_PO_STEEL.model.MyModel', {
							ITEM_CD: res[i].ITEM_CD,
							ITEM_NM: res[i].ITEM_NM,
							UNIT: 'KG',
							VAT_TYPE: V_VAT_TYPE,
							VAT_RATE: 0,
							VAT_AMT: 0,
							PO_QTY: res[i].PO_QTY,
							PO_PRC: res[i].PO_PRC,
							PO_AMT: res[i].PO_AMT ,
							PO_LOC_AMT: res[i].PO_AMT * Ext.getCmp('V_XCH_RATE').getValue(),
							ORIGIN: res[i].ORIGIN,
							BRAND: res[i].BRAND,
							OVER_TOL: 10,
							UNDER_TOL: 10,
							CONT_REMARK: res[i].CONT_REMARK,
							CONT_QTY: res[i].CONT_QTY,
							APPROV_MGM_NO: res[i].APPROV_MGM_NO,
							APPROV_MGM_SEQ: res[i].APPROV_MGM_SEQ,
			    		});
						
//						console.log(res[i].PO_AMT);
						
						var store = Ext.getStore('MyStore');
				    	var count = store.getCount();
				    	
			    		store.insert(count-1, rec);
					} 
				}
//				console.log(res[0].APPROV_DT.substring(0,10));
				
				Ext.getCmp('V_PO_DT').setValue(res[0].APPROV_DT.substring(0,10));
				
				if(record.get('IV_TYPE') != 'L') { //국내가 아닌경우 환율 가져오기. 
				//환율 가져오기
				Ext.Ajax.request({
					url : '/HSPF01/common/sql/ERP_DB.jsp',
					method : 'post',
					params: {
						V_TYPE: 'XCH_RT',
						V_DATE : Ext.getCmp('V_PO_DT').getValue(),
						V_CUR : Ext.getCmp('V_CUR').getValue(),
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					success: function(response) {
						var res = response.responseText;
						if(res == 'NODATA') {
//							Ext.Msg.alert('확인', '해당 날짜 환율정보가 없습니다. 관리자에게 문의하거나 임의로 입력하세요.');
						} else {
							Ext.getCmp('V_XCH_RATE').setValue(res);
						}
					}
				});
				} else {
					Ext.getCmp('V_XCH_RATE').setValue(1);
				}
				
			}
    	})
    
		var popWin=  Ext.getCmp('WinConPop');
		popWin.destroy();
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_conSelBtnClick();
    	}
	}

});
