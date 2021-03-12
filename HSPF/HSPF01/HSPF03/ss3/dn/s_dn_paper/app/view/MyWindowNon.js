/*
 * File: app/view/MyWindowNon.js
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

Ext.define('S_DN_PAPER.view.MyWindowNon', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindownon',

    requires: [
        'S_DN_PAPER.view.MyWindowNonViewModel',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.column.Number',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'mywindownon'
    },
    height: 548,
    width: 889,
    title: '입금내역',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    dockedItems: [
        {
            xtype: 'container',
            dock: 'top',
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            width: 100,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'datefield',
                    flex: 1,
                    margins: '',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: '입금일',
                	labelAlign: 'right',
                    labelWidth: 80,
                    listeners : {
                        render : function(datefield) {
                        	var nows = new Date();
                        	nows.setDate(nows.getDate() -1);
                            datefield.setValue(nows);
                        }	
                    },
                    id: 'WN_IN_DT_FR',
                    format: 'Y-m-d'
                },
                {
                    xtype: 'datefield',
                    flex: 1,
                    margins: '',
                    maxWidth: 160,
                    minWidth: 160,
                    width: 160,
                    fieldLabel: '~',
                    labelWidth: 10,
                    listeners : {
                        render : function(datefield) {
                        	var nows = new Date();
                            datefield.setValue(nows);
                        }	
                    },
                    id: 'WN_IN_DT_TO',
                    format: 'Y-m-d'
                },
                {
                	xtype: 'textfield',
                	flex: 1,
                	id: 'WN_S_BP_CD',
                	maxWidth: 230,
                	minWidth: 230,
                	width: 230,
                	fieldLabel: '매출처',
                	labelAlign: 'right',
                	labelWidth: 80,
                	hidden: true
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'WN_S_BP_NM',
                    maxWidth: 400,
                    minWidth: 400,
                    width: 400,
                    fieldLabel: '매출처',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false
                },
               
            ]
        },
        {
            xtype: 'container',
            dock: 'top',
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            width: 100,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
				{
				    xtype: 'textfield',
				    flex: 1,
				    id: 'WN_PRINT_NO',
				    maxWidth: 230,
				    minWidth: 230,
				    width: 230,
				    fieldLabel: '출하요청서<br>관리번호',
				    labelWidth: 80,
				    editable: false,
                    labelAlign: 'right',
				},
				 {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                    flex: 1,
                    id: 'WN_S_DN_DT',
                    margin: '0 0 0 30',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: '출고일<br>(입금등록일)',
                    labelWidth: 80,
                    editable: false,
                    labelAlign: 'right',
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'WN_TOTAL_AMT',
                    maxWidth: 200,
                    minWidth: 200,
                    width: 200,
                    fieldLabel: '총 금액',
                    labelAlign: 'right',
                    labelWidth: 50,
                    editable: false,
                    fieldStyle: 'text-align: right',
                    margin: '0 0 0 30',
                },
                {
                	xtype: 'textfield',
                	flex: 1,
                	id: 'WN_JAN_AMT',
                	maxWidth: 230,
                	minWidth: 230,
                	width: 230,
                	fieldLabel: '입금미확인금액',
                	labelAlign: 'right',
                	labelWidth: 100,
                	editable: false,
                	fieldStyle: 'text-align: right',
                	margin: '0 0 0 30',
                },
               
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            header: false,
            store: 'WinStoreNon',
            id: 'nonGrid',
            
                tbar: [
                    {
                        id: 'gridAddBtn_W',
                        text: '',
                        margin: '0 3 0 0',
                        glyph: 'xf055@FontAwesome',
                        iconCls: 'grid-add-btn',
                        disabled: true
                    },
                    {
                        id: 'gridDelBtn_W',
                        text: '',
                        margin: '0 3 0 0',
                        glyph: 'xf056@FontAwesome',
                        iconCls: 'grid-del-btn',
                    },
                    {
                 	   id: 'bicDepositLoadBtn',
                 	   text: '',
                 	   margin: '0 3 0 0',
                 	   style: 'background-color: white; border: 0.5px solid #3367d6;',
                 	   cls: 'blue-btn',
                 	   text: '수금',
//         	           	disabled: true,
//                 	   hidden: true
                    },

                    {
                        xtype: 'container',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        glyph: 'xf1c3@FontAwesome',
                        id: 'xlsxDown_W',
                        cfg: {
                            type: 'excel07',
                            ext: 'xlsx'
                        },
                        iconCls: 'grid-excel-btn',
                    }
                ],
            
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'V_TYPE',
                    text: 'V_TYPE',
                    hidden: true
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'BP_CD',
                    text: '거래처코드'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'BP_NM',
                    text: '거래처명',
                    width: 200,
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'V_BANK_ACCT',
                    text: '가상계좌번호',
                    width: 200,
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    width: 100,
                    text: '입금일자',
                    dataIndex: 'TR_DATE',
                    align: 'center'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'SM_NM',
                    width: 100,
                    text: '입금시간',
                    dataIndex: 'TR_TIME',
                    align: 'center'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '입금액',
                    format: '0,000.',
                    dataIndex: 'TR_AMT',
            		summaryType : 'sum',
            		summaryRenderer : function(value, summaryData, dataIndex) {
            			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
            		},
                    width: 110,
                },
                {
                	xtype: 'numbercolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	align: 'end',
                	text: '미확인금액',
                	format: '0,000.',
                	dataIndex: 'REMAIN_AMT',
                	summaryType : 'sum',
                	summaryRenderer : function(value, summaryData, dataIndex) {
                		return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
                	},
                	width: 110,
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    text: 'TR_SEQ(hid)',
                    dataIndex: 'TR_SEQ',
                    hidden: true
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'PRINT_NO',
                    width: 150,
                    text: '출하요청서관리번호',
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6; ',
                	width: 300,
                	text: '비고',
                	dataIndex: 'REMARK',
                	editor: {
                		xtype: 'textfield'
                	}
                },
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
            plugins: [
                      {
                          ptype: 'gridexporter'
                      },
                      {
                          ptype: 'cellediting'
                      }
                  ],
              	features : [ {
              		ftype : 'summary'
              	} ],
                  viewConfig: {
                  	enableTextSelection: true,
                	getRowClass: function(record, index) {
                        var PRINT_NO = record.get('PRINT_NO'); 
                        if( Ext.getCmp('WN_PRINT_NO').getValue() == PRINT_NO) {
                        	return 'bg-green'
                        }
                    },
                },
        },
        {
            xtype: 'container',
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
                {
                	xtype: 'button',
                	flex: 1,
                	id: 'w_selBtn_non',
                	maxWidth: 100,
                	minWidth: 100,
                	width: 100,
                	text: '조회',
                	margin: '0 3 0 0'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    id: 'w_regBtn_non',
                    maxWidth: 100,
                    minWidth: 100,
                    width: 100,
                    text: '입금반영'
                }
            ]
        }
    ]

});