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

Ext.define('M_GR_BAD_ITEM_TOT_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_GR_BAD_ITEM_TOT_HSPF.view.MyGridViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
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
//                disabled: true
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
            }
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
            width: 40,
            locked: true
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'BAD_MGM_NO',
            enableTextSelection: true,
            text: '불량번호',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'BAD_DT',
            enableTextSelection: true,
            text: '등록일',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
            align: 'center',
            width: 125,
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'ITEM_NM',
        	enableTextSelection: true,
        	text: '품명',
        	align: 'center',
        	width: 180,
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold; color: #3367d6;',
        	sortable: true,
        	dataIndex: 'LOT_NO',
        	enableTextSelection: true,
        	text: 'LOT',
        	align: 'center',
        	width: 150,
        	editor: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 113,
            sortable: true,
            dataIndex: 'GR_QTY',
            enableTextSelection: true,
            text: '입고수량',
            align: 'right',
            format:'0,000.00',
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold; color: #3367d6;',
            width: 113,
            sortable: true,
            dataIndex: 'BAD_QTY',
            enableTextSelection: true,
            text: '불량수량',
            align: 'right',
            format:'0,000.00',
            editor: {
                xtype: 'numberfield'
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold; color: #3367d6;',
        	sortable: true,
        	dataIndex: 'BAD_REASON',
        	width: 300,
        	enableTextSelection: true,
        	text: '사유',
        	editor: {
                xtype: 'textfield'
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold; color: #3367d6;',
        	sortable: true,
        	dataIndex: 'ANSWER',
        	width: 300,
        	enableTextSelection: true,
        	text: '조치',
        	editor: {
        		xtype: 'textfield'
        	}
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold; color: #3367d6;',
        	sortable: true,
        	dataIndex: 'REMARK',
        	width: 300,
        	enableTextSelection: true,
        	text: '비고',
        	editor: {
        		xtype: 'textfield'
        	}
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'BP_NM',
        	text: '매입처'
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            dataIndex: 'MVMT_DT',
            text: '입고일'
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'MVMT_NO',
        	width: 150,
        	text: '입고번호',
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'INSRT_USR_NM',
        	width: 150,
        	text: '등록자',
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'PO_USR_NM',
        	width: 150,
        	text: '발주자',
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'GR_NO',
        	width: 150,
        	text: 'GR_NO',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'GR_SEQ',
        	width: 150,
        	text: 'GR_SEQ',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'PO_NO',
        	width: 150,
        	text: 'PO_NO',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	dataIndex: 'PO_SEQ',
        	width: 150,
        	text: 'PO_SEQ',
        	hidden: true
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
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting',
            clicksToEdit: 1,
            listeners: {
            	beforeedit: function(editor, context, eOpts) {
            		
//            		if(context.record.data['CFM_YN'] == 'Y') 
//                		 {
//            			context.cancel = true;
//            		} else {
//            			context.cancel = false;
//            		}
               }
            }
        }
    ],
    viewConfig: {
    	enableTextSelection: true,
        
    },

});