/*
 * File: app/view/MyWindow.js
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

Ext.define('M_DUTY_CHARGE_OUT_DISTR.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'M_DUTY_CHARGE_OUT_DISTR.view.BLWindowViewModel1',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.view.Table'
    ],

    viewModel: {
        type: 'mywindow'
    },
    modal: true,
    height: 510,
    id: 'myWindow',
    width: 849,
    layout: 'fit',
    title: '경비마스터번호 조회',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch',
                padding: 5
            },
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'button',
                            id: 'W_selectBtn',
                            text: '조회'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    margin: '5 0 0 0',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
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
                                    cls: 'W_search',
                                    id: 'W_M_CHARGE_NO',
                                    fieldLabel: '경비마스터번호'
                                },
                                {
                                    xtype: 'textfield',
                                    cls: 'W_search',
                                    id: 'W_BL_DOC_NO',
                                    margin: '0 0 0 20',
                                    fieldLabel: 'BL번호'
                                }
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
                                    cls: 'W_search',
                                    id: 'W_TAX_DT',
                                    fieldLabel: '신고일',
                                    format: 'Y-m-d'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'gridpanel',
                            id: 'windowGrid',
                            header: false,
                            title: 'My Grid Panel',
                            store: 'windowStore',
                            columns: [
                                {
                                    xtype: 'rownumberer'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 130,
                                    dataIndex: 'M_CHARGE_NO',
                                    text: '경비마스터번호'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 130,
                                    dataIndex: 'BL_DOC_NO',
                                    text: 'BL번호'
                                },
                                {
                                    xtype: 'datecolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    dataIndex: 'TAX_DT',
                                    text: '신고일',
                                    format: 'Y-m-d'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 100,
                                    align: 'center',
                                    dataIndex: 'ERP_YN',
                                    text: '승인유무'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    width: 100,
                                    align: 'center',
                                    dataIndex: 'PAY_YN',
                                    text: '지급유무'
                                }
                            ],
                            viewConfig: {
                                enableTextSelection: true
                            }
                        }
                    ]
                }
            ]
        }
    ]

});