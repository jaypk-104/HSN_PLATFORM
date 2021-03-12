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

Ext.define('S_DN_REQ_HSPF_NEW.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'S_DN_REQ_HSPF_NEW.view.MyGridViewModel',
        'S_DN_REQ_HSPF_NEW.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing'
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
            	id: 'poReqBtn',
            	text: '소재발주불러오기',
            	margin: '0 3 0 0',
            	style: 'background-color: white; border: 0.5px solid #3367d6;',
            	cls: 'blue-btn',
            	width: 140
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'datefield',
                id: 'V_DR_DT',
                maxWidth: 210,
                minWidth: 210,
                width: 210,
                fieldLabel: '출고요청일',
                labelWidth: 80,
            	margin: '0 3 0 0',
                format: 'Y-m-d',
                listeners : {
                    render : function(datefield) {
                    	var nows = new Date();
                        datefield.setValue(nows);
                    }	
                },
                hidden: true
            },
            {
                id: 'gridRequestBtn',
                text: '출고요청',
            	margin: '0 3 0 0',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
                width: 80,
                hidden: true
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

    controller: 'myGrid',
    viewModel: {
        type: 'myGrid'
    },
    id: 'myGrid',
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
			style: 'font-size: 12px; text-align: center; font-weight: bold;',
			text: '상태',
			dataIndex: 'FLG',
			width: 100,
			align: 'center',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'REQ_NO',
            enableTextSelection: true,
            text: '발주번호',
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 60,
            align: 'end',
            dataIndex: 'REQ_SEQ',
            enableTextSelection: true,
            text: '순번',
            format: '0,000',
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'REQ_DT',
            enableTextSelection: true,
            text: '발주일자',
            format: 'Y-m-d',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 110,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            sortable: true,
            dataIndex: 'BP_ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
        },
        {
			xtype: 'gridcolumn',
			style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
			text: '요청창고(TO)',
			dataIndex: 'SL_NM',
			width: 130,
			align: 'left',
		},
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'REQ_QTY',
            enableTextSelection: true,
            text: '발주수량(A)',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 110,
            align: 'end',
            dataIndex: 'PO_REMAIN_QTY',
            enableTextSelection: true,
            text: '발주잔량(A-B)',
            format: '0,000',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
		{
			xtype: 'numbercolumn',
			style: 'font-size: 12px; text-align: center; font-weight: bold; ',
			width: 100,
			align: 'end',
			dataIndex: 'DD_QTY',
			enableTextSelection: true,
			text: '출고지시수량',
		},
		{
			xtype: 'numbercolumn',
			style: 'font-size: 12px; text-align: center; font-weight: bold; ',
			width: 100,
			align: 'end',
			dataIndex: 'DN_QTY',
			enableTextSelection: true,
			text: '출고수량(B)',
		},
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center;  ',
        	text: '요청창고(TO)',
        	dataIndex: 'TO_SL_CD',
        	width: 130,
        	align: 'left',
        	hidden: true
//        	editor: {
//        		xtype: 'combobox',
//        		editable: false,
//        		displayField: 'DTL_NM',
//        		autoLoadOnValue: true,
//        		valueField: 'DTL_CD',
//        		store: Ext.create('Ext.data.Store',{
//        			autoLoad: true,
//        			storeId: 'sl_combo',
//        			proxy: {
//        		           type: 'ajax',
//        		           extraParams: {
//        		            	V_MAST_CD: 'SL_G',
//        		            	V_GRID: 'Y'
//        		           },	
//        		           api: {
//        		               read: '/HSPF01/common/sql/Combobox.jsp'
//        		           },
//        		           reader: {
//        		               type: 'json',
//        		               rootProperty: 'resultList'
//        		           }
//        		       }
//        		})
//        	},
//            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
//            	metaData.style = 'background-color: #D8F6CE';
//                if(Ext.data.StoreManager.lookup('sl_combo').findRecord('DTL_CD',value) !==null)
//                {
//                    return Ext.data.StoreManager.lookup('sl_combo').findRecord('DTL_CD',value).get('DTL_NM');
//                }
//                return value;
//            },
        },
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
    viewConfig: {
    	enableTextSelection: true,
      	columnLines: true,
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
    ]

});