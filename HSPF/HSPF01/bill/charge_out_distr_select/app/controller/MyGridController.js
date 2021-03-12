/*
 * File: app/controller/MyGridController.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
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

Ext.define('CHARGE_OUT_DISTR_SELECT.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'WindowStore',
        'FileStore'
    ],

    control: {
        "#gridAddBtn": {
            click: 'gridAddBtnClick'
        },
        "#gridDelBtn": {
            click: 'gridDelBtnClick'
        },
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
        "#xmlDown": {
            click: 'xmlDownClick'
        },
        "#myGrid": {
            celldblclick: 'onGridpanelCellDblClick'
        },
        "#payProcessBtn": {
            click: 'payProcessBtnClick'
        },
        "#ERPSendBtn": {
            click: 'ERPSendBtnClick'
        },
        "#ERPSendCancelBtn": {
            click: 'ERPSendCancelBtnClick'
        },
        "#moveToChBtn": {
        	click: 'moveToChBtnClick'
        }
    },

    gridAddBtnClick: function(button, e, eOpts) {
        //var popup = Ext.create("B_COMP_HSPF.view.WinAddRow");
        //popup.show();
        //Ext.getCmp('rowCount').setValue(1);
    },

    gridDelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
            	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

            	if(gridRecord.length > 0) {
            		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
            			if(button == 'yes') {
            				for(var i=0; i<gridRecord.length; i++) {
            		    		if(gridRecord[i].data['V_TYPE']=='V') {
            		    			gridRecord[i].data['V_TYPE'] = 'D';
            		    		}
            		    	}
            		    	store.sync({
            					params: {
            						V_USR_ID : 'admin',//parent.Ext.getCmp('GUSER_ID').getValue(),
            					},
            		    		callback: function(records, operation, success) {
            		    			store.reload();
            					}
            		    	});
            			}
            		});
            	}
    },

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    xmlDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xml',
                    title: 'test', //엑셀내타이틀
                    fileName: currentDate+'.xml' //엑셀파일이름
        		});
    },

    onGridpanelCellDblClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var popup = Ext.create('CHARGE_OUT_DISTR_SELECT.view.MyWindow');



        //윈도우 사이즈
        //꽉채우기
        popup.setWidth(Ext.getBody().getViewSize().width);
        popup.setHeight(Ext.getBody().getViewSize().height);

        if(parent.Ext.getCmp('GBP_CD').getValue() == '00000'){
            Ext.getCmp('W_ERPSendBtn').show();
        }
        else{
            Ext.getCmp('W_ERPSendBtn').hide();
        }

        if(record.data['ERP_YN'] == 'Y'){
            Ext.getCmp('W_ERPSendBtn').setDisabled(true);
        }
        else{
            Ext.getCmp('W_ERPSendBtn').setDisabled(false);
        }

        popup.show();


        Ext.suspendLayouts(); // 레이아웃 동작 일시중지



        // 좌측 정보 로드
        Ext.Ajax.request({
        	url:'sql/charge_out_distr_select.jsp',
        	method: 'post',
        	params: {
        		V_TYPE: 'WS', //생성
        		V_M_CHARGE_NO : record.data['M_CHARGE_NO'],
        	},

            success : function(response) {
                var jsonResult = Ext.JSON.decode(response.responseText).resultList[0];

                Ext.getCmp('W_M_CHARGE_NO').setValue(jsonResult.W_M_CHARGE_NO);
                Ext.getCmp('W_BASE_DT').setValue(jsonResult.W_BASE_DT);
                //Ext.getCmp('W_BP_CD').setValue(jsonResult.W_BP_CD);
                //Ext.getCmp('W_VESSEL_NM').setValue(jsonResult.W_VESSEL_NM);
                //Ext.getCmp('W_ITEM_NM').setValue(jsonResult.W_ITEM_NM);
                //Ext.getCmp('W_TAX_DT').setValue(jsonResult.W_TAX_DT);
                //Ext.getCmp('W_IN_DT').setValue(jsonResult.W_IN_DT);
                //Ext.getCmp('W_QTY').setValue(jsonResult.W_QTY);
                //Ext.getCmp('W_IN_NO').setValue(jsonResult.W_IN_NO);
                Ext.getCmp('W_BL_DOC_NO').setValue(jsonResult.W_BL_DOC_NO);
                //Ext.getCmp('W_ISSUE_AMT').setValue(jsonResult.W_ISSUE_AMT);
                //Ext.getCmp('W_ID_DT').setValue(jsonResult.W_ID_DT);
                //Ext.getCmp('W_IN_NM').setValue(jsonResult.W_IN_NM);
                //Ext.getCmp('W_CK_AMT').setValue(jsonResult.W_CK_AMT);
                //Ext.getCmp('W_AV_NM').setValue(jsonResult.W_AV_NM);
                //Ext.getCmp('W_AV_DT').setValue(jsonResult.W_AV_DT);
                //Ext.getCmp('W_TR_AMT').setValue(jsonResult.W_TR_AMT);
                //Ext.getCmp('W_JD_AMT').setValue(jsonResult.W_JD_AMT);
                //Ext.getCmp('W_JD_RM_AMT').setValue(jsonResult.W_JD_RM_AMT);
                //Ext.getCmp('W_REF_CHARGE_NO').setValue(jsonResult.W_REF_CHARGE_NO);
                //Ext.getCmp('W_IN_TOT_AMT').setValue(jsonResult.W_IN_TOT_AMT);
                //Ext.getCmp('W_SD_AMT').setValue(jsonResult.W_SD_AMT);
                //Ext.getCmp('W_RM_AMT').setValue(jsonResult.W_RM_AMT);

                Ext.getCmp('W_RK_AMT').setValue(Ext.util.Format.number(Number(jsonResult.W_RK_AMT), '0,000'));
                //Ext.getCmp('W_SHIP_NM').setValue(jsonResult.W_SHIP_NM);
                //Ext.getCmp('W_ERP_YN').setValue(jsonResult.W_ERP_YN);

                Ext.getCmp('W_LC_NO').setValue(record.data['LC_NO']);
                Ext.getCmp('W_BL_NO').setValue(record.data['BL_NO']);
                Ext.getCmp('W_BL_SEQ').setValue(record.data['BL_SEQ']);

                Ext.resumeLayouts(true); // 레이아웃 동작 재개



            },
        	scope: this
        });



        // 우측 그리드 정보 로드
        Ext.suspendLayouts(); // 레이아웃 동작 일시중지
        var winStore = this.getWindowStoreStore();
        winStore.load({
            params: {
                V_TYPE : 'W_GRID',
                V_M_CHARGE_NO : record.data['M_CHARGE_NO'],
            },
            callback : function() {
                Ext.resumeLayouts(true); // 레이아웃 동작 재개
            }
        });

        //첨부파일 로드
        var fileStore = this.getFileStoreStore();
        fileStore.load({
            params:{
                V_TYPE : 'S',
                V_M_CHARGE_NO : record.data['M_CHARGE_NO'],
            }
        });

    },

    payProcessBtnClick: function(button, e, eOpts) {
        var grid = Ext.getCmp('myGrid');
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMyStoreStore();
        var myMask = new Ext.LoadMask(Ext.getCmp('myViewport') , {msg:"처리 중"});
        var flag = 'Y';
        var msg = '';

        if(record.length >= 1){
            for(var i = 0 ; i < record.length ; i ++){
                if(record[i].data['V_TYPE'] == 'V'){
                    record[i].set('V_TYPE', 'PAY');
                }
                if(record[i].data['PAY_YN'] == 'Y'){
                    flag = 'N';
                    msg += '지급 완료된 항목이 존재합니다.(' + record[i].data['M_CHARGE_NO'] + ')<br>';
                }
            }
            if(flag == 'Y'){
                Ext.Msg.confirm('확인','지급 완료 처리 하시겠습니까?', function(button){
                    if(button == 'yes') {
                        myMask.show();
                        store.sync({
                            params:{
                                V_TYPE : 'SYNC',
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            },
                            callback: function(batch, options){
                                store.reload();
                                myMask.hide();

                            },
                            success: function(batch, options){

                            },
                            failure: function(batch, options){

                            },
                            scope : this
                        });

                    }
                });
            }
            else{
                Ext.Msg.alert('확인', msg);
            }

        }
        else{
            Ext.Msg.alert('확인', '항목을 선택해주세요.');
        }
    },

    ERPSendBtnClick: function(button, e, eOpts) {
        var grid = Ext.getCmp('myGrid');
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMyStoreStore();
        var myMask = new Ext.LoadMask(Ext.getCmp('myViewport') , {msg:"플랫폼 전송 중"});
        var flag = 'Y';
        var msg = '';

        if(record.length >= 1){
            for(var i = 0 ; i < record.length ; i ++){
                if(record[i].data['V_TYPE'] == 'V'){
                    record[i].set('V_TYPE', 'ERP');
                }
                if(record[i].data['ERP_YN'] == 'Y'){
                    flag = 'N';
                    msg += '플랫폼 전송 완료된 항목이 존재합니다.(' + record[i].data['M_CHARGE_NO'] + ')<br>';
                }
                if(record[i].data['BL_NO'] == null){
                    flag = 'N';
                    msg += '시스템에 등록되지 않은 BL이 존재합니다.(' + record[i].data['M_CHARGE_NO'] + ')<br>';
                }
            }
            if(flag == 'Y'){
                Ext.Msg.confirm('확인','플랫폼 전송 하시겠습니까?', function(button){
                    if(button == 'yes') {
                        myMask.show();
                        store.sync({
                            params:{
                                V_TYPE : 'SYNC',
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            },
                            callback: function(batch, options){
                                Ext.getCmp('S_ERP_LC_NO').setValue(record[0].data['LC_NO']);
                                Ext.getCmp('S_ERP_BL_NO').setValue(record[0].data['BL_NO']);
                                Ext.getCmp('S_ERP_BL_SEQ').setValue(record[0].data['BL_SEQ']);
                                store.reload();
                                myMask.hide();

                            },
                            success: function(batch, options){

                            },
                            failure: function(batch, options){

                            },
                            scope : this
                        });

                    }
                });
            }
            else{
                Ext.Msg.alert('확인', msg);
            }

        }
        else{
            Ext.Msg.alert('확인', '항목을 선택해주세요.');
        }
    },

    ERPSendCancelBtnClick: function(button, e, eOpts) {
        var grid = Ext.getCmp('myGrid');
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMyStoreStore();
        var myMask = new Ext.LoadMask(Ext.getCmp('myViewport') , {msg:"플랫폼 전송 중"});
        var flag = 'Y';
        var msg = '';

        if(record.length >= 1){
            for(var i = 0 ; i < record.length ; i ++){
                if(record[i].data['V_TYPE'] == 'V'){
                    record[i].set('V_TYPE', 'ERPCancel');
                }
                if(record[i].data['ERP_YN'] == 'N'){
                    flag = 'N';
                    msg += '플랫폼 전송 안된 항목이 존재합니다.(' + record[i].data['M_CHARGE_NO'] + ')<br>';
                }
            }
            if(flag == 'Y'){
                Ext.Msg.confirm('확인','플랫폼 전송 취소 하시겠습니까?', function(button){
                    if(button == 'yes') {
                        myMask.show();
                        store.sync({
                            params:{
                                V_TYPE : 'SYNC',
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            },
                            callback: function(batch, options){
                                store.reload();
                                myMask.hide();

                            },
                            success: function(batch, options){

                            },
                            failure: function(batch, options){

                            },
                            scope : this
                        });

                    }
                });
            }
            else{
                Ext.Msg.alert('확인', msg);
            }

        }
        else{
            Ext.Msg.alert('확인', '항목을 선택해주세요.');
        }
    },
    moveToChBtnClick: function(button, e, eOpts) {
    	var grid = Ext.getCmp('myGrid');
    	var record = grid.getSelectionModel().getSelection();
    	var STEP = '';
    	var BAS_NO = '';
    	if(record[0].data['BL_SEQ'] == 'FIRST'){
    		STEP = 'VL';
    		BAS_NO = record[0].data['LC_NO'];
    	}
    	else{
    		STEP = 'VB';
    		BAS_NO = record[0].data['BL_NO'];
    	}
    	
    	var dynamicTab={
				xtype:'panel',
				title : '부대경비등록',
				autoScroll: true,
				html : '<iframe name="xxx" border =0 src="/HSPF01/TOT/ch/m_charge_tot_hspf/M_CHARGE_TOT_HSPF.jsp?S_TYPE=AUTO&STEP=' + STEP +'&BAS_NO=' + BAS_NO + '" width="100%" height="100%"></iframe>',
				closable : true,
		};
		parent.Ext.getCmp('myTab').add(dynamicTab).show();
    },

});
