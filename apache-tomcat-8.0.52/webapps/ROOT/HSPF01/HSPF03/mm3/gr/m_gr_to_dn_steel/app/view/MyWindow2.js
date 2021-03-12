/*
 * File: app/view/MyWindow1.js
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

Ext.define('M_GR_TO_DN_STEEL.view.MyWindow2', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow2',

    requires: [
        'M_GR_TO_DN_STEEL.view.MyWindowViewModel2',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
    ],
    config: {
        tbar: [
               {
                   xtype: 'container',
                   flex: 1
               },
               {
                   xtype: 'button',
                   glyph: 'xf1c3@FontAwesome',
                   id: 'xlsxDownW',
                   cfg: {
                       type: 'excel07',
                       ext: 'xlsx'
                   },
                   iconCls: 'grid-excel-btn',
               }
           ]
    },

    viewModel: {
        type: 'mywindow2'
    },
    height: 548,
    width: 889,
    title: '경비수정',
    modal: true,

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
                    xtype: 'textfield',
                    flex: 1,
                    id: 'W_LC_DOC_NO',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: 'L/C번호',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'W_BL_DOC_NO',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: 'B/L번호',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'W_BOX_QTY',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: '박스수량',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false,
                    fieldStyle: 'text-align: right'
                }
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
                    id: 'W_ITEM_CD',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    labelAlign: 'right',
                    fieldLabel: '품목코드',
                    labelWidth: 80,
                    editable: false
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'W_ITEM_NM',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: '품명',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'W_BL_QTY',
                    maxWidth: 230,
                    minWidth: 230,
                    width: 230,
                    fieldLabel: 'B/L중량',
                    labelAlign: 'right',
                    labelWidth: 80,
                    editable: false,
                    fieldStyle: 'text-align: right'
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            id: 'chargeGrid',
            store: 'ChargeStore',
            flex: 1,
            header: false,
            style: 'border: 1px solid #659DDC; padding: 5px;',
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'V_TYPE',
                	text: 'V_TYPE',
                	width: 80,
                	hidden: true
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'TYPE',
                    text: '구분',
                    width: 80
                },
//                {
//                    xtype: 'gridcolumn',
//                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
//                    dataIndex: 'CHARGE_CD',
//                    text: '경비코드'
//                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'CHARGE_NM',
                    text: '경비명',
                    width: 170
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'CHARGE_AMT',
                    text: '경비금액',
                    format: '0,000.',
                    align: 'right',
            		summaryType : 'sum',
            		summaryRenderer : function(value, summaryData, dataIndex) {
            			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
            		},
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'TOT_DISB_AMT',
                    text: '배분경비합계',
                    format: '0,000.',
                    align: 'right',
                    width: 110,
            		summaryType : 'sum',
            		summaryRenderer : function(value, summaryData, dataIndex) {
            			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
            		},
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
                    width: 110,
                    dataIndex: 'DISTB_AMT',
                    text: '수정경비금액',
                    format: '0,000.',
                    align: 'right',
                    editor: {
                    	xtype: 'numberfield'
                    },
            		summaryType : 'sum',
            		summaryRenderer : function(value, summaryData, dataIndex) {
            			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
            		},
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'DISTRIBT_AMT',
                    text: '경비합계',
                    format: '0,000.',
                    align: 'right',
            		summaryType : 'sum',
            		summaryRenderer : function(value, summaryData, dataIndex) {
            			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
            		},
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'CHARGE_NO',
                    text: '경비번호',
                    width: 150
                }
            ],
            plugins: [
                      {
                          ptype: 'gridexporter'
                      },
                      {
                          ptype: 'cellediting'
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
              	features : [ {
            		ftype : 'summary'
            	} ],
                viewConfig: {
                	enableTextSelection: true,
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
                	id: 'w_selBtn',
                	maxWidth: 100,
                	minWidth: 100,
                	width: 100,
                	text: '조회',
                	margin : '0 0 0 3'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    id: 'w_saveBtn',
                    maxWidth: 100,
                    minWidth: 100,
                    width: 100,
                    text: '경비반영'
                }
            ]
        }
    ]

});