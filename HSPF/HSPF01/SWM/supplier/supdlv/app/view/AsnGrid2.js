/*
 * File: app/view/AsnGrid2.js
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

Ext.define('SupDlvMgm.view.AsnGrid2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.asngrid2',

    requires: [
        'SupDlvMgm.view.MyGridViewModel3',
        'SupDlvMgm.view.MyGridViewController3',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Clipboard'
    ],

    config: {
        tbar: [
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'xlsxDown2',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                iconCls: 'grid-excel-btn',
                
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'label',
                margin: '0 10 0 0',
                style: 'font-size: 12px; text-align: center; font-weight: bold;',
                text: '(로트정보는 필수입력 값입니다. 유효일이 없으면 2999-12-31로 설정바랍니다)'
            },
            {
                xtype: 'button',
                text: '로트정보 입력방법',
                id: 'howlotBtn',
                margin: '0 3 0 0',
                
            },
            {
                xtype: 'button',
                id: 'GsaveBtn',
                margin: '0 3 0 0',
                maxWidth: 100,
                minWidth: 80,
                width: 100,
                glyph: 'xf0c7@FontAwesome',
                text: '저장'
            }
        ]
    },

    controller: 'asngrid2',
    viewModel: {
        type: 'asngrid2'
    },
    id: 'grid_dtl',
    cls: 'grid_dtl',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'DtlStore',

    viewConfig: {
        height: 935,
        enableTextSelection: true
    },
    columns: [
        {
            xtype: 'rownumberer',
            hidden: true,
            width: 40,
            menuDisabled: true
        },
        {
            xtype: 'gridcolumn',
            disabled: true,
            hidden: true,
            menuDisabled: true,
            text: 'V_TYPE'
        },
        {
            xtype: 'numbercolumn',
            hidden: true,
            id: 'W1_ASN_NO',
            maxWidth: 150,
            minWidth: 150,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            align: 'end',
            dataIndex: 'ASN_NO',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            menuDisabled: true,
            text: 'ANS번호',
            format: '0,000'
        },
        {
            xtype: 'numbercolumn',
            id: 'W1_ASN_SEQ',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            align: 'end',
            dataIndex: 'ASN_SEQ',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            menuDisabled: true,
            text: 'ANS순번',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            id: 'W1_ITEM_CD',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            defaultWidth: 130,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            menuDisabled: true,
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            id: 'W1_ITEM_NM',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            menuDisabled: true,
            text: '품목명'
        },
        {
            xtype: 'gridcolumn',
            id: 'W_ASN_STS2',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            menuDisabled: true,
            text: '팔레트',
            columns: [
                {
                    xtype: 'numbercolumn',
                    id: 'PAL_BC_SEQ',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 80,
                    defaultWidth: 80,
                    align: 'end',
                    dataIndex: 'PAL_BC_SEQ',
                    enableTextSelection: true,
                    exportStyle: {
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    menuDisabled: true,
                    text: '순번',
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'PAL_BC_NO',
                    maxWidth: 200,
                    minWidth: 200,
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 200,
                    sortable: true,
                    dataIndex: 'PAL_BC_NO',
                    enableTextSelection: true,
                    menuDisabled: true,
                    text: '팔레트 바코드번호'
                },
                {
                    xtype: 'numbercolumn',
                    id: 'PAL_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'PAL_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    menuDisabled: true,
                    text: '납품수량',
                    format: '0,000'
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            id: 'W_ASN_STS3',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            menuDisabled: true,
            text: '박스',
            columns: [
                {
                    xtype: 'numbercolumn',
                    id: 'BOX_BC_SEQ',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 80,
                    defaultWidth: 80,
                    align: 'end',
                    dataIndex: 'BOX_BC_SEQ',
                    enableTextSelection: true,
                    exportStyle: {
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    menuDisabled: true,
                    text: '순번',
                    format: '0,000'
                },
                {
                    xtype: 'gridcolumn',
                    id: 'BOX_BC_NO',
                    maxWidth: 200,
                    minWidth: 200,
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 200,
                    sortable: true,
                    dataIndex: 'BOX_BC_NO',
                    enableTextSelection: true,
                    menuDisabled: true,
                    text: '박스 바코드번호'
                },
                {
                    xtype: 'numbercolumn',
                    id: 'BOX_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'BOX_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    menuDisabled: true,
                    text: '납품수량',
                    format: '0,000',
                    editor: {
                        xtype: 'numberfield',
                        allowBlank: false
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            id: 'W_ASN_STS4',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            menuDisabled: true,
            text: '로트',
            columns: [
                {
                    xtype: 'gridcolumn',
                    id: 'LOT_NO',
                    maxWidth: 200,
                    minWidth: 200,
                    style: 'font-size: 12px; text-align: center; font-weight: bold;background-color: #F8F8F8 !important;color:#ff6633',
                    width: 200,
                    dataIndex: 'LOT_NO',
                    enableTextSelection: true,
                    menuDisabled: true,
                    text: '로트번호',
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    xtype: 'datecolumn',
                    id: 'MAKE_DT',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;background-color: #F8F8F8 !important;color:#ff6633',
                    width: 100,
                    align: 'center',
                    dataIndex: 'MAKE_DT',
                    enableTextSelection: true,
//                    exportStyle: {
//                        format: 'Short Date'
//                    },
                    menuDisabled: true,
                    text: '제조일',
                    format: 'Y-m-d',
                    altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                },
                {
                    xtype: 'datecolumn',
                    id: 'VALID_DT',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;background-color: #F8F8F8 !important;color:#ff6633',
                    width: 100,
                    align: 'center',
                    dataIndex: 'VALID_DT',
                    enableTextSelection: true,
//                    exportStyle: {
//                        format: 'Short Date'
//                    },
                    menuDisabled: true,
                    text: '유효일',
                    format: 'Y-m-d',
                    altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                }
            ]
        }
    ],
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting'
        },
        {
            ptype: 'clipboard'
        }
    ],
    selModel: {
  	  type: 'spreadsheet',
        columnSelect : true
    	},
//    listeners: {
//        beforecontainerclick: 'onGridpanelBeforeContainerClick',
//        beforecellclick: 'onGridpanelBeforeCellClick'
//    }

});