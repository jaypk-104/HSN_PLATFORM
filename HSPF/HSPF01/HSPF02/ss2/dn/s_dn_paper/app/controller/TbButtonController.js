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

Ext.define('S_DN_PAPER.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: ['MyStore', 'MyStore1', 'MyStore3', 'MyStore2'],
    control: {
        "#selBtn": {
            click: 'selBtnClick'
        },
        "#saveBtn": {
            click: 'saveBtnClick'
        },
        "#delBtn": {
            click: 'delBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
        "textfield[name=search_field2]": {
        	specialkey: 'tfEnter2'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	var store2 = this.getMyStore2Store();
    	var store3 = this.getMyStore3Store();
		store.removeAll();
		store1.removeAll();
		store2.removeAll();
		store3.removeAll();
    		
    	//[상단]조회
    	store.load({
    		params: {
    			V_TYPE: 'S1',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_DN_REQ_DT: Ext.getCmp('V_DN_REQ_DT').getValue(),
    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    		},
    		callback: function(records,operations,success){
    			store1.load({
    	    		params: {
    	    			V_TYPE: 'T2H',
    	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    	    			V_DN_REQ_DT: Ext.getCmp('V_DN_REQ_DT').getValue(),
    	    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    	    		},
    	    		callback: function(records,operations,success){
    	    			store3.load({
    	    	    		params: {
    	    	    			V_TYPE: 'T3',
    	    	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    	    	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    	    	    			V_DN_REQ_DT: Ext.getCmp('V_DN_REQ_DT').getValue(),
    	    	    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    	    	    		},
    	    	    		callback: function(records,operations,success){
    	    	    			
    	    	    		},
    	    	    	});
    	    		},
    	    	});
    		},
    	});
    		
    },

    saveBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var store2 = Ext.getStore('MyStore2');
		var store3 = Ext.getStore('MyStore3');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		
		var flag = '';
		var msg = '';

		if(Ext.getCmp('myTab').activeTab.title == '출고요청서 작성') {
			Ext.Msg.confirm('확인', '출고요청서를 생성하시겠습니까?', function(button) {
				if (button == 'yes') {
					var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

					for(var i=0; i<gridRecord.length; i++) {
						if(gridRecord[i].get('V_TYPE') == 'V') {
							gridRecord[i].set('V_TYPE', 'I');
						}
					}
					
					store.sync({
						params : {
							V_TYPE : 'SYNC_NEW',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_DN_REQ_DT: Ext.getCmp('V_DN_REQ_DT').getValue()
						},
						callback : function(records, operation, success) {
							var res = records.operations[0]._response.responseText;

							if (res.match('Exception')) {
								Ext.Msg.alert('확인', res);
							} else {
								store.reload();
							}
						},
						success : function(response) {
						}
					});
					
				}
			});
		} else if(Ext.getCmp('myTab').activeTab.title == '출고 삭제/확정/확정취소') {

			var flag = '';
			var msg = '';
			
			store3.each(function(rec, idx) {
				if(rec.get('V_TYPE') == 'V'){
					if(rec.get('DN_REAL_QTY') == undefined){
						flag = 'F';
						msg = '계근중량을 입력하세요.';
						return false;
					} else {
						flag = 'T';
					}
				} else {
					flag = 'T';
				}
			});
			
			if(flag == 'T') {
				Ext.Msg.confirm('확인', '출고확정 하시겠습니까?', function(button) {
					if (button == 'yes') {
						var gridRecord = Ext.getCmp('myGrid3').getSelectionModel().getSelection();
						
						for(var i=0; i<gridRecord.length; i++) {
							if(gridRecord[i].get('V_TYPE') == 'V') {
								gridRecord[i].set('V_TYPE', 'RE_CALC');
							}
						}
						store3.sync({
							params : {
								V_TYPE : 'SYNC',
								V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								V_DN_REQ_DT: Ext.getCmp('V_DN_REQ_DT').getValue()
							},
							callback : function(records, operation, success) {
								store3.reload();
							},
							success : function(response) {
							}
						});
					}
				});
			} else {
				Ext.Msg.alert('확인', msg);
			}
		
			//두번째 탭
		} else {
			
			/*추가매출입력*/
			if(store2.getCount() > 0) {
				store2.each(function(rec, idx) {
					if((rec.get('ADD_REASON') == undefined || rec.get('ADD_REASON') == '') && ((rec.get('ADD_DN_PRC') != 0) || (rec.get('ADD_DN_AMT') != 0))){
						flag = 'F';
						msg = '추가매출 입력 시 사유를 입력하세요.';
						return false;
					} else {
						flag = 'T';
						rec.set('V_TYPE', 'T2D_U');
					}
				});
				
				if(flag == 'T') {
					store2.sync({
						params : {
							V_TYPE : 'SYNC',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_DN_REQ_DT: Ext.getCmp('V_DN_REQ_DT').getValue()
						},
						callback : function(records, operation, success) {
							var res = records.operations[0]._response.responseText;
							
							if (res.match('Exception')) {
								Ext.Msg.alert('확인', res);
							} else {
								store2.reload();
							}
						},
						success : function(response) {
						}
					});
				} else {
					Ext.Msg.alert('확인', msg);
				}
				
			} 
			
			var gridRecord1 = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
			console.log(gridRecord1);
			for(var i = 0; i < gridRecord1.length; i++ ) {
				if(gridRecord1[i].get('V_TYPE') == 'V') {
					gridRecord1[i].set('V_TYPE', 'REMARK');
					console.log("here");
				}
			}
			
			/*입금비고등록*/
			store1.sync({
				params : {
					V_TYPE : 'SYNC',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				},
				callback : function(records, operation, success) {
					var res = records.operations[0]._response.responseText;
					
					if (res.match('Exception')) {
						Ext.Msg.alert('확인', res);
					} else {
						store1.reload();
					}
				},
				success : function(response) {
				}
			});
		}
	},
	

    delBtnClick: function(button, e, eOpts) {
        alert('delete');
    },

    clsBtnClick: function(button, e, eOpts) {
		var tab = parent.Ext.getCmp('myTab');
		var activeTab = tab.getActiveTab();
		var tabIndex = tab.items.indexOf(activeTab);
		tab.remove(tabIndex, true);
	},

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    },

});
