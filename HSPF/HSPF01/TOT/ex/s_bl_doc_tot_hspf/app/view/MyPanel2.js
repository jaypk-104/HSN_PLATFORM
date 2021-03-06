/*
 * File: app/view/MyPanel1.js
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

Ext.define('S_BL_DOC_TOT_HSPF.view.MyPanel2', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mypanel2',

	requires : ['S_BL_DOC_TOT_HSPF.view.MyPanelViewModel2',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.column.Number'],

	viewModel : {
		type : 'mypanel2'
	},
	layout : 'fit',
	title : 'Tab 3',
	items : [ {
		xtype : 'container',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [ {
			xtype : 'gridpanel',
			flex : 1,
			style : 'border: 1px solid lightgray; padding: 5px;',
			header : false,
			title : 'My Grid Panel',
			store : 'MyStore2',
			id : 'myGrid2',
			tbar : [ {
			    id: 'gridAddBtn2',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf055@FontAwesome',
			    iconCls: 'grid-add-btn',
			},
			{
			    id: 'gridDelBtn2',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf056@FontAwesome',
			    iconCls: 'grid-del-btn',
			}, {
				id : 'gridSaveBtn2',
				text : '',
				margin : '0 3 0 0',
				glyph : 'xf0c7@FontAwesome',
				iconCls : 'grid-save-btn',
			}, {
	               xtype: 'numberfield',
	               fieldLabel: 'Gross Wgt 합계',
	               margin: '0 3 0 10',
	               width: 200,
	               id: 'V_TOTAL_GROSS_WGT',
	               hideTrigger: true, 
	               labelWidth: 100,
	               fieldStyle: 'text-align: right'
	        }, {
				id : 'gridDistBtn',
				text : '배부',
				style: 'background-color: white; border: 0.5px solid #3367d6;',
				cls: 'blue-btn',
				margin : '0 3 0 0',
			}, {
				xtype : 'container',
				flex : 1
			}, {
				xtype : 'button',
				glyph : 'xf1c3@FontAwesome',
				id : 'xlsxDown2',
				cfg : {
					type : 'excel07',
					ext : 'xlsx'
				},
				iconCls : 'grid-excel-btn',
			} ],
			columns : [ {
				xtype : 'rownumberer',
				width : 40
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 114,
				dataIndex : 'V_TYPE',
				text : 'V_TYPE',
				hidden : true
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 150,
				dataIndex : 'BL_DOC_NO',
				text : '수입 B/L번호',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 120,
				dataIndex : 'PILAMENT_CD',
				text : '품종',
				renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
	                if(Ext.data.StoreManager.lookup('storeSC13').findRecord('DTL_CD',value) !==null)
	                {
	                    return Ext.data.StoreManager.lookup('storeSC13').findRecord('DTL_CD',value).get('DTL_NM');
	                }
	                return value;
	            },
	            editor: {
	        		xtype: 'combobox',
	        		displayField: 'DTL_NM',
	        		autoLoadOnValue: true,
	        		valueField: 'DTL_CD',
	        		editable: false,
	        		store: Ext.create('Ext.data.Store',{
	        			autoLoad: true,
	        			storeId: 'storeSC13',
	        			proxy: {
	        		           type: 'ajax',
	        		           extraParams: {
	        		            	V_MAST_CD: 'SC13',
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
	                        '<div>{DTL_NM}</div>'
	                    ]
	                },
	        	}
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 120,
				dataIndex : 'CNTR_TYPE',
				text : 'Container Type',
				editor: {
					xtype: 'textfield',
				},
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 120,
				dataIndex : 'ITEM_CD',
				text : '품목코드',
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 250,
				dataIndex : 'ITEM_NM',
				text : '품목명',
//				editor: {
//	            	xtype: 'textfield',
//	            },
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 110,
				align : 'end',
				dataIndex : 'QTY',
				text : 'Qty',
				format : '0,000.00',
//				editor: {
//	            	xtype: 'numberfield',
//	            	format: '0,000.00',
//	            	decimalPrecision:2,
//	        		align: 'right'
//	            },
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
				},
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 100,
				align : 'end',
				dataIndex : 'PALLET_QTY',
				text : 'Pallet 수량',
				format : '0,000',
				editor: {
	            	xtype: 'numberfield',
	            	format: '0,000',
	        		align: 'right'
	            },
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
				},
			}, {
	            xtype: 'gridcolumn',
	            style: 'font-size: 12px;text-align: center; font-weight: bold; color: #3367d6',
	            width: 100,
	            dataIndex: 'PALLET_KIND',
	            text: 'Pallet 종류',
	            align: 'center',
	            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
	                if(Ext.data.StoreManager.lookup('storeSC11').findRecord('DTL_CD',value) !==null)
	                {
	                    return Ext.data.StoreManager.lookup('storeSC11').findRecord('DTL_CD',value).get('DTL_NM');
	                }
	                return value;
	            },
	            editor: {
	        		xtype: 'combobox',
	        		displayField: 'DTL_NM',
	        		autoLoadOnValue: true,
	        		valueField: 'DTL_CD',
	        		editable: false,
	        		store: Ext.create('Ext.data.Store',{
	        			autoLoad: true,
	        			storeId: 'storeSC11',
	        			proxy: {
	        		           type: 'ajax',
	        		           extraParams: {
	        		            	V_MAST_CD: 'SC11',
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
	                        '<div>{DTL_NM}</div>'
	                    ]
	                },
	        	}
	        }, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 100,
				dataIndex : 'PALLET_TYPE',
				text : 'Pallet 분류',
				editor: {
	            	xtype: 'textfield',
	            },
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				width : 100,
				dataIndex : 'UNIT',
				text : 'UNIT',
//				editor: {
//	            	xtype: 'textfield',
//	            },
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 120,
				align : 'end',
				dataIndex : 'NET_WGT',
				text : 'Net Wgt',
				format : '0,000.00',
				editor: {
	            	xtype: 'numberfield',
	            	format: '0,000.00',
	            	decimalPrecision:2,
	        		align: 'right'
	            },
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
				},
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 120,
				align : 'end',
				dataIndex : 'GROSS_WGT',
				text : 'Gross Wgt',
				format : '0,000.00',
				editor: {
	            	xtype: 'numberfield',
	            	format: '0,000.00',
	            	decimalPrecision:2,
	        		align: 'right'
	            },
				summaryType : 'sum',
				summaryRenderer : function(value, summaryData, dataIndex) {
					return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
				},
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 110,
				dataIndex : 'HS_CD',
				text : 'HS CODE',
				editor: {
	            	xtype: 'textfield',
	            },
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 100,
				dataIndex : 'ORIGIN',
				text : 'ORIGIN',
				editor: {
	            	xtype: 'textfield',
	            },
			}, {
				xtype : 'numbercolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
				width : 120,
				align : 'end',
				dataIndex : 'UNIT_WGT',
				text : '단위중량',
				format : '0,000.000000',
				editor: {
	            	xtype: 'numberfield',
	            	format: '0,000.000000',
	            	decimalPrecision:6,
	        		align: 'right'
	            },
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				dataIndex : 'INV_NO',
				text : 'INV_NO',
				hidden: true,
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				dataIndex : 'INV_SEQ',
				text : 'INV_SEQ',
				hidden: true,
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				dataIndex : 'REF_NO',
				text : 'REF_NO',
				hidden: true,
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				dataIndex : 'REF_SEQ',
				text : 'REF_SEQ',
				hidden: true,
			}, {
				xtype : 'gridcolumn',
				style : 'font-size: 12px; text-align: center; font-weight: bold;',
				dataIndex : 'REF_TYPE',
				text : 'REF_TYPE',
				hidden: true,
			}, ],
			viewConfig : {
				enableTextSelection : true,
			},
			selModel: {
                selType: 'checkboxmodel',
                checkOnly: true,
            },   
			plugins : [ {
				ptype : 'gridexporter'
			}, {
                ptype: 'cellediting',
                listeners : {
                	edit : function(editor, context, eOpts) {
						var QTY = Number(context.record.data.QTY);
						var UNIT_WGT = Number(context.record.data.UNIT_WGT);
						if (context.column.dataIndex == 'UNIT_WGT') {
							context.record.set('NET_WGT', Math.round(QTY*UNIT_WGT));
						}
					},
                }
            } ],
			features : [ {
				ftype : 'summary',
				dock : 'bottom'
			} ]
		}, ]
	} ]

});