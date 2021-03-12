/*
 * File: app/view/MyViewport.js
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

Ext.define('blhsna.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'blhsna.view.MyViewportViewModel',
        'blhsna.view.TbButton',
        'blhsna.view.MySearchForm',
        'blhsna.view.TbButton1',
        'blhsna.view.MyGrid',
        'blhsna.view.MyTabPanel',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.grid.Panel',
        'Ext.tab.Panel'
    ],

    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    style: 'background-color: white',
    width: 400,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'toolbarBtn',
            margin: '5 0 0 0'
        },
        {
            xtype: 'mysearchform',
            margin: '-5 0 0 0',
            padding: '',
            bodyPadding: '0 10 0 10',
            margins: ''
        },
        {
            xtype: 'tbbutton1'
        },
        {
            xtype: 'container',
            flex: 1,
            padding: '0 10 0 10',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            style: 'background-color: white;',
                            title: 'Result',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'myGrid',
                                    margin: '-15 -15 0 -15',
                                    style: 'padding: 10px;',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    padding: '0 10 0 10',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            style: 'background-color: white;',
                            title: 'Result',
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'mytabpanel',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});