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

Ext.define('LOGIS_BILL.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'LOGIS_BILL.view.MyGridViewModel',
        'LOGIS_BILL.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.filters.filter.List',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.filters.Filters'
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
                xtype: 'checkboxfield',
                margin: '0 0 0 20',
                flex: 1,
                boxLabel: 'ERP 전송 완료 숨기기',
                checked: true,
                id: 'V_HIDE_ERP',
                
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'textfield',
                id: 'S_ERP_LC_NO2',
                maxWidth: 250,
                minWidth: 250,
                width: 250,
                fieldLabel: 'LC참조번호',
                labelAlign: 'right',
                readOnly: true
            },
            {
                xtype: 'textfield',
                id: 'S_ERP_BL_NO2',
                maxWidth: 250,
                minWidth: 250,
                width: 250,
                fieldLabel: 'BL참조번호',
                labelAlign: 'right',
                readOnly: true
            },
            {
                xtype: 'textfield',
                id: 'S_ERP_BL_SEQ',
                maxWidth: 200,
                minWidth: 200,
                width: 200,
                fieldLabel: 'BL순번',
                labelAlign: 'right',
                readOnly: true
            },
            {
                xtype: 'button',
                id: 'ERPBtn',
                text: 'ERP 전송',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
                
            },
            {
                xtype: 'button',
                id: 'ERPCancelBtn',
                text: 'ERP 전송 취소',
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
        ],
        fbar: [
        	{
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'button',
                text: '부대경비',
                id: 'moveToChBtn',
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
        getRowClass: function(record, rowIndex, rowParams, store) {
            var ESEND_YN = record.get('SEND_YN');

            if(ESEND_YN == 'Y') {
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
            dataIndex: 'V_TYPE',
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            dataIndex: 'XML_MSG_ID',
            text: '문서관리번호'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'string',
            enableTextSelection: true,
            text: '구분'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 220,
            sortable: true,
            dataIndex: 'GUK_NO',
            enableTextSelection: true,
            text: '국세청승인번호'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'center',
            dataIndex: 'PUBLISHING_LOCATION',
            enableTextSelection: true,
            text: '발행위치'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            dataIndex: 'string',
            enableTextSelection: true,
            text: '업무상태'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '거래처명',
            filter: {
                type: 'list'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'SERIAL_NUMBER',
            enableTextSelection: true,
            text: '일련번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'LC_NO2',
            enableTextSelection: true,
            text: 'LC참조번호',
            filter: {
                type: 'list'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'REF_NO2',
            enableTextSelection: true,
            text: 'LC번호',
            filter: {
                type: 'list'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'BL_NO2',
            enableTextSelection: true,
            text: 'BL참조번호',
            filter: {
                type: 'list'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'REF_NO',
            enableTextSelection: true,
            text: 'BL번호',
            filter: {
                type: 'list'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'center',
            dataIndex: 'BL_YN',
            enableTextSelection: true,
            text: 'BL존재유무'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'center',
            dataIndex: 'BL_SEQ',
            enableTextSelection: true,
            text: 'BL순번'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            dataIndex: 'REC_USR',
            enableTextSelection: true,
            text: '수신자',
            filter: {
                type: 'list'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'center',
            dataIndex: 'ISSUE_CLASSIFICATION',
            enableTextSelection: true,
            text: '발행구분'
        },
        {
            xtype: 'datecolumn',
            hidden: true,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'date',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '작성일자',
            format: 'Y-m-d'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'ISSUE_DATE',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '발행일자',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'center',
            dataIndex: 'LINKED_YN',
            enableTextSelection: true,
            text: '연계여부'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'end',
            dataIndex: 'SUPPLY_AMOUNT',
            enableTextSelection: true,
            text: '공급가액',
            format: '0,000'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            align: 'end',
            dataIndex: 'VAT_AMOUNT',
            enableTextSelection: true,
            text: '세액',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'center',
            dataIndex: 'SEND_YN',
            enableTextSelection: true,
            text: 'ERP 전송 여부'
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
            ptype: 'cellediting'
        },
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'gridfilters'
        }
    ]

});