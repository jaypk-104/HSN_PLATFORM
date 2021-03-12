/*
 * File: app/view/MyPanel2.js
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

Ext.define('S_DN_PAPER.view.MyPanel2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel2',

    requires: [
        'S_DN_PAPER.view.MyPanel2ViewModel',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'mypanel2'
    },
    layout: 'fit',
    title: 'TAB 3',

    items: [
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            flex: 1,
                            style: 'border: 1px solid lightgray; padding: 5px;',
                            header: false,
                            title: 'My Grid Panel',
                            store: 'MyStore3',
                            id: 'myGrid3',
                            tbar: [
                                    {
                                        id: 'gridDelBtn2',
                                        text: '',
                                        margin: '0 3 0 0',
                                        glyph: 'xf056@FontAwesome',
                                        iconCls: 'grid-del-btn',
                                    },
                                    {
                                        xtype: 'container',
                                        flex: 1
                                    },
                                    {
                                      xtype: 'button',
                                      glyph: 'xf1c3@FontAwesome',
                                      id: 'xlsxDown1',
                                      cfg: {
                                          type: 'excel07',
                                          ext: 'xlsx'
                                      },
                                      iconCls: 'grid-excel-btn',
                                      margin: '0 3 0 0'
                            	  }
                                ],
                            columns: [
                                {
                                    xtype: 'rownumberer',
                                    width: 40
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 90,
                                    dataIndex: 'V_TYPE',
                                    text: 'V_TYPE',
                                    hidden: true
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 91,
                                    dataIndex: 'REQ_CFM_YN',
                                    text: '요청서승인',
                                    locked: true,
//                                    hidden: true,
                                    align: 'center'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 90,
                                    dataIndex: 'CFM_YN',
                                    text: '출고확정',
                                    align: 'center',
                                    locked: true
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 87,
                                    dataIndex: 'string',
                                    text: '입고유무',
                                    hidden: true,
                                    locked: true
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 114,
                                    dataIndex: 'DN_REQ_NO',
                                    text: '출하요청번호',
                                    locked: true
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 150,
                                    dataIndex: 'BL_DOC_NO',
                                    text: 'B/L번호',
                                    locked: true,
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 114,
                                    dataIndex: 'CONT_NO',
                                    text: 'CONT 번호'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 114,
                                    dataIndex: 'ITEM_CD',
                                    text: '품번'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 130,
                                    dataIndex: 'ITEM_NM',
                                    text: '품명'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 114,
                                    dataIndex: 'BRAND',
                                    text: 'BRAND'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'BOX_QTY',
                                    text: 'BOX수량',
                                    format: '0,000.'
                                },
                                {
                                	xtype: 'numbercolumn',
                                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                	align: 'end',
                                	dataIndex: 'RM_BOX_QTY',
                                	text: 'BOX잔량',
                                	format: '0,000.'
                                },
                                {
                                	xtype: 'numbercolumn',
                                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                	align: 'end',
                                	dataIndex: 'DN_BOX_QTY',
                                	text: '출고BOX수량',
                                	format: '0,000.'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'BL_QTY',
                                    text: '출고B/L중량'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px;  font-weight: bold; color: #3367d6; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'DN_REAL_QTY',
                                    text: '계근중량',
                                    format: '0,000.00',
                                    editor: {
                                    	xtype: 'numberfield'
                                    }
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'COG_PRC',
                                    text: '매입단가'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'COG_AMT',
                                    text: '매입원가',
                                    format: '0,000.'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'MARGIN_AMT',
                                    text: '마진',
                                    format: '0,000.'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'INTER_AMT',
                                    text: '이자',
                                    format: '0,000.'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'DN_PRC',
                                    text: '매출단가'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'DN_AMT',
                                    text: 'B/L매출금액',
                                    format: '0,000.',
                                    summaryType: 'sum',
                                    summaryRenderer: function(value, summaryData, dataIndex) {
                                        return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                                    },
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'DN_FL_AMT',
                                    text: '계근매출금액',
                                    format: '0,000.',
                                    summaryType: 'sum',
                                    summaryRenderer: function(value, summaryData, dataIndex) {
                                        return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                                    },
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold; ',
                                    align: 'end',
                                    dataIndex: 'ADD_DN_PRC',
                                    text: '추가매출단가',
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold; ',
                                    align: 'end',
                                    dataIndex: 'ADD_DN_AMT',
                                    text: '추가매출금액',
                                    format: '0,000.',
                                    summaryType: 'sum',
                                    summaryRenderer: function(value, summaryData, dataIndex) {
                                        return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                                    },
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold; ',
                                    width: 150,
                                    dataIndex: 'REASON',
                                    text: '사유',
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: '',
                                    text: '최종매출금액',
                                    format: '0,000.',
                                	dataIndex: 'DN_FIN_AMT',
                                    summaryType: 'sum',
                                    summaryRenderer: function(value, summaryData, dataIndex) {
                                        return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                                    },
                                },
                                {
                                	xtype: 'numbercolumn',
                                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                	align: 'end',
                                	dataIndex: '',
                                	text: '최종매출단가',
                                	format: '0,000.00',
                                	dataIndex: 'DN_FIN_PRC',
                                },
                                {
                                    xtype: 'datecolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    text: '입고확인일',
                                    dataIndex: 'IN_DT',
                                    format:'Y-m-d'
                                },
                                {
                                    xtype: 'datecolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    text: '출고일',
                                    dataIndex: 'DN_DT',
                                    format:'Y-m-d'
                                },
                                {
                                    xtype: 'datecolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    text: '수금예정일',
                                    dataIndex: 'SALE_ISSUE_DT',
                                    format:'Y-m-d',
                                    editor : {
                            			xtype : 'datefield',
                            			format : 'Y-m-d'
                            		},
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 114,
                                    dataIndex: 'BP_CD',
                                    text: '매출처',
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 200,
                                    dataIndex: 'BP_NM',
                                    text: '매출처명'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'IN_DAY',
                                    text: '보유일',
                                    format: '0,000.'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: '',
                                    text: '기간이자1',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_PER_DAY1',
                                            text: '기준일',
                                            format: '0,000.'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_PER_RT1',
                                            text: '율'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_PER_AMT1',
                                            text: '금액',
                                            format: '0,000.'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: '',
                                    text: '기간이자2',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_PER_DAY2',
                                            text: '기준일',
                                            format: '0,000.'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_PER_RT2',
                                            text: '율'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_PER_AMT2',
                                            text: '금액',
                                            format: '0,000.'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: '',
                                    text: '연체이자1',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_OV_DAY1',
                                            text: '기준일',
                                            format: '0,000.'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_OV_RT1',
                                            text: '율'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_OV_AMT1',
                                            text: '금액',
                                            format: '0,000.'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: '',
                                    text: '연체이자2',
                                    columns: [
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_OV_DAY2',
                                            text: '기준일',
                                            format: '0,000.'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_OV_RT2',
                                            text: '율'
                                        },
                                        {
                                            xtype: 'numbercolumn',
                                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                            align: 'end',
                                            dataIndex: 'DN_OV_AMT2',
                                            text: '금액',
                                            format: '0,000.'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'DN_NO',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 150,
                                    text: '출고번호'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'DN_SEQ',
                                    text: '순번',
                                    format: '0,000.'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 114,
                                    dataIndex: 'BILL_NO',
                                    text: '매출번호'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'BILL_SEQ',
                                    text: '순번',
                                    format: '0,000.'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 150,
                                    dataIndex: 'CC_NO',
                                    text: '통관번호',
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    dataIndex: 'CC_SEQ',
                                    text: '순번',
                                    format: '0,000.'
                                },
                                
                            ],
                            viewConfig: {
                            	enableTextSelection: true,
                            },
                            selModel: {
                                selType: 'checkboxmodel',
                                checkOnly: true,
                                listeners: {
                                	select: function(rowmodel, record, index, eOpts) {
                            			record.set('V_TYPE', 'V');
                                    },
                                    deselect: function(rowmodel, record, index, eOpts) {
                            			record.set('V_TYPE', '');
                                    }
                                }
                            },
                            plugins: [
                                {
                                    ptype: 'gridexporter'
                                },
                                {
                                    ptype: 'cellediting',
                                    listeners: {
                                    	edit: function(editor, context, eOpts) {
                                    		var BL_QTY = Number(context.record.data.BL_QTY);
                                    		var QTY;
                                    		var selModel= Ext.getCmp('myGrid3').getSelectionModel()
                                    		
                                    		if(context.record.data.DN_REAL_QTY == undefined) {
                                    			QTY = BL_QTY;
                                    		} else {
                                    			QTY = Number(context.record.data.DN_REAL_QTY);
                                    		}
                                    		
                                    		if(context.column.dataIndex == 'DN_REAL_QTY') {
                                		    	  selModel.select(context.record, true);
                                		    	  context.record.set('ADD_DN_AMT', context.record.get('DN_REAL_QTY') * context.record.get('ADD_DN_PRC') );
                                    		}
                                    	},
                                    	beforeedit : function(e, editor) {
                            				var rec = editor.record.data;
                            				var field = editor.field;

                            				if (field == 'SALE_ISSUE_DT' && (!!!rec.REASON || rec.REASON.indexOf('여신') < 0)) {
                            					return false;
                            				}

                            				return true;
                            			},
                                    }
                                }
                            ],
                            features: [
                                       {
                                    	   ftype: 'summary',
                                           dock: 'bottom'
                                       }
                                    ],
                        }
                    ]
                }
            ]
        }
    ]

});