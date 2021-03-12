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

Ext.define('M_BC_DISTB.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

    margin: '-5 0 0 0',
    padding: '',
    layout: 'auto',
    bodyPadding: '0 10 0 10',
    header: false,
    title: 'MyForm1',

    items: [
        {
            xtype: 'fieldset',
            cls: 'gridfieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            title: '[ Search ]',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center',
                padding: 10
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            flex: 1,
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: 'B/L일자',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setDate(1);
                                    datefield.setValue(nows);
                                }	
                            },
                            labelWidth: 80,
                            id: 'V_LOADING_DT_FR',
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
                            id: 'V_LOADING_DT_TO',
                            name: 'search_field',
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: '매입처',
                            id: 'V_M_BP_NM',
                            labelWidth: 50,
                            name: 'search_field',
                            blankText: '',
                            emptyText: '(Double Click)',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinMBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('M_BC_DISTB');
                            			var store = Ext.getStore('WinMBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            fieldLabel: 'B/L 번호',
                            blankText: '',
                            labelWidth: 70,
                            id: 'V_BL_DOC_NO',
                            name: 'search_field',
                            margin: '0 0 0 30',
                        },
                        {
            	        	xtype: 'combobox',
                            margin: '0 0 0 30',
                            maxWidth: 170,
                            minWidth: 170,
                            width: 170,
            	        	fieldLabel: '통관구분',
            	        	id: 'V_CC_YN',
                            labelWidth: 70,
            	        	blankText: '',
            	        	displayField: 'DTL_NM',
            	        	valueField: 'DTL_CD',
            	        	editable: false,
            	        	store : Ext.create('Ext.data.Store',{
        						fields : ['DTL_CD', 'DTL_NM'],
        						data : [['T','전체'],['Y', '통관'],['N', '미통관']]
        					}),
        					value :'T'
            	        },
                        {
                        	xtype: 'combobox',
                        	margin: '0 0 0 30',
                        	maxWidth: 170,
                        	minWidth: 170,
                        	width: 170,
                        	fieldLabel: '이자상태',
                        	id: 'V_INTEREST',
                        	labelWidth: 70,
                        	blankText: '',
                        	displayField: 'DTL_NM',
                        	valueField: 'DTL_CD',
                        	editable: false,
                        	store : Ext.create('Ext.data.Store',{
                        		fields : ['DTL_CD', 'DTL_NM'],
                        		data : [['T','전체'],['A', '정상'],['B', '연체'],['C', '장기'],['D', '미착']]
                        	}),
        					value :'T'
                        }
                    ]
                }
            ]
        }
    ]

});