/*
 * File: app/controller/MyGrid1Controller.js
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

Ext.define('B_STORAGE_LOCATION_HSPF.controller.MyGrid1Controller', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore1'
    ],

    control: {
        "#grid1AddBtn": {
            click: 'grid1AddBtnClick'
        },
        "#grid1DelBtn": {
            click: 'grid1DelBtnClick'
        },
        "#grid1SaveBtn": {
        	click: 'grid1SaveBtnClick'
        },
        "#xlsxDown1": {
            click: 'xlsxDown1Click'
        },
    },

    grid1AddBtnClick: function(button, e, eOpts) {
        var popup = Ext.create("B_STORAGE_LOCATION_HSPF.view.WinAddRow1");
        popup.show();
        Ext.getCmp('rowCount1').setValue(1);
    },

    grid1DelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore1');
            	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

            	if(gridRecord.length > 0) {
        			Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
        				if (button == 'yes') {
        					for (var i = 0; i < gridRecord.length; i++) {
        						if (gridRecord[i].data['V_TYPE'] == 'V') {
        							gridRecord[i].set('V_TYPE', 'LD');
        						}
        					}
        					store.sync({
        						params : {
        							V_TYPE : 'SYNC',
        							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
        							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
        						},
        						callback : function(records, operation, success) {
        							store.reload();
        						}
        					});
        				}
        			});
        		}
    },
    
    grid1SaveBtnClick: function(button, e, eOpts) {
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		if (gridRecord.length > 0) {
		for (var i = 0; i < gridRecord.length; i++) {
			if (gridRecord[i].data['SL_CD'] == undefined) {
				flag = 'F';
				msg = '창고코드를 입력하세요.';
			} else if (gridRecord[i].data['LC_CD'] == undefined) {
				flag = 'F';
				msg = 'LOCATION코드를 입력하세요.';
			} else if (gridRecord[i].data['LC_NM'] == undefined) {
				flag = 'F';
				msg = 'LOCATION명을 입력하세요.';
			} else if (gridRecord[i].data['LC_LOC'] == undefined) {
				flag = 'F';
				msg = 'LOCATION위치를 입력하세요.';
			} else {
				flag = 'T';
				if (gridRecord[i].data['V_TYPE'] == 'V') {
					gridRecord[i].set('V_TYPE', 'LU');
				}
			}
		}

			if (flag == 'T') {
				store1.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						Ext.toast({
    	    				title: ' ',
    	    				timeout: 1500,
    	    				html: '저장완료',
    	    				style: 'text-align: center',
    	    				align: 't',
    	    				width: 130,
    	    			});
						store1.reload();
						
					}
				});
			} else {
				Ext.Msg.alert('확인', msg);
			}
		} else {
			Ext.Msg.alert('확인', '저장할 내역을 선택하세요.');
		}
	},

    xlsxDown1Click: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid1');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },


});
