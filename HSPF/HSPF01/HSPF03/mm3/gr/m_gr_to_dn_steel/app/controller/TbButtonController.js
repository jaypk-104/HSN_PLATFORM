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

Ext.define('M_GR_TO_DN_STEEL.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore', 'MyStore1'],
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
        "myform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        },
        "textfield[name=search_field2]": {
        	specialkey: 'tfEnter2'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    		
		//[하단]조회
		if(Ext.getCmp('V_BL_DOC_NO2').getValue() != '') {
			store1.removeAll();
			
			var store1 = Ext.getStore('MyStore1');
			var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
			var mvmtArr = new Array();
			
			for(var i=0; i<gridRecord.length; i++) {
				if(!mvmtArr.includes(gridRecord[i].get('MVMT_NO'))) {
					mvmtArr.push(gridRecord[i].get('MVMT_NO'));
				}
			}

			var MVMT_NO = '\'';
			
			for(var i=0; i<mvmtArr.length; i++) {
				MVMT_NO += mvmtArr[i] +'\',\'';
			}
			
			MVMT_NO = '(' + MVMT_NO.substr(0, MVMT_NO.length -2) + ')'; 

			store1.load({
	    		params: {
	    			V_TYPE: 'SD',
	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
	    			V_MVMT_NO: MVMT_NO,
	    			V_DN_DT_FR: Ext.getCmp('V_DN_DT_FR').getValue(),
	    			V_DN_DT_TO: Ext.getCmp('V_DN_DT_TO').getValue(),
        			V_S_BP_NM: Ext.getCmp('V_S_BP_NM2').getValue(),
        			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO2').getValue(),
	    		},
	    		callback: function(records,operations,success){
	    			
	    		}
			});
		} else {
			//[상단]조회
			store.removeAll();
	    	store.load({
	    		params: {
	    			V_TYPE: 'SH',
	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
	    			V_MVMT_DT_FR: Ext.getCmp('V_MVMT_DT_FR').getValue(),
	    			V_MVMT_DT_TO: Ext.getCmp('V_MVMT_DT_TO').getValue(),
	    			V_LC_DOC_NO: Ext.getCmp('V_LC_DOC_NO').getValue(),
	    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
	    			V_DN_DT: Ext.getCmp('V_DN_DT').getValue(),
	    			V_DN_DT: Ext.getCmp('V_DN_DT').getValue(),
        			V_S_BP_NM: Ext.getCmp('V_S_BP_NM').getValue(),
        			V_SO_BP_NM: Ext.getCmp('V_SO_BP_NM').getValue(),
        			V_SALE_TYPE2: Ext.getCmp('V_SALE_TYPE2').getValue(),
	    		},
	    		callback: function(records,operations,success){
	    		},
	    	});
		}
		
    	
    		
    },

    saveBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';

		for(var i=0; i<gridRecord.length; i++) {
			if(gridRecord[i].data['SALE_TYPE'] == null || gridRecord[i].data['SALE_TYPE'] == '' ) {
				flag = 'F';
				msg = '출고유형을 선택하세요.';
				break;
			} else if(gridRecord[i].data['S_BP_CD'] == null || gridRecord[i].data['S_BP_CD'] == '' ) {
				flag = 'F';
				msg = '매출처를 선택하세요.';
				break;
			} else if(gridRecord[i].data['DN_DT'] == null || gridRecord[i].data['DN_DT'] == '' ) {
				flag = 'F';
				msg = '출고일자를 선택하세요.';
				break;
			} else {
				flag = 'T';
			}
		}
		
		if (flag == 'T') {
			
			Ext.Msg.confirm('확인', '등록하시겠습니까?<br>', function(button) {
				
			if (button == 'yes') {
				
				for(var i=0; i<gridRecord.length; i++) {
					if(gridRecord[i].data['V_TYPE'] == 'V') {
						gridRecord[i].set('V_TYPE', 'I');
					}
				}
				
				store.sync({ 
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					},
					callback : function(records, operation, success) {
						var res = records.operations[0]._response.responseText;
						
						if(res.match('Exception')) {
							Ext.Msg.alert('확인', res);
						} else {
							store.reload();
							store1.reload();
						}
					}, 
					success: function(response) {
					}
				});
			}
		});
		} else {
			Ext.Msg.alert('확인', msg);
		}
	},
	
    selBtnClick2: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
//    	store.removeAll();
    	store1.removeAll();
    	
    	var store1 = Ext.getStore('MyStore1');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var mvmtArr = new Array();
		
		for(var i=0; i<gridRecord.length; i++) {
			if(!mvmtArr.includes(gridRecord[i].get('MVMT_NO'))) {
				mvmtArr.push(gridRecord[i].get('MVMT_NO'));
			}
		}

		var MVMT_NO = '\'';
		
		for(var i=0; i<mvmtArr.length; i++) {
			MVMT_NO += mvmtArr[i] +'\',\'';
		}
		
		MVMT_NO = '(' + MVMT_NO.substr(0, MVMT_NO.length -2) + ')'; 

		store1.load({
    		params: {
    			V_TYPE: 'SD',
    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			V_MVMT_NO: MVMT_NO,
    			V_DN_DT_FR: Ext.getCmp('V_DN_DT_FR').getValue(),
    			V_DN_DT_TO: Ext.getCmp('V_DN_DT_TO').getValue(),
    			V_S_BP_NM: Ext.getCmp('V_S_BP_NM2').getValue(),
    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO2').getValue(),
    		},
    		callback: function(records,operations,success){
    			
    		}
		});
    },

    delBtnClick: function(button, e, eOpts) {
        alert('delete');
    },

    clsBtnClick: function(button, e, eOpts) {
        alert('close');
    },

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    },
    tfEnter2: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.selBtnClick2();
    	}
    }

});
