/*
 * File: app/view/WinAddRow1.js
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

Ext.define('S_DN_REQ_HSPF.view.WinAddRow1', {
    extend: 'Ext.window.Window',
    alias: 'widget.winaddrow1',

    requires: [
        'S_DN_REQ_HSPF.view.WinAddRowViewModel1',
        'Ext.container.Container',
        'Ext.form.field.Number',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winaddrow1'
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
                    id: 'rowCount1',
                    maxWidth: 200,
                    minWidth: 200,
                    width: 200,
                    fieldLabel: '추가할 행 개수',
                    minValue: 1
                },
                {
                    xtype: 'button',
                    flex: 1,
                    height: 30,
                    id: 'addRowBtn1',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '확인'
                }
            ]
        }
    ]

});