/*
 * File: app/view/MySearchForm.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
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

Ext.define('Q_RESULT_MGM.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'Q_RESULT_MGM.view.MySearchFormViewModel',
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
            height: 180,
            maxHeight: 180,
            minHeight: 180,
            title: 'Search terms',
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
                            xtype: 'textfield',
                            id: 'V_ASN_NO',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '납품번호',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
//                        {
//                            xtype: 'textfield',
//                            margin: '0 0 0 100',
//                            id: 'V_BP_NM',
//                            maxWidth: 250,
//                            minWidth: 250,
//                            width: 250,
//                            fieldLabel: '협력사',
//                            labelStyle: 'font-size: 12px',
//                            labelWidth: 80,
//                            name: 'search_field',
//                            blankText: ''
//                        },
                        {
                            xtype: 'textfield',
                            id: 'V_M_BP_NM',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '협력사',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: 'Double Click',
                            margin: '0 0 0 100',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                                		var popup = Ext.create("Popup.view.WinMBpPop");
                                        popup.show();
                                        
                                        Ext.getCmp('fieldType').setValue('default');
                                        var store = Ext.getStore('WinSBpPopStore');
                                		store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                        	xtype: 'textfield',
                        	margin: '0 0 0 100',
                        	id: 'V_M_BP_CD',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	fieldLabel: '협력사',
                        	labelStyle: 'font-size: 12px',
                        	labelWidth: 80,
                        	name: 'search_field',
                        	blankText: '',
                        	hidden:true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    margins: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            id: 'V_DL_FR_DT',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '납품예정일자',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            format: 'Y-m-d',
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
                            id: 'V_DL_TO_DT',
                            margin: '0 0 0 3',
                            maxWidth: 170,
                            minWidth: 170,
                            style: '',
                            width: 170,
                            fieldLabel: '~',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 10,
                            name: 'search_field',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setMonth(nows.getMonth()+1);
                                    datefield.setValue(nows);
                                }	
                            },
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    margins: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'V_ITEM_CD',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '품번',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'datefield',
                            id: 'V_INSP_DT',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '검사일자',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            format: 'Y-m-d'
                        }
                    ]
                }
            ]
        }
    ]

});