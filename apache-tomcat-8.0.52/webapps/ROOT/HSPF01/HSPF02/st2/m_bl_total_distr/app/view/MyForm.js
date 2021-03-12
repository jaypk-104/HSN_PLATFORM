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

Ext.define('M_BL_TOTAL_DISTR.view.MyForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform',

    requires: [
        'M_BL_TOTAL_DISTR.view.MyFormViewModel',
        'M_BL_TOTAL_DISTR.view.MyFormViewController',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
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
            height: 290,
            maxHeight: 290,
            minHeight: 290,
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
                            xtype: 'textfield',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            labelWidth: 80,
                            fieldLabel: 'B/L 번호',
                            name: 'search_field',
                            emptyText: '(Double Click)',
                            listeners: {
                                afterrender: function(c) {
                                	c.getEl().on('dblclick', function() {
                                		var popup = Ext.create("M_BL_TOTAL_DISTR.view.WinBlPop");
                            			popup.setSize(Ext.getBody().getViewSize());
                                        
                                        popup.center();
                                        popup.show();

                                        var popStore = Ext.getStore('PopStore');
                                        popStore.removeAll();                                        
                                        
                                    });
                                }
                            },
                            id: 'V_BL_DOC_NO',
                            fieldStyle: 'background-color: #ffefbb'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '품의일자',
                            labelWidth: 80,
                            fieldStyle: 'text-align: center',
                            id: 'V_APPROV_DT',
                            editable : false,
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_PO_NO',
                            margin: '0 0 0 30',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '발주번호',
                            labelWidth: 80,
                            editable : false
                        },
                    ]
            	},
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
                            xtype: 'textfield',
                            id: 'V_APPROV_NO',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: '품의번호',
                            labelWidth: 80,
                            editable : false
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_APPROV_NM',
                            margin: '0 0 0 30',
                            maxWidth: 520,
                            minWidth: 520,
                            width: 520,
                            fieldLabel: '품의명',
                            labelWidth: 80,
                            editable : false
                        },
                    ]
                },
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
                        xtype: 'textfield',
                        maxWidth: 230,
                        minWidth: 230,
                        width: 230,
                        fieldLabel: 'L/C번호',
                        labelWidth: 80,
                        id: 'V_LC_DOC_NO',
                        editable : false,
                    },
                    {
                        xtype: 'textfield',
                        margin: '0 0 0 30',
                        maxWidth: 180,
                        minWidth: 180,
                        width: 180,
                        fieldLabel: 'L/C오픈일',
                        labelWidth: 80,
                        fieldStyle: 'text-align: center',
                        id: 'V_OPEN_DT',
                        editable : false,
                    },
                    {
                        xtype: 'textfield',
        	        	maxWidth: 310,
        	        	minWidth: 310,
        	        	width: 310,
                        fieldLabel: '결제방법',
                        id: 'V_PAY_METH_NM',
                        margin: '0 0 0 30',
                        labelWidth: 80,
                        editable: false,
                    },
                    ]
                },
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
                            xtype: 'textfield',
                            maxWidth: 230,
                            minWidth: 230,
                            width: 230,
                            fieldLabel: 'B/L 관리번호',
                            labelWidth: 80,
                            editable: false,
                            id: 'V_BL_NO',
                            hidden: true,
                        },
                        {
            	        	xtype: 'textfield',
            	        	maxWidth: 340,
            	        	minWidth: 340,
            	        	width: 340,
            	        	fieldLabel: '가격조건',
            	        	id: 'V_IN_TERMS_NM',
            	        	labelWidth: 80,
            	        	editable: false,
            	        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margin: '0 0 0 130',
                            maxWidth: 160,
                            minWidth: 160,
                            width: 160,
                            fieldLabel: '선적환율',
                            labelWidth: 80,
                            editable: false,
                            fieldStyle: 'text-align: right',
                            id: 'V_XCH_RATE',
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            margin: '0 0 0 10',
                            maxWidth: 140,
                            minWidth: 140,
                            width: 140,
                            fieldLabel: '선물환율',
                            labelWidth: 60,
                            editable: false,
                            fieldStyle: 'text-align: right',
                            id: 'V_FORWARD_XCH',
                        },
                    ]
                },
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
                            xtype: 'textfield',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '선적일',
                            labelWidth: 80,
                            editable: false,
                            fieldStyle: 'text-align: center',
                            id: 'V_LOADING_DT'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 80',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '입고일',
                            labelWidth: 80,
                            editable: false,
                            fieldStyle: 'text-align: center',
                            id: 'V_MVMT_DT'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 180,
                            minWidth: 180,
                            width: 180,
                            fieldLabel: '통관일',
                            labelWidth: 80,
                            editable: false,
                            fieldStyle: 'text-align: center',
                            id: 'V_ID_DT'
                        },
                    ]
                }
            ]
        }
    ]

});