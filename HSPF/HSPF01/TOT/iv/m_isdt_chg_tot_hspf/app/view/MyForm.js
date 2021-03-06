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

Ext.define('M_ISDT_CHG_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'M_ISDT_CHG_TOT_HSPF.view.MyFormViewModel',
		'M_ISDT_CHG_TOT_HSPF.view.MyFormViewController',
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
	padding : '',
	layout : 'auto',
	bodyPadding : 10,
	header : false,
	title : 'MyForm',

	items : [ {
		xtype : 'fieldset',
		height : 150,
		maxHeight : 150,
		minHeight : 150,
		collapsible : true,
		title : '[ Search ]',
		layout : {
			type : 'vbox',
			align : 'stretch',
			pack : 'center',
			padding : 10
		},
		items : [ {
			xtype : 'fieldcontainer',
			margins: '',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ {
                xtype: 'textfield',
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '매입번호',
                labelWidth: 80,
                blankText: '',
                id: 'V_IV_NO',
                name: 'search_field',
            }, {
                xtype: 'datefield',
                flex: 1,
                margin: '0 0 0 30',
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '수금만기일',
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
                id: 'V_IV_ISSUE_DT_FR',
                name: 'search_field',
            },
            {
                xtype: 'datefield',
                flex: 1,
                maxWidth: 150,
                minWidth: 150,
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
                id: 'V_IV_ISSUE_DT_TO',
                name: 'search_field',	
            },]
		}, {
			xtype : 'fieldcontainer',
			margins: '',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ 
            {
                xtype: 'datefield',
                flex: 1,
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '매입일',
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
                id: 'V_IV_DT_FR',
                name: 'search_field',
            },
            {
                xtype: 'datefield',
                flex: 1,
                maxWidth: 150,
                minWidth: 150,
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
                id: 'V_IV_DT_TO',
                name: 'search_field',	
            }, ]
		}]
	} ]

});