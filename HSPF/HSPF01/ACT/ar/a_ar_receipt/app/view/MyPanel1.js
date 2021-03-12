/*
 * File: app/view/MyPanel1.js
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

Ext.define('A_AR_RECEIPT.view.MyPanel1', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.mypanel1',

	requires: [
        'A_AR_RECEIPT.view.MyPanelViewModel1',
        'A_AR_RECEIPT.view.MyForm1',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.column.Number'
    ],

	viewModel : {
		type : 'mypanel1'
	},
	layout : 'fit',
	title : 'Tab 2',

	items : [ {
		xtype : 'container',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [ {
			xtype : 'myform1',
			bodyPadding : 0
		}, {
			xtype : 'splitter',
			collapseTarget : 'prev'
		}, {
			xtype : 'container',
			flex : 1,
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [ {
				xtype : 'container',
				flex : 0.6,
				layout : {
					type : 'vbox',
					align : 'stretch'
				},
				items : [ {
					xtype : 'gridpanel',
					flex : 0.6,
					style : 'border: 1px solid lightgray; padding: 5px;',
					title : '수금대상',
					store : 'MyStore5',
					id : 'myGrid5',
					tbar : [ {
						id : 'gridDelBtn5',
						text : '',
						margin : '0 3 0 0',
						glyph : 'xf056@FontAwesome',
						iconCls : 'grid-del-btn',
					}, {
						xtype : 'button',
						id : 'arRefundBtn',
						margin : '0 3 0 0',
						text : '환출처리',
						style : 'background-color: white; border: 0.5px solid #3367d6;',
						cls : 'blue-btn',
					}, {
						xtype : 'button',
						id : 'arDepositBtn',
						margin : '0 3 0 0',
						text : '과입금처리',
						style : 'background-color: white; border: 0.5px solid #3367d6;',
						cls : 'blue-btn',
					}, {
						xtype : 'container',
						flex : 1
					}, {
			   			xtype : 'button',
			   			id : 'uploadBtn',
			   			margin : '0 3 0 0',
			   			text : '증빙업로드',
			   			style : 'background-color: white; border: 0.5px solid #3367d6;',
			   			cls : 'blue-btn',
			   		}, {
						xtype : 'button',
						id : 'arCfmBtn',
						margin : '0 3 0 0',
						text : '전표생성',
						style : 'background-color: white; border: 0.5px solid #3367d6;',
						cls : 'blue-btn',
						disabled : true,
					}, {
						xtype : 'button',
						id : 'arCancelBtn',
						margin : '0 3 0 0',
						text : '전표취소',
						style : 'background-color: white; border: 0.5px solid #3367d6;',
						cls : 'blue-btn',
						disabled : true,
					}, {
						xtype : 'button',
						id : 'arPrintBtn',
						margin : '0 3 0 0',
						text : '미리보기',
						style : 'background-color: white; border: 0.5px solid #3367d6;',
						cls : 'blue-btn',
					}, {
						xtype : 'button',
						glyph : 'xf1c3@FontAwesome',
						id : 'xlsxDown5',
						cfg : {
							type : 'excel07',
							ext : 'xlsx'
						},
						iconCls : 'grid-excel-btn',
					} ],
					columns : [ {
						xtype : 'rownumberer',
						width : 40
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 114,
						dataIndex : 'V_TYPE',
						text : 'V_TYPE',
						hidden : true
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 0,
						dataIndex : 'LOCK',
						locked : true,
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 90,
						dataIndex : 'REF_TYPE',
						text : '참조구분',
						renderer : function(value, metaData, record, rowIndex, colIndex, store, view) {
							if (Ext.data.StoreManager.lookup('ac02Store').findRecord('DTL_CD', value) !== null) {
								return Ext.data.StoreManager.lookup('ac02Store').findRecord('DTL_CD', value).get('DTL_NM');
							}
							return value;
						},
						editor : {
							xtype : 'combobox',
							displayField : 'DTL_NM',
							autoLoadOnValue : true,
							valueField : 'DTL_CD',
							editable : false,
							store : Ext.create('Ext.data.Store', {
								autoLoad : true,
								storeId : 'ac02Store',
								proxy : {
									type : 'ajax',
									extraParams : {
										V_MAST_CD : 'AC02',
										V_GRID : 'Y'
									},
									api : {
										read : '/HSPF01/common/sql/Combobox.jsp'
									},
									reader : {
										type : 'json',
										rootProperty : 'resultList'
									}
								}
							}),
						}
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 200,
						dataIndex : 'REF_NO',
						text : '참조번호',
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'DEPT_CD',
						text : '부서',
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 120,
						dataIndex : 'DEPT_NM',
						text : '부서명',
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'BP_CD',
						text : '거래처',
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 150,
						dataIndex : 'BP_NM',
						text : '거래처명',
					}, {
						xtype : 'datecolumn',
						style : 'text-align: center; font-weight: bold;',
						text : '거래일자',
						dataIndex : 'BANK_DT',
						format : 'Y-m-d',
						width : 100,
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'BANK_CD',
						text : '은행코드',
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 120,
						dataIndex : 'BANK_NM',
						text : '은행명',
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'DOC_AMT',
						text : '외화금액',
						format : '0,000.00',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
						},
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'CUR',
						text : '화폐단위',
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'LOC_AMT',
						text : '전체금액',
						format : '0,000',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'BF_LOC_AMT',
						text : '적용전 잔액',
						format : '0,000',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'BAL_AMT',
						text : '적용후 잔액',
						format : '0,000',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'TEMP_GL_YN',
						text : '전표생성유무',
					}, {
        				xtype : 'numbercolumn',
        				style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        				width : 120,
        				align : 'end',
        				dataIndex : 'REFUND_AMT',
        				text : '처리금액',
        				format : '0,000',
        				editor : {
        					xtype : 'numberfield',
        					format : '0,000',
        					align : 'right'
        				},
        			},
					{
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'REMAIN_AMT',
						text : '잔액',
						format : '0,000',
						hidden : true,
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'BANK_ACCT_NO',
						text : 'BANK_ACCT_NO',
						hidden : true
					},  {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 100,
						dataIndex : 'AR_NO',
						text : 'AR_NO',
						hidden : true
					}, ],
					viewConfig : {
						enableTextSelection : true,
					},
					selModel : {
						selType : 'checkboxmodel',
						checkOnly : true,
						listeners : {
							deselect : function(rowmodel, record, index, eOpts) {
								var store1 = Ext.getStore('MyStore1');
								var store5 = Ext.getStore('MyStore5');
								var store6 = Ext.getStore('MyStore6');
								var calcStore = Ext.getStore('CalcStore');
								var calcStore2 = Ext.getStore('CalcStore2');

								store1.each(function(rec, idx) {
									//                                    				if(rec.get('V_TYPE') == 'I'){
									rec.set('REMAIN_AMT', rec.get('REMAIN_LOC_AMT'));
									rec.set('REMAIN_DOC_AMT', rec.get('REMAIN_LOC_AMT'));
									//                                    					rec.set('RECV_AMT', rec.get('LOC_AMT')-rec.get('REMAIN_LOC_AMT'));
									//                                    					rec.set('RECV_LOC_AMT', rec.get('LOC_AMT')-rec.get('REMAIN_LOC_AMT'));
									rec.set('RECV_AMT', rec.get('BF_RECV_AMT'));
									rec.set('RECV_LOC_AMT', rec.get('BF_RECV_AMT'));
									//                                    				}
								});

								store5.each(function(rec, idx) {
									//                                    				if(rec.get('V_TYPE') == 'I'){
									rec.set('BAL_AMT', rec.get('REMAIN_AMT'));
									//                                    				}
								});

								store6.each(function(rec, idx) {
									rec.set('BAL_AMT', rec.get('REMAIN_AMT'));
								});

								calcStore.removeAll();
								calcStore2.removeAll();
							},
						}
					},
					plugins : [ {
						ptype : 'gridexporter'
					}, {
            			ptype : 'cellediting',
            			clicksToEdit: 1,
            		}, ],
					features : [ {
						ftype : 'summary',
						dock : 'bottom'
					} ]
				}, {
					xtype : 'splitter',
					collapseTarget : 'prev'
				}, {
					xtype : 'gridpanel',
					flex : 0.4,
					style : 'border: 1px solid lightgray; padding: 5px;',
					header : false,
					title : 'My Grid Panel',
					store : 'MyStore6',
					id : 'myGrid6',
					tbar : [ {
		                id: 'gridAddBtn6',
		                text: '',
		                margin: '0 3 0 0',
		                glyph: 'xf055@FontAwesome',
		                iconCls: 'grid-add-btn',
		            }, {
						id : 'gridDelBtn6',
						text : '',
						margin : '0 3 0 0',
						glyph : 'xf056@FontAwesome',
						iconCls : 'grid-del-btn',
					}, {
						xtype : 'container',
						flex : 1
					}, {
						xtype : 'button',
						glyph : 'xf1c3@FontAwesome',
						id : 'xlsxDown6',
						cfg : {
							type : 'excel07',
							ext : 'xlsx'
						},
						iconCls : 'grid-excel-btn',
					} ],
					columns : [ {
						xtype : 'rownumberer',
						width : 40
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 114,
						dataIndex : 'V_TYPE',
						text : 'V_TYPE',
						hidden : true
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 0,
						dataIndex : 'LOCK',
						locked : true,
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 150,
						dataIndex : 'MAST_DB_NO',
						text : '담보번호',
						hidden : true,
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
						width : 150,
						dataIndex : 'COL_NO',
						text : '담보번호',
						editor : {
							xtype : 'textfield',
							emptyText: '(Double Click)',
							editable : false,
							listeners : {
								afterrender : function(c) {
									this.mon(this.getEl(), 'dblclick', function() {
										// COL_NO 있으면 return; 추가
										// 얘만 선택되도록 수정 (값넣어줄때 구분위해)
										// 
										
										var popup = Ext.create("A_AR_RECEIPT.view.MyWindow3");
										popup.center();
										popup.show();
										
										var BL_DOC_NO;
										var store1 = Ext.getStore('MyStore1');
										store1.each(function(rec, idx) {
											if(!!BL_DOC_NO) return;
											BL_DOC_NO = rec.get('BL_DOC_NO');
										});
										
										Ext.getCmp('W_DEPT_CD3').setValue(Ext.getCmp('V_DEPT_CD2').getValue());
										Ext.getCmp('W_BL_DOC_NO').setValue(BL_DOC_NO);

										var popStore3 = Ext.getStore('PopStore3');
										popStore3.removeAll();
									});
								}
							}
						}
						
					}, {
						xtype : 'gridcolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 80,
						dataIndex : 'COL_SEQ',
						text : '담보순번',
						hidden : true,
					}, {
						xtype : 'datecolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						text : '설정일자',
						dataIndex : 'COL_DT',
						format : 'Y-m-d',
						width : 100,
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'COL_AMT',
						text : '보증금액',
						format : '0,000',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'BF_COL_AMT',
						text : '적용전 잔액',
						format : '0,000',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'BAL_AMT',
						text : '적용후 잔액',
						format : '0,000',
						summaryType : 'sum',
						summaryRenderer : function(value, summaryData, dataIndex) {
							return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
						},
					}, {
						xtype : 'numbercolumn',
						style : 'font-size: 12px; text-align: center; font-weight: bold;',
						width : 110,
						align : 'end',
						dataIndex : 'REMAIN_AMT',
						text : '잔액',
						format : '0,000',
						hidden : true,
					}, ],
					viewConfig : {
						enableTextSelection : true,
					},
					selModel : {
						selType : 'checkboxmodel',
//						checkOnly : true,
						listeners : {
							deselect : function(rowmodel, record, index, eOpts) {
								var store1 = Ext.getStore('MyStore1');
								var store5 = Ext.getStore('MyStore5');
								var store6 = Ext.getStore('MyStore6');
								var calcStore = Ext.getStore('CalcStore');
								var calcStore2 = Ext.getStore('CalcStore2');

								store1.each(function(rec, idx) {
									//                                    				if(rec.get('V_TYPE') == 'I'){
									rec.set('REMAIN_AMT', rec.get('REMAIN_LOC_AMT'));
									rec.set('REMAIN_DOC_AMT', rec.get('REMAIN_LOC_AMT'));
									//                                    					rec.set('RECV_AMT', rec.get('LOC_AMT')-rec.get('REMAIN_LOC_AMT'));
									//                                    					rec.set('RECV_LOC_AMT', rec.get('LOC_AMT')-rec.get('REMAIN_LOC_AMT'));
									rec.set('RECV_AMT', rec.get('BF_RECV_AMT'));
									rec.set('RECV_LOC_AMT', rec.get('BF_RECV_AMT'));
									//                                    				}
								});

								store5.each(function(rec, idx) {
									//                                    				if(rec.get('V_TYPE') == 'I'){
									rec.set('BAL_AMT', rec.get('REMAIN_AMT'));
									//                                    				}
								});

								store6.each(function(rec, idx) {
									rec.set('BAL_AMT', rec.get('REMAIN_AMT'));
								});

								calcStore.removeAll();
								calcStore2.removeAll();
							},
						}
					},
					plugins : [ {
            			ptype : 'cellediting',
            			clicksToEdit: 1,
            		}, {
						ptype : 'gridexporter'
					}, ],
					features : [ {
						ftype : 'summary',
						dock : 'bottom'
					} ]
				}, ]
			}, {
				xtype : 'splitter',
				collapseTarget : 'prev'
			}, {
				xtype : 'tabpanel',
				flex : 1,
				margin : '5 0 0 0 ',
				overlapHeader : false,
				activeTab : 0,
				id : 'myTab1',
				items : [ {
					xtype : 'mypanel2',
					title : '출고/매출'
				}, {
					xtype : 'mypanel3',
					title : '추가계정'
				}, {
					xtype : 'mypanel6',
					title : '매입대체'
				}, ]
			}, ]
		}, ]
	} ]

});