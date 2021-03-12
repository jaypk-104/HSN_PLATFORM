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

Ext.define('M_FORWARD_EXCHANGE_REQ_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_FORWARD_EXCHANGE_REQ_HSPF.view.MyGridViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],
    config: {
        tbar: [
            {
                id: 'gridAddBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn',
//                hidden: true
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn',
//                hidden: true
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
            }
        ]
    },
    viewModel: {
        type: 'mygrid'
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
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'V_TYPE',
        	text: 'V_TYPE',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'REQ_NO',
        	text: 'REQ_NO',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'LC_DOC_NO',
            text: '신용장번호',
            width: 180,
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'LC_NO',
        	text: '신용장번호',
        	hidden: true,
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'BL_DOC_NO',
            text: 'B/L번호',
            width: 180,
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'BL_NO',
        	text: 'B/L번호',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'DEPT_NM',
        	text: '부서',
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'DEPT_CD',
        	text: '부서',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'S_BP_NM',
        	text: '매출처',
        	width: 250,
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'S_BP_CD',
        	text: '매출처',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'SALE_TYPE_NM',
        	text: '판매구분',
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'SALE_TYPE_CD',
        	text: '판매구분',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            width: 180,
            dataIndex: 'BANK_CD',
            text: '은행',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(Ext.data.StoreManager.lookup('storeBK').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('storeBK').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
            exportRenderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(Ext.data.StoreManager.lookup('storeBK').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('storeBK').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
            editor: {
        		xtype: 'combobox',
        		displayField: 'DTL_NM',
        		autoLoadOnValue: true,
        		valueField: 'DTL_CD',
        		editable: false,
        		matchFieldWidth: false,
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'storeBK',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
        		        	   V_MAST_CD: 'BANK',
//        		            	V_MAST_CD: 'BA05',
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
        		}),
        		listConfig: {
                    itemTpl: [
                        '<div>{DTL_NM} ({DTL_CD})</div>'
                    ]
                },
        	}
        }, 
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'CUR',
        	text: '통화',
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6;',
        	align: 'end',
        	dataIndex: 'DOC_AMT',
        	text: '인수금액',
        	editor: {
        		xtype: 'numberfield'
        	},
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            text: '확정만기',
            dataIndex: 'DUE_DT',
            format: 'Y-m-d',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d',
                altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
            },
            sortable: false
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
        	dataIndex: 'REMARK',
        	text: '비고',
        	editor: {
        		xtype: 'textfield'
        	},
        	sortable: false,
        	width: 150
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            text: '가입요청일',
            dataIndex: 'REQ_DT',
            format: 'Y-m-d',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d',
                altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
            },
            sortable: false
        },
        
    ],
    viewConfig: {
    	enableTextSelection: true,
    },
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
    			record.set('V_TYPE', 'V');
    			
            },
            deselect: function(rowmodel, record, index, eOpts) {
    			record.set('V_TYPE', '');
    			
            },
            onCellEditingEdit: function(editor, context, eOpts) {
            	var selModel= Ext.getCmp('grid').getSelectionModel()
            	selModel.select(context.record, true);
            }
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting',
            clicksToEdit: 1,
            listeners: {
                edit: function(editor, context, eOpts) {
					var selModel= Ext.getCmp('myGrid').getSelectionModel();
					selModel.select(context.record, true);
                }
            }
        }
    ],
	features : [ {
		ftype: 'summary',
        dock: 'bottom'
	} ],

});