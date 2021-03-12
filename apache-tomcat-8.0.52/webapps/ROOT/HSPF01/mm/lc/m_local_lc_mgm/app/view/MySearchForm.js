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

Ext.define('M_LOCAL_LC_MGM.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'M_LOCAL_LC_MGM.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Number',
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
            title: '[ L/C 등록 ]',
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
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'Local L/C 관리번호',
                            labelWidth: 120,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_LC_DOC_NO'
                        },
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            margin: '0 0 0 30',
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: '환율',
                            value: 1,
                            labelWidth: 80,
                            id: 'V_XCH_RATE'
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 30',
                            maxWidth: 260,
                            minWidth: 260,
                            width: 260,
                            fieldLabel: '개설은행',
                            id: 'V_BANK_CD',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            store: Ext.create('Ext.data.Store',{
                          		autoLoad: true,
                          		storeId: 'store1',
                          		proxy: {
                                      type: 'ajax',
                                      extraParams: {
                                       	V_MAST_CD: 'BANK',
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
                                    '<div>[{DTL_CD}] {DTL_NM} </div>'
                                ],
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: '통지은행',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            hidden: true
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
                            flex: 1,
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '개설신청일',
                            labelWidth: 120,
                            format: 'Y-m-d',
                            id: 'V_OPEN_DT',
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
                            margin: '0 0 0 30',
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: '유효일',
                            id: 'V_EXPIRY_DT',
                            labelWidth: 80,
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
                            xtype: 'datefield',
                            flex: 1,
                            margin: '0 0 0 30',
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: 'AMEND일자',
                            id: 'V_AMEND_DT',
                            labelWidth: 80,
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
                            margin: '0 0 0 30',
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: '수혜자',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            hidden: true
                        },
                        {
                            xtype: 'combobox',
                            margin: '0 0 0 30',
                            maxWidth: 210,
                            minWidth: 210,
                            width: 210,
                            fieldLabel: '통화',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_CUR',
                            value: 'USD',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            store: Ext.create('Ext.data.Store',{
                          		autoLoad: true,
                          		storeId: 'store1',
                          		proxy: {
                                      type: 'ajax',
                                      extraParams: {
                                       	V_MAST_CD: 'BA04',
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
                        }
                    ]
                }
            ]
        }
    ]

});