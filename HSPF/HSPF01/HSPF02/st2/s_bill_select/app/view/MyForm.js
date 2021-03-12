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

Ext.define('S_BILL_SELECT.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'S_BILL_SELECT.view.MyFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

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
                            flex: 1,
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '기준월',
                            labelWidth: 80,
                            format: 'Y-m',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '판매유형',
                            labelWidth: 80,
                            name: 'search_field',
                            id: 'V_SALE_TYPE',
                            displayField: 'DTL_NM',
            	        	valueField: 'DTL_CD',
            	        	editable: false,
            	        	value: 'T',
            	        	store: Ext.create('Ext.data.Store',{
            	        		autoLoad: true,
            	        		storeId: 'store3',
            	        		proxy: {
            	        			type: 'ajax',
            	        			extraParams: {
            	        				V_MAST_CD: 'BA10',
//            	        				V_GRID: 'Y'
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
                        }
                    ]
                }
            ]
        }
    ]

});