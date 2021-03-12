/*
 * File: app/view/MyGrid1.js
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

Ext.define('S_TAX_DISTR.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid1',

    requires: [
        'S_TAX_DISTR.view.MyGrid1ViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'mygridpanel11'
    },
    style: 'border: 1px solid lightgray; padding: 5px;',
    bodyBorder: false,
    header: false,
    title: 'My Grid Panel',
    store: 'MyStore1',
    id: 'myGrid1',
    config: {
        tbar: [
			{
			    id: 'gridAddBtn',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf055@FontAwesome',
			    iconCls: 'grid-add-btn',
			    disabled: true
			},
			{
			    id: 'gridDelBtn',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf056@FontAwesome',
			    iconCls: 'grid-del-btn',
				},
				{
					   xtype: 'button',
					   id: 'cfmBtn',
					   text: '세금계산서등록',
				    	style: 'background-color: white; border: 0.5px solid #3367d6;',
				    	cls: 'blue-btn',
				},
               {
                   xtype: 'container',
                   flex: 1
               },
               {
            	   xtype: 'textfield',
            	   id: 'V_TEMP_GL_NO',
            	   margin: '0 3 0 0',
            	   width: 150,
            	   emptyText: '전표번호',
            	   editable: false
               },
               {
             	   xtype: 'button',
             	   id: 'tempGlCfmBtn',
             	   margin: '0 3 0 0',
             	   text: 'ERP전표생성',
             	   style: 'background-color: white; border: 0.5px solid #3367d6;',
             	   cls: 'blue-btn',
             	   listeners: {
             		   mouseover: function(button, e, eOpts) {
             		        var theTip = Ext.create('Ext.tip.ToolTip', {
             		            html: 'ERP 결의전표 생성',
             		            target: 'tempGlCfmBtn',
             		            showDelay: 0,
             		            mouseOffset:[5,5],
             		            trackMouse: true,
             		            shadow: false
             		        });
             		    }
             	   },
//             	   disabled: true
                },
                {
             	   xtype: 'button',
             	   id: 'tempGlCancelBtn',
             	   margin: '0 3 0 0',
             	   text: 'ERP전표취소',
             	   style: 'background-color: white; border: 0.5px solid #3367d6;',
             	   cls: 'blue-btn',
             	   listeners: {
             		   mouseover: function(button, e, eOpts) {
             		        var theTip = Ext.create('Ext.tip.ToolTip', {
             		            html: 'ERP 결의전표 삭제',
             		            target: 'tempGlCancelBtn',
             		            showDelay: 0,
             		            mouseOffset:[5,5],
             		            trackMouse: true,
             		            shadow: false
             		        });
             		    }
             	   },
                },
                {
                	xtype: 'button',
                	id: 'taxBillBtn',
                	margin: '0 3 0 0',
                	text: '세금계산서',
                	style: 'background-color: white; border: 0.5px solid #3367d6;',
                	cls: 'blue-btn',
//             	   disabled: true
                },
               {
                   xtype: 'button',
                   glyph: 'xf1c3@FontAwesome',
                   id: 'xlsxDown1',
                   cfg: {
                       type: 'excel07',
                       ext: 'xlsx'
                   },
                   iconCls: 'grid-excel-btn',
               }
           ]
    },
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'V_TYPE',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'COST_CD',
            text: '코스트센터'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'string',
            text: '코스트센터명',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'ITEM_CD',
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_BOX_QTY',
            text: '매출BOX수량',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BILL_QTY',
            text: '매출확정계근중량',
            format: '0,000.00',
            width: 120,
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BILL_PRC',
            text: '매출단가'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BILL_LOC_AMT',
            text: '매출금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'VAT_AMT',
            text: '부가세금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'VAT_TYPE',
        	text: '부가세유형',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'VAT_TYPE_NM',
            text: '부가세유형'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'VAT_RATE',
            text: '부가세율'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'BILL_NO',
            text: '매출채권번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'BILL_SEQ',
            text: '매출채권순번',
            aiign: 'right'
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
            ptype: 'cellediting'
        }
    ],
    features: [
               {
            	   ftype: 'summary',
                   dock: 'bottom'
               }
            ],

});