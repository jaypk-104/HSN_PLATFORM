/*
 * File: app/view/MyGrid.js
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

Ext.define('M_CC_REQ_DISTB.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_CC_REQ_DISTB.view.MyGridViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'mygrid'
    },
    style: 'border: 1px solid lightgray; padding: 5px;',
    header: false,
    title: 'My Grid Panel',
    id: 'myGrid',
    store: 'MyStore',
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
        	   xtype: 'button',
        	   id: 'ccBtn',
//        	   margin: '0 3 0 0',
        	   text: '통관등록',
	           	style: 'background-color: white; border: 0.5px solid #3367d6;',
	           	cls: 'blue-btn',
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
                margin: '0 3 0 0',
                
            }
        ]
    },
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 170,
        	dataIndex: 'S_BP_NM',
        	text: '매출처'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 110,
            dataIndex: 'CC_REQ_DT',
            format: 'Y-m-d',
            text: '통관요청일'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '통관일',
        	dataIndex: 'ID_DT',
        	format: 'Y-m-d',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'ITEM_CD',
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 123,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 170,
            dataIndex: 'BL_DOC_NO',
            text: 'B/L번호'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BL_QTY',
            text: 'B/L중량',
            format: '0,000.00'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'NON_CC_QTY',
            text: '미통관중량',
            format: '0,000.00'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'CC_QTY',
            text: '통관중량',
            format: '0,000.00'
        }
    ],
    viewConfig : {
		enableTextSelection : true,
	},
    selModel: {
        selType: 'checkboxmodel'
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting'
        }
    ]

});