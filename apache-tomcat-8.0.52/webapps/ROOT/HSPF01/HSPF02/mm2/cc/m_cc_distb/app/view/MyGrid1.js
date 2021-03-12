/*
 * File: app/view/MyGrid1.js
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

Ext.define('M_CC_DISTB.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid1',

    requires: [
        'M_CC_DISTB.view.MyGrid1ViewModel',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.form.field.Text',
        'Ext.grid.column.Number',
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
                 id: 'ccRegBtn',
                 text: '',
                 margin: '0 3 0 0',
 	           	style: 'background-color: white; border: 0.5px solid #3367d6;',
	           	cls: 'blue-btn',
	           	text: '통관등록'
        	 },
            {
                xtype: 'container',
                flex: 1
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
                margin: '0 3 0 0',
                
            }
        ]
    },
    viewConfig: {
        enableTextSelection: true
    },
    viewModel: {
        type: 'mygrid1'
    },
    id: 'myGrid1',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore1',

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
        	xtype: 'checkcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            dataIndex: 'EX_YN',
            enableTextSelection: true,
            text: '이상체크',
            width: 100,
            renderer: function (value, metadata, record, rowIndex, colIndex, store) {
                var tempVal = '';
                if (value === 'Y') {
                    tempVal = 'checked';
                }
                return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            text: 'BOX수량',
            format: '0,000',
            dataIndex: 'BOX_QTY',
            align: 'right',
            editor: {
            	xtype: 'numberfield',
            	format: '0,000',
            	align: 'right'
            },
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;',
            text: '단위중량',
            format: '0,000.00',
            align: 'right',
            dataIndex: 'BOX_WGT_UNIT',
//            summaryType: 'sum',
//            summaryRenderer: function (value, summaryData, dataIndex) {
//	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
//	        }
        },
        {
            xtype: 'numbercolumn',
            style: 'text-align: center; font-weight: bold;  color: #3367d6',
            text: '총 중량',
            format: '0,000.00',
            align: 'right', 
            dataIndex: 'QTY',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
	        },
            editor: {
            	xtype: 'numberfield',
            	format: '0,000.00',
            	align: 'right'
            },
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
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            text: '금액',
            format: '0,000.00',
            dataIndex: 'DOC_AMT',
            align: 'right',
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000.00')+"<font>"; 
	        },
            editor: {
            	xtype: 'numberfield',
            	format: '0,000.00',
            	align: 'right'
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px;  text-align: center; font-weight: bold;  color: #3367d6',
            text: '선적자국금액',
            format: '0,000',
            dataIndex: 'LOC_AMT',
            align: 'right',
            width: 130,
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        },
            editor: {
            	xtype: 'numberfield',
            	format: '0,000.00',
            	align: 'right'
            },
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px;  text-align: center; font-weight: bold;  color: #3367d6',
            text: '선물환율자국금액',
            format: '0,000',
            dataIndex: 'FORWARD_XCH_AMT',
            align: 'right',
            width: 130,
            summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        },
        	editor: {
        		xtype: 'numberfield'
        	}
        },
        {
        	xtype: 'numbercolumn',
        	style: ' font-size: 12px;  text-align: center; font-weight: bold;  color: #3367d6',
        	width: 110,
        	text: '관세율',
        	format: '0,000.00',
        	dataIndex: 'TAX_RATE',
        	align: 'right',
        	editor: {
        		xtype: 'numberfield'
        	}
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            dataIndex: 'DATA',
            enableTextSelection: true,
            text: '유통이력번호',
            editor: {
            	xtype: 'textfield'
            },
            width: 150
        
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
        	xtype: 'gridcolumn',
        	style: 'font-size: 12px; text-align: center; font-weight: bold;',
        	sortable: true,
        	dataIndex: 'SL_CD',
        	enableTextSelection: true,
        	text: '창고',
        	hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            sortable: true,
            dataIndex: 'BL_NO',
            enableTextSelection: true,
            text: 'BL_NO',
            width: 170,
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'BL_SEQ',
            enableTextSelection: true,
            text: 'BL_SEQ',
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
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold; color: #3367d6',
            sortable: true,
            dataIndex: 'REMARK',
            enableTextSelection: true,
            text: '비고',
            editor: {
            	xtype: 'textfield'
            },
            width: 200
        
        },
    ],
    listeners: {
        cellclick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
            if (e.target.type && e.target.type === 'checkbox') {
                let checkVal = e.target.checked ? 'Y' : 'N';
                record.set('EX_YN', checkVal);
            }
        }
    },
    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
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
            listeners: {
            	edit: function(editor, context, eOpts) {
            		var BOX_QTY = Number(context.record.data.BOX_QTY); 
            		var BOX_WGT_UNIT = Number(context.record.data.BOX_WGT_UNIT); 
            		var PRICE = Number(context.record.data.PRICE);
            		var QTY = Number(context.record.data.QTY);
            		var DOC_AMT = Number(context.record.data.DOC_AMT);
            		var XCH_RATE = Ext.getCmp('V_XCH_RATE').getValue();
            		var FORWARD_XCH = Ext.getCmp('V_FORWARD_XCH').getValue();
            		var store1 = Ext.getStore('MyStore1');
            		
//            		console.log('DOC_AMT' + DOC_AMT);
//            		console.log('XCH_RATE' + XCH_RATE);
//            		console.log('XCH_RATE*' + (DOC_AMT * XCH_RATE).toFixed(0));
//            		
//            		console.log('FORWARD_XCH' + FORWARD_XCH);
//            		console.log('FORWARD_XCH*' + (DOC_AMT * FORWARD_XCH).toFixed(0));
            		
            		if(context.column.dataIndex == 'DOC_AMT') {
            			context.record.set('LOC_AMT', (DOC_AMT * XCH_RATE).toFixed(0));
            			context.record.set('FORWARD_XCH_AMT', (DOC_AMT * FORWARD_XCH).toFixed(0));
            		}
            	}, afteredit : function(e) {
					var rec = e.context.record;
					var field = e.context.field;
					var val = e.context.value;
					
					if(rec.get('EX_YN') === 'Y'){
						if (field == 'BOX_QTY') {
							if(val === 0){
								rec.set('BOX_WGT_UNIT', 0);
							} else {
								rec.set('BOX_WGT_UNIT', (rec.get('QTY') / val).toFixed(2));
							}
						} else if (field == 'QTY') {
							if(val === 0){
								rec.set('BOX_WGT_UNIT', 0);
								rec.set('PRICE', 0);
							} else {
								rec.set('BOX_WGT_UNIT', rec.get('BOX_QTY') === 0 ? 0 : (val / rec.get('BOX_QTY')).toFixed(2));
								rec.set('PRICE', rec.get('DOC_AMT') === 0 ? 0 : (rec.get('DOC_AMT') / val).toFixed(2));
							}
						} else if (field == 'DOC_AMT') { // 여긴 요건은 없지만 필요할 것 같아서 넣었는데.. 확인필요  
							if(val === 0){
								rec.set('PRICE', 0);
							} else {
								rec.set('PRICE', rec.get('QTY') === 0 ? 0 : (val / rec.get('QTY')).toFixed(2));
							}
						}
					}
					
				},
				beforeedit: function (e, editor) {
					var rec = editor.record.data;
					var field = editor.field;

					if(rec.EX_YN === 'Y' && (field == 'DOC_AMT' || field == 'FORWARD_XCH_AMT' || field == 'LOC_AMT')){
				    	return false;
					}
			    	
			        return true;
			    }
            }
        }
    ],
	features : [ {
		ftype: 'summary',
        dock: 'bottom'
	} ]

});