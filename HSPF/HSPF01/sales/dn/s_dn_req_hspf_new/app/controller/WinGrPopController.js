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

Ext.define('S_DN_REQ_HSPF_NEW.controller.WinGrPopController', {
    extend: 'Ext.app.Controller',
    stores: [
         'WinGrStore'
    ],
    control: {
        "#grSelBtn": {
            click: 'selBtnClick'
        },
        "#GrGrid": {
        	cellDblClick: 'myGrid1CellDblClick'
        },
        "#delBtn": {
            click: 'delBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        '#chk' : {
    		change: 'chkChange'
		},
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter1'
        },
    },

    selBtnClick: function(button, e, eOpts) {
    	var grStore = this.getWinGrStoreStore();
    	
    	//좌측수주정보조회
    	grStore.load({
    		params: {
    			V_TYPE: 'GR',
    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_ITEM_CD: Ext.getCmp('W_GR_ITEM_CD').getValue(),
    		},
    		callback: function(records,operations,success){
    		}
    	});
    	
    },

    myGrid1CellDblClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();
		var W_GR_DT = record.get('GR_DT');
		var W_BL_NO = record.get('BL_NO');
		
		gridRecord[0].set('GR_DT', W_GR_DT);
		gridRecord[0].set('BL_NO', W_BL_NO);
		
		if(W_BL_NO != undefined) {
			var V_REMARK = gridRecord[0].get('REMARK');
			if(V_REMARK == undefined) {
				V_REMARK = '';
			}
			gridRecord[0].set('REMARK', V_REMARK + ' ' + W_BL_NO);
		}
		
//		console.log(W_GR_DT);
//		console.log(W_BL_NO);
//		console.log(Ext.getCmp('W_DR_NO').getValue());
//		console.log(Ext.getCmp('W_DR_SEQ').getValue());
		
		var popWin=  Ext.getCmp('WinGrPop');
		popWin.destroy();
//		Ext.Ajax.request({
//			url : 'sql/s_dd_make_hspf.jsp',
//			method : 'post',
//			params : {
//				V_TYPE : 'GR_MOD', // 수정
//				V_DR_DT_FROM : W_GR_DT,
//				V_REMARK : W_BL_NO,
//				W_DR_NO: Ext.getCmp('W_DR_NO').getValue(),
//				W_DR_SEQ: Ext.getCmp('W_DR_SEQ').getValue(),
//			},
//			callback : function(records, operations, success) {
//					
//			},
//			success : function(response) {
//				var popWin=  Ext.getCmp('WinGrPop');
//				popWin.destroy();
//			},
//			scope : this
//		});
		
	},

    delBtnClick: function(button, e, eOpts) {
        alert('delete');
    },

    clsBtnClick: function(button, e, eOpts) {
        var tab=parent.Ext.getCmp('myTab');
                 var activeTab=tab.getActiveTab();
                 var tabIndex=tab.items.indexOf(activeTab);
                 tab.remove(tabIndex,true);
    },

    tfEnter1: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		var store = this.getMyStoreStore();
        	store.removeAll();
        	
    		//좌측수주정보조회
        	store.load({
        		params: {
        			V_TYPE: 'LS',
        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    				V_SO_DT_FROM: Ext.getCmp('V_SO_DT_FROM').getValue(),
    				V_SO_DT_TO: Ext.getCmp('V_SO_DT_TO').getValue(),
    				V_S_BP_CD: Ext.getCmp('V_S_BP_CD').getValue(),
    				V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
    				V_ITEM_CD: Ext.getCmp('V_ITEM_CD').getValue(),
        		},
        		callback: function(records,operations,success){
        			Ext.toast({
    					  title: ' ',
    					  timeout: 1000,
    					  html: '조회완료',
    					  style: 'text-align: center',
    					  align: 't',
    					  width: 130,
    				});
        		}
        	});
    	}
    },
    

});
