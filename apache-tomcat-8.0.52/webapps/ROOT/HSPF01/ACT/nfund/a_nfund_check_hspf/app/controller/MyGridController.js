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

Ext.define('A_NFUND_CHECK_HSPF.controller.MyGridController', {
	extend : 'Ext.app.Controller',

	control : {
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#gridSaveBtn" : {
			click : 'gridSaveBtnClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		},
	},

	gridAddBtnClick : function(button, e, eOpts) {
		var popup = Ext.create("A_NFUND_CHECK_HSPF.view.WinAddRow");
		popup.show();
		Ext.getCmp('rowCount').setValue(1);
	},

	gridDelBtnClick : function(button, e, eOpts) {},

	gridSaveBtnClick : function(button, e, eOpts) {},
	
	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '미정리예금확인', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	},

});
