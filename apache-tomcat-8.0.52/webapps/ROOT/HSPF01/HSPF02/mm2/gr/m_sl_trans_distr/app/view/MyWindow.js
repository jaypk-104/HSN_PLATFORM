/*
 * File: app/view/MyWindow.js
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

Ext.define('M_SL_TRANS_DISTR.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'M_SL_TRANS_DISTR.view.MyWindowViewModel',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Number'
    ],

    viewModel: {
        type: 'mywindow'
    },
    height: 250,
    width: 928,
    layout: 'fit',
    title: '입고기준출고상세',

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            header: false,
            title: 'My Grid Panel',
            columns: [
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'string',
                    text: '품목코드'
                },
                {
                    xtype: 'gridcolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    dataIndex: 'string',
                    text: '품목명'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: 'L/C오픈비'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: 'AMEND비'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '기타경비'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '보험료'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '통관료'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '관세'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '인수수수료'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '기타경비'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '경비합계'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '창고료'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '이자금액'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '항운노조비'
                },
                {
                    xtype: 'numbercolumn',
                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    align: 'end',
                    text: '판매경비합계'
                }
            ]
        }
    ]

});