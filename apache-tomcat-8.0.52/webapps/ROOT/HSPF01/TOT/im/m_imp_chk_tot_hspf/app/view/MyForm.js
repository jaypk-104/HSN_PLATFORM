/*
 * File: app/view/MySearchForm.js
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

Ext.define('M_IMP_CHK_TOT_HSPF.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'M_IMP_CHK_TOT_HSPF.view.MyFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.form.field.Date'
    ],

    viewModel: {
        type: 'myform'
    },
    padding: '',
    layout: 'auto',
    bodyPadding: 10,
    header: false,
    title: 'MyForm',

    items: [
        {
            xtype: 'fieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            collapsible: true,
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
                    margins: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            id: 'V_DATE',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '조회일자',
                            labelWidth: 80,
                            name: 'search_field',
                            format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                	nows.setDate(nows.getDate()-1);
                                    datefield.setValue(nows);
                                }	
                            },
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '공급처',
                            id: 'V_S_BP_CD',
                            hidden: true
                        },
                        {
                            xtype: 'textfield',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '공급처',
                            margin: '0 0 0 30',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_S_BP_NM',
                            emptyText: '(Double Click)',
                            hidden: true,
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                            			var popup = Ext.create("Popup.view.WinSBpPop");
                            			popup.show();
                            			
                            			Ext.getCmp('fieldType').setValue('textfield');
                            			var store = Ext.getStore('WinSBpPopStore');
                            			store.removeAll();
                                    });
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '품목코드',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_ITEM_CD'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '품목명',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_ITEM_NM'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '담당자',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_USR_NM'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: 'MAKER',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            id: 'V_MAKER'
                        },
                        {
                        	xtype: 'checkboxfield',
                        	margin: '0 0 0 30',
//                        	fieldLabel: '부품컬럼 보기',
//                        	labelSeparator: '',
                        	boxLabel: '부품컬럼 보기',
                            id: 'V_CHECK',
                            listeners :{
                            	change: function(context, newValue, oldValue, eOpts ){
                            		if(oldValue == newValue) return;
                            		var columns = Ext.getCmp('myGrid').getColumnManager();
                            		
                            		Ext.getCmp('FORECAST').setHidden(!newValue);
                        			Ext.getCmp('BEFORE_DN').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('PLAN_D_QTY').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT1').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT2').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT3').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT4').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT5').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT6').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT7').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT8').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT9').setHidden(!newValue);
                        			columns.getHeaderByDataIndex('AVL_PLAN_DT10').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT11').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT12').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT13').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT14').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT15').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT16').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT17').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT18').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT19').setHidden(!newValue);
//                        			columns.getHeaderByDataIndex('AVL_PLAN_DT20').setHidden(!newValue);
                            	} 
                            }
                        },
                    ]
                },
            ]
        }
    ]

});