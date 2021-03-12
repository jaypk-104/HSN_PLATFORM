/*
 * File: app/view/MyPanel.js
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

Ext.define('A_AR_RECEIPT2.view.MyPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel',

    requires: [
        'A_AR_RECEIPT2.view.MyPanelViewModel',
        'Ext.grid.Panel',
        'Ext.form.FieldSet', 
		'Ext.form.FieldContainer', 
		'Ext.form.field.Date',
		'Ext.form.field.Text',
		'Ext.form.field.TextArea',
		'Ext.form.field.Number',
    ],

    viewModel: {
        type: 'mypanel'
    },
    itemId: 'mypanel',
    layout: 'fit',
    header: false,
    title: 'Tab 1',

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
                    xtype: 'myform',
                    bodyPadding: 0
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    margin: '5 0 0 0 ',
                    overlapHeader: false,
                    activeTab: 0,
                    id: 'myTab2',
                    items: [
                        {
                            xtype: 'mypanel4',
                            title: '예금정보'
                        },
                        {
                            xtype: 'mypanel5',
                            title: '어음정보'
                        },
                    ]
                },
            ]
        }
    ]

});