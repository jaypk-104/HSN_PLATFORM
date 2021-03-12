/*
 * File: app/view/MyForm.js
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

Ext.define('S_BL_DIST_WGT_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'S_BL_DIST_WGT_TOT_HSPF.view.MyFormViewModel',
		'S_BL_DIST_WGT_TOT_HSPF.view.MyFormViewController',
		'Ext.form.FieldSet', 
		'Ext.form.FieldContainer', 
		'Ext.form.field.Date',
		'Ext.form.field.Text', 
		'Ext.form.field.Number',
	],
	
	controller: 'myform',
	viewModel : {
		type : 'myform'
	},
	margin : '-5 0 0 0',
	padding : '',
	layout : 'auto',
	bodyPadding : '0 10 0 10',
	header : false,
	title : 'MyForm',

	items : [ {
		xtype : 'fieldset',
		height : 120,
		maxHeight : 120,
		minHeight : 120,
		collapsible : true,
		title : '[ SEARCH ]',
		layout : {
			type : 'vbox',
			align : 'stretch',
			pack : 'center',
			padding : 10
		},
		items : [ {
			xtype : 'fieldcontainer',
			flex: 1,
            height: 35,
            maxHeight: 35,
            minHeight: 35,
            width: 400,
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ {
                xtype: 'datefield',
                id: 'V_INV_DT',
                flex: 1,
                maxWidth: 220,
                minWidth: 220,
                width: 220,
                fieldLabel: '인보이스일자',
                labelWidth: 80,
                format: 'Y-m-d',
                listeners : {
                	render : function(datefield) {
                    	var nows = new Date();
                        datefield.setValue(nows);
                    }
                },
            }, {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 220,
				minWidth : 220,
				width : 220,
				fieldLabel : '인보이스번호',
				labelWidth : 80,
				blankText : '',
				name: 'search_field',
				id : 'V_INVOICE_NO',
			}, {
				xtype : 'textfield',
				fieldLabel : '거래처',
				id : 'V_BP_CD',
				margin : '0 0 0 30',
				maxWidth : 170,
				minWidth : 170,
				width : 170,
				labelWidth : 80,
				name : 'search_field'
			}, {
				xtype : 'combobox',
				id : 'V_BP_NM',
				maxWidth : 170,
				minWidth : 170,
				width : 170,
				name : 'search_field',
				displayField : 'BP_NM',
				valueField : 'BP_CD',
				enableRegEx : true,
				minChars : 2,
				queryMode : 'local',
				store : 'WinBpPopStore',
				emptyText : '(입력)',
				margin : '0 0 0 3',
				listeners : {
					change : function(field, newValue, oldValue, eOpts) {
						Ext.getCmp('V_BP_CD').setValue(newValue);
					},
					beforequery : function(record) {
						record.query = new RegExp(record.query, 'i');
						record.forceAll = true;
					}
				}
			}, ]
		}, ]
	} ]

});