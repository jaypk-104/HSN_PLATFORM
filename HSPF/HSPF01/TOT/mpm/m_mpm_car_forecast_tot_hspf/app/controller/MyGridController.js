/*
 * File: app/controller/MyGridController.js
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

Ext.define('M_MPM_CAR_FORECAST_TOT_HSPF.controller.MyGridController', {
	extend : 'Ext.app.Controller',

	control : {
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#createBtn" : {
			click : 'createBtnClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		},
	},

	gridAddBtnClick : function(button, e, eOpts) {
		var popup = Ext.create("M_MPM_CAR_FORECAST_TOT_HSPF.view.WinAddRow");
		popup.show();
		Ext.getCmp('rowCount').setValue(1);
	},

	gridDelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = 'T'
		var msg = '';

		store.each(function(rec, idx) {
			if (rec.data.V_TYPE == 'I') {
				flag = 'F';
				msg = '저장되지 않은 정보가 존재합니다.<br>재조회 후 삭제하십시오.';
				return;
			}
		});

		if (flag == 'F') {
			Ext.Msg.alert('확인', msg);
			return;
		}

		for (var i = 0; i < gridRecord.length; i++) {
			gridRecord[i].set('V_TYPE', 'D');
		}

		Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
			if (button == 'yes') {
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_DATE: Ext.getCmp('V_DATE').getValue(),
					},
					callback : function(records, operation, success) {
						store.reload();
					},
					success : function() {
					}
				});
			}
		});
	},

	createBtnClick : function(button, e, eOpts) {
		Ext.Msg.confirm('확인', '생성하시겠습니까?', function(button) {
			if (button == 'yes') {
				Ext.Ajax.request({
					url : 'sql/M_MPM_CAR_FORECAST_TOT_HSPF.jsp',
					method : 'post',
					params : {
						V_TYPE : 'C',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_DATE: Ext.getCmp('V_DATE').getValue(),
					},
					callback: function() {
					},
					success : function(response) {
						
						Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '생성완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
						
						var tbController = M_MPM_CAR_FORECAST_TOT_HSPF.app.getController("TbButtonController");
			    		tbController.selBtnClick();
					}
				});
			}
		});
	},

	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '자동차부품 Forecast', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	},

});
