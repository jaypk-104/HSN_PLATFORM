/*
 * File: app/view/MyGrid.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
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

Ext.define('I_STOCK_RACK_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'I_STOCK_RACK_HSPF.view.MyGridViewModel',
        'I_STOCK_RACK_HSPF.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing'
    ],

    config: {
        tbar: [
            {
                id: 'gridAddBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn',
                disabled: true
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn',
                disabled: true
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
            	xtype: 'button',
            	text: '수불집계',
            	id: 'RPBtn',
            	margin:'0 3 0 0',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            	cls: 'blue-btn',
            	hidden: true
            },
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'xlsxDown',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                iconCls: 'grid-excel-btn',
            	margin: '0 3 0 0',
            }
        ]
    },

    controller: 'mygrid',
    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: '',
    bodyBorder: false,
    header: false,
    store: 'MyStore',

    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'GR_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '입고일',
            format: 'Y-m-d',
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'M_BP_NM',
            style: 'text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            enableTextSelection: true,
            text: '매입처'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'ITEM_CD',
            style: 'text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            enableTextSelection: true,
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 250,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명'
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 150,
        	sortable: true,
        	dataIndex: 'SPEC',
        	enableTextSelection: true,
        	text: '규격'
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 150,
        	sortable: true,
        	dataIndex: 'BL_NO',
        	enableTextSelection: true,
        	text: 'BL번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'REMARK',
            enableTextSelection: true,
            text: '비고'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'GR_SL_CD',
            enableTextSelection: true,
            text: '창고코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'SL_NM',
            enableTextSelection: true,
            text: '창고명'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'LC_NM',
            enableTextSelection: true,
            text: '로케이션'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'GR_RACK_CD',
            enableTextSelection: true,
            text: 'RACK번호'
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'STK_QTY',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '재고수량',
            format: '0,000.00',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'STK_AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '재고금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'GR_QTY',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '입고수량',
            format: '0,000.00',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '입고금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'DN_QTY',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '출고수량',
            format: '0,000.00',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'BE_QTY',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '전일 재고수량',
            format: '0,000.00',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
        	xtype: 'numbercolumn',
        	dataIndex: 'BE_AMT',
        	style: 'text-align: center; font-weight: bold;',
        	width: 100,
        	align: 'end',
        	enableTextSelection: true,
        	exportStyle: {
        		alignment: {
        			horizontal: 'Right'
        		}
        	},
        	text: '전일 재고금액',
        	format: '0,000',
        	summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            }
        },
        
    ],
    features: [
        {
            ftype: 'summary'
        }
     ],
    selModel: {
        selType: 'checkboxmodel',
//        checkOnly: true,
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', 'V');
            },
            deselect: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', '');
            }
        }
    },
    viewConfig: {
    	enableTextSelection: true,
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
//        {
//            ptype: 'rowediting',
//            clicksToMoveEditor: 1
//        }
    ]

});