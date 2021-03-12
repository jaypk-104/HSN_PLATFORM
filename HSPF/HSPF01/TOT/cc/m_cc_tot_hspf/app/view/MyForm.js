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

Ext.define('M_CC_TOT_HSPF.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'M_CC_TOT_HSPF.view.MySearchFormViewModel',
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
            title: '[ B/L참조 ]',
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
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: 'B/L일자',
                            labelWidth: 80,
                            format: 'Y-m-d',
                            id: 'V_BL_DT_FR',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setMonth(0);
                                	nows.setDate(1);
                                    datefield.setValue(nows);
                                }	
                            },
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
                            id: 'V_BL_DT_TO',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'datefield',
                            flex: 1,
                            margins: '',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            labelWidth: 100,
                            format: 'Y-m-d',
                            id: 'V_BF_DT_FR',
                            fieldLabel: '통관전입고일자',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setDate(1);
                                    datefield.setValue(nows);
                                }	
                            },
                            hidden: true,
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
                            id: 'V_BF_DT_TO',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                            hidden: true,
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
                            id: 'V_M_BP_NM',
                            emptyText: '(Double Click)',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinMBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('M_CC_DISTB');
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
                            fieldLabel: 'B/L번호',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_BL_DOC_NO'
                        },
                        {
                            xtype: 'combobox',
                            id: 'V_SL_CD',
                            margin: '0 0 0 30',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '창고',
                            labelWidth: 50,
                            name: 'search_field',
                            displayField: 'display',
                            valueField: 'value',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            hidden: true,
//                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'sl_combo',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'SL_G',
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
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    hidden: true,
                    items: [
                        
                    ]
                }
            ]
        }
    ]

});