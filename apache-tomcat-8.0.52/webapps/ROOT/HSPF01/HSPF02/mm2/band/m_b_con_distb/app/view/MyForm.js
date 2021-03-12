/*
 * File: app/view/MyForm.js
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

Ext.define('M_B_CON_DISTB.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'M_B_CON_DISTB.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

    viewModel: {
        type: 'mysearchform'
    },
    margin: '-5 0 0 0',
    padding: '',
    layout: 'auto',
    bodyPadding: '0 10 0 10',
    header: false,
    title: 'MyForm1',

    items: [
        {
            xtype: 'fieldset',
            cls: 'gridfieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            collapsible: true,
            title: '',
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
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '선적일',
                            labelWidth: 80,
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setMonth(nows.getMonth() - 15);
                                    datefield.setValue(nows);
                                }	
                            },
                            id: 'V_DT_FR',
                            name: 'search_field',
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
                            id: 'V_DT_TO',
                            name: 'search_field',	
                        },
                        {
                        	xtype: 'textfield',
                        	margin: '0 0 0 30',
                        	maxWidth: 230,
                        	minWidth: 230,
                        	width: 230,
                        	fieldLabel: '공급처',
                        	labelWidth: 80,
                        	name: 'search_field',
                        	blankText: '',
                        	id: 'V_M_BP_CD',
                        	hidden: true
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '공급처',
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
                            			
                            			Ext.getCmp('fieldType').setValue('default');
                            			var store = Ext.getStore('WinMBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: 'BL번호',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_BL_DOC_NO'
                        },
                    ]
                },
//                {
//                    xtype: 'fieldcontainer',
//                    layout: {
//                        type: 'hbox',
//                        align: 'stretch'
//                    },
//                    items: [
//                        {
//                            xtype: 'textfield',
//                            maxWidth: 230,
//                            minWidth: 230,
//                            width: 230,
//                            fieldLabel: '공급사',
//                            labelWidth: 80,
//                            name: 'search_field',
//                            blankText: '',
//                            emptyText: '(Double Click)',
//                            id: 'V_M_BP_NM',
//                            listeners: {
//                                afterrender: function(c) {
//                                	c.getEl().on('dblclick', function() {
//                            			var popup = Ext.create("Popup.view.WinMBpPop");
//                            			popup.show();
//                            			
//                            			Ext.getCmp('fieldType').setValue('M_B_CON_DISTB');
//                            			var store = Ext.getStore('WinMBpPopStore');
//                            			store.removeAll();
//                                    });
//                                }
//                            }
//                        }
//                    ]
//                }
            ]
        }
    ]

});