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

Ext.define('I_STOCK_RACK_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'I_STOCK_RACK_HSPF.view.MySearchFormViewModel',
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
            height: 180,
            maxHeight: 180,
            minHeight: 180,
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
                            id: 'V_BASE_DATE',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '기준일',
                            labelWidth: 80,
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
                            xtype: 'combobox',
                            id: 'V_SL_CD',
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
                        {
                            xtype: 'combobox',
                            id: 'V_LC_CD',
                            flex: 1,
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '로케이션',
                            labelWidth: 80,
                            name: 'search_field',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            value: 'T',
                            editable: false,
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'lc_combo',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'LC_N',
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
                    		}),
                          	listConfig: {
                                itemTpl: [
                                    '<div>{DTL_NM} ({DTL_CD})</div>'
                                ]
                            }
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
//                            id: 'V_RACK_NO',
//                            maxWidth: 250,
//                            minWidth: 250,
//                            width: 250,
//                            fieldLabel: 'RACK번호',
//                            labelWidth: 80,
//                            name: 'search_field',
//                            blankText: ''
//                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'RACK번호',
                            labelWidth: 80,
                            id: 'V_RACK_NO',
                            name: 'search_field',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                    			autoLoad: true,
                    			storeId: 'rc_combo',
                    			proxy: {
                    		           type: 'ajax',
                    		           extraParams: {
                    		            	V_MAST_CD: 'RC_N',
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
                    		}),
                          	listConfig: {
                                itemTpl: [
                                    '<div>{DTL_NM} ({DTL_CD})</div>'
                                ]
                            }
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_BC_NO',
                            margin: '0 0 0 90',
                            maxWidth: 260,
                            minWidth: 260,
                            width: 260,
                            fieldLabel: '바코드번호',
                            labelWidth: 90,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_LOT_NO',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'LOT NO',
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
                            xtype: 'textfield',
                            id: 'V_ITEM_CD',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '품목코드',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                        	xtype: 'textfield',
                        	margin: '0 0 0 100',
                        	id: 'V_ITEM_NM',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	fieldLabel: '품목명',
                        	labelWidth: 80,
                        	name: 'search_field',
                        	blankText: ''
                        },
                        {
                        	xtype: 'textfield',
                        	margin: '0 0 0 100',
                        	id: 'V_BL_NO',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	fieldLabel: 'BL번호',
                        	labelWidth: 80,
                        	name: 'search_field',
                        	blankText: ''
                        }
                    ]
                }
            ]
        }
    ]

});