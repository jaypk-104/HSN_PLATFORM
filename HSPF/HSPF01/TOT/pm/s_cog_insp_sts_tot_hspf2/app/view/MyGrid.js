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

Ext.define('S_COG_INSP_STS_TOT_HSPF2.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'S_COG_INSP_STS_TOT_HSPF2.view.MyGridViewModel', 
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
		tbar : [ 
		{
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
		text : 'MVMT_NO',
		hidden : true,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'LC_DOC_NO',
		style : 'text-align: center; font-weight: bold;',
		text : 'L/C번호',
		width : 150,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'BL_DOC_NO',
		style : 'text-align: center; font-weight: bold;',
		text : 'B/L번호',
		width : 150,
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
		dataIndex : 'ITEM_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '품목코드',
		width : 120,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '품목명',
		width : 200,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'BL_QTY',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : 'B/L전량',
		width : 120,
		format : '0,000.00',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
        },
        exportStyle: {
			 format : 'Qty',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, 
	{
		xtype : 'gridcolumn',
		dataIndex : 'MVMT_DT',
		style : 'text-align: center; font-weight: bold;',
		text : '입고일',
		align : 'center',
		width : 100,
	}, 
	{
		xtype : 'numbercolumn',
		dataIndex : 'GR_QTY',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '입고량',
		width : 120,
		format : '0,000.00',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
        },
        exportStyle: {
			 format : 'Qty',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, 
	{
		xtype : 'gridcolumn',
		dataIndex : 'UNIT',
		style : 'text-align: center; font-weight: bold;',
		text : '단위',
		align : 'center',
		width : 100,
	}, 
	{
		xtype : 'gridcolumn',
		dataIndex : 'CUR_METH',
		style : 'text-align: center; font-weight: bold;',
		text : '통화/결제조건',
		align : 'center',
		width : 110,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'MVMT_PRC',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '입고단가',
		width : 130,
		format : '0,000.00000',
		exportStyle: {
			format : 'Price',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
		exportRenderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
            return Ext.util.Format.number(value, '0,000.00000');
        },
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'XCH_RATE',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '기준환율',
		width : 120,
		format : '0,000.00',
		exportStyle: {
			 format : 'Qty',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, 
//	{
//		xtype : 'numbercolumn',
//		dataIndex : '1',
//		style : 'text-align: center; font-weight: bold;',
//		align : 'end',
//		text : '결제환율',
//		width : 120,
//		format : '0,000.00',
//		exportStyle: {
//			 format : 'Qty',
//			 alignment: {
//				 horizontal: 'Right'
//			 },
//		},
//		hidden: true
//	}, 
	{
		xtype : 'numbercolumn',
		dataIndex : 'AT_LOC_AMT2',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '원화기준시',
		width : 130,
		format : '0,000',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
        },
        exportStyle: {
			 format : 'Number',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, 
//	{
//		xtype : 'numbercolumn',
//		dataIndex : '2',
//		style : 'text-align: center; font-weight: bold;',
//		align : 'end',
//		text : '결제기준시',
//		width : 130,
//		format : '0,000',
//		summaryType: 'sum',
//        summaryRenderer: function (value, summaryData, dataIndex) {
//            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
//        },
//        exportStyle: {
//			 format : 'Number',
//			 alignment: {
//				 horizontal: 'Right'
//			 },
//		},
//        hidden: true
//	}, 
	{
		xtype : 'numbercolumn',
		dataIndex : 'TAX_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '관세',
		width : 130,
		format : '0,000',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
        },
        exportStyle: {
			 format : 'Number',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, 
//	{
//		xtype : 'numbercolumn',
//		dataIndex : 'ETC_AMT',
//		style : 'text-align: center; font-weight: bold;',
//		align : 'end',
//		text : '기타',
//		width : 130,
//		format : '0,000',
//		summaryType: 'sum',
//        summaryRenderer: function (value, summaryData, dataIndex) {
//            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
//        },
//	}, 
	{
		xtype : 'numbercolumn',
		dataIndex : 'DISTR_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '부대비용',
		width : 130,
		format : '0,000',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
        },
        exportStyle: {
			 format : 'Number',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'DISTR_PRC',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '경비단가',
		width : 120,
		format : '0,000.0000',
        exportStyle: {
			 format : 'Fixed',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'DISTR_RT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '경비율',
		width : 110,
		format : '0,000.00',
        exportStyle: {
			 format : 'Qty',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'DISTR_CC_RT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '관세율',
		width : 110,
		format : '0,000.00',
        exportStyle: {
			 format : 'Qty',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'MVMT_LOC_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '구매금액',
		width : 130,
		format : '0,000',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
        },
        exportStyle: {
			 format : 'Number',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'AT_PRC_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '기준환율원가',
		width : 130,
		format : '0,000.00000',
		exportStyle: {
			 format : 'Price',
			 alignment: {
				 horizontal: 'Right'
			 },
		},
		exportRenderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
            return Ext.util.Format.number(value, '0,000.00000');
        },
	}, 
//	{
//		xtype : 'numbercolumn',
//		dataIndex : '3',
//		style : 'text-align: center; font-weight: bold;',
//		align : 'end',
//		text : '결제환율원가',
//		width : 130,
//		format : '0,000',
//		exportStyle: {
//			 format : 'Number',
//			 alignment: {
//				 horizontal: 'Right'
//			 },
//		},
//		hidden: true
//	}, 
	],
	selModel : {
		selType : 'checkboxmodel',
		mode: 'SINGLE',
		listeners : {}
	},
	features : [ {
		ftype: 'summary',
        dock: 'bottom'
	} ],
	plugins : [ {
		ptype : 'gridexporter'
	}, {
        ptype: 'clipboard'
    }, {
		ptype : 'cellediting',
		clicksToEdit : 1,
	} ],

});