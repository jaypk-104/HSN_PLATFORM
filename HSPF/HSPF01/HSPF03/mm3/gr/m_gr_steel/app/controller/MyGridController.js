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

Ext.define('M_GR_STEEL.controller.MyGridController', {
	extend : 'Ext.app.Controller',

	control : {
		"#gridGrBtn" : {
			click : 'gridGrBtnClick'
		},
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		},
		"#myGrid" : {
			cellclick : 'myGridClick'
		},
		"#myGrid1" : {
			cellclick : 'myGridClick1'
		}
	},

	// 입고등록버튼
	gridGrBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';


		var GR_DT = Ext.Date.format(Ext.getCmp('V_GR_DT').getValue(), 'Y-m-d');
		flag = 'T';
		var GR_COUNT = 0;

		for (var i = 0; i < gridRecord.length; i++) {
			console.log(gridRecord[i].get('SL_CD'));
			if (gridRecord[i].data['REQ_QTY'] > 0) {
				if(gridRecord[i].get('SL_CD') == undefined) {
					msg = '입고창고를 입력하세요.';
					flag = 'F';
				} else {
					flag = 'T';
					if (gridRecord[i].data['V_TYPE'] == 'V') {
						gridRecord[i].set('V_TYPE', 'ID');
					}
				}
			} else {
				GR_COUNT = GR_COUNT + 1;
				msg = '이미 입고된 품목입니다.';
				flag = 'F';
			}
		}
		
		if(gridRecord.length != GR_COUNT && flag == 'T') {
			Ext.Msg.confirm('확인', '등록하시겠습니까?<br>입고일 : ' + GR_DT, function(button) {
				if (button == 'yes') {
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

					Ext.Ajax.request({
						url : 'sql/M_GR_STEEL_H.jsp',
						method : 'post',
						params : {
							V_TYPE : 'IH',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_GR_DT: Ext.getCmp('V_GR_DT').getValue()
						},
						success : function(response) {
							var GR_NO = response.responseText;

							store.sync({
								params : {
									V_TYPE : 'SYNC',
									V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
									V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
									V_GR_NO : GR_NO,
									V_GR_DT : GR_DT,
								},
								callback : function(records, operation, success) {
									var res = records.operations[0]._response.responseText;

									if (res.match('Exception')) {
										Ext.Msg.alert('확인', res);
									} else {
										store.reload();
										store1.reload();
									}
								},
								success : function(response) {
								}
							});

						}
					});

				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}

	},
	gridAddBtnClick : function(button, e, eOpts) {
		// var popup = Ext.create("B_COMP_HSPF.view.WinAddRow");
		// popup.show();
		// Ext.getCmp('rowCount').setValue(1);
	},

	gridDelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

		if (gridRecord.length > 0) {
			Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
				if (button == 'yes') {
					for (var i = 0; i < gridRecord.length; i++) {
						if (gridRecord[i].data['V_TYPE'] == 'V') {
							gridRecord[i].data['V_TYPE'] = 'D';
						}
					}
					store.sync({
						params : {
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							store.reload();
						}
					});
				}
			});
		}
	},

	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '상품입고대체등록', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	},

	myGridClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {

		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var ccArr = new Array();
		
		for(var i=0; i<gridRecord.length; i++) {
			if(!ccArr.includes(gridRecord[i].get('CC_NO'))) {
				ccArr.push(gridRecord[i].get('CC_NO'));
			}
		}

		var CC_NO = '\'';
		
		for(var i=0; i<ccArr.length; i++) {
			CC_NO += ccArr[i] +'\',\'';
		}
		
		CC_NO = '(' + CC_NO.substr(0, CC_NO.length -2) + ')'; 
		
		
		if (record.get('REQ_QTY') == 0 && (gridRecord.length > 0)) {
			store1.load({
				params : {
					V_TYPE : 'SD',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_CC_NO : CC_NO,
					V_CC_SEQ : record.get('CC_SEQ'),
				},
				callback : function(records, operations, success) {
				}
			});
		}
		
//		console.log(record.get('TEMP_GL_NO'));
		if(record.get('TEMP_GL_NO') == undefined) {
			Ext.getCmp('tempGlCfmBtn').setDisabled(false);
			Ext.getCmp('tempGlCancelBtn').setDisabled(true);
			Ext.getCmp('gridDelBtn1').setDisabled(false);
			Ext.getCmp('chargeReCalcBtn').setDisabled(false);
			Ext.getCmp('gridSaveBtn').setDisabled(false);
			Ext.getCmp('chargeUpdateBtn').setDisabled(false);
		} else {
			Ext.getCmp('tempGlCfmBtn').setDisabled(true);
			Ext.getCmp('tempGlCancelBtn').setDisabled(false);
			Ext.getCmp('gridDelBtn1').setDisabled(true);
			Ext.getCmp('chargeReCalcBtn').setDisabled(true);
			Ext.getCmp('gridSaveBtn').setDisabled(true);
			Ext.getCmp('chargeUpdateBtn').setDisabled(true);
		}

		if (gridRecord.length == 0) {
			Ext.getCmp('tempGlCfmBtn').setDisabled(true);
			Ext.getCmp('tempGlCancelBtn').setDisabled(true);
			Ext.getCmp('gridSaveBtn').setDisabled(false);
			Ext.getCmp('gridDelBtn1').setDisabled(false);
			Ext.getCmp('chargeReCalcBtn').setDisabled(false);
			Ext.getCmp('chargeUpdateBtn').setDisabled(false);
			store1.removeAll();
		}
	},
	
	myGridClick1 : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		if(record.get('TEMP_GL_NO') == undefined) {
			Ext.getCmp('tempGlCfmBtn').setDisabled(false);
			Ext.getCmp('tempGlCancelBtn').setDisabled(true);
			Ext.getCmp('gridDelBtn1').setDisabled(false);
			Ext.getCmp('chargeReCalcBtn').setDisabled(false);
			Ext.getCmp('gridSaveBtn').setDisabled(false);
			Ext.getCmp('chargeUpdateBtn').setDisabled(false);
		} else {
			Ext.getCmp('tempGlCfmBtn').setDisabled(true);
			Ext.getCmp('tempGlCancelBtn').setDisabled(false);
			Ext.getCmp('gridDelBtn1').setDisabled(true);
			Ext.getCmp('chargeReCalcBtn').setDisabled(true);
			Ext.getCmp('gridSaveBtn').setDisabled(true);
			Ext.getCmp('chargeUpdateBtn').setDisabled(true);
		}
	}

});
