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

Ext.define('Y_APPROV_STEEL.controller.TbButtonController', {
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
        "#delBtn": {
        	click: 'delBtnClick'
        },
        "myform textfield[name=search_field1]": {
            specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var V_APPROV_MGM_NO_ALL = ''
		
		if(Ext.getCmp('myTab').activeTab.title == '품의정보등록') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO').getValue();
		} else if(Ext.getCmp('myTab').activeTab.title == '품의정보조회') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO2').getValue();
		} else if (Ext.getCmp('myTab').activeTab.title == '거래예정일/형태/대금결제방식') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO3').getValue();
		} else if (Ext.getCmp('myTab').activeTab.title == '채권보전') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO4').getValue();
		}
		
		Ext.getCmp('V_APPROV_MGM_NO').setValue(V_APPROV_MGM_NO_ALL);
		
		/*품의정보등록*/
    		Ext.Ajax.request({
				url:'sql/Y_APPROV_STEEL.jsp',
				method: 'post',
				params: {
					V_TAB_TYPE: 'T1',  
					V_TYPE: 'SH',  
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL,
				},
				callback : function(records,operations,success){
				},
	    		success : function(response) {
					var res = response.responseText;
					if(res.match('Exception')) {
						Ext.Msg.alert('확인', res);
					} else {
						res = Ext.JSON.decode(response.responseText).resultList[0];
						
						Ext.getCmp('V_RISK_REF_NO').setValue(res.RISK_REF_NO);
						Ext.getCmp('V_S_BP_CD').setValue(res.S_BP_CD);
						Ext.getCmp('V_S_BP_NM').setValue(res.S_BP_NM);
						Ext.getCmp('V_APPROV_NO').setValue(res.APPROV_NO);
						Ext.getCmp('V_APPROV_SEQ').setValue(res.APPROV_SEQ);
						Ext.getCmp('V_APPROV_NM').setValue(res.APPROV_NM);
						Ext.getCmp('V_APPROV_DT').setValue(res.APPROV_DT);
						Ext.getCmp('V_COMP_TYPE').setValue(res.COMP_TYPE);
						Ext.getCmp('V_REGION').setValue(res.REGION);
						Ext.getCmp('V_SALE_TYPE').setValue(res.SALE_TYPE);
						Ext.getCmp('V_IV_TYPE').setValue(res.IV_TYPE);
						Ext.getCmp('V_CONT_QTY').setValue(res.CONT_QTY);
						Ext.getCmp('V_PROFIT_RT').setValue(res.PROFIT_RT);
						Ext.getCmp('V_PROFIT_UNIT').setValue(res.PROFIT_UNIT);
						Ext.getCmp('V_PROFIT_TYPE').setValue(res.PROFIT_TYPE);
						Ext.getCmp('V_PO_YN').setValue(res.PO_YN);
						Ext.getCmp('V_RISK_PROFIT').setValue(res.RISK_PROFIT);
						
						store.load({
							params: {
								V_TAB_TYPE: 'T1',
								V_TYPE: 'SD1',
								V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL,
							},
							callback: function(records){
								

								Ext.getCmp('V_APPROV_NO2').setValue(Ext.getCmp('V_APPROV_NO').getValue());	
								Ext.getCmp('V_APPROV_SEQ2').setValue(Ext.getCmp('V_APPROV_SEQ').getValue());	
								Ext.getCmp('V_APPROV_NM2').setValue(Ext.getCmp('V_APPROV_NM').getValue());	
								
								Ext.getCmp('V_APPROV_NO3').setValue(Ext.getCmp('V_APPROV_NO').getValue());	
								Ext.getCmp('V_APPROV_SEQ3').setValue(Ext.getCmp('V_APPROV_SEQ').getValue());	
								Ext.getCmp('V_APPROV_NM3').setValue(Ext.getCmp('V_APPROV_NM').getValue());	

								Ext.getCmp('V_APPROV_NO4').setValue(Ext.getCmp('V_APPROV_NO').getValue());	
								Ext.getCmp('V_APPROV_SEQ4').setValue(Ext.getCmp('V_APPROV_SEQ').getValue());	
								Ext.getCmp('V_APPROV_NM4').setValue(Ext.getCmp('V_APPROV_NM').getValue());	
								Ext.getCmp('V_S_BP_NM3').setValue(Ext.getCmp('V_S_BP_NM').getValue());	
								
							}
						});
						
						var APPROV_MGM_NO = V_APPROV_MGM_NO_ALL;
						var APPROV_MGM_SEQ = 0;
						var store1 = Ext.getStore('MyStore1');
						
						if((APPROV_MGM_NO != undefined) && (APPROV_MGM_SEQ != undefined)) {
							store1.load({
								params: {
									V_TAB_TYPE: 'T1',
									V_TYPE: 'SD2',
									V_APPROV_MGM_NO : APPROV_MGM_NO,
									V_APPROV_MGM_SEQ : APPROV_MGM_SEQ,
									V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
									V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								},
								callback: function(records){
									
								}
							})
						}
					}
				},
	    	});

    		/*품의정보조회*/
    		Ext.getCmp('V_APPROV_MGM_NO2').setValue(V_APPROV_MGM_NO_ALL);
    		
    		var store2 = Ext.getStore('MyStore2');
    		
    		store2.load({
				params: {
					V_TAB_TYPE: 'T2',
					V_TYPE: 'SH',
					V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL ,
				},
				callback: function(records){
					
				}
			})
    	
    	/* 거래예정일 */
    		Ext.getCmp('V_APPROV_MGM_NO3').setValue(V_APPROV_MGM_NO_ALL);
    		
    		Ext.Ajax.request({
        		url:'sql/Y_APPROV_STEEL3.jsp',
        		method: 'post',
        		params: {
        			V_TAB_TYPE: 'T3',  
        			V_TYPE: 'S',  
        			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
        			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
        			V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL,
        		},
        		callback : function(records,operations,success){
    			},
        	    success : function(response) {
        	    	
        	    	if(response.responseText.match('Exception')) {
    					Ext.Msg.alert('확인', response.responseText);
    				} else {
    					
    					var res = Ext.JSON.decode(response.responseText).resultList;
    					var V_APPROV_DESC_SEQ_LAST = '';
    					
    					//없는 경우
    					if(res.length == 0) {
    						var tabPanel = Ext.getCmp('T3');
    						tabPanel.removeAll();
    						var IV01_VALUE = '';
    						var SL01_VALUE = '';
    						
    						if(Ext.getCmp('V_S_BP_CD').getValue() == '01696'){
    							//업체가 기경이면 
    							IV01_VALUE = '1. 신용장 오픈 일자 : \n\n2. 거래 형태 : \n\n3. 업무 FLOW : \n\n4. 예상 선적일 : \n\n5. 예상 완료일 : ';
    							SL01_VALUE = '1. 여신 제공 23억원(신용 7억 + 보증서 12억. 매출채권신용보험 4억) / 여신 금액 초과시 출고 전 현금 수령 후 출고 진행(여신 금액에 대해 6% 이자 가산(여신 금액 익익월 15일 수금))\n\n2. 기간이자 5%/년 적용.(통관 후 익일부터 4개월)\n 연체이자 6%/년 적용.(인수기간 후 익일부터 적용)\n (단, 보증금액에 해당하는 부분은 이자 계산에서 배제함)\n\n창고 매출일 경우 : 창고명(이호물류), 창고소재지(평택)';
    						}
    						else{
    							IV01_VALUE = '1. 거래예정일 : \n\n2. 거래형태 : \n  1) 수입단가 : \n  2) 부대비용 : \n\n3. 대금결제방식 : ';
    							SL01_VALUE = '1. 판매 완료 예정일 : \n\n2.거래형태 : \n  1) 매출 단가: \n  2) 인수 기간 : \n  3) 연체 기간 : \n  4)연체 이자 : \n\n3. 대금 결제 방식 : \n\n4.품질 하자에 대한 책임은 업체 부담. \n창고 매출일 경우 : 창고명(부성국제로직스), 창고소재지(인천,부산)';
    						}
    						
                            tab = tabPanel.add({
                            	title: '01',
                            	layout: 'fit',
                            	closable : true,
                            	id: 'tab1',
                                items: [
                                        {
                                            xtype: 'panel',
                                            layout: 'fit',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    padding: 10,
                                                    layout: {
                                                        type: 'vbox',
                                                        align: 'stretch'
                                                    },
                                                    items: [
                                                            {
                                                                xtype: 'textareafield',
                                                                flex: 1,
                                                                height: 189,
                                                                style: 'border: 1px solid lightgray; padding : 5px',
                                                                width: 844,
                                                                fieldLabel: '매입',
                                                                labelStyle: 'text-align: center',
                                                                value: IV01_VALUE,
                                                                id: 'IV01'
                                                            },
                                                            {
                                                                xtype: 'textareafield',
                                                                flex: 1,
                                                                height: 189,
                                                                style: 'border: 1px solid lightgray; padding : 5px',
                                                                width: 844,
                                                                fieldLabel: '매출',
                                                                labelStyle: 'text-align: center',
                                                            	value: SL01_VALUE,
                                                        		id: 'SL01'
                                                            }
                                                        ]
                                                }
                                            ]
                                        },
                                    ],
                                    listeners: {
                                    	beforeclose: function(panel, tab) {
                                    		Ext.MessageBox.show({
                                    		      title: '확인',
                                    		      msg: '삭제하시겠습니까?',
                                    		      buttons: Ext.MessageBox.YESNO,
                                    		      fn: function(buttonId){
                                    		        switch(buttonId){
                                    		          case 'no':
                                    		        	  break;
                                    		          case 'yes':
                                    		        	  Ext.Ajax.request({
                                                      		url:'sql/Y_APPROV_STEEL3.jsp',
                                                      		method: 'post',
                                                      		params: {
                                                      			V_TAB_TYPE: 'T3',  
                                                      			V_TYPE: 'D',  
                                                      			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                                      			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                                      			V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL,
                                                      			V_APPROV_DESC_SEQ : this.title.substr(1)
                                                      		},
                                                      		callback : function(records,operations,success){
                                                  			},
                                                      	    success : function(response) {
                                                      	    	var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
                                              		    		tbController.selBtnClick();
                                                      	    }
                                              			});
                                    		        }
                                    		      },
                                    		      scope: this
                                    		    });
                                    		    return false;  // returning false to beforeclose cancels the close event
                                		}
                                	},
                            });
                            
                            tabPanel.setActiveTab(tab);
                        //있는 경우
    					} else {
    						var tabPanel = Ext.getCmp('T3');
    						tabPanel.removeAll();
    						
    						for(var i=0; i<res.length; i++) {
        						var V_APPROV_DESC_SEQ = res[i].APPROV_DESC_SEQ;
        						V_APPROV_DESC_SEQ_LAST = V_APPROV_DESC_SEQ;
                    	    	
                                tab = tabPanel.add({
                                	title: '0' + V_APPROV_DESC_SEQ,
                                	layout: 'fit',
                                	closable : true,
                                	id: 'tab' + V_APPROV_DESC_SEQ,
                                    items: [
                                            {
                                                xtype: 'panel',
                                                layout: 'fit',
                                                items: [
                                                    {
                                                        xtype: 'container',
                                                        padding: 10,
                                                        layout: {
                                                            type: 'vbox',
                                                            align: 'stretch'
                                                        },
                                                        items: [
                                                                {
                                                                    xtype: 'textareafield',
                                                                    flex: 1,
                                                                    height: 189,
                                                                    style: 'border: 1px solid lightgray; padding : 5px',
                                                                    width: 844,
                                                                    fieldLabel: '매입',
                                                                    labelStyle: 'text-align: center',
                                                                    value: '1. 거래예정일 : 기안서 결재 완료 후 진행\n\n2. 거래형태 : \n  1) 수입금액 : \n  2) 부대비용 : \n\n3. 대금결제방식 : ',
                                                                    id: 'IV0'+V_APPROV_DESC_SEQ
                                                                },
                                                                {
                                                                    xtype: 'textareafield',
                                                                    flex: 1,
                                                                    height: 189,
                                                                    style: 'border: 1px solid lightgray; padding : 5px',
                                                                    width: 844,
                                                                    fieldLabel: '매출',
                                                                    labelStyle: 'text-align: center',
                                                                	value: '1. 대금결제방식 : 출고 전 현금 입금\n\n2. 창고 : ㈜판토스 계약 창고 이용, 소재지 : 광주, 용인, 이천 ',
                                                            		id: 'SL0'+V_APPROV_DESC_SEQ
                                                                }
                                                            ]
                                                    }
                                                ]
                                            },
                                        ],
                                        listeners: {
                                        	beforeclose: function(panel, tab) {
                                        		Ext.MessageBox.show({
                                        		      title: '확인',
                                        		      msg: '삭제하시겠습니까?',
                                        		      buttons: Ext.MessageBox.YESNO,
                                        		      fn: function(buttonId){
                                        		        switch(buttonId){
                                        		          case 'no':
                                        		        	  break;
                                        		          case 'yes':
                                        		        	  Ext.Ajax.request({
                                                          		url:'sql/Y_APPROV_STEEL3.jsp',
                                                          		method: 'post',
                                                          		params: {
                                                          			V_TAB_TYPE: 'T3',  
                                                          			V_TYPE: 'D',  
                                                          			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                                          			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                                          			V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL,
                                                          			V_APPROV_DESC_SEQ : this.title.substr(1)
                                                          		},
                                                          		callback : function(records,operations,success){
                                                      			},
                                                          	    success : function(response) {
                                                          	    	var tbController = Y_APPROV_STEEL.app.getController("TbButtonController");
                                                  		    		tbController.selBtnClick();
                                                          	    }
                                                  			});
                                        		        }
                                        		      },
                                        		      scope: this
                                        		    });
                                        		    return false;  // returning false to beforeclose cancels the close event
                                    		}
                                    	},
                                });
                                

            				Ext.getCmp('IV0' + V_APPROV_DESC_SEQ).setValue(res[i].IV_TEXT);
            				Ext.getCmp('SL0' + V_APPROV_DESC_SEQ).setValue(res[i].SL_TEXT);
            				
            				//이전 차수가 존재하면 수정불가.
            				if(i > 0) {
            					Ext.getCmp('IV0' + (V_APPROV_DESC_SEQ-1)).setEditable(false);
					    		Ext.getCmp('SL0' + (V_APPROV_DESC_SEQ-1)).setEditable(false);
            				}
            				
            				} 
                            tabPanel.setActiveTab(Ext.getCmp('tab'+V_APPROV_DESC_SEQ_LAST));
    					}
    					
					}
        	    },
        		scope: this
        	});
    		
    		Ext.getCmp('V_APPROV_MGM_NO4').setValue(V_APPROV_MGM_NO_ALL);
    		
    		var store3 = Ext.getStore('MyStore3');
    		
    		store3.load({
				params: {
					V_TYPE: 'S',
          			V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_APPROV_MGM_NO : V_APPROV_MGM_NO_ALL ,
				},
				callback: function(records){
					
				}
			})
    	
    	
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
    		} 
    		else if (Ext.getCmp('V_PROFIT_RT').getValue() < Ext.getCmp('V_RISK_PROFIT').getValue()){
    			flag = 'F';
    			msg = '리스크관리등록에 등록된 이익('+ Ext.getCmp('V_RISK_PROFIT').getValue() +')보다 이익이 작을 수 없습니다.';
    		}
    		else {
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
            			V_PROFIT_UNIT : Ext.getCmp('V_PROFIT_UNIT').getValue(),
            			V_PROFIT_TYPE : Ext.getCmp('V_PROFIT_TYPE').getValue(),

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
			Ext.getCmp('V_PROFIT_UNIT').setValue(null);
			Ext.getCmp('V_PROFIT_RT').setValue('');
			Ext.getCmp('V_RISK_PROFIT').setValue(0);
			
			
			
    		
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
    	
    	var V_APPROV_MGM_NO_ALL = '';
		var V_PO_YN = Ext.getCmp('V_PO_YN').getValue();
    		
		if(Ext.getCmp('myTab').activeTab.title == '품의정보등록') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO').getValue();
		} else if(Ext.getCmp('myTab').activeTab.title == '품의정보조회') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO2').getValue();
		} else if (Ext.getCmp('myTab').activeTab.title == '거래예정일/형태/대금결제방식') {
			V_APPROV_MGM_NO_ALL = Ext.getCmp('V_APPROV_MGM_NO3').getValue();
		}
		
		if(V_PO_YN == 'Y'){
			Ext.Msg.alert('확인', '품의에 연결된 발주가 존재합니다. 삭제 불가능합니다.');
		}
		else{
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
		}
    },


    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    }

});
