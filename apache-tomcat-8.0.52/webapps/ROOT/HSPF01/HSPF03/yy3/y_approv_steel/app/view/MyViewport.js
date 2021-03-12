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

Ext.define('Y_APPROV_STEEL.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'Y_APPROV_STEEL.view.MyViewportViewModel',
        'Y_APPROV_STEEL.view.TbButton',
        'Y_APPROV_STEEL.view.MyPanel',
        'Y_APPROV_STEEL.view.MyPanel1',
        'Y_APPROV_STEEL.view.MyPanel2',
        'Y_APPROV_STEEL.view.MyPanel3',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
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
                    xtype: 'tabpanel',
                    flex: 1,
                    margin: '5 0 0 0 ',
                    overlapHeader: false,
                    activeTab: 0,
                    id: 'myTab',
                    items: [
                        {
                            xtype: 'mypanel',
                            title: '품의정보등록'
                        },
                        {
                            xtype: 'mypanel11',
                            title: '품의정보조회'
                        },
                        {
                            xtype: 'mypanel2',
                            title: '거래예정일/형태/대금결제방식'
                        },
                        {
                            xtype: 'mypanel3',
                            title: '채권보전'
                        }
                    ]
                }
            ]
        }
    ]

});