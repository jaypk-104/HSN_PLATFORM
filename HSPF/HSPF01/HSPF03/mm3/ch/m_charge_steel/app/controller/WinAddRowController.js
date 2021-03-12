/*
 * File: app/controller/WinAddRowController.js
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

Ext.define('M_CHARGE_STEEL.controller.WinAddRowController', {
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
        	var LC_DOC_NO = Ext.getCmp('V_LC_DOC_NO').getValue();
        	var BL_DOC_NO = Ext.getCmp('V_BL_DOC_NO').getValue();
        	var ID_NO = Ext.getCmp('V_ID_NO').getValue();
        	
        	for(var i=0; i<rowCount; i++) {
        		count = count + 1;
        		var rec = Ext.create('M_CHARGE_STEEL.model.MyModel', {
        			BAS_NO: Ext.getCmp('V_BAS_NO').getValue(),
        			LC_DOC_NO: LC_DOC_NO,
        			BL_DOC_NO: BL_DOC_NO,
        			ID_NO: ID_NO,
        			CHARGE_DT: new Date(),
	    			CUR: 'KRW',
	    			TAX_BIZ_CD: 'TX3',
	    			XCHG_RT: '1',
	    			DISTR_TYPE: 'A2',
	    			BANK_CD: '32',
	    			PAY_DUE_DT: new Date()
        		});
        		store.insert(count-1, rec);
        	}

        	var win = Ext.WindowManager.getActive();
        	if(win){
        	     win.close();
        	}
    }

});
