/*
 * File: app/view/WinItemPop.js
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

Ext.define('Popup.view.WinItemPop', {
    extend: 'Ext.window.Window',
    alias: 'widget.winitempop',

    requires: [
        'Popup.view.WinItemPopViewModel',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winitempop'
    },
    modal: true,
    autoShow: true,
    height: 434,
    width: 422,
    layout: 'fit',
    bodyPadding: 5,
    title: '품목조회',
    id: 'WinItemPop',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    height: 45,
                    maxHeight: 45,
                    minHeight: 45,
                    layout: {
                        type: 'hbox',
                        align: 'middle'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            id: 'W_ITEM_CD',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '품목코드',
                            labelWidth: 80,
                            name: 'search_field'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margins: '',
                            id: 'W_ITEM_NM',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '품목명',
                            labelAlign: 'right',
                            labelWidth: 80,
                            name: 'search_field'
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margins: '',
                            id: 'W_TYPE',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: 'W_TYPE',
                            labelAlign: 'right',
                            labelWidth: 80,
                            name: 'search_field',
                            hidden: true
                        }, 
                        {
                        	xtype: 'textfield',
                        	flex: 1,
                        	margins: '',
                        	id: 'W_M_BP_CD',
                        	maxWidth: 200,
                        	minWidth: 200,
                        	width: 200,
                        	hidden: true
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
                            id: 'WinItemGrid',
                            style: 'border: 1px solid #659DDC; padding: 5px;',
                            bodyBorder: false,
                            header: false,
                            store: 'WinItemPopStore',
                            viewConfig: {
                                enableTextSelection: true
                            },
                            columns: [
                                {
                                    xtype: 'rownumberer',
                                    width: 40
                                },
                                {
                                    xtype: 'gridcolumn',
                                    hidden: true,
                                    dataIndex: 'V_TYPE',
                                    text: 'V_TYPE'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'text-align: center; font-weight: bold;',
                                    width: 118,
                                    sortable: true,
                                    dataIndex: 'W_ITEM_CD',
                                    text: '품목코드'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    style: 'text-align: center; font-weight: bold;',
                                    width: 198,
                                    sortable: true,
                                    dataIndex: 'W_ITEM_NM',
                                    text: '품목명'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    margins: '',
                    height: 30,
                    margin: '3 0 0 0',
                    maxHeight: 30,
                    minHeight: 30,
                    layout: {
                        type: 'vbox',
                        align: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            height: 30,
                            id: 'itemSelBtn',
                            maxHeight: 30,
                            minHeight: 30,
                            width: 100,
                            text: '조회'
                        }
                    ]
                }
            ]
        }
    ]

});