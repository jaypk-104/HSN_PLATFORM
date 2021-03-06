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

Ext.define('M_ISDT_CHG_TOT_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'M_ISDT_CHG_TOT_HSPF.view.MyGridViewModel', 
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
		dataIndex : 'IV_NO',
		style : 'text-align: center; font-weight: bold;',
		text : '매입번호',
		width : 150,
	}, {
    	xtype: 'datecolumn',
    	style: 'text-align: center; font-weight: bold;',
    	text: '매입일',
    	dataIndex: 'IV_DT',
    	format: 'Y-m-d',
    	width: 100,
    }, {
		xtype : 'gridcolumn',
		dataIndex : 'IV_TYPE',
		style : 'text-align: center; font-weight: bold;',
		text : '매입유형',
		width : 100,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'IV_TYPE_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '매입유형명',
		width : 130,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'M_BP_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '거래처',
		align : 'center',
		width : 100,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'M_BP_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '거래처명',
		width : 200,
	}, {
    	xtype: 'datecolumn',
    	style: 'text-align: center; font-weight: bold;',
    	text: '수금만기일',
    	dataIndex: 'IV_ISSUE_DT',
    	format: 'Y-m-d',
    	width: 100,
    }, {
    	xtype: 'datecolumn',
    	style: 'text-align: center; font-weight: bold; color: #3367d6',
    	text: '수금만기일수정',
    	dataIndex: 'CHG_DT',
    	format: 'Y-m-d',
    	width: 120,
    	align: 'center',
        ignoreExport: true,
        editor: {
        	xtype: 'datefield',
        	format: 'Y-m-d',
        	altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
        },
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