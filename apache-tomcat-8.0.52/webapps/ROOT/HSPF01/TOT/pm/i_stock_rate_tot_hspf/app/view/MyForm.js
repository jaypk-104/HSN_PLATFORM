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

Ext.define('I_STOCK_RATE_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'I_STOCK_RATE_TOT_HSPF.view.MyFormViewModel',
		'I_STOCK_RATE_TOT_HSPF.view.MyFormViewController',
		'I_STOCK_RATE_TOT_HSPF.view.MonthField',
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
			}, {
				xtype : 'textfield',
				margin : '0 0 0 30',
				maxWidth : 230,
				minWidth : 230,
				width : 230,
				fieldLabel : '품목명',
				labelWidth : 80,
				blankText : '',
				name: 'search_field',
				id : 'V_ITEM_NM',
			}, {
                xtype: 'combobox',
                margin : '0 0 0 30',
                id: 'V_GROUP_TYPE_CD',
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '품목그룹',
                labelWidth: 80,
                displayField: 'DTL_NM',
                valueField: 'DTL_CD',
                value : 'T',
                editable: false,
                store: Ext.create('Ext.data.Store',{
              		autoLoad: true,
              		storeId: 'storeSC12',
              		proxy: {
                          type: 'ajax',
                          extraParams: {
                           	V_MAST_CD: 'SC12',
                           	V_GRID: 'N'
                          },	
                          api: {
                              read: '/HSPF01/common/sql/Combobox.jsp'
                          },
                          reader: {
                              type: 'json',
                              rootProperty: 'resultList'
                          }
                      }
              	}),
              	listConfig: {
                    itemTpl: [
                        '<div>{DTL_NM} [{DTL_CD}]</div>'
                    ]
                },
            }, ]
		}, ]
	} ]

});