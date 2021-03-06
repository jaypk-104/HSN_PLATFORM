/*
 * File: app/view/MyGrid.js
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

Ext.define('M_PO_UPLOAD.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_PO_UPLOAD.view.MyGridViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.filters.Filters',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.plugin.Clipboard',
    ],

    config: {
        tbar: [
            {
                id: 'gridAddBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn'
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn'
            },
            {
                id: 'refreshBtn',
                xtype: 'button',
	            glyph: 'xf021@FontAwesome',
            	iconCls: 'grid-refresh-btn',
	            margin: '0 2 0 0'
            },
            {
                xtype: 'datefield',
                id: 'V_PO_DT',
                maxWidth: 210,
                minWidth: 210,
                width: 210,
                fieldLabel: '발주일',
                labelAlign: 'right',
                labelWidth: 80,
            	margin: '0 3 0 0',
                format: 'Y-m-d',
                submitFormat: 'Y-m-d',
                listeners : {
                    render : function(datefield) {
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
            	id: 'formDown',
            	cfg: {
            		type: 'excel07',
            		ext: 'xlsx'
            	},
            	iconCls: 'grid-excel-btn',
            	text: '업로드양식다운로드'
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
            sortable: true,
            dataIndex: 'TEMP_ID',
            enableTextSelection: true,
            text: '발주임시번호(hidden)',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            },
            hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        	width: 200,
        	sortable: true,
        	dataIndex: 'PO_DESC',
        	enableTextSelection: true,
        	text: '<span style=\'color:red\'>*</span>발주명',
        	editor: {
        		xtype: 'textfield',
        		allowBlank: false,
        		blankText: '필수 입력사항입니다.'
        	}
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'PO_DT',
            enableTextSelection: true,
            text: '발주일자',
            format: 'Y-m-d',
        },
        {
        	xtype: 'datecolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        	sortable: true,
        	dataIndex: 'DLVY_HOPE_DT',
        	enableTextSelection: true,
        	text: '<span style=\'color:red\'>*</span>납품요청일',
        	format: 'Y-m-d',
        	editor: {
                xtype: 'datefield',
                format: 'Y-m-d',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;color: #3367d6',
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '<span style=\'color:red\'>*</span>품목코드',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            },
            width: 120
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
            width: 130
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        	sortable: true,
        	dataIndex: 'HOPE_SL_CD',
        	enableTextSelection: true,
        	text: '<span style=\'color:red\'>*</span>입고창고',
        	editor: {
        		xtype: 'textfield',
        		allowBlank: false,
        		blankText: '필수 입력사항입니다.'
        	}
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'HOPE_SL_NM',
        	enableTextSelection: true,
        	text: '입고창고명',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            dataIndex: 'M_BP_CD',
            enableTextSelection: true,
            text: '<span style=\'color:red\'>*</span>발주처코드(공급사)',
            width: 130,
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'M_BP_NM',
            enableTextSelection: true,
            text: '발주처명',
            width: 130
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            dataIndex: 'PO_TYPE',
            enableTextSelection: true,
            text: '발주유형(코드)',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PO_TYPE_NM',
        	enableTextSelection: true,
        	text: '발주유형명',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            dataIndex: 'PAY_METH',
            enableTextSelection: true,
            text: '결제방법(코드)',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PAY_METH_NM',
        	enableTextSelection: true,
        	text: '결제방법',
        	width: 130
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'IN_TERMS',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            enableTextSelection: true,
            text: '가격조건(코드)',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
        	xtype: 'gridcolumn',
        	dataIndex: 'IN_TERMS_NM',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	enableTextSelection: true,
        	text: '가격조건',
        	width: 150
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            dataIndex: 'CUR',
            enableTextSelection: true,
            text: '화폐단위(코드)',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'CUR_NM',
        	enableTextSelection: true,
        	text: '화폐단위',
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
        	align: 'end',
        	dataIndex: 'XCH_RT',
        	enableTextSelection: true,
        	exportStyle: {
        		alignment: {
        			horizontal: 'Right'
        		}
        	},
        	text: '환율',
        	format: '0,000',
        	editor: {
        		xtype: 'numberfield',
        		allowBlank: false,
        		allowExponential: false,
        		minValue: 0
        	}
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'QTY',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '<span style=\'color:red\'>*</span>수량',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            },
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'PRC',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '단가',
            format: '0,000',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            },
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '금액',
            format: '0,000',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            },
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'LOC_AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '자국금액',
            format: '0,000',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            width: 110,
            sortable: true,
            dataIndex: 'VAT_TYPE',
            enableTextSelection: true,
            text: '부가세유형(코드)',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                blankText: '필수 입력사항입니다.'
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'VAT_TYPE_NM',
        	enableTextSelection: true,
        	text: '부가세유형',
        	width: 130
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'CHECK_YN',
            enableTextSelection: true,
            text: '오류유무',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ERROR_DESC',
            enableTextSelection: true,
            text: '오류내용',
            width: 150,
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'PO_NO',
            enableTextSelection: true,
            text: '발주번호',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'PO_SEQ',
            enableTextSelection: true,
            text: '발주순번',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'PO_CFM_YN',
            enableTextSelection: true,
            text: '확정유무',
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        	sortable: true,
        	dataIndex: 'SUPP_REMARK',
        	enableTextSelection: true,
        	text: '비고(TO공급사)',
        	width: 400,
        	editor: {
        		xtype: 'textfield',
        	}
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'REMARK',
        	enableTextSelection: true,
        	text: '비고(관리자용)',
        	width: 200,
        	editor: {
        		xtype: 'textfield',
        	}
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', 'V');
            },
            deselect: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', '');
            }
        }
    },
    viewConfig: {
      	enableTextSelection: true,
      	getRowClass: function(record, index) {
            var CHECK_YN = record.get('CHECK_YN');
            if(CHECK_YN == 'Y') {
            	return 'bg-red';
            }
        },
      },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'clipboard'
        },
        {
            ptype: 'cellediting',
            clicksToEdit: 2,
        }
    ]

});