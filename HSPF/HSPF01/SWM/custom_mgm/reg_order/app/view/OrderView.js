/*
 * File: app/view/OrderView.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('rawpurchase.view.OrderView', {
    extend: 'Ext.window.Window',
    alias: 'widget.orderView',

    requires: [
        'rawpurchase.view.OrderViewViewModel',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.form.field.Hidden',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.view.Table',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'orderview'
    },
    autoHeight:true,
    height: '70%',
    id: 'OrderView',
    width: 850,
    layout: 'border',
    title: '주문등록[원자재]',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'container',
            region: 'north',
            height: 80,
            style: 'background-color: #EDEFF5 !important',
            layout: 'border',
            
            items: [
                {
                    xtype: 'container',
                    region: 'west',
                    width: 400,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            id: 'dlvDtPop',
                            maxWidth: 400,
                            minWidth: 400,
                            width: 400,
                            margin: '5 0 0 0',
                            fieldLabel: '납기요청일',
                            labelAlign: 'right',
                            labelStyle: 'background-color: #EDEFF5 !important;font-size:12px;',
                            fieldStyle: 'background-color: #FAF4C0 !important;text-align:center;font-size:12px;',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'hiddenfield',
                            id: 'soReqNoPop',
                            fieldLabel: 'Label'
                        },
                        {
                            xtype: 'container',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'textfield',
                                    id: 'goalLocPop',
                                    width: 400,
                                    minWidth: 400,
                                    maxWidth: 400,
                                    margin: '5 0 0 0',
                                    fieldLabel: '대표납품장소',
                                    labelAlign: 'right',
                                    labelStyle: 'background-color: #EDEFF5 !important; font-size:12px;',
                                    fieldStyle: 'font-family:times,courier,arial;font-size:12px;'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'container',
                    region: 'west',
                    width: 400,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
	                items: [
	                    {
	                        xtype: 'textfield',
	                        id: 'remarkPop',
	                        width: 400,
	                        maxWidth: 400,
	                        minWidth: 400,
	                        margin: '5 0 0 0',
	                        fieldLabel: '비고',
	                        labelAlign: 'right',
	                        labelStyle: 'background-color: #EDEFF5 !important;font-size:12px;',
	                        fieldStyle: 'font-family:times,courier,arial;font-size:12px;'
	                    },
	                    {
	                    	xtype: 'container',
	                    	layout: {
	                    		type: 'hbox'
	                    	},
	                        margin: '5 0 0 0',
	                    	items: [
								{
								    xtype: 'button',
								    id: 'delBtnPop',
								    margin: '0 5 0 230',
								    width: 70,
								    text: '행삭제'
								},
								{
								    xtype: 'button',
								    id: 'svBtnPop',
								    width: 87,
								    text: '납기요청'
								}
	            	        ]
	                    },
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            region: 'center',
            items: [
                {
                    xtype: 'gridpanel',
                    height: 574,
                    id: 'popGrid',
                    title: ' ',
                    header: false,
                    store: 'RawPurPopStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';
                                return value;
                            },
                            id: 'pop_item_cd',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 108,
                            dataIndex: 'item_cd',
                            text: '품목코드'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';
                                return value;
                            },
                            id: 'pop_item_nm',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 159,
                            dataIndex: 'item_nm',
                            text: '품목명'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';

                                return value;
                            },
                            hidden: true,
                            id: 'pop_bp_item_cd',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 159,
                            dataIndex: 'bp_item_cd',
                            text: '주문처품목코드'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';

                                return value;
                            },
                            id: 'pop_bp_item_nm',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 124,
                            dataIndex: 'bp_item_nm',
                            text: '주문처품목명'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';

                                return value;
                            },
                            id: 'pop_spec',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 159,
                            dataIndex: 'spec',
                            text: '규격'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';

                                return value;
                            },
                            id: 'pop_maker',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 95,
                            dataIndex: 'maker',
                            text: 'Maker'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';

                                return value;
                            },
                            id: 'pop_unit',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 52,
                            dataIndex: 'unit',
                            text: '단위'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridPK';
                                return Ext.util.Format.number(value,'0,000.00');
                            },
                            id: 'pop_so_qty',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 101,
                            align: 'right',
                            dataIndex: 'so_qty',
                            text: '수량',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';
                                return Ext.util.Format.number(value,'0,000.00');
                            },
                            id: 'pop_so_prc',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 101,
                            align: 'right',
                            dataIndex: 'so_prc',
                            text: '품목단가'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridDf';
                                return Ext.util.Format.number(value,'0,000');
                            },
                            id: 'pop_so_amt',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 101,
                            align: 'right',
                            dataIndex: 'so_amt',
                            text: '금액'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                metaData.tdCls='extjsGridPK';
                                return Ext.util.Format.date(value,'Y-m-d');
                            },
                            id: 'pop_dlvy_hop_dt',
                            style: 'text-align:center; background-color: #F8F8F8 !important',
                            width: 101,
                            align: 'right',
                            dataIndex: 'dlvy_hop_dt2',
                            text: '납기요청일',
                            editor: {
                                xtype: 'datefield',
                                format: 'Y-m-d'
                            }
                        }
                    ],
                    viewConfig: {
                        height: 385
                    },
                    plugins: [
                        {
                            ptype: 'cellediting',
                            clicksToEdit: 1,
                            listeners: {
                                edit: 'onCellEditingEdit'
                            }
                        }
                    ]
                }
            ]
        }
    ],

    onCellEditingEdit: function(editor, context, eOpts) {


                    if(context.colIdx===6)
                    {
                var so_qtys=context.record.get('so_qty');
                var so_prcs=context.record.get('so_prc');
                var so_amts=so_qtys*so_prcs;
                context.record.set('so_amt',so_amts);
                    }
    }

});