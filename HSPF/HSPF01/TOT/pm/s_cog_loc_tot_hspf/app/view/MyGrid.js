/*
 * File: app/view/MyGrid.js
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

Ext.define('S_COG_LOC_TOT_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'S_COG_LOC_TOT_HSPF.view.MyGridViewModel', 
		'Ext.view.Table', 
		'Ext.grid.column.RowNumberer', 
		'Ext.grid.column.Number', 
		'Ext.grid.column.Date', 
		'Ext.selection.CheckboxModel', 
		'Ext.grid.plugin.Exporter', 
		'Ext.grid.plugin.CellEditing' 
	],

	viewModel : {
		type : 'mygrid'
	},

	id : 'myGrid',
	store : 'MyStore',
	style : 'border: 1px solid lightgray; padding: 5px;',
	title : 'My Grid Panel',
	header : false,

	config : {
		tbar : [ {
			id : 'gridAddBtn',
			text : '',
			margin : '0 3 0 0',
			glyph : 'xf055@FontAwesome',
			iconCls : 'grid-add-btn',
		}, {
			id : 'gridDelBtn',
			text : '',
			margin : '0 3 0 0',
			glyph : 'xf056@FontAwesome',
			iconCls : 'grid-del-btn',
		}, {
			id : 'gridSaveBtn',
			xtype : 'button',
			glyph : 'xf0c7@FontAwesome',
			iconCls : 'grid-save-btn',
			margin : '0 3 0 0'
		}, {
			xtype : 'container',
			flex : 1
		}, {
			xtype : 'button',
			glyph : 'xf1c3@FontAwesome',
			id : 'xlsxDown',
			cfg : {
				type : 'excel07',
				ext : 'xlsx'
			},
			iconCls : 'grid-excel-btn',
			margin : '0 3 0 0',
		} ]
	},

	viewConfig : {
		enableTextSelection : true,
	},

	columns : [ {
		xtype : 'rownumberer',
		width : 40
	}, {
		xtype : 'gridcolumn',
		text : 'V_TYPE',
		hidden : true,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '품번',
		width : 120,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '품명',
		width : 200,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'P_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '구매가',
		width : 130,
		format : '0,000',
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'PROFIT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '마진폭',
		width : 130,
		format : '0,000.00',
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'S_PRC',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '판매가격',
		width : 130,
		format : '0,000',
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'TOT_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '누계',
		width : 130,
		format : '0,000',
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'P_TOT_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '구매합계',
		width : 130,
		format : '0,000',
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'S_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '판매금액',
		width : 130,
		format : '0,000',
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'M_BP_CD',
		style : 'text-align: center; font-weight: bold;',
		align : 'center',
		text : '매입처',
		width : 100,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'M_BP_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '매입처명',
		width : 150,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'S_BP_CD',
		style : 'text-align: center; font-weight: bold;',
		align : 'center',
		text : '매출처',
		width : 100,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'S_BP_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '매출처명',
		width : 150,
	}, ],
	selModel : {
		selType : 'checkboxmodel',
		listeners : {}
	},
	plugins : [ {
		ptype : 'gridexporter'
	}, {
		ptype : 'cellediting',
		clicksToEdit : 1,
	// listeners : {
	// beforeedit : function(e, editor) {
	// if (e.grid.selection.data.V_TYPE === 'V') {
	// return false;
	// }
	//
	// return true;
	// }
	// }
	} ],

});