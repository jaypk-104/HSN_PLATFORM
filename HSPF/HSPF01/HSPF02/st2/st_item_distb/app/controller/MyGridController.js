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

Ext.define('ST_ITEM_DISTB.controller.MyGridController', {
	extend : 'Ext.app.Controller',
	stores : [ 'MyStore', 'MyStore1' ],
	control : {
		"#xlsxDown" : {
			click : 'xlsxDown1Click'
		},
		"#execBtn" : {
			click : 'execBtnClick'
		}
	},
	
	xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '품목별재고현황', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },
	execBtnClick: function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"Please wait..."});
		

		myMask.show();
		Ext.Ajax.request({
			url : 'sql/ST_ITEM_DISTB.jsp',
			method : 'post',
			params : {
				V_TYPE : 'CALC',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_DATE: Ext.getCmp('V_DATE').getValue(),
			},
			callback: function() {
				
				myMask.hide();
			},
			success : function(response) {
				myMask.hide();
				
				var tbController = ST_ITEM_DISTB.app.getController("TbButtonController");
				tbController.selBtnClick();
			}
		});
		
	}
});