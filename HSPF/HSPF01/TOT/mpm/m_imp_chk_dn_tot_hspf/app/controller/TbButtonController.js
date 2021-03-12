/*
 * File: app/controller/TbButtonController.js
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

Ext.define('M_IMP_CHK_DN_TOT_HSPF.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: ['MyStore'],
    control: {
        "#selBtn": {
            click: 'selBtnClick'
        },
        "#saveBtn": {
            click: 'saveBtnClick'
        },
        "#clrBtn": {
            click: 'clrBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "#myGrid": {
        	click: 'clrBtnClick'
        },
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	store.removeAll();
    	
    	store.load({
    		params: {
    			V_TYPE: 'S',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_YYYYMMDD: Ext.getCmp('V_YYYYMMDD').getValue(),
    			V_BP_CD: Ext.getCmp('V_BP_CD').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});

    },

    saveBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
//    	var itemStore = Ext.getStore('ItemStore');
    	var itemStore = Ext.getStore('WinItemDetailPopStore');
    	var msg = '품목코드가 존재하지 않습니다.<br>';
    	var flag = 'T';
    	
    	itemStore.load();
    	store.each(function(rec,idx) {
    		let gridItemCd = rec.data.ITEM_CD;
    		let storeItemCd = itemStore.findRecord('W_ITEM_CD', gridItemCd);
    		if(storeItemCd == null){
    			flag = 'F';
    			msg += '<br>' + (idx+1) + '행: ' + gridItemCd;
    		}
    		
    		if(rec.isDirty()) rec.set('V_TYPE', 'I');
		});
    	
    	if(flag == 'F'){
    		Ext.Msg.alert('확인', msg);
			return;
    	} else {
//    		msg = '품목코드가 중복 입력되었습니다.<br>';
//        	flag = 'T';
//        	store.each(function(rec,idx) {
//            	var recordIndex = store.findBy(
//        			function(record, id){
//    	    			if(record.get('ITEM_CD') === rec.get('ITEM_CD') && rec.id != id){
//    	    				return true;  // a record with this data exists
//    	    			}
//    	    			return false;  // there is no record in the store with this data
//        			}
//        		);
//            	
//            	if(recordIndex != -1){
//            		flag = 'F';
//        			msg += '<br>' + (idx+1) + '행: ' + rec.get('ITEM_CD');
//            	}
//        	});
//        	
//    		if(flag == 'F'){
//    			Ext.Msg.alert('확인', msg);
//    			return;
//    		}
    		
    		var BP_CD = Ext.getCmp('V_BP_CD').getValue();
    		if(!!!BP_CD){
    			Ext.Msg.alert('확인', '계열사 구분을 선택해주세요.');
    			return;
    		}
    		
    		var BP_NM = Ext.getCmp('V_BP_CD').getDisplayValue();
    		Ext.Msg.confirm('확인', '계열사: ' + BP_NM + '<br>출고 업로드하시겠습니까?', function(button) {
    			if (button == 'yes') {
    				store.sync({
    	    			params: {
    	    				V_TYPE : 'SYNC',
    	    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    	    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    	    				V_YYYYMMDD: Ext.getCmp('V_YYYYMMDD').getValue(),
    	    				V_BP_CD: Ext.getCmp('V_BP_CD').getValue(),
    	    			},
    	    			callback: function(records, operation, success) {
    	    				var tbController = M_IMP_CHK_DN_TOT_HSPF.app.getController("TbButtonController");
    	    		    	tbController.selBtnClick();
    	    			},
    	    			success: function(response) {
    	    				Ext.toast({
    							title : ' ',
    							timeout : 1000,
    							html : '저장완료',
    							style : 'text-align: center',
    							align : 't',
    							width : 130,
    						});
    					}
    	    		});
    			}
    		});
    		
    	}
    },
    
    syncItem: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
//    	var itemStore = Ext.getStore('ItemStore');
    	var itemStore = Ext.getStore('WinItemDetailPopStore');
        
    	itemStore.load(function() {
    		store.each(function(rec,idx) {
	    		let gridItemCd = rec.data.ITEM_CD;
	    		let storeItem = itemStore.findRecord('W_ITEM_CD', gridItemCd);
	    		if(storeItem == null){
	    			let storeItem2 = itemStore.findRecord('W_ITEM_CD', 'B'+gridItemCd);
	    			if(storeItem2 && gridItemCd != ''){
	    				rec.set('ITEM_CD', 'B'+gridItemCd);
	    				rec.set('ITEM_NM', storeItem2.get('W_ITEM_NM'));	
	    			} else {
	    				rec.set('ITEM_NM', '품목정보 없음');
	    			}
	    		} else {
	    			rec.set('ITEM_NM', storeItem.get('W_ITEM_NM'));
	    		}
			});
    	});
    	
    },

    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	store.removeAll();
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
    
    onLaunch: function() {
    	var itemStore = Ext.getStore('WinItemDetailPopStore');
    	itemStore.load();
    }
    
});
