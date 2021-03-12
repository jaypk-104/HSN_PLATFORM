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

Ext.define('M_CHARGE_STEEL.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore', 'MyStore1'],
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
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	var V_BAS_NO = Ext.getCmp('V_BAS_NO').getValue();
    	
    	if(V_BAS_NO != '') {
    		store.removeAll();
    		
    		//[상단]조회
        	store.load({
        		params: {
        			V_TYPE: 'SH',
        			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
        			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
        			V_PR_STEP: Ext.getCmp('V_PR_STEP').getValue(),
        			V_BAS_NO: Ext.getCmp('V_BAS_NO').getValue(),
        			V_LC_DOC_NO: Ext.getCmp('V_LC_DOC_NO').getValue(),
        			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
        			V_ID_NO: Ext.getCmp('V_ID_NO').getValue(),
        			V_BAS_DT_FR: Ext.getCmp('V_BAS_DT_FR').getValue(),
        			V_BAS_DT_TO: Ext.getCmp('V_BAS_DT_TO').getValue(),
        		},
        		callback: function(records,operations,success){
        			if(records.length > 0) {
        				Ext.getCmp('V_APPROV_NM').setValue(records['0'].data.APPROV_NM);
        				Ext.getCmp('V_MAST_CHARGE_NO').setValue(records['0'].data.MAST_CHARGE_NO);
        				Ext.getCmp('tempGlCfmBtn').setDisabled(false);
    					Ext.getCmp('tempGlCancelBtn').setDisabled(false);
        			}
        		}
        	});
    	}
    	else {
    		Ext.Msg.alert('확인', '발생근거번호를 입력하세요.');
    	}
    	
    },

    saveBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		
		store.each(function(record, idx) {
			if(record.get('CHARGE_CD') == '' || record.get('CHARGE_CD') == null) {
				flag = 'F';
				msg = '경비항목을 선택하세요.';
				return false;
			}
			else if(record.get('CHARGE_DT') == '' || record.get('CHARGE_DT') == null) {
				flag = 'F';
				msg = '발생일을 입력하세요.';
				return false;
			} 
			else if(record.get('TAX_BIZ_CD') == '' || record.get('TAX_BIZ_CD') == null) {
				flag = 'F';
				msg = '세금계산서신고사업장을 선택하세요.';
				return false;
			} 
			else if(record.get('DISTR_TYPE') == '' || record.get('DISTR_TYPE') == null) {
				flag = 'F';
				msg = '배부방식을 선택하세요.';
				return false;
			} 
			else {
				 flag = 'T';
			} 
		})
		
		if (flag == 'T') {
			var selModel = Ext.getCmp('myGrid').getSelectionModel();
			selModel.selectAll();
			
			Ext.Msg.confirm('확인', '등록하시겠습니까?<br><span style=\"color:red\">등록 후 반드시 [경비배부] 를 수행하세요.</span> ', function(button) {
			if (button == 'yes') {
				var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
				for(var i=0; i<gridRecord.length; i++) {
					gridRecord[i].set('V_TYPE', 'I');
				}
				
				store.sync({ 
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_PR_STEP: Ext.getCmp('V_PR_STEP').getValue()
					},
					callback : function(records, operation, success) {
						var res = records.operations[0]._response.responseText;
						
						if(res.match('Exception')) {
							Ext.Msg.alert('확인', res);
						} else {
							var tbController = M_CHARGE_STEEL.app.getController("TbButtonController");
				    		tbController.selBtnClick();
				    		Ext.getCmp('distrBtn').setDisabled(false);
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

    clrBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var store1 = this.getMyStore1Store();
    	
    	store.removeAll();
    	store1.removeAll();
    	
    	Ext.getCmp('V_PR_STEP').setValue('');
    	Ext.getCmp('V_BAS_NO').setValue('');
    	Ext.getCmp('V_LC_DOC_NO').setValue('');
    	Ext.getCmp('V_BL_DOC_NO').setValue('');
    	Ext.getCmp('V_ID_NO').setValue('');
    	Ext.getCmp('V_APPROV_NM').setValue('');
    	
    	var nows = new Date();
    	Ext.getCmp('V_BAS_DT_TO').setValue(nows);
    	
    	nows.setDate(1);
    	Ext.getCmp('V_BAS_DT_FR').setValue(nows);
    	
    	//경비배부버튼
    	Ext.getCmp('distrBtn').setDisabled(true);
    	
    	Ext.getCmp('V_TEMP_GL_NO').setValue('');
    	Ext.getCmp('distrBtn').setDisabled(true);
    	Ext.getCmp('gridAddBtn').setDisabled(false);
    	Ext.getCmp('gridDelBtn').setDisabled(false);
    	
    	Ext.getCmp('saveBtn').setDisabled(false);

    	Ext.getCmp('V_MAST_CHARGE_NO').setValue('');
    	Ext.getCmp('V_TEMP_GL_NO').setValue('');
    	
    
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
    }

});
