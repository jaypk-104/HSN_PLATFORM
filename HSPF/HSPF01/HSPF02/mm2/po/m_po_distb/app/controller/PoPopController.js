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

Ext.define('M_PO_DISTB.controller.PoPopController', {
    extend: 'Ext.app.Controller',
	stores : [ 'MyStore', 'PopStore'],
	control : {
		"#w_poSelBtn" : {
			click : 'w_poSelBtnClick'
		},
		'#w_poRegBtn' : {
			click : 'w_poRegBtnClick'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=po_search]": {
            specialkey: 'tfEnter'
        },
		"#xlsxDown2" : {
			click : 'xlsxDown2Click'
		},
	},
	
	w_poSelBtnClick: function() {
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TYPE: 'SP',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_PO_DT_FR : Ext.getCmp('V_PO_DT_FR').getValue(),
				V_PO_DT_TO : Ext.getCmp('V_PO_DT_TO').getValue(),
				V_M_BP_NM : Ext.getCmp('W_M_BP_NM2').getValue(),
				V_S_BP_NM : Ext.getCmp('W_S_BP_NM2').getValue(),
				V_APPROV_NO : Ext.getCmp('W_APPROV_NO').getValue(),
				V_PO_NO : Ext.getCmp('W_PO_NO').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	
	},
	w_poRegBtnClick: function() {
		var w_gridRecord = Ext.getCmp('PopGrid').getSelectionModel().getSelection();
		
		if(w_gridRecord.length == 1) {
			Ext.getCmp('V_PO_NO').setValue(w_gridRecord[0].data['PO_NO']);
		} else {
			Ext.Msg.alert('발주를 선택하세요.');
		}
		
		var popWin=  Ext.getCmp('WinPoPop');
		popWin.destroy();
	},
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_PO_NO').setValue(record.get('PO_NO'));
		
    	var store = this.getMyStoreStore();
    	store.removeAll();
    	
    	Ext.Ajax.request({
			url : 'sql/M_PO_HSPF_DISTR_H.jsp',
			method : 'post',
			params: {
				V_TYPE: 'S',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_PO_NO : Ext.getCmp('V_PO_NO').getValue(),
			},
			success: function(response) {
				var res = Ext.JSON.decode(response.responseText).resultList[0];
				Ext.getCmp('V_APPROV_NO').setValue(res.APPROV_NO);
		    	Ext.getCmp('V_PO_TYPE').setValue(res.PO_TYPE);
		    	Ext.getCmp('V_PO_DT').setValue(res.PO_DT);
		    	Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
		    	Ext.getCmp('V_CUR').setValue(res.CUR);
		    	Ext.getCmp('V_IN_TERMS').setValue(res.IN_TERMS);
		    	Ext.getCmp('V_PAY_METH').setValue(res.PAY_METH);
		    	Ext.getCmp('V_M_BP_CD').setValue(res.M_BP_CD);
		    	Ext.getCmp('V_M_BP_NM').setValue(res.M_BP_NM);
		    	Ext.getCmp('V_S_BP_CD').setValue(res.S_BP_CD);
		    	Ext.getCmp('V_S_BP_NM').setValue(res.S_BP_NM);
		    	Ext.getCmp('V_PUR_USR').setValue(res.PO_USR_ID);
		    	Ext.getCmp('V_PUR_USR_NM').setValue(res.PO_USR_NM);
		    	Ext.getCmp('V_TRANSPORT').setValue(res.TRANSPORT);
		    	Ext.getCmp('V_REMARK').setValue(res.REMARK);
		    	Ext.getCmp('V_PO_CFM').setValue(res.PO_CFM);
		    	Ext.getCmp('V_BL_YN').setValue(res.BL_YN);
		    	Ext.getCmp('V_TRANSFER').setValue(res.TRANSFER);
		    	
		    	Ext.getCmp('V_APPROV_MGM_NO').setValue(res.APPROV_MGM_NO);
		    	
				if(res.PO_CFM == 'Y') {
			    	Ext.getCmp('V_PO_NO').setEditable(false);
					Ext.getCmp('V_PO_TYPE').setDisabled(true);
			    	Ext.getCmp('V_PO_DT').setDisabled(true);
			    	Ext.getCmp('V_XCH_RATE').setDisabled(true);
			    	Ext.getCmp('V_CUR').setDisabled(true);
			    	Ext.getCmp('V_IN_TERMS').setDisabled(true);
			    	Ext.getCmp('V_PAY_METH').setDisabled(true);
			    	Ext.getCmp('V_M_BP_CD').setEditable(false);
			    	Ext.getCmp('V_M_BP_NM').setEditable(false);
			    	Ext.getCmp('V_S_BP_CD').setEditable(false);
			    	Ext.getCmp('V_S_BP_NM').setEditable(false);
			    	Ext.getCmp('V_PUR_USR').setEditable(false);
			    	Ext.getCmp('V_PUR_USR_NM').setEditable(false);
			    	Ext.getCmp('V_TRANSPORT').setDisabled(true);
			    	Ext.getCmp('V_REMARK').setEditable(false);
			    	
			    	Ext.getCmp('V_BL_YN').setDisabled(true);
			    	Ext.getCmp('V_TRANSFER').setDisabled(true);
			    	
			    	Ext.getCmp('gridPoSave').setDisabled(true);
			    	Ext.getCmp('delBtn').setDisabled(true);
			    	Ext.getCmp('gridAddBtn').setDisabled(true);
			    	Ext.getCmp('gridDelBtn').setDisabled(true);
			    	
				} else {
					Ext.getCmp('V_PO_NO').setEditable(true);
					Ext.getCmp('V_APPROV_NO').setEditable(true);
					Ext.getCmp('V_PO_TYPE').setDisabled(false);
			    	Ext.getCmp('V_PO_DT').setDisabled(false);
			    	Ext.getCmp('V_XCH_RATE').setDisabled(false);
			    	Ext.getCmp('V_CUR').setDisabled(false);
			    	Ext.getCmp('V_IN_TERMS').setDisabled(false);
			    	Ext.getCmp('V_PAY_METH').setDisabled(false);
			    	Ext.getCmp('V_M_BP_CD').setEditable(true);
			    	Ext.getCmp('V_M_BP_NM').setEditable(true);
			    	Ext.getCmp('V_S_BP_CD').setEditable(true);
			    	Ext.getCmp('V_S_BP_NM').setEditable(true);
			    	Ext.getCmp('V_PUR_USR').setEditable(true);
			    	Ext.getCmp('V_PUR_USR_NM').setEditable(true);
			    	Ext.getCmp('V_TRANSPORT').setDisabled(false);
			    	Ext.getCmp('V_REMARK').setEditable(true);

			    	 
			    	Ext.getCmp('delBtn').setDisabled(false);
			    	Ext.getCmp('gridPoSave').setDisabled(false);
			    	Ext.getCmp('gridAddBtn').setDisabled(false);
			    	Ext.getCmp('gridDelBtn').setDisabled(false);
			    	

			    	Ext.getCmp('V_BL_YN').setDisabled(false);
			    	Ext.getCmp('V_TRANSFER').setDisabled(false);
				}
				
				//발주디테일 조회
				store.load({
		    		params: {
		    			V_TYPE: 'S',
		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_PO_NO : Ext.getCmp('V_PO_NO').getValue(),
		    		},
		    		callback: function(records,operations,success){
		    		}
		    	});
			}
    	})
    
		
		var popWin=  Ext.getCmp('WinPoPop');
		popWin.destroy();
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_poSelBtnClick();
    	}
},
xlsxDown2Click: function(button, e, eOpts) {
	var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
	var grid = Ext.getCmp('popGrid');
	grid.saveDocumentAs({
		type: 'xlsx',
		title: '발주참조', //엑셀내타이틀
		fileName: currentDate+'.xlsx' //엑셀파일이름
	});
}

});
