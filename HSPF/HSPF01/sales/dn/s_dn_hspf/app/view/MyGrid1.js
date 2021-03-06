/*
 * File: app/view/MyGrid1.js
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

Ext.define('S_DN_HSPF.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid1',

    requires: [
        'S_DN_HSPF.view.MyGrid1ViewModel',
        'S_DN_HSPF.view.MyGrid1ViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing'
    ],


    controller: 'mygrid1',
    viewModel: {
        type: 'mygrid1'
    },
    id: 'myGrid1',
    bodyBorder: false,
    header: false,
    store: 'MyStore1',

    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            text: 'V_TYPE'
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 100,
        	align: 'center',
        	sortable: true,
        	dataIndex: 'PO_USR',
        	enableTextSelection: true,
        	text: '발주자',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'GR_NO',
            enableTextSelection: true,
            text: '입고번호',
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 100,
        	sortable: true,
        	dataIndex: 'GR_SEQ',
        	enableTextSelection: true,
        	align: 'right',
        	text: '입고순번',
        	format: '0,000'
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
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'SPEC',
            enableTextSelection: true,
            text: '규격',
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '매입수량',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_PRC',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '매입단가',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_AMT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '매입금액',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'STOCK_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '재고수량',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 250,
            sortable: true,
            dataIndex: 'REMARK',
            enableTextSelection: true,
            text: '비고',
        },
    ],
    selModel: {
        selType: 'checkboxmodel',
//        checkOnly: true,
        listeners: {
            select: 'onCheckboxModelSelect',
            deselect: 'onCheckboxModelDeselect'
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'rowediting',
            clicksToMoveEditor: 1
        }
    ]

});