/*
 * File: app/view/WinCcPop.js
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

Ext.define('M_CHARGE_STEEL.view.WinCcPop', {
    extend: 'Ext.window.Window',
    alias: 'widget.winccpop',

    requires: [
        'M_CHARGE_STEEL.view.WinAddRowViewModel2',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winconpop'
    },
    modal: true,
    id: 'WinPop',
    height: 567,
    width: 1194,
    title: '통관참조',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            modal: true,
            shim: false,
            padding: 10,
            layout: 'center',
            items: [
                {
                    xtype: 'fieldset',
                    height: 80,
                    maxHeight: 80,
                    minHeight: 80,
                    title: '',
                    layout: {
                        type: 'hbox',
                        align: 'middle'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '발생근거번호',
                            labelWidth: 80,
                            id: 'W_CC_DOC_NO',
                            hidden: true,
                            name: 'pop_search'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
//                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '수입신고번호',
                            labelWidth: 80,
                            id: 'W_ID_NO',
                            name: 'pop_search'
                        },
                        {
                        	xtype: 'textfield',
                        	flex: 1,
                            margin: '0 0 0 30',
                        	maxWidth: 230,
                        	minWidth: 230,
                        	width: 230,
                        	fieldLabel: 'B/L번호',
                        	labelWidth: 80,
                        	id: 'W_BL_DOC_NO',
                            name: 'pop_search'
                        },
                        {
                            xtype: 'datefield',
                            margin: '0 0 0 30',
                            flex: 1,
                            maxWidth: 150,
                            minWidth: 150,
                            width: 150,
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setYear(2018);
                                	nows.setDate(1);
                                    datefield.setValue(nows);
                                }	
                            },
                            id: 'V_DT_FR'
                        },
                        {
                            xtype: 'datefield',
                            flex: 1,
                            maxWidth: 150,
                            minWidth: 150,
                            width: 20,
                            fieldLabel: '~',
                            labelWidth: 10,
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                            id: 'V_DT_TO'
                        },
                        {
                            xtype: 'textfield',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '매입처',
                            margin: '0 0 0 30',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: '(Double Click)',
                            id: 'V_M_BP_NM',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinMBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('M_CHARGE_STEEL');
                            			var store = Ext.getStore('WinMBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            },
                            name: 'pop_search'
                        },
                        {
                        	xtype: 'checkboxfield',
                        	boxLabel: '전체보기',
                        	id: 'V_CHECK',
                        	margin: '0 10 0 0',
                        	value: false,
                            margin: '0 0 0 30',
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: 'L/C번호',
                            labelWidth: 80,
                            id: 'W_LC_DOC_NO',
                            hidden: true
                        },
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            layout: 'fit',
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    style: 'padding: 10px;',
                    bodyBorder: false,
                    header: false,
                    store: 'PopStore',
                    id: 'popGrid',
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
                            style: 'text-align: center; font-weight: bold;',
                            sortable: true,
                        	dataIndex: 'CC_NO',
                            enableTextSelection: true,
                            text: '발생근거번호',
                            width: 170
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'text-align: center; font-weight: bold;',
                            sortable: true,
                            dataIndex: 'ID_NO',
                            enableTextSelection: true,
                            text: '수입신고번호',
                            width: 170
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'text-align: center; font-weight: bold;',
                        	sortable: true,
                        	dataIndex: 'BL_DOC_NO',
                        	enableTextSelection: true,
                        	text: 'B/L번호',
                        	width: 170
                        },
                        {
                            xtype: 'datecolumn',
                            style: 'text-align: center; font-weight: bold;',
                            align: 'center',
                            dataIndex: 'ID_DT',
                            enableTextSelection: true,
                            text: '신고일',
                            format: 'Y-m-d',
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'text-align: center; font-weight: bold;',
                            sortable: true,
                            dataIndex: 'M_BP_CD',
                            enableTextSelection: true,
                            text: '거래처코드',
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'text-align: center; font-weight: bold;',
                            sortable: true,
                            dataIndex: 'M_BP_NM',
                            enableTextSelection: true,
                            text: '거래처명',
                            width: 200
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: center; font-weight: bold;',
                            align: 'end',
                            dataIndex: 'DOC_AMT',
                            enableTextSelection: true,
                            text: '통관금액',
                            format: '0,000.00',
                        },
                        {
                        	xtype: 'gridcolumn',
                        	style: 'text-align: center; font-weight: bold;',
                        	sortable: true,
                        	dataIndex: 'CHARGE_YN',
                        	enableTextSelection: true,
                        	text: '경비등록유무',
                        	width: 110,
                        	align: 'center'
                        },
                    ],
                    selModel: {
                        selType: 'checkboxmodel',
                        selMode: 'SINGLE'
                    },
                    plugins: [
                        {
                            ptype: 'gridexporter'
                        },
                    ],
                    viewConfig: {
                    	enableTextSelection: true,
                    	getRowClass: function(record, index) {
                            var CHARGE_YN = record.get('CHARGE_YN'); 
                            if(CHARGE_YN == 'Y') {
                            	return 'bg-green'
                            }
                        },
                    },
                }
            ]
        },
        {
            xtype: 'container',
            margin: '0 0 3 0',
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    height: 30,
                    id: 'popSelBtn',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '조회'
                },
                {
                    xtype: 'button',
                    margins: '',
                    height: 30,
                    id: 'popRegBtn',
                    margin: '0 0 0 3',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '선택'
                }
            ]
        }
    ]

});