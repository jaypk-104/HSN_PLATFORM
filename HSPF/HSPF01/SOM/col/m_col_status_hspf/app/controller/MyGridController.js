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

Ext.define('M_COL_STATUS_HSPF.controller.MyGridController', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#myGrid" : {
			cellclick : 'myGridClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		}
	},

	myGridClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		store1.removeAll();

		store1.load({
			params : {
				V_TYPE : 'SD',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_S_BP_CD : record.get('S_BP_CD'),
			},
			callback : function(records, operations, success) {
			}
		});
	},

	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '담보현황', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	}

});
