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

Ext.define('I_VS_ERP_STOCK.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'I_VS_ERP_STOCK.view.MyGridViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.column.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    config: {
        tbar: [
			{
			    id: 'stockBtn',
			    xtype: 'button',
			    text: 'ERP재고수집',
			    margin: '0 3 0 0',
			    cls: 'blue-btn',
			    style: 'background-color: white; border: 0.5px solid #3367d6;'
			},
            {
            	xtype: 'label',
            	text: '※ 조회 전 ERP재고수집을 실행하세요.',
        		margin: '0 3 0 10',
        		style: 'color: red'
            },
            {
                xtype: 'container',
                flex: 1
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
            }
        ]
    },
    viewConfig: {
      	enableTextSelection: true,
      	getRowClass: function(record, index) {
            var PF_STOCK_QTY = record.get('PF_STOCK_QTY');
            var ERP_STOCK_QTY = record.get('ERP_STOCK_QTY');
            var K_QTY = record.get('K_QTY');
            
            
            if((PF_STOCK_QTY != ERP_STOCK_QTY) ) {
            	return 'bg-red1'
            }
            if(((PF_STOCK_QTY != K_QTY) || (ERP_STOCK_QTY != K_QTY)) && K_QTY != undefined) {
            	return 'bg-red2'
            }
        },
    },
    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore',

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
            xtype: 'datecolumn',
            style: ' text-align: center; font-weight: bold;',
            text: '입고일',
            format: 'Y-m-d',
            dataIndex: 'GR_DT',
            align: 'center'
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '매입처',
            width: 230
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
            format: '0,000',
            width: 200
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'SPEC',
            text: '규격',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'BL_NO',
            enableTextSelection: true,
            text: 'B/L번호',
            width: 150 
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 120,
            align: 'end',
            dataIndex: 'PF_STOCK_QTY',
            text: '플랫폼재고수량',
        	format: '0,000.00',	
            tdCls: 'x-change-cell1',	
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 120,
            align: 'end',
            dataIndex: 'ERP_STOCK_QTY',
            text: 'ERP재고수량',
        	format: '0,000.00',	
            tdCls: 'x-change-cell1',	
        },
        {
        	xtype: 'numbercolumn',
        	style: ' text-align: center; font-weight: bold;',
        	width: 120,
        	align: 'end',
        	text: '경일재고수량',
        	dataIndex: 'K_QTY',
        	format: '0,000.00',	
        	tdCls: 'x-change-cell2',	
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	width: 250,
        	text: '비고',
        	dataIndex: 'REMARK'
        }
    ],
//    selModel: {
//        selType: 'checkboxmodel',
//        checkOnly: true
//    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting'
        }
    ]

});