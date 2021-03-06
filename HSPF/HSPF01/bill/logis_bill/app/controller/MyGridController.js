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

Ext.define('LOGIS_BILL.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    models: [
        'windowModel',
        'MyModel'
    ],
    stores: [
        'MyStore',
        'windowStore'
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
        "#ERPBtn": {
            click: 'ERPBtnClick'
        },
        "#V_HIDE_ERP": {
            change: 'onCheckboxfieldChange'
        },
        "#ERPCancelBtn": {
            click: 'ERPCancelBtnClick'
        },
        "#moveToChBtn": {
        	click: 'moveToChBtnClick'
        },
        "#W_moveToChBtn": {
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
                    title: '전자세금계산서', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },

    xmlDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xml',
                    title: '전자세금계산서', //엑셀내타이틀
                    fileName: currentDate+'.xml' //엑셀파일이름
        		});
    },

    onGridpanelCellDblClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {

        if(record.data['BL_YN'] == 'N'){
            Ext.Msg.alert('확인', 'ERP에 BL을 등록해주세요.');
        }
        else{
            var window = Ext.create('LOGIS_BILL.view.MyWindow');
            var myMask = new Ext.LoadMask(Ext.getCmp('myWindow') , {msg:"데이터 로딩 중"});

            window.show();
            myMask.show();

            Ext.Ajax.request({
                url:'sql/logis_bill.jsp',
                method: 'post',
                params: {
                    V_TYPE : 'POP',
                    V_XML_MSG_ID : record.data['XML_MSG_ID'],
                },
                success : function(response) {
                    var jResult = Ext.JSON.decode(response.responseText);
                    var result = jResult.resultList[0];
                    Ext.getCmp('W_RFF_VA').setValue({RFF_VA : result.RFF_VA});

                    Ext.getCmp('MGM_NUMBER').setValue(result.MGM_NUMBER);
                    Ext.getCmp('SERIAL_NUMBER').setValue(result.SERIAL_NUMBER);

                    //공급자
                    Ext.getCmp('SUPP_BUSINESS_LICENSE_NUMBER').setValue(result.SUPP_BUSINESS_LICENSE_NUMBER);
                    Ext.getCmp('SUPP_BUSINESS_NAME').setValue(result.SUPP_BUSINESS_NAME);
                    Ext.getCmp('SUPP_IND_TYPE').setValue(result.SUPP_IND_TYPE);
                    Ext.getCmp('SUPP_IND_CLASS').setValue(result.SUPP_IND_CLASS);
                    Ext.getCmp('SUPP_REPRESENTATIVE_NAME').setValue(result.SUPP_REPRESENTATIVE_NAME);
                    Ext.getCmp('SUPP_BUSINESS_ADDRESS').setValue(result.SUPP_BUSINESS_ADDRESS);
                    Ext.getCmp('SUPP_CODE').setValue(result.SUPP_CODE);

                    Ext.getCmp('SUPP_CHARGE_NAME').setValue(result.SUPP_CHARGE_NAME);
                    Ext.getCmp('SUPP_CHARGE_DEPT').setValue(result.SUPP_CHARGE_DEPT);
                    Ext.getCmp('SUPP_CHARGE_TEL').setValue(result.SUPP_CHARGE_TEL);
                    Ext.getCmp('SUPP_CHARGE_PHONE').setValue(result.SUPP_CHARGE_PHONE);
                    Ext.getCmp('SUPP_CHARGE_MAIL').setValue(result.SUPP_CHARGE_MAIL);
                    Ext.getCmp('SUPP_CHARGE_ID').setValue(result.SUPP_CHARGE_ID);

                    //공급받는자
                    Ext.getCmp('CUST_BUSINESS_LICENSE_NUMBER').setValue(result.CUST_BUSINESS_LICENSE_NUMBER);
                    Ext.getCmp('CUST_BUSINESS_NAME').setValue(result.CUST_BUSINESS_NAME);
                    Ext.getCmp('CUST_IND_TYPE').setValue(result.CUST_IND_TYPE);
                    Ext.getCmp('CUST_IND_CLASS').setValue(result.CUST_IND_CLASS);
                    Ext.getCmp('CUST_REPRESENTATIVE_NAME').setValue(result.CUST_REPRESENTATIVE_NAME);
                    Ext.getCmp('CUST_BUSINESS_ADDRESS').setValue(result.CUST_BUSINESS_ADDRESS);
                    Ext.getCmp('CUST_CODE').setValue(result.CUST_CODE);

                    Ext.getCmp('CUST_CHARGE_NAME1').setValue(result.CUST_CHARGE_NAME1);
                    Ext.getCmp('CUST_CHARGE_DEPT1').setValue(result.CUST_CHARGE_DEPT1);
                    Ext.getCmp('CUST_CHARGE_TEL1').setValue(result.CUST_CHARGE_TEL1);
                    Ext.getCmp('CUST_CHARGE_PHONE1').setValue(result.CUST_CHARGE_PHONE1);
                    Ext.getCmp('CUST_CHARGE_MAIL1').setValue(result.CUST_CHARGE_MAIL1);
                    Ext.getCmp('CUST_CHARGE_ID1').setValue(result.CUST_CHARGE_ID1);

                    Ext.getCmp('CUST_CHARGE_NAME2').setValue(result.CUST_CHARGE_NAME2);
                    Ext.getCmp('CUST_CHARGE_DEPT2').setValue(result.CUST_CHARGE_DEPT2);
                    Ext.getCmp('CUST_CHARGE_TEL2').setValue(result.CUST_CHARGE_TEL2);
                    Ext.getCmp('CUST_CHARGE_PHONE2').setValue(result.CUST_CHARGE_PHONE2);
                    Ext.getCmp('CUST_CHARGE_MAIL2').setValue(result.CUST_CHARGE_MAIL2);
                    Ext.getCmp('CUST_CHARGE_ID2').setValue(result.CUST_CHARGE_ID2);

                    Ext.getCmp('ISSUE_DATE').setValue(result.ISSUE_DATE);
                    Ext.getCmp('SUPPLY_AMOUNT').setValue(Ext.util.Format.number(result.SUPPLY_AMOUNT,'0,000'));
                    Ext.getCmp('TAX_AMOUNT').setValue(Ext.util.Format.number(result.TAX_AMOUNT,'0,000'));

                    Ext.getCmp('TRANSACTION_REFERENCE_NUMBER').setValue(result.TRANSACTION_REFERENCE_NUMBER);
                    Ext.getCmp('PAY_COSTS').setValue(Ext.util.Format.number(result.PAY_COSTS,'0,000'));

                    Ext.getCmp('TOTAL_SETTLEMENT_AMOUNT').setValue(Ext.util.Format.number(Number(result.SUPPLY_AMOUNT) + Number(result.TAX_AMOUNT) + Number(result.PAY_COSTS),'0,000'));

                    Ext.getCmp('READY_MONEY').setValue(Ext.util.Format.number(result.READY_MONEY,'0,000'));
                    Ext.getCmp('CHECK').setValue(Ext.util.Format.number(result.CHECK,'0,000'));
                    Ext.getCmp('BILL').setValue(Ext.util.Format.number(result.BILL,'0,000'));
                    Ext.getCmp('UNPAID_BALANCE').setValue(Ext.util.Format.number(result.UNPAID_BALANCE,'0,000'));

                    var total_amount = Number(result.READY_MONEY) + Number(result.CHECK) + Number(result.BILL) + Number(result.UNPAID_BALANCE);
                    Ext.getCmp('TOTAL_AMOUNT').setValue(Ext.util.Format.number(total_amount,'0,000'));

                    Ext.getCmp('W_RFF_CNO').setValue({RFF_CNO : result.RFF_CNO});

                    Ext.getCmp('ERP_SEND_YN').setValue(record.data['SEND_YN']);

                    Ext.getCmp('REMARK').setValue(result.REMARK);

                    myMask.hide();
                    myMask.destroy();

                },
                scope: this
            });


            var windowStore = Ext.getCmp('windowGrid').getStore();
            windowStore.load({
                params:{
                    V_TYPE : 'POP_GRID',
                    V_XML_MSG_ID : record.data['XML_MSG_ID'],
                },
                callback : function() {
                    var count = windowStore.getRange().length;
                    Ext.getCmp('RECORD_COUNT').setText(' 품목의 개수   총  ' + count + '   건');
                }
            });

            var fileStore = Ext.getCmp('fileGrid').getStore();
            fileStore.load({
                params:{
                    V_TYPE : 'FILE_GRID',
                    V_XML_MSG_ID : record.data['XML_MSG_ID'],
                }
            });

        }


    },

    ERPBtnClick: function(button, e, eOpts) {
        var grid = Ext.getCmp('myGrid');
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMyStoreStore();
        var myMask = new Ext.LoadMask(Ext.getCmp('myViewport') , {msg:"ERP 전송 중"});
        var flag = 'Y';
        var msg = '';
        if(record.length >= 1){
            for(var i = 0 ; i < record.length ; i ++){
                if(record[i].data['V_TYPE'] == 'V'){
                    record[i].set('V_TYPE', 'ERP');
                }
                if(record[i].data['SEND_YN'] == 'Y'){
                    flag = 'N';
                    msg += 'ERP 전송 완료된 항목이 존재합니다.(' + record[i].data['REF_NO'] + ')<br>';
                }
                else if (record[i].data['BL_YN'] == 'N'){
                    flag = 'N';
                    msg += 'ERP에 BL이 없는 항목이 존재합니다.(' + record[i].data['REF_NO'] + ')<br>';
                }

            }
            if(flag == 'Y'){
                Ext.Msg.confirm('확인','ERP 전송 하시겠습니까?', function(button){
                    if(button == 'yes') {
                        myMask.show();
                        store.sync({
                            params:{
                                V_TYPE : 'SYNC',
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            },
                            callback: function(batch, options){
                                store.reload();
                                Ext.getCmp('S_ERP_LC_NO2').setValue(record[0].data['LC_NO2']);
                                Ext.getCmp('S_ERP_BL_NO2').setValue(record[0].data['BL_NO2']);
                                Ext.getCmp('S_ERP_BL_SEQ').setValue(record[0].data['BL_SEQ']);
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

    onCheckboxfieldChange: function(field, newValue, oldValue, eOpts) {
        var TbButtonContorller = this.getController('TbButtonController');
        TbButtonContorller.selBtnClick();
    },

    ERPCancelBtnClick: function(button, e, eOpts) {
        var grid = Ext.getCmp('myGrid');
        var record = grid.getSelectionModel().getSelection();
        var store = this.getMyStoreStore();
        var myMask = new Ext.LoadMask(Ext.getCmp('myViewport') , {msg:"ERP 취소 중"});
        if(record.length >=1){
            var flag = 'Y';
            var msg = '';
            for(var i = 0 ; i < record.length ; i ++){
                if(record[i].data['SEND_YN'] == 'N'){
                    flag = 'N';
                    msg += record[i].data['SERIAL_NUMBER'] + '는 ERP전송된 항목이 아닙니다.<br>';
                }
                if(record[i].data['V_TYPE'] == 'V'){
                    record[i].set('V_TYPE', 'ERPCancel');
                }
            }
            if(flag == 'Y'){
                Ext.Msg.confirm('확인','ERP 전송 취소 하시겠습니까?', function(button){
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
            Ext.Msg.alert('확인','항목을 선택해주세요.');
        }
    },
    
    moveToChBtnClick: function(button, e, eOpts) {
    	var grid = Ext.getCmp('myGrid');
    	var record = grid.getSelectionModel().getSelection();
    	var STEP = '';
    	var BAS_NO = '';
        var BAS_DOC_NO = '';
    	if(record[0].data['BL_SEQ'] == 'FIRST'){
    		STEP = 'VL';
    		BAS_NO = record[0].data['LC_NO2'];
    		BAS_DOC_NO = record[0].data['REF_NO2']; 
    	}
    	else{
    		STEP = 'VB';
    		BAS_NO = record[0].data['BL_NO2'];
    		BAS_DOC_NO =  record[0].data['REF_NO']; 
    	}
    	
    	console.log(BAS_NO);
    	console.log(BAS_DOC_NO);
    	
    	var dynamicTab={
				xtype:'panel',
				title : '부대경비등록',
				autoScroll: true,
				html : '<iframe name="xxx" border =0 src="/HSPF01/TOT/ch/m_charge_tot_hspf/M_CHARGE_TOT_HSPF.jsp?S_TYPE=AUTO&STEP=' + STEP +'&BAS_NO=' + BAS_NO + '&BAS_DOC_NO='+ BAS_DOC_NO + '"  width="100%" height="100%"></iframe>',				closable : true,
		};
		parent.Ext.getCmp('myTab').add(dynamicTab).show();
    }

});
