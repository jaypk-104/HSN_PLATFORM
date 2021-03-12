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

Ext.define('M_PO_UPLOAD.controller.TbButtonController', {
    extend: 'Ext.app.Controller',
    stores: ['MyStore'],
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
        "#chkBtn": {
            click: 'chkBtnClick'
        },
        "#poMakeBtn": {
        	click: 'poMakeBtnClick'
        },
        "#poCfmBtn": {
        	click: 'poCfmBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
    	
    	var popup = Ext.create("M_PO_UPLOAD.view.WinPoPop");
        
    	var width = Ext.getBody().getViewSize().width - 1000;
    	var height = Ext.getBody().getViewSize().height - 500;
    	popup.setSize(width, height);
    	popup.center();
    	
    	popup.show();
        
        var store = Ext.getStore('WinPoPopStore');
		store.removeAll();
    	
    },
    saveBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var flag = '';
    	var po_desc = '';
    	
    	store.each(function(record, idx) {
    		if(record.get('PO_CFM_YN') == 'Y') {
    			flag = 'F';
    			return false;
    		} else {
    			if (record.phantom == true) {
    				record.set('V_TYPE', 'TI');
    			} else if (record.phantom == false) {
    				record.set('V_TYPE', 'TU');
    			}
    			po_desc = record.get('PO_DESC');
    			flag = 'T';
    		}
    	});
    	
    	
    	if(flag == 'T') {
    		store.sync({
    			params : {
    				V_TYPE : 'SYNC',
    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    				V_PO_DT : Ext.getCmp('V_PO_DT').getValue(),
    			},
    			callback : function(){
    				store.load({
						params : {
							V_TYPE : 'S',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_PO_DT : Ext.getCmp('V_PO_DT').getValue(),
							V_PO_DESC : po_desc
						},
						callback : function(records, operation, success) {
						}
					});
					
					Ext.toast({
						title : ' ',
						timeout : 1000,
						html : '발주업로드완료',
						style : 'text-align: center',
						align : 't',
						width : 130,
					});
    			}
    		});
    	} else {
    		Ext.Msg.alert('확인', '이미 확정된 발주입니다.');
    	}
    	
    },
    
    delBtnClick: function(button, e, eOpts) {
        alert('delete');
    },
    
    chkBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	
    	store.each(function(record, idx) {
    		record.set('V_TYPE', 'CK');
    	});
    	
    	store.sync({
			params : {
				V_TYPE : 'SYNC',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_PO_DT : Ext.getCmp('V_PO_DT').getValue(),
			},
			callback : function(records, operation, success) {
				store.reload();
			}
		});
    },
    poMakeBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var flag = '';
    	
    	store.each(function(record, idx) {
    		if(record.get('CHECK_YN') == 'N') {
    			record.set('V_TYPE', 'PO');
    			flag = 'T';
    		} else {
    			flag = 'F';
    			return false;
    		}
    	});
    	
    	if(flag == 'T') {
    		store.sync({
    			params : {
    				V_TYPE : 'SYNC',
    				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    				V_PO_DT : Ext.getCmp('V_PO_DT').getValue(),
    			},
    			callback : function(records, operation, success) {
    				store.reload();
    			}
    		});
    	} else {
    		Ext.Msg.alert('확인', '발주내역을 검수하세요. (오류유무 \'N\'이면 발주가능)');
    	}
    },
    
    poCfmBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	var flag = '';
    	var msg = '';
    	var m_bp_cd = '';
    	var po_no = '';
    	
		store.each(function(record, idx) {
    		if(record.get('CHECK_YN') == 'N') {
    			if(record.get('PO_NO') != undefined) {
    				flag = 'T';
    				record.set('V_TYPE', 'CFM');
    				m_bp_cd += record.get('M_BP_CD') + ',';
    				po_no += record.get('PO_NO') + ',';
    			} else {
    				flag = 'F';
    				msg = '발주를 생성하세요.';
    				return false;
    			}
    		} else {
    			flag = 'F';
    			msg = '발주내역을 검수하세요. (오류유무 \'N\'이면 발주가능)';
    			return false;
    		}
    	});
		
		if(flag == 'T') {
			store.sync({
				params : {
					V_TYPE : 'SYNC',
					V_TYPE2 : 'CFM',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				},
				callback : function(records, operation, success) {
					//메일보내기.

					Ext.Ajax.request({
						url : '/HSPF01/common/MailingService_PO_UPLOAD.jsp',
						method : 'post',
						params : {
							V_TYPE: 'EMAIL_YN',
							V_M_BP_CD : m_bp_cd,
							V_PO_NO : po_no,
						},
						success: function(response) {
							var jsonResult = Ext.JSON.decode(response.responseText);
//							var length = jsonResult.resultList.length;
								// 이메일 수신여부가 Y이면
							var email = jsonResult.EMAIL;
							Ext.Ajax.request({
								url : '/HSPF01/common/MailingService_PO_UPLOAD.jsp',
								method : 'post',
								params : {
									V_TYPE: 'EMAIL_SEND',
									V_EMAIL: email,
									V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
									V_PO_NO : po_no,
								},
								success: function(response) {
								},
								scope : this
							});
						},
						scope : this
					});
					
					store.reload();
					
					Ext.toast({
						title : ' ',
						timeout : 1000,
						html : '발주확정완료',
						style : 'text-align: center',
						align : 't',
						width : 130,
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
    },
    
    clsBtnClick: function(button, e, eOpts) {
        alert('close');
    },

    tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.selBtnClick();
    	}
    }

});
