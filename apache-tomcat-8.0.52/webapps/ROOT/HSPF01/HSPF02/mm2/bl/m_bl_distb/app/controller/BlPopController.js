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

Ext.define('M_BL_DISTB.controller.BlPopController', {
    extend: 'Ext.app.Controller',
    stores : [ 'MyStore1', 'PopStore'],
    
    control: {
		"#w_blSelBtn" : {
			click : 'w_blSelBtnClick'
		},
		'#w_blRegBtn' : {
			click : 'w_blRegBtnClick'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=bl_search]": {
            specialkey: 'tfEnter'
        }
	},

	w_blSelBtnClick: function(button, e, eOpts) {
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TYPE: 'SP',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				W_LOADING_DT_FR : Ext.getCmp('W_LOADING_DT_FR').getValue(),
				W_LOADING_DT_TO : Ext.getCmp('W_LOADING_DT_TO').getValue(),
				W_BL_DOC_NO : Ext.getCmp('W_BL_DOC_NO').getValue(),
				W_LC_DOC_NO : Ext.getCmp('W_LC_DOC_NO').getValue(),
				W_PO_NO : Ext.getCmp('W_PO_NO').getValue(),
				V_M_BP_NM : Ext.getCmp('W_M_BP_NM_1').getValue(),
				V_S_BP_NM : Ext.getCmp('W_M_BP_NM2').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	},
	
	w_blRegBtnClick: function(button, e, eOpts) {
		this.w_popGridDblClick();
	},
	
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_BL_NO').setValue(record.get('BL_NO'));

    	var store1 = this.getMyStore1Store();
    	store1.removeAll();
    	
    	Ext.Ajax.request({
			url : 'sql/M_BL_DISTB_H.jsp',
			method : 'post',
			params: {
				V_TYPE: 'S',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_BL_NO : record.get('BL_NO'),
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
    			
    			/*전표유무*/
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
						V_BL_NO : record.get('BL_NO'),
		    		},
		    		callback: function(records,operations,success){
		    			
		    			var DOC_AMT = 0;
		    			var LOC_AMT = 0;
		    			var XCH_RATE =  Ext.getCmp('V_XCH_RATE').getValue(); 
		    			var QTY = 0;
		    			
		    			store1.each(function(rec, idx) {
		    				DOC_AMT += rec.get('DOC_AMT');
		    			});
		    			
//	    			 Math.floor(PRICE*100)/100;
//		    			
//		    			console.log('외화(반올림)' + Math.round(DOC_AMT*100)/100);
//		    			console.log('외화(내림)' + Math.floor(DOC_AMT*100)/100);
//		    			console.log(XCH_RATE);
		    			
		    			LOC_AMT = (Math.round(DOC_AMT*100)/100) * XCH_RATE ;
//		    			
//		    			console.log('자국금액(반올림)' + Math.round(LOC_AMT));
//		    			console.log('자국금액(내림)' + Math.floor(LOC_AMT));
		    			
		    			Ext.getCmp('V_EXPECT_LOC_AMT').setValue(Ext.util.Format.number(LOC_AMT, '0,000')); 
		    		}
		    	});
			}
    	});
		
		var popWin=  Ext.getCmp('WinBlPop');
		popWin.destroy();
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_blSelBtnClick();
    	}
}
	

});
