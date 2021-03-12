/*
 * File: app/view/WinGrDn.js
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

Ext.define('SUPP_DLV_TOT_HSPF.view.WinGrDn', {
    extend: 'Ext.window.Window',
    alias: 'widget.wingrdn',

    requires: [
        'SUPP_DLV_TOT_HSPF.view.WinGrDnViewModel',
        'Ext.container.Container',
        'Ext.form.field.Date',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'wingrdn'
    },
    modal: true,
    height: 290,
    width: 395,
    layout: 'center',
    title: '',
    id: 'WinGrDn',

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'datefield',
                    flex: 1,
                    id: 'V_GR_DT',
                    fieldLabel: '입고일',
                    labelWidth: 130,
                    listeners : {
                        render : function(datefield) {
                        	var nows = new Date();
                            datefield.setValue(nows);
                        }	
                    },
                    format: 'Y-m-d'
                },
                {
                    xtype: 'datefield',
                    flex: 1,
                    id: 'V_DN_DT',
                    fieldLabel: '출고일',
                    labelWidth: 130,
                    listeners : {
                        render : function(datefield) {
                        	var nows = new Date();
                            datefield.setValue(nows);
                        }	
                    },
                    format: 'Y-m-d'
                },
                {
                    xtype: 'textfield',
                    flex: 1,
                    id: 'V_DD_NO',
                    fieldLabel: '출고지시번호(DD)',
                    labelWidth: 130
                },
                {
                    xtype: 'label',
                    flex: 1,
                    width: 307,
                    text: '출고의 경우 반드시 출고지시번호(DD)를 입력하세요.'
                },
                {
                	xtype: 'label',
                	flex: 1,
                	width: 307,
                	text: '(취소는 PDA로 해야합니다)'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    height: 30,
                    id: 'ww_btn',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '확인'
                }
            ]
        }
    ]

});