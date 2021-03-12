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

Ext.define('A_TEMP_GL_VS_ERP_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'A_TEMP_GL_VS_ERP_HSPF.view.MyFormViewModel',
		'A_TEMP_GL_VS_ERP_HSPF.view.MyFormViewController',
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
			padding : 0
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
			items : [
				{
                    xtype: 'datefield',
                    flex: 1,
                    maxWidth: 190,
                    minWidth: 190,
                    width: 190,
                    margin: '0 0 0 15',
                    fieldLabel: '전표일자',
                    labelWidth: 60,
                    format: 'Y-m-d',
                    listeners : {
                        render : function(datefield) {
                        	var nows = new Date();
                        	nows.setMonth(0);
                        	nows.setDate(1);
                            datefield.setValue(nows);
                        }	
                    },
                    id: 'V_TEMP_GL_DT_FR',
                    name: 'search_field',
                },
                {
                    xtype: 'datefield',
                    flex: 1,
                    maxWidth: 140,
                    minWidth: 140,
                    width: 140,
                    fieldLabel: '~',
                    labelWidth: 10,
                    format: 'Y-m-d',
                    listeners : {
                        render : function(datefield) {
                        	var nows = new Date();
                            datefield.setValue(nows);
                        }	
                    },
                    id: 'V_TEMP_GL_DT_TO',
                    name: 'search_field',	
                },
                {
				xtype : 'textfield',
				fieldLabel : '부서명',
				id : 'V_DEPT_NM',
				maxWidth : 200,
				minWidth : 200,
				width : 200,
				labelWidth : 50,
				margin : '0 0 0 30',
				name : 'search_field',
			},
			{
				xtype : 'textfield',
				fieldLabel : '전표번호',
				id : 'V_TEMP_GL_NO',
				maxWidth : 200,
				minWidth : 200,
				width : 200,
				labelWidth : 60,
				margin : '0 0 0 30',
				name : 'search_field',
			},
			{
				xtype : 'combobox',
				margin : '0 0 0 30',
				maxWidth : 150,
				minWidth : 150,
				width : 150,
				fieldLabel : '이상유무',
				labelWidth : 60,
				blankText : '',
				id : 'V_ERROR_YN',
				displayField : 'DTL_NM',
				valueField : 'DTL_CD',
				value : 'Y',
				editable : false,
				name : 'search_field',
				store : Ext.create('Ext.data.Store', {
					fields : [ 'DTL_CD', 'DTL_NM' ],
					data : [ {
						"DTL_CD" : "Y",
						"DTL_NM" : "유"
					}, {
						"DTL_CD" : "N",
						"DTL_NM" : "무"
					} ]
				}),
				listeners : {
					beforequery : function(record) {
						record.query = new RegExp(record.query, 'i');
						record.forceAll = true;
					}
				}
			},
			]
		}, ]
	} ]

});