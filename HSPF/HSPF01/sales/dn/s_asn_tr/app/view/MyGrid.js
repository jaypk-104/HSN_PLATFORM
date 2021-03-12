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

Ext.define('S_ASN_TR.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'S_ASN_TR.view.MyGridViewModel',
        'S_ASN_TR.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
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
            	id: 'ifSendBtn',
            	text: '인터페이스 전송',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            	cls: 'blue-btn',
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

    controller: 'mygrid',
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
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'S_BP_NM',
            enableTextSelection: true,
            text: '해외법인',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'BL_NO',
            enableTextSelection: true,
            text: 'B/L번호',
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLVY_HOPE_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '납품요청일',
            format: 'Y-m-d',
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
            text: '출고일',
            format: 'Y-m-d',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            sortable: true,
            dataIndex: 'M_BP_NM',
            enableTextSelection: true,
            text: '공급사',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BP_ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
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
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'UNIT',
            enableTextSelection: true,
            text: '단위',
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
            text: '출고수량',
            format: '0,000',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'SUPP_REMARK',
            enableTextSelection: true,
            text: '비고(공급사)',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'REMARK',
            enableTextSelection: true,
            text: '비고(관리자)',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'IF_SRM_YN',
            enableTextSelection: true,
            text: 'I/F유무',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 145,
            sortable: true,
            dataIndex: 'DN_NO',
            enableTextSelection: true,
            text: '출고번호',
        },
    ],
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
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
            ptype: 'cellediting'
        }
    ],
    viewConfig: {
      	enableTextSelection: true,
      	getRowClass: function(record, index) {
            var IF_YN = record.get('IF_SRM_YN');
            if(IF_YN == 'Y') {
            	return 'bg-green'
            }
        },
    },

});