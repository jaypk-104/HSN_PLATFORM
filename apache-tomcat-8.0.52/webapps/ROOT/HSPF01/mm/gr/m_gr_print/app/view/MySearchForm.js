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

Ext.define('M_GR_PRINT.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'M_GR_PRINT.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox'
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
                            xtype: 'textfield',
                            id: 'V_M_BP_NM',
                            maxWidth: 220,
                            minWidth: 220,
                            width: 220,
                            fieldLabel: '거래처',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
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
                            }
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_M_BP_CD',
                        	maxWidth: 220,
                        	minWidth: 220,
                        	width: 220,
                        	fieldLabel: 'V_M_BP_CD',
                        	labelStyle: 'font-size: 12px',
                        	labelWidth: 80,
                        	name: 'search_field',
                        	hidden: true
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_ITEM_CD',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '품목코드',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
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
                            id: 'V_AVL_DT_FR',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '입고예정일',
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
                            id: 'V_AVL_DT_TO',
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
                        },
                        {
                            xtype: 'combobox',
                            id: 'V_HOPE_SL_CD',
                            flex: 1,
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '창고',
                            labelWidth: 80,
                            name: 'search_field',
                            displayField: 'display',
                            valueField: 'value',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'sl_combo',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'SL',
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
                        },
                    ]
                }
            ]
        }
    ]

});