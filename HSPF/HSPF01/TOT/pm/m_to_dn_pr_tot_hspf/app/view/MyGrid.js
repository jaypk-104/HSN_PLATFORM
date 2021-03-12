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

Ext.define('M_TO_DN_PR_TOT_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'M_TO_DN_PR_TOT_HSPF.view.MyGridViewModel', 
		'Ext.view.Table', 
		'Ext.grid.column.RowNumberer', 
		'Ext.grid.column.Number', 
		'Ext.grid.column.Date', 
		'Ext.selection.CheckboxModel', 
		'Ext.grid.plugin.Exporter', 
		'Ext.grid.plugin.CellEditing',
		'Ext.grid.plugin.Clipboard',
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
		tbar : [ 
		{
        	xtype: 'button',
        	id: 'printBtn',
        	margin: '0 3 0 0',
        	text: '거래명세표 출력',
        	style: 'background-color: white; border: 0.5px solid #3367d6;',
        	cls: 'blue-btn',
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
		dataIndex : 'DN_NO',
		style : 'text-align: center; font-weight: bold;',
		text : '출하번호',
		width : 150,
	}, {
    	xtype: 'datecolumn',
    	style: 'text-align: center; font-weight: bold;',
    	text: '출하일자',
    	dataIndex: 'DN_DT',
    	format: 'Y-m-d',
    	width: 100,
    }, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '품목코드',
		width : 130,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '품목명',
		width : 200,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'SPEC',
		style : 'text-align: center; font-weight: bold;',
		text : '규격',
		width : 130,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'DN_QTY',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '수량',
		width : 120,
		format : '0,000.00',
		summaryType : 'sum',
		summaryRenderer : function(value, summaryData, dataIndex) {
			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "</font>";
		},
		exportStyle: {
			 format : 'Qty',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'UNIT',
		style : 'text-align: center; font-weight: bold;',
		text : '단위',
		width : 100,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'DN_PRC',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '단가',
		width : 120,
		format : '0,000.00000',
		summaryType : 'sum',
		summaryRenderer : function(value, summaryData, dataIndex) {
			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00000') + "</font>";
		},
		exportStyle: {
			 format : 'Price',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'DN_LOC_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '금액',
		width : 120,
		format : '0,000',
		summaryType : 'sum',
		summaryRenderer : function(value, summaryData, dataIndex) {
			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "</font>";
		},
		exportStyle: {
			 format : 'Number',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'REMARK',
		style : 'text-align: center; font-weight: bold;',
		text : '비고',
		width : 200,
	},
	],
	selModel : {
		selType : 'checkboxmodel',
	},
	features : [ {
		ftype: 'summary',
        dock: 'bottom'
	} ],
	plugins : [ {
		ptype : 'gridexporter'
	}, {
		ptype : 'cellediting',
		clicksToEdit : 1,
	} ],

});