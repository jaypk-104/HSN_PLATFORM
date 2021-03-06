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

Ext.define('S_SCM_TO_DN_TOT_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'S_SCM_TO_DN_TOT_HSPF.view.MyGridViewModel', 
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
			hidden: true
		}, {
			id : 'gridDelBtn',
			text : '',
			margin : '0 3 0 0',
			glyph : 'xf056@FontAwesome',
			iconCls : 'grid-del-btn',
			hidden: true
		}, {
			id : 'gridSaveBtn',
			xtype : 'button',
			glyph : 'xf0c7@FontAwesome',
			iconCls : 'grid-save-btn',
			margin : '0 3 0 0',
			hidden: true
		}, {
            id: 'gridGrBtn',
            text: '출고등록',
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
		getRowClass: function(record, index) {
            var GR_CFM_YN = record.get('GR_CFM_YN');
            
            //ITEM_CD가 없는 경우
            if(GR_CFM_YN == 'N') {
            	return 'bg-red2';
            }
           
          
        },
	},

	columns : [ {
		xtype : 'rownumberer',
		width : 40
	}, {
		xtype : 'gridcolumn',
		text : 'V_TYPE',
		hidden : true,
	}, 
//	{
//    	xtype: 'checkcolumn',
//        style: 'text-align: center; font-weight: bold; color: #3367d6',
//        dataIndex: 'CHK_YN',
//        text: '확인',
//        width: 80,
//        renderer: function (value, metadata, record, rowIndex, colIndex, store) {
//            var tempVal = '';
//            if (value === 'Y') {
//                tempVal = 'checked';
//            }
//            return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
//        },
//    }, 
    {
		xtype : 'datecolumn',
		dataIndex : 'DN_DT',
		style : 'text-align: center; font-weight: bold;',
		text : '출고일',
		align : 'center',
		format : 'Y-m-d',
		width : 120
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'DN_TYPE',
		style : 'text-align: center; font-weight: bold;',
		text : '출고구분',
		align : 'center',
		width : 100,
		hidden : true
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'DN_TYPE_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '출고구분',
		width : 120,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'S_BP_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '매출처',
		width : 100,
		hidden: true
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'S_BP_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '매출처',
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
		dataIndex : 'DN_QTY',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '바코드출고수량',
		width : 120,
		format : '0,000.00',
		summaryType : 'sum',
		summaryRenderer : function(value, summaryData, dataIndex) {
			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
		},
		
	},
	 {
		xtype : 'gridcolumn',
		dataIndex : 'GR_CFM_YN',
		style : 'text-align: center; font-weight: bold;',
		text : '입고확정',
		width : 70,
	},
	],
//	listeners: {
//        cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
//            if (e.target.type && e.target.type === 'checkbox') {
//                let checkVal = e.target.checked ? 'Y' : 'N';
//                record.set('CHK_YN', checkVal);
//            }
//        }
//    },
    selModel : {
		selType : 'checkboxmodel',
		listeners: {
        	select: function(rowmodel, record, index, eOpts) {
    			record.set('V_TYPE', 'V');
            },
            deselect: function(rowmodel, record, index, eOpts) {
    			record.set('V_TYPE', '');
            }
        }
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