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

Ext.define('B_PR_USR_DISTR.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore'
    ],

    control: {
    	"#gridAddBtn": {
    		click: 'gridAddBtnClick'
    	},
		'#gridDelBtn' : {
			click : 'gridDelBtnClick'
		},
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
    },

    gridAddBtnClick: function() {
    	var popup = Ext.create("B_PR_USR_DISTR.view.WinAddRow");
		popup.show();
		Ext.getCmp('rowCount').setValue(1);
    },
    
    gridDelBtnClick: function() {
		var store = this.getMyStoreStore();
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		
		Ext.MessageBox.confirm('확인', '삭제하시겠습니까?', function(btn) {
			if(btn == 'yes') {
				for(var i=0; i<gridRecord.length; i++) {
					if(gridRecord[i].data['V_TYPE'] == 'V') {
						gridRecord[i].set('V_TYPE', 'D');
					}
				}
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
				    	var res2 = records.operations[0]._response.responseText;
				    	
				    	if(res2.match('Exception')) {
				    		Ext.Msg.alert('확인', res2);
				    	} else {
				    		for(var i=0; i<gridRecord.length; i++) {
								if(gridRecord[i].data['V_TYPE'] == 'D') {
									store.remove(gridRecord[i]);
								}
							}
			    			store.reload();
			    		}
					},
				});
			}
		});
		
	},
    
    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
    	var grid = Ext.getCmp('myGrid');
    	grid.saveDocumentAs({
            type: 'xlsx',
            title: '출고증출력자등록', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
		});
    },

});
