/*
 * File: app/view/TbButton.js
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

Ext.define('M_CHARGE_OUT_DISTR_SAMHYUN.view.TbButton', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.toolbarBtn',

    requires: [
        'M_CHARGE_OUT_DISTR_SAMHYUN.view.TbButtonViewModel',
        'Ext.container.Container',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'toolbar_btn'
    },

    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'button',
                    id: 'selBtn',
                    margin: '0 3 0 0',
                    maxWidth: 80,
                    minWidth: 80,
                    width: 80,
                    glyph: 'xf002@FontAwesome',
                    text: '조회'
                },
                {
                    xtype: 'button',
                    id: 'saveBtn',
                    margin: '0 3 0 0',
                    maxWidth: 80,
                    minWidth: 80,
                    width: 80,
                    glyph: 'xf0c7@FontAwesome',
                    text: '저장'
                },
                {
                    xtype: 'button',
                    disabled: true,
                    id: 'delBtn',
                    margin: '0 3 0 0 ',
                    maxWidth: 80,
                    minWidth: 80,
                    width: 80,
                    glyph: 'xf014@FontAwesome',
                    text: '삭제'
                },
                {
                    xtype: 'button',
                    id: 'clsBtn',
                    margin: '0 3 0 0',
                    maxWidth: 80,
                    minWidth: 80,
                    width: 80,
                    glyph: 'xf00d@FontAwesome',
                    text: '닫기'
                },
                {
                    xtype: 'button',
                    id: 'cleanBtn',
                    margin: '0 3 0 0',
                    glyph: 'xf15b@FontAwesome',
                    text: '새문서'
                },
                {
                    xtype: 'button',
                    id: 'printBtn',
                    margin: '0 3 0 0',
                    glyph: 'xf02f@FontAwesome',
                    text: '명세서출력'
                }
            ]
        }
    ]

});