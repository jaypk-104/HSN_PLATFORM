/*
 * File: app/view/MyWindow1.js
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

Ext.define('M_GR_TO_DN_TOT_HSPF.view.MyWindow1', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow1',

    requires: [
        'M_GR_TO_DN_TOT_HSPF.view.MyWindowViewModel1',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.toolbar.Spacer'
    ],

    viewModel: {
        type: 'mywindow1'
    },
    flex: 1,
    modal: true,
    height: 912,
    width: 1094,
    bodyPadding: 10,
    title: '■ 상태별 매출금액 계산 내역서',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    autoScroll: true,
    items: [
        {
            xtype: 'container',
            flex: 1,
            
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    maxWidth: 350,
                    minWidth: 350,
                    padding: '',
                    width: 350,
                    title: '[ 매입원가 ]',
                    scrollable: 'vertical',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'middle'
                            },

                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    padding: 10,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '매입BOX수량',
                                            labelWidth: 125,
                                            id: 'W_IV_BOX_QTY',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '매입중량(KG)',
                                            labelWidth: 125,
                                            id: 'W_IV_QTY',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '1.물품금액(선물)',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                            id: 'W_IV_E_AMT',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '2.부대경비',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                            id: 'W_DISTR_AMT',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.1. L/C 오픈비',
                                            labelWidth: 110,
                                            id: 'W_LC_OPEN_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.2. L/C AMEND',
                                            labelWidth: 110,
                                            id: 'W_LC_AMEND_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.3 기타경비',
                                            labelWidth: 110,
                                            id: 'W_ETC_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.4 보험료',
                                            labelWidth: 110,
                                            id: 'W_INSUR_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.5 통관료',
                                            labelWidth: 110,
                                            id: 'W_DISTR_CC_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.6 관세',
                                            labelWidth: 110,
                                            id: 'W_TAX_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.7 인수수수료',
                                            labelWidth: 110,
                                            id: 'W_REC_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.8 기타경비',
                                            labelWidth: 110,
                                            id: 'W_ETC_AMT_2',
                                            value: '0',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'splitter',
                                            height: 10,
                                            style: 'border-top : 1px solid gray'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '영업상입고금액',
                                            labelWidth: 125,
                                            id: 'W_IV_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '매입단가',
                                            labelWidth: 125,
                                            id: 'W_IV_PRC',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '보유일수',
                                            labelWidth: 125,
                                            id: 'W_OWN_DT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'tbspacer',
            flex: 1,
            maxWidth: 5,
            width: 5
        },
        {
            xtype: 'container',
            flex: 1,
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    flex: 1,
                    maxWidth: 350,
                    minWidth: 350,
                    padding: '',
                    width: 350,
                    title: '[ B/L 출고원가 ]',
                    scrollable: 'vertical',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    padding: 10,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '출고BOX수량',
                                            labelWidth: 125,
                                            id: 'W_DN_BOX_QTY',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '출고중량(KG)',
                                            labelWidth: 125,
                                            id: 'W_DN_QTY',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '1.출고원가',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id: 'W_DN_COG_AMT2'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '2.출고기타원가합계',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id: 'W_DN_ETC_COG_SUM_AMT'
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.1.보관료',
                                            labelWidth: 110,
                                            id: 'W_ST_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.2 입출고비',
                                            labelWidth: 110,
                                            id: 'W_IO_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.3 작업비',
                                            labelWidth: 110,
                                            id: 'W_JOB_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.4 계근비',
                                            labelWidth: 110,
                                            id: 'W_WT_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.5 검역수수료',
                                            labelWidth: 110,
                                            id: 'W_CK_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.6 항운노조비',
                                            labelWidth: 110,
                                            id: 'W_AP_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.7 이고료',
                                            labelWidth: 110,
                                            id: 'W_MV_AMT',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            margin: '0 0 10 15',
                                            fieldLabel: '2.8 금융비',
                                            labelWidth: 110,
                                            id: 'W_BK_AMT',
                                        	editable: false,
                                            fieldStyle: 'text-align: right',
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '3.마진율/금액',
                                            labelWidth: 125,
                                            id: 'W_MG',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '4.기간/연체이자',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id: 'W_PER_OV_AMT'
                                        },
                                        {
                                            xtype: 'splitter',
                                            height: 10,
                                            style: 'border-top : 1px solid gray'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'B/L 매출금액',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id: 'W_DN_CALC_AMT'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'B/L 매출단가',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id: 'W_DN_PRC'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: 'B/L 매출원가',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id: 'W_DN_COG_AMT'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'tbspacer',
            flex: 1,
            maxWidth: 5,
            width: 5
        },
        {
            xtype: 'container',
            flex: 1,
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'fieldset',
                    height: 300,
                    maxHeight: 300,
                    maxWidth: 350,
                    minHeight: 300,
                    minWidth: 350,
                    padding: '',
                    width: 350,
                    title: '[ 최종매출금액 ]',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'middle'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    padding: 10,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '출고BOX수량',
                                            labelWidth: 125,
                                            id: 'W_DN_BOX_QTY2',
                                            fieldStyle: 'text-align: right',
                                        	editable: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '계근중량(KG)',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id:'W_REAL_QTY'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '최종매출금액',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id:'W_LAST_DN_AMT'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '최종매출단가',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id:'W_LAST_DN_PRC'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    flex: 1,
                    maxWidth: 350,
                    minWidth: 350,
                    padding: '',
                    width: 350,
                    title: '[ 손익 ]',
                    items: [
                        {
                            xtype: 'container',
                            layout: {
                                type: 'hbox',
                                align: 'middle'
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    padding: 10,
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '최종매출금액',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id:'W_LAST_DN_AMT2'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '최종매출원가',
                                            labelWidth: 125,
                                        	editable: false,
                                            fieldStyle: 'text-align: right',
                                        	id:'W_LAST_COG_AMT'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '경상이익',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id:'W_PROF_AMT'
                                        },
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '경상이익률',
                                            labelWidth: 125,
                                            fieldStyle: 'text-align: right',
                                        	editable: false,
                                        	id:'W_PROF_RT'
                                        },
                                        {
                                        	xtype: 'container',
                                        	flex: 1,
                                            layout: {
                                                type: 'vbox',
                                                align: 'stretch',
                                                pack: 'center'
                                            },
                                        	items: [
														{
															xtype: 'label',
															text: '* USANSE이자 미포함',
															style: 'text-align: right',
															margin: '0 27 0 0'
														}
                                        	       ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});