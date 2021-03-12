/*
 * File: app/controller/MyGridController.js
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

Ext.define('M_BL_TOTAL_DISTR.controller.MyGridController1', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore1' ],
	control : {
		"#xlsxDown1" : {
			click : 'xlsxDown1Click'
		}
	},
	
	xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid1');
    	
    	if(grid.getStore().data.length > 0){
	    	grid.saveDocumentAs({
	            type: 'xlsx',
	            title: 'BL종합현황(중단)', //엑셀내타이틀
	            fileName: 'BL종합현황(중단) ' + currentDate+'.xlsx' //엑셀파일이름
			});
    	}
    }
});