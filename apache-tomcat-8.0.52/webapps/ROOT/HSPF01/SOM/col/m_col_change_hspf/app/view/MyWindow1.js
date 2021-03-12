/*
 * File: app/view/MyWindow1.js
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

Ext.define('M_COL_CHANGE_HSPF.view.MyWindow1', {
	extend : 'Ext.window.Window',
	alias : 'widget.mywindow1',

	requires: [
        'M_COL_CHANGE_HSPF.view.MyWindowViewModel1',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
    ],

	viewModel : {
		type : 'mywindow1'
	},
	height : 450,
	width : 650,
	title : '담보처리팝업(대체)',
	layout : 'fit',
	modal : true,

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [ {
		xtype : 'container',
		dock : 'top',
		height : 50,
		maxHeight : 50,
		minHeight : 50,
		width : 100,
		layout : {
			type : 'hbox',
			align : 'middle'
		},
		items : [ {
			xtype : 'textfield',
			flex : 1,
			id : 'W_DEPT_CD1',
			maxWidth : 220,
			minWidth : 220,
			width : 220,
			fieldLabel : '부서코드',
			labelAlign : 'right',
			labelWidth : 80,
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_BL_DOC_NO1',
			maxWidth : 220,
			minWidth : 220,
			width : 220,
			fieldLabel : 'BL번호',
			labelAlign : 'right',
			labelWidth : 80,
		}, {
			xtype : 'textfield',
			id : 'W_BP_CD1',
			maxWidth : 220,
			minWidth : 220,
			width : 220,
			fieldLabel : 'W_BP_CD',
			labelAlign : 'right',
			labelWidth : 80,
			hidden : true,
		}, ]
	}, ],
	items : [ {
		xtype : 'gridpanel',
		id : 'popGrid1',
		store : 'PopStore1',
		flex : 1,
		header : false,
		style : 'border: 1px solid #659DDC; padding: 5px;',
		columns : [ {
			xtype : 'rownumberer'
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'V_TYPE',
			text : 'V_TYPE',
			width : 80,
			hidden : true
		},  {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'APPROV_NO',
			text : '품의번호',
			width : 150,
			hidden: true,
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'APPROV_NM',
			text : '진행명',
			width : 200
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 150,
			dataIndex : 'BL_DOC_NO',
			text : 'BL번호',
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 150,
			dataIndex : 'BL_NO',
			text : 'BL관리번호',
			hidden : true,
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 100,
			dataIndex : 'BL_SEQ',
			text : 'BL순번',
			hidden : true,
		}, {
	    	xtype: 'datecolumn',
	    	style: 'text-align: center; font-weight: bold;',
	    	dataIndex: 'LOADING_DT',
	    	text: '선적일',
	    	format: 'Y-m-d',
	    	align: 'center'
	    }, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 120,
			dataIndex : 'ITEM_CD',
			text : '품목코드',
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 150,
			dataIndex : 'ITEM_NM',
			text : '품목명',
		}, {
	    	xtype: 'datecolumn',
	    	style: 'text-align: center; font-weight: bold;',
	    	dataIndex: 'IN_DT',
	    	text: '입고일',
	    	format: 'Y-m-d',
	    	align: 'center'
	    }, {
			xtype : 'numbercolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 100,
			align : 'end',
			dataIndex : 'S_DAYS',
			text : '보유일수',
			format : '0,000',
		}, {
			xtype : 'numbercolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 110,
			align : 'end',
			dataIndex : 'LOC_AMT',
			text : '입고금액',
			format : '0,000',
			summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        },
		}, ],
		plugins : [ {
			ptype : 'gridexporter'
		}, {
			ptype : 'cellediting'
		} ],
		
		selModel : {
			selType : 'checkboxmodel',
			mode : 'SINGLE',
			listeners : {
				select : function(rowmodel, record, index, eOpts) {
					
				},
				deselect : function(rowmodel, record, index, eOpts) {
					
				}
			}
		},
		features : [ {
			ftype : 'summary',
			dock : 'bottom'
		} ],
		viewConfig : {
			enableTextSelection : true,
			enableLocking: true,
		},
	}, {
		xtype : 'container',
		height : 50,
		maxHeight : 50,
		minHeight : 50,
		layout : {
			type : 'hbox',
			align : 'middle',
			pack : 'center'
		},
		items : [ {
			xtype : 'button',
			flex : 1,
			id : 'w_regBtn1',
			maxWidth : 100,
			minWidth : 100,
			width : 100,
			text : '저장'
		} ]
	} ]

});