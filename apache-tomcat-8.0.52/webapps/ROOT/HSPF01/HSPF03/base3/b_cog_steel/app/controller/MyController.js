/*
 * File: app/controller/MyController.js
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

Ext.define('B_COG_STEEL.controller.MyController', {
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
        "#delBtn": {
        	click: 'delBtnClick'
        },
        "myform textfield[name=search_field1]": {
            specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		store.load({
			params: {
				V_TYPE: 'S',
//				V_APPROV_MGM_NO : APPROV_MGM_NO,
//				V_APPROV_MGM_SEQ : APPROV_MGM_SEQ,
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
			},
			callback: function(records){
				
			}
		});
    	
    },

    saveBtnClick: function(button, e, eOpts) {
    	if(Ext.getCmp('myTab').activeTab.title == '품의정보등록') {
    		var store = Ext.getStore('MyStore');
    		var store1 = Ext.getStore('MyStore1');
    		var flag = '';
    		var msg = '';
    		
//    		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    		
    		if(Ext.getCmp('V_RISK_REF_NO').getValue() == '' || Ext.getCmp('V_RISK_REF_NO').getValue() == null) {
    			flag = 'F';
    			msg = '리스크관리번호를 입력하세요.';
			}
    		else if(Ext.getCmp('V_S_BP_CD').getValue() == '' || Ext.getCmp('V_S_BP_CD').getValue() == null) {
    			flag = 'F';
    			msg = '판매처를 입력하세요.';
    		} else if(Ext.getCmp('V_APPROV_NO').getValue() == '' || Ext.getCmp('V_APPROV_NO').getValue() == null) {
    			flag = 'F';
    			msg = '품의번호를 입력하세요.';
    		} else if(Ext.getCmp('V_APPROV_SEQ').getValue() == '' || Ext.getCmp('V_APPROV_SEQ').getValue() == null) {
    			flag = 'F';
    			msg = '품의차수를 입력하세요.';
    		} else if(Ext.getCmp('V_APPROV_NM').getValue() == '' || Ext.getCmp('V_APPROV_NM').getValue() == null) {
    			flag = 'F';
    			msg = '품의명을 입력하세요.';
    		} else if(Ext.getCmp('V_APPROV_SEQ').getValue() == '' || Ext.getCmp('V_APPROV_SEQ').getValue() == null) {
    			flag = 'F';
    			msg = '품의차수를 입력하세요.';
    		} else if(Ext.getCmp('V_APPROV_DT').getValue() == '' || Ext.getCmp('V_APPROV_DT').getValue() == null) {
    			flag = 'F';
    			msg = '품의일자를 입력하세요.';
    		} else if(Ext.getCmp('V_COMP_TYPE').getValue() == '' || Ext.getCmp('V_COMP_TYPE').getValue() == null) {
    			flag = 'F';
    			msg = '사업부구분을 선택하세요.';
    		} else if(Ext.getCmp('V_REGION').getValue() == '' || Ext.getCmp('V_REGION').getValue() == null) {
    			flag = 'F';
    			msg = '지역을 선택하세요.';
    		} else if(Ext.getCmp('V_SALE_TYPE').getValue() == '' || Ext.getCmp('V_SALE_TYPE').getValue() == null) {
    			flag = 'F';
    			msg = '판매유형을 선택하세요.';
    		} else if(Ext.getCmp('V_IV_TYPE').getValue() == '' || Ext.getCmp('V_IV_TYPE').getValue() == null) {
    			flag = 'F';
    			msg = '구매유형을 선택하세요.';
//    		} else if(Ext.getCmp('V_IV_TYPE').getValue() != 'L' && (Ext.getCmp('V_CONT_QTY').getValue() == '' || Ext.getCmp('V_CONT_QTY').getValue() == 0 || Ext.getCmp('V_CONT_QTY').getValue() == null)) {
//    			flag = 'F';
//    			msg = '컨테이너 수량을 입력하세요.';
    		} else if(Ext.getCmp('V_PROFIT_RT').getValue() == '' || Ext.getCmp('V_PROFIT_RT').getValue() == null) {
    			flag = 'F';
    			msg = '이익률을 입력하세요.';
    		} else {
    			flag = 'T';
    		}
    		
    		var strCont = new Array();
    		var numberCont = 0;
    		/*
    		if(store.getCount() > 0) {
    			store.each(function(record, idx) {
    				if(record.get('CONT_QTY') == null || record.get('CONT_QTY') == undefined) {
    					record.set('CONT_QTY', '');
    				}
    				
    				if( Ext.getCmp('V_IV_TYPE').getValue() != 'L' && (  ((record.get('CONT_REMARK') == '') || (record.get('CONT_REMARK') == undefined)) && (record.get('CONT_QTY') == ''))) {
    					flag = 'F';
    					msg = '컨테이너 분류와 수량 중 한 가지를 필수 입력하세요.' + '(' + (idx+1) + ')';
    					return false;
    				} else if(Ext.getCmp('V_IV_TYPE').getValue() != 'L' && record.get('CONT_REMARK') != '') {
    					
    					if(record.get('CONT_QTY') != '') {
    						flag = 'F';
    						msg = '컨테이너 분류와 수량 중 한 가지만 입력하세요.' + '(' + (idx+1) + ')';
    						return false;
    					} else {
    						flag = 'T';
    						strCont.push(record.get('CONT_REMARK'));
    					}
    				} else {
    					flag = 'T';
    					numberCont += Number(record.get('CONT_QTY'));
    				}
    			});
    			
    			if(Ext.getCmp('V_IV_TYPE').getValue() != 'L') {
    				//String 컨테이너 수량 계산
        			var uniq = strCont.reduce(function(a,b){
        				if (a.indexOf(b) < 0 ) a.push(b);
        				return a;
        			  },[]);
        			
        			if((uniq.length + numberCont) != Ext.getCmp('V_CONT_QTY').getValue()) {
        				msg = '상단의 컨테이너 수량('+Ext.getCmp('V_CONT_QTY').getValue()+')과 하단 컨테이너 구성수량('+(uniq.length + numberCont)+')이 일치하지 않습니다.';
        				flag = 'F';
        			} else {
        				flag = 'T';
        			}
    			}
    			
    		}
    		*/
    		if(flag == 'T') {
        		Ext.Ajax.request({
            		url:'sql/Y_APPROV_STEEL.jsp',
            		method: 'post',
            		params: {
            			V_TAB_TYPE: 'T1',  
            			V_TYPE: 'HI',  
            			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
            			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
            			V_RISK_REF_NO : Ext.getCmp('V_RISK_REF_NO').getValue(),
            			V_APPROV_MGM_NO : Ext.getCmp('V_APPROV_MGM_NO').getValue(),
            			V_S_BP_CD : Ext.getCmp('V_S_BP_CD').getValue(),
            			V_APPROV_NO : Ext.getCmp('V_APPROV_NO').getValue(),
            			V_APPROV_SEQ : Ext.getCmp('V_APPROV_SEQ').getValue(),
            			V_APPROV_NM : Ext.getCmp('V_APPROV_NM').getValue(),
            			V_APPROV_DT : Ext.getCmp('V_APPROV_DT').getValue(),
            			V_COMP_TYPE : Ext.getCmp('V_COMP_TYPE').getValue(),
            			V_REGION : Ext.getCmp('V_REGION').getValue(),
            			V_SALE_TYPE : Ext.getCmp('V_SALE_TYPE').getValue(),
            			V_IV_TYPE : Ext.getCmp('V_IV_TYPE').getValue(),
            			V_CONT_QTY : Ext.getCmp('V_CONT_QTY').getValue(),
            			V_PROFIT_RT : Ext.getCmp('V_PROFIT_RT').getValue(),

            		},
            		callback : function(records,operations,success){
        			},
            	    success : function(response) {
            	    	var res = response.responseText;
            	    	
            	    	if(res.match('Exception')) {
        					Ext.Msg.alert('확인', res);
        				} else if (res.match('RP')){
        					Ext.getCmp('V_APPROV_MGM_NO').setValue(res);
        					Ext.getCmp('V_APPROV_MGM_NO2').setValue(res);
        					Ext.getCmp('V_APPROV_MGM_NO3').setValue(res);

        					Ext.getCmp('V_S_BP_NM3').setValue(Ext.getCmp('V_S_BP_NM').getValue());	
        					
        					var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
        		    		tbController.selBtnClick();
        					
        		    		Ext.toast({
    							title : ' ',
    							timeout : 1000,
    							html : '저장완료',
    							style : 'text-align: center',
    							align : 't',
    							width : 130,
    						});
        				} else {
        					Ext.toast({
    							title : ' ',
    							timeout : 1000,
    							html : '저장완료',
    							style : 'text-align: center',
    							align : 't',
    							width : 130,
    						});
        				}
            	    },
            		scope: this
            	});
        	} else {
        		Ext.Msg.alert('확인', msg);
        	}
    		
    	} 
    	
    	/* 품의정보조회 */
    	else if(Ext.getCmp('myTab').activeTab.title == '품의정보조회') {
    		
    	}
    	
    	/* 거래예정일 */
    	else if(Ext.getCmp('myTab').activeTab.title == '거래예정일/형태/대금결제방식') {
    		var V_APPROV_DESC_SEQ = Ext.getCmp('T3').activeTab.title;
    		var V_IV_TEXT = Ext.getCmp('IV' + V_APPROV_DESC_SEQ).getValue();
    		var V_SL_TEXT = Ext.getCmp('SL' + V_APPROV_DESC_SEQ).getValue();
    		
    		Ext.Ajax.request({
        		url:'sql/Y_APPROV_STEEL3.jsp',
        		method: 'post',
        		params: {
        			V_TAB_TYPE: 'T3',  
        			V_TYPE: 'I',  
        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
        			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
        			V_APPROV_MGM_NO : Ext.getCmp('V_APPROV_MGM_NO3').getValue(),
        			V_APPROV_DESC_SEQ : V_APPROV_DESC_SEQ,
        			V_IV_TEXT : V_IV_TEXT,
        			V_SL_TEXT : V_SL_TEXT,
        		},
        		callback : function(records,operations,success){
    			},
        	    success : function(response) {
        	    	var res = response.responseText;
        	    	
        	    	if(res.match('Exception')) {
    					Ext.Msg.alert('확인', res);
    				} else {
    					
    					var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
    		    		tbController.selBtnClick();
    					
    		    		Ext.toast({
							title : ' ',
							timeout : 1000,
							html : '저장완료',
							style : 'text-align: center',
							align : 't',
							width : 130,
						});
    				}
        	    },
        		scope: this
        	});
    	}
    },

    clrBtnClick: function(button, e, eOpts) {
	    	var store = this.getMyStoreStore();
	    	var store1 = this.getMyStore1Store();
	    	
	    	store.removeAll();
	    	store1.removeAll();
	
	    	Ext.getCmp('V_RISK_REF_NO').setValue('');
	    	Ext.getCmp('S_APPROV_NO').setValue('');
			Ext.getCmp('S_APPROV_NM').setValue('');
			Ext.getCmp('S_APPROV_SEQ').setValue('');
			Ext.getCmp('V_APPROV_MGM_NO').setValue('');
			Ext.getCmp('V_S_BP_CD').setValue('');
			Ext.getCmp('V_S_BP_NM').setValue('');
			Ext.getCmp('V_APPROV_NO').setValue('');
			Ext.getCmp('V_APPROV_SEQ').setValue('');
			Ext.getCmp('V_APPROV_NM').setValue('');
			Ext.getCmp('V_APPROV_DT').setValue(new Date());	
			Ext.getCmp('V_COMP_TYPE').setValue('B');
			Ext.getCmp('V_REGION').setValue(8);
			Ext.getCmp('V_SALE_TYPE').setValue(null);
			Ext.getCmp('V_IV_TYPE').setValue(null);
			
			
			
			
    		
    		Ext.getCmp('V_APPROV_MGM_NO2').setValue('');
			Ext.getCmp('V_APPROV_NO2').setValue('');
			Ext.getCmp('V_APPROV_SEQ2').setValue('');
			Ext.getCmp('V_APPROV_NM2').setValue('');
			Ext.getStore('MyStore2').removeAll();
    		
    		Ext.getCmp('V_APPROV_MGM_NO3').setValue('');
			Ext.getCmp('V_APPROV_NO3').setValue('');
			Ext.getCmp('V_APPROV_SEQ3').setValue('');
			Ext.getCmp('V_APPROV_NM3').setValue('');

//			Ext.getCmp('V_APPROV_MGM_NO3').setValue('');
			Ext.getCmp('V_APPROV_NO4').setValue('');
			Ext.getCmp('V_APPROV_SEQ4').setValue('');
			Ext.getCmp('V_APPROV_NM4').setValue('');
			

			Ext.getCmp('V_CONT_QTY').setValue('');	
			Ext.getCmp('V_PROFIT_RT').setValue('');
			
			Ext.getCmp('V_S_BP_NM3').setValue('');	
			
			var tabPanel = Ext.getCmp('T3');
			tabPanel.removeAll();
    	
    },
    
    delBtnClick: function(button, e, eOpts) {
    	
    	var V_APPROV_MGM_NO_ALL = ''
    		
		if(Ext.getCmp('myTab').activeTab.title == '품의정보등록') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO').getValue();
		} else if(Ext.getCmp('myTab').activeTab.title == '품의정보조회') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO2').getValue();
		} else if (Ext.getCmp('myTab').activeTab.title == '거래예정일/형태/대금결제방식') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO3').getValue();
		}
    	
    	Ext.Msg.confirm('확인','품의를 삭제하시겠습니까?', function(button){
    		if(button == 'yes') {
    			Ext.Ajax.request({
    	    		url:'sql/Y_APPROV_STEEL.jsp',
    	    		method: 'post',
    	    		params: {
    	    			V_TAB_TYPE: 'T1',  
    	    			V_TYPE: 'D',  
    	    			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
    	    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    	    			V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL
    	    		},
    	    		callback : function(records,operations,success){
    				},
    	    	    success : function(response) {
    	    	    	var res = response.responseText;
    	    	    	
    	    	    	if(res.match('Exception')) {
    						Ext.Msg.alert('확인', res);
    					} else {
    						var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
    			    		tbController.clrBtnClick();
    					}
    	    	    },
    	    		scope: this
    	    	});
    		}
    	});
    	
    },


    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    }

});