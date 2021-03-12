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

Ext.define('A_TEMP_GL_VS_ERP_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 'A_TEMP_GL_VS_ERP_HSPF.view.MyGridViewModel', 'Ext.view.Table', 'Ext.grid.column.RowNumberer', 'Ext.grid.column.Number', 'Ext.grid.column.Date', 'Ext.selection.CheckboxModel', 'Ext.grid.plugin.Exporter', 'Ext.grid.plugin.CellEditing' ],
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
	columns : [ {
		xtype : 'rownumberer',
		width : 40,
		align : 'center'
	}, {
		xtype : 'gridcolumn',
		text : 'COMP_ID',
		hidden : true,
	}, {
		xtype : 'gridcolumn',
		text : 'V_TYPE',
		hidden : true,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'TEMP_GL_NO',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		text : '플랫폼 전표번호',
		align : 'center',
		width : 150,
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 150,
		align : 'center',
		dataIndex : 'ERP_TEMP_GL_NO',
		text : 'ERP 전표번호',
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 150,
		align : 'center',
		dataIndex : 'GL_NO',
		text : '회계전표번호',
	}, {
		xtype : 'datecolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 100,
		align : 'center',
		dataIndex : 'TEMP_GL_DT',
		text : '전표일자',
		format : 'Y-m-d',
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 100,
		align : 'center',
		dataIndex : 'DEPT_CD',
		text : '부서코드',
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 200,
		align : 'center',
		dataIndex : 'DEPT_NM',
		text : '부서명',
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 150,
		align : 'center',
		dataIndex : 'REF_NO',
		text : '참조번호',
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 100,
		align : 'center',
		dataIndex : 'INSRT_USER_ID',
		text : '생성자',
	},{
		xtype : 'datecolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 100,
		dataIndex : 'INSRT_DT',
		align : 'center',
		text : '생성일시',
		format : 'Y-m-d',
	}, {
		xtype : 'gridcolumn',
		style : 'font-size: 12px; text-align: center; font-weight: bold;',
		width : 100,
		dataIndex : 'ERROR_YN',
		align : 'center',
		text : '이상유무',
		renderer : function(value)
		{
			if(value=='Y')
				return '유';
			else if(value == 'N')
				return '무';
		},
	}, ],
	viewConfig : {
		enableTextSelection : true,
	},
	/*selModel : {
		selType : 'checkboxmodel',
		mode : 'MULTI',
		listeners : {}
	},*/
	features : [ {
		ftype : 'summary',
		dock : 'bottom'
	} ],
	plugins : [ {
		ptype : 'gridexporter'
	}, {
		ptype : 'cellediting',
		clicksToEdit : 1,
		listeners : {}
	}, {
		ptype : 'clipboard',
	}, {
		ptype : 'gridfilters'
	}, ],

});