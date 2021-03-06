/*
 * File: app/controller/MyGridController.js
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

Ext.define('M_IMP_CHK_DN_TOT_HSPF.controller.MyGridController', {
	extend : 'Ext.app.Controller',

	control : {
		"#gridAddBtn" : {
			click : 'gridAddBtnClick'
		},
		"#gridDelBtn" : {
			click : 'gridDelBtnClick'
		},
		"#gridSaveBtn" : {
			click : 'gridSaveBtnClick'
		},
		"#gridFinishBtn" : {
			click : 'gridFinishBtnClick'
		},
		"#xlsxDown" : {
			click : 'xlsxDownClick'
		},
	},

	gridAddBtnClick : function(button, e, eOpts) {
		var popup = Ext.create("M_IMP_CHK_DN_TOT_HSPF.view.WinAddRow");
		popup.show();
		Ext.getCmp('rowCount').setValue(1);
	},

	gridDelBtnClick : function(button, e, eOpts) {
		var store = Ext.getStore('MyStore');
		var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
		var flag = 'T'
		var msg = '';
		
		store.each(function(rec,idx) {
    		if(rec.data.V_TYPE == 'I'){
    			flag = 'F';
    			msg = '저장되지 않은 정보가 존재합니다.<br>재조회 후 삭제하십시오.';
    			return;
    		}
		});
		
		if(flag == 'F'){
			Ext.Msg.alert('확인', msg);
			return;
		}
		
		for(var i=0; i<gridRecord.length; i++) {
			gridRecord[i].set('V_TYPE', 'D');
		}
		
		Ext.Msg.confirm('확인', '삭제하시겠습니까?', function(button) {
			if (button == 'yes') {
				store.sync({
					params : {
						V_TYPE : 'SYNC',
						V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
						V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
						V_YYYYMMDD: Ext.getCmp('V_YYYYMMDD').getValue(),
					},
					callback : function(records, operation, success) {
						store.reload();
					}, 
					success: function() {
					}
				});
			}
		});
	},

	gridSaveBtnClick : function(button, e, eOpts) {},
	
	gridFinishBtnClick : function(button, e, eOpts) {
		// 1영업일 전까지만 마감할 수 있도록 제한
		Ext.Ajax.request({
			url : 'sql/M_IMP_CHK_DN_TOT_HSPF.jsp',
			method : 'post',
			params : {
				V_TYPE : 'CHK_DATE',
				V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
				V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
				V_YYYYMMDD: Ext.getCmp('V_YYYYMMDD').getValue(),
			},
			success : function(response) {
				let diffDays = Number(response.responseText);
				if(diffDays > 1 || diffDays < 0){
					Ext.Msg.alert('확인', '일 마감은 하루 전까지 가능합니다.');
				} else {
					Ext.Msg.confirm('확인', '마감하시겠습니까?', function(button) {
						if (button == 'yes') {
							var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"Please wait..."});
							myMask.show();
							
							Ext.Ajax.request({
								url : 'sql/M_IMP_CHK_DN_TOT_HSPF.jsp',
								method : 'post',
								timeout : 180000,
								params : {
									V_TYPE : 'FNS',
									V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
									V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
									V_YYYYMMDD: Ext.getCmp('V_YYYYMMDD').getValue(),
								},
								success : function(response) {
									myMask.hide();
									
									Ext.toast({
										title : ' ',
										timeout : 1000,
										html : '완료',
										style : 'text-align: center',
										align : 't',
										width : 130,
									});
								}
							})
						}
					});
				}
			}
		})
		
	},
	
	xlsxDownClick : function(button, e, eOpts) {
		var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
		var grid = Ext.getCmp('myGrid');
		grid.saveDocumentAs({
			type : 'xlsx',
			title : '일별출고업로드', // 엑셀내타이틀
			fileName : currentDate + '.xlsx' // 엑셀파일이름
		});
	},

});
