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

Ext.define('SCM_DLVY_HSPF.view.MyGrid1', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygrid1',

    requires: [
        'SCM_DLVY_HSPF.view.MyGrid1ViewModel',
        'SCM_DLVY_HSPF.view.MyGrid1ViewController',
        'Ext.view.Table',
        'Ext.grid.column.RowNumberer',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.Exporter',
        'Ext.grid.plugin.RowEditing',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Number',
        'Ext.form.field.Date'
    ],

    config: {
        tbar: [
            {
                id: 'gridAddBtn1',
                margin: '0 3 0 0',
                glyph: 'xf055@FontAwesome',
                iconCls: 'grid-add-btn',
                disabled: true
            },
            {
                id: 'gridDelBtn1',
                text: '',
                margin: '0 3 0 0',
                glyph: 'xf056@FontAwesome',
                iconCls: 'grid-del-btn',
                disabled: true
            },
            {
                xtype: 'container',
                flex: 1
            },
            {
                id: 'gridASNBtn',
                xtype: 'button',
                text: 'ASN등록',
                style: 'background-color: white; border: 0.5px solid #3367d6;',
                cls: 'blue-btn',
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
    rowLine: true,
    controller: 'mygrid1',
    viewModel: {
        type: 'mygrid1'
    },
    id: 'myGrid1',
    style: 'border: 1px solid lightgray; padding: 5px;',
    bodyBorder: false,
    header: false,
    store: 'MyStore1',
    columnLines: true, 
    columns: [
        {
            xtype: 'rownumberer',
            width: 40
        },
        {
            xtype: 'gridcolumn',
            text: 'V_TYPE',
            dataIndex: 'V_TYPE',
            hidden: true
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'ASN_NO',
            text: 'ASN번호',
            width: 150,
            enableTextSelection: true,
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            dataIndex: 'PO_NO',
            text: '발주번호',
            width: 150
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 90,
            align: 'end',
            dataIndex: 'PO_SEQ',
            text: '발주순번',
            format: '0,000'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            dataIndex: 'ITEM_CD',
            text: '품목코드'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 250,
            dataIndex: 'ITEM_NM',
            text: '품목명'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 130,
            dataIndex: 'SPEC',
            text: '규격'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 85,
            dataIndex: 'UNIT',
            text: '단위'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            dataIndex: 'ASN_STS_NM',
            text: 'ASN상태'
        },
        {
            xtype: 'gridcolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 85,
            dataIndex: 'CFM_YN',
            text: '확정유무',
            align: 'center'
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLVY_REQ_DT',
            text: '납품요청일',
            format: 'Y-m-d'
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'right',
            dataIndex: 'PO_QTY',
            text: '발주수량',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'numbercolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 120,
            align: 'right',
            dataIndex: 'DLVY_AVL_QTY',
            text: '납품예정수량',
            renderer: function(value) {
            	return Ext.util.Format.number(value, '0,000.00');
            }
        },
        {
            xtype: 'datecolumn',
            style: 'font-size: 12px; text-align: center; font-weight: bold;',
            width: 100,
            align: 'center',
            dataIndex: 'DLVY_AVL_DT',
            text: '납품예정일',
            format: 'Y-m-d',
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        listeners: {
        	select: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', 'SYNC');
            },
            deselect: function(rowmodel, record, index, eOpts) {
            	record.set('V_TYPE', '');
            }
        },
        mode: 'SINGLE'
    },
    plugins: [
        {
            ptype: 'gridexporter'
        },
        {
            ptype: 'cellediting',
            clicksToEdit: 1,
        }
    ],
    viewConfig: {
    	enableTextSelection: true,
//    	getRowClass: function(record, index) {
//    		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
//    		
//    		var V_ITEM_CD1 = gridRecord[0].data['ITEM_CD'];
//    		console.log(V_ITEM_CD);
//    		
//            var V_ITEM_CD2 = record.get('ITEM_CD');
//            console.log(V_ITEM_CD2);
//            
//            if (V_ITEM_CD1 == V_ITEM_CD2) { //상단의 ITEM_CD와 동일한 것.
//            	return 'bg-green';
//            } else {
//            	return 'grid-style';
//            }
//        },
    	listeners: {
            refresh: function(view) {      
                var nodes = view.getNodes();
        		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
        		if(gridRecord.length == 1) {
        			var V_PO_NO = gridRecord[0].data['PO_NO'];
        			var V_PO_SEQ = gridRecord[0].data['PO_SEQ'];

                    for (var i = 0; i < nodes.length; i++) {
                        var node = nodes[i];
                        var record = view.getRecord(node);
                        var rows = Ext.get(node).query('tr');
                        var V_PO_NO2 = record.data.PO_NO;
                        var V_PO_SEQ2 = record.data.PO_SEQ;
                        
                        for(var j = 0; j < rows.length; j++) {
                        	if((V_PO_NO == V_PO_NO2) && (V_PO_SEQ == V_PO_SEQ2)) {
                        		Ext.fly(rows[j]).setStyle('background-color', '#ffefbb');
                        	}
                        }                                       
                    }
        		}
            }      
        }
    },
});