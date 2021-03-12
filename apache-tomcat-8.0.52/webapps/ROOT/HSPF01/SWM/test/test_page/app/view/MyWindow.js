/*
 * File: app/view/MyWindow.js
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

Ext.define('Common.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'Common.view.MyWindowViewModel',
        'Common.view.TbButton1',
        'Common.view.MySearchForm2',
        'Common.view.MyGrid2',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.grid.Panel'
    ],

    viewModel: {
        type: 'mywindow'
    },
    modal: true,
    flex: 1,
    height: 600,
    width: 900,
    title: 'Popup',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'tbbutton1'
                }
            ]
        },
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'mysearchform2'
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            padding: '0 10 0 10 ',
            layout: 'hbox',
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    height: 350,
                    style: 'background-color: white;',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'mygrid2',
                            margin: '-15 -15 0 -15',
                            style: 'padding: 10px;'
                        }
                    ]
                }
            ]
        }
    ]

});