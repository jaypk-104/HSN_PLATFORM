/*
 * File: app/view/TbButton3.js
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

Ext.define('SupDlvMgm.view.TbButton3', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.tbbutton3',

    requires: [
        'SupDlvMgm.view.TbButtonViewModel3',
        'Ext.container.Container',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'tbbutton3'
    },

    items: [
        {
            xtype: 'container',
            dock: 'right',
            flex: 1,
            margin: '0 10 0 10',
            items: [
                {
                    xtype: 'label',
                    margin: '0 10 0 0',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    text: '   (로트정보는 필수입력 값입니다. 유효일이 없으면 2999-12-31로 설정바랍니다)'
                }
            ]
        },
        {
            xtype: 'container',
            dock: 'right',
            items: [
                {
                    xtype: 'button',
                    id: 'GsaveBtn2',
                    margin: '0 3 0 0',
                    maxWidth: 100,
                    minWidth: 80,
                    width: 100,
                    glyph: 'xf0c7@FontAwesome',
                    text: '저장'
                }
            ]
        }
    ]

});