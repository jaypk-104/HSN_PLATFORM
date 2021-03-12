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

Ext.define('M_SL_TRANS_STEEL.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'M_SL_TRANS_STEEL.view.MyViewportViewModel',
        'M_SL_TRANS_STEEL.view.TbButton',
        'M_SL_TRANS_STEEL.view.MyPanel',
        'M_SL_TRANS_STEEL.view.MyPanel1',
        'M_SL_TRANS_STEEL.view.MyPanel2',
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
                            title: '이고료등록'
                        },
                        {
                            xtype: 'mypanel11',
                            title: '창고비등록'
                        },
                        {
                            xtype: 'mypanel2'
                        }
                    ]
                }
            ]
        }
    ]

});