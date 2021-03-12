/*
 * File: app/view/MyWindow1.js
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

Ext.define('M_COL_CHANGE_HSPF.view.MyWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.mywindow',

	requires: [
        'M_COL_CHANGE_HSPF.view.MyWindowViewModel',
        'Ext.form.field.Text',
        'Ext.grid.Panel',
        'Ext.grid.column.RowNumberer',
        'Ext.view.Table',
        'Ext.button.Button',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
    ],

	viewModel : {
		type : 'mywindow'
	},
	height : 450,
	width : 650,
	title : '담보처리팝업(반환)',
	layout : 'fit',
	modal : true,

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [ {
		xtype : 'container',
		dock : 'top',
		height : 50,
		maxHeight : 50,
		minHeight : 50,
		width : 100,
		hidden: true,
		layout : {
			type : 'hbox',
			align : 'middle'
		},
		items : [ {
			xtype : 'textfield',
			flex : 1,
			id : 'W_DEPT_CD',
			maxWidth : 220,
			minWidth : 220,
			width : 220,
			fieldLabel : '부서코드',
			labelAlign : 'right',
			labelWidth : 80,
		}, {
			xtype : 'textfield',
			id : 'W_BP_CD',
			maxWidth : 220,
			minWidth : 220,
			width : 220,
			fieldLabel : 'W_BP_CD',
			labelAlign : 'right',
			labelWidth : 80,
		}, ]
	}, ],
	items : [ {
		xtype : 'gridpanel',
		id : 'popGrid',
		store : 'PopStore',
		flex : 1,
		header : false,
		style : 'border: 1px solid #659DDC; padding: 5px;',
		tbar: [
        	{
				id : 'gridAddBtn',
				text : '',
				margin : '0 3 0 0',
				glyph : 'xf055@FontAwesome',
				iconCls : 'grid-add-btn',
			}, 
			{
			    id: 'gridDelBtn',
			    text: '',
			    margin: '0 3 0 0',
			    glyph: 'xf056@FontAwesome',
			    iconCls: 'grid-del-btn',
			},
//			{
//				id : 'gridSaveBtn',
//				text : '',
//				margin : '0 3 0 0',
//				glyph : 'xf0c7@FontAwesome',
//				iconCls : 'grid-save-btn',
//			},
        	{
                  xtype: 'container',
                  flex: 1
            },
            {
            	xtype: 'button',
          	    id: 'tempGlCfmBtn',
          	    margin: '0 3 0 0',
          	    text: '전표생성',
          	    style: 'background-color: white; border: 0.5px solid #3367d6;',
          	    cls: 'blue-btn',
            },
        ],
		columns : [ {
			xtype : 'rownumberer'
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'V_TYPE',
			text : 'V_TYPE',
			width : 80,
			hidden : true
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'MAST_DB_NO',
			text : '담보번호',
			width : 150,
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'BP_CD',
			text : '거래처',
			width : 100,
			hidden: true
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			dataIndex : 'BP_NM',
			text : '거래처명',
			width : 150
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold; color: #3367d6',
			width : 120,
			dataIndex : 'ACCT_CD',
			text : '상대계정',
			editor: {
                xtype: 'combobox',
                displayField: 'DTL_NM',
                valueField: 'DTL_CD',
                enableRegEx: true,
                minChars: 2,
                queryMode: 'local',
                store: 'AcctStore',
                matchFieldWidth: false,
                listeners: {
                    beforequery: function(record){  
                        record.query = new RegExp(record.query, 'i');
                        record.forceAll = true;
                    },
                    focus: function(widget, event, eOpts) {
                    	var AcctStore = Ext.getStore('AcctStore');
                    	AcctStore.proxy.extraParams.V_DEPT_CD = Ext.getCmp('W_DEPT_CD').getValue();
                    	AcctStore.reload();
                    },
                },
              	listConfig: {
                    itemTpl: [
                        '<div>[{DTL_CD}] {DTL_NM}</div>'
                    ]
                }
            },
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
	            if(Ext.data.StoreManager.lookup('AcctStore').findRecord('DTL_CD',value) !==null)
	            {
	                return Ext.data.StoreManager.lookup('AcctStore').findRecord('DTL_CD',value).get('DTL_NM');
	            }
	            return value;
	        },
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold; color: #3367d6',
			width : 120,
			dataIndex : 'BANK_CD',
			text : '은행',
			editor: {
                xtype: 'combobox',
                displayField: 'DTL_NM',
                valueField: 'DTL_CD',
                enableRegEx: true,
                minChars: 2,
                queryMode: 'local',
                store: 'BankStore',
                matchFieldWidth: false,
                listeners: {
                    beforequery: function(record){  
                        record.query = new RegExp(record.query, 'i');
                        record.forceAll = true;
                    },
                    focus: function(widget, event, eOpts) {
                    	var BankStore = Ext.getStore('BankStore');
                    	BankStore.reload();
                    },
                },
              	listConfig: {
                    itemTpl: [
                        '<div>[{DTL_CD}] {DTL_NM}</div>'
                    ]
                }
            },
            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
	            if(Ext.data.StoreManager.lookup('BankStore').findRecord('DTL_CD',value) !==null)
	            {
	                return Ext.data.StoreManager.lookup('BankStore').findRecord('DTL_CD',value).get('DTL_NM');
	            }
	            return value;
	        },
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold; color: #3367d6',
			width : 150,
			dataIndex : 'BANK_ACCT_NO',
			text : '계좌번호',
			editor: {
                xtype: 'combobox',
                displayField: 'DTL_NM',
                valueField: 'DTL_CD',
                enableRegEx: true,
                minChars: 2,
                queryMode: 'local',
                store: 'BankAcctStore',
                matchFieldWidth: false,
                listeners: {
                    beforequery: function(record){  
                        record.query = new RegExp(record.query, 'i');
                        record.forceAll = true;
                    },
                    focus: function(widget, event, eOpts) {
                    	var BankAcctStore = Ext.getStore('BankAcctStore');
                    	BankAcctStore.proxy.extraParams.V_BANK_CD = Ext.getCmp('popGrid').getSelection()[0].get('BANK_CD');
                    	BankAcctStore.reload();
                    },
                },
              	listConfig: {
                    itemTpl: [
                        '<div>[{DTL_NM}] {DTL_CD}</div>'
                    ]
                }
            },
		}, {
			xtype : 'numbercolumn',
			style : 'text-align: center; font-weight: bold; color: #3367d6',
			width : 120,
			align : 'end',
			dataIndex : 'COL_AMT',
			text : '담보금액',
			format : '0,000',
			editor : {
				xtype : 'numberfield',
				format : '0,000',
				align : 'right'
			},
			summaryType: 'sum',
            summaryRenderer: function (value, summaryData, dataIndex) {
	            return "<font color='green'>"+Ext.util.Format.number(value, '0,000')+"<font>"; 
	        },
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 130,
			dataIndex : 'TEMP_GL_NO',
			text : '전표번호',
		}, {
			xtype : 'gridcolumn',
			style : 'text-align: center; font-weight: bold;',
			width : 100,
			dataIndex : 'DEPT_CD',
			text : '부서코드',
			hidden: true
		}, ],
		plugins : [ {
			ptype : 'gridexporter'
		}, {
			ptype : 'cellediting'
		} ],
		
		selModel : {
			selType : 'checkboxmodel',
			mode : 'SINGLE',
			listeners : {
				select : function(rowmodel, record, index, eOpts) {
					
				},
				deselect : function(rowmodel, record, index, eOpts) {
					
				}
			}
		},
		features : [ {
			ftype : 'summary',
			dock : 'bottom'
		} ],
		viewConfig : {
			enableTextSelection : true,
			enableLocking: true,
		},
	}, {
		xtype : 'container',
		height : 50,
		maxHeight : 50,
		minHeight : 50,
		layout : {
			type : 'hbox',
			align : 'middle',
			pack : 'center'
		},
		items : [ {
			xtype : 'button',
			flex : 1,
			id : 'w_regBtn',
			maxWidth : 100,
			minWidth : 100,
			width : 100,
			text : '저장'
		} ]
	} ]

});