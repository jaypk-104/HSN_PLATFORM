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

Ext.define('CUS_DN_DAILY.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'CUS_DN_DAILY.view.MyViewportViewModel',
        'CUS_DN_DAILY.view.TbButton',
        'CUS_DN_DAILY.view.MyForm',
        'CUS_DN_DAILY.view.MyGrid',
        'Ext.form.Panel',
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
            xtype: 'toolbarBtn'
        },
        {
            xtype: 'container',
            flex: 1,
            padding: '0 10 0 10',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'container',
                    flex: 0.5,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'myform',
                            bodyPadding: 0
                        },
                        {
                            xtype: 'myGrid',
                            flex: 1
                        }
                    ]
                }
            ]
        }
    ]

});