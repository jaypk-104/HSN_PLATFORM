/*
 * File: app/view/MyPanel1.js
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

Ext.define('S_DN_PAPER.view.MyPanel1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel11',

    requires: [
        'S_DN_PAPER.view.MyPanel1ViewModel',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.column.Number'
    ],

    viewModel: {
        type: 'mypanel11'
    },
    layout: 'fit',
    title: 'Tab 2',

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
                    store: 'MyStore1',
                    id: 'myGrid1',
                    tbar: [
                       {
                    	   id: 'sendBtn',
                    	   text: '',
                    	   margin: '0 3 0 0',
                    	   style: 'background-color: white; border: 0.5px solid #3367d6;',
                    	   cls: 'blue-btn',
                    	   text: '요청서발송',
                       },
                       {
                    	   id: 'sendCancelBtn',
                    	   text: '',
                    	   margin: '0 3 0 0',
                    	   style: 'background-color: white; border: 0.5px solid #3367d6;',
                    	   cls: 'blue-btn',
                    	   text: '승인취소요청서발송',
//                    	   hidden: true
                       },
                       {
                    	   id: 'cfmBtn',
                    	   text: '',
                    	   margin: '0 3 0 0',
                    	   style: 'background-color: white; border: 0.5px solid #3367d6;',
                    	   cls: 'blue-btn',
                    	   text: '요청서승인/취소',
                    	   hidden: true
                       },
                       {
	                       	id: 'printBtn',
	                       	text: '',
	                       	margin: '0 3 0 0',
	                        glyph: 'xf02f@FontAwesome',
	                        iconCls: 'grid-print-btn',
                    	},
                        {
                            id: 'gridDelBtn',
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
                          id: 'xlsxDown',
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
                            locked: true,
                            width: 40
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'V_TYPE',
                            text: 'V_TYPE',
                            hidden: true
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'MAIL_YN',
                            text: '요청서발송',
                            align: 'center',
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'REQ_CFM_YN',
                            text: '요청서승인유무',
                            align: 'center'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 100,
                            dataIndex: 'CFM_YN',
                            text: '출하승인',
                            align: 'center'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 100,
                            dataIndex: 'BILL_YN',
                            text: '매출생성',
                            align: 'center'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 120,
                            dataIndex: 'PRINT_NO',
                            text: '출하요청서<br>관리번호'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'DN_TYPE',
                            text: '요청서유형'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'DN_REQ_NO',
                            text: '출하요청서번호'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'SL_NM',
                            text: '수신'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'BP_CD',
                            text: '매출처'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 200,
                            dataIndex: 'BP_NM',
                            text: '매출처명'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'NAME1',
                            text: '발신자'/*,
                            renderer: function(value, meta, record) {
                                if (record.get('NAME1').substring(0,3) == record.get('NAME2').substring(0,3)) {
                                	meta.style = "background-color:#C7FDDE;";
                                }
                                return value;
                         }*/
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'REQ_CFM_USER',
                            text: '결재자',
                            hidden: true
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'NAME2',
                            text: '결재자'/*,
                            renderer: function(value, meta, record) {
                                if (record.get('NAME1').substring(0,3) == record.get('NAME2').substring(0,3)) {
                                	meta.style = "background-color:#CFFDE9;";  //  C7FDDE
                                }
                                return value;
                         } */
                        },
                       
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 130,
                            dataIndex: 'IN_AMT',
                            text: '입금금액',
                            format: '0,000',
                            align: 'right'
                        }, 
                        /*
                        {
                            xtype: 'checkcolumn',
                             style: 'font-size: 12px; text-align: center; font-weight: bold;',
                             text: '확인',
                             sortable: true,
                             dataIndex : 'CHECK_YN',
                             id : 'CHECK_YN',
                             enableTextSelection: true,
                             hidden : true,
                             width: 80,
                             listeners: {
                             	checkchange: function (checkcolumn, rowIndex, checked, record, eOpts, value) {
                             		
                                     if(checked){// first checkbox is checked
                                     	   if (record.get('NAME1').substring(0,3) == record.get('NAME2').substring(0,3)){
                                     		   record.set('CHECK_YN', true);
                                     		   record.set('V_TYPE', 'V');
                                     	   }
                                     	   else{
                                     		  record.set('CHECK_YN', false);
                                     		  record.set('V_TYPE', '');
                                     	   }
                                            
                                     }
                                 }
                             }
                         },*/
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6; ',
                            width: 300,
                            dataIndex: 'REMARK', 
                            text: '비고',
                            editor: {
                            	xtype: 'textfield'
                            }
                        },
                    ],
                    viewConfig: {
                    	enableTextSelection: true,
                        },
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
                },
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    style: 'border: 1px solid lightgray; padding: 5px;',
                    header: false,
                    title: 'My Grid Panel',
                    store: 'MyStore2',
                    id: 'myGrid2',
                    tbar: [
                            {
                                id: 'gridDelBtn1',
                                text: '',
                                margin: '0 3 0 0',
                                glyph: 'xf056@FontAwesome',
                                iconCls: 'grid-del-btn',
                                hidden: true,
                            },
                            {
                                xtype: 'container',
                                flex: 1
                            },
                            {
                              xtype: 'button',
                              glyph: 'xf1c3@FontAwesome',
                              id: 'xlsxDown11',
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
                            width: 114,
                            dataIndex: 'V_TYPE',
                            text: 'V_TYPE',
                            hidden: true
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 100,
                            dataIndex: 'ITEM_CD',
                            text: '품번',
                            hidden: true
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold; ',
                            text: '구매유형',
                            width: 100,
                            dataIndex: 'SALE_TYPE',
                            editor: {
                        		xtype: 'combobox',
                        		editable: false,
                        		displayField: 'DTL_NM',
                        		autoLoadOnValue: true,
                        		valueField: 'DTL_CD',
                        		store: Ext.create('Ext.data.Store',{
                        			autoLoad: true,
                        			storeId: 'sl_combo2',
                        			proxy: {
                        		           type: 'ajax',
                        		           extraParams: {
                        		            	V_MAST_CD: 'BA10',
                        		            	V_GRID: 'Y'
                        		           },	
                        		           api: {
                        		               read: '/HSPF01/common/sql/Combobox.jsp'
                        		           },
                        		           reader: {
                        		               type: 'json',
                        		               rootProperty: 'resultList'
                        		           }
                        		       }
                        		})
                        	},
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if(Ext.data.StoreManager.lookup('sl_combo2').findRecord('DTL_CD',value) !==null)
                                {
                                    return Ext.data.StoreManager.lookup('sl_combo2').findRecord('DTL_CD',value).get('DTL_NM');
                                }
                                return value;
                            },
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold; ',
                            width: 150,
                            dataIndex: 'BL_DOC_NO',
                            text: 'B/L번호',
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 150,
                            dataIndex: 'ITEM_NM',
                            text: '품명'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 150,
                            dataIndex: 'ITEM_NM2',
                            text: '품명(요청서표기용)'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 102,
                            dataIndex: 'BRAND',
                            text: '브랜드'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	text: '보유일수',
                        	dataIndex: 'OWN_DT',
                        	align: 'right',
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            text: '재고BOX수량',
                            dataIndex: 'BOX_QTY',
                            format: '0,000',
                            align: 'right',
                            width: 120
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            text: '출하요청BOX수량',
                            format: '0,000',
                            dataIndex: 'DN_BOX_QTY',
                            align: 'right',
                            width: 140,
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	text: 'B/L중량',
                        	format: '0,000.00',
                        	dataIndex: 'DN_QTY',
                        	align: 'right',
                        	width: 140
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	text: '매출단가',
                        	format: '0,000.00',
                        	dataIndex: 'DN_PRC',
                        	align: 'right',
                        	width: 140
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	text: 'B/L매출금액',
                        	format: '0,000',
                        	dataIndex: 'DN_AMT',
                        	align: 'right',
                        	width: 140,
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6; ',
                            align: 'end',
                            dataIndex: 'ADD_DN_PRC',
                            text: '추가매출단가',
                        	format: '0,000.00',
                            editor: {
                            	xtype: 'numberfield'
                            }
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6;',
                            align: 'end',
                            dataIndex: 'ADD_DN_AMT',
                            text: '추가매출금액',
                            format: '0,000.',
                            editor: {
                            	xtype: 'numberfield'
                            },
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'TOTAL_DN_AMT',
                            text: '총 매출금액',
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
                        	dataIndex: 'TOTAL_DN_PRC',
                        	text: '총 매출단가',
                        	format: '0,000.00'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6;',
                        	width: 150,
                        	dataIndex: 'ADD_REASON',
                        	text: '사유',
                        	editor: {
                        		xtype: 'textfield'
                        	}
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'COL_AMT',
                            text: '현금보증금',
                            format: '0,000',
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 150,
                            dataIndex: 'DN_NO',
                            text: '출고번호'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'DN_SEQ',
                            text: '순번'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 150,
                        	dataIndex: 'MVMT_NO',
                        	text: '입고번호'
                        },
                    ],
                    viewConfig: {
                    	enableTextSelection: true,
                    },
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
                            ptype: 'cellediting',
                            listeners: {
                            	edit: function(editor, context, eOpts) {
                            		var DN_AMT = Number(context.record.data.DN_AMT);
                            		var QTY = Number(context.record.data.DN_QTY);
                            		
                            		if(context.column.dataIndex == 'ADD_DN_PRC') {
                            			context.record.set('ADD_DN_AMT', context.record.get('ADD_DN_PRC') * QTY);
                            			context.record.set('TOTAL_DN_AMT', context.record.get('DN_AMT') + context.record.get('ADD_DN_AMT'));
                            			context.record.set('TOTAL_DN_PRC', context.record.get('DN_PRC') + context.record.get('ADD_DN_PRC'));
                            		}
                            		if(context.column.dataIndex == 'ADD_DN_AMT') {
                            			context.record.set('ADD_DN_PRC', context.record.get('ADD_DN_AMT') / QTY);
                            			context.record.set('TOTAL_DN_AMT', context.record.get('DN_AMT') + context.record.get('ADD_DN_AMT'));
                            			context.record.set('TOTAL_DN_PRC', context.record.get('DN_PRC') + context.record.get('ADD_DN_PRC'));
                            		}
                            	}
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

});