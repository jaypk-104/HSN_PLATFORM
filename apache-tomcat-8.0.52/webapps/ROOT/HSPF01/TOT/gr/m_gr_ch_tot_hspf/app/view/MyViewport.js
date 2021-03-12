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

Ext.define('M_GR_CH_TOT_HSPF.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'M_GR_CH_TOT_HSPF.view.MyViewportViewModel',
        'M_GR_CH_TOT_HSPF.view.TbButton',
        'M_GR_CH_TOT_HSPF.view.MyForm',
        'M_GR_CH_TOT_HSPF.view.MyGrid',
        'Ext.form.Panel',
        'Ext.grid.Panel',
        'Ext.resizer.Splitter'
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
            xtype: 'toolbarBtn'
        },
        {
            xtype: 'container',
            flex: 1,
            padding: '0 10 0 10',
            layout: 'fit',
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'myform'
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'myGrid',
                                    flex: 0.7
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'splitter',
                    collapseTarget: 'prev'
                },
                {
                    xtype: 'container',
                    flex: 0.5,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    }
                }
            ]
        }
    ]

});