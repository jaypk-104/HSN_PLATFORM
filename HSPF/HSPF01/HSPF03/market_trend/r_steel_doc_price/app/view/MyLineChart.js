/*
 * File: app/view/MyLineChart.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
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

Ext.define('R_STEEL_DOC_PRICE2.view.MyLineChart', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.mylinechart',

    requires: [
        'R_STEEL_DOC_PRICE2.view.MyLineChartViewModel',
        'Ext.chart.axis.Category',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],

    viewModel: {
        type: 'mylinechart'
    },
    height: 250,
    width: 400,
    colors: [
        '#115fa6',
        '#94ae0a',
        '#a61120',
        '#ff8809',
        '#ffd13e',
        '#a61187',
        '#24ad9a',
        '#7c7474',
        '#a66111'
    ],

    axes: [
        {
            type: 'category',
            fields: [
                'x'
            ],
            position: 'bottom'
        },
        {
            type: 'numeric',
            fields: [
                'y1',
                'y2'
            ],
            grid: {
                odd: {
                    fill: '#e8e8e8'
                }
            },
            position: 'left'
        }
    ],
    series: [
        {
            type: 'line',
            xField: 'x'
        },
        {
            type: 'line',
            colors: [
                '#115fa6',
                '#94ae0a',
                '#a61120',
                '#ff8809',
                '#ffd13e',
                '#a61187',
                '#24ad9a',
                '#7c7474',
                '#a66111'
            ],
            xField: 'x'
        }
    ],
    interactions: [
        {
            type: 'panzoom'
        }
    ]

});