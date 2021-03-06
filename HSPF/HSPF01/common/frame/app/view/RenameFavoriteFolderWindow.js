/*
 * File: app/view/MyWindow1.js
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

Ext.define('frame.view.RenameFavoriteFolderWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.renamefavoritefolderwindow',

    requires: [
        'frame.view.RenameFavoriteFolderWindowViewModel',
        'Ext.container.Container',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'renamefavoritefolderwindow'
    },
    id: 'renamefavoritefolderwindow',
    modal: true,
    autoShow: true,
    height: 100,
    width: 400,
    title: '즐겨찾기 폴더 이름 변경',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            flex: 1,
            layout: 'center',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Label',
                            id: 'V_FAVORITE_FOLD_NM',
                            hideLabel: true
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Label',
                            id: 'V_RENAME_FOLD_IDX',
                            readonly: true,
                            hideLabel: true
                        },
                        {
                            xtype: 'button',
                            id:'renameFavoriteFoldBtn',
                            text: ' 확인'
                        }
                    ]
                }
            ]
        }
    ]

});