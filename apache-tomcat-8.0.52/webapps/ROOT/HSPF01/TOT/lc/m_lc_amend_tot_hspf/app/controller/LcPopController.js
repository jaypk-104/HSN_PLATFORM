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

Ext.define('M_LC_AMEND_TOT_HSPF.controller.LcPopController', {
    extend: 'Ext.app.Controller',
    stores : [ 'MyStore1', 'PopStore'],
    
    control: {
		"#w_lcSelBtn" : {
			click : 'w_lcSelBtnClick'
		},
		'#w_lcRegBtn' : {
			click : 'w_lcRegBtnClick'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=lc_search]": {
            specialkey: 'tfEnter'
        },
		"#xlsxDown3" : {
			click : 'xlsxDown3Click'
		},
	},

	w_lcSelBtnClick: function(button, e, eOpts) {
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TYPE: 'PS',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_LC_DT_FR : Ext.getCmp('W_LC_DT_FR').getValue(),
				V_LC_DT_TO : Ext.getCmp('W_LC_DT_TO').getValue(),
				V_LC_AMD_NO : Ext.getCmp('W_LC_DOC_NO').getValue(),
				V_M_BP_NM : Ext.getCmp('W_M_BP_NM_1').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	},
	
	w_lcRegBtnClick: function(button, e, eOpts) {
		record = Ext.getCmp('popGrid').getSelectionModel().getSelection()[0];

		Ext.getCmp('V_LC_AMD_NO').setValue(record.get('LC_AMD_NO'));

    	var store1 = this.getMyStore1Store();
    	store1.removeAll();
    	
    	// LC디테일 조회
    	Ext.Ajax.request({
			url : 'sql/M_LC_AMEND_TOT_HSPF.jsp',
			method : 'post',
			params: {
				V_TYPE: 'SH',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_LC_AMD_NO : record.get('LC_AMD_NO'),
			},
			success: function(response) {
				var res = Ext.JSON.decode(response.responseText).resultList[0];
				
		    	Ext.getCmp('V_OPEN_DT').setValue(res.OPEN_DT);
		    	Ext.getCmp('V_AMEND_DT').setValue(res.AMEND_DT);
		    	Ext.getCmp('V_M_BP_NM2').setValue(res.M_BP_NM);
		    	Ext.getCmp('V_M_BP_CD2').setValue(res.M_BP_CD);
		    	Ext.getCmp('V_LC_DOC_NO').setValue(res.LC_DOC_NO);
		    	Ext.getCmp('V_LC_AMEND_SEQ').setValue(res.LC_AMEND_SEQ);
		    	Ext.getCmp('V_BANK_CD').setValue(res.BANK_CD);
		    	Ext.getCmp('V_CUR').setValue(res.CUR);
		    	Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
		    	
				//LC디테일 조회
				store1.load({
		    		params: {
		    			V_TYPE: 'SD',
		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_LC_AMD_NO : Ext.getCmp('V_LC_AMD_NO').getValue(),
		    		},
		    		callback: function(records,operations,success){
		    		}
		    	});
			}
    	});
		
		var popWin=  Ext.getCmp('WinLcPop');
		popWin.destroy();
	},
	
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_LC_AMD_NO').setValue(record.get('LC_AMD_NO'));

    	var store1 = this.getMyStore1Store();
    	store1.removeAll();
    	
    	// LC디테일 조회
    	Ext.Ajax.request({
			url : 'sql/M_LC_AMEND_TOT_HSPF.jsp',
			method : 'post',
			params: {
				V_TYPE: 'SH',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_LC_AMD_NO : record.get('LC_AMD_NO'),
			},
			success: function(response) {
				var res = Ext.JSON.decode(response.responseText).resultList[0];
				
		    	Ext.getCmp('V_OPEN_DT').setValue(res.OPEN_DT);
		    	Ext.getCmp('V_AMEND_DT').setValue(res.AMEND_DT);
		    	Ext.getCmp('V_M_BP_NM2').setValue(res.M_BP_NM);
		    	Ext.getCmp('V_M_BP_CD2').setValue(res.M_BP_CD);
		    	Ext.getCmp('V_LC_DOC_NO').setValue(res.LC_DOC_NO);
		    	Ext.getCmp('V_LC_NO').setValue(res.LC_NO);
		    	Ext.getCmp('V_LC_AMEND_SEQ').setValue(res.LC_AMEND_SEQ);
		    	Ext.getCmp('V_BANK_CD').setValue(res.BANK_CD);
		    	Ext.getCmp('V_CUR').setValue(res.CUR);
		    	Ext.getCmp('V_XCH_RATE').setValue(res.XCH_RATE);
		    	
//		    	Ext.getCmp('V_PO_NO').setValue(record.get('PO_NO'));
//				Ext.getCmp('V_PAY_METH').setValue(record.get('PAY_METH'));
//				Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
				Ext.getCmp('V_LC_KIND').setValue(res.LC_KIND);
		    	
				//LC디테일 조회
				store1.load({
		    		params: {
		    			V_TYPE: 'SD',
		    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_LC_AMD_NO : Ext.getCmp('V_LC_AMD_NO').getValue(),
		    		},
		    		callback: function(records,operations,success){
		    		}
		    	});
			}
    	});
		
		var popWin = Ext.getCmp('WinLcPop');
		popWin.destroy();
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_lcSelBtnClick();
    	}
	},

	xlsxDown3Click: function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('popGrid');
		grid.saveDocumentAs({
			type: 'xlsx',
			title: 'L/C AMEND 참조', //엑셀내타이틀
			fileName: currentDate+'.xlsx' //엑셀파일이름
		});
	}
	

});
