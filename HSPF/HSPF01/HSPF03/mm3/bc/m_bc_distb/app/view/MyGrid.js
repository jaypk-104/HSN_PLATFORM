/*
 * File: app/view/MyGrid.js
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

Ext.define('M_BC_DISTB.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_BC_DISTB.view.MyGridViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.column.Date'
    ],

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
                disabled: true
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
            },
        ]
    },

    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore',

    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'PO_NO',
            enableTextSelection: true,
            text: '발주번호',
            width: 170,
            hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PO_SEQ',
        	enableTextSelection: true,
        	text: '발주순번',
        	width: 85,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'LC_DOC_NO',
            enableTextSelection: true,
            text: 'L/C번호',
            width: 170
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	text: 'BL번호',
        	enableTextSelection: true,
        	dataIndex: 'BL_DOC_NO',
        	width: 170,
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	text: 'BL관리번호',
        	enableTextSelection: true,
        	dataIndex: 'BL_NO',
    		width: 150,
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	text: '순번',
        	enableTextSelection: true,
        	dataIndex: 'BL_SEQ',
        	align: 'right',
        	width: 85
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	dataIndex: 'M_BP_CD',
        	enableTextSelection: true,
        	text: 'M_BP_CD',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            dataIndex: 'M_BP_NM',
            enableTextSelection: true,
            text: '매입처',
            width: 200
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	dataIndex: 'S_BP_NM',
        	enableTextSelection: true,
        	text: '매출처',
        	width: 200
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	dataIndex: 'APPROV_NM',
        	enableTextSelection: true,
        	text: '품의명',
        	width: 350
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'CONT_NO',
            enableTextSelection: true,
            text: '컨테이너번호',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'ITEM_CD',
            style: 'text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'ITEM_NM',
            style: 'text-align: center; font-weight: bold;',
            sortable: true,
            enableTextSelection: true,
            text: '품목명',
            width: 200
        },
        {
        	xtype: 'numbercolumn',
        	style: 'text-align: center; font-weight: bold;',
        	text: '컨테이너수량',
        	format: '0,000.00',
        	dataIndex: 'CONT_QTY',
        	align: 'end',
        	hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            text: 'BOX수량',
            format: '0,000',
            dataIndex: 'BOX_QTY',
            align: 'end',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '단위중량',
            format: '0,000.00',
            dataIndex: 'BOX_WGT_UNIT',
            align: 'end'
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '총중량',
            format: '0,000.00',
            dataIndex: 'QTY',
            align: 'end',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
        },
        {
        	xtype: 'numbercolumn',
        	style: 'text-align: center; font-weight: bold;',
        	text: '환율',
        	format: '0,000.00',
        	align: 'end',
        	dataIndex: 'XCH_RATE',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	},
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '외화금액',
            format: '0,000.00',
            align: 'end',
            dataIndex: 'DOC_AMT',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
        	width: 130
        },
        {
        	xtype: 'numbercolumn',
        	style: 'text-align: center; font-weight: bold;',
        	text: '원화금액',
        	format: '0,000',
        	align: 'end',
        	dataIndex: 'LOC_AMT',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
        	},
        	width: 130
        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '선적일',
            dataIndex: 'LOADING_DT',
            format: 'Y-m-d',
            align: 'center'
        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            text: '입항일',
            dataIndex: 'INBOARD_DT',
            format: 'Y-m-d',
            align: 'center',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d',
            },
        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            text: 'FREE TIME',
            dataIndex: 'FR_TIME',
            format: 'Y-m-d',
            align: 'center',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            text: '창고',
            width: 140,
            dataIndex: 'SL_CD',
            editor: {
        		xtype: 'combobox',
        		editable: false,
        		displayField: 'DTL_NM',
        		autoLoadOnValue: true,
        		valueField: 'DTL_CD',
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'sl_combo',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
        		            	V_MAST_CD: 'SL_DISTR',
        		            	V_GRID: 'Y'
        		           },	
        		           api: {
        		               read: '/HSPF01/common/sql/Combobox.jsp'
        		           },
        		           reader: {
        		               type: 'json',
        		               rootProperty: 'resultList'
        		           }
        		       }
        		})
        	},
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(Ext.data.StoreManager.lookup('sl_combo').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('sl_combo').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
        },
        {
        	xtype: 'datecolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	text: '창고입고일',
        	dataIndex: 'IN_DT',
        	format: 'Y-m-d',
        	align: 'center',
        	editor: {
        		xtype: 'datefield',
        		format: 'Y-m-d',
        	},
//        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	text: '보유일',
        	dataIndex: 'OWN_DT',
        	align: 'right',
//        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'CY_NO',
        	enableTextSelection: true,
        	text: 'CY_NO',
        	width: 150,
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'CY_SEQ',
        	enableTextSelection: true,
        	text: 'CY_SEQ',
        	align: 'right',
        	hidden: true
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
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
            listeners: {
            	beforeedit: function(editor, context, eOpts) {
            		var selModel= Ext.getCmp('myGrid').getSelectionModel();
            		var store = Ext.getStore('MyStore');
            		
            		selModel.select(context.record, true);
            		//동일 CY_NO의 경우 전체선택
//            		store.each(function(record, idx) {
//            			if((context.record.data.CY_NO != undefined) && (context.record.data.CY_NO == record.get('CY_NO'))) {
//            			}
//            		});
            		
            		
//            		if(context.column.dataIndex == 'INBOARD_DT' && context.record.data.INBOARD_DT == undefined) {
//            			context.record.set(context.column.dataIndex, new Date());
//            			selModel.select(context.record, true);
//            		}  
//            		else if(context.column.dataIndex == 'IN_DT' && context.record.data.IN_DT == undefined) {
//            			context.record.set(context.column.dataIndex, new Date());
//            			selModel.select(context.record, true);
//            		}
//            		else if (context.column.dataIndex == 'INBOARD_DT' || context.column.dataIndex == 'FR_TIME' || context.column.dataIndex == 'IN_DT' || context.column.dataIndex == 'SL_CD') {
//            			selModel.select(context.record, true);
//            		}
            	},
//            	edit: function(editor, context, eOpts) {
//            		var INBOARD_DT = context.record.data.INBOARD_DT;
//            		var FR_TIME = context.record.data.FR_TIME;
//            		var IN_DT = context.record.data.IN_DT;
//            		var SL_CD = context.record.data.SL_CD;
//            		
//            		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
//            		for(var i=0; i<gridRecord.length; i++) {
//            			if(context.column.dataIndex == 'INBOARD_DT') {
//            				gridRecord[i].set('INBOARD_DT', INBOARD_DT);
//            			}
//            			if(context.column.dataIndex == 'FR_TIME') {
//            				gridRecord[i].set('FR_TIME', FR_TIME);
//            			}
//            			if(context.column.dataIndex == 'IN_DT') {
//            				gridRecord[i].set('IN_DT', IN_DT);
//            			}
//            			if(context.column.dataIndex == 'SL_CD') {
//            				gridRecord[i].set('SL_CD', SL_CD);
//            			}
//            		}
//            	}
            }
        }
    ],
	features : [ {
		ftype : 'summary'
	} ],
    viewConfig: {
    	enableTextSelection: true,
    },

});