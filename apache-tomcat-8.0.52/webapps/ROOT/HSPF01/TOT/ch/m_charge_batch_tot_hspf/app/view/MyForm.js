/*
 * File: app/view/MyForm.js
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

Ext.define('M_CHARGE_BATCH_TOT_HSPF.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'M_CHARGE_BATCH_TOT_HSPF.view.MyFormViewModel',
        'M_CHARGE_BATCH_TOT_HSPF.view.MyFormViewController',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
    ],

    controller: 'myform',
    viewModel: {
        type: 'myform'
    },
    layout: 'auto',
    bodyPadding: '0 10 0 10',
    header: false,
    title: 'My Form',

    items: [
        {
            xtype: 'fieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            title: '[ Search ]',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center'
            },
            items: [
            	{
                    xtype: 'fieldcontainer',
                    flex: 1,
                    height: 35,
                    maxHeight: 35,
                    minHeight: 35,
                    width: 400,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                    	{
                            xtype: 'datefield',
                            flex: 1,
                            maxWidth: 220,
                            minWidth: 220,
                            width: 220,
                            fieldLabel: '발생일',
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
                            id: 'V_CH_DT_FR',
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
                            id: 'V_CH_DT_TO',
                            name: 'search_field',	
                        },
                        {
            				xtype : 'textfield',
            				id : 'V_BP_CD',
            				fieldLabel : '지급처',
            				margin : '0 0 0 30',
            				maxWidth : 170,
            				minWidth : 170,
            				width : 170,
            				labelWidth : 80,
            				name : 'search_field'
            			}, 
            			{
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
            			}, 
            			{
            				xtype : 'combobox',
            				margin : '0 0 0 30',
            				maxWidth : 240,
            				minWidth : 240,
            				width : 240,
            				fieldLabel : '경비항목',
            				labelWidth : 80,
            				blankText : '',
            				id : 'V_CHARGE_CD',
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
            						"DTL_CD" : "SPC01",
            						"DTL_NM" : "신용장개설 수수료"
            					}, {
            						"DTL_CD" : "SPC12",
            						"DTL_NM" : "보험료"
            					}, {
            						"DTL_CD" : "SPC26",
            						"DTL_NM" : "AMEND수수료"
            					}, {
            						"DTL_CD" : "SPC41",
            						"DTL_NM" : "인수수수료"
            					}, {
            						"DTL_CD" : "SPC80",
            						"DTL_NM" : "LG 수수료"
            					} ]
            				}),
            			},
            			{
                            xtype: 'textfield',
                            id: 'V_LC_DOC_NO',
                            margin: '0 0 0 30',
                            maxWidth: 220,
                            minWidth: 220,
                            width: 220,
                            fieldLabel: 'L/C번호',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_TEMP_GL_NO',
                            margin: '0 0 0 30',
                            maxWidth: 220,
                            minWidth: 220,
                            width: 220,
                            fieldLabel: '전표번호',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
                    ]
            	},
            ]
        }
    ]

});