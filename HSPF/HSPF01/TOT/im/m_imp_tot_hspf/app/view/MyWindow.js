/*
 * File: app/view/MyWindow1.js
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

Ext.define('M_IMP_TOT_HSPF.view.MyWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.mywindow',

	requires: [
        'M_IMP_TOT_HSPF.view.MyWindowViewModel',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
    ],

	viewModel : {
		type : 'mywindow'
	},
	height : 458,
	width : 539,
	title : 'LG 신청서',
	layout : 'fit',
	modal : true,

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [ {
		xtype : 'container',
		dock : 'top',
		height : 50,
		maxHeight : 50,
		minHeight : 50,
		width : 100,
		layout : {
			type : 'hbox',
			align : 'middle'
		},
		items : [ {
			xtype : 'container',
			flex : 1
		}, {
			xtype : 'button',
			id : 'w_saveLgBtn',
			margin : '0 3 0 0',
			text : '저장',
			style : 'background-color: white; border: 0.5px solid #3367d6;',
			cls : 'blue-btn',
		}, {
			xtype : 'button',
			id : 'w_printLgBtn',
			margin : '0 35 0 0',
			text : 'LG송금서출력',
			style : 'background-color: white; border: 0.5px solid #3367d6;',
			cls : 'blue-btn',
		}, ]
	}, {
		xtype : 'container',
		dock : 'top',
		height : 50,
		maxHeight : 50,
		minHeight : 50,
		width : 100,
		layout : {
			type : 'hbox',
			align : 'left'
		},
		items : [ {
			xtype : 'textfield',
			flex : 1,
			id : 'W_BL_DOC_NO',
			maxWidth : 250,
			minWidth : 250,
			width : 250,
			fieldLabel : 'B/L번호',
			labelAlign : 'right',
			labelWidth : 100,
			editable : false
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_LC_DOC_NO',
			maxWidth : 250,
			minWidth : 250,
			width : 250,
			fieldLabel : 'L/C번호',
			labelAlign : 'right',
			labelWidth : 100,
			editable : false
		}, ]
	}, {
		xtype : 'container',
		dock : 'top',
		height : 300,
		maxHeight : 300,
		minHeight : 300,
		width : 100,
		layout : {
			type : 'vbox',
			align : 'left'
		},
		items : [ {
			xtype : 'textfield',
			flex : 1,
			id : 'W_BP_NM',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '업체명',
			labelAlign : 'right',
			labelWidth : 100,
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_SHPNG_COMPANY',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '수신(선박회사)',
			labelAlign : 'right',
			labelWidth : 100,
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_VESSEL_NM',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '선박명',
			labelAlign : 'right',
			labelWidth : 100,
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_VOYAGE_NO',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '항차/항해번호',
			labelAlign : 'right',
			labelWidth : 100,
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_LOADING_PORT',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '선적항',
			labelAlign : 'right',
			labelWidth : 100,
		}, {
			xtype : 'textfield',
			flex : 1,
			id : 'W_DISCHGE_PORT',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '도착항(인도장소)',
			labelAlign : 'right',
			labelWidth : 100,
		}, 
//		{
//			xtype : 'combobox',
//			flex : 1,
//			id : 'W_LOADING_PORT',
//			maxWidth : 500,
//			minWidth : 500,
//			width : 500,
//			fieldLabel : '선적항',
//			labelAlign : 'right',
//			labelWidth : 100,
//			displayField : 'DTL_NM',
//			valueField : 'DTL_CD',
//			enableRegEx : true,
//			queryMode : 'local',
//			store : Ext.create('Ext.data.Store', {
//				autoLoad : true,
//				storeId : 'storePort',
//				proxy : {
//					type : 'ajax',
//					extraParams : {
//						V_MAST_CD : 'BA07',
//						V_GRID : 'Y'
//					},
//					api : {
//						read : '/HSPF01/common/sql/Combobox.jsp'
//					},
//					reader : {
//						type : 'json',
//						rootProperty : 'resultList'
//					}
//				}
//			}),
//			listConfig : {
//				itemTpl : [ '<div>{DTL_NM} ({DTL_CD}) </div>' ],
//			}
//		}, {
//			xtype : 'combobox',
//			flex : 1,
//			id : 'W_DISCHGE_PORT',
//			maxWidth : 500,
//			minWidth : 500,
//			width : 500,
//			fieldLabel : '도착항(인도장소)',
//			labelAlign : 'right',
//			labelWidth : 100,
//			displayField : 'DTL_NM',
//			valueField : 'DTL_CD',
//			enableRegEx : true,
//			queryMode : 'local',
//			store : Ext.create('Ext.data.Store', {
//				autoLoad : true,
//				storeId : 'storePort',
//				proxy : {
//					type : 'ajax',
//					extraParams : {
//						V_MAST_CD : 'BA07',
//						V_GRID : 'Y'
//					},
//					api : {
//						read : '/HSPF01/common/sql/Combobox.jsp'
//					},
//					reader : {
//						type : 'json',
//						rootProperty : 'resultList'
//					}
//				}
//			}),
//			listConfig : {
//				itemTpl : [ '<div>{DTL_NM} ({DTL_CD}) </div>' ],
//			}
//		}, 
		{
			xtype : 'textfield',
			flex : 1,
			id : 'W_PACKAGE_CNT',
			maxWidth : 500,
			minWidth : 500,
			width : 500,
			fieldLabel : '포장갯수',
			labelAlign : 'right',
			labelWidth : 100,
		}, {
			xtype : 'textfield',
			id : 'W_BANK_CD',
			fieldLabel : '은행코드',
			hidden: true
		}, ]
	}, ],

});