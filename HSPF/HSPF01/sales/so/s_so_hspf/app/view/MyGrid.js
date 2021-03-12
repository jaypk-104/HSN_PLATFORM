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

Ext.define('S_SO_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'S_SO_HSPF.view.MyGridViewModel',
        'S_SO_HSPF.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.plugin.Clipboard',
    ],

    config: {
        tbar: [
            {
                id: 'gridAddBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn',
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn'
            },
            {
                id: 'gridSaveBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf0c7@FontAwesome',
                iconCls: 'grid-save-btn',
                disabled: true
            },
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

    controller: 'mygrid',
    viewModel: {
        type: 'mygrid'
    },
    id: 'myGrid',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore',

    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            hidden: true,
            text: 'V_TYPE',
            dataIndex: 'V_TYPE'
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 150,
            sortable: true,
            dataIndex: 'SO_NO',
            enableTextSelection: true,
            text: '수주번호',
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'SO_SEQ',
            enableTextSelection: true,
            exportStyle: {
                format: 'Currency',
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '수주순번',
            format: '0,000',
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 120,
            sortable: true,
            dataIndex: 'ITEM_CD',
            enableTextSelection: true,
            text: '<span style=\'color:red\'>*</span>품목코드',
            emptyCellText: '(Double Click)',
            editor: {
                xtype: 'textfield',
                style: 'text-align:left',
                editable: false
            }
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 180,
            sortable: true,
            dataIndex: 'ITEM_NM',
            enableTextSelection: true,
            text: '품목명',
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 180,
            sortable: true,
            dataIndex: 'SPEC',
            enableTextSelection: true,
            text: '규격',
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            sortable: true,
            dataIndex: 'UNIT',
            enableTextSelection: true,
            text: '단위',
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 100,
            align: 'end',
            dataIndex: 'QTY',
            enableTextSelection: true,
            exportStyle: {
                alignment: {
                    horizontal: 'Right'
                }
            },
            text: '<span style=\'color:red\'>*</span>수량',
            editor: {
                xtype: 'numberfield',
                style: 'text-align:right',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            },
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 110,
            align: 'end',
            dataIndex: 'PRICE',
            enableTextSelection: true,
            text: '<span style=\'color:red\'>*</span>단가',
            editor: {
                xtype: 'numberfield',
                style: 'text-align:right',
                allowBlank: false,
                allowExponential: false,
                minValue: 0
            },
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 110,
            align: 'right',
            dataIndex: 'AMT',
            enableTextSelection: true,
            text: '금액',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 110,
            align: 'end',
            dataIndex: 'LOC_AMT',
            enableTextSelection: true,
            text: '자국금액',
            format: '0,000',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	text: '<span style=\'color:red\'>*</span>부가세유형',
        	dataIndex: 'VAT_TYPE',
        	width: 220,
        	align: 'left',
        	value: 'A',
        	editor: {
        		xtype: 'combobox',
        		editable: false,
        		displayField: 'DTL_NM',
        		autoLoadOnValue: true,
        		valueField: 'DTL_CD',
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'vat_type',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
        		            	V_MAST_CD: 'BA05',
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
        		})
        	},
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(Ext.data.StoreManager.lookup('vat_type').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('vat_type').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 110,
            align: 'end',
            dataIndex: 'VAT_AMT',
            enableTextSelection: true,
            text: '부가세금액',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000');
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
                return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
            }
        },
        {
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold; ',
            width: 100,
            align: 'center',
            dataIndex: 'DLVY_HOPE_DT',
            enableTextSelection: true,
            exportStyle: {
                format: 'Short Date'
            },
//            text: '<span style=\'color:red\'>*</span>납기요청일',
            text: '납기요청일',
            format: 'Y-m-d',
//            editor: {
//                xtype: 'datefield',
//                style: 'text-align:center',
//                format: 'Y-m-d',
//                allowBlank: false
//            }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 100,
            align: 'end',
            dataIndex: 'REMAIN_QTY',
            enableTextSelection: true,
            text: '수주잔량',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
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
    viewConfig: {
    	enableTextSelection: true,
    },
    features: [
        {
            ftype: 'summary',
            dock: 'bottom'
        }
     ],
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting',
            clicksToEdit: 2,
            listeners: {
            	edit: function(editor, context, eOpts) {
            		var selModel= Ext.getCmp('myGrid').getSelectionModel();
            		selModel.select(context.record, true);
            		
                    if(context.column.dataIndex=='QTY' || context.column.dataIndex=='PRICE')
                    {
                      var QTY = context.record.get('QTY');
                      var PRICE = context.record.get('PRICE');
                      var V_XCH_RATE = Ext.getCmp('V_XCH_RATE').getValue();
                      
                      context.record.set('AMT', QTY * PRICE);
                      context.record.set('LOC_AMT', QTY * PRICE * V_XCH_RATE);
                      if(context.record.get('VAT_TYPE') == 'A') {
                    	  context.record.set('VAT_AMT',  context.record.get('AMT') * 0.1);
                      } else {
                    	  context.record.set('VAT_AMT', 0);
                      };
                    }
	                else if (context.column.dataIndex=='VAT_TYPE') {
	                  //부가세 금액이 A이면 10%, 아니면 0원
                	  var AMT = context.record.get('AMT');
                  
                	  if(context.record.get('VAT_TYPE') == 'A') {
                    	  context.record.set('VAT_AMT', AMT * 0.1);
                      } else {
                    	  context.record.set('VAT_AMT', 0);
                      };
	                }
                    
                    if(context.column.dataIndex=='VAT_TYPE' ){
                    	var store = Ext.getStore('MyStore');
            			store.each(function(rec,idx) {
            				rec.set('VAT_TYPE', context.record.get('VAT_TYPE'));
            				
            				 if(context.record.get('VAT_TYPE') == 'A') {
            					 rec.set('VAT_AMT', rec.get('AMT') * 0.1);
                             } 
            				 else {
            					 context.record.set('VAT_AMT', 0);
            					 rec.set('VAT_AMT', 0);
                             };
            			});
                    }
                    	
            },
        	beforeedit: function(editor, context) {
        		var CFM_YN = Ext.getCmp('V_SO_CFM').getValue();
        		if(CFM_YN == 'Y') {
        			context.cancel = true;
        		} else {
        			context.cancel = false;
        		}
            }
            }
        },
        {
            ptype: 'clipboard'
        },
    ],
});