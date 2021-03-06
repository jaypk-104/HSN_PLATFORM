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

Ext.define('M_B_CON_DISTB.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'M_B_CON_DISTB.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
        'Ext.form.field.Number'
    ],

    viewModel: {
        type: 'mysearchform'
    },
    padding: '',
    layout: 'auto',
    bodyPadding: 10,
    header: false,
    title: 'MyForm',

//    items: [
//        {
//            xtype: 'fieldset',
//            cls: 'gridfieldset',
//            height: 150,
//            maxHeight: 150,
//            minHeight: 150,
//            collapsible: true,
//            title: '[ 수입육 B/L정보 ]',
//            layout: {
//                type: 'vbox',
//                align: 'stretch',
//                pack: 'center',
//                padding: 10
//            },
//            items: [
//                {
//                    xtype: 'fieldcontainer',
//                    layout: {
//                        type: 'hbox',
//                        align: 'stretch'
//                    },
//                    items: [
//                        {
//                            xtype: 'textfield',
//                            maxWidth: 250,
//                            minWidth: 250,
//                            width: 250,
//                            fieldLabel: 'B/L 관리번호',
//                            name: 'search_field',
//                            blankText: '',
//                            emptyText: '(Double Click)',
//                            listeners: {
//                                afterrender: function(c) {
//                                	c.getEl().on('dblclick', function() {
//                                		var popup = Ext.create("M_B_CON_DISTB.view.WinBlPop");
//                            			popup.setSize(Ext.getBody().getViewSize());
//                                        
//                                        popup.center();
//                                        popup.show();
//
//                                        var popStore = Ext.getStore('PopStore');
//                                        popStore.removeAll();                                        
//                                        
//                                    });
//                                }
//                            },
//                            id: 'V_BL_NO',
//                            fieldStyle: 'background-color: #ffefbb'
//                        },
//                        {
//                            xtype: 'datefield',
////                            flex: 1,
//                            margin: '0 0 0 30',
//                            maxWidth: 230,
//                            minWidth: 230,
//                            width: 230,
//                            fieldLabel: '선적일',
//                            format: 'Y-m-d',
//                            labelWidth: 80,
//                            id: 'V_LOADING_DT',
//                            listeners : {
////                                render : function(datefield) {
////                                	var nows = new Date();
////                                    datefield.setValue(nows);
////                                },
//                                change : function () {
//                                	//환율 가져오기
//                    				Ext.Ajax.request({
//                    					url : '/HSPF01/common/sql/ERP_DB.jsp',
//                    					method : 'post',
//                    					params: {
//                    						V_TYPE: 'XCH_RT',
//                    						V_DATE : Ext.getCmp('V_LOADING_DT').getValue(),
//                    						V_CUR : Ext.getCmp('V_CUR').getValue(),
//                    						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//                    						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
//                    					},
//                    					success: function(response) {
//                    						var res = response.responseText;
//                    						if(res == 'NODATA') {
////                    							Ext.Msg.alert('확인', '해당 날짜 환율정보가 없습니다. 관리자에게 문의하거나 임의로 입력하세요.');
//                    						} else {
//                    							Ext.getCmp('V_XCH_RATE').setValue(res);
//                    						}
//                    					}
//                    				});
//                                }
//                            },
//                        },
//                        {
//                            xtype: 'textfield',
//                            margin: '0 0 0 30',
//            	        	maxWidth: 300,
//            	        	minWidth: 300,
//            	        	width: 300,
//                            fieldLabel: '매입처',
//                            labelWidth: 70,
//                            blankText: '',
//                            id: 'V_M_BP_NM2',
//                            listeners: {
//                                afterrender: function(c) {
//                                	c.getEl().on('dblclick', function() {
//                            			var popup = Ext.create("Popup.view.WinMBpPop");
//                            			popup.show();
//                            			
//                            			Ext.getCmp('fieldType').setValue('M_B_CON_DISTB2');
//                            			var store = Ext.getStore('WinMBpPopStore');
//                            			store.removeAll();
//                                    });
//                                }
//                            },
//                            
//                        },
//                        {
//            	        	xtype: 'combobox',
//            	        	margin: '0 0 0 30',
//            	        	maxWidth: 170,
//            	        	minWidth: 170,
//            	        	width: 170,
//            	        	fieldLabel: '통화',
//            	        	labelWidth: 60,
//            	        	name: 'search_field',
//            	        	blankText: '',
//            	        	id: 'V_CUR',
//            	        	value: 'USD',
//            	        	displayField: 'DTL_NM',
//            	        	valueField: 'DTL_CD',
//            	        	editable: false,
//            	        	store: Ext.create('Ext.data.Store',{
//            	        		autoLoad: true,
//            	        		storeId: 'store1',
//            	        		proxy: {
//            	        			type: 'ajax',
//            	        			extraParams: {
//            	        				V_MAST_CD: 'BA04',
//            	        				V_GRID: 'Y'
//            	        			},	
//            	        			api: {
//            	        				read: '/HSPF01/common/sql/Combobox.jsp'
//            	        			},
//            	        			reader: {
//            	        				type: 'json',
//            	        				rootProperty: 'resultList'
//            	        			}
//            	        		}
//            	        	}),
//            	        },
//                        {
//                            xtype: 'numberfield',
//                            flex: 1,
//                            margin: '0 0 0 30',
//            	        	maxWidth: 170,
//            	        	minWidth: 170,
//            	        	width: 170,
//                            fieldLabel: '환율',
//                            labelWidth: 60,
//                            id: 'V_XCH_RATE',
//                            value: 1,
//                            listeners: {
//                            	change: function(field, newValue, oldValue, eOpts) {
//                            		var store1 = Ext.getStore('MyStore1');
//                            		var XCH_RATE2 = Math.floor(newValue*1000)/1000;
//                            		var LOC_AMT2 = 0;
//                            		
//                            		store1.each(function(record, idx) {
//                            			
//                            			var PRICE2 = Math.floor(record.get('PRICE')*100)/000;
//                            			var QTY2 = Math.floor(record.get('QTY')*100)/100;
//                            			var DOC_AMT = record.get('DOC_AMT');
//                            			
//                            			record.set('LOC_AMT', DOC_AMT * XCH_RATE2);
//                            			
//                            			LOC_AMT2 += (DOC_AMT * XCH_RATE2);
//                            		});
//                            		
//                            		var V_EXPECT_LOC_AMT = Number(Ext.getCmp('V_EXPECT_LOC_AMT').getValue().replace(/,/gi,''));
//                            		
//                            		Ext.getCmp('V_EXPECT_LOC_AMT').setValue(Ext.util.Format.number(LOC_AMT2, '0,000')); 
//                            		
//                            	}
//                            }
//                        },
//                        {
//                        	xtype: 'textfield',
//                        	maxWidth: 250,
//                        	minWidth: 250,
//                        	width: 250,
//                        	fieldLabel: 'V_M_BP_CD2',
//                        	margin: '0 0 0 30',
//                        	labelWidth: 120,
//                        	blankText: '',
//                        	id: 'V_M_BP_CD2',
//                            hidden: true,
//                        },
//                        {
//                        	xtype: 'textfield',
//                        	maxWidth: 250,
//                        	minWidth: 250,
//                        	width: 250,
//                        	fieldLabel: 'V_IV_TYPE',
//                        	margin: '0 0 0 30',
//                        	labelWidth: 120,
//                        	blankText: '',
//                        	id: 'V_IV_TYPE',
//                        	hidden: true,
//                        }
//                    ]
//                },
//                {
//                    xtype: 'fieldcontainer',
//                    layout: {
//                        type: 'hbox',
//                        align: 'stretch'
//                    },
//                    items: [
//                        {
//                            xtype: 'textfield',
//                            maxWidth: 250,
//                            minWidth: 250,
//                            width: 250,
//                            fieldLabel: 'B/L 번호',
//                            blankText: '',
//                            id: 'V_BL_DOC_NO',
//                        },
//                        {
//                            xtype: 'combobox',
//                            flex: 1,
//                            id: 'V_TRANS_TYPE',
//                            fieldLabel: '운송방법',
//                            margin: '0 0 0 30',
//                            maxWidth: 230,
//                            minWidth: 230,
//                            width: 230,
//                            displayField: 'DTL_NM',
//                            valueField: 'DTL_CD',
//                            labelWidth: 80,
//                            editable: false,
//                            store: Ext.create('Ext.data.Store',{
//                          		autoLoad: true,
//                          		storeId: 'store1',
//                          		proxy: {
//                                      type: 'ajax',
//                                      extraParams: {
//                                       	V_MAST_CD: 'BA06',
//                                       	V_GRID: 'Y'
//                                      },	
//                                      api: {
//                                          read: '/HSPF01/common/sql/Combobox.jsp'
//                                      },
//                                      reader: {
//                                          type: 'json',
//                                          rootProperty: 'resultList'
//                                      }
//                                  }
//                          	}),
//                          	listConfig: {
//                                itemTpl: [
//                                    '<div>{DTL_NM} ({DTL_CD})</div>'
//                                ]
//                            }
//                        },
//                        {
//            	        	xtype: 'combobox',
//            	        	maxWidth: 250,
//            	        	minWidth: 250,
//            	        	width: 250,
//            	        	fieldLabel: '가격조건',
//            	        	id: 'V_IN_TERMS',
//            	        	labelWidth: 70,
//            	        	blankText: '',
//                            margin: '0 0 0 30',
//            	        	displayField: 'DTL_NM',
//            	        	valueField: 'DTL_CD',
//            	        	editable: false,
//            	        	store: Ext.create('Ext.data.Store',{
//            	        		autoLoad: true,
//            	        		storeId: 'store1',
//            	        		proxy: {
//            	        			type: 'ajax',
//            	        			extraParams: {
//            	        				V_MAST_CD: 'MA04',
//            	        				V_GRID: 'Y'
//            	        			},	
//            	        			api: {
//            	        				read: '/HSPF01/common/sql/Combobox.jsp'
//            	        			},
//            	        			reader: {
//            	        				type: 'json',
//            	        				rootProperty: 'resultList'
//            	        			}
//            	        		}
//            	        	}),
//            	        	listConfig: {
//                                itemTpl: [
//                                          '<div>{DTL_NM} ({DTL_CD}) </div>'
//                                          ],
//                                  }
//            	        },
//                        {
//                            xtype: 'combobox',
//            	        	maxWidth: 250,
//            	        	minWidth: 250,
//            	        	width: 250,
//                            margin: '0 0 0 30',
//                            fieldLabel: '결제방법',
//                            id: 'V_PAY_METH',
//                            labelWidth: 80,
//                            blankText: '',
//                            displayField: 'DTL_NM',
//                            valueField: 'DTL_CD',
//                            editable: false,
//                            store: Ext.create('Ext.data.Store',{
//                          		autoLoad: true,
//                          		storeId: 'store1',
//                          		proxy: {
//                                      type: 'ajax',
//                                      extraParams: {
//                                       	V_MAST_CD: 'MA03',
//                                       	V_GRID: 'Y'
//                                      },	
//                                      api: {
//                                          read: '/HSPF01/common/sql/Combobox.jsp'
//                                      },
//                                      reader: {
//                                          type: 'json',
//                                          rootProperty: 'resultList'
//                                      }
//                                  }
//                          	}),
//                          	listConfig: {
//                                itemTpl: [
//                                          '<div>{DTL_NM} ({DTL_CD}) </div>'
//                                          ],
//                                  }
//                        },
//                        {
//                        	xtype: 'textfield',
//                        	margin: '0 0 0 30',
//                        	maxWidth: 230,
//                        	minWidth: 230,
//                        	width: 230,
//                        	fieldLabel: '전표번호',
//                        	labelWidth: 70,
//                        	blankText: '',
//                        	id: 'V_TEMP_GL_NO',
//                        	editable: false
////                        	hidden: true
//                        },
//                        {
//                            xtype: 'textfield',
//                            margin: '0 0 0 30',
//                            maxWidth: 210,
//                            minWidth: 210,
//                            width: 210,
//                            fieldLabel: 'VESSEL명',
//                            labelWidth: 70,
//                            blankText: '',
//                            id: 'V_VESSEL_NM',
//                            hidden: true
//                        },
//                        {
//                            xtype: 'textfield',
//                            margin: '0 0 0 30',
//                            maxWidth: 200,
//                            minWidth: 200,
//                            width: 200,
//                            fieldLabel: '항차번호',
//                            labelWidth: 60,
//                            blankText: '',
//                            id: 'V_VESSEL_NO',
//                            hidden: true
//                        }
//                    ]
//                },
//                {
//                    xtype: 'fieldcontainer',
//                    hidden: true,
//                    layout: {
//                        type: 'hbox',
//                        align: 'stretch'
//                    },
//                    items: [
//                    ]
//                }
//            ]
//        }
//    ]

});