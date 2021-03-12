/*
 * File: app/view/WinAddRow.js
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

Ext.define('M_CHARGE_OUT_DISTR_SAMHYUN.view.WinAddRow', {
    extend: 'Ext.window.Window',
    alias: 'widget.winaddrow',

    requires: [
        'M_CHARGE_OUT_DISTR_SAMHYUN.view.WinAddRowViewModel',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel'
    ],

    viewModel: {
        type: 'winaddrow'
    },
    modal: true,
    height: 516,
    width: 471,
    bodyPadding: 5,
    title: '경비 세부항목 추가',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            layout: 'vbox',
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    height: 30,
                    id: 'W_D_selectBtn',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '조회'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Search',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    width: 400,
                    fieldLabel: 'Label',
                    hideLabel: true,
                    items: [
                        {
                            xtype: 'textfield',
                            cls: 'W_D_search',
                            id: 'W_D_CHARGE_NM',
                            fieldLabel: '비용명'
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
                    id: 'W_D_grid',
                    header: false,
                    title: 'My Grid Panel',
                    store: 'ChargeStore',
                    columns: [
                        {
                            xtype: 'rownumberer'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 110,
                            dataIndex: 'CHARGE_TYPE',
                            text: '비용코드'
                        },
                        {
                            xtype: 'gridcolumn',
                            width: 250,
                            dataIndex: 'CHARGE_NAME',
                            text: '비용명'
                        }
                    ],
                    viewConfig: {
                        enableTextSelection: true
                    },
                    selModel: {
                        selType: 'checkboxmodel'
                    }
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    height: 30,
                    id: 'W_D_addBtn',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '추가'
                }
            ]
        }
    ]

});