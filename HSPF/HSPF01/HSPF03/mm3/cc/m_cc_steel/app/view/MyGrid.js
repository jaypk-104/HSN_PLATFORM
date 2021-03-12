/*
 * File: app/view/MyGrid.js
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

Ext.define('M_CC_STEEL.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'M_CC_STEEL.view.MyGridViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.column.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    config: {
        tbar: [
               
               {
                   xtype: 'container',
                   flex: 1
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
                   margin: '0 3 0 0',
                   
               }
               
               ]
    },

    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore',
    viewConfig: {
        enableTextSelection: true
    },
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            text: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'BL_NO',
            enableTextSelection: true,
            text: 'B/L관리번호',
//            lockable: true,
            width: 170
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'BL_SEQ',
        	enableTextSelection: true,
        	text: 'BL_SEQ',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'BL_DOC_NO',
            enableTextSelection: true,
            text: 'B/L번호',
            width: 170
        },/*
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'CONT_NO',
            enableTextSelection: true,
            text: 'CONT#',
            width: 150
        },*/
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '선적일',
            format:'Y-m-d',
            align: 'center',
            dataIndex: 'LOADING_DT',
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '통관전입고일',
            format:'Y-m-d',
            align: 'center',
            dataIndex: 'IN_DT',
            hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'M_BP_NM',
        	enableTextSelection: true,
        	text: '매입처',
        	width: 200
        	
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'ITEM_CD',
        	enableTextSelection: true,
        	text: 'M_BP_CD',
        	width: 130,
        	hidden: true
        	
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
            width: 170
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'SPEC',
            enableTextSelection: true,
            text: '규격',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'UNIT',
            enableTextSelection: true,
            text: '단위'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: 'BON수량',
            format: '0,000.00',
            dataIndex: 'BON_QTY',
            align: 'right',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		}
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '단위중량',
            format: '0,000.00',
            dataIndex: 'BON_WGT_UNIT',
            align: 'right',
            hidden: true
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '미등록BON수량',
        	width: 130,
        	format: '0,000.00',
        	dataIndex: 'CC_RM_BON_QTY',
        	align: 'right',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	}
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '미등록수량',
        	format: '0,000.00',
        	dataIndex: 'CC_REMAIN_QTY',
        	align: 'right',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	},
        	width: 130
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '총중량',
        	format: '0,000.00',
        	dataIndex: 'QTY',
        	align: 'right',
        	summaryType : 'sum',
        	summaryRenderer : function(value, summaryData, dataIndex) {
        		return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
        	},
        	width: 130,
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '총중량',
            format: '0,000.00',
            align: 'right',
            dataIndex: 'TOTAL_QTY',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		hidden: true
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '단위중량',
        	format: '0,000.00',
        	dataIndex: 'BON_WGT_UNIT',
        	align: 'right'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '단가',
            format: '0,000.00',
            dataIndex: 'PRICE',
            align: 'right'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '환율',
        	format: '0,000.00',
        	dataIndex: 'XCH_RATE',
        	align: 'right'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            text: '금액',
            format: '0,000.00',
            dataIndex: 'DOC_AMT',
            align: 'right',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000.00') + "<font>";
    		},
    		width: 120
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	text: '자국금액',
        	format: '0,000',
        	dataIndex: 'LOC_AMT',
        	align: 'right',
    		summaryType : 'sum',
    		summaryRenderer : function(value, summaryData, dataIndex) {
    			return "<font color='green'>" + Ext.util.Format.number(value, '0,000') + "<font>";
    		},
    		width: 120
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'SL_CD',
            enableTextSelection: true,
            text: 'SL_CD',
            hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'SL_NM',
        	enableTextSelection: true,
        	text: '창고'
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'TAX_RT',
        	enableTextSelection: true,
        	format: '0,000.00',
        	text: '관세율',
        	align: 'right',
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'IN_TERMS_NM',
        	enableTextSelection: true,
        	text: '가격조건',
        	width: 200
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'IN_TERMS',
        	enableTextSelection: true,
        	text: 'IN_TERMS',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PAY_METH_NM',
        	enableTextSelection: true,
        	text: '결제방법',
        	width: 200
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PAY_METH',
        	enableTextSelection: true,
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PO_NO',
        	enableTextSelection: true,
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'PO_SEQ',
        	enableTextSelection: true,
        	hidden: true
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {

        	select: function(rowmodel, record, index, eOpts) {
        		var M_BP_CD = record.get('M_BP_CD');
        		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
        		var flag = '';
        		var msg = '';
        		var selModel= Ext.getCmp('myGrid').getSelectionModel();
        		var store = Ext.getStore('MyStore');
        		var store1 = Ext.getStore('MyStore1');
    			var store1Cnt = store1.getCount();

    			record.set('V_TYPE', 'V');

				var flag = '';
				var BL_DOC_NO2 = Ext.getCmp('V_BL_DOC_NO2').getValue();
				
				if( BL_DOC_NO2 == '' ) {
					flag = 'T';
					Ext.getCmp('V_BL_DOC_NO2').setValue(record.get('BL_DOC_NO'));
					Ext.getCmp('V_M_BP_CD2').setValue(record.get('M_BP_CD'));
					Ext.getCmp('V_M_BP_NM2').setValue(record.get('M_BP_NM'));
					Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
        			Ext.getCmp('V_PAY_METH').setValue(record.get('PAY_METH')); 
        			Ext.getCmp('V_XCH_RATE').setValue(record.get('XCH_RATE')); 
        			
				} else if (BL_DOC_NO2 != record.get('BL_DOC_NO')) {
					flag = 'F';
					msg = '동일한 B/L을 선택하세요.';
				} else {
					flag = 'T';
				}
				
				if(flag == 'T') {
					var flag = 'GO';
					
					store1.each(function(rec, idx){
						if(((rec.get('BL_NO') == record.get('BL_NO')) && ((rec.get('BL_SEQ') == record.get('BL_SEQ')) && ((rec.get('CONT_MGM_NO') == record.get('CONT_MGM_NO'))
        				)))) {
							rec.set('QTY', rec.get('QTY') + record.get('CC_REMAIN_QTY'));
							rec.set('DOC_AMT', rec.get('QTY')  * rec.get('PRICE')  );
							rec.set('LOC_AMT', rec.get('QTY')  * rec.get('PRICE') * Ext.getCmp('V_XCH_RATE').getValue());
							flag = 'STOP';
						} 
					});
					
					if(flag != 'STOP') {
						store1.insert(store1Cnt, [ ({
							ITEM_CD : record.get('ITEM_CD'),
							ITEM_NM : record.get('ITEM_NM'),
							SPEC : record.get('SPEC'),
							UNIT : record.get('UNIT'),
							BON_QTY : record.get('CC_RM_BON_QTY'),
							BON_WGT_UNIT : record.get('BON_WGT_UNIT'),
							QTY : record.get('CC_REMAIN_QTY'),
							PRICE : record.get('PRICE'),
							DOC_AMT : record.get('DOC_AMT'),
							LOC_AMT : record.get('LOC_AMT'),
							FORWARD_XCH_AMT : record.get('PRICE') * record.get('CC_REMAIN_QTY') * Ext.getCmp('V_FORWARD_XCH').getValue() ,
							TAX_RATE : record.get('TAX_RT'),
							DATA : record.get('DATA'),
							SL_NM : record.get('SL_NM'),
							SL_CD : record.get('SL_CD'),
							BL_NO : record.get('BL_NO'),
							BL_SEQ : record.get('BL_SEQ'),
							PO_NO : record.get('PO_NO'),
							PO_SEQ : record.get('PO_SEQ'),
						}) ]);
					}
					
					Ext.getCmp('V_BL_DOC_NO2').setValue(record.get('BL_DOC_NO'));
					Ext.getCmp('V_IN_TERMS').setValue(record.get('IN_TERMS'));
        			Ext.getCmp('V_PAY_METH').setValue(record.get('PAY_METH')); 
					Ext.getCmp('V_M_BP_CD2').setValue(record.get('M_BP_CD'));
					Ext.getCmp('V_M_BP_NM2').setValue(record.get('M_BP_NM'));
        			Ext.getCmp('V_XCH_RATE').setValue(record.get('XCH_RATE'));
        			Ext.getCmp('V_FORWARD_XCH').setValue(1);
        			
//					//총중량 변화
//        			var QTY = 0;
//        			var BEFORE_QTY = Number(Ext.getCmp('V_TOTAL_QTY').getValue());
//        			QTY = BEFORE_QTY + Number(record.get('QTY'));
//        			Ext.getCmp('V_TOTAL_QTY').setValue(QTY);
        			
				} else {
					Ext.Msg.alert('확인', msg);
					selModel.deselect(record, true);
					
				}
        		
            },
            deselect: function(rowmodel, record, index, eOpts) {
            	var store = Ext.getStore('MyStore');
            	var store1 = Ext.getStore('MyStore1');
            	var selModel= Ext.getCmp('myGrid').getSelectionModel();
            	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    			record.set('V_TYPE', '');

    			
    			store1.each(function(rec, idx) {
    				if(((rec.get('BL_NO') == record.get('BL_NO')) && ((rec.get('BL_SEQ') == record.get('BL_SEQ')) && ((rec.get('CONT_MGM_NO') == record.get('CONT_MGM_NO'))
    						&&  ((record.get('CC_REMAIN_QTY') == rec.get('QTY'))))))) {
						store1.remove(rec);
					} else if (((rec.get('BL_NO') == record.get('BL_NO')) && ((rec.get('BL_SEQ') == record.get('BL_SEQ')) && ((rec.get('CONT_MGM_NO') == record.get('CONT_MGM_NO'))
            				&&  ((record.get('CC_REMAIN_QTY') != rec.get('QTY'))))))) {
						rec.set('QTY', rec.get('QTY') - record.get('CC_REMAIN_QTY'));
						rec.set('DOC_AMT', rec.get('QTY')  * rec.get('PRICE')  );
						rec.set('LOC_AMT', rec.get('QTY')  * rec.get('PRICE') * Ext.getCmp('V_XCH_RATE').getValue() );
					}
            	});
//    			
//            	var QTY = 0;
//    			var BEFORE_QTY = Number(Ext.getCmp('V_TOTAL_QTY').getValue());
//    			QTY = BEFORE_QTY - Number(record.get('QTY'));
//    			Ext.getCmp('V_TOTAL_QTY').setValue(QTY);
    			
        		//선택된 정보가 없으면 하단 정보 BLANK 
				if(store1.getCount()==0) {
					Ext.getCmp('V_CC_NO').setValue('');
					Ext.getCmp('V_BL_DOC_NO2').setValue('');
					Ext.getCmp('V_DISCHGE_PORT').setValue('PUS');
					Ext.getCmp('V_TAX_CUSTOM').setValue('PU');
					Ext.getCmp('V_ID_NO').setValue('');
					Ext.getCmp('V_ID_USR').setValue('');
					Ext.getCmp('V_M_BP_NM2').setValue('');
					Ext.getCmp('V_M_BP_CD2').setValue('');
        			var nows = new Date();
        			Ext.getCmp('V_ID_DT').setValue(nows);
        			Ext.getCmp('V_TOTAL_QTY').setValue(0);
					Ext.getCmp('V_IN_TERMS').setValue(null);
					Ext.getCmp('V_PAY_METH').setValue(null);
        			Ext.getCmp('V_CUR').setValue('USD');
        			Ext.getCmp('V_FORWARD_XCH').setValue(1);
        			
        			store1.removeAll();
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
    features : [ {
		ftype : 'summary',
		dock: 'bottom'
	} ],

});