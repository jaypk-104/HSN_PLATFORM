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

Ext.define('S_BILL_DISTR.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'S_BILL_DISTR.view.MyGridViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Date',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'mygrid'
    },
    style: 'border: 1px solid lightgray; padding: 5px;',
    header: false,
    title: 'My Grid Panel',
    store: 'MyStore',
    id: 'myGrid',
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'DN_NO',
            text: '출고번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 90,
            dataIndex: 'DN_SEQ',
            text: '출고순번',
            align: 'end'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '출고일',
            dataIndex: 'DN_DT',
            format: 'Y-m-d',
            align: 'center'
        },
        {
        	xtype: 'datecolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '수금예정일',
        	dataIndex: 'DN_ISSUE_DT',
        	format: 'Y-m-d',
        	align: 'center',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 90,
            dataIndex: 'BP_CD',
            text: '매출처코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'BP_NM',
            text: '매출처명'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 160,
            dataIndex: 'BL_DOC_NO',
            text: 'B/L번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'string',
            text: 'CONT번호',
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
            width: 114,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'BRAND',
            text: 'BRAND'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_BOX_QTY',
            text: 'BOX수량',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_REAL_QTY',
            text: '계근중량',
            format: '0,000.00',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'IV_PRC',
            text: '매입단가',
            format: '0,000.00',
        	hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'IV_AMT',
            text: '매입원가',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        	hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'MG_AMT',
            text: '마진',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'PER_AMT',
            text: '이자',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_PRC',
            text: '매출단가',
            format: '0,000.00'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_AMT',
            text: '매출금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_REAL_AMT',
            text: '최종매출금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_ADD_PRC',
            text: '추가매출단가',
            format: '0,000.00'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'DN_ADD_AMT',
            text: '추가매출금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 250,
        	dataIndex: 'IN_TERMS_NM',
        	text: '결제방법',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 250,
            dataIndex: 'PAY_METH_NM',
            text: '가격조건',
        	hidden: true
        },
       
    ],
    viewConfig: {
    	enableTextSelection: true,
    },
    selModel: {
        selType: 'checkboxmodel',
        listeners : {
			select : function(rowmodel, record, index, eOpts) {
				var store = Ext.getStore('MyStore');
				var store1 = Ext.getStore('MyStore1');
				var store1Cnt = store1.getCount();
				var selModel= Ext.getCmp('myGrid').getSelectionModel()
				
				if(store1.getCount() > 0) {
					if (Ext.getCmp('V_S_BP_CD2').getValue() != record.get('BP_CD')) {
						Ext.Msg.alert('확인', '동일한 매출처를 선택하세요.');
						selModel.deselect(record, true);
					} else {
						store1.insert(store1Cnt, [ ({
							V_TYPE: 'V',
							DN_NO : record.get('DN_NO'),
							DN_SEQ : record.get('DN_SEQ'),
							DN_DT : record.get('DN_DT'),
							BL_DOC_NO : record.get('BL_DOC_NO'),
							BP_CD : record.get('BP_CD'),
							BP_NM : record.get('BP_NM'),
							ITEM_CD : record.get('ITEM_CD'),
							ITEM_NM : record.get('ITEM_NM'),
							BRAND : record.get('BRAND'),
							ORIGIN : record.get('ORIGIN'),
							DN_BOX_QTY : record.get('DN_BOX_QTY'),
							BILL_QTY : record.get('DN_REAL_QTY'),
							IV_PRC : record.get('IV_PRC'),
							IV_AMT : record.get('IV_AMT'),
							MG_AMT : record.get('MG_AMT'),
							PER_AMT : record.get('PER_AMT'),
							BILL_PRC : record.get('DN_PRC'),
							BILL_LOC_AMT : record.get('DN_REAL_AMT'),
							DN_REAL_AMT : record.get('DN_REAL_AMT'),
							DN_ADD_PRC : record.get('DN_ADD_PRC'),
							DN_ADD_AMT : record.get('DN_ADD_AMT'),
							FORWARD_XCH_RT : record.get('FORWARD_XCH_RT'),
							DN_AMT : record.get('DN_AMT'),
							GR_QTY : record.get('GR_QTY'),
							MVMT_DT : record.get('MVMT_DT'),
							DN_DT : record.get('DN_DT'),
							SL_AMT : record.get('SL_AMT'),
							MG_RT : record.get('MG_RT'),
							DN_PRC : record.get('DN_PRC'),
							DN_LOC_AMT : record.get('DN_LOC_AMT'),
							VAT_TYPE : record.get('VAT_TYPE'),
							VAT_TYPE_NM : record.get('VAT_TYPE_NM'),
							VAT_AMT : record.get('VAT_AMT'),
							VAT_RATE : record.get('VAT_RATE'),
							DN_ISSUE_DT : record.get('DN_ISSUE_DT'),
							COST_CD : record.get('COST_CD'),
						}) ]);
						
						Ext.getCmp('V_S_BP_CD2').setValue(record.get('BP_CD'));
						Ext.getCmp('V_S_BP_NM2').setValue(record.get('BP_NM'));
						Ext.getCmp('V_R_BP_CD').setValue(record.get('BP_CD'));
						Ext.getCmp('V_R_BP_NM').setValue(record.get('BP_NM'));
						Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
						if(record.get('REGION') == '9') {
							Ext.getCmp('V_TAX_CD').setValue('TX1');
						} else {
							Ext.getCmp('V_TAX_CD').setValue('TX3');
						}
//						Ext.getCmp('V_PAY_METH').setValue(record.get('PAY_METH'));
					}
				} else {
					store1.insert(store1Cnt, [ ({
						V_TYPE: 'V',
						DN_NO : record.get('DN_NO'),
						DN_SEQ : record.get('DN_SEQ'),
						DN_DT : record.get('DN_DT'),
						BL_DOC_NO : record.get('BL_DOC_NO'),
						BP_CD : record.get('BP_CD'),
						BP_NM : record.get('BP_NM'),
						ITEM_CD : record.get('ITEM_CD'),
						ITEM_NM : record.get('ITEM_NM'),
						BRAND : record.get('BRAND'),
						ORIGIN : record.get('ORIGIN'),
						DN_BOX_QTY : record.get('DN_BOX_QTY'),
						BILL_QTY : record.get('DN_REAL_QTY'),
						IV_PRC : record.get('IV_PRC'),
						IV_AMT : record.get('IV_AMT'),
						MG_AMT : record.get('MG_AMT'),
						PER_AMT : record.get('PER_AMT'),
						BILL_PRC : record.get('DN_PRC'),
						BILL_LOC_AMT : record.get('DN_REAL_AMT'),
						DN_REAL_AMT : record.get('DN_REAL_AMT'),
						DN_ADD_PRC : record.get('DN_ADD_PRC'),
						DN_ADD_AMT : record.get('DN_ADD_AMT'),
						FORWARD_XCH_RT : record.get('FORWARD_XCH_RT'),
						DN_AMT : record.get('DN_AMT'),
						GR_QTY : record.get('GR_QTY'),
						MVMT_DT : record.get('MVMT_DT'),
						DN_DT : record.get('DN_DT'),
						SL_AMT : record.get('SL_AMT'),
						MG_RT : record.get('MG_RT'),
						DN_PRC : record.get('DN_PRC'),
						DN_LOC_AMT : record.get('DN_LOC_AMT'),
						VAT_TYPE : record.get('VAT_TYPE'),
						VAT_TYPE_NM : record.get('VAT_TYPE_NM'),
						VAT_AMT : record.get('VAT_AMT'),
						VAT_RATE : record.get('VAT_RATE'),
						DN_ISSUE_DT : record.get('DN_ISSUE_DT'),
						COST_CD : record.get('COST_CD'),
					}) ]);
					
					Ext.getCmp('V_S_BP_CD2').setValue(record.get('BP_CD'));
					Ext.getCmp('V_S_BP_NM2').setValue(record.get('BP_NM'));
					Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
					Ext.getCmp('V_R_BP_CD').setValue(record.get('BP_CD'));
					Ext.getCmp('V_R_BP_NM').setValue(record.get('BP_NM'));

					if(record.get('REGION') == '9') {
						Ext.getCmp('V_TAX_CD').setValue('TX1');
					} else {
						Ext.getCmp('V_TAX_CD').setValue('TX3');
					}
				}
			},
			deselect : function(rowmodel, record, index, eOpts) {
				var store = Ext.getStore('MyStore');
				var store1 = Ext.getStore('MyStore1');
				var selModel = Ext.getCmp('myGrid').getSelectionModel();
				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				
				store1.each(function(rec, idx) {
            		if(((rec.get('DN_NO') == record.get('DN_NO')) && ((rec.get('DN_SEQ') == record.get('DN_SEQ')) 
            				 ))) {
						store1.remove(rec);
					} 
            	});
				
				if(gridRecord.length == 0 && store1.getCount() == 0) {
					Ext.getCmp('V_BILL_NO').setValue('');
					var nows = new Date();

					Ext.getCmp('V_BILL_DT').setValue(nows);
					Ext.getCmp('V_SALE_TYPE').setValue('DSO');
					Ext.getCmp('V_S_BP_CD2').setValue('');
					Ext.getCmp('V_S_BP_NM2').setValue('');
					Ext.getCmp('V_R_BP_CD').setValue('');
					Ext.getCmp('V_R_BP_NM').setValue('');
					Ext.getCmp('V_DN_ISSUE_DT').setValue(nows);
					Ext.getCmp('V_TAX_CD').setValue('TX3');
					Ext.getCmp('V_CUR').setValue('KRW');
					Ext.getCmp('V_IN_TERMS').setValue(null);
					Ext.getCmp('V_PAY_METH').setValue('CH');
				}
			}
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting'
        }
    ],
    features: [
               {
            	   ftype: 'summary',
                   dock: 'bottom'
               }
            ],

});