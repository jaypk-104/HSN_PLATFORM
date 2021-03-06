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

Ext.define('B_STORAGE_LOCATION_HSPF.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'B_STORAGE_LOCATION_HSPF.view.MyViewportViewModel',
        'B_STORAGE_LOCATION_HSPF.view.TbButton',
        'B_STORAGE_LOCATION_HSPF.view.MySearchForm',
        'B_STORAGE_LOCATION_HSPF.view.MySearchForm1',
        'B_STORAGE_LOCATION_HSPF.view.MySearchForm2',
        'B_STORAGE_LOCATION_HSPF.view.MyGrid',
        'B_STORAGE_LOCATION_HSPF.view.MyGrid1',
        'B_STORAGE_LOCATION_HSPF.view.MyGrid2',
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
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 0.25,
                    items: [
                        {
                            xtype: 'mysearchform',
                            layout: 'auto'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.35,
                    items: [
                        {
                            xtype: 'mysearchform1',
                            layout: 'auto'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.35,
                    margin: '0 10 0 0',
                    items: [
                        {
                            xtype: 'mysearchform2'
                        }
                    ]
                }
            ]
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
                    flex: 0.25,
                    margin: '0 10 0 0',
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
                                    xtype: 'myGrid'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 0.35,
                    margin: '0 10 0 0',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            margin: '0 0 10 0',
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
                },
                {
                    xtype: 'container',
                    flex: 0.35,
                    margin: '',
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
                                    xtype: 'mygrid2'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});