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

Ext.define('V_ALTMT_ITEM_TOT_HSPF.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.myGrid1',

    requires: [
        'V_ALTMT_ITEM_TOT_HSPF.view.MyGridViewModel1',
        'V_ALTMT_ITEM_TOT_HSPF.view.MyGridViewController1',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.form.field.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing'
    ],

    config: {
        tbar: [
            {
                id: 'gridAddBtn1',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn',
            },
            {
                id: 'gridDelBtn1',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn'
            },
            {
				id : 'gridSaveBtn1',
				text : '',
				margin : '0 3 0 0',
				glyph : 'xf0c7@FontAwesome',
				iconCls : 'grid-save-btn',
			},
			{
                xtype: 'label',
                text: '< 대체품 정보 >',
                style: 'font-size: 15px; text-align: center; font-weight: bold;',
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
            }
        ]
    },

    controller: 'mygrid1',
    viewModel: {
        type: 'mygrid1'
    },
    id: 'myGrid1',
    style: 'border: 1px solid #659DDC; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore1',

    viewConfig : {
		enableTextSelection : true,
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
            style: 'text-align: center; font-weight: bold;',
            dataIndex: 'SEQ',
            text: '순번',
            align: 'end',
            width: 80,
        }, 
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 150,
            dataIndex: 'MIX_ROLL',
            text: '배합상주요역할',
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                if(Ext.data.StoreManager.lookup('storeALTMT01').findRecord('DTL_CD',value) !==null)
                {
                    return Ext.data.StoreManager.lookup('storeALTMT01').findRecord('DTL_CD',value).get('DTL_NM');
                }
                return value;
            },
            editor: {
        		xtype: 'combobox',
        		displayField: 'DTL_NM',
        		valueField: 'DTL_CD',
        		enableRegEx: true,
                minChars: 2,
                queryMode: 'local',
                allowBlank:false,
        		store: Ext.create('Ext.data.Store',{
        			autoLoad: true,
        			storeId: 'storeALTMT01',
        			proxy: {
        		           type: 'ajax',
        		           extraParams: {
        		            	V_MAST_CD: 'ALTMT01',
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
                        '<div>{DTL_NM}</div>'
                    ]
                },
        	}
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 130,
            dataIndex: 'LST_APPLY_PROD',
            text: '최종적용제품',
            editor: {
            	xtype: 'textfield',
            },
            hidden: true,
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 130,
            dataIndex: 'FR_INFO',
            text: '대체품정보출처',
            editor: {
            	xtype: 'textfield',
            },
            hidden: true,
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 130,
            dataIndex: 'ALTMT_MAKER',
            text: '대응품MAKER',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 130,
            dataIndex: 'ALTMT_M_BP_NM',
            text: '대체품공급처',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 130,
            dataIndex: 'ALTMT_GRADE',
            text: '대체품GRADE',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 120,
            dataIndex: 'ALTMT_ORIGIN',
            text: '대체품원산지',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'checkcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 100,
            dataIndex: 'USE_YN',
            text: '사용가능여부',
            renderer : function(value, metadata, record, rowIndex, colIndex, store) {
    			var tempVal = '';
    			if (value === 'Y') {
    				tempVal = 'checked';
    			}
    			return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
    		},
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 130,
            dataIndex: 'NO_POS_TXT',
            text: '불가사유',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'checkcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 100,
            dataIndex: 'PROD_YN',
            text: '양산적용여부',
            renderer : function(value, metadata, record, rowIndex, colIndex, store) {
    			var tempVal = '';
    			if (value === 'Y') {
    				tempVal = 'checked';
    			}
    			return "<input name=" + record.get('id') + "_" + record.get('id') + " type='checkbox'" + tempVal + ">";
    		},
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 100,
            dataIndex: 'QC_PERIOD',
            text: '평가시점',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 110,
            dataIndex: 'QC_DEPT',
            text: '평가부서',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold; color: #3367d6',
            width: 200,
            dataIndex: 'QC_REMARK',
            text: '평가사유',
            editor: {
            	xtype: 'textfield',
            },
        },
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            dataIndex: 'BS_YEAR',
            text: 'BS_YEAR',
            hidden: true
        }, 
        {
            xtype: 'gridcolumn',
            style: 'text-align: center; font-weight: bold;',
            dataIndex: 'ITEM_CD',
            text: 'ITEM_CD',
            hidden: true
        }, 
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE',
        listeners: {}
    },
//    features : [ {
//		ftype: 'summary',
//        dock: 'bottom'
//	} ],
    plugins: [
        {
            ptype: 'gridexporter'
        }, {
    		ptype : 'cellediting',
    	    clicksToEdit: 1,
    	    listeners : {
    	    	beforeedit: function (e, editor) {
					var rec = editor.record.data;
					var field = editor.field;
					var userId = parent.Ext.getCmp('GUSER_ID').getValue();
					
					if("/ADMIN/HDH/SMDSM1".indexOf(userId) < 0){
				    	return false;
					}
					
			        return true;
			    },
			},
    	}
    ]

});