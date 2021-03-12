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

Ext.define('B_ITEM_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires: [
        'B_ITEM_HSPF.view.MyGridViewModel',
        'B_ITEM_HSPF.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Number',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.plugin.Clipboard',
    ],

	config : {
		tbar : [ {
			id : 'gridAddBtn',
			text : '',
			margin : '0 3 0 0',
			glyph : 'xf055@FontAwesome',
			iconCls : 'grid-add-btn',
		}, {
			id : 'gridDelBtn',
			text : '',
			margin : '0 3 0 0',
			glyph : 'xf056@FontAwesome',
			iconCls : 'grid-del-btn',
		//                disabled: true
		}, {
			xtype : 'container',
			flex : 1
		}, {
			xtype : 'button',
			glyph : 'xf1c3@FontAwesome',
			id : 'xlsxDown',
			cfg : {
				type : 'excel07',
				ext : 'xlsx'
			},
			iconCls : 'grid-excel-btn',
		} ]
	},

	controller : 'mygrid',
	viewModel : {
		type : 'mygrid'
	},
	id : 'myGrid',
	style : 'border: 1px solid #659DDC; padding: 5px;',
	bodyBorder : false,
	header : false,
	store : 'MyStore',

	viewConfig : {
		enableTextSelection : true
	},
	columns : [ {
		xtype : 'rownumberer',
		width : 45
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'V_TYPE',
		text : 'V_TYPE',
		hidden : true
	}, {
		xtype : 'checkcolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		dataIndex : 'USE_YN',
		enableTextSelection : true,
		locked : true,
		text : '사용여부',
		width : 90,
		renderer : function(value, metadata, record, rowIndex, colIndex, store) {
			var tempVal = '';
			if (value === 'Y') {
				tempVal = 'checked';
			}
			return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
		},
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'ITEM_CD',
		style : 'text-align: center; font-weight: bold;',
		width : 130,
		locked : true,
		text : '품목코드',
		editor : {
			xtype : 'textfield',
			allowBlank : false,
			allowOnlyWhitespace : false,
		},
		emptyCellText : '(미입력시 자동생성)'
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 90,
		dataIndex : 'ITEM_GROUP_CD',
		locked : true,
		text : '코드그룹',
		editor : {
			xtype : 'textfield',
			allowBlank : false,
			allowOnlyWhitespace : false,
			emptyText : 'Double Click',
			editable : false,
			listeners : {
				afterrender : function(c) {
					c.getEl().on('dblclick', function() {
						var popup = Ext.create("Popup.view.WinItemGrpPop");
						popup.show();
						var store = Ext.getStore('WinItemGrpPopStore');
						store.removeAll();
					});
				}
			}
		},
		emptyCellText : '(Double Click)'
	}, {
        xtype: 'gridcolumn',
        style: 'text-align: center; font-weight: bold; color: #3367d6',
        width: 110,
        dataIndex: 'GROUP_TYPE_CD',
        text: '품목그룹',
        locked : true,
        filter: { 
    		type : 'list',
    		labelIndex : 'GROUP_TYPE_NM'
        },
        renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
            if(Ext.data.StoreManager.lookup('storeSC12').findRecord('DTL_CD',value) !==null)
            {
                return Ext.data.StoreManager.lookup('storeSC12').findRecord('DTL_CD',value).get('DTL_NM');
            }
            return value;
        },
        exportRenderer: function (value, record, dataIndex, cell, column) {
        	if(Ext.data.StoreManager.lookup('storeSC12').findRecord('DTL_CD',value) !==null)
            {
                return Ext.data.StoreManager.lookup('storeSC12').findRecord('DTL_CD',value).get('DTL_NM');
            }
            return value;
        },
        editor: {
    		xtype: 'combobox',
    		displayField: 'DTL_NM',
    		valueField: 'DTL_CD',
    		enableRegEx: true,
            minChars: 2,
            queryMode: 'local',
            allowBlank:false,
    		store: Ext.create('Ext.data.Store',{
    			autoLoad: true,
    			storeId: 'storeSC12',
    			proxy: {
    		           type: 'ajax',
    		           extraParams: {
    		            	V_MAST_CD: 'SC12',
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
    }, 
    {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;',
		dataIndex : 'GROUP_TYPE_NM',
		text : '품목그룹',
		hidden: true
	}, 
	{
        xtype: 'gridcolumn',
        style: 'text-align: center; font-weight: bold; color: #3367d6',
        width: 110,
        dataIndex: 'GROUP_TYPE_DTL_CD',
        text: '품목소분류',
        locked : true,
        filter: { 
    		type : 'list',
    		labelIndex : 'GROUP_TYPE_DTL_NM'
        },
        renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
            if(Ext.data.StoreManager.lookup('storeSC14').findRecord('DTL_CD',value) !==null)
            {
                return Ext.data.StoreManager.lookup('storeSC14').findRecord('DTL_CD',value).get('DTL_NM');
            }
            return value;
        },
        exportRenderer: function (value, record, dataIndex, cell, column) {
        	if(Ext.data.StoreManager.lookup('storeSC14').findRecord('DTL_CD',value) !==null)
            {
                return Ext.data.StoreManager.lookup('storeSC14').findRecord('DTL_CD',value).get('DTL_NM');
            }
            return value;
        },
        editor: {
    		xtype: 'combobox',
    		displayField: 'DTL_NM',
    		valueField: 'DTL_CD',
    		enableRegEx: true,
            minChars: 2,
            queryMode: 'local',
            allowBlank:false,
    		store: Ext.create('Ext.data.Store',{
    			autoLoad: true,
    			storeId: 'storeSC14',
    			proxy: {
    		           type: 'ajax',
    		           extraParams: {
    		            	V_MAST_CD: 'SC14',
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
		style : 'text-align: center; font-weight: bold;',
		dataIndex : 'GROUP_TYPE_DTL_NM',
		text : '품목소분류',
		hidden: true
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 200,
		sortable : true,
		locked : true,
		dataIndex : 'ITEM_NM',
		enableTextSelection : true,
		text : '품목명',
		editor : {
			xtype : 'textfield',
			allowBlank : false,
			allowOnlyWhitespace : false,
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 150,
		dataIndex : 'MAKER',
		text : 'MAKER',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 150,
		dataIndex : 'AGENT',
		text : 'AGENT',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 150,
		dataIndex : 'SPEC',
		text : '규격',
		editor : {
			xtype : 'textfield'
		}
	}, 
	{
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 85,
		dataIndex : 'UNIT',
		text : '단위',
		editor : {
			xtype : 'textfield'
		}
	}, 
	 {
        xtype: 'gridcolumn',
        style : 'text-align: center; font-weight: bold;  color: #3367d6',
        width: 150,
        dataIndex: 'M_BP_CD',
        text: '공급사',
        editor: {
            xtype: 'combobox',
            displayField: 'M_BP_NM',
            valueField: 'M_BP_CD',
            enableRegEx: true,
            minChars: 2,
            queryMode: 'local',
            store: 'WinMBpPopStore',
            matchFieldWidth: false,
            listeners   : {
                beforequery: function(record){  
                    record.query = new RegExp(record.query, 'i');
                    record.forceAll = true;
                },
                
            },
          	listConfig: {
                itemTpl: [
                    '<div>[{M_BP_CD}] {M_BP_NM}</div>'
                ]
            }
        },
        renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
            if(Ext.data.StoreManager.lookup('WinMBpPopStore').findRecord('M_BP_CD',value) !==null)
            {
                return Ext.data.StoreManager.lookup('WinMBpPopStore').findRecord('M_BP_CD',value).get('M_BP_NM');
            }
            return value;
        },
        exportRenderer: function (value, record, dataIndex, cell, column) {
        	if(Ext.data.StoreManager.lookup('WinMBpPopStore').findRecord('M_BP_CD',value) !==null)
            {
                return Ext.data.StoreManager.lookup('WinMBpPopStore').findRecord('M_BP_CD',value).get('M_BP_NM');
            }
            return value;
        },
        sortable: false
    },
    {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 90,
		dataIndex : 'M_PRICE',
		text : '매입가',
		align : 'right',
		editor : {
			xtype : 'numberfield',
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		}

	},
	{
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 120,
		dataIndex : 'MIN_PO_QTY',
		text : '최소발주수량',
		align : 'right',
		editor : {
			xtype : 'numberfield',
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		}

	}, {
		xtype : 'numbercolumn',
		dataIndex : 'SAFE_QTY',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 110,
		text : '안전재고량',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		}
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 110,
		dataIndex : 'MAX_PACK_QTY',
		text : '대포장수량',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
		align : 'right'
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 100,
		dataIndex : 'MAX_PACK_UNIT',
		text : '대포장단위',
		editor : {
			xtype : 'textfield'
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 110,
		dataIndex : 'MID_PACK_QTY',
		text : '중포장수량',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
		align : 'right'
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 100,
		dataIndex : 'MID_PACK_UNIT',
		text : '중포장단위',
		editor : {
			xtype : 'textfield',
		},

	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 110,
		dataIndex : 'MIN_PACK_QTY',
		text : '소포장수량',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
		align : 'right'
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 100,
		dataIndex : 'MIN_PACK_UNIT',
		text : '소포장단위',
		editor : {
			xtype : 'textfield'
		},

	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 100,
		dataIndex : 'SUPP_LT_DT',
		text : '구매L/T',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 100,
		dataIndex : 'HS_CD',
		text : 'HS CODE',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 200,
		dataIndex : 'MAKER',
		text : '제조사',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 100,
		dataIndex : 'IN_SL_CD',
		text : '입고창고',
		editor : {
			xtype : 'combobox',
			editable : false,
			displayField : 'DTL_NM',
			autoLoadOnValue : true,
			valueField : 'DTL_CD',
			store : Ext.create('Ext.data.Store', {
				autoLoad : true,
				storeId : 'sl_combo',
				proxy : {
					type : 'ajax',
					extraParams : {
						V_MAST_CD : 'SL',
						V_GRID : 'Y'
					},
					api : {
						read : '/HSPF01/common/sql/Combobox.jsp'
					},
					reader : {
						type : 'json',
						rootProperty : 'resultList'
					}
				}
			})
		},
		renderer : function(value, metaData, record, rowIndex, colIndex, store, view) {
			if (Ext.data.StoreManager.lookup('sl_combo').findRecord('DTL_CD', value) !== null) {
				return Ext.data.StoreManager.lookup('sl_combo').findRecord('DTL_CD', value).get('DTL_NM');
			}
			return value;
		},
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 120,
		dataIndex : 'BAR_MAKE_UNIT',
		text : '바코드 발행단위',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 120,
		dataIndex : 'ORIGIN',
		text : 'ORIGIN',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 110,
		dataIndex : 'BOX_PACK_QTY',
		text : '박스당 개수<br>(부품)',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 130,
		dataIndex : 'MIN_PACK_SPEC',
		text : '소포장 규격<br>(가로x세로x높이)',
		editor : {
			xtype : 'textfield'
		}
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 130,
		dataIndex : 'PALLET_MIN_PACK_SPEC',
		text : '1Pallet당<br>소포장 개수',
		editor : {
			xtype : 'textfield'
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 120,
		dataIndex : 'PALLET_WGT',
		text : 'Pallet당 중량<br>(kg기준)',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 120,
		dataIndex : 'PALLET_QTY',
		text : 'Pallet당 개수<br>(부품)',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	},  {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 130,
		dataIndex : 'PALLET_SPEC',
		text : 'Pallet 단위 규격<br>(가로x세로x높이)',
		editor : {
			xtype : 'textfield'
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 110,
		dataIndex : 'NET_WGT',
		text : 'Net<br>Weight',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 110,
		dataIndex : 'GROSS_WGT',
		text : 'Gross<br>Weight',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 110,
		dataIndex : 'MIN_PACK_CBM',
		text : 'CBM<br>(소포장당)',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 110,
		dataIndex : 'PALLET_CBM',
		text : 'CBM<br>(Pallet당)',
		align : 'right',
		editor : {
			xtype : 'numberfield'
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
	},
	
	{
		xtype : 'checkcolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		dataIndex : 'ITEM_CALC_YN',
		enableTextSelection : true,
		text : '자재소요량계산',
		width : 110,
		renderer : function(value, metadata, record, rowIndex, colIndex, store) {
			var tempVal = '';
			if (value === 'Y') {
				tempVal = 'checked';
			}
			return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
		},
	}, {
		xtype : 'checkcolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		dataIndex : 'SEND_MAIL_YN',
		enableTextSelection : true,
		text : '메일발송유무',
		width : 110,
		renderer : function(value, metadata, record, rowIndex, colIndex, store) {
			var tempVal = '';
			if (value === 'Y') {
				tempVal = 'checked';
			}
			return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
		},
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 120,
		dataIndex : 'SF_DAY',
		text : '기준안전재고일',
		editor : {
			xtype : 'numberfield',
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000');
		},
		align : 'right'
	}, {
		xtype : 'numbercolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 100,
		dataIndex : 'M_B_RT',
		text : 'M/B(%)',
		editor : {
			xtype : 'numberfield',
		},
		renderer : function(value) {
			return Ext.util.Format.number(value, '0,000.00');
		},
		align : 'right'
	}, 
	{
		xtype : 'actioncolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 90,
		dataIndex : 'IMG_YN',
		text : '이미지유무',
		align : 'center',
		getClass: function(iconflag) {
	        if(iconflag === 'Y'){
	        	return 'x-fa fa-camera';
	        }
	        else {
	        	return 'none';
	        }
	    },
	    handler: function(view, colindex, rowindex, item, e, record) {
	    	if(record.get('IMG_YN') === 'Y'){
	    		var imageStore = Ext.getStore('ImageStore');
				var popup = Ext.create("B_ITEM_HSPF.view.MyWindow");
				popup.center();
				popup.show();
	    		
	    		var ITEM_CD = record.get('ITEM_CD');
				Ext.getCmp('W_ITEM_CD').setValue(ITEM_CD);

				imageStore.removeAll();
				imageStore.load({
					params : {
						V_TYPE : 'S',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_ITEM_CD : ITEM_CD
					},
					callback : function(records, operations, success) {
					}
				});
	    	}
	    },
	}, 
//	{
//		xtype : 'gridcolumn',
//		style : 'text-align: center; font-weight: bold; color: #3367d6',
//		width : 90,
//		dataIndex : 'IMG_YN',
//		text : '이미지유무',
//		align : 'center',
//		editor : {
//			xtype : 'textfield',
//			editable : false,
//			listeners : {
//				afterrender : function(c) {
//					this.mon(this.getEl(), 'dblclick', function() {
//						var selectedRecord = Ext.getCmp('myGrid').getSelectionModel().getLastSelected();
//						var imageStore = Ext.getStore('ImageStore');
//							
//						var popup = Ext.create("B_ITEM_HSPF.view.MyWindow");
//						popup.center();
//						popup.show();
//
//						var ITEM_CD = selectedRecord.get('ITEM_CD');
//						Ext.getCmp('W_ITEM_CD').setValue(ITEM_CD);
//
//						imageStore.removeAll();
//						imageStore.load({
//							params : {
//								V_TYPE : 'S',
//								V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
//								V_ITEM_CD : ITEM_CD
//							},
//							callback : function(records, operations, success) {
//							}
//						});
//					});
//				}
//			}
//		}
//	}, 
	{
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;',
		width : 80,
		dataIndex : 'USE_YN_FOR_EXCEL',
		text : '사용여부',
		align : 'center'
	}, {
		xtype : 'gridcolumn',
		style : 'text-align: center; font-weight: bold;  color: #3367d6',
		width : 500,
		dataIndex : 'REMARK',
		text : '비고',
		editor : {
			xtype : 'textfield'
		}
	}, ],
	listeners : {
		cellclick : function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
			var targetDataIdx = grid.eventPosition.column.dataIndex;
			
			if (e.target.type && e.target.type === 'checkbox' || targetDataIdx == 'IMG_YN') {
				let selModel = Ext.getCmp('myGrid').getSelectionModel();
				let checkVal = e.target.checked ? 'Y' : 'N';

				if (targetDataIdx == 'USE_YN') {
					record.set('USE_YN', checkVal);
				}
				if (targetDataIdx == 'ITEM_CALC_YN') {
					record.set('ITEM_CALC_YN', checkVal);
				}
				if (targetDataIdx == 'SEND_MAIL_YN') {
					record.set('SEND_MAIL_YN', checkVal);
				}

				selModel.select(record, true);
			}
		},
			
	},
	selModel : {
		selType : 'checkboxmodel',
		checkOnly : true,
		listeners : {
			select : 'onCheckboxModelSelect',
			deselect : 'onCheckboxModelDeselect'
		}
	},
	plugins : [ {
		ptype : 'gridexporter'
	}, {
		ptype: 'gridfilters' 
    }, {
		ptype : 'clipboard'
	}, {
		ptype : 'cellediting',
		clicksToEdit : 2,
		clicksToMoveEditor : 1,
		listeners : {
			//수정후
			edit : function(editor, context, eOpts) {
				var selModel = Ext.getCmp('myGrid').getSelectionModel();
				selModel.select(context.record, true);
			},
			beforeedit : function(editor, context) {
				if ((context.record.phantom == false) && (context.field == 'ITEM_CD')) {
					context.cancel = true;
				} else {
					context.cancel = false;
				}
			},
			afteredit: function(editor, context, eOpts) {
				if(context.column.dataIndex == 'UNIT' ) {
					context.record.set('BAR_MAKE_UNIT', context.record.get('UNIT'));
				}
			}
		}
	} ]

});