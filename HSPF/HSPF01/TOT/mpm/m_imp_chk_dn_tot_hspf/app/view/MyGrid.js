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

Ext.define('M_IMP_CHK_DN_TOT_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'M_IMP_CHK_DN_TOT_HSPF.view.MyGridViewModel', 
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
			margin : '0 3 0 0',
			hidden: true
		}, {
            id: 'gridFinishBtn',
            text: '일 마감',
            margin: '0 3 0 0',
            width: 100,
            cls: 'blue-btn',
            style: 'background-color: white; border: 0.5px solid #3367d6;'
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
		dataIndex : 'ITEM_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '품목명',
		width : 200,
	}, {
    	xtype: 'datecolumn',
    	style: 'text-align: center; font-weight: bold;',
    	text: '출고일',
    	dataIndex: 'YYYYMMDD',
    	format: 'Y-m-d',
    	width: 100,
    }, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '품목코드',
		width : 130,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'QTY',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '출고수량',
		width : 120,
		format : '0,000',
		summaryType : 'sum',
		summaryRenderer : function(value, summaryData, dataIndex) {
			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
		},
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'REMARK',
		style : 'text-align: center; font-weight: bold;',
		text : '비고',
		width : 200,
		hidden: true
	}, ],
	selModel : {
		selType : 'checkboxmodel',
		listeners : {}
	},
	features : [ {
		ftype: 'summary',
        dock: 'bottom'
	} ],
	plugins : [ {
		ptype : 'gridexporter'
	}, {
        ptype: 'clipboard',
    }, {
		ptype : 'cellediting',
		clicksToEdit : 1,
	} ],
	listeners:
    {
        cellkeydown: function(cell, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
            if (e.ctrlKey && e.getKey() == e.V){
            	var task = new Ext.util.DelayedTask(function(){
            		var tbController = M_IMP_CHK_DN_TOT_HSPF.app.getController("TbButtonController");
    		    	tbController.syncItem();
            	});

            	task.delay(1000);
            }
        }
    }

});