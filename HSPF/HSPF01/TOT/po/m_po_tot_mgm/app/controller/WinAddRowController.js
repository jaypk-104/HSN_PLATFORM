/*
 * File: app/controller/WinAddRowController.js
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

Ext.define('M_PO_TOT_MGM.controller.WinAddRowController', {
    extend: 'Ext.app.Controller',

    control: {
        "#mybutton4": {
            click: 'addRowBtnClick'
        }
    },

    addRowBtnClick: function(button, e, eOpts) {

                var store = Ext.getStore('MyStore');
            	var count = store.getCount();
            	var rowCount = Number(Ext.getCmp('rowCount').getValue());
            	
            	var PO_ROW = 0;
            	
            	store.each(function(rec, index) {
            		if(PO_ROW < Number(rec.data['PO_ROW'])){
            			PO_ROW = Number(rec.data['PO_ROW']);
            		}
            	});

//            	store.insert(0, rec);
            	
            	var prc = 0;
            	if(Ext.getCmp('V_PO_TYPE').getValue() == 'DO'){
            		prc = 1;
            	}

            	for(var i=0; i<rowCount; i++) {
            		count = count + 1;
            		var rec = Ext.create('M_PO_TOT_MGM.model.MyModel', {
//            			ITEM_CD: 'BRTEST004',
//        				ITEM_NM: 'TEST03',
//        				SPEC: 'SPEC03',
//        				UNIT: 'EA',
        				PO_PRC: prc,
        				PO_ROW : Number(PO_ROW) + i + 1,
        				TRANS_TYPE1 : Ext.getCmp('V_TRANS_TYPE').getValue(),
        				TRANS_TYPE2 : Ext.getCmp('V_TRANS_TYPE').getValue(),
        				TRANS_TYPE3 : Ext.getCmp('V_TRANS_TYPE').getValue(),
        				TRANS_TYPE4 : Ext.getCmp('V_TRANS_TYPE').getValue(),
        				TRANS_TYPE5 : Ext.getCmp('V_TRANS_TYPE').getValue(),
//        				HOPE_SL_CD: 'SL1',
//        				
//        				DLVY_HOPE_DT1: '2020-01-01',
//        				PO_QTY1: 1,
//        				PO_AMT1: 10,
        				
            		});
            		store.insert(count-1, rec);
            	}

            		var win = Ext.WindowManager.getActive();
            	if(win){
            	     win.close();
            	}
    }

});
