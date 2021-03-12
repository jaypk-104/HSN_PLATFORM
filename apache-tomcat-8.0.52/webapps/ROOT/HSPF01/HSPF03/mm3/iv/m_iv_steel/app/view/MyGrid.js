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

Ext.define('M_IV_STEEL.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_IV_STEEL.view.MyGridViewModel',
        'Ext.grid.column.RowNumberer',
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
    id: 'myGrid',
    store: 'MyStore',
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'MVMT_NO',
            text: '입고번호',
            width: 150
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	dataIndex: 'MVMT_SEQ',
        	text: '입고순번',
        	width: 90
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'MVMT_DT',
            text: '입고일',
            align: 'center',
            format: 'Y-m-d',
            width: 100
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	dataIndex: 'M_BP_CD',
        	text: '매입처코드',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 170,
            dataIndex: 'M_BP_NM',
            text: '매입처'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            dataIndex: 'IV_TYPE_NM',
            text: '매입유형',
            align: 'center'
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
            width: 200,
            dataIndex: 'IN_TERMS_NM',
            text: '가격조건',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'PAY_METH_NM',
            text: '결제방법',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'ITEM_CD',
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'BON_QTY',
            text: 'BON수량',
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
            dataIndex: 'BON_WGT_UNIT',
            text: '단위중량',
            format: '0,000.00'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'QTY',
            text: '총중량',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            },
            format: '0,000.00'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            dataIndex: 'CUR',
            text: '화폐단위',
            align: 'center'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'IV_PRC',
        	text: '단가',
        	format: '0,000.00',
        	width: 110
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'LOC_AMT',
            text: '자국금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
            width: 120
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'FORWARD_XCH_RT',
        	text: '선물환율',
        	format: '0,000.00',
        	width: 100,
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'FORWARD_XCH_AMT',
            text: '선물환율자국금액',
            format: '0,000',
            width: 120,
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'VAT_TYPE_NM',
            text: '부가세유형'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 150,
        	dataIndex: 'VAT_AMT',
            text: '부가세금액',
            format: '0,000',
            align: 'end'
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
            text: '가격조건'
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
					if (Ext.getCmp('V_M_BP_CD2').getValue() != record.get('M_BP_CD')) {
						Ext.Msg.alert('확인', '동일한 매입처를 선택하세요.');
						selModel.deselect(record, true);
//					} else if(Ext.getCmp('V_PAY_METH').getValue() != record.get('PAY_METH')) {
//						Ext.Msg.alert('확인', '결제방법이 일치하지 않습니다.');
//						selModel.deselect(record, true);
//						return false;
//					} else if (Ext.getCmp('V_IN_TERMS').getValue() != record.get('IN_TERMS')) {
//						Ext.Msg.alert('확인', '가격조건이 일치하지 않습니다.');
//						selModel.deselect(record, true);
					} else {
						store1.insert(store1Cnt, [ ({
							V_TYPE: 'V',
							ITEM_CD : record.get('ITEM_CD'),
							ITEM_NM : record.get('ITEM_NM'),
							BON_QTY : record.get('BON_QTY'),
							BON_WGT_UNIT : record.get('BON_WGT_UNIT'),
							IV_QTY : record.get('QTY'),
							CUR : record.get('CUR'),
							IV_LOC_AMT : record.get('LOC_AMT'),	
							IV_LOC_AMT2 : record.get('LOC_AMT'),
							IV_AMT : record.get('DOC_AMT'),
							IV_PRC : record.get('IV_PRC'),
							MVMT_NO : record.get('MVMT_NO'),
							MVMT_SEQ : record.get('MVMT_SEQ'),
							VAT_TYPE : record.get('VAT_TYPE'),
							VAT_TYPE_NM : record.get('VAT_TYPE_NM'),
							VAT_AMT : record.get('VAT_AMT'),
							BL_DOC_NO : record.get('BL_DOC_NO'),
						}) ]);
						
						Ext.getCmp('V_M_BP_CD2').setValue(record.get('M_BP_CD'));
						Ext.getCmp('V_M_BP_NM2').setValue(record.get('M_BP_NM'));
						Ext.getCmp('V_IV_TYPE').setValue(record.get('IV_TYPE'));
						Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
						Ext.getCmp('V_PAY_METH').setValue('CH');

						Ext.getCmp('V_BL_DOC_NO').setValue(record.get('BL_DOC_NO'));
						Ext.getCmp('V_XCHG_RT').setValue(record.get('FORWARD_XCH_RT'));
						
						Ext.getCmp('V_T_BP_NM').setValue(record.get('M_BP_NM'));
						Ext.getCmp('V_T_BP_CD').setValue(record.get('M_BP_CD'));
						
					}
				} else {
					store1.insert(store1Cnt, [ ({
						V_TYPE: 'V',
						ITEM_CD : record.get('ITEM_CD'),
						ITEM_NM : record.get('ITEM_NM'),
						BON_QTY : record.get('BON_QTY'),
						BON_WGT_UNIT : record.get('BON_WGT_UNIT'),
						IV_QTY : record.get('QTY'),
						CUR : record.get('CUR'),
						IV_LOC_AMT : record.get('LOC_AMT'),
						IV_LOC_AMT2 : record.get('LOC_AMT'),
						IV_AMT : record.get('DOC_AMT'),
						IV_PRC : record.get('IV_PRC'),
						MVMT_NO : record.get('MVMT_NO'),
						MVMT_SEQ : record.get('MVMT_SEQ'),
						VAT_TYPE : record.get('VAT_TYPE'),
						VAT_TYPE_NM : record.get('VAT_TYPE_NM'),
						VAT_AMT : record.get('VAT_AMT'),
						BL_DOC_NO : record.get('BL_DOC_NO'),
					}) ]);
					
					Ext.getCmp('V_M_BP_CD2').setValue(record.get('M_BP_CD'));
					Ext.getCmp('V_M_BP_NM2').setValue(record.get('M_BP_NM'));
					Ext.getCmp('V_IV_TYPE').setValue(record.get('IV_TYPE'));
					Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
					Ext.getCmp('V_PAY_METH').setValue('CH');

					Ext.getCmp('V_BL_DOC_NO').setValue(record.get('BL_DOC_NO'));
					Ext.getCmp('V_XCHG_RT').setValue(record.get('FORWARD_XCH_RT'));
					
					Ext.getCmp('V_T_BP_NM').setValue(record.get('M_BP_NM'));
					Ext.getCmp('V_T_BP_CD').setValue(record.get('M_BP_CD'));
				}
				
			},
			deselect : function(rowmodel, record, index, eOpts) {
				var store = Ext.getStore('MyStore');
				var store1 = Ext.getStore('MyStore1');
				var selModel = Ext.getCmp('myGrid').getSelectionModel();
				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				
				store1.each(function(rec, idx) {
            		if((rec.get('MVMT_NO') == record.get('MVMT_NO') )) {
						store1.remove(rec);
					} 
            	});
				
				if(gridRecord.length == 0 && store1.getCount() == 0) {
					Ext.getCmp('V_IV_NO').setValue('');
					var nows = new Date();

					Ext.getCmp('V_IV_DT').setValue(nows);
					Ext.getCmp('V_IV_TYPE').setValue(null);
					Ext.getCmp('V_M_BP_NM2').setValue('');
					Ext.getCmp('V_M_BP_CD2').setValue('');
					Ext.getCmp('V_T_BP_NM').setValue('');
					Ext.getCmp('V_T_BP_CD').setValue('');
					Ext.getCmp('V_IV_ISSUE_DT').setValue(nows);
					Ext.getCmp('V_CUR').setValue('USD');
					Ext.getCmp('V_XCHG_RT').setValue('1');
					Ext.getCmp('V_BL_DOC_NO').setValue('');
					Ext.getCmp('V_TAX_CD').setValue('TX3');
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
                   ftype: 'summary'
               }
            ],

});