/*
 * File: app/view/MyGrid2.js
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

Ext.define('M_PO_PLAN_LOCAL_HSPF.view.MyGrid2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid2',

    requires: [
        'M_PO_PLAN_LOCAL_HSPF.view.MyGrid2ViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Text',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    config: {
        tbar: [
            {
                xtype: 'label',
                text: '[ 출고예정정보 ]'
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'xlsxDown2',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                iconCls: 'grid-excel-btn',
                margin: '0 3 0 0',
                
            }
        ]
    },

    viewModel: {
        type: 'mygrid2'
    },
    id: 'myGrid2',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore2',

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
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'BP_CD',
            enableTextSelection: true,
            text: '고객사코드',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '고객사명',
        },
        {
            xtype: 'datecolumn',
            format: 'Y-m-d',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'DR_DT',
            enableTextSelection: true,
            text: '출고예정일',
            align: 'center',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'DR_QTY',
            enableTextSelection: true,
            text: '출고예정수량',
            align: 'right',
            width: 130,
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'DN_QTY',
            enableTextSelection: true,
            text: '출고수량',
            align: 'right',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true
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