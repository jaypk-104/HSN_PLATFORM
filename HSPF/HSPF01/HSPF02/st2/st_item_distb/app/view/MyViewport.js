/*
 * File: app/view/MyViewport.js
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

Ext.define('ST_ITEM_DISTB.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'ST_ITEM_DISTB.view.MyViewportViewModel',
        'ST_ITEM_DISTB.view.TbButton',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    style: 'background-color: white',
    width: 400,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'toolbarBtn'
        },
        {
            xtype: 'container',
            flex: 1,
            padding: '0 10 0 10',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
                    
{
    xtype: 'form',
    flex: 1,
    height: 150,
    maxHeight: 150,
    minHeight: 150,
    layout: 'auto',
    bodyPadding: '0 10 0 10',
    header: false,
    title: 'My Form',
    items: [
        {
            xtype: 'fieldset',
            height: 150,
            maxHeight: 150,
            minHeight: 150,
            title: '[ Search ]',
            layout: {
                type: 'vbox',
                align: 'stretch',
//                pack: 'center'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
//                    flex: 1,
                    height: 35,
                    maxHeight: 35,
                    minHeight: 35,
                    width: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            margin: '',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '기준일',
                            format: 'Y-m-d',
                            id: 'V_DATE',
                            format: 'Y-m-d',
                            labelWidth: 80,
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                            name: 'search_field'
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_ITEM_CD',
                            margin: '0 0 0 30', 
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            labelWidth: 80,
                            fieldLabel: '품목코드',
                            name: 'search_field'
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_S_BP_NM',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            labelWidth: 80,
                            fieldLabel: '수주처',
                            name: 'search_field',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinSBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('ST_ITEM_DISTB');
                            			var store = Ext.getStore('WinSBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            },
                            emptyText: '(Double Click)',
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_XCH_RATE',
                        	margin: '0 0 0 30',
                        	maxWidth: 200,
                        	minWidth: 200,
                        	width: 200,
                        	labelWidth: 80,
                        	fieldLabel: '적용환율',
                        	name: 'search_field',
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_AMT_1',
                        	margin: '0 0 0 30',
                        	maxWidth: 230,
                        	minWidth: 230,
                        	width: 230,
                        	labelWidth: 80,
                        	fieldLabel: '한도금액',
                        	name: 'search_field',
                        },
                       
                    ]
                },
                {

                    xtype: 'fieldcontainer',
//                    flex: 1,
                    height: 35,
                    maxHeight: 35,
                    minHeight: 35,
                    width: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
//                            margin: '0 0 0 30',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '지역',
                            labelWidth: 80,
                            name: 'search_field',
                            id: 'V_REGION',
                            displayField: 'DTL_NM',
            	        	valueField: 'DTL_CD',
            	        	editable: false,
            	        	value: 'T',
            	        	store: Ext.create('Ext.data.Store',{
            	        		autoLoad: true,
            	        		storeId: 'store2',
            	        		proxy: {
            	        			type: 'ajax',
            	        			extraParams: {
            	        				V_MAST_CD: 'BA26',
            	        				V_GRID: 'N'
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
            	        	,
                    		listConfig: {
                                itemTpl: [
                                    '<div>{DTL_NM} ({DTL_CD})</div>'
                                ]
                            },
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 30',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '판매유형',
                            labelWidth: 80,
                            name: 'search_field',
                            id: 'V_SALE_TYPE',
                            displayField: 'DTL_NM',
            	        	valueField: 'DTL_CD',
            	        	editable: false,
            	        	value: 'T',
            	        	store: Ext.create('Ext.data.Store',{
            	        		autoLoad: true,
            	        		storeId: 'store3',
            	        		proxy: {
            	        			type: 'ajax',
            	        			extraParams: {
            	        				V_MAST_CD: 'BA10',
            	        				V_GRID: 'N'
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
            	        	,
                    		listConfig: {
                                itemTpl: [
                                    '<div>{DTL_NM} ({DTL_CD})</div>'
                                ]
                            },
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 30',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '구매유형',
                            labelWidth: 80,
            	        	value: 'T',
                            name: 'search_field',
                            id: 'V_IV_TYPE',
                            displayField: 'DTL_NM',
            	        	valueField: 'DTL_CD',
            	        	editable: false,
            	        	store: Ext.create('Ext.data.Store',{
            	        		autoLoad: true,
            	        		storeId: 'store4',
            	        		proxy: {
            	        			type: 'ajax',
            	        			extraParams: {
            	        				V_MAST_CD: 'BA18',
            	        				V_GRID: 'N'
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
            	        	,
                    		listConfig: {
                                itemTpl: [
                                    '<div>{DTL_NM} ({DTL_CD})</div>'
                                ]
                            },
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_LC_DOC_NO',
                            margin: '0 0 0 30', 
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            labelWidth: 80,
                            fieldLabel: 'LC번호',
                            name: 'search_field'
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_BL_DOC_NO',
                            margin: '0 0 0 30', 
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            labelWidth: 80,
                            fieldLabel: 'BL번호',
                            name: 'search_field'
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_AMT_2',
                        	margin: '0 0 0 30',
                        	maxWidth: 230,
                        	minWidth: 230,
                        	width: 230,
                        	labelWidth: 80,
                        	fieldLabel: '재고금액',
                        	name: 'search_field',
                        },
                    ]
                
                }
            ]
        }
    ]
},    
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    style: 'border: 1px solid lightgray; padding: 5px;',
                    bodyBorder: false,
                    header: false,
                    margin: '5 0 0 0',
                    title: 'My Grid Panel',
                    id: 'myGrid',
                    store: 'MyStore',
                    tbar: [
                       {
		             	   xtype: 'button',
		             	   id: 'execBtn',
		             	   margin: '0 3 0 0',
		             	   text: '매출단가계산',
		             	   style: 'background-color: white; border: 0.5px solid #3367d6;',
		             	   cls: 'blue-btn',
		//             	   disabled: true
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
		           ],
                    columns: [
                        {
                            xtype: 'rownumberer',
                            width: 40
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 170,
                            dataIndex: 'BP_NM',
                            text: '수주처',
                            locked: true,
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 200,
                        	dataIndex: 'M_BP_NM',
                        	text: '매입처'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 150,
                            dataIndex: 'APPROV_NO',
                            text: '품의번호'
                        },
                        {
                        	xtype: 'datecolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 100,
                        	dataIndex: 'APPROV_DT',
                        	format: 'Y-m-d',
                        	align : 'center',
                        	text: '품의일자'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 300,
                            dataIndex: 'APPROV_NM',
                            text: '품의명'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 150,
                            dataIndex: 'LC_DOC_NO',
                            text: 'LC번호'
                        },
                        {
                            xtype: 'gridcolumn',
                            hidden: true,
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'string',
                            text: '규격'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 150,
                            dataIndex: 'BL_DOC_NO',
                            text: 'BL번호'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 150,
                        	dataIndex: 'SL_NM',
                        	text: '창고명'
                        },
                        {
                            xtype: 'datecolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            text: '창고입고일',
                            format: 'Y-m-d',
                            dataIndex: 'IN_DT'
                        },
                        {
                            xtype: 'datecolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            text: '상품대체일',
                            format: 'Y-m-d',
                            dataIndex: 'MVMT_DT'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 100,
                        	dataIndex: 'COST_CD',
                        	text: '코스트센터',
                        	hidden: true
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 120,
                        	dataIndex: 'COST_NM',
                        	text: '코스트센터명'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            dataIndex: 'ITEM_CD',
                            text: '품목코드'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 130,
                            dataIndex: 'ITEM_NM',
                            text: '품목명'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 130,
                        	dataIndex: 'BRAND',
                        	text: 'BRAND'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 130,
                        	dataIndex: 'GRADE_NM',
                        	text: '등급'
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 110,
                        	dataIndex: 'PLANT_NO',
                        	text: '공장번호'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'BOX_QTY',
                            text: '박스수량',
                            format: '0,000',
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                        },
                        {
                            xtype: 'numbercolumn',
                            dataIndex: 'BOX_WGT_UNIT',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            width: 114,
                            text: '단위중량',
                            align: 'end',
                        	format: '0,000.00'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'QTY',
                            text: '총수량',
                            format: '0,000.00',
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
                            },
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'S_DAY',
                            text: '보유일수',
                            format: '0,000',
                            filter: {
                                type: 'numeric',
                            }
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 150,
                        	dataIndex: 'REMARK',
                        	text: '비고'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'N_ST_AMT',
                            text: '정상재고',
                            format: '0,000',
                            width: 130,
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                            format: '0,000',
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'O_ST_AMT',
                            text: '연체재고',
                            width: 130,
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                            format: '0,000',
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'L_ST_AMT',
                            text: '장기재고',
                            width: 130,
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                            format: '0,000',
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	align: 'end',
                        	dataIndex: 'NON_AMT',
                        	text: '미착금액',
                        	width: 130,
                        	format: '0,000',
                        	summaryType: 'sum',
                        	summaryRenderer: function(value, summaryData, dataIndex) {
                        		return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                        	},
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'ST_AMT',
                            text: '재고금액',
                            width: 130,
                            format: '0,000',
                            summaryType: 'sum',
                            summaryRenderer: function(value, summaryData, dataIndex) {
                                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                            },
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	align: 'end',
                        	dataIndex: 'TAX_AMT',
                        	text: '관세예상',
                        	width: 130,
                        	summaryType: 'sum',
                        	summaryRenderer: function(value, summaryData, dataIndex) {
                        		return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                        	},
                        	format: '0,000',
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	align: 'end',
                        	dataIndex: 'PO_AMT',
                        	text: 'L/C미개설금액',
                        	width: 130,
                        	format: '0,000',
                        	summaryType: 'sum',
                        	summaryRenderer: function(value, summaryData, dataIndex) {
                        		return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                        	},
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	align: 'end',
                        	dataIndex: 'IV_PRC',
                        	text: '매입단가',
                        	width: 130,
                        	format: '0,000',
                        	summaryType: 'sum',
                        	summaryRenderer: function(value, summaryData, dataIndex) {
                        		return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                        	},
                        },
                        {
                        	xtype: 'numbercolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	align: 'end',
                        	dataIndex: 'F_S_PRC',
                        	text: '예상매출단가',
                        	width: 130,
                        	format: '0,000',
                        	summaryType: 'sum',
                        	summaryRenderer: function(value, summaryData, dataIndex) {
                        		return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
                        	},
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                        	width: 90,
                        	dataIndex: 'ADD_DB_YN',
                        	text: '추가담보'
                        },
                       
                    ],
                    selModel: {
                        selType: 'checkboxmodel'
                    },
                    viewConfig: {
                    	enableTextSelection: true,
                    },
                    plugins: [
                        {
                            ptype: 'gridexporter'
                        },
                        {
                            ptype: 'cellediting'
                        },
                        {
                       		ptype: 'gridfilters' ///이부분
               	      },
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