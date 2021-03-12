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

Ext.define('inoutstatus_supp.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'inoutstatus_supp.view.MyGridViewModel',
        'inoutstatus_supp.view.MyGridViewController',
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
                
            }
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
            id: 'PLANT_NM',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'PLANT_NM',
            enableTextSelection: true,
            text: '공장구분'
        },
        {
            xtype: 'gridcolumn',
            id: 'MAST_PO_NO',
            maxWidth: 150,
            minWidth: 150,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            defaultWidth: 150,
            sortable: true,
            dataIndex: 'MAST_PO_NO',
            enableTextSelection: true,
            text: '발주번호'
        },
        {
            xtype: 'numbercolumn',
            id: 'MAST_PO_SEQ',
            maxWidth: 80,
            minWidth: 80,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            defaultWidth: 80,
            align: 'end',
            dataIndex: 'MAST_PO_SEQ',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '발주순번',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            id: 'PO_DT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'PO_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '발주일자',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            id: 'BP_CD',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BP_CD',
            enableTextSelection: true,
            text: '공급사코드'
        },
        {
            xtype: 'gridcolumn',
            id: 'BP_NM',
            maxWidth: 150,
            minWidth: 150,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            defaultWidth: 150,
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '공급사명'
        },
        {
            xtype: 'gridcolumn',
            id: 'ITEM_CD',
            maxWidth: 130,
            minWidth: 130,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            id: 'ITEM_NM',
            maxWidth: 150,
            minWidth: 150,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            defaultWidth: 150,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명'
        },
        {
            xtype: 'gridcolumn',
            id: 'SPEC',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'SPEC',
            enableTextSelection: true,
            text: '규격'
        },
        {
            xtype: 'numbercolumn',
            id: 'PO_QTY',
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
            text: '발주수량',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            id: 'DLVY_DT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLVY_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '납기요청일',
            format: 'Y-m-d'
        },
        {
            xtype: 'datecolumn',
            id: 'DLV_AVL_DT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLV_AVL_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '납품가능일',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            id: 'ASN_NO',
            maxWidth: 150,
            minWidth: 150,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            defaultWidth: 150,
            sortable: true,
            dataIndex: 'ASN_NO',
            enableTextSelection: true,
            text: 'ASN번호'
        },
        {
            xtype: 'numbercolumn',
            id: 'DLV_AVL_QTY',
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
            text: 'ASN발행수량',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            id: 'GR_DT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'GR_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '입고일자',
            format: 'Y-m-d'
        },
        {
            xtype: 'numbercolumn',
            id: 'GR_QTY',
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
            text: '입고수량',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            id: 'DN_DT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DN_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '출고일자',
            format: 'Y-m-d'
        },
        {
            xtype: 'numbercolumn',
            id: 'DN_QTY',
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
            text: '출고수량',
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