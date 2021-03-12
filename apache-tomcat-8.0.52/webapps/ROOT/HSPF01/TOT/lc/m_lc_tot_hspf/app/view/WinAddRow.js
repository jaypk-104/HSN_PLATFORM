/*
 * File: app/view/WinAddRow.js
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

Ext.define('M_LC_TOT_HSPF.view.WinAddRow', {
    extend: 'Ext.window.Window',
    alias: 'widget.winaddrow',

    requires: [
        'M_LC_TOT_HSPF.view.WinAddRowViewModel',
        'Ext.container.Container',
        'Ext.form.field.Number',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'winaddrow'
    },
    modal: true,
    height: 136,
    resizable: false,
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
                    id: 'rowCount',
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
                    id: 'addRowBtn',
                    maxHeight: 30,
                    minHeight: 30,
                    width: 100,
                    text: '확인'
                }
            ]
        }
    ]

});