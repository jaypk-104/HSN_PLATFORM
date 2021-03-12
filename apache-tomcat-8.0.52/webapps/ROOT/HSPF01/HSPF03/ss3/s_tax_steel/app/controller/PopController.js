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

Ext.define('S_TAX_STEEL.controller.PopController', {
    extend: 'Ext.app.Controller',
    stores : [ 'MyStore1', 'PopStore'],
    
    control: {
		"#w_selBtn1" : {
			click : 'w_selBtn1Click'
		},
		'#popGrid': {
			celldblclick: 'w_popGridDblClick'
		},
		"textfield[name=pop_search]": {
            specialkey: 'tfEnter'
        }
	},

	w_selBtn1Click: function(button, e, eOpts) {
		console.log('zzz');
		
		var popStore = this.getPopStoreStore();
		popStore.load({
    		params: {
    			V_TYPE: 'PH',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_TAX_DT_FR : Ext.getCmp('W_TAX_DT_FR').getValue(),
				V_TAX_DT_TO : Ext.getCmp('W_TAX_DT_TO').getValue(),
				V_S_BP_NM : Ext.getCmp('W_S_BP_NM').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
	},
	
	w_popGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		Ext.getCmp('V_TAX_BILL_NO').setValue(record.get('TAX_BILL_NO'));

    	var store1 = this.getMyStore1Store();
    	store1.removeAll();
    	
    	Ext.Ajax.request({
			url : 'sql/S_TAX_STEEL.jsp',
			method : 'post',
			params: {
				V_TYPE: 'S',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_TAX_BILL_NO : record.get('TAX_BILL_NO'),
			},
			success: function(response) {
				var tbController = S_TAX_STEEL.app.getController("TbButtonController");
	    		tbController.selBtnClick();
	    		
				var popWin=  Ext.getCmp('WinTaxPop');
				popWin.destroy();
			}
    	});
    			
				
	},
	
	tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.w_selBtn1Click();
    	}
}
	

});
