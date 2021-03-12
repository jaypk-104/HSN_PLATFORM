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

Ext.define('S_REQ_DN_CHG.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'S_REQ_DN_CHG.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text'
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
            height: 170,
            maxHeight: 170,
            minHeight: 170,
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
                                id: 'V_DD_DT_FROM',
                                maxWidth: 230,
                                minWidth: 230,
                                style: '',
                                width: 230,
                                fieldLabel: '출고지시일자',
                                labelWidth: 90,
                                name: 'search_field',
                                format: 'Y-m-d',
                                listeners : {
                                    render : function(datefield) {
                                    	var nows = new Date();
                                    	nows.setDate(nows.getDate());
                                        datefield.setValue(nows);
                                    }	
                                },
                            },
                            {
                                xtype: 'datefield',
                                id: 'V_DD_DT_TO',
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
                                id: 'V_ITEM_CD',
                                height: 30,
                                maxWidth: 230,
                                minWidth: 230,
                                width: 230,
                                fieldLabel: '품목코드(명)',
                                labelWidth: 90,
                                name: 'search_field',
                                blankText: '',
                            	margin: '0 0 0 70',
                            },
                        {
                            xtype: 'textfield',
                            id: 'V_S_BP_NM',
                            margin: '0 0 0 70',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '고객사',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: 'Double Click',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                                		var popup = Ext.create("Popup.view.WinSBpPop");
                                        popup.show();
                                        
                                        Ext.getCmp('fieldType').setValue('textfield');
                                        var store = Ext.getStore('WinSBpPopStore');
                                		store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                          xtype: 'textfield',
                          id: 'V_S_BP_CD',
                          margin: '0 0 0 70',
                          maxWidth: 370,
                          minWidth: 370,
                          width: 370,
                          fieldLabel: '고객사',
                          labelStyle: 'font-size: 12px',
                          labelWidth: 200,
                          name: 'search_field',
                          blankText: '',
                          hidden: true
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
                                id: 'V_DD_NO',
                                maxWidth: 230,
                                minWidth: 230,
                                width: 230,
                                fieldLabel: '출고지시번호',
                                labelWidth: 90,
                                name: 'search_field',
                                blankText: '',
                                maxHeight: 30,
                                minHeight: 30,
                                
                            },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 70',
                            width: 330,
                            fieldLabel: '고객사요청번호<br>(생산출고요청번호)',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 130,
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                }
            ]
        }
    ]

});