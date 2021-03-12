/*
 * File: app/view/MyGrid.js
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

Ext.define('M_GR_TO_DN_DISTR.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_GR_TO_DN_DISTR.view.MyGridViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],
    config: {
        tbar: [
            {
                id: 'gridAddBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn',
                hidden: true
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn',
                hidden: true
            },
            {
                xtype: 'datefield',
                id: 'V_DN_DT',
                maxWidth: 210,
                minWidth: 210,
                width: 210,
                fieldLabel: '출고일',
                labelAlign: 'left',
                labelWidth: 60,
                format: 'Y-m-d',
                submitFormat: 'Y-m-d',
                align: 'center',
                listeners : {
                    render : function(datefield) {
                    	var nows = new Date();
                        datefield.setValue(nows);
                    },
                    change: function(field, newValue, oldValue, eOpts) {
                    	var store = Ext.getStore('MyStore');

                    	store.each(function(rec, idx) {
                    		if(rec.get('REQ_BOX_QTY') != 0) {
                    			rec.set('DN_DT', newValue); 
                    			rec.set('ISSUE_DT', newValue); 
                    		}
                    	})
                    }
                },
                fieldStyle: 'background-color: #ffefbb'
            },
            {
            	disabledCls: 'af-item-disabled',
                xtype: 'combobox',
                flex: 1,
                margin: '0 0 0 5',
                maxWidth: 210,
                minWidth: 210,
                width: 210,
                fieldLabel: '수금구분',
                labelWidth: 60,
                id: 'V_DN_ISSUE_DT',
                value: 0,
                displayField: 'DTL_NM',
                valueField: 'DTL_CD',
                editable: false,
                fieldStyle: 'background-color: #ffefbb',
                store : Ext.create('Ext.data.Store',{
					fields : ['DTL_NM','DTL_CD'],
					data : [['기본','0'],['30일 외상매출','30'],['60일 외상매출','60'],['90일 외상매출','90']]
                }),
            },
            {
                id: 'gridDnBtn',
                text: '출고등록',
                margin: '0 3 0 5',
                width: 100,
                cls: 'blue-btn',
                style: 'background-color: white; border: 0.5px solid #3367d6;'
            },
            {
            	id: 'addColBtn',
            	text: '추가담보등록',
            	margin: '0 3 0 0',
            	width: 100,
            	cls: 'blue-btn',
            	style: 'background-color: white; border: 0.5px solid #3367d6;'
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
            	xtype: 'label',
            	text: '( 출고요청 BOX수량 입력 > 행 더블클릭 > 판매금액 내역서 팝업확인 > 출고등록 )'
            },
            {
                xtype: 'button',
                glyph: 'xf1c3@FontAwesome',
                id: 'xlsxDown',
                cfg: {
                    type: 'excel07',
                    ext: 'xlsx'
                },
                iconCls: 'grid-excel-btn',
            }
        ]
    },
    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid lightgray; padding: 5px;',
    header: false,
    title: 'My Grid Panel',
    store: 'MyStore',
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'V_TYPE',
        	text: 'V_TYPE',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'M_BP_NM',
            text: '매입처'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'APPROV_NO',
            text: '품의번호',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'APPROV_TYPE',
            text: '품의유형',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 170,
            dataIndex: 'LC_DOC_NO',
            text: 'L/C번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 170,
            dataIndex: 'BL_DOC_NO',
            text: 'B/L번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 95,
            dataIndex: 'SALE_DEADLINE_DT',
            text: '판매기한',
            hidden: true,
        },
       
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'ITEM_NM',
            text: '품명'
        },
        
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'SL_CD',
            text: '창고코드',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'SL_NM',
            text: '창고명'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'STOCK_QTY',
            text: '재고수량',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'REMAIN',
            text: '중량잔량',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		hidden: true
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'IV_PRC',
        	text: '매입단가',
        	format: '0,000.00',
        	width: 110
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BOX_QTY',
            text: '입고 BOX수량(A)',
            format: '0,000.',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
    		width: 130	
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BOX_WGT_UNIT',
            text: '입고 단위중량',
    		width: 130
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'QTY',
            text: '입고 총중량',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		}
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_BOX_QTY',
            text: '기출고 BOX수량',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
    		width: 130,
    		format: '0,000',
    		hidden: true
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'DN_QTY',
        	text: '기출고 중량',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	},
    		hidden: true
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'REMAIN_BOX_QTY',
        	text: '박스잔량',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	},
        	format: '0,000.'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        	align: 'end',
        	dataIndex: 'REQ_BOX_QTY',
        	text: '출고요청 BOX수량',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
        	},
        	editor: {
        		xtype: 'numberfield'
        	},
        	width: 120,
        	format: '0,000.'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; ',
        	align: 'end',
        	dataIndex: 'REQ_QTY',
        	text: '출고요청 중량',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	},
        	width: 120
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 65,
            dataIndex: 'BAND_YN',
            text: '밴드유무',
            align: 'center',
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            width: 114,
            dataIndex: 'S_BP_CD',
            text: '매출처코드',
            emptyCellText: '(Double Click)',
            editor : {
    			xtype : 'textfield',
    			allowBlank : false,
    			emptyText : '(Double Click)',
//    			editable : false,
    			listeners : {
    				afterrender : function(c) {
    					c.getEl().on('dblclick', function() {
    						var popup = Ext.create("M_GR_TO_DN_DISTR.view.WinSBpPop");
    						
    						var record = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    						
    						if(record[0].data['BAND_YN'] == 'Y'){
    							Ext.getCmp('W_SALE_DEADLINE_DT').show();
    							Ext.getCmp('W_BOX_QTY').show();
    							Ext.getCmp('W_S_CON_PRC').show();
    							Ext.getCmp('W_BF_IN_AMT').show();
    							Ext.getCmp('WinSBpPop').setWidth(750);
    							Ext.getCmp('SbpSelBtn').click();
    						}
    						else{
    							Ext.getCmp('W_SALE_DEADLINE_DT').hide();
    							Ext.getCmp('W_BOX_QTY').hide();
    							Ext.getCmp('W_S_CON_PRC').hide();
    							Ext.getCmp('W_BF_IN_AMT').hide();
    							Ext.getCmp('WinSBpPop').setWidth(422);
    						}
    						
    						
    						
    						popup.show();
    						Ext.getCmp('fieldType').setValue('M_GR_TO_DN_DISTR_G');
    						var store = Ext.getStore('WinSBpPopStore');
    						store.removeAll();
    					});
    				}
    			}
    		},
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'S_BP_NM',
            text: '매출처명',
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'DN_DT',
            text: '출고일자',
            format: 'Y-m-d',
            width: 110,
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'DN_XCHG_RT',
            text: '출고환율',
            editor : {
    			xtype : 'numberfield',
    			allowBlank : false,
    		},
    		hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_PRC',
            text: '출고단가'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_AMT',
            text: '출고금액',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_LOC_AMT',
            text: '출고금액',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
    		format: '0,000.',
    		width: 130
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_CONT_QTY',
            text: '출고컨테이너수량',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		hidden: true
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
        	align: 'end',
        	dataIndex: 'ADD_DN_AMT',
        	text: '추가출고금액',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.') + "<font>";
        	},
        	editor: {
        		xtype: 'numberfield',
        		format: '0,000.'
        	},
        	width: 120,
        	format: '0,000.',
        	hidden: true
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            dataIndex: 'ISSUE_DT',
            text: '수금예정일',
            format: 'Y-m-d',
            editor: {
            	xtype: 'datefield',
            	format: 'Y-m-d'
            },
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'ITS_NO',
            text: 'ITS_NO',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'PO_NO',
            text: '발주번호',
            width: 150,
            hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 100,
        	dataIndex: 'PO_SEQ',
        	text: '발주순번',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 200,
        	dataIndex: 'APPROV_NM',
        	text: '품의명'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 170,
            dataIndex: 'CONT_NO',
            text: '컨테이너번호'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'CONT_QTY',
            text: '컨테이너수량',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'ITEM_CD',
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 85,
            dataIndex: 'CUR',
            text: '화폐단위',
            align: 'center'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'XCHG_RT',
            text: '선적환율',
            width: 100
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'FORWARD_XCH_RT',
            text: '선물환율',
        	width: 100,
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'FORWARD_XCH_AMT',
            text: '원화금액',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
    		width: 130,
    		format: '0,000.'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'SALE_PRC',
        	text: '영업매입단가',
        	format: '0,000.00'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'IN_DT',
            text: '입항일',
            format: 'Y-m-d'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'MVMT_DT',
            text: '입고일',
            format: 'Y-m-d'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'ID_DT',
            text: '통관일',
            format: 'Y-m-d'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            width: 90,
            dataIndex: 'SALE_TYPE',
            text: '출고유형',
            editor: {
        		xtype: 'combobox',
        		displayField: 'DTL_NM',
        		autoLoadOnValue: true,
        		valueField: 'DTL_CD',
        		editable: false,
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'store1',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
        		            	V_MAST_CD: 'SC02',
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
                if(Ext.data.StoreManager.lookup('store1').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('store1').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            width: 114,
            dataIndex: 'DN_CUR',
            text: '출고화폐단위',
            editor: {
        		xtype: 'combobox',
        		displayField: 'DTL_NM',
        		autoLoadOnValue: true,
        		valueField: 'DTL_CD',
        		editable: false,
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'storeBA04',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
        		            	V_MAST_CD: 'BA04',
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
                if(Ext.data.StoreManager.lookup('storeBA04').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('storeBA04').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'MVMT_NO',
            text: '입고번호',
            width: 150
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'IV_TYPE_NM',
            text: '입고유형'
        },
    ],
    viewConfig: {
    	enableTextSelection: true,
    	getRowClass: function(record, index) {
            var REMAIN_BOX_QTY = record.get('REMAIN_BOX_QTY'); 
            if(REMAIN_BOX_QTY == 0) {
            	return 'bg-green';
            }
        },
    },
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
    			record.set('V_TYPE', 'V');
    			
    			var store = Ext.getStore('MyStore');
    			var store1 = Ext.getStore('MyStore1');
    			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();

    			store1.each(function(rec, index) {
    				if(record.get('MVMT_NO') == rec.get('MVMT_NO')) {
						selModel1.select(rec, true);
    				}
    			});
            },
            deselect: function(rowmodel, record, index, eOpts) {
    			record.set('V_TYPE', '');
    			
    			var store = Ext.getStore('MyStore');
    			var store1 = Ext.getStore('MyStore1');
    			var selModel1 = Ext.getCmp('myGrid1').getSelectionModel();

    			store1.each(function(rec, index) {
    				if(record.get('MVMT_NO') == rec.get('MVMT_NO')) {
						selModel1.deselect(rec, true);
    				}
    			});
            }
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting',
            clicksToEdit: 1,
            listeners: {
            	beforeedit: function(editor, context, eOpts) {
            		var selModel= Ext.getCmp('myGrid').getSelectionModel();
            		var store = Ext.getStore('MyStore');
            		
            		if(context.column.dataIndex == 'DN_DT' && context.record.data.DN_DT == undefined) {
            			context.record.set(context.column.dataIndex, new Date());
            			selModel.select(context.record, true);
            		}  
            		if((context.column.dataIndex == 'REMAIN_BOX_QTY') && (context.record.get('REMAIN_BOX_QTY') == 0)) {
            			return false;
            		}  
//            		if((context.column.dataIndex == 'REQ_QTY') && (context.record.get('REQ_QTY') == 0)) {
//            			return false;
//            		}  
            	},
            	edit:  function(editor, context, eOpts) {
            		var selModel= Ext.getCmp('myGrid').getSelectionModel();
            		var store = Ext.getStore('MyStore');

            		if(context.column.dataIndex == 'REQ_BOX_QTY') {
            			var REQ_QTY = context.record.get('REQ_QTY');
            			var REQ_BOX_QTY = context.record.get('REQ_BOX_QTY');
            			var BOX_WGT_UNIT = context.record.get('BOX_WGT_UNIT');

            			if(context.record.get('REMAIN_BOX_QTY') == context.record.get('REQ_BOX_QTY')) {
            				context.record.set('REQ_QTY', context.record.get('STOCK_QTY'));
            				
            			} else {
            				context.record.set('REQ_QTY', REQ_BOX_QTY * BOX_WGT_UNIT);
            			}
            			
            			
            			selModel.select(context.record, true);
            		}  
            		
            		if(context.column.dataIndex == 'DN_DT') {
            			Ext.Ajax.request({
        					url : '/HSPF01/common/sql/ERP_DB.jsp',
        					method : 'post',
        					params: {
        						V_TYPE: 'XCH_RT',
        						V_DATE : context.record.get('DN_DT'),
        						V_CUR : context.record.get('DN_CUR'),
        						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
        						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
        					},
        					success: function(response) {
        						var res = response.responseText;
        						
//        						console.log(res);
        						
        						if(res == 'NODATA') {
//        							Ext.Msg.alert('확인', '해당 날짜 환율정보가 없습니다. 관리자에게 문의하거나 임의로 입력하세요.');
        						} else {
        							context.record.set('DN_XCHG_RT',res);
        						}
        					}
        				});
            			
            		}
            		
            	}
            }
        }
    ],
	features : [ {
		ftype : 'summary'
	} ],

});