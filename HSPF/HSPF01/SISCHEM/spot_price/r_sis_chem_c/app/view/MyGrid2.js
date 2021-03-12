/*
 * File: app/view/MyGrid2.js
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

Ext.define('R_SIS_CHEM_C.view.MyGrid2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid2',

    requires: [
        'R_SIS_CHEM_C.view.MyGrid2ViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    config: {
        tbar: [
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'A01_xlsxDown',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                cls: 'execl_btn',
                iconCls: 'grid-excel-btn',
                
            }
        ]
    },

    viewModel: {
        type: 'mygrid2'
    },
    flex: 1,
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'C01_Grid_Store',

    viewConfig: {
        enableTextSelection: true
    },
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
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'PDATE',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '날짜',
            format: 'Y-m-d'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'BRENT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: 'Brent(FOB)'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DUBAI',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: 'Dubai(FOB)'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'WTI',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: 'WTI(FOB)'
        }
    ],
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting'
        }
    ]

});