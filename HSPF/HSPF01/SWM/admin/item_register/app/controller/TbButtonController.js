/*
 * File: app/controller/TbButtonController.js
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

Ext.define('item_register.controller.TbButtonController', {
	extend : 'Ext.app.Controller',

	stores : [ 'MyStore' ],

	control : {
		"#selBtn" : {
			click : 'selBtnClick'
		},
		"#saveBtn" : {
			click : 'saveBtnClick'
		},
		"#delBtn" : {
			click : 'delBtnClick'
		},
		"#clsBtn" : {
			click : 'clsBtnClick'
		},
		"textfield[name=search_field_main]" : {
			specialkey : 'tfEnter'
		}
	},

	selBtnClick : function(button, e, eOpts) {

		var store = this.getMyStoreStore();
		store.removeAll();
		store.load({
			params : {
				V_TYPE : 'S',
				V_ITEM_CD : Ext.getCmp('u_item_cd').getValue(),
				V_ITEM_NM : Ext.getCmp('u_item_nm').getValue(),
				V_M_BP_NM : Ext.getCmp('u_m_bp_nm').getValue(),
			},
			callback : function(records, operations, success) {
			}
		})
	},

	saveBtnClick : function(button, e, eOpts) {

		var store = this.getMyStoreStore();
		var gridObj1 = Ext.getCmp('myGrid');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = "";
		var msg = "";

		for (var i = 0; i < gridRecord.length; i++) {
			if (gridRecord[i].data['BP_ITEM_CD'] == undefined || gridRecord[i].data['BP_ITEM_CD'] == null || gridRecord[i].data['BP_ITEM_CD'] == '') {
				flag = 'N';
				msg = '해외법인 코드를 입력하세요.';
				break;
			} 
			else if (gridRecord[i].data['ITEM_CD'] == undefined || gridRecord[i].data['ITEM_CD'] == null || gridRecord[i].data['ITEM_CD'] == '') {
				flag = 'N';
				msg = 'HSN 코드을 입력하세요.';
				break;
			} 
			else if (gridRecord[i].data['S_PRICE'] == undefined || gridRecord[i].data['S_PRICE'] == null || gridRecord[i].data['S_PRICE'] == '' || gridRecord[i].data['S_PRICE'] == 0) {
				flag = 'N';
				msg = '판매가를 입력하세요.';
				break;
			}
			else if (gridRecord[i].data['M_PRICE'] == undefined || gridRecord[i].data['M_PRICE'] == null || gridRecord[i].data['M_PRICE'] == '' || gridRecord[i].data['M_PRICE'] == 0) {
				flag = 'N';
				msg = '매입가를 입력하세요.';
				break;
			} 
//			else if (gridRecord[i].data['S_BP_CD'] == undefined || gridRecord[i].data['S_BP_CD'] == null || gridRecord[i].data['S_BP_CD'] == '') {
//				flag = 'N';
//				msg = '판매처를 입력하세요';
//				break;
//			}
			else {
				flag = 'Y';
			}
		}
		
		if(flag == 'Y'){
			Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
				if (button == 'yes') {
			
					store.sync({
						params : {
							V_TYPE : 'SYNC',
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						},
						callback : function(records, operation, success) {
							store.reload();
						},
						scope : this
					});
				}
			});
		}
		else{
			Ext.Msg.alert('확인', msg);
		}
		

	},

	delBtnClick : function(button, e, eOpts) {
		alert('delete');
	},

	clsBtnClick : function(button, e, eOpts) {
		var tab = parent.Ext.getCmp('myTab');
		var activeTab = tab.getActiveTab();
		var tabIndex = tab.items.indexOf(activeTab);
		tab.remove(tabIndex, true);
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.selBtnClick();
		}
	}

});
