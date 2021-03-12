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

Ext.define('A_AR_RECEIPT2.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'A_AR_RECEIPT2.view.MyViewportViewModel',
        'A_AR_RECEIPT2.view.MyViewportViewController',
        'A_AR_RECEIPT2.view.TbButton',
        'A_AR_RECEIPT2.view.MyForm',
        'A_AR_RECEIPT2.view.MyPanel',
        'A_AR_RECEIPT2.view.MyPanel1',
        'Ext.form.Panel',
        'Ext.grid.Panel'
    ],
    controller: 'myviewport',
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
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'tabpanel',
                            flex: 1,
                            margin: '5 0 0 0 ',
                            overlapHeader: false,
                            activeTab: 0,
                            id: 'myTab',
                            items: [
                                {
                                    xtype: 'mypanel',
                                    title: '미정리예금어음현황'
                                },
                                {
                                    xtype: 'mypanel1',
                                    title: '수금등록'
                                },
                            ]
                        },
                    ]
                }
            ]
        }
    ]

});