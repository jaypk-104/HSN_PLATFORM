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

Ext.define('END_VS_ERP_GR_HSPF.view.MyGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid',

    requires: [
        'END_VS_ERP_GR_HSPF.view.MyGridViewModel',
        'END_VS_ERP_GR_HSPF.view.MyGridViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.filters.Filters'
    ],

    config: {
        tbar: [
            {
                id: 'gridAddBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn'
            },
            {
                id: 'gridDelBtn',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn'
            },
            {
            	xtype: 'label',
            	text: '동일 발주건에 대한 정보는 일괄 변경처리 됩니다.',
        		margin: '0 3 0 10',
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
    viewConfig: {
      	enableTextSelection: true,
      	getRowClass: function(record, index) {
            var HSPF_GR_TYPE_NM = record.get('HSPF_GR_TYPE_NM');
            var ERP_GR_TYPE_NM = record.get('ERP_GR_TYPE_NM');
            var HSPF_CUR = record.get('HSPF_CUR');
            var ERP_CUR = record.get('ERP_CUR'); 
            var HSPF_QTY = record.get('HSPF_QTY');
            var ERP_QTY = record.get('ERP_QTY'); 
            
            if(ERP_GR_TYPE_NM != undefined && (HSPF_GR_TYPE_NM != ERP_GR_TYPE_NM)) {
            	return 'bg-red1'
            }
            if(ERP_CUR != undefined && (HSPF_CUR != ERP_CUR)) {
            	return 'bg-red2'
            }
            if(ERP_QTY != undefined && (HSPF_QTY != ERP_QTY)) {
            	return 'bg-red3'
            }
          
        },
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
            xtype: 'datecolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            align: 'center',
            format: 'Y-m-d',
            dataIndex: 'GR_DT',
            text: '입고일',
    		editor : {
    			xtype : 'datefield',
    			allowBlank : false,
    			align : 'center',
    			format : 'Y-m-d',
    		},
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 150,
        	dataIndex: 'PO_NO',
        	text: '발주번호',
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 80,
        	align: 'center',
        	dataIndex: 'PO_USR_NM',
        	text: '발주자',
        	filter: { 			//필터
        		type : 'list',
//                    operator : 'in',
            },
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	width: 150,
        	align: 'center',
        	dataIndex: 'PAY_METH',
        	text: '결제방법',
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
        		            	V_MAST_CD: 'MA03',
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
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	width: 80,
        	dataIndex: 'HSPF_GR_TYPE_NM',
        	text: '플랫폼<br>입고유형',
        	align: 'center',
        	editor : {
    			xtype : 'textfield',
    			allowBlank : false,
    		},	
            tdCls: 'x-change-cell1',	
        	filter: { 			//필터
        		type : 'list',
//                    operator : 'in',
            },
    		
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	width: 80,
        	dataIndex: 'ERP_GR_TYPE_NM',
        	text: 'ERP<br>입고유형',
        	align: 'center',
        	editor : {
    			xtype : 'textfield',
    			allowBlank : false,
    		},
            tdCls: 'x-change-cell1',	
        	filter: { 			//필터
        		type : 'list',
//                    operator : 'in',
            },
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	width: 90,
        	dataIndex: 'BP_CD',
        	text: '매입처코드',
        	align: 'center',
        	editor : {
    			xtype : 'textfield',
    			allowBlank : false,
    		},
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 200,
        	dataIndex: 'BP_NM',
        	text: '매입처명',
        	filter: { 			//필터
        		type : 'list',
//                operator : 'in',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 110,
            dataIndex: 'ITEM_CD',
            text: '품목코드',
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 200,
            dataIndex: 'ITEM_NM',
            text: '품목명',
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 120,
            dataIndex: 'SPEC',
            text: '규격',
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	width: 90,
        	dataIndex: 'HSPF_CUR',
        	text: '플랫폼<br>화폐단위',
        	editor : {
    			xtype : 'textfield',
    			allowBlank : false,
    		},
            tdCls: 'x-change-cell2',	
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold; color: #3367d6',
        	width: 90,
        	dataIndex: 'ERP_CUR',
        	text: 'ERP<br>화폐단위',
        	editor : {
    			xtype : 'textfield',
    			allowBlank : false,
    		},
            tdCls: 'x-change-cell2',	
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            width: 90,
            dataIndex: 'HSPF_QTY',
            align: 'right',
            text: '플랫폼<br>입고수량',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            },
            tdCls: 'x-change-cell3',	
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            dataIndex: 'ERP_QTY',
            text: 'ERP<br>입고수량',
            align: 'right',
            width: 90,
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            },
            tdCls: 'x-change-cell3',	
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 60,
        	dataIndex: 'HSPF_GR_TYPE',
        	text: '',
        },
        {
        	xtype: 'gridcolumn',
        	style: 'text-align: center; font-weight: bold;',
        	width: 60,
        	dataIndex: 'ERP_GR_TYPE',
        	text: '',
        },
    ],
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', 'V');
            	
            	var PO_NO = record.get('PO_NO');
            	var store = Ext.getStore('MyStore');
            	var selModel= Ext.getCmp('myGrid').getSelectionModel();
            	var grid = Ext.getCmp('myGrid');
            	
            	store.each(function(record){
        			if(PO_NO == record.get('PO_NO')) {
    					selModel.select(record, true);
        			}
        		});
            },
            deselect: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', '');
            	
            	var PO_NO = record.get('PO_NO');
            	var store = Ext.getStore('MyStore');
            	var selModel= Ext.getCmp('myGrid').getSelectionModel();
            	var grid = Ext.getCmp('myGrid');
            	
            	store.each(function(record){
        			if(PO_NO == record.get('PO_NO')) {
    					selModel.deselect(record, true);
        			}
        		});
            },
        }
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'gridfilters'
        },
        {
        	ptype : 'cellediting',
    		clicksToEdit : 2,
    		listeners : {
    			edit : function(editor, context, eOpts) {
    				var selModel = Ext.getCmp('myGrid').getSelectionModel();
//    				selModel.select(context.record, true);
    				
    				var PO_NO = context.record.data.PO_NO;
    				var GR_DT = context.record.data.GR_DT;
    				var HSPF_GR_TYPE_NM = context.record.data.HSPF_GR_TYPE_NM;
    				var ERP_GR_TYPE_NM = context.record.data.ERP_GR_TYPE_NM;
    				var BP_CD = context.record.data.BP_CD;
    				var HSPF_CUR = context.record.data.HSPF_CUR;
    				var ERP_CUR = context.record.data.ERP_CUR;
    				
    				var store = Ext.getCmp('myGrid').getStore();
    				store.each(function(record, idx) {
    					if(record.get('PO_NO') == PO_NO) {
//    						record.set('GR_DT', GR_DT);
    						record.set('HSPF_GR_TYPE_NM', HSPF_GR_TYPE_NM);
    						record.set('ERP_GR_TYPE_NM', ERP_GR_TYPE_NM);
    						record.set('BP_CD', BP_CD);
    						record.set('HSPF_CUR', HSPF_CUR);
    						record.set('ERP_CUR', ERP_CUR);
		    				selModel.select(record, true);
    					}
    				})
    			},
    		}
        },
        {
            ptype: 'clipboard'
        },
        {
    		ptype: 'gridfilters' ///이부분
      },
    ]

});