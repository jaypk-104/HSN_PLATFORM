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

Ext.define('S_DN_REQ_HSPF_NEW.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'S_DN_REQ_HSPF_NEW.view.MySearchFormViewModel',
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
                            id: 'V_PO_DT_FR',
                            maxWidth: 230,
                            minWidth: 230,
                            style: '',
                            width: 230,
                            fieldLabel: '발주일자',
                            labelWidth: 80,
                            name: 'search_field',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setDate(1);
//                                	nows.setMonth(nows.getMonth()-1);
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'datefield',
                            id: 'V_PO_DT_TO',
                            margin: '0 0 0 3',
                            maxWidth: 150,
                            minWidth: 150,
                            style: '',
                            width: 150,
                            fieldLabel: '~',
                            labelWidth: 10,
                            name: 'search_field',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setMonth(nows.getMonth()+1);
                                	nows.setDate(0);
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    width: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
//                    hidden: true,
                    items: [
						{
						    xtype: 'textfield',
						    id: 'V_ITEM_CD',
//						    margin: '0 0 0 50',
						    maxWidth: 230,
						    minWidth: 230,
						    width: 230,
						    fieldLabel: '품목코드',
						    labelWidth: 80,
						    name: 'search_field',
						    emptyText: 'Double Click',
						    listeners: {
						        afterrender: function(c) {
						        	c.getEl().on('dblclick', function() {
						        		var popup = Ext.create("Popup.view.WinItemPop");
						                popup.show();
						                
						                var store = Ext.getStore('WinItemPopStore');
						        		store.removeAll();
						        		
						        		Ext.getCmp('W_TYPE').setValue('S_DN_REQ_HSPF_NEW');
						        		
						            });
						        }
						    }
						},    
                            
                        {
                            xtype: 'combobox',
                            id: 'V_SL_CD_LEFT',
                            margin: '0 0 0 50',
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
                        {
                        	xtype: 'textfield',
                        	id: 'V_PO_NO',
//						    margin: '0 0 0 50',
                        	maxWidth: 230,
                        	minWidth: 230,
                        	width: 230,
                        	fieldLabel: '발주번호',
                        	labelWidth: 80,
                        	name: 'search_field',
                        },    
                        
                    ]
                }
            ]
        }
    ]

});