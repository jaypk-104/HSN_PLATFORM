/*
 * File: app/view/WinColPop.js
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

Ext.define('M_COLLATERAL_LAND_HSPF.view.WinColPop', {
	extend : 'Ext.window.Window',
	alias : 'widget.wincolpop',

	requires : [ 'M_COLLATERAL_LAND_HSPF.view.WinColPopViewModel', 'Ext.form.FieldSet', 'Ext.form.field.Date', 'Ext.grid.Panel', 'Ext.view.Table', 'Ext.grid.column.RowNumberer', 'Ext.grid.column.Date', 'Ext.grid.column.Number', 'Ext.form.field.Number', 'Ext.selection.CheckboxModel', 'Ext.grid.plugin.Exporter', 'Ext.grid.plugin.RowEditing', 'Ext.button.Button' ],

	viewModel : {
		type : 'wincolpop'
	},
	modal : true,
	height : 567,
	width : 917,
	title : '담보관리참조',
	id : 'WinColPop',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [ {
		xtype : 'container',
		modal : true,
		shim : false,
		padding : 10,
		layout : 'center',
		items : [ {
			xtype : 'fieldset',
			height : 80,
			maxHeight : 80,
			minHeight : 80,
			title : '',
			layout : {
				type : 'hbox',
				align : 'middle'
			},
			items : [ {
				xtype : 'datefield',
				flex : 1,
				maxWidth : 220,
				minWidth : 220,
				width : 220,
				fieldLabel : '설정일',
				labelWidth : 80,
				id : 'V_ASGN_DT_FR',
				listeners : {
					render : function(datefield) {
						var nows = new Date();
						nows.setMonth(nows.getMonth() - 6);
						datefield.setValue(nows);
					}
				},
				format : 'Y-m-d',
			}, {
				xtype : 'datefield',
				maxWidth : 150,
				minWidth : 150,
				width : 150,
				fieldLabel : '~',
				id : 'V_ASGN_DT_TO',
				labelWidth : 10,
				listeners : {
					render : function(datefield) {
						var nows = new Date();
						datefield.setValue(nows);
					}
				},
				format : 'Y-m-d',
			}, {
                xtype: 'radiogroup',
                flex: 1,
                margin: '0 0 0 30',
                maxWidth: 300,
                minWidth: 300,
                width: 300,
                fieldLabel: '사용유무',
                labelWidth: 70,
                id: 'V_USE_YN',
                items: [
                	{
                        xtype: 'radiofield',
                        boxLabel: '전체',
                        name: 'rb',
                        id: 'rbAll',
                        checked: true,
                        inputValue: '',
                    },
                    {
                        xtype: 'radiofield',
                        boxLabel: '사용',
                        name: 'rb',
                        id: 'rbY',
                        inputValue: 'Y',
                    },
                    {
                        xtype: 'radiofield',
                        boxLabel: '사용안함',
                        name: 'rb',
                        id: 'rbN',
                        inputValue : 'N',
                    }
                ]
            }]
		} ]
	}, {
		xtype : 'container',
		flex : 1,
		layout : 'fit',
		items : [ {
			xtype : 'gridpanel',
			style : 'padding: 10px;',
			bodyBorder : false,
			header : false,
			id : 'colGrid',
			store : 'ColStore',
			columns : [ {
				xtype : 'rownumberer',
				width : 40
			}, {
				xtype : 'gridcolumn',
				hidden : true,
				text : 'V_TYPE'
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				dataIndex : 'COLLATERAL_NO',
				enableTextSelection : true,
				text : '담보관리번호',
				width : 150
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				dataIndex : 'DB_TYPE2_NM',
				enableTextSelection : true,
				text : '담보적요',
				width : 170
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'BP_CD',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				enableTextSelection : true,
				text : '매출처',
				width : 150,
				hidden: true
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'BP_NM',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				enableTextSelection : true,
				text : '매출처명',
				width : 200
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				dataIndex : 'WARNT_ORG_NM',
				enableTextSelection : true,
				text : '설정대상',
				width : 200
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				dataIndex : 'STOCK_NO',
				enableTextSelection : true,
				text : '고유번호',
				width : 200
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				dataIndex : 'ASGN_DT',
				enableTextSelection : true,
				text : '설정일',
				align: 'center',
				format : 'Y-m-d',
				width : 150
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				dataIndex : 'RENEW_DT',
				enableTextSelection : true,
				text : '갱신일/수정일',
				align: 'center',
				format : 'Y-m-d',
				width : 150
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				dataIndex : 'EFFECTIVE_DT',
				enableTextSelection : true,
				text : '유효일',
				align: 'center',
				format : 'Y-m-d',
				width : 150
			}, {
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				sortable : true,
				dataIndex : 'EXPIRY_DT',
				enableTextSelection : true,
				text : '만기일',
				align: 'center',
				format : 'Y-m-d',
				width : 150
			}, {
				xtype : 'numbercolumn',
				dataIndex : 'ASGN_AMT',
				style : 'text-align: center; font-weight: bold;',
				align : 'end',
				text : '유효담보금',
				width : 150,
				format : '0,000'
			},{
				xtype : 'gridcolumn',
				style : 'text-align: center; font-weight: bold;',
				dataIndex : 'REMARK',
				enableTextSelection : true,
				text : '비고',
				width : 250
			}, 
			],
			selModel : {
				selType : 'checkboxmodel',
				selMode : 'SINGLE'
			},
			plugins : [ {
				ptype : 'gridexporter'
			}, ]
		} ]
	}, {
		xtype : 'container',
		margin : '0 0 3 0',
		layout : {
			type : 'hbox',
			align : 'stretch',
			pack : 'center'
		},
		items : [ {
			xtype : 'button',
			height : 30,
			id : 'w_colSelBtn',
			maxHeight : 30,
			minHeight : 30,
			width : 100,
			text : '조회'
		}, {
			xtype : 'button',
			margins : '',
			height : 30,
			id : 'w_colRegBtn',
			margin : '0 0 0 3',
			maxHeight : 30,
			minHeight : 30,
			width : 100,
			text : '선택',
			hidden : true
		} ]
	} ]

});