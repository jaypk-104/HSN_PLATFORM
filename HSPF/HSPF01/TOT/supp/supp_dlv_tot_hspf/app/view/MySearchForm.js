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

Ext.define('SUPP_DLV_TOT_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'SUPP_DLV_TOT_HSPF.view.MySearchFormViewModel',
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
            title: 'Search',
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
                            id: 'V_DLVY_DT_FR',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '납기요청일',
                            labelWidth: 70,
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
                            id: 'V_DLVY_DT_TO',
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
                                	nows.setYear(nows.getFullYear()+1);
                                    datefield.setValue(nows);
                                }	
                            }
                        },
                        {
            	        	xtype: 'textfield',
            	        	id: 'V_ITEM_CD',
            	        	margin: '0 0 0 30',
            	        	maxWidth: 250,
            	        	minWidth: 250,
            	        	width: 250,
            	        	fieldLabel: '품목코드',
            	        	labelWidth: 70,
            	        	name: 'search_field',
            	        },
            	        {
            	        	xtype: 'textfield',
            	        	id: 'V_ITEM_NM',
            	        	margin: '0 0 0 30',
            	        	maxWidth: 250,
            	        	minWidth: 250,
            	        	width: 250,
            	        	fieldLabel: '품목명',
            	        	labelWidth: 70,
            	        	name: 'search_field',
            	        },
            	        {
            	        	xtype: 'textfield',
            	        	id: 'V_ASN_NO_TF',
            	        	margin: '0 0 0 30',
            	        	maxWidth: 250,
            	        	minWidth: 250,
            	        	width: 250,
            	        	fieldLabel: 'ASN번호',
            	        	labelWidth: 70,
            	        	name: 'search_field',
            	        },
                    ]
                },
                {
                	xtype: 'fieldcontainer',
                	layout: {
                		type: 'hbox',
                		align: 'stretch'
                	},
                	items: [
                	        {
                                xtype: 'datefield',
                                id: 'V_PO_DT_FR',
                                maxWidth: 250,
                                minWidth: 250,
                                style: '',
                                width: 250,
                                fieldLabel: '발주일',
                                labelWidth: 70,
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
                                id: 'V_PO_DT_TO',
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
                                        datefield.setValue(nows);
                                    }	
                                }
                            },
                	        
                	        {
                	        	xtype: 'textfield',
                	        	id: 'V_PO_NO',
                	        	maxWidth: 250,
                	        	minWidth: 250,
                	        	width: 250,
                	        	fieldLabel: '발주번호',
                	        	labelWidth: 70,
                	        	name: 'search_field',
                	        	margin: '0 0 0 30',
                	        },
                	        {
                	        	xtype: 'textfield',
                	        	id: 'V_M_BP_CD',
                	        	maxWidth: 250,
                	        	minWidth: 250,
                	        	width: 250,
                	        	fieldLabel: '공급사코드',
                	        	labelWidth: 70,
                	        	name: 'search_field',
                	        	margin: '0 0 0 30',
                	        	emptyText: 'Double Click',
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
                                },
                                hidden: true
                	        },
                	        {
                	        	xtype: 'textfield',
                	        	id: 'V_M_BP_NM',
                	        	maxWidth: 250,
                	        	minWidth: 250,
                	        	width: 250,
                	        	fieldLabel: '공급사명',
                	        	labelWidth: 70,
                	        	name: 'search_field',
                	        	margin: '0 0 0 30',
                	        	emptyText: '(관리자용)',
                                hidden: true
                	        },
                	        {
                	        	xtype: 'textfield',
                	        	id: 'V_BL_NO',
                	        	maxWidth: 250,
                	        	minWidth: 250,
                	        	width: 250,
                	        	fieldLabel: 'BL번호',
                	        	labelWidth: 70,
                	        	name: 'search_field',
                	        	margin: '0 0 0 30',
                	        },
            	        ]
                }
            ]
        }
    ]

});