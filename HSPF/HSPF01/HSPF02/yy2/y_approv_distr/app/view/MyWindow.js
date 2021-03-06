/*
 * File: app/view/MyWindow.js
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

Ext.define('Y_APPROV_DISTR.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'Y_APPROV_DISTR.view.MyWindowViewModel',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'mywindow'
    },
    id: 'MeatPop',
    height: 548,
    width: 637,
    title: '품목분류정보',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    modal: true,
    dockedItems: [
        {
            xtype: 'container',
            dock: 'top',
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            width: 100,
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            items: [
                {
                	xtype: 'textfield',
                	flex: 1,
                	id: 'V_SM_NM',
                	maxWidth: 230,
                	minWidth: 230,
                	width: 230,
                	fieldLabel: '소분류명',
                	labelAlign: 'right',
                	labelWidth: 80,
                	name: 'meat_search'
                }, 
                {
                	xtype: 'combobox',
            		displayField: 'DTL_NM',
            		autoLoadOnValue: true,
            		valueField: 'DTL_CD',
            		id: 'V_BF_TYPE',
            		fieldLabel: '축종',
                	labelAlign: 'right',
                	labelWidth: 80,
            		editable: false,
                	maxWidth: 230,
                	minWidth: 230,
                	width: 230,
            		store: Ext.create('Ext.data.Store',{
            			autoLoad: true,
            			storeId: 'storeaw',
            			proxy: {
            		           type: 'ajax',
            		           extraParams: {
            		            	V_MAST_CD: 'BA11',
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
            		listConfig: {
                        itemTpl: [
                            '<div>{DTL_NM} ({DTL_CD})</div>'
                        ]
                    },
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            header: false,
            title: 'My Grid Panel',
            id: 'meatGrid',
            store: 'MeatStore',
            columns: [
                {
                    xtype: 'rownumberer'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'SM_NM',
                    text: '소분류명',
                	width: 200
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'BF_TYPE',
                    text: '축종',
                    hidden: true
                },
                {
                	xtype: 'gridcolumn',
                	style: 'font-size: 12px; text-align: center; font-weight: bold;',
                	dataIndex: 'BF_NM',
                	text: '축종'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'PART_CODE',
                    text: '부위코드'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'LG_TYPE',
                    text: '대분류'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'LG_NM',
                    text: '대분류명'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'SM_TYPE',
                    text: '소분류',
                },
            ]
        },
        {
            xtype: 'container',
            height: 50,
            maxHeight: 50,
            minHeight: 50,
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    id: 'w_selBtn',
                    maxWidth: 100,
                    minWidth: 100,
                    width: 100,
                    text: '조회'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    margins: '0 0 0 3',
                    id: 'w_regBtn',
                    margin: '0 0 0 3',
                    maxWidth: 100,
                    minWidth: 100,
                    width: 100,
                    text: '선택'
                }
            ]
        }
    ]

});