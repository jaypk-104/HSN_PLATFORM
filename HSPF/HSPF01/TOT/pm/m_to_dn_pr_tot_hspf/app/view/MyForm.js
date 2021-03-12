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

Ext.define('M_TO_DN_PR_TOT_HSPF.view.MyForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.myform',

	requires : [ 
		'M_TO_DN_PR_TOT_HSPF.view.MyFormViewModel',
		'M_TO_DN_PR_TOT_HSPF.view.MyFormViewController',
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
                xtype: 'datefield',
                flex: 1,
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '출고일자',
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
                id: 'V_DN_DT_FR',
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
                id: 'V_DN_DT_TO',
                name: 'search_field',	
            }, {
				xtype : 'textfield',
				fieldLabel : '출고처',
				id : 'V_S_BP_CD',
				margin : '0 0 0 30',
				maxWidth : 170,
				minWidth : 170,
				width : 170,
				labelWidth : 80,
				name : 'search_field'
			}, {
				xtype : 'combobox',
				id : 'V_S_BP_NM',
				maxWidth : 170,
				minWidth : 170,
				width : 170,
				name : 'search_field',
				displayField : 'S_BP_NM',
				valueField : 'S_BP_CD',
				enableRegEx : true,
				minChars : 2,
				queryMode : 'local',
				store : 'WinSBpPopStore',
				emptyText : '(입력)',
				margin : '0 0 0 3',
				listeners : {
					change : function(field, newValue, oldValue, eOpts) {
						Ext.getCmp('V_S_BP_CD').setValue(newValue);
					},
					beforequery : function(record) {
						record.query = new RegExp(record.query, 'i');
						record.forceAll = true;
					}
				}
			}, {
				xtype : 'textfield',
				id : 'V_M_BP_CD',
				fieldLabel : '매입처',
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
			}, ]
		}, {
			xtype : 'fieldcontainer',
			margins: '',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ 
            {
	        	xtype: 'textfield',
	        	id: 'V_DN_NO',
	        	maxWidth: 230,
	        	minWidth: 230,
	        	width: 230,
	        	fieldLabel: '출하번호',
	        	labelWidth: 80,
	        	name: 'search_field',
	        },
	        {
                xtype: 'combobox',
                maxWidth: 230,
                minWidth: 230,
                width: 230,
                fieldLabel: '매출채권형태',
                id: 'V_SALE_TYPE',
                blankText: '',
                displayField: 'DTL_NM',
                valueField: 'DTL_CD',
                editable: false,
                margin: '0 0 0 30',
                value: 'T',
                store: Ext.create('Ext.data.Store',{
              		autoLoad: true ,
              		storeId: 'storeSC02',
              		proxy: {
                          type: 'ajax',
                          extraParams: {
                           	V_MAST_CD: 'SC02',
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
                              '<div>{DTL_NM} ({DTL_CD}) </div>'
                              ],
                      }
            
            },
	        {
				xtype : 'combobox',
				margin: '0 0 0 30',
				maxWidth: 180,
                minWidth: 180,
                width: 180,
				fieldLabel : '출력구분',
				labelWidth : 60,
				value : 'QTY',
				id : 'V_PRINT_TYPE',
				displayField : 'DTL_NM',
				valueField : 'DTL_CD',
				editable: false,
				store : Ext.create('Ext.data.Store', {
					fields : [ 'DTL_CD', 'DTL_NM' ],
					data : [ {
						"DTL_CD" : "QTY",
						"DTL_NM" : "수량"
					}, {
						"DTL_CD" : "PRC",
						"DTL_NM" : "단가,금액"
					} ]
				}),
			}, ]
		}]
	} ]

});