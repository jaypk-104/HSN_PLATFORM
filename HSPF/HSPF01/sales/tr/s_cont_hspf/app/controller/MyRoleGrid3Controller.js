/*
 * File: app/controller/MyRoleGrid3Controller.js
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

Ext.define('S_CONT_HSPF.controller.MyRoleGrid3Controller', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore3'
    ],

    control: {
        "#RoleGrid3DelBtn": {
            click: 'RoleGrid3DelBtnClick'
        },
        "#RoleGrid3xlsxDown": {
            click: 'RoleGrid3xlsxDownClick'
        },
        "#RoleGrid3xmlDown": {
            click: 'RoleGrid3xmlDownClick'
        }
    },

    RoleGrid3DelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore3');
            	var gridRecord = Ext.getCmp('RoleGrid3').getSelectionModel().getSelection();

            	if(gridRecord.length > 0) {
            		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
            			if(button == 'yes') {
                            store.remove(gridRecord);
        //     				for(var i=0; i<gridRecord.length; i++) {
        //     		    		if(gridRecord[i].data['V_TYPE']=='V') {
        //     		    			gridRecord[i].data['V_TYPE'] = 'D';
        //     		    		}
        //     		    	}
        //     		    	store.sync({
        //     					params: {
        //     						V_USR_ID : 'admin',//parent.Ext.getCmp('GUSER_ID').getValue(),
        //     					},
        //     		    		callback: function(records, operation, success) {
        //     		    			store.reload();
        //     					}
        //     		    	});
            			}
            		});
            	}
    },

    RoleGrid3xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('RoleGrid3');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    RoleGrid3xmlDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('RoleGrid3');
            	grid.saveDocumentAs({
                    type: 'xml',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xml' //엑셀파일이름
        		});
    }

});
