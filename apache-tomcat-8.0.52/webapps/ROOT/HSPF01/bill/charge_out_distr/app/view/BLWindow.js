/*
 * File: app/view/BLWindow.js
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

Ext.define('M_CHARGE_OUT_DISTR2.view.BLWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.blwindow',

    requires: [
        'M_CHARGE_OUT_DISTR2.view.BLWindowViewModel',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table'
    ],

    viewModel: {
        type: 'blwindow'
    },
    modal: true,
    height: 510,
    id: 'BLwindow',
    width: 849,
    layout: 'fit',
    title: 'BL 조회',

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
                            id: 'BLselectBtn',
                            text: '조회'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
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
                                    cls: 'BL_search',
                                    id: 'BL_BL_DOC_NO',
                                    fieldLabel: 'BL번호'
                                },
                                {
                                    xtype: 'textfield',
                                    cls: 'BL_search',
                                    id: 'BL_PO_NO',
                                    margin: '0 0 0 20',
                                    fieldLabel: '발주번호'
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
                                    xtype: 'textfield',
                                    fieldLabel: 'Label'
                                },
                                {
                                    xtype: 'textfield',
                                    margin: '0 0 0 20',
                                    fieldLabel: 'Label'
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
                            id: 'BLgrid',
                            header: false,
                            title: 'My Grid Panel',
                            store: 'BLStore',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    width: 150,
                                    dataIndex: 'BL_DOC_NO',
                                    text: 'BL번호'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    width: 150,
                                    dataIndex: 'PO_NO',
                                    text: '발주번호'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    hidden: true,
                                    dataIndex: 'number',
                                    text: 'Number'
                                },
                                {
                                    xtype: 'datecolumn',
                                    hidden: true,
                                    dataIndex: 'date',
                                    text: 'Date'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});