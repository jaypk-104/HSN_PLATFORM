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

Ext.define('PoMgmSurvey.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'PoMgmSurvey.view.MyGridViewModel',
        'PoMgmSurvey.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    config: {
        tbar: [
            {
                xtype: 'datefield',
                id: 'u_po_dt',
                maxWidth: 250,
                minWidth: 250,
                width: 250,
                fieldLabel: '본사발주일자',
                fieldStyle: 'font-size: 12px; background-color:#faf4c0',
                name: 'search_field',
                altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                format: 'Y-m-d',
                /*listeners: {render: function(component, eOpts) {
                    var nows = new Date();
                    nows.setDate(nows.getDate() - 30);
                    component.setValue(nows);
                                    },
                
            },
            */listeners: {
                render: function(datefield) {
                                   var nows = new Date();
                                    datefield.setValue(nows);
                                }
            },
            
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

    controller: 'mygrid',
    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore',
    defaultListenerScope: true,

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
            id: 'V_TYPE',
            dataIndex: 'V_TYPE',
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'dummy',
            dataIndex: 'dummy',
            text: 'dummy'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            id: 'ASN_NO',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 140,
            defaultWidth: 140,
            sortable: true,
            dataIndex: 'ASN_NO',
            enableTextSelection: true,
            text: 'ASN유무'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            defaultWidth: 80,
            sortable: true,
            align: 'center',
            dataIndex: 'PO_CFM',
            enableTextSelection: true,
            text: '발주<br>확정유무'
        },
        {
            xtype: 'datecolumn',
            id: 'CUST_PO_DT2',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 110,
            align: 'center',
            dataIndex: 'CUST_PO_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '고객사발주일자',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            id: 'CUST_PO_NO',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 110,
            sortable: true,
            dataIndex: 'CUST_PO_NO',
            enableTextSelection: true,
            text: '고객사발주번호'
        },
        {
            xtype: 'numbercolumn',
            id: 'CUST_PO_SEQ',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 80,
            defaultWidth: 80,
            align: 'end',
            dataIndex: 'CUST_PO_SEQ',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '고객사<br>발주순번',
            format: '0,000'
        },
        {
            xtype: 'numbercolumn',
            id: 'CUST_PO_QTY',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 110,
            align: 'end',
            dataIndex: 'CUST_PO_QTY',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '고객사발주수량',
            format: '0,000'
        },
        {
            xtype: 'datecolumn',
            id: 'CUST_DLVY_DT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            align: 'center',
            dataIndex: 'CUST_DLVY_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '고객사납기요청일',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            id: 'PO_NO',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 140,
            defaultWidth: 140,
            sortable: true,
            dataIndex: 'PO_NO',
            enableTextSelection: true,
            text: '본사발주요청번호'
        },
        {
            xtype: 'gridcolumn',
            id: 'PO_SEQ',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            align: 'end',
            dataIndex: 'PO_SEQ',
            enableTextSelection: true,
            text: '본사<br>발주요청순번'
        },
        {
            xtype: 'gridcolumn',
            id: 'ITEM_CD',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            defaultWidth: 120,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            id: 'ITEM_NM',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
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
            xtype: 'gridcolumn',
            id: 'BP_CD',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BP_CD',
            enableTextSelection: true,
            text: '공급처코드',
            editor: {
                xtype: 'textfield',
                style: 'text-align:left',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
            xtype: 'gridcolumn',
            id: 'BP_NM',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '공급처명'
        },
        {
            xtype: 'gridcolumn',
            id: 'CUR',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'CUR',
            enableTextSelection: true,
            text: '화폐단위'
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
            xtype: 'numbercolumn',
            id: 'PO_AMT',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'PO_AMT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '발주금액',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '1st',
            columns: [
                {
                    xtype: 'datecolumn',
                    id: 'FIR_DLV',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'center',
                    dataIndex: 'FIR_DLV',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Short Date'
                    },
                    text: '납기요청일자',
                    format: 'Y-m-d',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    id: 'FIR_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'FIR_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Currency',
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    text: '수량',
                    format: '0,000',
                    editor: {
                        xtype: 'numberfield',
                        id: 'txtFIR_QTY',
                        style: 'text-align:right',
                        allowBlank: false,
                        allowExponential: false,
                        minValue: 0
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '2nd',
            columns: [
                {
                    xtype: 'datecolumn',
                    id: 'SEC_DLV',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'center',
                    dataIndex: 'SEC_DLV',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Short Date'
                    },
                    text: '납기요청일자',
                    format: 'Y-m-d',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        allowBlank: false,
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    id: 'SEC_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'SEC_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Currency',
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    text: '수량',
                    format: '0,000',
                    editor: {
                        xtype: 'numberfield',
                        style: 'text-align:right',
                        allowBlank: false,
                        allowExponential: false,
                        minValue: 0
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '3rd',
            columns: [
                {
                    xtype: 'datecolumn',
                    id: 'THR_DLV',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'center',
                    dataIndex: 'THR_DLV',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Short Date'
                    },
                    text: '납기요청일자',
                    format: 'Y-m-d',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    id: 'THR_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'THR_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Currency',
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    text: '수량',
                    format: '0,000',
                    editor: {
                        xtype: 'numberfield',
                        style: 'text-align:right',
                        allowBlank: false,
                        allowExponential: false,
                        minValue: 0
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '4th',
            columns: [
                {
                    xtype: 'datecolumn',
                    id: 'FOR_DLV',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'center',
                    dataIndex: 'FOR_DLV',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Short Date'
                    },
                    text: '납기요청일자',
                    format: 'Y-m-d',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    id: 'FOR_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'FOR_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Currency',
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    text: '수량',
                    format: '0,000',
                    editor: {
                        xtype: 'numberfield',
                        style: 'text-align:right',
                        allowBlank: false,
                        allowExponential: false,
                        minValue: 0
                    }
                }
            ]
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '5th',
            columns: [
                {
                    xtype: 'datecolumn',
                    id: 'FIF_DLV',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'center',
                    dataIndex: 'FIF_DLV',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Short Date'
                    },
                    text: '납기요청일자',
                    format: 'Y-m-d',
                    editor: {
                        xtype: 'datefield',
                        style: 'text-align:center',
                        altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                        format: 'Y-m-d'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    id: 'FIF_QTY',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    align: 'end',
                    dataIndex: 'FIF_QTY',
                    enableTextSelection: true,
                    exportStyle: {
                        format: 'Currency',
                        alignment: {
                            horizontal: 'Right'
                        }
                    },
                    text: '수량',
                    format: '0,000',
                    editor: {
                        xtype: 'numberfield',
                        style: 'text-align:right',
                        allowBlank: false,
                        allowExponential: false,
                        minValue: 0
                    }
                }
            ]
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
            select: {
                fn: 'onCheckboxModelSelect',
                scope: 'controller'
            },
            deselect: {
                fn: 'onCheckboxModelDeselect',
                scope: 'controller'
            }
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
    ],
    listeners: {
        render: 'onTodayRender'
    },

    onTodayRender: function(component, eOpts) {
        	var nows = new Date();
        		nows.setDate(nows.getDate());
        		//component.setValue(nows);
        Ext.getCmp('u_po_dt').setValue(nows);

    }

});