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

Ext.define('B_BIZ_EMP.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'B_BIZ_EMP.view.MyViewportViewModel',
        'B_BIZ_EMP.view.TbButton',
        'B_BIZ_EMP.view.MySearchForm',
        'B_BIZ_EMP.view.MyGrid',
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
            xtype: 'mysearchform',
            margin: '-5 0 0 0',
            padding: '',
            bodyPadding: '0 10 0 10',
            margins: ''
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
                    layout: 'fit',
                    title: 'Result',
                    items: [
                        {
                            xtype: 'myGrid',
                            flex: 1,
                            margin: '-15 -15 0 -15',
                            style: 'padding: 10px;'
                        }
                    ]
                }
            ]
        }
    ]

});