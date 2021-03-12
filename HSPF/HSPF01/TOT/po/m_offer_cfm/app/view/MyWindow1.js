/*
 * File: app/view/MyWindow.js
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

Ext.define('M_OFFER_CFM.view.MyWindow1', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'M_OFFER_CFM.view.MyWindowViewModel1',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Number'
    ],

    viewModel: {
        type: 'mywindow1'
    },
    height: 499,
    width: 553,
    title: '▶발주조회',
    modal: true,
    id: 'MyWindow1',
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            height: 80,
            maxHeight: 80,
            minHeight: 80,
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'middle'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            id: 'W_PO_DT_FR',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '발주일자',
                            labelWidth: 80,
                            format: 'Y-m-d',
                            altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setMonth(nows.getMonth()-1);
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'datefield',
                            id: 'W_PO_DT_TO',
                            maxWidth: 150,
                            minWidth: 150,
                            width: 150,
                            fieldLabel: '~',
                            labelWidth: 10,
                            format: 'Y-m-d',
                            altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'combobox',
                            id: 'W_M_BP_NM',
                            fieldLabel: '매입처',
                            labelWidth: 80,
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            margin: '0 0 0 30',
                            name: 'search_field',
                            displayField: 'M_BP_NM',
                            valueField: 'M_BP_NM',
                            enableRegEx: true,
                            minChars: 2,
                            queryMode: 'local',
                            store: 'WinMBpPopStore',
                            listeners   : {
                                beforequery: function(record){  
                                    record.query = new RegExp(record.query, 'i');
                                    record.forceAll = true;
                                }
                            },
	                        emptyText: '(입력)',
                        },
                        {
            	            xtype: 'button',
            	            id: 'w_selBtn',
            	            margin: '0 3 0 0',
            	            maxWidth: 80,
            	            minWidth: 80,
            	            width: 80,
            	            glyph: 'xf002@FontAwesome',
            	            text: '조회'
            	        },
                    ]
                },
            ]
        },
        {
            xtype: 'gridpanel',
            flex: 1,
            header: false,
            title: 'My Grid Panel',
            store: 'PopStore',
            id:'popGrid',
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
                	 dataIndex: 'PO_USR_NM',
                	 text: '발주자',
                	 filter: {
                         type: 'list'
                     }
                 },
                 {
                	 xtype: 'gridcolumn',
                	 style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	 dataIndex: 'BP_CD',
                	 text: '매입처코드',
                	 
                 },
                 {
                	 xtype: 'gridcolumn',
                	 style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	 dataIndex: 'M_BP_NM',
                	 text: '매입처명',
            		 width: 180,
            		 filter: {
                         type: 'list'
                     }
                 },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'MAST_PO_NO',
                    text: '발주번호',
                    width: 180
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'PO_TYPE_NM',
                	text: '발주유형',
                	filter: {
                        type: 'list'
                    }
                },
                {
                	xtype: 'datecolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'PO_DT',
                	text: '발주일자',
                	format: 'Y-m-d',
                	filter: {
                        type: 'list'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    dataIndex: 'TOT_PO_AMT',
                    text: '총 발주금액',
                    format: '0,000.00',
                    sortable: false,
            		summaryType : 'sum',
            		summaryRenderer : function(value, summaryData, dataIndex) {
            			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
            		},
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'CUR',
                	text: '화폐단위',
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'IN_TERMS_NM',
                	text: '가격조건',
                	width: 200
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'PAY_METH_NM',
                	text: '결제방법',
                	width: 200
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'VAT_TYPE_NM',
                	text: '부가세유형',
                	width: 200
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'S_BP_NM',
                	text: '고객사',
                },
                
            ],
            plugins: [
                {
                    ptype: 'gridfilters'
                }
            ]
        }
    ]

});