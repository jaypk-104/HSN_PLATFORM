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

Ext.define('M_COL_CHANGE_HSPF.view.MyGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.myGrid',

	requires : [ 
		'M_COL_CHANGE_HSPF.view.MyGridViewModel', 
		'Ext.view.Table', 
		'Ext.grid.column.RowNumberer', 
		'Ext.grid.column.Number', 
		'Ext.grid.column.Date', 
		'Ext.selection.CheckboxModel', 
		'Ext.grid.plugin.Exporter', 
		'Ext.grid.plugin.CellEditing' 
	],

	viewModel : {
		type : 'mygrid'
	},

	id : 'myGrid',
	store : 'MyStore',
	style : 'border: 1px solid lightgray; padding: 5px;',
	title : 'My Grid Panel',
	header : false,

	config : {
		tbar : [ 
		{
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
			margin : '0 3 0 0',
		} ]
	},

	viewConfig : {
		enableTextSelection : true,
	},

	columns : [ {
		xtype : 'rownumberer',
		width : 40
	}, {
		xtype : 'gridcolumn',
		text : 'V_TYPE',
		hidden : true,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'MAST_DB_NO',
		style : 'text-align: center; font-weight: bold;',
		text : '담보관리번호',
		width : 150,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'COL_NO',
		style : 'text-align: center; font-weight: bold;',
		text : '담보번호',
		width: 150,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'COL_SEQ',
		style : 'text-align: center; font-weight: bold;',
		text : '담보순번',
		width: 80,
	}, {
    	xtype: 'datecolumn',
    	style: 'text-align: center; font-weight: bold;',
    	dataIndex: 'COL_DT',
    	text: '담보일',
    	format: 'Y-m-d',
    	align: 'center'
    }, {
		xtype : 'gridcolumn',
		dataIndex : 'BP_CD',
		style : 'text-align: center; font-weight: bold;',
		align : 'center',
		text : '거래처',
		width : 100,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'BP_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '거래처명',
		width : 200,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'APPROV_NM',
		style : 'text-align: center; font-weight: bold;',
		text : '진행명',
		width : 200,
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'BL_DOC_NO',
		style : 'text-align: center; font-weight: bold;',
		text : 'BL번호',
		width : 150,
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'COL_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '담보금액',
		width : 120,
		format : '0,000',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
        },
	}, {
		xtype : 'numbercolumn',
		dataIndex : 'JAN_AMT',
		style : 'text-align: center; font-weight: bold;',
		align : 'end',
		text : '담보잔액',
		width : 120,
		format : '0,000',
		summaryType: 'sum',
        summaryRenderer: function (value, summaryData, dataIndex) {
            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
        },
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'COL_PROC_TYPE',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		text : '담보처리유형',
		width : 100,
		align: 'center',
		editor : {
			xtype : 'combobox',
			editable : false,
			displayField : 'DTL_NM',
			autoLoadOnValue : true,
			valueField : 'DTL_CD',
			store : Ext.create('Ext.data.Store', {
				autoLoad : true,
				storeId : 'storeBA44',
				proxy : {
					type : 'ajax',
					extraParams : {
						V_MAST_CD : 'BA44',
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
			if (Ext.data.StoreManager.lookup('storeBA44').findRecord('DTL_CD', value) !== null) {
				return Ext.data.StoreManager.lookup('storeBA44').findRecord('DTL_CD', value).get('DTL_NM');
			}
			return value;
		},
	}, {
		xtype : 'actioncolumn',
		style : 'text-align: center; font-weight: bold; color: #3367d6',
		width : 80,
		dataIndex : 'COL_PROC_BTN',
		text : '담보처리',
		align : 'center',
		getClass: function(flag) {
//	        if(flag === 'Y'){
	        	return 'x-fa fa-check';
//	        }
//	        else {
//	        	return 'none';
//	        }
	    },
	    handler: function(view, colindex, rowindex, item, e, record) {
	    	var DEPT_CD = record.get('DEPT_CD');
	    	var BP_CD = record.get('BP_CD');
	    	var BL_DOC_NO = record.get('BL_DOC_NO');
	    	var COL_PROC_TYPE = record.get('COL_PROC_TYPE');
	    	
	    	var selModel = Ext.getCmp('myGrid').getSelectionModel();
			selModel.select(record);
			
	    	if(!!COL_PROC_TYPE){
				if(COL_PROC_TYPE === 'A'){ 
					// 반환
					var popStore = Ext.getStore('PopStore');
					var popup = Ext.create("M_COL_CHANGE_HSPF.view.MyWindow");
					
					popup.center();
					popup.show();
					
					Ext.getCmp('W_DEPT_CD').setValue(DEPT_CD);
					popStore.removeAll();
					
				} else if(COL_PROC_TYPE === 'B'){ 
					// 대체
					var popStore = Ext.getStore('PopStore1');
					var popup = Ext.create("M_COL_CHANGE_HSPF.view.MyWindow1");
					
					popup.center();
					popup.show();
					
					Ext.getCmp('W_DEPT_CD1').setValue(DEPT_CD);
					Ext.getCmp('W_BP_CD1').setValue(BP_CD);
					Ext.getCmp('W_BL_DOC_NO1').setValue(BL_DOC_NO);
					
					popStore.removeAll();
					popStore.load({
						params : {
							V_TYPE : 'PB',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_DEPT_CD : Ext.getCmp('W_DEPT_CD1').getValue(),
							V_BP_CD : Ext.getCmp('W_BP_CD1').getValue(),
						},
						callback : function(records, operations, success) {
						}
					});
				}
	    	}
	    },
	}, {
		xtype : 'gridcolumn',
		dataIndex : 'DEPT_CD',
		style : 'text-align: center; font-weight: bold;',
		text : '부서코드',
		hidden : true
	},
	],
	selModel : {
		selType : 'checkboxmodel',
		mode: 'SINGLE',
		listeners : {}
	},
	features : [ {
		ftype: 'summary',
        dock: 'bottom'
	} ],
	plugins : [ {
		ptype : 'gridexporter'
	}, {
        ptype: 'clipboard'
    }, {
		ptype : 'cellediting',
		clicksToEdit : 1,
	} ],

});