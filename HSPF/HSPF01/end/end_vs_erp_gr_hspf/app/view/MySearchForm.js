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

Ext.define('END_VS_ERP_GR_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'END_VS_ERP_GR_HSPF.view.MySearchFormViewModel',
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
            height: 150,
            maxHeight: 150,
            minHeight: 150,
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
                            xtype: 'datefield',
                            id: 'V_GR_FR_DT',
                            margin: '',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '입고일',
                            labelWidth: 80,
                            name: 'search_field',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setDate(1);
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'datefield',
                            id: 'V_GR_TO_DT',
                            margin: '0 0 0 3',
                            maxWidth: 170,
                            minWidth: 170,
                            style: '',
                            width: 170,
                            fieldLabel: '~',
                            labelWidth: 10,
                            name: 'search_field',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setMonth(nows.getMonth());
                                    datefield.setValue(nows);
                                }	
                            },
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    width: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            id: 'V_M_BP_NM',
                            name: 'search_field',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '입고처',
                            labelWidth: 80,
                            emptyText: '(Double Click)',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                                		var popup = Ext.create("Popup.view.WinMBpPop");
                                        popup.show();
                                        
                                        Ext.getCmp('fieldType').setValue('END_VS_ERP_GR_HSPF');
                                        var store = Ext.getStore('WinMBpPopStore');
                                		store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_M_BP_CD',
                        	hidden: true,
                        	maxWidth: 180,
                        	minWidth: 180,
                        	width: 180,
                        	margin: '0 0 0 5',
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            id: 'V_ITEM_CD',
                            margin: '0 0 0 45',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '품목코드',
                            labelWidth: 80,
                            name: 'search_field',
                        }
                    ]
                }
            ]
        }
    ]

});