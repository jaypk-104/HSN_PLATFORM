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

Ext.define('Y_PUMS_DISTR.controller.RiskPopController', {
    extend: 'Ext.app.Controller',
	stores : [ 'MyStore', 'PopStore'],
	control : {
		"#w_riskSelBtn" : {
			click : 'w_riskSelBtnClick'
		},
		'#w_riskRegBtn' : {
			click : 'w_riskRegBtnClick'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=risk_search]": {
            specialkey: 'tfEnter'
        },
		"#xlsxDown1" : { // 
			click : 'xlsxDownClick'
		},
	},
	
	w_riskSelBtnClick: function() {
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TYPE: 'SP1',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				W_RISK_YN : Ext.getCmp('W_RISK_YN').getValue(),
				W_RISK_TYPE : Ext.getCmp('W_RISK_TYPE').getValue(),
				W_BP_NM : Ext.getCmp('W_S_BP_NM2').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	
	},
	w_riskRegBtnClick: function() {
		var w_gridRecord = Ext.getCmp('PopGrid').getSelectionModel().getSelection();
		
		if(w_gridRecord.length == 1) {
			Ext.getCmp('V_RISK_NO').setValue(w_gridRecord[0].data['RISK_NO']);
			Ext.getCmp('V_RISK_DT').setValue(w_gridRecord[0].data['RISK_DT']);
		} else {
			Ext.Msg.alert('리스크번호를 선택하세요.');
		}
		
		
		var popWin=  Ext.getCmp('WinRiskPop');
		popWin.destroy();
	},
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_RISK_NO').setValue(record.get('RISK_NO'));
		Ext.getCmp('V_RISK_DT').setValue(record.get('RISK_DT'));

		var popWin = Ext.getCmp('WinRiskPop');
		popWin.destroy();
		
		var tbController = Y_PUMS_DISTR.app.getController("TbButtonController");
		tbController.selBtnClick();
		
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_riskSelBtnClick();
    	}
	},
	
	xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('popGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '리스크관리내역', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
},

});
