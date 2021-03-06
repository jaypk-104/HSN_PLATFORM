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

Ext.define('M_IV_TOT_HSPF.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid1',

    requires: [
        'M_IV_TOT_HSPF.view.MyGrid1ViewModel',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.view.Table',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.CellEditing'
    ],

    viewModel: {
        type: 'mygridpanel11'
    },
    style: 'border: 1px solid lightgray; padding: 5px;',
    bodyBorder: false,
    header: false,
    title: 'My Grid Panel',
    id: 'myGrid1',
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
				//    disabled: true
				},
				{
					   xtype: 'button',
					   id: 'ivRegBtn',
					   text: '매입등록',
				    	style: 'background-color: white; border: 0.5px solid #3367d6;',
				    	cls: 'blue-btn',
				},
               {
                   xtype: 'container',
                   flex: 1
               },
               {
               	xtype: 'button',
               	id: 'printBtn',
               	margin: '0 3 0 0',
               	text: '매입장 출력',
               	style: 'background-color: white; border: 0.5px solid #3367d6;',
               	cls: 'blue-btn',
//               	hidden: true
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
             	   disabled: true
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
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'ITEM_CD',
            text: '품목코드',
            editor: {
                xtype: 'textfield',
                allowBlank: false,
                emptyText: 'Double Click',
                editable: false,
                listeners: {
                    afterrender: function(c) {
                    	c.getEl().on('dblclick', function() {
                    		var popup = Ext.create("Popup.view.WinItemPop");
                            popup.show();
                            
                            var store = Ext.getStore('WinItemPopStore');
                    		store.removeAll();
                    		
                    		Ext.getCmp('W_TYPE').setValue('IV_STEEL');
                        });
                    }
                }
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '입고일',
            dataIndex: 'MVMT_DT',
            format: 'Y-m-d',
        },
        {
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	width: 150,
        	dataIndex: 'BL_DOC_NO',
        	text: 'B/L번호',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'LC_DOC_NO',
            text: 'L/C번호'
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 114,
            dataIndex: 'string',
            text: '규격'
        },
//        {
//            xtype: 'numbercolumn',
//            style: 'font-size: 12px; text-align: center; font-weight: bold;',
//            align: 'end',
//            dataIndex: 'BOX_QTY',
//            text: 'BOX수량',
//            format: '0,000'
//        },
//        {
//            xtype: 'numbercolumn',
//            style: 'font-size: 12px; text-align: center; font-weight: bold;',
//            align: 'end',
//            dataIndex: 'BOX_WGT_UNIT',
//            text: '단위중량'
//        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
            align: 'end',
            dataIndex: 'IV_QTY',
            text: '총중량',
            format: '0,000.00',
            editor: {
            	xtype: 'numberfield',
            	format: '0,000.00',
            	align: 'right',
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
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
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            dataIndex: 'CUR',
            text: '화폐단위',
            align: 'center',
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
        	align: 'end',
        	dataIndex: 'PRC',
        	text:'외화단가',
        	format: '0,000.00000',
        	editor: {
            	xtype: 'numberfield',
            	format: '0,000.00000',
            	decimalPrecision : 5,
            	align: 'right',
            },
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(record.get('CUR') == 'USD')
                {
                    return Ext.util.Format.number(value, '0,000.00000');
                }
                return '';
            },
            exportStyle: {
	   			 format : 'Price',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
            },
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	align: 'end',
        	dataIndex: 'IV_AMT',
        	text: '외화금액',
        	format: '0,000.0000',
        	width: 120,
        	summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000.0000')+"<font>"; 
	        },
	        renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(record.get('CUR') == 'USD')
                {
                	return Ext.util.Format.number(value, '0,000.0000');
                }
                return '';
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
        	style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
        	align: 'end',
        	dataIndex: 'IV_PRC',
        	text:'매입단가',
        	format: '0,000.0000',
        	editor: {
            	xtype: 'numberfield',
            	format: '0,000.0000',
            	decimalPrecision : 4,
            	align: 'right',
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
            style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
            align: 'end',
            dataIndex: 'IV_LOC_AMT',
            text: '자국금액',
            format: '0,000',
        	width: 120,
        	editor: {
            	xtype: 'numberfield',
            	format: '0,000',
            	align: 'right',
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        },
	        exportStyle: {
	   			 format : 'Number',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
        },
//        {
//        	xtype: 'numbercolumn',
//        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
//        	align: 'end',
//        	dataIndex: 'IV_LOC_AMT2',
//        	text: '선물환율자국금액',
//        	format: '0,000.0000',
//        	width: 130
//        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 150,
            dataIndex: 'MVMT_NO',
            hidden: true
        },
//        {
//            xtype: 'gridcolumn',
//            style: 'font-size: 12px; text-align: center; font-weight: bold;',
//            width: 150,
//            dataIndex: 'VAT_TYPE_NM',
//            text: '부가세유형'
//        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
            width: 150,
            dataIndex: 'VAT_TYPE',
            text: '부가세유형',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(Ext.data.StoreManager.lookup('storeVAT').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('storeVAT').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
            editor: {
        		xtype: 'combobox',
        		displayField: 'DTL_NM',
        		autoLoadOnValue: true,
        		valueField: 'DTL_CD',
        		editable: false,
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'storeVAT',
//        			storeId: 'typeStore',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
//        		            	V_MAST_CD: 'BA05',
        		            	V_MAST_CD: 'VAT_RATE',
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
        		listConfig: {
                    itemTpl: [
                        '<div>{DTL_NM} ({DTL_CD})</div>'
                    ]
                },
        	}
        },
        {
        	xtype: 'numbercolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;  color: #3367d6',
        	width: 110,
        	dataIndex: 'VAT_AMT',
            text: '부가세금액',
            format: '0,000',
            align: 'end',
            editor: {
            	xtype: 'numberfield',
            	format: '0,000',
            	align: 'right',
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        },
	        exportStyle: {
	   			 format : 'Number',
	   			 alignment: {
	   				 horizontal: 'Right'
	   			 },
           },
        },
//        {
//            xtype: 'gridcolumn',
//            style: 'font-size: 12px; text-align: center; font-weight: bold;',
//            width: 150,
//            dataIndex: 'DATA',
//            text: '유통이력번호'
//        }
        
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
        		if(record.get('V_TYPE') != 'I'){
        			record.set('V_TYPE', 'V');
        		}
        	},
        	deselect: function(rowmodel, record, index, eOpts) {
        		if(record.get('V_TYPE') != 'I'){
        			record.set('V_TYPE', '');
        		}
        	}
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
    				var CUR = rec.get('CUR');
    				
    				if (field == 'IV_QTY') {
    					if(val === 0){
//    						rec.set('IV_PRC', 0);
    					} else if(val != null){
//    						rec.set('IV_PRC', rec.get('IV_LOC_AMT') === 0 ? 0 : (rec.get('IV_LOC_AMT') / val).toFixed(4));
    						if(CUR == 'USD'){
    							rec.set('IV_AMT', (rec.get('PRC') * val).toFixed(4));
    							rec.set('IV_LOC_AMT', Math.round((rec.get('PRC') * val).toFixed(4) * XCH_RATE));
    						} else {
    							rec.set('IV_AMT', Math.round((rec.get('IV_PRC') * val).toFixed(4) * XCH_RATE));
    							rec.set('IV_LOC_AMT', Math.round((rec.get('IV_PRC') * val).toFixed(4) * XCH_RATE));
    						}
    					}
    				} else if (field == 'IV_PRC') {
    					if(val === 0){
//    						rec.set('IV_QTY', 0);
    					} else if(val != null){
//    						rec.set('IV_QTY', rec.get('IV_LOC_AMT') === 0 ? 0 : (rec.get('IV_LOC_AMT') / val).toFixed(2));
    						if(CUR == 'USD'){
    						} else {
    							rec.set('IV_AMT', Math.round((rec.get('IV_QTY') * val).toFixed(4)));
    						}
    						rec.set('IV_LOC_AMT', Math.round((rec.get('IV_QTY') * val).toFixed(4)));
    					}
    				} else if (field == 'PRC') {
    					if(val === 0){
    					} else if(val != null){
    						rec.set('IV_PRC', (XCH_RATE * val).toFixed(4));
    						rec.set('IV_AMT', (rec.get('IV_QTY') * val).toFixed(4));
    						rec.set('IV_LOC_AMT', Math.round((rec.get('IV_QTY') * val).toFixed(4) * XCH_RATE));
    					}
    				}
    				
    				if (field != 'VAT_AMT' && !!rec.get('VAT_TYPE')) {
    					var storeVAT = Ext.getStore('storeVAT');
                		var match = storeVAT.findBy(function(record,id) {
                	        if(record.get('DTL_CD') == rec.get('VAT_TYPE')) {
                	            return true;
                	        }
                	    });
                		
                		var vatRecord = storeVAT.getData().getAt(match);
                		var VAT_RATE = vatRecord.get('VAT_RATE');
                		var LOC_AMT = rec.get('IV_LOC_AMT');
            			var VAT_AMT = 0;
            			
            			if(VAT_RATE > 0){
            				VAT_AMT = Math.floor(LOC_AMT * VAT_RATE / 100); 
            			}
            			rec.set('VAT_AMT', VAT_AMT);
    				}
    				
    			},
    			beforeedit: function (e, editor) {
    				var rec = editor.record.data;
    				var field = editor.field;
    				var V_IV_TYPE = Ext.getCmp('V_IV_TYPE').getValue();

    				if(field == 'PRC' && rec.CUR != 'USD'){
    			    	return false;
    				}
    		    	
    		        return true;
    		    }
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
             if (e.ctrlKey && e.getKey() == e.V && (pastedColumn == 'PRC' || pastedColumn == 'IV_PRC')){
             	var task = new Ext.util.DelayedTask(function(){
             		var myGridController = M_IV_TOT_HSPF.app.getController("MyGridController1");
             		myGridController.syncItem(pastedColumn);
             	});

             	task.delay(1000);
             }
         }
     }

});