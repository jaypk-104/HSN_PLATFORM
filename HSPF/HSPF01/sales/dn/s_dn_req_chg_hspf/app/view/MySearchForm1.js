/*
 * File: app/view/MySearchForm1.js
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

Ext.define('S_REQ_DN_CHG.view.MySearchForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform1',

    requires: [
        'S_REQ_DN_CHG.view.MySearchFormViewModel1',
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
                            id: 'W_DR_DT_FROM',
                            flex: 1,
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '출고요청일자',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
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
                            id: 'W_DR_DT_TO',
                            flex: 1,
                            margin: '0 0 0 10',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '~',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 10,
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                }	
                            },
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
                            id: 'W_ITEM_CD',
//                            height: 30,
                            maxHeight: 30,
                            maxWidth: 250,
                            minHeight: 30,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '품목코드(명)',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field1',
                            blankText: ''
                        },
                        {
                            xtype: 'textfield',
                            id: 'W_DR_NO',
//                            height: 30,
                            margin: '0 0 0 50',
                            maxHeight: 30,
                            maxWidth: 270,
                            minHeight: 30,
                            minWidth: 270,
                            width: 270,
                            fieldLabel: '고객사요청번호',
                            labelStyle: 'font-size: 12px',
                            name: 'search_field1',
                            blankText: ''
                        }
                    ]
                }
            ]
        }
    ]

});