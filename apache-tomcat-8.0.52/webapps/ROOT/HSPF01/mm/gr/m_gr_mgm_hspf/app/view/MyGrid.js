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
Ext.define('M_GR_MGM_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',
    requires: [
        'M_GR_MGM_HSPF.view.MyGridViewModel',
        'M_GR_MGM_HSPF.view.MyGridViewController',
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
                iconCls: 'grid-del-btn'
            },
            {
              id: 'gridSaveBtn',
              text: '',
              margin: '0 3 0 0',
              glyph: 'xf0c7@FontAwesome',
              iconCls: 'grid-save-btn',
              hidden: true
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                id: 'gridErpBtn',
                xtype: 'button',
                text: '입고ERP전송',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
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
    controller: 'mygrid',
    viewModel: {
        type: 'mygrid'
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
        	style: ' text-align: center; font-weight: bold;',
        	width: 80,
        	sortable: true,
        	dataIndex: 'PO_USR_NM',
        	enableTextSelection: true,
        	text: '발주자',
        	align: 'center',
        	filter: { 			//필터
        		type : 'list',
//                operator : 'in',
            },
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	width: 80,
        	sortable: true,
        	dataIndex: 'GR_USR_NM',
        	enableTextSelection: true,
        	text: '입고자',
        	align: 'center',
        	filter: { 			//필터
        		type : 'list',
//                operator : 'in',
            },
        
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'IN_NO',
            enableTextSelection: true,
            text: '입고번호',
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'IN_SEQ',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '입고순번',
            format: '0,000',
            hidden: true
        },
        {
            xtype: 'datecolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'IN_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
            text: '입고일',
            format: 'Y-m-d',
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 100,
              sortable: true,
              dataIndex: 'BP_CD',
              enableTextSelection: true,
              text: '공급사',
              hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 170,
            sortable: true,
            dataIndex: 'BP_NM',
            enableTextSelection: true,
            text: '공급사',
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'GR_TYPE_NM',
            enableTextSelection: true,
            text: '입고구분',
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 120,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드',
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 250,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 180,
            sortable: true,
            dataIndex: 'SPEC',
            enableTextSelection: true,
            text: '규격',
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_QTY',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '입고수량',
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.00');
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>";
            }
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'RM_QTY',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '미매입수량',
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.00');
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>";
            },
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'CUR',
            enableTextSelection: true,
            text: '화폐단위',
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'XCH_RATE',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '환율',
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.0000');
            },
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_PRC',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '단가',
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.00');
            },
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '금액',
            editor: {
                xtype: 'numberfield',
                style: 'text-align:right',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            },
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.00');
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>";
            },
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'GR_LOC_AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '자국금액',
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.00');
            },
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'DISTB_AMT',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '부대경비',
            renderer: function(value) {
              return Ext.util.Format.number(value, '0,000.00');
            },
            hidden: true
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 100,
              sortable: true,
              dataIndex: 'SL_NM',
              enableTextSelection: true,
              text: '창고',
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'PO_NO',
            enableTextSelection: true,
            text: '발주번호',
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 90,
              sortable: true,
              dataIndex: 'PO_SEQ',
              enableTextSelection: true,
              text: '발주순번',
              align: 'right'
        },
        {
            xtype: 'gridcolumn',
            style: ' text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'BL_NO',
            enableTextSelection: true,
            text: 'BL번호',
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 200,
              sortable: true,
              dataIndex: 'REMARK',
              align: 'start',
              enableTextSelection: true,
              text: '비고',
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 100,
              sortable: true,
              dataIndex: 'IF_ERP_YN',
              align: 'center',
              enableTextSelection: true,
              text: 'ERP전송',
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 150,
              sortable: true,
              dataIndex: 'GR_NO',
              enableTextSelection: true,
              text: '입고번호',
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 80,
              sortable: true,
              dataIndex: 'GR_SEQ',
              enableTextSelection: true,
              text: '입고순번',
              hidden: true
        },
        {
              xtype: 'gridcolumn',
              style: ' text-align: center; font-weight: bold;',
              width: 80,
              sortable: true,
              dataIndex: 'BARCODE_YN',
              align: 'center',
              enableTextSelection: true,
              text: '바코드입고',
        },
        {
        	xtype: 'numbercolumn',
        	style: ' text-align: center; font-weight: bold;',
        	width: 80,
        	sortable: true,
        	dataIndex: 'DN_QTY',
        	align: 'right',
        	enableTextSelection: true,
        	text: '출고수량',
        	format: '0,000.00'
        },
        {
        	xtype: 'gridcolumn',
        	style: ' text-align: center; font-weight: bold;',
        	width: 80,
        	sortable: true,
        	dataIndex: 'CFM_YN',
        	align: 'right',
        	enableTextSelection: true,
        	text: '확정유무',
        },
    ],
    features: [
        {
            ftype: 'summary'
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
    viewConfig: {
       enableTextSelection: true,
        getRowClass: function(record, index) {
            var IF_ERP_YN = record.get('IF_ERP_YN');
            if (IF_ERP_YN == 'Y') {
              return 'bg-green';
            }
        },
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
        },
        {
            ptype: 'gridfilters' ///이부분
        }
    ]
});