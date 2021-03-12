/*
 * File: app/view/WinBpPop.js
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

Ext.define('Popup.view.WinBpPop', {
    extend: 'Ext.window.Window',
    alias: 'widget.winbppop',

    requires: [
        'Popup.view.WinBpPopViewModel',
        'Popup.view.WinBpGrid',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winbppop'
    },
    modal: true,
    height: 434,
    width: 422,
    layout: 'fit',
    bodyPadding: 5,
    title: '거래처조회',
    id: 'WinBpPop',

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
                            id: 'W_BP_CD',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '거래처코드',
                            labelWidth: 80,
                            name: 'search_field',
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margins: '',
                            id: 'W_BP_NM',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '거래처명',
                            labelAlign: 'right',
                            labelWidth: 80,
                            name: 'search_field',
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'winbpgrid'
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
                            id: 'bpSelBtn',
                            maxHeight: 30,
                            minHeight: 30,
                            width: 100,
                            text: '조회',
                            listeners: {
                            	click: function() {
//                            		var store = this.getWinBpPopStoreStore();
                            		var store = Ext.getStore('WinBpPopStore');
                            		store.removeAll();
                            		store.load({
                            			params : {
                            				V_TYPE : 'S',
                            				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                            				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            				W_ROLE_CD : Ext.getCmp('W_BP_CD').getValue(),
                            				W_BP_NM : Ext.getCmp('W_BP_NM').getValue()
                            			},
                            			callback : function(records, operations, success) {
                            			}
                            		});
                            	}
                            }
                        }, 
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margins: '',
                            id: 'fieldType',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            hidden: true
                        }
                    ]
                }
            ]
        }
    ]

});