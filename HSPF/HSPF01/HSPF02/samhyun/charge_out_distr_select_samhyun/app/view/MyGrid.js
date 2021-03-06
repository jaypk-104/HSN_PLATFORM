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

Ext.define('CHARGE_OUT_DISTR_SELECT_SAMHYUN.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'CHARGE_OUT_DISTR_SELECT_SAMHYUN.view.MyGridViewModel',
        'CHARGE_OUT_DISTR_SELECT_SAMHYUN.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
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
                disabled: true,
                hidden: true
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn',
                disabled: true,
                hidden: true
            },
            {
                xtype: 'textfield',
                id: 'G_TOTAL_AMOUNT',
                fieldLabel: '총금액',
                labelWidth: 50,
                width: 170,
                minWidth: 170,
                maxWidth: 170,
                labelAlign: 'right',
                readOnly: true,
                
            },
            {
                xtype: 'textfield',
                id: 'G_PAY_AMOUNT',
                fieldLabel: '지급금액',
                labelWidth: 60,
                width: 170,
                minWidth: 170,
                maxWidth: 170,
                labelAlign: 'right',
                readOnly: true,
                
            },
            {
                xtype: 'textfield',
                id: 'G_UNPAY_AMOUNT',
                fieldLabel: '미수금',
                labelWidth: 50,
                width: 170,
                minWidth: 170,
                maxWidth: 170,
                labelAlign: 'right',
                readOnly: true,
                
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'textfield',
                fieldLabel: 'LC참조번호',
                id: 'S_ERP_LC_NO',
                labelWidth: 80,
                width: 210,
                minWidth: 210,
                maxWidth: 210,
                labelAlign: 'right',
                readOnly: true,
                hidden: true
            },
            {
                xtype: 'textfield',
                fieldLabel: 'BL참조번호',
                id: 'S_ERP_BL_NO',
                labelWidth: 80,
                width: 210,
                minWidth: 210,
                maxWidth: 210,
                labelAlign: 'right',
                readOnly: true,
                hidden: true
            },
            {
                xtype: 'textfield',
                fieldLabel: 'BL 순번',
                id: 'S_ERP_BL_SEQ',
                labelWidth: 80,
                width: 210,
                minWidth: 210,
                maxWidth: 210,
                labelAlign: 'right',
                readOnly: true,
                hidden: true
            },
            {
                xtype: 'button',
                text: '지급처리',
                id: 'payProcessBtn',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
                hidden: true
            },
            {
                xtype: 'button',
                text: 'ERP전송',
                id: 'ERPSendBtn',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
                hidden: true
            },
            {
                xtype: 'button',
                text: 'ERP전송 취소',
                id: 'ERPSendCancelBtn',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
                hidden: true
            },
            {
                xtype: 'button',
                text: '플랫폼 전송',
                id: 'HSPFSendBtn',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
                hidden: true
            },
            {
                xtype: 'button',
                text: '플랫폼 전송 취소',
                id: 'HSPFSendCancelBtn',
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
        getRowClass: function(record, rowIndex, rowParams, store) {
            var SEND_YN = record.get('HSPF_YN');

            if(SEND_YN == 'Y') {
                return 'bg-green';
            }
        },
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
            width: 150,
            sortable: true,
            dataIndex: 'M_CHARGE_NO',
            enableTextSelection: true,
            text: '경비마스터번호'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'BASE_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '기준일',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 160,
            sortable: true,
            dataIndex: 'BL_DOC_NO',
            enableTextSelection: true,
            text: 'BL번호'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'REGION',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            sortable: true,
            dataIndex: 'REGION',
            enableTextSelection: true,
            text: '지역'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'LC_NO',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            sortable: true,
            dataIndex: 'LC_NO',
            enableTextSelection: true,
            text: 'LC참조번호'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'BL_NO',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'BL_NO',
            enableTextSelection: true,
            text: 'BL참조번호'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'BL_SEQ',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BL_SEQ',
            enableTextSelection: true,
            text: 'BL순번'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'TOTAL_AMT',
            enableTextSelection: true,
            text: '총금액',
            format: '0,000'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'TOTAL_CHARGE_AMT',
            enableTextSelection: true,
            text: '발생금액',
            format: '0,000'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'TOTAL_VAT_AMT',
            enableTextSelection: true,
            text: '부가가치세',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            id: 'ACCEPT_YN',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'ACCEPT_YN',
            enableTextSelection: true,
            text: '승인유무'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'PAY_YN',
            enableTextSelection: true,
            text: '지급유무'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'A_BP_CD',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'string',
            enableTextSelection: true,
            text: '대행업체'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'ERP_YN',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'ERP_YN',
            enableTextSelection: true,
            text: 'ERP전송유무'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'FILE_YN',
            enableTextSelection: true,
            text: '첨부파일유무'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'HSPF_YN',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'HSPF_YN',
            enableTextSelection: true,
            text: '플랫폼전송유무'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'GL_YN',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'GL_YN',
            enableTextSelection: true,
            text: '전표유무'
        }
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
    ]

});