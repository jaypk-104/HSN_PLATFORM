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

Ext.define('I_INVENTORY_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'I_INVENTORY_TOT_HSPF.view.MyFormViewModel',
		'I_INVENTORY_TOT_HSPF.view.MyFormViewController',
		'I_INVENTORY_TOT_HSPF.view.MonthField',
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
                xtype: 'monthfield',
                flex: 1,
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '기준년월',
                labelWidth: 80,
                format: 'Y-m',
                id: 'V_DATE',
                editable: false,
                listeners : {
                    render : function(datefield) {
                    	var nows = new Date();
                        datefield.setValue(nows);
                    }	
                },
            }, {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : '품목코드',
				labelWidth : 80,
				blankText : '',
				name: 'search_field',
				id : 'V_ITEM_CD',
			}, ]
		}, {
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
				xtype : 'textfield',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : 'L/C 번호',
				labelWidth : 80,
				blankText : '',
				name: 'search_field',
				id : 'V_LC_DOC_NO',
			}, {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : 'B/L 번호',
				labelWidth : 80,
				blankText : '',
				name: 'search_field',
				id : 'V_BL_DOC_NO',
			}, ]
		},]
	} ]

});