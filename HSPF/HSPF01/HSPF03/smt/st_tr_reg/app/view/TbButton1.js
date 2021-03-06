/*
 * File: app/view/TbButton1.js
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

Ext.define('st_tr_reg.view.TbButton1', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbbutton1',

    requires: [
        'st_tr_reg.view.TbButtonViewModel1',
        'Ext.container.Container',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'tbbutton1'
    },

    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'button',
                    id: 'saveBtn1',
                    margin: '0 3 0 0',
                    maxWidth: 150,
                    minWidth: 80,
                    style: 'font-size: 05px; text-align: center; font-weight: bold;',
                    width: 150,
                    glyph: 'xf0c7@FontAwesome',
                    text: '입출고 생성/취소'
                }
            ]
        }
    ]

});