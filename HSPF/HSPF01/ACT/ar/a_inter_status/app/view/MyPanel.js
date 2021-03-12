/*
 * File: app/view/MyPanel.js
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

Ext.define('A_INTER_STATUS.view.MyPanel', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mypanel',

	requires: [
        'A_INTER_STATUS.view.MyPanelViewModel',
        'Ext.grid.Panel',
        'Ext.form.FieldSet', 
		'Ext.form.FieldContainer', 
		'Ext.form.field.Date',
		'Ext.form.field.Text',
		'Ext.form.field.TextArea',
		'Ext.form.field.Number',
    ],

	viewModel : {
		type : 'mypanel'
	},
	layout : 'fit',
	header : false,
	title : 'Tab 1',

	items : [ {
		xtype : 'container',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [ {
			xtype : 'gridpanel',
			flex : 1,
			style : 'border: 1px solid lightgray; padding: 5px;',
			header : false,
			title : 'My Grid Panel',
			store : 'MyStore',
			id : 'myGrid',
			tbar : [ {
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
			} ],
			columns : [ {
				xtype : 'rownumberer',
				width : 40
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 114,
				dataIndex : 'V_TYPE',
				text : 'V_TYPE',
				hidden : true
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 150,
				dataIndex : 'AR_NO',
				text : '채권번호',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 90,
				dataIndex : 'DN_NO',
				text : '출고번호',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 150,
				dataIndex : 'BILL_NO',
				text : '매출번호',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				dataIndex : 'BP_CD',
				text : '매출처코드',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				text : '매출처명',
				dataIndex : 'BP_NM',
				width : 100,
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				align : 'end',
				dataIndex : 'LOC_AMT',
				text : '채권금액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, {
				xtype : 'datecolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 100,
				format : 'Y-m-d',
				dataIndex : 'MVMT_DT',
				text : '입고일자',
			}, {
				xtype : 'datecolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 80,
				format : 'Y-m-d',
				dataIndex : 'DN_DT',
				text : '출고일자',
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 110,
				align : 'end',
				dataIndex : 'INTER_AMT',
				text : '이자금액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 110,
				align : 'end',
				dataIndex : 'INTER_VAT',
				text : '이자부가세금액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				align : 'end',
				dataIndex : 'CLS_LOC_AMT',
				text : '수금금액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			},  {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				align : 'end',
				dataIndex : 'BAL_LOC_AMT',
				text : '수금잔액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				text : '이자계산서 전표번호',
				dataIndex : 'TEMP_GL_NO',
				width : 200,
			}, ],
			viewConfig : {
				enableTextSelection : true,
			},
			selModel : {
				selType : 'checkboxmodel',
				mode : 'SINGLE',
			},
			plugins : [ {
				ptype : 'gridexporter'
			}, {
				ptype : 'cellediting',
				clicksToEdit : 1,
			}, ],
			features : [ {
				ftype : 'summary',
				dock : 'bottom'
			} ]
		}, /*{
			xtype : 'splitter',
			collapseTarget : 'prev'
		}, {
			xtype : 'gridpanel',
			flex : 1,
			style : 'border: 1px solid lightgray; padding: 5px;',
			header : false,
			title : 'My Grid Panel',
			store : 'MyStore1',
			id : 'myGrid1',
			tbar : [ {
				xtype : 'container',
				flex : 1
			}, {
				xtype : 'button',
				glyph : 'xf1c3@FontAwesome',
				id : 'xlsxDown1',
				cfg : {
					type : 'excel07',
					ext : 'xlsx'
				},
				iconCls : 'grid-excel-btn',
			} ],
			columns : [ {
				xtype : 'rownumberer',
				width : 40
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 114,
				dataIndex : 'V_TYPE',
				text : 'V_TYPE',
				hidden : true
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 150,
				dataIndex : 'CLS_AR_NO',
				text : '수금번호',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 90,
				dataIndex : 'BC_TYPE',
				text : '구분',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 110,
				dataIndex : 'BANK_NM',
				text : '입금은행',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				dataIndex : 'BANK_ACCT_NO',
				text : '입금계좌',
			}, {
				xtype : 'datecolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				text : '수금일',
				dataIndex : 'CLS_DT',
				format : 'Y-m-d',
				width : 100,
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				align : 'end',
				dataIndex : 'CLS_IN_AMT',
				text : '수금금액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				align : 'end',
				dataIndex : 'BAL_IN_AMT',
				text : '수금잔액',
				format : '0,000',
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, ],
			viewConfig : {
				enableTextSelection : true,
			},
			selModel : {
				selType : 'checkboxmodel',
				checkOnly : true,
			},
			plugins : [ {
				ptype : 'gridexporter'
			}, {
				ptype : 'cellediting',
				clicksToEdit : 1,
			}, ],
			features : [ {
				ftype : 'summary',
				dock : 'bottom'
			} ]
		}*/ ]
	} ]

});