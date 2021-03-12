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

Ext.define('Y_APPROV_STEEL.controller.RiskPopController', {
    extend: 'Ext.app.Controller',
	stores : [ 'MyStore', 'PopStore'],
	control : {
		"#w_riskSelBtn" : {
			click : 'w_riskSelBtnClick'
		},
		'#w_riskRegBtn' : {
			click : 'w_riskRegBtnClick'
		},
		'#w_riskModBtn' : {
			click : 'w_riskModBtnClick'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=risk_search]": {
            specialkey: 'tfEnter'
        },
		"#xlsxDownw" : { // 
			click : 'xlsxDownClick'
		},
	},
	
	w_riskSelBtnClick: function() {
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TAB_TYPE: 'T1',
    			V_TYPE: 'SP2',
    			W_S_BP_NM : Ext.getCmp('W_S_BP_NM').getValue(),
    			W_APPROV_NO : Ext.getCmp('W_APPROV_NO').getValue(),
    			W_RISK_DT_FR : Ext.getCmp('W_RISK_DT_FR').getValue(),
    			W_RISK_DT_TO : Ext.getCmp('W_RISK_DT_TO').getValue(),
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	
	},
	
	w_riskRegBtnClick: function() {
		
		var w_gridRecord = Ext.getCmp('popGrid').getSelectionModel().getSelection();
		
		if(w_gridRecord.length == 1) {
			/*신규등록시 초기화*/
			Y_APPROV_STEEL.app.getController("TbButtonController").clrBtnClick();
			
			Ext.getCmp('V_RISK_REF_NO').setValue(w_gridRecord[0].data['RISK_NO']);
			Ext.getCmp('V_S_BP_CD').setValue(w_gridRecord[0].data['S_BP_CD']);
			Ext.getCmp('V_S_BP_NM').setValue(w_gridRecord[0].data['S_BP_NM']);
			Ext.getCmp('V_SALE_TYPE').setValue(w_gridRecord[0].data['SALE_TYPE']);
			Ext.getCmp('V_IV_TYPE').setValue(w_gridRecord[0].data['IV_TYPE']);
			
			Ext.getCmp('V_APPROV_NM').setValue(
					w_gridRecord[0].data['S_BP_NM'] + ' ' + //판매처명
					new Date().getFullYear() + '년 ' + //연도
					'●차 ' + //차수
					w_gridRecord[0].data['IV_TYPE_NM'] + '' + //구매유형
					w_gridRecord[0].data['SALE_TYPE_NM'] + ' ' + //판매유형
					'진행의 건'
			);
			

			Ext.getCmp('V_PROFIT_RT').setValue(w_gridRecord[0].data['MID_RATE']);
			Ext.getCmp('V_PROFIT_UNIT').setValue(w_gridRecord[0].data['MID_UNIT']);
			
			
			var popWin=  Ext.getCmp('WinRiskPop');
			popWin.destroy();
			
		} else {
			Ext.Msg.alert('리스크번호를 선택하세요.');
		}
		
	},
	
	w_riskModBtnClick: function() {
		var w_gridRecord = Ext.getCmp('popGrid').getSelectionModel().getSelection();
		
		if(w_gridRecord.length == 1) {
			
			if(w_gridRecord[0].data['APPROV_MGM_NO'] != undefined) {
				Ext.getCmp('V_APPROV_MGM_NO').setValue(w_gridRecord[0].data['APPROV_MGM_NO']);
				var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
	    		tbController.selBtnClick();
			}
			Ext.getCmp('V_RISK_REF_NO').setValue(w_gridRecord[0].data['RISK_NO']);
			
			var popWin=  Ext.getCmp('WinRiskPop');
			popWin.destroy();
		} else {
			Ext.Msg.alert('리스크번호를 선택하세요.');
		}
		
	},
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		
		/*초기화 수행*/
		Y_APPROV_STEEL.app.getController("TbButtonController").clrBtnClick();

		Ext.getCmp('V_RISK_REF_NO').setValue(record.get('RISK_NO'));
		Ext.getCmp('V_S_BP_CD').setValue(record.get('S_BP_CD'));
		Ext.getCmp('V_S_BP_NM').setValue(record.get('S_BP_NM'));
		Ext.getCmp('V_SALE_TYPE').setValue(record.get('SALE_TYPE'));
		Ext.getCmp('V_IV_TYPE').setValue(record.get('IV_TYPE'));
		
//		console.log(record.get('IV_TYPE'));
		
		Ext.getCmp('V_APPROV_NM').setValue(
				record.get('S_BP_NM') + ' ' + //판매처명
				new Date().getFullYear() + '년 ' + //연도
				'●차 ' + //차수
				record.get('IV_TYPE_NM') + '' + //구매유형
				record.get('SALE_TYPE_NM') + ' ' + //판매유형
				'진행의 건'
		);
		Ext.getCmp('V_RISK_PROFIT').setValue(record.get('MID_RATE'));
		Ext.getCmp('V_PROFIT_RT').setValue(record.get('MID_RATE'));
		Ext.getCmp('V_PROFIT_UNIT').setValue(record.get('MID_UNIT'));
		Ext.getCmp('V_PROFIT_TYPE').setValue(record.get('MID_TYPE'));
		var date = new Date();
		Ext.getCmp('V_APPROV_NO').setValue('철강-' + date.getFullYear() + '-000');

		if(record.get('APPROV_MGM_NO') != undefined) {
			Ext.getCmp('V_APPROV_MGM_NO').setValue(record.get('APPROV_MGM_NO'));
			var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
    		tbController.selBtnClick();
    		
		}

		var popWin = Ext.getCmp('WinRiskPop');
		popWin.destroy();
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
