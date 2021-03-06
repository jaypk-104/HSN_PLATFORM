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

Ext.define('S_REQ_DN_CHG.view.WinDiv', {
    extend: 'Ext.window.Window',
    alias: 'widget.winaddrow',

    requires: [
        'S_REQ_DN_CHG.view.WinDivViewModel',
        'Ext.container.Container',
        'Ext.Img',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winaddrow'
    },
    modal: true,
    height: 136,
    width: 240,
    layout: 'center',
    title: '미구현 상태',
    id: 'WinAddRow',
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'numberfield',
                    id: 'divQty',
                    maxWidth: 200,
                    minWidth: 200,
                    width: 200,
                    fieldLabel: '분할 수량',
                    minValue: 1
                },
                {
                    xtype: 'button',
                    flex: 1,
                    height: 30,
                    id: 'divCfmBtn',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '확인'
                }
            ]
        }
    ]

});