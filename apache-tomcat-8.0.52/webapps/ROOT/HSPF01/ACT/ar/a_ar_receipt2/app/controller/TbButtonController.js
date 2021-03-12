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

Ext.define('A_AR_RECEIPT2.controller.TbButtonController', {
	extend : 'Ext.app.Controller',

	stores : [ 'MyStore', 'MyStore1', 'MyStore2', 'MyStore3', 'MyStore4', 'MyStore5', 'CostStore', 'DeptStore', 'PopStore2' ],
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
		"#clrBtn" : {
			click : 'clrBtnClick'
		},
		"myviewport textfield[name=search_field]" : {
			specialkey : 'tfEnter'
		},
	},

	selBtnClick : function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var store1 = this.getMyStore1Store();
		var store2 = this.getMyStore2Store();
		var store3 = this.getMyStore3Store();
		var store4 = this.getMyStore4Store();
		var store5 = this.getMyStore5Store();
		var calcStore = Ext.getStore('CalcStore');
		var activeTab = Ext.getCmp('myTab').getActiveTab().xtype;

		if (activeTab === 'mypanel') {
			store.removeAll();
			store4.removeAll();

			// [첫번째 탭] 첫번째탭 조회
			store.load({
				params : {
					V_TYPE : 'T1D1',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_DT_FR : Ext.getCmp('V_DT_FR').getValue(),
					V_DT_TO : Ext.getCmp('V_DT_TO').getValue(),
					V_DEPT_CD : Ext.getCmp('V_DEPT_CD').getValue(),
					V_BP_CD : Ext.getCmp('V_BP_CD2').getValue(),
				},
				callback : function(records, operations, success) {

				},
			});

			// [첫번째 탭] 두번째탭 조회
			store4.load({
				params : {
					V_TYPE : 'T1D2',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_DT_FR : Ext.getCmp('V_DT_FR').getValue(),
					V_DT_TO : Ext.getCmp('V_DT_TO').getValue(),
					V_DEPT_CD : Ext.getCmp('V_DEPT_CD').getValue(),
				},
				callback : function(records, operations, success) {

				},
			});

		} else if (activeTab === 'mypanel1') {
			if (!!!Ext.getCmp('V_CLS_AR_NO').getValue())
				return;

			store1.removeAll();
			store2.removeAll();
			store3.removeAll();
			store5.removeAll();
			calcStore.removeAll();

			Ext.Ajax.request({
				url : 'sql/A_AR_RECEIPT2.jsp',
				method : 'post',
				params : {
					V_TYPE : 'T2H',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
				},
				success : function(response) {
					var res = Ext.JSON.decode(response.responseText).resultList[0];

					if (!!res) {
						Ext.getCmp('V_CLS_DT').setValue(res.CLS_DT);
						Ext.getCmp('V_BP_NM').setValue(res.BP_NM);
						Ext.getCmp('V_BP_CD').setValue(res.BP_CD);
						Ext.getCmp('V_DEPT_CD2').setValue(res.DEPT_CD);
						Ext.getCmp('V_CUR').setValue(res.CUR);
						Ext.getCmp('V_TEMP_GL_NO').setValue(res.TEMP_GL_NO);
						Ext.getCmp('V_GL_NO').setValue(res.GL_NO);
						Ext.getCmp('V_CLS_YN').setValue(res.CLS_YN);
						
						if(!!res.TEMP_GL_NO){
							Ext.getCmp('arCfmBtn').setDisabled(true);
							Ext.getCmp('arCancelBtn').setDisabled(false);
						} else {
							Ext.getCmp('arCfmBtn').setDisabled(false);
							Ext.getCmp('arCancelBtn').setDisabled(true);
						}

						// [두번째 탭] 첫번째탭 첫번째 그리드 조회
						store5.load({
							params : {
								V_TYPE : 'T2D1',
								V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
							},
							callback : function(records, operations, success) {

							},
						});

						// [두번째 탭] 첫번째탭 두번째 그리드 조회
						store1.load({
							params : {
								V_TYPE : 'T2D2',
								V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
							},
							callback : function(records, operations, success) {

							},
						});

						// [두번째 탭] 두번째탭 첫번째 그리드 조회
						store2.load({
							params : {
								V_TYPE : 'T2D2',
								V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
								V_CLS_TYPE : 'Z',
							},
							callback : function(records, operations, success) {
								if (records.length > 0) {
									var myGridController2 = A_AR_RECEIPT2.app.getController("MyGridController2");
									myGridController2.myGrid2Click('', '', '', records[0], '', '', '', '');
								}
							},
						});
					}

				}
			});
		}

	},

	saveBtnClick : function(button, e, eOpts) {
		var activeTab = Ext.getCmp('myTab').getActiveTab().xtype;
		var activeTab1 = Ext.getCmp('myTab1').getActiveTab().xtype;
		var store1 = Ext.getStore('MyStore1');
		var store2 = Ext.getStore('MyStore2');
		var store3 = Ext.getStore('MyStore3');
		var store5 = Ext.getStore('MyStore5');
		var flag = '';
		var msg = '';

		if (!!!Ext.getCmp('V_CLS_DT').getValue()) {
			flag = 'F';
			msg = '수금일을 입력하세요.';
		} else if (!!!Ext.getCmp('V_CUR').getValue()) {
			flag = 'F';
			msg = '통화를 선택하세요.';
		} else {
			flag = 'T';

			store1.each(function(record, idx) {
				if (record.get('RECV_AMT') == 0) {
					flag = 'F';
					msg = '수금금액이 배부되지 않은 행이 존재합니다.<br>삭제 후 저장하시기 바랍니다.';
					return;
				}
			});
		}

		if (flag == 'T') {
			Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
				if (button == 'yes') {
					
					var taskSelect = new Ext.util.DelayedTask(function(){
						var tbController = A_AR_RECEIPT2.app.getController("TbButtonController");
						tbController.selBtnClick();
					});

					var store2Chagned = false;
					store2.each(function(rec, idx) {
						if (rec.isDirty()) {
							if (rec.get('V_TYPE') != 'I') {
								rec.set('V_TYPE', 'U');
							}
							store2Chagned = true;
						}
					});

					Ext.Ajax.request({
						url : 'sql/A_AR_RECEIPT2.jsp',
						method : 'post',
						params : {
							V_TYPE : 'T2IH',
							V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
							V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
							V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
							V_BP_CD : Ext.getCmp('V_BP_CD').getValue(),
							V_DEPT_CD : Ext.getCmp('V_DEPT_CD2').getValue(),
							V_CUR : Ext.getCmp('V_CUR').getValue(),
						},
						success : function(response) {
							var res = response.responseText;

							// 정상등록
							if (res.match('CR')) {
								Ext.getCmp('V_CLS_AR_NO').setValue(res);

								store1.sync({
									params : {
										V_TYPE : 'T2ID',
										V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
										V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
										V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
										V_CLS_TYPE : Ext.getCmp('V_CLS_TYPE').getValue(),
										V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
										V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
									},
									callback : function(records, operation, success) {

										// REMAIN INSERT
										var calcStore = Ext.getStore('CalcStore');
										calcStore.sync({
											params : {
												V_TYPE : 'T2ID2',
												V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
												V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
												V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
												V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
												V_CUR : Ext.getCmp('V_CUR').getValue(),
											},
											callback : function(records, operation, success) {
												calcStore.removeAll();

//												var tbController = A_AR_RECEIPT2.app.getController("TbButtonController");
//												tbController.selBtnClick();
											}
										});

									},
								});

								var task = new Ext.util.DelayedTask(function(){
									store2.sync({
										params : {
											V_TYPE : 'T2ID',
											V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
											V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
											V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
											V_CLS_TYPE : 'Z',
											V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
											V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
										},
										callback : function(records, operation, success) {
											store2.reload();
											store3.sync({
												params : {
													V_TYPE : 'T2ID3',
													V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
													V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
													V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
												},
												callback : function(records, operation, success) {
													store3.reload();
												},
											});
										},
									});
									
									taskSelect.delay(1000);
									
								});
								
								task.delay(1000);
								
							} else if (res.match('UPDATE')) {
								store1.each(function(record, idx) {
									if (record.get('V_TYPE') != 'I' && record.isDirty()) {
										record.set('V_TYPE', 'U');
									}
								});

								store1.sync({
									params : {
										V_TYPE : 'T2ID',
										V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
										V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
										V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
										V_CLS_TYPE : Ext.getCmp('V_CLS_TYPE').getValue(),
										V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
										V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
									},
									callback : function(records, operation, success) {

										// REMAIN INSERT
										var calcStore = Ext.getStore('CalcStore');
										if (calcStore.data.length > 0) {
											calcStore.sync({
												params : {
													V_TYPE : 'T2ID2',
													V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
													V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
													V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
													V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
													V_CUR : Ext.getCmp('V_CUR').getValue(),
												},
												callback : function(records, operation, success) {
													calcStore.removeAll();

//													var tbController = A_AR_RECEIPT2.app.getController("TbButtonController");
//													tbController.selBtnClick();
												}
											});
										} else {
//											var tbController = A_AR_RECEIPT2.app.getController("TbButtonController");
//											tbController.selBtnClick();
										}

									},
								});

								store3.each(function(rec, idx) {
									if (rec.get('V_TYPE') != 'I' && rec.isDirty()) {
										rec.set('V_TYPE', 'U');
									}
								});

								var task = new Ext.util.DelayedTask(function(){
									if (store2Chagned) {
										store2.sync({
											params : {
												V_TYPE : 'T2ID',
												V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
												V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
												V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
												V_CLS_TYPE : 'Z',
												V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
												V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
											},
											callback : function(records, operation, success) {
												store2.reload();
												store3.sync({
													params : {
														V_TYPE : 'T2ID3',
														V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
														V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
														V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
													},
													callback : function(records, operation, success) {
//														var tbController = A_AR_RECEIPT2.app.getController("TbButtonController");
//														tbController.selBtnClick();
													},
												});
											},
										});
										
										taskSelect.delay(1000);
									} else {
										store3.sync({
											params : {
												V_TYPE : 'T2ID3',
												V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
												V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
												V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
											},
											callback : function(records, operation, success) {
//												var tbController = A_AR_RECEIPT2.app.getController("TbButtonController");
//												tbController.selBtnClick();
											},
										});
										
										taskSelect.delay(1000);
									}
								});
								
								task.delay(1000);
								
							} else {
								Ext.Msg.alert('확인', res);
							}
						}
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', msg);
		}

		// if (activeTab1 === 'mypanel2') {
		// if (!!!Ext.getCmp('V_CLS_DT').getValue()) {
		// flag = 'F';
		// msg = '수금일을 입력하세요.';
		// } else if (!!!Ext.getCmp('V_CUR').getValue()) {
		// flag = 'F';
		// msg = '통화를 선택하세요.';
		// } else {
		// flag = 'T';
		//
		// store1.each(function(record, idx) {
		// if (record.get('RECV_AMT') == 0) {
		// flag = 'F';
		// msg = '수금금액이 배부되지 않은 행이 존재합니다.<br>삭제 후 저장하시기 바랍니다.';
		// return;
		// }
		// });
		// }
		//
		// if (flag == 'T') {
		// Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
		// if (button == 'yes') {
		// Ext.Ajax.request({
		// url : 'sql/A_AR_RECEIPT2.jsp',
		// method : 'post',
		// params : {
		// V_TYPE : 'T2IH',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
		// V_BP_CD : Ext.getCmp('V_BP_CD').getValue(),
		// V_DEPT_CD : Ext.getCmp('V_DEPT_CD2').getValue(),
		// V_CUR : Ext.getCmp('V_CUR').getValue(),
		// },
		// success : function(response) {
		// var res = response.responseText;
		//
		// // 정상등록
		// if (res.match('CR')) {
		// Ext.getCmp('V_CLS_AR_NO').setValue(res);
		//
		// store1.sync({
		// params : {
		// V_TYPE : 'T2ID',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_TYPE : Ext.getCmp('V_CLS_TYPE').getValue(),
		// V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
		// V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		//
		// // REMAIN INSERT
		// var calcStore = Ext.getStore('CalcStore');
		// calcStore.sync({
		// params : {
		// V_TYPE : 'T2ID2',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
		// V_CUR : Ext.getCmp('V_CUR').getValue(),
		// },
		// callback : function(records, operation, success) {
		// calcStore.removeAll();
		//
		// var tbController =
		// A_AR_RECEIPT2.app.getController("TbButtonController");
		// tbController.selBtnClick();
		// }
		// });
		//
		// },
		// });
		// } else if (res.match('UPDATE')) {
		// store1.each(function(record, idx) {
		// if (record.get('V_TYPE') != 'I' && record.isDirty()) {
		// record.set('V_TYPE', 'U');
		// }
		// });
		//
		// store1.sync({
		// params : {
		// V_TYPE : 'T2ID',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_TYPE : Ext.getCmp('V_CLS_TYPE').getValue(),
		// V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
		// V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		//											
		// // REMAIN INSERT
		// var calcStore = Ext.getStore('CalcStore');
		// if(calcStore.data.length > 0){
		// calcStore.sync({
		// params : {
		// V_TYPE : 'T2ID2',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
		// V_CUR : Ext.getCmp('V_CUR').getValue(),
		// },
		// callback : function(records, operation, success) {
		// calcStore.removeAll();
		//
		// var tbController =
		// A_AR_RECEIPT2.app.getController("TbButtonController");
		// tbController.selBtnClick();
		// }
		// });
		// } else {
		// var tbController =
		// A_AR_RECEIPT2.app.getController("TbButtonController");
		// tbController.selBtnClick();
		// }
		//											
		// },
		// });
		// } else {
		// Ext.Msg.alert('확인', res);
		// }
		// }
		// });
		// }
		// });
		// } else {
		// Ext.Msg.alert('확인', msg);
		// }
		//
		// } else if (activeTab1 === 'mypanel3') {
		// if (!!!Ext.getCmp('V_CLS_DT').getValue()) {
		// flag = 'F';
		// msg = '수금일을 입력하세요.';
		// } else if (!!!Ext.getCmp('V_CUR').getValue()) {
		// flag = 'F';
		// msg = '통화를 선택하세요.';
		// } else {
		// flag = 'T';
		// }
		//
		// if (flag == 'T') {
		// Ext.Msg.confirm('확인', '저장하시겠습니까?', function(button) {
		// if (button == 'yes') {
		// var store2Chagned = false;
		// store2.each(function(rec, idx) {
		// if (rec.isDirty()) {
		// if (rec.get('V_TYPE') != 'I') {
		// rec.set('V_TYPE', 'U');
		// }
		// store2Chagned = true;
		// }
		// });
		//
		// Ext.Ajax.request({
		// url : 'sql/A_AR_RECEIPT2.jsp',
		// method : 'post',
		// params : {
		// V_TYPE : 'T2IH',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_DT : Ext.getCmp('V_CLS_DT').getValue(),
		// V_BP_CD : Ext.getCmp('V_BP_CD').getValue(),
		// V_DEPT_CD : Ext.getCmp('V_DEPT_CD2').getValue(),
		// V_CUR : Ext.getCmp('V_CUR').getValue(),
		// },
		// success : function(response) {
		// var res = response.responseText;
		//
		// // 정상등록
		// if (res.match('CR')) {
		// Ext.getCmp('V_CLS_AR_NO').setValue(res);
		//
		// store2.sync({
		// params : {
		// V_TYPE : 'T2ID',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_TYPE : 'Z',
		// V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
		// V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		// store2.reload();
		// store3.sync({
		// params : {
		// V_TYPE : 'T2ID3',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		// store3.reload();
		// },
		// });
		//
		// var tbController =
		// A_AR_RECEIPT2.app.getController("TbButtonController");
		// tbController.selBtnClick();
		// },
		// });
		// } else if (res.match('UPDATE')) {
		// store3.each(function(rec, idx) {
		// if (rec.get('V_TYPE') != 'I' && rec.isDirty()) {
		// rec.set('V_TYPE', 'U');
		// }
		// });
		//
		// if (store2Chagned) {
		// store2.sync({
		// params : {
		// V_TYPE : 'T2ID',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// V_CLS_TYPE : 'Z',
		// V_BANK_CD : Ext.getCmp('V_BANK_CD').getValue(),
		// V_BANK_ACCT_NO : Ext.getCmp('V_BANK_ACCT_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		// store2.reload();
		// store3.sync({
		// params : {
		// V_TYPE : 'T2ID3',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		// var tbController =
		// A_AR_RECEIPT2.app.getController("TbButtonController");
		// tbController.selBtnClick();
		// },
		// });
		// },
		// });
		// } else {
		// store3.sync({
		// params : {
		// V_TYPE : 'T2ID3',
		// V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
		// V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
		// V_CLS_AR_NO : Ext.getCmp('V_CLS_AR_NO').getValue(),
		// },
		// callback : function(records, operation, success) {
		// var tbController =
		// A_AR_RECEIPT2.app.getController("TbButtonController");
		// tbController.selBtnClick();
		// },
		// });
		// }
		//
		// } else {
		// Ext.Msg.alert('확인', res);
		// }
		// }
		// });
		// }
		// });
		// } else {
		// Ext.Msg.alert('확인', msg);
		// }
		//
		// }

	},

	clsBtnClick : function(button, e, eOpts) {
		var tab = parent.Ext.getCmp('myTab');
		var activeTab = tab.getActiveTab();
		var tabIndex = tab.items.indexOf(activeTab);
		tab.remove(tabIndex, true);
	},

	clrBtnClick : function(button, e, eOpts) {
		var store = this.getMyStoreStore();
		var store1 = this.getMyStore1Store();
		var store2 = this.getMyStore2Store();
		var store3 = this.getMyStore3Store();
		var store4 = this.getMyStore4Store();
		var store5 = this.getMyStore5Store();
		var calcStore = Ext.getStore('CalcStore');

		store.removeAll();
		store1.removeAll();
		store2.removeAll();
		store3.removeAll();
		store4.removeAll();
		store5.removeAll();
		calcStore.removeAll();

		Ext.getCmp('V_CLS_AR_NO').setValue('');
		Ext.getCmp('V_CLS_DT').setValue('');
		Ext.getCmp('V_CLS_TYPE').setValue('');
		Ext.getCmp('V_DEPT_CD').setValue('');
		Ext.getCmp('V_DEPT_CD2').setValue('');
		Ext.getCmp('V_BP_CD').setValue('');
		Ext.getCmp('V_BP_NM').setValue('');
		Ext.getCmp('V_CUR').setValue('KRW');
		Ext.getCmp('V_REMARK').setValue('');
		Ext.getCmp('V_TEMP_GL_NO').setValue('');
		Ext.getCmp('V_GL_NO').setValue('');
		Ext.getCmp('V_CLS_YN').setValue('');
		Ext.getCmp('V_BANK_CD').setValue('');
		Ext.getCmp('V_BANK_ACCT_NO').setValue('');
		
		Ext.getCmp('arCfmBtn').setDisabled(false);
		Ext.getCmp('arCancelBtn').setDisabled(true);
	},

	tfEnter : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.selBtnClick();
		}
	},

	onLaunch : function(application) {
		var BPstore = Ext.getStore('WinBpPopStore');
		BPstore.load();

		var CostStore = Ext.getStore('CostStore');
		CostStore.load();

		var DeptStore = Ext.getStore('DeptStore');
		DeptStore.load();

		var PopStore2 = Ext.getStore('PopStore2');
		PopStore2.load();
	},

});