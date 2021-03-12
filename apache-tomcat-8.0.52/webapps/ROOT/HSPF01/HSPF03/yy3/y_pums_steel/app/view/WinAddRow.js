/*
 * File: app/view/WinAddRow.js
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

Ext.define('Y_PUMS_STEEL.view.WinAddRow', {
    extend: 'Ext.window.Window',
    alias: 'widget.winaddrow',

    requires: [
        'Y_PUMS_STEEL.view.WinAddRowViewModel',
        'Ext.container.Container',
        'Ext.form.field.Number',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winaddrow'
    },
    modal: true,
    height: 136,
    width: 240,
    layout: 'center',
    title: '',

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
                    flex: 1,
                    id: 'rowCount',
                    maxWidth: 200,
                    minWidth: 200,
                    width: 200,
                    fieldLabel: '추가 할 행개수',
                    minValue: 1,
                    bind: {
                        value: '1'
                    }
                },
                {
                    xtype: 'button',
                    flex: 1,
                    flex: 1,
                    height: 30,
                    itemId: 'mybutton4',
                    maxHeight: 30,
                    maxWidth: 100,
                    minHeight: 30,
                    minWidth: 100,
                    width: 100,
                    text: '확인'
                }
            ]
        }
    ]

});