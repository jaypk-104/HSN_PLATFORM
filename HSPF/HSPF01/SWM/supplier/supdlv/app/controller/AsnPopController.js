/*
 * File: app/controller/AsnPopController.js
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

Ext.define('SupDlvMgm.controller.AsnPopController', {
	extend : 'Ext.app.Controller',

	stores : [ 'DtlStore', 'DlvyStore', 'FileStore' ],

	control : {
		"#addAsnBtn" : {
			click : 'addAsnBtnClick'
		},
		"#crtBacdBtn" : {
			click : 'crtBacdBtnClick'
		},
		"#pubBacdBtn" : {
			click : 'pubBacdBtnClick'
		},
		"#pub4BacdBtn" : {
			click : 'pub4BacdBtnClick'
		},
		"#cfmBtn" : {
			click : 'cfmBtnClick'
		},
		"#cancelCfmBtn" : {
			click : 'cancelCfmBtnClick'
		},
		"#transBtn" : {
			click : 'transBtnClick'
		},
		"#delBcdBtn" : {
			click : 'delBcdBtnClick'
		},
		"#GsaveBtn" : {
			click : 'GsaveBtnClick'
		},
		"#howlotBtn" : {
			click : 'howlotBtnClick'
		},
		"#itemLabelPrintBtn" : {
			click : 'itemLabelPrintBtnClick'
		},
		"#rePrintBtn" : {
			click : 'rePrintBtnClick'
		},
		"#fileAddBtn" : { /* 파일첨부 */
			click : 'fileAddBtnClick'
		},
		'#fileGrid' : { /* 파일다운더블클릭 */
			celldblclick : 'fileGridDblClick',
		},
		"#fileDelBtn" : { /*파일삭제*/
        	click : 'fileDelBtnClick'
        },
	},

	addAsnBtnClick : function(target) {
		var gridObj1 = Ext.getCmp('grid1');
		var gridObj2 = Ext.getCmp('grid2');
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var gridDtlStore = this.getDtlStoreStore();
		var gridRecord1 = gridObj1.getSelectionModel().getSelection();
		var gridRecord2 = gridObj2.getSelectionModel().getSelection();

		if (gridRecord2.length == 0) {
			Ext.Msg.alert('확인', 'ASN번호를 선택하세요.');
		} else {
			var popups1 = Ext.create("SupDlvMgm.view.MyWindow");
			popups1.setWidth(Ext.getBody().getViewSize().width);
			popups1.setHeight(Ext.getBody().getViewSize().height);
			popups1.show();
			var store = this.getDlvyStoreStore();
			Ext.getCmp('u_asn_no').setValue(gridRecord2[0].data['ASN_NO']);

			// 재발행버튼
			var id = parent.Ext.getCmp('GUSER_ID').getValue();
			var rePrintBtn = Ext.getCmp('rePrintBtn');
			if (id == 'admin' || id == 'rjl' || id == 'wh' || id == 'jh0526' || id == 'abian99' || id == 'hsnamu' || id == 'kss' || id == 'ADMINGR2' || id == 'TKIA5' || id == 'WH' || id == 'KSS' || id == 'JWW0228') {
				rePrintBtn.show();
			} else {
				rePrintBtn.hide();
			}

			for (var i = 0; i < gridRecord2.length; i++) {
				store.load({
					params : {
						ASN_NO : gridRecord2[i].data['ASN_NO'],
					},
					callback : function(records, operation, success) {
					},
					scope : this
				});

				gridDtlStore.load({
					params : {
						ASN_NO : gridRecord2[i].data['ASN_NO'],
					},
					callback : function(records, operation, success) {

					},
					scope : this
				});
			}
			
			var fileStore = Ext.getStore('FileStore');
			fileStore.removeAll();
			fileStore.load({
				params : {
					V_TYPE : 'S',
					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_ASN_NO : Ext.getCmp('u_asn_no').getValue(),
				},
				callback : function(records, operations, success) {
					Ext.getCmp('fileAddBtn').setText('첨부파일 [ ' + records.length + ' ]');

					var filePreview = '';
					for (var i = 0; i < records.length; i++) {
						filePreview += records[i].get('FILE_NM') + '<br>';
					}

					var qText = '';
					if (filePreview.length == 0) {
						qText = '없음';
					} else {
						qText = filePreview;
					}

					Ext.tip.QuickTipManager.register({
						target : 'fileAddBtn', // Target
												// button's ID
						title : '<span style=\'color:#9CFFFA\'>첨부파일현황</span>', // QuickTip
																				// Header
						text : qText, // Tip content,
						dismissDelay : 10000
					// Hide after 10 seconds hover
					});

				}
			});
			
		}
	},

	crtBacdBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();
		var gridDlvyStore = gridDlvy.getStore();
		var asn_sts = gridDlvyStore.getAt(0).get('ASN_STS');

		if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0) {
			if (asn_sts == 'A') {
				Ext.MessageBox.confirm('확인', '바코드를 생성하시겠습니까?', function(btn) {
					if (btn == 'yes') {
						Ext.Ajax.request({
							url : 'sql/CreateBacdSql.jsp',
							method : 'post',
							params : {
								V_TYPE : 'I', // 생성
								V_ASN_NO : u_asn_no,
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
							},
							success : function(response) {
								gridDlvy.getStore().reload();
								gridDtl.getStore().reload();
							},
							scope : this
						});
					} else {
						// 바코드생성취소
					}
				});
			} else {
				Ext.Msg.alert('바코드생성', '바코드대기 상태에서 가능합니다.');
			}
		} else {
			Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
		}
	},

	pubBacdBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();
		var gridDlvyStore = gridDlvy.getStore();
		var asn_sts = gridDlvyStore.getAt(0).get('ASN_STS');
		var id = parent.Ext.getCmp('GUSER_ID').getValue();
		var flag = '';

		var lotCfm = '';
		var msg = '';
		var gridDtl_cnt = gridDtl.getStore().getCount();

		// 로트정보확인
		outter: for (var i = 0; i < gridDtl_cnt; i++) {
			var record = gridDtl.getStore().getAt(i);
			if (record.get('LOT_NO') == undefined || record.get('LOT_NO') == '' || Ext.String.trim(record.get('LOT_NO')).length == 0 || record.get('MAKE_DT') == undefined || record.get('MAKE_DT') == '' || record.get('VALID_DT') == undefined || record.get('VALID_DT') == '' || Ext.String.trim(record.get('VALID_DT')).length == 0) {
				msg = '로트정보를 입력하세요.';
				lotCfm = 'N';
				break outter;
			} else if (record.dirty == true) {
				msg = '로트정보에 변경사항이 존재합니다. 저장 후 발행하세요.';
				lotCfm = 'N';
				break outter;
			} else {
				lotCfm = 'Y';
			}
		}

		if (lotCfm == 'Y') {
			if (gridDlvy.getStore().getAt(0).get('PRINT_FLG') == 'Y' || (id == 'admin' || id == 'rjl' || id == 'WH' || id == 'ADMINGR2' || id == 'TKIA5' || id == 'JWW')) {
				if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0 || (id == 'admin' || id == 'rjl' || id == 'WH' || id == 'ADMINGR2' || id == 'TKIA5' || id == 'JWW')) {
					if (asn_sts == 'B' || asn_sts == 'C') {
						Ext.MessageBox.confirm('확인', '바코드를 발행하시겠습니까?', function(btn) {
							if (btn == 'yes') {
								Ext.Ajax.request({
									url : 'sql/DtlBacdSql.jsp',
									method : 'post',
									params : {
										V_TYPE : 'P', // 발행
										V_ASN_NO : u_asn_no,
										V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
									},
									success : function(response) {
										gridDlvy.getStore().reload();
										gridDtl.getStore().reload();
									},
									scope : this
								});
								if (parent.Ext.getCmp('MAIN_SERVER_YN').getValue() == 'Y') {
									var myWin = new Ext.Window({
										title : '바코드발행',
										html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/SWM/PLATFORM_BAR_CODE_SWM.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
										width : 1000,
										height : 768
									});
									myWin.show();
								} else {
									var myWin = new Ext.Window({
										title : '바코드발행',
										html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/SWM/BAR_CODE_HSNA_TEST.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
										width : 1000,
										height : 768
									});
									myWin.show();
								}
							} else {
								//
							}
						});
					} else {
						Ext.Msg.alert('바코드발행', '바코드생성/발행 상태에서 가능합니다.');
					}
				} else {
					Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
				}
			} else {
				Ext.Msg.alert('확인', '이미 발행 된 바코드입니다. <br>관리자에게 재발행 권한을 요청하세요.');
			}
		} else {
			Ext.Msg.alert('확인', msg);
		}
	},

	pub4BacdBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();
		var gridDlvyStore = gridDlvy.getStore();
		var asn_sts = gridDlvyStore.getAt(0).get('ASN_STS');
		var id = parent.Ext.getCmp('GUSER_ID').getValue();
		var flag = '';

		var lotCfm = '';
		var gridDtl_cnt = gridDtl.getStore().getCount();

		// 로트정보확인
		outter: for (var i = 0; i < gridDtl_cnt; i++) {
			var record = gridDtl.getStore().getAt(i);
			if (record.get('LOT_NO') == undefined || record.get('LOT_NO') == '' || Ext.String.trim(record.get('LOT_NO')).length == 0 || record.get('MAKE_DT') == undefined || record.get('MAKE_DT') == '' ||  record.get('VALID_DT') == undefined || record.get('VALID_DT') == '' || Ext.String.trim(record.get('VALID_DT')).length == 0) {
				Ext.Msg.alert('확인', '로트정보를 입력하세요.');
				lotCfm = 'N';
				break outter;
			} else {
				lotCfm = 'Y';
			}
		}

		if (lotCfm == 'Y') {

			if (gridDlvy.getStore().getAt(0).get('PRINT_FLG') == 'Y' || (id == 'admin' || id == 'rjl' || id == 'wh' || id == 'ADMINGR2' || id == 'TKIA5')) {
				if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0 || (id == 'admin' || id == 'rjl' || id == 'wh' || id == 'ADMINGR2' || id == 'TKIA5')) {
					if (asn_sts == 'B' || asn_sts == 'C') {
						Ext.MessageBox.confirm('확인', '바코드를 발행하시겠습니까?', function(btn) {
							if (btn == 'yes') {
								Ext.Ajax.request({
									url : 'sql/DtlBacdSql.jsp',
									method : 'post',
									params : {
										V_TYPE : 'P', // 발행
										V_ASN_NO : u_asn_no,
										V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
									},
									success : function(response) {
										gridDlvy.getStore().reload();
										gridDtl.getStore().reload();
									},
									scope : this
								});
								if (parent.Ext.getCmp('MAIN_SERVER_YN').getValue() == 'Y') {
									var myWin = new Ext.Window({
										title : '바코드발행',
										html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/SWM/PLATFORM_BAR_CODE_SWMX4.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
										width : 1000,
										height : 768
									});
									myWin.show();
								} else {
									var myWin = new Ext.Window({
										title : '바코드발행',
										html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/SWM/BAR_CODE_HSNAX4_TEST.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
										width : 1000,
										height : 768
									});
									myWin.show();
								}

							} else {
								//
							}
						});
					} else {
						Ext.Msg.alert('바코드발행', '바코드생성/발행 상태에서 가능합니다.');
					}
				} else {
					Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
				}
			} else {
				Ext.Msg.alert('확인', '이미 발행 된 바코드입니다. <br>관리자에게 재발행 권한을 요청하세요.');
			}
		} else {
			Ext.Msg.alert('확인', '로트정보를 입력하세요.');
		}
	},

	cfmBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var gridDlvyStore = gridDlvy.getStore();
		var asn_sts = gridDlvyStore.getAt(0).get('ASN_STS');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();

		var lotCfm = 'W';

		// 입고확인
		if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0) {
			var gridDtl_cnt = gridDtl.getStore().getCount();
			// 로트정보확인
			outter: if (lotCfm == 'W') {
				for (var i = 0; i < gridDtl_cnt; i++) {
					var record = gridDtl.getStore().getAt(i);
					if (record.get('LOT_NO') == undefined || record.get('LOT_NO') == '' || Ext.String.trim(record.get('LOT_NO')).length == 0 || record.get('MAKE_DT') == undefined || record.get('MAKE_DT') == ''  || record.get('VALID_DT') == undefined || record.get('VALID_DT') == '' || Ext.String.trim(record.get('VALID_DT')).length == 0) {
						Ext.Msg.alert('확인', '로트정보를 입력하세요.');
						lotCfm = 'N';
						break outter;
					} else {
						lotCfm = 'Y';
					}
				}
			}

			if (lotCfm == 'Y') {
				if (asn_sts == 'C') {
					Ext.MessageBox.confirm('확인', '바코드를 확정하시겠습니까?', function(btn) {
						if (btn == 'yes') {
							var gridDlvy = Ext.getCmp('grid_dlvy');
							Ext.Ajax.request({
								url : 'sql/DtlBacdSql.jsp',
								method : 'post',
								params : {
									V_TYPE : 'C', // 확정
									V_ASN_NO : u_asn_no,
									V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
								},
								success : function(response) {
									gridDlvy.getStore().reload();
									gridDtl.getStore().reload();
								},
								scope : this
							});
						} else {
							//
						}
					});
				} else {
					Ext.Msg.alert('바코드확정', '바코드발행 상태에서 가능합니다.');
				}
			}
		} else {
			Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
		}
	},

	cancelCfmBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();

		if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0) {
			if (gridDlvy.getStore().getAt(0).get('CFM_YN') == 'Y') {
				Ext.MessageBox.confirm('확인', '바코드 확정을 취소하시겠습니까?', function(btn) {
					if (btn == 'yes') {
						Ext.Ajax.request({
							url : 'sql/DtlBacdSql.jsp',
							method : 'post',
							params : {
								V_TYPE : 'N', // 취소
								V_ASN_NO : u_asn_no,
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
							},
							success : function(response) {
								gridDlvy.getStore().reload();
								gridDtl.getStore().reload();
							},
							scope : this
						});
					}
				});
			} else if (gridDlvy.getStore().getAt(0).get('CFM_YN') == 'N') {
				Ext.Msg.alert('바코드확정취소', '확정된 바코드만 취소가능합니다.');
			}
		} else {
			Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
		}
	},

	transBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');

		var u_asn_no = Ext.getCmp('u_asn_no').getValue();
		var gridDlvyStore = gridDlvy.getStore();
		var asn_sts = gridDlvyStore.getAt(0).get('ASN_STS');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();

		if (parent.Ext.getCmp('MAIN_SERVER_YN').getValue() == 'Y') {
			var myWin = new Ext.Window({
				title : '거래명세표',
				html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/SWM/PLATFORM_TRANS.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
				width : 1000,
				height : 768
			});
			myWin.show();
		} else {
			var myWin = new Ext.Window({
				title : '거래명세표',
				html : '<iframe name="xxx" border =0 src="http://123.142.124.170:8080/aireport/SWM/TRANS_TEST.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
				width : 1000,
				height : 768
			});
			myWin.show();
		}

	},

	delBcdBtnClick : function(target) {
		var grid1Store = Ext.getCmp('grid1').getStore();
		var grid2Store = Ext.getCmp('grid2').getStore();
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtl = Ext.getCmp('grid_dtl');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();

		if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0) {
			Ext.MessageBox.confirm('확인', 'ASN을 삭제하시겠습니까?', function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : 'sql/DtlBacdSql.jsp',
						method : 'post',
						params : {
							V_TYPE : 'D', // 삭제
							V_ASN_NO : u_asn_no,
							V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
						},
						success : function(response) {
							grid1Store.reload();
							grid2Store.reload();

							// 창닫기
							var win = Ext.WindowManager.getActive();
							win.close();
						},
						scope : this
					});
				}
			});
		} else {
			Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
		}
	},

	GsaveBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var gridDtlStore = Ext.getCmp('grid_dtl').getStore();
		var grid2Store = Ext.getCmp('grid2').getStore();

		var u_asn_no = Ext.getCmp('u_asn_no').getValue();
		
		var myMask = new Ext.LoadMask(Ext.getCmp('grid_dtl') , {msg:"Please wait..."});
		
		var itemLotArr = new Array(); //ITEM_CD + LOT_NO 로 이루어진 배열 
		
		var makeArr = new Array();
		
		var gridDtlRecords = gridDtlStore.getRange();
		
		var flag = 'T';
		var msg = '';
		
		function getFormatDate(date){
            var year = date.getFullYear();
            var month = (1 + date.getMonth());
            month = month >= 10 ? month : '0' + month;
            var day = date.getDate();
            day = day >= 10 ? day : '0' + day;
            return year + '-' + month + '-' + day;
        }

		for(var i = 0 ; i < gridDtlRecords.length ; i ++){
			var itemLot = gridDtlRecords[i].data['ITEM_CD'] + gridDtlRecords[i].data['LOT_NO'];
			if(itemLotArr.indexOf(itemLot) == -1){
				itemLotArr.push(itemLot);
				makeArr.push(gridDtlRecords[i].data['MAKE_DT']);
			}
			else{
				var index = itemLotArr.indexOf(itemLot);
				if(getFormatDate(makeArr[index]) != getFormatDate(gridDtlRecords[i].data['MAKE_DT'])){
					flag = 'F';
					msg = '같은 로트번호에 제조일이 다른 데이터가 존재하여 저장 불가능합니다.';
				}
			}
		}
		
		if (flag == 'T'){
			if (gridDlvy.getStore().getAt(0).get('CFM_YN') == 'N') {
				myMask.show();
				gridDtlStore.sync({
					params:{
						V_TYPE : 'SYNC',
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						
					},
					callback : function() {
						gridDtlStore.reload();
						grid2Store.reload();
						myMask.hide();
					},
						
					
				});
				/*
				if (gridDlvy.getStore().getAt(0).get('GR_QTY') == 0) {
					gridDtlStore.each(function(rec) {
						Ext.Ajax.request({
							url : 'excel/ExcelSave.jsp',
							method : 'post',
							params : {
								V_ASN_NO : rec.get('ASN_NO'),
								V_ASN_SEQ : rec.get('ASN_SEQ'),
								V_LOT_NO : rec.get('LOT_NO'),
								V_MAKE_DT : rec.get('MAKE_DT'),
								V_VALID_DT : rec.get('VALID_DT'),
								V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
								// 과부족허용률
								V_BOX_QTY : rec.get('BOX_QTY')
							},
							callback : function() {
								gridDtlStore.reload();
								grid2Store.reload();
							},
							success : function(response) {
							},
							scope : this
						});
					});
				} 
				else {
					Ext.Msg.alert('확인', '이미 입고 된 바코드입니다.');
				}
				*/
			} 
			else {
				Ext.Msg.alert('확인', '확정된 바코드 정보는 수정할 수 없습니다.');
			}
		}
		else{
			Ext.Msg.alert('확인', msg);
		}
		
	},

	howlotBtnClick : function(target) {
		var myWin = new Ext.Window({
			title : '로트정보 입력방법',
			html : '<iframe name="xxx" border =0 src="images/HowToLot.png" width="100%" height="100%"></iframe>',
			width : 1350,
			height : 768
		});
		myWin.show();
	},

	itemLabelPrintBtnClick : function(target) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();

		var myWin = new Ext.Window({
			title : '품목라벨출력',
			html : '<iframe name="xxx" border =0 src="http://123.142.124.137:8100/aireport/AIViewer55/BARCODE/ITEM_LABEL.jsp?ASN_NO=' + u_asn_no + '" width="100%" height="100%"></iframe>',
			width : 1000,
			height : 768
		});
		myWin.show();

	},

	rePrintBtnClick : function(button, e, eOpts) {
		var gridDlvy = Ext.getCmp('grid_dlvy');
		var u_asn_no = Ext.getCmp('u_asn_no').getValue();
		Ext.MessageBox.confirm('확인', '바코드 재발행을 허용하시겠습니까?', function(btn) {
			if (btn == 'yes') {
				Ext.Ajax.request({
					url : 'sql/DtlBacdSql.jsp',
					method : 'post',
					params : {
						V_TYPE : 'RP', // 발행
						V_ASN_NO : u_asn_no,
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue()
					},
					success : function(response) {
						gridDlvy.getStore().reload();
					},
					scope : this
				});
			}
		})
	},
	/* [파일첨부] */
	fileAddBtnClick : function() {
		var popup = Ext.create("SupDlvMgm.view.FileWindow");
		popup.show();

		var width = Ext.getBody().getViewSize().width - 200;
		var height = Ext.getBody().getViewSize().height - 200;
		popup.setSize(width, height);
		popup.center();

		var fileStore = Ext.getStore('FileStore');
		fileStore.removeAll();
		fileStore.load({
			params : {
				V_TYPE : 'S',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_ASN_NO : Ext.getCmp('u_asn_no').getValue(),
			},
			callback : function(records, operations, success) {
			}
		});
	},
	/* [파일다운] */
	fileGridDblClick : function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var gridObj = Ext.getCmp('fileGrid');
		var gridRecord = gridObj.getSelectionModel().getSelection();
		var V_FILE_NM = gridRecord[0].data['FILE_NM'];
		var V_FILE_IN_SYSTEM_NM = gridRecord[0].data['FILE_IN_SYSTEM_NM'];
		V_FILE_NM = encodeURI(V_FILE_NM);
		V_FILE_IN_SYSTEM_NM = encodeURI(V_FILE_IN_SYSTEM_NM);
		var myWin = new Ext.Window({
			title : '파일다운로드',
			html : '<iframe name="xxx" border =0 src="sql/SCM_DLVY_HSPF_FILE.jsp?V_TYPE=D&V_FILE_NM=' + V_FILE_NM + '&V_FILE_IN_SYSTEM_NM=' + V_FILE_IN_SYSTEM_NM + '" width="1%" height="1%"></iframe>',
			width : 500,
			height : 500
		});
		myWin.show();
		myWin.hide();
	},
	
	/* [파일삭제] */
	fileDelBtnClick: function() {
    	var fileStore = Ext.getStore('FileStore');
    	var gridRecord = Ext.getCmp('fileGrid').getSelectionModel().getSelection();
    	
    	if(gridRecord.length > 0) {
    		Ext.MessageBox.confirm('확인', '삭제하시겠습니까?', function(btn) {
    			if(btn == 'yes') {
    				fileStore.sync({
    					params: {
    						V_TYPE: 'SYNC',
    						V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    						V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    					callback: function(records,operations,success){
    						
    						fileStore.load({
    							params : {
    								V_TYPE : 'S',
    								V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    								V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
    								V_ASN_NO: Ext.getCmp('u_asn_no').getValue(),
    							},
    							callback : function(records, operations, success) {
    								var filePreview = '';
    			   					for(var i=0; i<records.length; i++) {
    			   						filePreview += records[i].get('FILE_NM') + '<br>';
    			   					}
    			   					
    			   					var qText = '';
    			   					if(filePreview.length == 0) {
    			   						qText = '없음';
    			   					} else {
    			   						qText = filePreview;
    			   					}
    			   					
				                	Ext.tip.QuickTipManager.register({
				                          target: 'fileAddBtn', // Target button's ID
				                          title : '<span style=\'color:#9CFFFA\'>첨부파일현황</span>',  // QuickTip Header
				                          text  : qText,
				                          dismissDelay: 10000 // Hide after 10 seconds hover
				                    });
				                	
				                	Ext.getCmp('fileAddBtn').setText('첨부파일 [ ' + records.length + ' ]');
    							}
    						});
    						
							
						}
    				});
    			}
    		})
    	}
    	
    },

});