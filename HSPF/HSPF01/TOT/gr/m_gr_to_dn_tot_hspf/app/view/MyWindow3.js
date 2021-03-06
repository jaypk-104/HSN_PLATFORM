/*
 * File: app/view/MyWindow3.js
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

Ext.define('M_GR_TO_DN_TOT_HSPF.view.MyWindow3', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow3',

    requires: [
        'M_GR_TO_DN_TOT_HSPF.view.MyWindow3ViewModel',
        'Ext.form.field.Date',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.CellEditing',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'mywindow3'
    },
    height: 479,
    width: 947,
    title: '추가담보등록',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    modal: true,
    items: [
        {
            xtype: 'container',
            height: 90,
            maxHeight: 90,
            minHeight: 90,
            layout: {
                type: 'vbox',
                align: 'stretchmax',
                pack: 'center',
                padding: 10
            },
            items: [
                {
                    xtype: 'container',
                    height: 35,
                    maxHeight: 35,
                    minHeight: 35,
                    layout: {
                        type: 'hbox',
                        align: 'stretchmax',
                        pack: 'start',
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '담보번호',
                            editable: false,
                            id: 'V_NEW_COL_NO'
                        },
                        {
                        	xtype: 'textfield',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	fieldLabel: '담보MAST번호',
                        	editable: false,
                        	id: 'V_NEW_MAST_DB_NO',
                        	hidden: true
                        },
                        {
                        	xtype: 'textfield',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	fieldLabel: 'OLD담보MAST',
                        	editable: false,
                        	id: 'V_OLD_MAST_DB_NO',
                        	hidden: true
                        },
                        {
                        	xtype: 'textfield',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	fieldLabel: 'COL_MGM_NO',
                        	editable: false,
                        	id: 'V_COL_MGM_NO',
                        	hidden: true,
                        },
                        {
                        	xtype: 'textfield',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	editable: false,
                        	id: 'W_MVMT_NO',
                        	hidden: true
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: 35,
                    margin: '5 0 0 0',
                    maxHeight: 35,
                    minHeight: 35,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            flex: 1,
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '설정일자',
						    format: 'Y-m-d',
                            listeners : {
                                render : function(datefield) {
                                	var nows = new Date();
                                    datefield.setValue(nows);
                                },
                            },
                            id: 'V_NEW_COL_DT'
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 30',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'W3_S_BP_CD',
                            id: 'W3_S_BP_CD',
                            hidden: true
                        },
                        {
                        	xtype: 'textfield',
                        	margin: '0 0 0 30',
                        	maxWidth: 400,
                        	minWidth: 400,
                        	width: 400,
                        	fieldLabel: '거래처명',
                        	id: 'W3_S_BP_NM',
                        	editable:false
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    style: 'border: 1px solid lightgray',
                    header: false,
                    title: 'My Grid Panel',
                    store: 'ColStore',
                    id: 'colGrid',
                    tbar: [
                           {
                               id: 'w_gridAddBtn',
                               text: '',
                               margin: '0 3 0 0',
                               glyph: 'xf055@FontAwesome',
                               iconCls: 'grid-add-btn',
                           },
                           {
                               id: 'w_gridDelBtn',
                               text: '',
                               margin: '0 3 0 0',
                               glyph: 'xf056@FontAwesome',
                               iconCls: 'grid-del-btn',
                           },
                           {
                             	id: 'w_gridSaveBtn',
                             	xtype: 'button',
                             	glyph: 'xf0c7@FontAwesome',
                             	iconCls: 'grid-save-btn',
                             	margin: '0 3 0 0'
                           },
                           {
                               xtype: 'container',
                               flex: 1
                           },
                           {
                        	   id: 'V_ERP_DB_YN',
                        	   xtype: 'textfield',
                        	   label: 'V_ERP_DB_YN',
                        	   hidden: true
                           },
                           {
                         	   xtype: 'button',
                         	   id: 'w_tempGlCfmBtn',
                         	   margin: '0 3 0 0',
                         	   text: 'ERP담보생성',
                         	   style: 'background-color: white; border: 0.5px solid #3367d6;',
                         	   cls: 'blue-btn',
                         	   disabled: true,
                         	   listeners: {
                         		   mouseover: function(button, e, eOpts) {
                         		        var theTip = Ext.create('Ext.tip.ToolTip', {
                         		            html: 'ERP 담보생성',
                         		            target: 'w_tempGlCfmBtn',
                         		            showDelay: 0,
                         		            mouseOffset:[5,5],
                         		            trackMouse: true,
                         		            shadow: false
                         		        });
                         		    }
                         	   },
                            },
                            {
                            	xtype: 'button',
                            	id: 'w_tempGlCancelBtn',
                            	margin: '0 3 0 0',
                            	text: 'ERP담보취소',
                            	style: 'background-color: white; border: 0.5px solid #3367d6;',
                            	cls: 'blue-btn',
                            	listeners: {
                            		mouseover: function(button, e, eOpts) {
                            			var theTip = Ext.create('Ext.tip.ToolTip', {
                            				html: 'ERP 담보취소',
                            				target: 'w_tempGlCancelBtn',
                            				showDelay: 0,
                            				mouseOffset:[5,5],
                            				trackMouse: true,
                            				shadow: false
                            			});
                            		}
                            	},
                         	   disabled: true
                            },
                            {
                            	xtype: 'button',
                            	id: 'w_tempGlCfmBtn2',
                            	margin: '0 3 0 0',
                            	text: 'ERP전표생성',
                            	style: 'background-color: white; border: 0.5px solid #3367d6;',
                            	cls: 'blue-btn',
                            	listeners: {
                            		mouseover: function(button, e, eOpts) {
                            			var theTip = Ext.create('Ext.tip.ToolTip', {
                            				html: 'ERP 결의전표생성',
                            				target: 'w_tempGlCfmBtn2',
                            				showDelay: 0,
                            				mouseOffset:[5,5],
                            				trackMouse: true,
                            				shadow: false
                            			});
                            		}
                            	},
                         	   disabled: true
                            },
                            {
                            	xtype: 'button',
                            	id: 'w_tempGlCancelBtn2',
                            	margin: '0 3 0 0',
                            	text: 'ERP전표취소',
                            	style: 'background-color: white; border: 0.5px solid #3367d6;',
                            	cls: 'blue-btn',
                            	listeners: {
                            		mouseover: function(button, e, eOpts) {
                            			var theTip = Ext.create('Ext.tip.ToolTip', {
                            				html: 'ERP 결의전표취소',
                            				target: 'w_tempGlCancelBtn2',
                            				showDelay: 0,
                            				mouseOffset:[5,5],
                            				trackMouse: true,
                            				shadow: false
                            			});
                            		}
                            	},
                         	   disabled: true
                            },
                            {
	                           xtype: 'textfield',
                         	   id: 'W_TEMP_GL_NO',
                         	   label: '전표번호',
                         	   editable: false,
                         	   width : 150
                            },
                       ],
                    columns: [
                      {
                    	  xtype: 'gridcolumn',
                    	  style: 'font-size: 12px; text-align: center; font-weight: bold;',
                    	  dataIndex: 'V_TYPE',
                    	  text: 'V_TYPE',
                            hidden: true
                      },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            dataIndex: 'CONT_REMARK',
                            text: '컨테이너분류',
                            hidden: true
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            dataIndex: 'COL_TYPE',
                            text: '담보유형',
                            editor: {
                                xtype: 'combobox',
                                displayField: 'DTL_NM',
                                valueField: 'DTL_CD',
                                editable: false,
                                id: 'V_COL_TYPE2',
                                store: Ext.create('Ext.data.Store',{
                              		autoLoad: true,
                              		storeId: 'store1',
                              		proxy: {
                                          type: 'ajax',
                                          extraParams: {
                                           	V_MAST_CD: 'BA21',
                                           	V_GRID: 'Y'
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
                            },
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if(Ext.data.StoreManager.lookup('store1').findRecord('DTL_CD',value) !== null)
                                {
                                    return Ext.data.StoreManager.lookup('store1').findRecord('DTL_CD',value).get('DTL_NM');
                                } else {
                                	return value;
                                }
                            },
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            text: '재고금액',
//                            dataIndex: 'COL_TYPE',
                            width: 130
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            align: 'end',
                            text: '설정금액',
                            dataIndex: 'COL_AMT',
                            editor: {
                            	xtype: 'numberfield'
                            },
                            width: 130
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            dataIndex: 'BL_DOC_NO',
                            text: 'B/L번호',
                            width: 130
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            dataIndex: 'REMARK',
                            text: '비고',
                            editor: {
                            	xtype: 'textfield'
                            },
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            dataIndex: 'TEMP_GL_NO',
                            text: '전표번호'
                        },
                        {
                            xtype: 'gridcolumn',
                            style: 'font-size: 12px; text-align: center; font-weight: bold;',
                            dataIndex: 'MAST_DB_NO',
                            text: '담보번호',
                            hidden: true
                        }
                    ],
                    selModel: {
                        selType: 'checkboxmodel',
                        listeners: {
                        	select: function(rowmodel, record, index, eOpts) {
                        		record.set('V_TYPE', 'V');
                            },
                            deselect: function(rowmodel, record, index, eOpts) {
                            	record.set('V_TYPE', '');
                            }
                        }
                    },
                    plugins: [
                        {
                            ptype: 'gridexporter'
                        },
                        {
                            ptype: 'cellediting',
                        }
                        ]
                },
                {
                    xtype: 'container',
                    hidden: true,
                    flex: 1,
                    maxWidth: 400,
                    minWidth: 400,
                    width: 400,
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 3,
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center',
                                padding: 10
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    margins: '',
                                    maxWidth: 250,
                                    minWidth: 250,
                                    width: 250,
                                    fieldLabel: '미입금보증금액',
                                    editable: false
                                },
                                {
                                    xtype: 'button',
                                    margins: '',
                                    margin: '',
                                    maxWidth: 250,
                                    minWidth: 250,
                                    width: 250,
                                    text: '보증금입금전표생성',
                                    editable: false
                                    
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            flex: 3,
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center',
                                padding: 10
                            },
                            items: [
                                {
                                    xtype: 'textfield',
                                    margins: '',
                                    maxWidth: 250,
                                    minWidth: 250,
                                    width: 250,
                                    fieldLabel: '전표번호'
                                },
                                {
                                    xtype: 'button',
                                    margins: '',
                                    margin: '',
                                    maxWidth: 250,
                                    minWidth: 250,
                                    width: 250,
                                    text: '전표취소'
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            flex: 4,
                            style: 'border: 1px solid lightgray',
                            header: false,
                            title: 'My Grid Panel',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    dataIndex: 'string',
                                    text: '전표번호',
                                    width: 200
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    text: '재고금액'
                                },
                                {
                                    xtype: 'numbercolumn',
                                    style: 'font-size: 12px; text-align: center; font-weight: bold;',
                                    align: 'end',
                                    text: '전표일자'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

});