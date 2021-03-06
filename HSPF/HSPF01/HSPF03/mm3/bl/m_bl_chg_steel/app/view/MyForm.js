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

Ext.define('M_BL_CHG_STEEL.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'Ext.form.FieldSet', 
		'Ext.form.FieldContainer', 
		'Ext.form.field.Date' 
	],

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
		cls : 'gridfieldset',
		height : 150,
		maxHeight : 150,
		minHeight : 150,
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
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : '품의번호',
				labelWidth : 80,
				name : 'search_field',
				blankText : '',
				id : 'V_APPROV_NO'
			}, {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : '품의명',
				labelWidth : 80,
				name : 'search_field',
				blankText : '',
				id : 'V_APPROV_NM'
			} ]
		}, {
			xtype : 'fieldcontainer',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : 'BL번호',
				labelWidth : 80,
				name : 'search_field',
				blankText : '',
				id : 'V_BL_DOC_NO'
			} ]
		} ]
	} ]

});