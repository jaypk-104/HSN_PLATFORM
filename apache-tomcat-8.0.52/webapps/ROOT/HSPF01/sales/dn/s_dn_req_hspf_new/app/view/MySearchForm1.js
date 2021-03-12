/*
 * File: app/view/MySearchForm1.js
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

Ext.define('S_DN_REQ_HSPF_NEW.view.MySearchForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform1',

    requires: [
        'S_DN_REQ_HSPF_NEW.view.MySearchForm1ViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

    viewModel: {
        type: 'mysearchform1'
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
            margin: '0 0 0 -10',
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
                                id: 'V_DR_DT_FROM',
                                maxWidth: 230,
                                minWidth: 230,
                                style: '',
                                width: 230,
                                fieldLabel: '출고요청일자',
                                labelWidth: 90,
                                name: 'search_field',
                                format: 'Y-m-d',
                                listeners : {
                                    render : function(datefield) {
                                    	var nows = new Date();
                                    	nows.setDate(nows.getDate()-1);
                                        datefield.setValue(nows);
                                    }	
                                },
                            },
                            {
                                xtype: 'datefield',
                                id: 'V_DR_DT_TO',
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
                                        datefield.setValue(nows);
                                    }	
                                },
                            },
                            {
                                xtype: 'textfield',
                                id: 'V_ITEM_CD_RIGHT',
                                flex: 1,
                                margin: '0 0 0 80',
                                maxWidth: 250,
                                minWidth: 250,
                                width: 250,
                                fieldLabel: '품목코드',
                                labelWidth: 80,
                                emptyText: 'Double Click',
    						    name: 'search_field',
                                listeners: {
                                    afterrender: function(c) {
                                    	c.getEl().on('dblclick', function() {
                                    		var popup = Ext.create("Popup.view.WinItemPop");
                                            popup.show();
                                            
                                            var store = Ext.getStore('WinItemPopStore');
                                    		store.removeAll();
                                    		
                                    		Ext.getCmp('W_TYPE').setValue('S_DN_REQ_HSPF');
                                    		
                                        });
                                    }
                                }
                            },
                            {
                                xtype: 'combobox',
                                id: 'V_SL_CD',
                                margin: '0 0 0 80',
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
						    id: 'V_DD_NO_H',
						    maxWidth: 230,
						    minWidth: 230,
						    width: 230,
						    fieldLabel: '출고지시번호',
						    labelWidth: 90,
						    name: 'search_field',
						    blankText: '',
						},
						{
						    xtype: 'textfield',
						    id: 'V_BP_NM_RIGHT',
						    margin: '0 0 0 60',
						    maxWidth: 230,
						    minWidth: 230,
						    width: 230,
						    fieldLabel: '고객사명',
						    labelWidth: 80,
						    name: 'search_field',
						    blankText: '',
						    listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinSBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('S_DN_REQ_HSPF');
                            			var store = Ext.getStore('WinSBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            },
                            emptyText: 'Double Click',
						},
                        {
                        	xtype: 'textfield',
                        	id: 'V_CUST_ORDER_NO',
                        	maxWidth: 300,
                        	minWidth: 300,
                        	width: 300,
                        	fieldLabel: '고객사요청번호',
                        	labelWidth: 100,
                        	name: 'search_field',
                        	blankText: '',
                            margin: '0 0 0 60',
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_SO_NO',
                        	maxWidth: 300,
                        	minWidth: 300,
                        	width: 300,
                        	fieldLabel: '수주번호',
                        	labelWidth: 100,
                        	name: 'search_field',
                        	blankText: '',
                        	margin: '0 0 0 60',
                        },
                    ]
                }
            ]
        }
    ]

});