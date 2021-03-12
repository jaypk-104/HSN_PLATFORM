/*
 * File: app/controller/WinAddRowController.js
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

Ext.define('M_CC_TOT_HSPF.controller.CcPopController', {
    extend: 'Ext.app.Controller',
    stores : [ 'MyStore1', 'PopStore'],
    
    control: {
		"#w_ccSelBtn" : {
			click : 'w_ccSelBtnClick'
		},
		'#w_ccRegBtn' : {
			click : 'w_ccRegBtnClick'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=cc_search]": {
            specialkey: 'tfEnter'
        }
	},

	w_ccSelBtnClick: function(button, e, eOpts) {
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TYPE: 'SP',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_ID_DT_FR : Ext.getCmp('V_ID_DT_FR').getValue(),
				V_ID_DT_TO : Ext.getCmp('V_ID_DT_TO').getValue(),
				W_ID_NO : Ext.getCmp('W_ID_NO').getValue(),
				W_BL_DOC_NO : Ext.getCmp('W_BL_DOC_NO').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	},
	
	w_ccRegBtnClick: function(button, e, eOpts) {
		this.w_popGridDblClick();
	},
	
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_CC_NO').setValue(record.get('CC_NO'));

    	var store1 = this.getMyStore1Store();
    	store1.removeAll();
    	
    	Ext.Ajax.request({
			url : 'sql/M_CC_TOT_HSPF_H.jsp',
			method : 'post',
			params: {
				V_TYPE: 'S',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_CC_NO : record.get('CC_NO'),
			},
			success: function(response) {
				var res = Ext.JSON.decode(response.responseText).resultList[0];
				
				Ext.getCmp('V_BL_DOC_NO2').setValue(res.BL_DOC_NO);
				Ext.getCmp('V_DISCHGE_PORT').setValue(res.DISCHGE_PORT);
				Ext.getCmp('V_ID_NO').setValue(res.ID_NO);
				Ext.getCmp('V_ID_DT').setValue(res.ID_DT);
				Ext.getCmp('V_TAX_CUSTOM').setValue(res.TAX_CUSTOM);
				Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
				Ext.getCmp('V_FORWARD_XCH').setValue(res.FORWARD_XCH);
				Ext.getCmp('V_TOTAL_QTY').setValue(res.TOTAL_QTY);
				Ext.getCmp('V_M_BP_NM2').setValue(res.M_BP_NM);
				Ext.getCmp('V_M_BP_CD2').setValue(res.M_BP_CD);
				Ext.getCmp('V_IN_TERMS').setValue(res.IN_TERMS);
				Ext.getCmp('V_PAY_METH').setValue(res.PAY_METH);
    			Ext.getCmp('V_CUR').setValue(res.CUR);
    			Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
		    	
    			store1.load({
		    		params: {
		    			V_TYPE: 'S',
		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
	    				V_CC_NO : Ext.getCmp('V_CC_NO').getValue(),
		    		},
		    		callback: function(records,operations,success){
		    		}
		    	});
			}
    	});
		
		var popWin=  Ext.getCmp('WinCcPop');
		popWin.destroy();
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_ccSelBtnClick();
    	}
}
	

});
