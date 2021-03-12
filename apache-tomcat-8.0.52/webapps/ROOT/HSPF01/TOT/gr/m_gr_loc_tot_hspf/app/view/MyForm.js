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

Ext.define('M_GR_LOC_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'M_GR_LOC_TOT_HSPF.view.MyFormViewModel',
		'M_GR_LOC_TOT_HSPF.view.MyFormViewController',
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
                id: 'V_MVMT_DT_FR',
                flex: 1,
                maxWidth: 220,
                minWidth: 220,
                width: 220,
                fieldLabel: '입고기간',
                labelWidth: 80,
                format: 'Y-m-d',
                listeners : {
                    render : function(datefield) {
                    	var nows = new Date();
                    	nows.setMonth(0);
                    	nows.setDate(1);
                        datefield.setValue(nows);
                    }	
                },
            },
            {
                xtype: 'datefield',
                id: 'V_MVMT_DT_TO',
                flex: 1,
                maxWidth: 140,
                minWidth: 140,
                width: 20,
                fieldLabel: '~',
                labelWidth: 10,
                format: 'Y-m-d',
                listeners : {
                    render : function(datefield) {
                    	var nows = new Date();
                        datefield.setValue(nows);
                    }	
                },
            }, 
            {
				xtype : 'textfield',
				fieldLabel : '공급처',
				id : 'V_M_BP_CD',
				margin : '0 0 0 30',
				maxWidth : 170,
				minWidth : 170,
				width : 170,
				labelWidth : 80,
				name : 'search_field'
			}, {
				xtype : 'combobox',
				id : 'V_M_BP_NM',
				maxWidth : 170,
				minWidth : 170,
				width : 170,
				name : 'search_field',
				displayField : 'M_BP_NM',
				valueField : 'M_BP_CD',
				enableRegEx : true,
				minChars : 2,
				queryMode : 'local',
				store : 'WinMBpPopStore',
				emptyText : '(입력)',
				margin : '0 0 0 3',
				listeners : {
					change : function(field, newValue, oldValue, eOpts) {
						Ext.getCmp('V_M_BP_CD').setValue(newValue);
					},
					beforequery : function(record) {
						record.query = new RegExp(record.query, 'i');
						record.forceAll = true;
					}
				}
			},
			{
                xtype: 'textfield',
                margin: '0 0 0 30',
                maxWidth: 220,
                minWidth: 220,
                width: 220,
                fieldLabel: '품목코드',
                labelWidth: 80,
                name: 'search_field',
                blankText: '',
                id: 'V_ITEM_CD'
            },
            {
                xtype: 'textfield',
                margin: '0 0 0 30',
                maxWidth: 220,
                minWidth: 220,
                width: 220,
                fieldLabel: '품목명',
                labelWidth: 80,
                name: 'search_field',
                blankText: '',
                id: 'V_ITEM_NM'
            },
			]
		}, ]
	} ]

});