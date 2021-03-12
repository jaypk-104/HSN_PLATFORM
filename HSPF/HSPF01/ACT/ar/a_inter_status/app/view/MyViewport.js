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

Ext.define('A_INTER_STATUS.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'A_INTER_STATUS.view.MyViewportViewModel',
        'A_INTER_STATUS.view.TbButton',
        'A_INTER_STATUS.view.MyForm',
        'Ext.toolbar.Toolbar',
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
            xtype: 'toolbarBtn',
            margin: '5 0 0 0'
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
                        },
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
                                    title: '수금 기준'
                                },
                                {
                                    xtype: 'mypanel1',
                                    title: '재고 기준'
                                },
//                                {
//                                    xtype: 'mypanel2',
//                                    title: '부서/거래처 기준'
//                                },
                            ]
                        },
//                        {
//        					xtype : 'splitter',
//        					collapseTarget : 'prev'
//        				},
//                        {
//                            xtype: 'tabpanel',
//                            flex: 1,
//                            margin: '5 0 0 0 ',
//                            overlapHeader: false,
//                            activeTab: 0,
//                            id: 'myTab1',
//                            items: [
//                                {
//                                    xtype: 'mypanel2',
//                                    title: '채권기준조회'
//                                },
//                                {
//                                    xtype: 'mypanel3',
//                                    title: '미정리예금기준'
//                                },
//                            ]
//                        },
                    ]
                },
            ]
        }
    ]

});