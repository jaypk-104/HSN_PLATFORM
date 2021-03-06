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

Ext.define('st_tr_reg.controller.WinAddRowController', {
    extend: 'Ext.app.Controller',

    control: {
        "#addRowBtn": {
            click: 'addRowBtnClick'
        }
    },

    addRowBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
            	var count = store.getCount();
            	var rowCount = Number(Ext.getCmp('rowCount').getValue());

            	for(var i=0; i<rowCount; i++) {
            		count = count + 1;
            		var rec = Ext.create('st_tr_reg.model.MyModel', {
            			//USR_ID: parent.Ext.getCmp('GUSER_ID').getValue()
            			TOTAL_KG: 0,
            			GONG_KG: 0,
            			MINUS_KG: 0,
            			GR_KG: 0,
            			ITEM_CD : 'HS0001',
            			ITEM_NM : '국내고철',
            			
            			DELV_AMT: 0,
            			DELV_PRC: 0,
            			PRC: 0,
            			GR_AMT: 0,
            			GR_VAT: 0,
            			TOTAL_AMT: 0,
            			
            			DN_PRC: 0,
            			DN_AMT: 0,
            			DN_VAT: 0,
            			DN_TOTAL_AMT: 0,
            			
            			GR_DT: new Date(),
            			DN_DT: new Date(),
            			
            		});
            		store.insert(0, rec);
            	}

            	var win = Ext.WindowManager.getActive();
            	if(win){
            	     win.close();
            	}
    }

});
