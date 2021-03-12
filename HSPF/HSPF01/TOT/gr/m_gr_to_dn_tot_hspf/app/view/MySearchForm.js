/*
 * File: app/view/MySearchForm.js
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

Ext.define('M_GR_TO_DN_TOT_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'M_GR_TO_DN_TOT_HSPF.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

    viewModel: {
        type: 'mysearchform'
    },
    padding: '',
    layout: 'auto',
    bodyPadding: 10,
    header: false,
    title: 'MyForm',

    items: [
        {
            xtype: 'fieldset',
            cls: 'gridfieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            title: '[ 출고정보 ]',
            collapsible: true,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center',
                padding: 10
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            flex: 1,
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '출고일',
                            labelWidth: 60,
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setDate(1);
                                    datefield.setValue(nows);
                                }	
                            },
                            id: 'V_DN_DT_FR'
                        },
                        {
                            xtype: 'datefield',
                            flex: 1,
                            maxWidth: 140,
                            minWidth: 140,
                            width: 140,
                            fieldLabel: '~',
                            labelWidth: 10,
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                            id: 'V_DN_DT_TO'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: 'B/L번호',
                            labelWidth: 60,
                            name: 'search_field2',
                            emptyText: '* 전체보기',
                            id: 'V_BL_DOC_NO2',
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 160,
                            minWidth: 160,
                            width: 160,
                            fieldLabel: '매출처',
                            labelWidth: 60,
                            blankText: '',
                            emptyText: '(Double Click)',
                            id: 'V_S_BP_CD2',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinSBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('S_BILL_DISTR2');
                            			var store = Ext.getStore('WinSBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '매출처명',
                            labelWidth: 60,
                            name: 'search_field2',
                            blankText: '',
                            emptyText: '(Double Click)',
                            id: 'V_S_BP_NM2',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinSBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('S_BILL_DISTR2');
                            			var store = Ext.getStore('WinSBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '출고번호',
                            labelWidth: 60,
                            name: 'search_field2',
                            id: 'V_DN_NO',
                        },
                        {
            				xtype : 'combobox',
            				margin: '0 0 0 30',
            				maxWidth: 180,
                            minWidth: 180,
                            width: 180,
            				fieldLabel : '출력구분',
            				labelWidth : 60,
            				value : 'QTY',
            				id : 'V_PRINT_TYPE',
            				displayField : 'DTL_NM',
            				valueField : 'DTL_CD',
            				editable: false,
            				store : Ext.create('Ext.data.Store', {
            					fields : [ 'DTL_CD', 'DTL_NM' ],
            					data : [ {
            						"DTL_CD" : "QTY",
            						"DTL_NM" : "수량"
            					}, {
            						"DTL_CD" : "PRC",
            						"DTL_NM" : "단가,금액"
            					} ]
            				}),
            			},
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    }
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    }
                }
            ]
        }
    ]

});