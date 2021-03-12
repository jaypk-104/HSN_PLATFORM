/*
 * File: app/controller/MyGridController.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('M_COL_STEEL.controller.MyGridController', {
    extend: 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1'],
	control : {
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		'#gridDelBtn' : {
			click : 'gridDelBtnClick'
		},
		"#gridSaveBtn" : { // 
			click : 'gridSaveBtnClick'
		},
		"#myGrid" : {
			cellclick: 'myGridCellClick'
		},
		"#xlsxDown1" : { // 
			click : 'xlsxDownClick'
		},
		"#gridCopyBtn" : { // 
			click : 'gridCopyBtnClick'
		},
		
	},
	
	gridAddBtnClick: function() {
		var msg = '';
		var flag = 'T';
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		if (Ext.getCmp('V_MAST_DB_NO').getValue() == '' || Ext.getCmp('V_MAST_DB_NO').getValue() == null) {
			flag = 'F';
			msg = '담보번호를 입력하세요.';
		}
		else if (gridRecord.length != 1) {
			flag = 'F';
			msg = '담보설정할 내역을 1건 선택하세요.';
		} else {
			flag = 'T';
		}

		if (flag == 'T') {
			var popup = Ext.create("M_COL_STEEL.view.WinAddRow");
			popup.show();
			Ext.getCmp('rowCount').setValue(1);
		} else {
			Ext.Msg.alert('확인', msg);
		}
	},
	
	gridDelBtnClick: function() {
		var store1 = this.getMyStore1Store();
		var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		
		if(gridRecord.length > 0) {
			
			Ext.MessageBox.confirm('확인', '삭제하시겠습니까?', function(btn) {
				if(btn == 'yes') {
					for(var i=0; i<gridRecord.length; i++) {
						if(gridRecord[i].data['V_TYPE'] == 'V' && gridRecord[i].phantom == true) {
							store1.remove(gridRecord[i]);
						} else if(gridRecord[i].data['V_TYPE'] == 'V' && gridRecord[i].phantom == false) {
							gridRecord[i].set('V_TYPE', 'D');
							store1.sync({
								params : {
									V_TYPE : 'SYNC',
									V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
									V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								},
								callback : function(records, operation, success) {
									var res = records.operations[0]._response.responseText;
									
									if(res.match('Exception')) {
										Ext.Msg.alert('확인', res);
									} else {
										store1.reload();
									}
								}, 
								success: function() {
								}
							});
						}
					}
				}
			});
		}
		
	},
	
	myGridCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		store1.load({
			params: {
				V_TYPE: 'SD',
				V_MAST_DB_NO : Ext.getCmp('V_MAST_DB_NO').getValue(),
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_PO_NO : record.get('PO_NO'),
				V_PO_SEQ : record.get('PO_SEQ'),
			},
			callback: function(records){
			}
		})
		 
	},
	xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '담보등록', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
	},
	gridCopyBtnClick: function() {
		var store = this.getMyStoreStore(); 
		var flag = '';
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		
		for(var i=0; i < gridRecord.length; i++) {
			if(i > 0) {
				gridRecord[i].set('COL_TYPE', gridRecord[0].get('COL_TYPE'));
				gridRecord[i].set('COL_AVL_AMT', gridRecord[0].get('COL_AVL_AMT'));
				gridRecord[i].set('COL_AMT', Math.ceil(gridRecord[i].get('COL_DOC_AMT') * gridRecord[0].get('LOAN_RT') * gridRecord[0].get('XCH_RATE') / 100000) * 100000);
				
			}
			
		}
	}

});
