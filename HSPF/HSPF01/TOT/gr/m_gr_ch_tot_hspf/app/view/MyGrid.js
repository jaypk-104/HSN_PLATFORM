/*
 * File: app/view/MyGrid.js
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

Ext.define('M_GR_CH_TOT_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_GR_CH_TOT_HSPF.view.MyGridViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.filters.Filters'
    ],

    config: {
        tbar: [
            {
            	id: 'distBtn',
            	text: '경비배분',
            	margin: '0 3 0 0',
            	 cls: 'blue-btn',
                 style: 'background-color: white; border: 0.5px solid #3367d6;',
            },
            {
            	id: 'printItemBtn',
            	text: '미착상품현황출력',
            	margin: '0 3 0 0',
            	cls: 'blue-btn',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            },
            {
            	id: 'glCfmBtn',
            	text: '전표생성',
            	margin: '0 3 0 0',
            	cls: 'blue-btn',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            },
            {
            	id: 'glPrintBtn',
            	text: '전표출력',
            	margin: '0 3 0 0',
            	cls: 'blue-btn',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            },
            {
            	id: 'glCfmCancelBtn',
            	text: '전표취소',
            	margin: '0 3 0 0',
            	cls: 'blue-btn',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'xlsxDown',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                iconCls: 'grid-excel-btn',
                margin: '0 3 0 0',
                
            }
        ]
    },

    viewModel: {
        type: 'mygrid'
    },
    viewConfig : {
		enableTextSelection : true,
	},
    
	id: 'myGrid',
    style: 'border: 1px solid lightgray; padding: 5px;',
    header: false,
    title: 'My Grid Panel',
    store: 'MyStore',
    
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'V_TYPE',
            text: 'V_TYPE',
            hidden : true,
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            dataIndex: 'ELEC_YN',
            text: '전자결재유무',
            align: 'center'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 160,
            dataIndex: 'LC_DOC_NO',
            text: 'L/C번호',
        	filter: { 
        		type : 'string',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 160,
            dataIndex: 'BL_DOC_NO',
            text: 'B/L번호',
        	filter: { 
        		type : 'string',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 160,
            dataIndex: 'GR_NO',
            text: '입고관리번호',
        	filter: { 
        		type : 'string',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            dataIndex: 'IV_TYPE_NM',
            text: '입고구분',
            align : 'center',
        	filter: { 
        		type : 'string',
            },
        },
        {
    		xtype : 'datecolumn',
    		dataIndex : 'MVMT_DT',
    		style : 'text-align: center; font-weight: bold;',
    		text : '입고일',
    		align : 'center',
    		format : 'Y-m-d',
    		width : 100,
        	filter: { 
        		type : 'date',
            },
    	},
        {
            xtype: 'numbercolumn',
            maxWidth: 130,
            minWidth: 130,
            style: 'text-align: center; font-weight: bold;',
            width: 130,
            align: 'end',
            dataIndex: 'LOC_AMT',
            text: '입고금액',
            format: '0,000',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
        },
        {
            xtype: 'numbercolumn',
            maxWidth: 130,
            minWidth: 130,
            style: 'text-align: center; font-weight: bold;',
            width: 130,
            align: 'end',
            dataIndex: 'DISTR_AMT',
            text: '부대경비',
            format: '0,000',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
        },
        {
            xtype: 'numbercolumn',
            maxWidth: 130,
            minWidth: 130,
            style: 'text-align: center; font-weight: bold;',
            width: 130,
            align: 'end',
            dataIndex: 'TOT_AMT',
            text: '합계금액',
            format: '0,000',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
        },
        {
            xtype: 'gridcolumn',
            maxWidth: 150,
            minWidth: 150,
            style: 'text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'TEMP_GL_NO',
            text: '전표번호',
        	filter: { 
        		type : 'string',
            },
        },
        {
        	xtype: 'gridcolumn',
        	maxWidth: 100,
        	minWidth: 100,
        	style: 'text-align: center; font-weight: bold;',
        	width: 100,
        	dataIndex: 'M_BP_CD',
        	text: '공급처코드',
        	filter: { 
        		type : 'string',
            },
        },
        {
        	xtype: 'gridcolumn',
        	maxWidth: 180,
        	minWidth: 180,
        	style: 'text-align: center; font-weight: bold;',
        	width: 180,
        	dataIndex: 'M_BP_NM',
        	text: '공급처명',
        	filter: { 
        		type : 'string',
            },
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', 'V');
            },
            deselect: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', '');
            }
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting',
            clicksToEdit : 1,
        },
        {
            ptype: 'gridfilters'
        }
    ],
	features : [ {
		ftype: 'summary',
		dock: 'bottom'
	} ],

});