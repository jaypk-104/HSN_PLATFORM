/*
 * File: app/view/BpGrid.js
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

Ext.define('Popup.view.WinMBpGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.winmbpgrid',

    requires: [
        'Popup.view.WinMBpPopViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
    ],

    id: 'WinMBpGrid',
    style: 'border: 1px solid lightgray; padding: 5px; ',
    bodyBorder: false,
    header: false,
    store: 'WinMBpPopStore',

    viewConfig: {
        enableTextSelection: true
    },
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            dataIndex: 'V_TYPE',
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            id: 'W_G_M_BP_CD',
            style: 'text-align: center; font-weight: bold;',
            width: 118,
            sortable: true,
            dataIndex: 'M_BP_CD',
            text: '공급사코드'
        },
        {
            xtype: 'gridcolumn',
            id: 'W_G_M_BP_NM',
            style: 'text-align: center; font-weight: bold;',
            width: 198,
            sortable: true,
            dataIndex: 'M_BP_NM',
            text: '공급사명'
        }
    ]

});