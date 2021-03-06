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

Ext.define('Q_BASE_METHOD.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'Q_BASE_METHOD.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
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
                            id: 'V_ITEM_CD',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '품번',
                            labelStyle: 'font-size: 12px;',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
//                        {
//                            xtype: 'textfield',
//                            margin: '0 0 0 100',
//                            maxWidth: 260,
//                            minWidth: 260,
//                            width: 260,
//                            fieldLabel: '검사방법',
//                            labelStyle: 'font-size: 12px;',
//                            labelWidth: 90,
//                            name: 'search_field',
//                            blankText: ''
//                        }
                        {
                            xtype: 'combobox',
                            id: 'V_QC_TYPE',
                            flex: 1,
                            margin: '0 0 0 100',
                            maxWidth: 260,
                            minWidth: 260,
                            width: 260,
                            fieldLabel: '검사방법',
                            labelWidth: 90,
                            name: 'search_field',
                            displayField: 'display',
                            valueField: 'value',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'v1',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'QA01',
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
                },
                {
                    xtype: 'fieldcontainer',
                    margins: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
//                        {
//                            xtype: 'textfield',
//                            id: 'BP_CD',
//                            maxWidth: 250,
//                            minWidth: 250,
//                            width: 250,
//                            fieldLabel: '납품사',
//                            labelStyle: 'font-size: 12px;',
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
                            fieldLabel: '납품사',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: 'Double Click',
                            margin: '0 0 0 0',
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
                            id: 'V_M_BP_CD',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '납품사',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            hidden: true
                        },
//                        {
//                            xtype: 'combobox',
//                            flex: 1,
//                            margin: '0 0 0 100',
//                            maxWidth: 260,
//                            minWidth: 260,
//                            width: 260,
//                            fieldLabel: '화승검사방법',
//                            labelStyle: 'font-size: 12px;',
//                            labelWidth: 90,
//                            name: 'search_field',
//                            displayField: 'display',
//                            valueField: 'value'
//                        }
                        {
                            xtype: 'combobox',
                            id: 'V_HS_TYPE',
                            flex: 1,
                            margin: '0 0 0 100',
                            maxWidth: 260,
                            minWidth: 260,
                            width: 260,
                            fieldLabel: '화승검사방법',
                            labelWidth: 90,
                            name: 'search_field',
                            displayField: 'display',
                            valueField: 'value',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'v2',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'QA02',
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
                },
                {
                    xtype: 'fieldcontainer',
                    margins: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    hidden: true,
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250
                        },
//                        {
//                            xtype: 'combobox',
//                            flex: 1,
//                            margin: '0 0 0 100',
//                            maxWidth: 260,
//                            minWidth: 260,
//                            width: 260,
//                            fieldLabel: '협력사검사방법',
//                            labelStyle: 'font-size: 12px;',
//                            labelWidth: 90,
//                            name: 'search_field',
//                            displayField: 'display',
//                            valueField: 'value'
//                        }
                        {
                            xtype: 'combobox',
                            id: 'V_SUPP_TYPE',
                            flex: 1,
                            margin: '0 0 0 100',
                            maxWidth: 260,
                            minWidth: 260,
                            width: 260,
                            fieldLabel: '협력사검사방법',
                            labelWidth: 90,
                            name: 'search_field',
                            displayField: 'display',
                            valueField: 'value',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'v3',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'QA01',
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