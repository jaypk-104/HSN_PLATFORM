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

Ext.define('S_SO_HSPF.controller.TbButtonController', {
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
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        }
    },

    //최상단조회버튼
    selBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
    	if(Ext.getCmp('V_SO_NO').value != '') {
    		Ext.Ajax.request({
    			url:'sql/s_so_hspf_H.jsp',
    			method: 'post',
    			params: {
    				V_TYPE: 'SH',
    				V_SO_NO: Ext.getCmp('V_SO_NO').getValue(),
    				V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    				V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    			},
    			success : function(response) {
    				var result = Ext.JSON.decode(response.responseText);
    				if(result.resultList.length > 0) {
	    				Ext.getCmp('V_SO_TYPE').setValue(result.resultList[0].SO_TYPE); //수주유형
	    				Ext.getCmp('V_SO_TYPE_N').setValue(result.resultList[0].SO_TYPE_NM); 
	    				Ext.getCmp('V_SO_DT').setValue(result.resultList[0].SO_DT); //수주일자
	    				Ext.getCmp('V_SO_DT_N').setValue(result.resultList[0].SO_DT); //수주일자
	    				Ext.getCmp('V_PAY_METH').setValue(result.resultList[0].PAY_METH); //결제방법
	    				Ext.getCmp('V_PAY_METH_N').setValue(result.resultList[0].PAY_METH_NM); //결제방법
	    				Ext.getCmp('V_DLVY_HOPE_DT').setValue(result.resultList[0].DLVY_HOPE_DT); //납기요청일
	    				Ext.getCmp('V_DLVY_HOPE_DT_N').setValue(result.resultList[0].DLVY_HOPE_DT); //납기요청일
	    				Ext.getCmp('V_CUST_ORDER_NO').setValue(result.resultList[0].CUST_ORDER_NO); //고객사요청번호
	    				Ext.getCmp('V_BP_CD').setValue(result.resultList[0].S_BP_CD); //고객사코드
	    				Ext.getCmp('V_BP_NM').setValue(result.resultList[0].S_BP_NM); //고객사이름
	    				Ext.getCmp('V_CUR').setValue(result.resultList[0].CUR); //화폐단위
	    				Ext.getCmp('V_CUR_N').setValue(result.resultList[0].CUR); //화폐단위
	    				Ext.getCmp('V_XCH_RATE').setValue(result.resultList[0].XCH_RATE); //환율
	    				Ext.getCmp('V_XCH_RATE_N').setValue(result.resultList[0].XCH_RATE); //환율
	    				Ext.getCmp('V_SO_CFM').setValue(result.resultList[0].CFM_YN); //수주확정유무
	    				
	//				수주확정상태이면, 수정할 수 없다.
	    				if(result.resultList[0].CFM_YN == 'Y') {
	    					Ext.getCmp('V_SO_NO').setEditable(false);
	    					Ext.getCmp('V_SO_TYPE').hide();
	    					Ext.getCmp('V_SO_TYPE_N').show();
	    					Ext.getCmp('V_SO_DT').hide();
	    					Ext.getCmp('V_SO_DT_N').show();
	    					Ext.getCmp('V_PAY_METH').hide();
	    					Ext.getCmp('V_PAY_METH_N').show();
	    					Ext.getCmp('V_DLVY_HOPE_DT').hide();
	    					Ext.getCmp('V_DLVY_HOPE_DT_N').show();
	    					Ext.getCmp('V_CUST_ORDER_NO').setEditable(false);
	    					Ext.getCmp('V_BP_NM').setEditable(false);
	    					Ext.getCmp('V_CUR').hide();
	    					Ext.getCmp('V_CUR_N').show();
	    					Ext.getCmp('V_XCH_RATE').hide();
	    					Ext.getCmp('V_XCH_RATE_N').show();
	    					
	    					Ext.getCmp('gridAddBtn').setDisabled(true);
    		    			Ext.getCmp('gridDelBtn').setDisabled(true);
    		    			Ext.getCmp('gridSaveBtn').setDisabled(true);
    		    			Ext.getCmp('saveBtn').setDisabled(true);
    		    			Ext.getCmp('delBtn').setDisabled(true);
	    					
	    				} 
	    				//수주미확정상태이면, 수정할 수 있다.
	    				else {
	    					Ext.getCmp('V_SO_NO').setEditable(true);
	    					Ext.getCmp('V_SO_TYPE').show();
	    					Ext.getCmp('V_SO_TYPE_N').hide();
	    					Ext.getCmp('V_SO_DT').show();
	    					Ext.getCmp('V_SO_DT_N').hide();
	    					Ext.getCmp('V_PAY_METH').show();
	    					Ext.getCmp('V_PAY_METH_N').hide();
	    					Ext.getCmp('V_DLVY_HOPE_DT').show();
	    					Ext.getCmp('V_DLVY_HOPE_DT_N').hide();
	    					Ext.getCmp('V_CUST_ORDER_NO').setEditable(true);
	    					Ext.getCmp('V_BP_NM').setEditable(true);
	    					Ext.getCmp('V_CUR').show();
	    					Ext.getCmp('V_CUR_N').hide();
	    					Ext.getCmp('V_XCH_RATE').show();
	    					Ext.getCmp('V_XCH_RATE_N').hide();
	    					
	    					Ext.getCmp('gridAddBtn').setDisabled(false);
    		    			Ext.getCmp('gridDelBtn').setDisabled(false);
    		    			Ext.getCmp('gridSaveBtn').setDisabled(false);
    		    			Ext.getCmp('saveBtn').setDisabled(false);
    		    			Ext.getCmp('delBtn').setDisabled(false);
	    				}
	    				
    				} else {
    					Ext.Msg.alert('확인', '수주번호를 확인하세요.');
    				}
    				
				//수주상세내역조회
				store.removeAll();
		    	store.load({
		    		params: {
		    			V_TYPE: 'SD',
		    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
		    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
		    			V_SO_NO: Ext.getCmp('V_SO_NO').getValue()
		    		},
		    		callback: function(records,operations,success){
		    		}
		    	});
    			},
    			scope: this
    		});
    	} else {
    		Ext.Msg.alert('확인', '수주번호를 입력하세요.');
    	}
	},
	
	saveBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = '';
		var msg = '';
		var selModel= Ext.getCmp('myGrid').getSelectionModel();
		
		if(Ext.getCmp('V_SO_CFM').getValue() == 'Y') {
			Ext.Msg.alert('확인', '확정된 발주입니다.');
		} else if (Ext.getCmp('V_SO_TYPE').getValue() == 'T') {
			Ext.Msg.alert('확인', '수주형태를 선택하세요.');
		} else if (Ext.getCmp('V_SO_DT').getValue() == null) {
			Ext.Msg.alert('확인', '수주일을 입력하세요.');
		} else if (Ext.getCmp('V_PAY_METH').getValue() == 'T') {
			Ext.Msg.alert('확인', '결제방법을 선택하세요.');
		} else if (Ext.getCmp('V_DLVY_HOPE_DT').getValue() == null) {
			Ext.Msg.alert('확인', '납기요청일을 입력하세요.');
		} else if (Ext.getCmp('V_BP_CD').getValue() == '' || 
				   Ext.getCmp('V_BP_NM').getValue() == '') {
			Ext.Msg.alert('확인', '고객사를 입력하세요.');
		} else if (Ext.getCmp('V_CUR').getValue() == null) {
			Ext.Msg.alert('확인', '화폐단위를 선택하세요.');
		} else if (Ext.getCmp('V_XCH_RATE').getValue() == null) {
			Ext.Msg.alert('확인', '환율을 입력하세요.');
		} else {
			store.each(function(record,idx){
				if(record.get('ITEM_CD')==undefined) {
					flag = 'F';
					msg = '품목코드를 입력하세요.';
				} else if(record.get('QTY')==undefined || record.get('QTY') == '0' ) {
					flag = 'F';
					msg = '수량을 확인하세요.';
				} else if(record.get('VAT_TYPE')==undefined) {
					flag = 'F';
					msg = '부가세유형을 선택하세요.';
				} else if(record.get('DLVY_HOPE_DT')==undefined) {
					flag = 'F';
					msg = '납기요청일을 입력하세요.';
				} else {
					flag = 'T';
					if (record.phantom == true) { // 저장
						record.set('V_TYPE', 'IC');
					} else if (record.phantom == false) { // 수정
						record.set('V_TYPE', 'IU');
					}
				}
			});
			
		} 
		if (flag == 'T') {
			store.sync({
				params : {
					V_TYPE : 'U',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_SO_NO: Ext.getCmp('V_SO_NO').getValue(),
					V_SO_DT: Ext.getCmp('V_SO_DT').getValue(),
					V_SO_TYPE: Ext.getCmp('V_SO_TYPE').getValue(),
					V_PAY_METH: Ext.getCmp('V_PAY_METH').getValue(),
					V_DLVY_HOPE_DT: Ext.getCmp('V_DLVY_HOPE_DT').getValue(),
					V_CUST_ORDER_NO: Ext.getCmp('V_CUST_ORDER_NO').getValue(),
					V_BP_CD: Ext.getCmp('V_BP_CD').getValue(),
					V_CUR: Ext.getCmp('V_CUR').getValue(),
					V_XCH_RATE: Ext.getCmp('V_XCH_RATE').getValue(),
				},
				callback : function(records,operations,success){
					var response = records.operations[0]._response.responseText;
					Ext.getCmp('V_SO_NO').setValue(response);
					var tbController = S_SO_HSPF.app.getController("TbButtonController");
					tbController.selBtnClick();
				},
				success : function(response) {
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}
	},
	
    delBtnClick: function(button, e, eOpts) {
    	var store = this.getMyStoreStore();
    	
    	if(Ext.getCmp('V_SO_NO').getValue() == '') {
    		Ext.getCmp('V_SO_TYPE').setValue('T');
    		
    		var nows = new Date();
    		Ext.getCmp('V_SO_DT').setValue(nows);
    		
    		Ext.getCmp('V_PAY_METH').setValue('T');
    		Ext.getCmp('V_DLVY_HOPE_DT').setValue(null);
    		Ext.getCmp('V_CUST_ORDER_NO').setValue('');
    		Ext.getCmp('V_BP_CD').setValue('');
    		Ext.getCmp('V_BP_NM').setValue('');
    		Ext.getCmp('V_CUR').setValue('KRW');
    		Ext.getCmp('V_XCH_RATE').setValue(1);
    		Ext.getCmp('V_SO_CFM').setValue('N');
    		store.removeAll();
    	} else {
    		if(Ext.getCmp('V_SO_CFM').getValue() == 'N') {
    			Ext.MessageBox.confirm('확인', '수주정보를 삭제하시겠습니까?', function(btn){
        			if(btn == 'yes') {
        				Ext.Ajax.request({
            				url: 'sql/s_so_hspf_H.jsp',
            				method: 'post',
            				params: {
            					V_TYPE: 'SD',
            					V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
            					V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
            					V_SO_NO: Ext.getCmp('V_SO_NO').getValue(),
            				},
            				callback : function(records,operations,success){

            					Ext.getCmp('V_SO_NO').setValue('');
            					
            					Ext.getCmp('V_SO_TYPE').setValue('T');
            		    		
            		    		var nows = new Date();
            		    		Ext.getCmp('V_SO_DT').setValue(nows);
            		    		
            		    		Ext.getCmp('V_PAY_METH').setValue('T');
            		    		Ext.getCmp('V_DLVY_HOPE_DT').setValue(null);
            		    		Ext.getCmp('V_CUST_ORDER_NO').setValue('');
            		    		Ext.getCmp('V_BP_CD').setValue('');
            		    		Ext.getCmp('V_BP_NM').setValue('');
            		    		Ext.getCmp('V_CUR').setValue('KRW');
            		    		Ext.getCmp('V_XCH_RATE').setValue(1);
            		    		Ext.getCmp('V_SO_CFM').setValue('N');
            					
            					Ext.toast({
            						  title: ' ',
            						  timeout: 1000,
            						  html: '수주삭제완료',
            						  style: 'text-align: center',
            						  align: 't',
            						  width: 130,
        						});
            					
            					store.removeAll();
            					Ext.getCmp('gridSaveBtn').setDisabled(true);
            					
            				},
            				success : function(response) {},
            				scope: this
            			});
        			}
        		});
    		} else {
    			Ext.Msg.alert('확인', '확정된 수주는 삭제할 수 없습니다.');
    		}
    		
    	}
    	
    },

    clsBtnClick: function(button, e, eOpts) {
        var tab=parent.Ext.getCmp('myTab');
	    var activeTab=tab.getActiveTab();
	    var tabIndex=tab.items.indexOf(activeTab);
	    tab.remove(tabIndex,true);
    },

    tfEnter: function(field, e, eOpts) {
    	if (e.getKey() == e.ENTER) {
    		this.selBtnClick();
    	}
    }

});
