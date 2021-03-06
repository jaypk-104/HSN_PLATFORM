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

Ext.define('S_SCM_TO_DN_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'S_SCM_TO_DN_TOT_HSPF.view.MyFormViewModel',
		'S_SCM_TO_DN_TOT_HSPF.view.MyFormViewController',
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
			items : [ 
				{
                xtype: 'datefield',
                id: 'V_DN_DT',
                flex: 1,
                maxWidth: 220,
                minWidth: 220,
                width: 220,
                fieldLabel: '출고일자',
                labelWidth: 80,
                format: 'Y-m-d',
                listeners: {
                	render : function(datefield) {
                    	var nows = new Date();
                    	nows.setMonth(nows.getMonth() - 1);
                        datefield.setValue(nows);
                    }	
			    }
            }, 
            {
			    xtype: 'datefield',
			    flex: 1,
			    maxWidth: 170,
			    minWidth: 170,
			    width: 170,
			    fieldLabel: '~',
			    labelWidth: 20,
			    format: 'Y-m-d',
			    id: 'V_DN_DT_TO',
			    listeners: {
			    	render : function(datefield) {
                    	var nows = new Date();
                        datefield.setValue(nows);
                    }	
			    }
			},
            
            {
                xtype: 'textfield',
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '매출처',
                labelWidth: 80,
                margin : '0 0 0 30',
                name: 'search_field',
                blankText: '',
                emptyText: '(Double Click)',
                id: 'V_BP_NM',
                name: 'search_field',
                listeners: {
                    afterrender: function(c) {
                    	c.getEl().on('dblclick', function() {
                			var popup = Ext.create("Popup.view.WinBpPop");
                			popup.show();
                			
                			Ext.getCmp('fieldType').setValue('M_SL_TRANS_DISTR_1_F');
                			var store = Ext.getStore('WinBpPopStore');
                			store.removeAll();
                        });
                    }
                }
            }, {
				xtype : 'combobox',
				margin : '0 0 0 30',
				maxWidth : 200,
				minWidth : 200,
				width : 200,
				fieldLabel : '입고유무',
				labelWidth : 70,
				id : 'V_GR_YN',
				displayField : 'DTL_NM',
				valueField : 'DTL_CD',
				value : '',
				editable: false,
				store : Ext.create('Ext.data.Store', {
					fields : [ 'DTL_CD', 'DTL_NM' ],
					data : [ {
						"DTL_CD" : "",
						"DTL_NM" : "전체"
					}, {
						"DTL_CD" : "Y",
						"DTL_NM" : "유"
					}, {
						"DTL_CD" : "N",
						"DTL_NM" : "무"
					} ]
				}),
			}, ]
		}, 
		{
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
	                xtype: 'textfield',
	                id: 'V_ITEM_CD',
	                cls: 'search',
	                flex: 1,
	                maxWidth: 220,
	                minWidth: 220,
	                width: 220,
	                fieldLabel: '품목코드',
	                labelWidth: 70,
				}, 
				{
					xtype: 'textfield',
					id: 'V_ITEM_NM',
					cls: 'search',
					margin : '0 0 0 30',
					flex: 1,
					maxWidth: 220,
					minWidth: 220,
					width: 220,
					fieldLabel: '품목명',
					labelWidth: 70,
				}, 
			]
		},
		]
	} ]

});