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

Ext.define('inoutStauts.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'inoutStauts.view.MyGridViewModel',
        'inoutStauts.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    config: {
        tbar: [
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'xlsxDown',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                iconCls: 'grid-excel-btn',
                
            },
            {
                xtype: 'checkboxfield',
                boxLabel: 'HSAA',
                id: 'chk_AA',
                margin: '0 10 0 0',
                value: true
            },
            {
                xtype: 'checkboxfield',
                boxLabel: 'HSAU',
                id: 'chk_AU',
                margin: '0 10 0 0',
                value: true
            },
            {
                xtype: 'checkboxfield',
                boxLabel: 'HSAM',
                id: 'chk_AM',
                margin: '0 10 0 0',
                value: true
            },
            {
            	xtype: 'checkboxfield',
            	boxLabel: 'HSTN',
            	id: 'chk_TN',
            	margin: '0 10 0 0',
            	value: true
            },
        ]
    },

    controller: 'mygrid',
    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore',

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
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'PLANT_NM',
            enableTextSelection: true,
            text: '????????????'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            sortable: true,
            dataIndex: 'CUST_PO_NO',
            enableTextSelection: true,
            text: '????????????<BR>????????????'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            defaultWidth: 80,
            align: 'center',
            dataIndex: 'CUST_PO_SEQ',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '????????????<BR>????????????',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            defaultWidth: 150,
            sortable: true,
            dataIndex: 'MAST_PO_NO',
            enableTextSelection: true,
            text: '????????????'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            defaultWidth: 80,
            align: 'center',
            dataIndex: 'MAST_PO_SEQ',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '????????????',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'PO_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '????????????',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BP_CD',
            enableTextSelection: true,
            text: '???????????????'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '????????????'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            defaultWidth: 120,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '????????????'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '?????????'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'SPEC',
            enableTextSelection: true,
            text: '??????'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'PO_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '????????????',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLVY_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '???????????????',
            format: 'Y-m-d'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLV_AVL_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '???????????????',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'ASN_NO',
            enableTextSelection: true,
            text: 'ASN??????'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'DLV_AVL_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: 'ASN????????????',
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
            text: '????????????',
            format: 'Y-m-d'
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
            text: '????????????',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DN_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '????????????',
            format: 'Y-m-d'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'DN_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '????????????',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'CONT_NO',
            enableTextSelection: true,
            text: '??????????????????'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            defaultWidth: 100,
            sortable: true,
            dataIndex: 'CONT_SIZE',
            enableTextSelection: true,
            text: '??????(????????????)'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'CONT_SEAL_NO',
            enableTextSelection: true,
            text: 'SEAL NO(????????????)'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'CTN_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '????????????<br>????????????',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'INV_NO',
            enableTextSelection: true,
            text: '??????????????????'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'INV_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '??????????????????',
            format: '0,000'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'BL_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: 'B/L??????',
            format: '0,000'
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
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
            ptype: 'cellediting',
            clicksToEdit: 1
        }
    ]

});