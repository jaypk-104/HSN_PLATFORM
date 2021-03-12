/*
 * File: app/view/MyForm.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('B_STORAGE_DISTR.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'B_STORAGE_DISTR.view.MyFormViewModel',
        'B_STORAGE_DISTR.view.MyFormViewController',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

    controller: 'myform',
    viewModel: {
        type: 'myform'
    },
    layout: 'auto',
    bodyPadding: '0 10 0 10',
    header: false,
    title: 'My Form',

    items: [
        {
            xtype: 'fieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            title: '[ Search ]',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    flex: 1,
                    height: 35,
                    maxHeight: 35,
                    minHeight: 35,
                    width: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '창고기준일',
                            format: 'Y-m-d',
                            listeners: {
                                render: {
                                    fn: 'onDatefieldRender',
                                    single: false
                                }
                            },
                            id: 'V_SL_DT'
                        },
                        {
                            margin: '0 0 0 30',
                            maxWidth: 300,
                            minWidth: 300,
                            width: 300,
                            fieldLabel: '<span style=\'color:red\'>*</span>창고코드',
                            labelWidth: 80,
                            name: 'search_field',

                    		xtype: 'combobox',
                    		displayField: 'DTL_CD',
                    		autoLoadOnValue: true,
                    		valueField: 'DTL_CD',
                            id: 'V_SL_CD',
                    		store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'sl_combo22',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'SL_DISTR',
                    		            	V_GRID: 'Y'
                    		           },	
                    		           api: {
                    		               read: '/HSPF01/common/sql/Combobox.jsp'
                    		           },
                    		           reader: {
                    		               type: 'json',
                    		               rootProperty: 'resultList'
                    		           }
                    		       }
                    		}),
                    		listeners: {
                    			change: function(field, newValue, oldValue, eOpts) {
                    				if((newValue != undefined) || (newValue != null)) {
                    					Ext.getCmp('V_SL_NM').setValue(field.selection.data.DTL_NM);
                    					Ext.getCmp('V_REGION').setValue(field.selection.data.REGION);
                    					Ext.getCmp('V_REF_NO').setValue(field.selection.data.REF_NO);
                    					
//                    					console.log(field.selection.data)	
                    				}
                    			}
                    		},
                    		listConfig: {
                                itemTpl: [
                                    '<div>{DTL_CD} ({DTL_NM})</div>'
                                ]
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '<span style=\'color:red\'>*</span>창고명',
                            labelWidth: 80,
                            name: 'search_field',
                            id: 'V_SL_NM'
                        },
                        
                    	{
                        xtype: 'combobox',
                        margin: '0 0 0 30',
                        maxWidth: 230,
                        minWidth: 230,
                        width: 230,
                        fieldLabel: '지역',
                        labelWidth: 80,
                        name: 'search_field',
                        id: 'V_REGION',
                        displayField: 'DTL_NM',
        	        	valueField: 'DTL_CD',
        	        	editable: false,
        	        	store: Ext.create('Ext.data.Store',{
        	        		autoLoad: true,
        	        		storeId: 'store2',
        	        		proxy: {
        	        			type: 'ajax',
        	        			extraParams: {
        	        				V_MAST_CD: 'BA26',
        	        				V_GRID: 'Y'
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
        	        	,
                		listConfig: {
                            itemTpl: [
                                '<div>{DTL_NM} ({DTL_CD})</div>'
                            ]
                        },
                    	},
                    	{
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '입출고처연계번호',
                            labelWidth: 130,
                            name: 'search_field',
                            id: 'V_REF_NO'
                        
                    	}
                    
                    ]
                }
            ]
        }
    ]

});