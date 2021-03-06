/*
 * File: app/view/MyViewport.js
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

Ext.define('S_INV_HSPF.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'S_INV_HSPF.view.MyViewportViewModel',
        'S_INV_HSPF.view.TbButton',
        'S_INV_HSPF.view.MySearchForm',
        'S_INV_HSPF.view.MyGrid',
        'S_INV_HSPF.view.MyGrid1',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.grid.Panel'
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
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'mysearchform',
                            margin: '-5 0 0 0',
                            padding: '',
                            bodyPadding: '0 10 0 10',
                            margins: ''
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            margin: '',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: '0 0 0 10',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            flex: 1,
                                            style: 'background-color: white;',
                                            layout: 'fit',
                                            title: 'Result',
                                            items: [
                                                {
                                                    xtype: 'myGrid',
                                                    flex: 1
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    margin: '0 0 0 10',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'fieldset',
                                            flex: 1,
                                            style: 'background-color: white;',
                                            layout: 'fit',
                                            title: 'Result',
                                            items: [
                                                {
                                                    xtype: 'mygrid1'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});