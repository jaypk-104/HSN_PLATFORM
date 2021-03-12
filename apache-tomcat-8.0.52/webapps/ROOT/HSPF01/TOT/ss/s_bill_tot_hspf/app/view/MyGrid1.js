/*
 * File: app/view/MyGrid1.js
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

Ext.define('S_BILL_TOT_HSPF.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid1',

    requires: [
        'S_BILL_TOT_HSPF.view.MyGrid1ViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],
    id: 'myGrid1',
    viewModel: {
        type: 'mygridpanel11'
    },
    style: 'border: 1px solid lightgray; padding: 5px;',
    bodyBorder: false,
    header: false,
    title: 'My Grid Panel',
    store: 'MyStore1',
    config: {
        tbar: [
			{
			    id: 'gridAddBtn',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf055@FontAwesome',
			    iconCls: 'grid-add-btn',
			    disabled: true
			},
			{
			    id: 'gridDelBtn',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf056@FontAwesome',
			    iconCls: 'grid-del-btn',
				},
				{
				   xtype: 'button',
				   id: 'cfmBtn',
				   text: '매출채권등록',
				   style: 'background-color: white; border: 0.5px solid #3367d6;',
				   cls: 'blue-btn',
				},
				{
		               xtype: 'textfield',
		               fieldLabel: '자국금액합계(예상)',
		               margin: '0 0 0 10',
		               width: 250,
		               editable: false,
		               id: 'V_EXPECT_LOC_AMT',
		               labelWidth: 120,
		               fieldStyle: 'text-align: right',
		               hidden: true
		           	},
               {
                   xtype: 'container',
                   flex: 1
               },
               {
            	   xtype: 'textfield',
            	   id: 'V_TEMP_GL_NO',
            	   margin: '0 3 0 0',
            	   width: 150,
            	   emptyText: '전표번호',
            	   editable: false
               },
               {
             	   xtype: 'button',
             	   id: 'tempGlCfmBtn',
             	   margin: '0 3 0 0',
             	   text: 'ERP전표생성',
             	   style: 'background-color: white; border: 0.5px solid #3367d6;',
             	   cls: 'blue-btn',
             	   listeners: {
             		   mouseover: function(button, e, eOpts) {
             		        var theTip = Ext.create('Ext.tip.ToolTip', {
             		            html: 'ERP 결의전표 생성',
             		            target: 'tempGlCfmBtn',
             		            showDelay: 0,
             		            mouseOffset:[5,5],
             		            trackMouse: true,
             		            shadow: false
             		        });
             		    }
             	   },
//             	   disabled: true
                },
                {
             	   xtype: 'button',
             	   id: 'tempGlCancelBtn',
             	   margin: '0 3 0 0',
             	   text: 'ERP전표취소',
             	   style: 'background-color: white; border: 0.5px solid #3367d6;',
             	   cls: 'blue-btn',
             	   listeners: {
             		   mouseover: function(button, e, eOpts) {
             		        var theTip = Ext.create('Ext.tip.ToolTip', {
             		            html: 'ERP 결의전표 삭제',
             		            target: 'tempGlCancelBtn',
             		            showDelay: 0,
             		            mouseOffset:[5,5],
             		            trackMouse: true,
             		            shadow: false
             		        });
             		    }
             	   },
//             	   disabled: true
                },
                {
                	xtype: 'button',
                	id: 'taxBillBtn',
                	margin: '0 3 0 0',
                	text: '세금계산서',
                	style: 'background-color: white; border: 0.5px solid #3367d6;',
                	cls: 'blue-btn',
//             	   disabled: true
                },
                {
                	xtype: 'button',
                	id: 'taxBillListBtn',
                	margin: '0 3 0 0',
                	text: '거래명세서',
                	style: 'background-color: white; border: 0.5px solid #3367d6;',
                	cls: 'blue-btn',
//             	   disabled: true
                },
                {
                	xtype: 'button',
                	id: 'localOfferBtn',
                	margin: '0 3 0 0',
                	text: '로컬오퍼발행',
                	style: 'background-color: white; border: 0.5px solid #3367d6;',
                	cls: 'blue-btn',
                	disabled: true
                },
               {
                   xtype: 'button',
                   glyph: 'xf1c3@FontAwesome',
                   id: 'xlsxDown1',
                   cfg: {
                       type: 'excel07',
                       ext: 'xlsx'
                   },
                   iconCls: 'grid-excel-btn',
               }
           ]
    },
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'V_TYPE',
        	text: 'V_TYPE',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'COST_CD',
            text: '코스트센터'
        },
//        {
//            xtype: 'gridcolumn',
//            style: 'text-align: center; font-weight: bold;',
//            width: 114,
//            dataIndex: 'COST_NM',
//            text: '코스트명',
//            hidden: true
//        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'ITEM_CD',
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'string',
            text: '규격'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'UNIT',
            text: '단위',
            hidden: true
        },
//        {
//            xtype: 'gridcolumn',
//            style: 'text-align: center; font-weight: bold;',
//            width: 114,
//            dataIndex: 'string',
//            text: '창고',
//            hidden: true
//        },
//        {
//            xtype: 'numbercolumn',
//            style: 'text-align: center; font-weight: bold;',
//            align: 'end',
//            dataIndex: 'FORWARD_XCH_RT',
//            text: '선물환율',
//            hidden: true
//        },
//        {
//            xtype: 'numbercolumn',
//            style: 'text-align: center; font-weight: bold;',
//            align: 'end',
//            dataIndex: 'GR_QTY',
//            text: '총 입고수량',
//            format: '0,000.00',
//            summaryType: 'sum',
//            summaryRenderer: function(value, summaryData, dataIndex) {
//                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
//            },
//        	hidden: true
//        },
//        {
//            xtype: 'numbercolumn',
//            style: 'text-align: center; font-weight: bold;',
//            align: 'end',
//            dataIndex: 'IV_PRC',
//            text: '선물환율기준단가',
//            width: 120,
//            hidden: true
//        },
//        {
//            xtype: 'numbercolumn',
//            style: 'text-align: center; font-weight: bold;',
//            align: 'end',
//            dataIndex: 'IV_AMT',
//            text: '총 선물자국입고금액',
//            width: 120,
//            format: '0,000.0000',
//            summaryType: 'sum',
//            summaryRenderer: function(value, summaryData, dataIndex) {
//                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.0000')+"<font>"; 
//            },
//            hidden: true
//        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '입고일',
            dataIndex: 'MVMT_DT',
            format: 'Y-m-d',
        	hidden: true
        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '출고일',
            dataIndex: 'DN_DT',
            format: 'Y-m-d'
        },
        {
        	xtype: 'datecolumn',
        	style: 'text-align: center; font-weight: bold;',
        	text: '수금예정일',
        	dataIndex: 'DN_ISSUE_DT',
        	format: 'Y-m-d',
        	hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6;',
            align: 'end',
            dataIndex: 'BILL_QTY',
            text: '매출확정계근중량',
            format: '0,000.00',
            width: 120,
            editor : {
    			xtype : 'numberfield',
    			format : '0,000.00',
    			decimalPrecision : 2,
    			align : 'right'
    		},
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            },
            exportStyle: {
	   			 format : 'Qty',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
        },
        {
    		xtype : 'numbercolumn',
    		style : 'text-align: center; font-weight: bold; color: #3367d6',
    		text : '단가',
    		dataIndex : 'BILL_PRC',
    		format : '0,000.0000',
    		align : 'right',
    		editor : {
    			xtype : 'numberfield',
    			format : '0,000.0000',
    			decimalPrecision : 4,
    			align : 'right'
    		},
    		exportStyle: {
	   			 format : 'Fixed',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
    	},
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            align: 'end',
            width: 120,
            dataIndex: 'BILL_AMT',
            text: '외화금액',
            format: '0,000.0000',
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.0000')+"<font>"; 
            },
            exportStyle: {
	   			 format : 'Fixed',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'BILL_LOC_AMT',
            text: '자국금액',
            width: 120,
            format: '0,000',
            editor: {
            	xtype: 'numberfield',
            	format: '0,000',
            	align: 'right',
            },
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
            exportStyle: {
	   			 format : 'Number',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'string',
            text: '비고',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'VAT_INC',
            text: '부가세포함여부',
            hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 150,
        	dataIndex: 'VAT_TYPE_NM',
        	text: '부가세유형'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'VAT_TYPE',
            text: '부가세유형',
            hidden: true
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            align: 'end',
            dataIndex: 'VAT_RATE',
            text: '부가세율'
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            align: 'end',
            dataIndex: 'VAT_AMT',
            text: '부가세금액',
            format: '0,000',
            width: 120,
            editor: {
            	xtype: 'numberfield',
            	format: '0,000',
            	align: 'right',
            },
            summaryType: 'sum',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
            },
            exportStyle: {
	   			 format : 'Fixed',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'string',
            text: '품목규격', 
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 130,
            dataIndex: 'BL_DOC_NO',
            text: 'B/L번호'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'string',
            text: '반품'
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'DN_NO',
        	text: 'DN_NO',
        	hidden: true
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 114,
        	dataIndex: 'DN_SEQ',
        	text: 'DN_SEQ',
        	hidden: true
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
//        	select: function(rowmodel, record, index, eOpts) {
//        		record.set('V_TYPE', 'V');
//        	},
//        	deselect: function(rowmodel, record, index, eOpts) {
//        		record.set('V_TYPE', '');
//        	}
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'clipboard',
        }, 
        {
            ptype: 'cellediting',
            listeners : {
            	afteredit : function(e) {
    				var rec = e.context.record;
    				var field = e.context.field;
    				var val = e.context.value;
    				var XCH_RATE = Ext.getCmp('V_XCH_RATE').getValue();
    				
    				if (field == 'BILL_PRC') {
    					if(val != null){
    						rec.set('BILL_AMT', (rec.get('BILL_QTY') * val).toFixed(4));
    						rec.set('BILL_LOC_AMT', Math.round((rec.get('BILL_QTY') * val).toFixed(4) * XCH_RATE));
    						
    						if(!!rec.get('VAT_TYPE') && rec.get('VAT_RATE') > 0){
    							rec.set('VAT_AMT', Math.floor(rec.get('BILL_LOC_AMT') * rec.get('VAT_RATE') / 100))
    						}
                    		
    					}
    				} else if (field == 'BILL_QTY') {
    					if(val != null){
    						rec.set('BILL_AMT', (rec.get('BILL_PRC') * val).toFixed(4));
    						rec.set('BILL_LOC_AMT', Math.round((rec.get('BILL_PRC') * val).toFixed(4) * XCH_RATE));
    						
    						if(!!rec.get('VAT_TYPE') && rec.get('VAT_RATE') > 0){
    							rec.set('VAT_AMT', Math.floor(rec.get('BILL_LOC_AMT') * rec.get('VAT_RATE') / 100))
    						}
                    		
    					}
    				}
    				
    			},
            }
        }
    ],
    features: [
               {
            	   ftype: 'summary',
                   dock: 'bottom'
               }
    ],
    listeners:
    {
    	cellkeydown: function(cell, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
    		var pastedColumn = cell.getColumnManager().columns[cellIndex].dataIndex;
            if (e.ctrlKey && e.getKey() == e.V && pastedColumn == 'BILL_PRC'){
            	var task = new Ext.util.DelayedTask(function(){
            		var myGridController = S_BILL_TOT_HSPF.app.getController("MyGridController1");
            		myGridController.syncItem();
            	});

            	task.delay(1000);
            }
        }
    }
    
});