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

Ext.define('M_TO_DN_PR_TOT_HSPF.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'M_TO_DN_PR_TOT_HSPF.view.MyViewportViewModel',
        'M_TO_DN_PR_TOT_HSPF.view.TbButton',
        'M_TO_DN_PR_TOT_HSPF.view.MyForm',
        'M_TO_DN_PR_TOT_HSPF.view.MyGrid',
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
            xtype: 'myform',
            margin: '-5 0 0 0',
            padding: '',
            bodyPadding: '0 10 0 10',
            margins: ''
        },
        {
            xtype: 'myGrid',
            flex: 1,
            style: 'border: 1px solid lightgray; padding: 5px;',
        }
    ]

});