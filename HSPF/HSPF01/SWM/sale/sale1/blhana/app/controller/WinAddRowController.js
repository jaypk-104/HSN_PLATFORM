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

Ext.define('blhsna.controller.WinAddRowController', {
    extend: 'Ext.app.Controller',

    stores: [
        'BlHsnaStore'
    ],

    control: {
        "#addRowBtn": {
            click: 'addRowBtnClick'
        }
    },

    addRowBtnClick: function(button, e, eOpts) {
    	var store = this.getBlHsnaStoreStore();
    	var count = store.getCount();
    	var rowCount = Number(Ext.getCmp('rowCount').getValue());
    	count = count + 1;

    	for(var i=0; i<rowCount; i++) {
    		count = count + 1;
    		var rec = Ext.create('blhsna.model.MyModel', {
    			BL_DOC_NO : '',
    			CFM_YN : 'N',
    			INSROW : 'Y',
    		});
    		store.insert(count-1, rec);
    	}
    	/*
    	var rec = Ext.create('blhsna.model.MyModel', {
    		BL_DOC_NO : '',
    	});

    	rec.set('CFM_YN', 'N');
            	rec.set('INSROW', 'Y');
            	store.insert(count-1, rec);

            	
            	*/
            	var win = Ext.WindowManager.getActive();
            	if(win){
            	     win.close();
            	}
}

});
