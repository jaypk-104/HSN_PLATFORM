/*
 * File: app/controller/TbButtonController.js
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

Ext.define('M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'FileStore'
    ],

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
        },
        "#cleanBtn": {
            click: 'cleanBtnClick'
        },
        "#reCalBtn": {
            click: 'reCalBtnClick'
        }
    },

    selBtnClick: function(button, e, eOpts) {
        //alert('select');
        if(Ext.getCmp('V_M_CHARGE_NO').getValue() == '' || Ext.getCmp('V_M_CHARGE_NO').getValue() == null || Ext.getCmp('V_M_CHARGE_NO').getValue() == undefined){
            Ext.Msg.alert('확인','조회할 경비마스터번호를 입력해주세요.');
        }
        else{
            var store = this.getMyStoreStore();
            var fileStore = this.getFileStoreStore();
            store.removeAll();

            store.load({
                params: {
                    V_TYPE: 'GRID_S',
                    V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                    V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                    V_M_CHARGE_NO : Ext.getCmp('V_M_CHARGE_NO').getValue()
                },
                callback: function(records,operations,success){
                    Ext.Ajax.request({
                        url:'sql/duty_charge_out_distr.jsp',
                        method: 'post',
                        params: {
                            V_TYPE: 'GRID',
                            V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                            V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                        },
                        success : function(response) {
                            var jResult = Ext.JSON.decode(response.responseText);
                            var resultList = jResult.resultList;

                            for(var i = 0 ; i < resultList.length ; i++){
                                if(store.findRecord('CHARGE_TYPE', resultList[i].CHARGE_TYPE) == null){
                                    store.add(resultList[i]);
                                }
                            }
                        },
                        scope: this
                    });
                }
            });

            fileStore.load({
                params:{
                    V_TYPE : 'S',
                    V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                    V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                    V_M_CHARGE_NO : Ext.getCmp('V_M_CHARGE_NO').getValue()
                }
            });


            Ext.Ajax.request({
                url:'sql/duty_charge_out_distr.jsp',
                method: 'post',
                params: {
                    V_TYPE: 'HS',
                    V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                    V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                    V_M_CHARGE_NO : Ext.getCmp('V_M_CHARGE_NO').getValue()
                },
                success : function(response) {
                    var jResult = Ext.JSON.decode(response.responseText);
                    var resultList = jResult.resultList[0];

                    Ext.getCmp('V_M_CHARGE_NO').setValue(resultList.M_CHARGE_NO);
                    Ext.getCmp('V_VESSEL_NM').setValue(resultList.VESSEL_NM);
                    Ext.getCmp('V_IN_DT').setValue(resultList.IN_DT);
                    Ext.getCmp('V_ITEM_NM').setValue(resultList.ITEM_NM);
                    Ext.getCmp('V_QTY').setValue(resultList.QTY);
                    Ext.getCmp('V_BL_DOC_NO').setValue(resultList.BL_DOC_NO);
                    Ext.getCmp('V_TEMP_SL_NM').setValue(resultList.TEMP_SL_NM);
                    Ext.getCmp('V_IN_NO').setValue(resultList.IN_NO);
                    Ext.getCmp('V_TAX_DT').setValue(resultList.TAX_DT);
                    Ext.getCmp('V_ACCEPT_DT').setValue(resultList.ACCEPT_DT);
                    Ext.getCmp('V_TOTAL_AMT').setValue(resultList.TOTAL_AMT);


                },
                scope: this
            });




        }

    },

    saveBtnClick: function(button, e, eOpts) {
        //alert('save');
        var store = Ext.getCmp('myGrid').getStore();
        var fileStore = Ext.getCmp('fileGrid').getStore();
        var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
        var storeRecord = store.getRange();
        var fileRecord = fileStore.getRange();
        var myMask = new Ext.LoadMask(Ext.getCmp('myViewport') , {msg:"저장중"});

        var flag = 0;  //0이면 정상 진행, 1이면 뭔가 걸리는게있는것.
        var msg = '';

        for (var i = 0 ; i < storeRecord.length ; i ++){
            if(storeRecord[i].crudState == 'U'){
                if((storeRecord[i].data['M_BP_CD'] == '' || storeRecord[i].data['M_BP_CD'] == null || storeRecord[i].data['M_BP_CD'] == undefined) &&
                      (storeRecord[i].data['REG_NO'] == '' || storeRecord[i].data['REG_NO'] == null || storeRecord[i].data['REG_NO'] == undefined) &&
                      (storeRecord[i].data['CHARGE_AMT'] == 0)){
                    storeRecord[i].crudState = 'C';
                    storeRecord[i].crudStateWas = 'C';
                    storeRecord[i].dirty = false;

                    //수정한거 없는거는 싱크 안타게 할려고.
                }
                else{
                    var controller = this.getController('MyController');
                    var serverTime = controller.getServerTime();
                    var nows = new Date(serverTime);
                    var lastMonthStart = new Date(nows);
                    var lastMonthEnd = new Date(nows);
                    var chargeDate = storeRecord[i].data['CHARGE_DT'];

                    lastMonthStart.setMonth(lastMonthStart.getMonth() - 1);
                    lastMonthStart.setDate(1);
                    lastMonthEnd.setMonth(lastMonthEnd.getMonth());
                    lastMonthEnd.setDate(0);

                    if(chargeDate <= lastMonthStart){
                        //Ext.Msg.alert('확인', '날짜는 지난달 까지만 설정 가능합니다.');
                        flag = 1;
                        msg = '비용발생일은 지난달 까지만 설정 가능합니다.';
                    }
                    else if (nows.getDate() < 10 && chargeDate < lastMonthEnd ){
                        //Ext.Msg.alert('확인', '비용발생일이 지난달입니다. 주의바랍니다.');
                    }
                    else if (nows.getDate() >= 10 && chargeDate < lastMonthEnd ){
                        //Ext.Msg.alert('확인', '비용발생일을 이번달로 설정해주세요.');
                        flag = 1;
                        msg = '비용발생일을 이번달로 설정해주세요.';
                    }
                }

                if(storeRecord[i].crudState == 'U' && storeRecord[i].data['CHARGE_AMT'] >= 1 ){

                    if(storeRecord[i].data['M_BP_CD'] == '' ){
                        flag = 1;
                        msg = storeRecord[i].data['CHARGE_NAME'] + '의 비용발생처를 입력해주세요.';
                        break;
                    }
                    if(storeRecord[i].data['VAT_TYPE'] == ''){
                        flag = 1;
                        msg = storeRecord[i].data['CHARGE_NAME'] + '의 부가세유형을 입력해주세요.';
                        break;
                    }
                }
            }
        }

        /*
        if(Ext.getCmp('V_VESSEL_NM').getValue() == '' || Ext.getCmp('V_VESSEL_NM').getValue() == null || Ext.getCmp('V_VESSEL_NM').getValue() == undefined){
            flag = 1;
            msg = '선명을 입력해주세요.';
            Ext.getCmp('V_VESSEL_NM').focus();
        }
        else if(Ext.getCmp('V_IN_DT').getValue() == '' || Ext.getCmp('V_IN_DT').getValue() == null || Ext.getCmp('V_IN_DT').getValue() == undefined){
            flag = 1;
            msg = '입항일을 입력해주세요.';
            Ext.getCmp('V_IN_DT').focus();
        }
        else if (Ext.getCmp('V_IN_DT').wasValid == false){
            flag = 1;
            msg = '입항일을 다음과 같은 형식으로 입력해주세요.<br> 2019-01-01';
            Ext.getCmp('V_IN_DT').focus();
        }
        else if(Ext.getCmp('V_ITEM_NM').getValue() == '' || Ext.getCmp('V_ITEM_NM').getValue() == null || Ext.getCmp('V_ITEM_NM').getValue() == undefined){
            flag = 1;
            msg = '품명을 입력해주세요.';
            Ext.getCmp('V_ITEM_NM').focus();
        }
        else if(Ext.getCmp('V_QTY').getValue() == '' || Ext.getCmp('V_QTY').getValue() == null || Ext.getCmp('V_QTY').getValue() == undefined){
            flag = 1;
            msg = '수량을 입력해주세요.';
            Ext.getCmp('V_QTY').focus();
        }
        */
        if(Ext.getCmp('V_BL_DOC_NO').getValue() == '' || Ext.getCmp('V_BL_DOC_NO').getValue() == null || Ext.getCmp('V_BL_DOC_NO').getValue() == undefined){
            flag = 1;
            msg = 'BL번호를 입력해주세요.';
            Ext.getCmp('V_BL_DOC_NO').focus();
        }
        /*
        else if(Ext.getCmp('V_TEMP_SL_NM').getValue() == '' || Ext.getCmp('V_TEMP_SL_NM').getValue() == null || Ext.getCmp('V_TEMP_SL_NM').getValue() == undefined){
            flag = 1;
            msg = '장치장을 입력해주세요.';
            Ext.getCmp('V_TEMP_SL_NM').focus();
        }
        */
        else if(Ext.getCmp('V_IN_NO').getValue() == '' || Ext.getCmp('V_IN_NO').getValue() == null || Ext.getCmp('V_IN_NO').getValue() == undefined){
            flag = 1;
            msg = '신고번호를 입력해주세요.';
            Ext.getCmp('V_IN_NO').focus();
        }

        else if(Ext.getCmp('V_TAX_DT').getValue() == '' || Ext.getCmp('V_TAX_DT').getValue() == null || Ext.getCmp('V_TAX_DT').getValue() == undefined){
            flag = 1;
            msg = '신고일자를 입력해주세요.';
            Ext.getCmp('V_TAX_DT').focus();
        }
        else if (Ext.getCmp('V_TAX_DT').wasValid == false){
            flag = 1;
            msg = '신고일자를 다음과 같은 형식으로 입력해주세요.<br> 2019-01-01';
            Ext.getCmp('V_TAX_DT').focus();
        }
        else if(fileStore.getRange().length == 0){
            flag = 1;
            msg = '첨부파일을 넣어주세요.';
        }

        /*
        else if(Ext.getCmp('V_ACCEPT_DT').getValue() == '' || Ext.getCmp('V_ACCEPT_DT').getValue() == null || Ext.getCmp('V_ACCEPT_DT').getValue() == undefined){
            flag = 1;
            msg = '수리일자를 입력해주세요.';
            Ext.getCmp('V_ACCEPT_DT').focus();
        }
        else if (Ext.getCmp('V_ACCEPT_DT').wasValid == false){
            flag = 1;
            msg = '수리일을 다음과 같은 형식으로 입력해주세요.<br> 2019-01-01';
            Ext.getCmp('V_ACCEPT_DT').focus();
        }
        */
        var record = store.getRange();
        for(var i = 0 ; i < record.length ; i ++){
            record[i].phantom = false; //  업데이트 한거만 저장하기 위해. phantom이 true이면 sync 돌더라....
        }

        for(var i = 0 ; i < fileRecord.length ; i ++){
            if(fileRecord[i].phantom == true){
                fileRecord[i].set('V_TYPE', 'I');
            }
        }

        if(flag == 0){
            Ext.Msg.confirm('확인', '저장 하시겠습니까?', function(btn) {
                if (btn == 'yes') {
                    myMask.show();
                    if(Ext.getCmp('V_M_CHARGE_NO').getValue() == '' ||
                       Ext.getCmp('V_M_CHARGE_NO').getValue() == null ||
                       Ext.getCmp('V_M_CHARGE_NO').getValue() == undefined ){

                        Ext.Ajax.request({
                            url:'sql/duty_charge_out_distr.jsp',
                            method: 'post',
                            params: {
                                V_TYPE : 'NEW',
                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            },
                            success : function(response) {
                                var jResult = Ext.JSON.decode(response.responseText);
                                var resultList = jResult.resultList[0];

                                Ext.getCmp('V_M_CHARGE_NO').setValue(resultList.NEW_M_CHARGE_NO);

                                Ext.Ajax.request({
                                    url:'sql/duty_charge_out_distr.jsp',
                                    method: 'post',
                                    params: {
                                        V_TYPE : 'HU',
                                        V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                        V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),

                                        V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                        V_VESSEL_NM: Ext.getCmp('V_VESSEL_NM').getValue(),
                                        V_IN_DT: Ext.getCmp('V_IN_DT').getValue(),
                                        V_ITEM_NM: Ext.getCmp('V_ITEM_NM').getValue(),
                                        V_QTY: Ext.getCmp('V_QTY').getValue(),
                                        V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
                                        V_TEMP_SL_NM: Ext.getCmp('V_TEMP_SL_NM').getValue(),
                                        V_IN_NO: Ext.getCmp('V_IN_NO').getValue(),
                                        V_TAX_DT: Ext.getCmp('V_TAX_DT').getValue(),
                                        V_ACCEPT_DT: Ext.getCmp('V_ACCEPT_DT').getValue(),
                                        V_TOTAL_AMT : Ext.getCmp('V_TOTAL_AMT').getValue()


                                    },
                                    success : function(){
                                        myMask.hide();
                                        Ext.Msg.alert('확인','저장완료.');
                                    }
                                });


                                store.sync({
                                    params: {
                                        V_TYPE : 'DU',
                                        V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                        V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                        V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                    },
                                    callback: function(records, operation, success) {
                                        store.commitChanges();
                                        store.load({
                                            params: {
                                                V_TYPE: 'GRID_S',
                                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                                V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                                V_M_CHARGE_NO : Ext.getCmp('V_M_CHARGE_NO').getValue()
                                            },
                                            callback: function(records,operations,success){
                                                Ext.Ajax.request({
                                                    url:'sql/duty_charge_out_distr.jsp',
                                                    method: 'post',
                                                    params: {
                                                        V_TYPE: 'GRID',
                                                        V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                                        V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                                    },
                                                    success : function(response) {
                                                        var jResult = Ext.JSON.decode(response.responseText);
                                                        var resultList = jResult.resultList;

                                                        for(var i = 0 ; i < resultList.length ; i++){
                                                            if(store.findRecord('CHARGE_TYPE', resultList[i].CHARGE_TYPE) == null){
                                                                store.add(resultList[i]);
                                                            }
                                                        }
                                                    },
                                                    scope: this
                                                });
                                            }
                                        });
                                        myMask.hide();
                                        Ext.Msg.alert('확인','저장완료.');
                                    }
                                });

                                fileStore.sync({
                                    params:{
                                        V_TYPE : 'SYNC',
                                        V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                        V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                        V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                    },
                                     callback: function(records, operation, success) {
                                        fileStore.load({
                                            params:{
                                                V_TYPE : 'S',
                                                V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                            }
                                        });
                                    }
                                });


                                myMask.hide();

                            },

                        });
                    }
                    else{
                        Ext.Ajax.request({
                            url:'sql/duty_charge_out_distr.jsp',
                            method: 'post',
                            params: {
                                V_TYPE : 'HU',
                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),

                                V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                V_VESSEL_NM: Ext.getCmp('V_VESSEL_NM').getValue(),
                                V_IN_DT: Ext.getCmp('V_IN_DT').getValue(),
                                V_ITEM_NM: Ext.getCmp('V_ITEM_NM').getValue(),
                                V_QTY: Ext.getCmp('V_QTY').getValue(),
                                V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
                                V_TEMP_SL_NM: Ext.getCmp('V_TEMP_SL_NM').getValue(),
                                V_IN_NO: Ext.getCmp('V_IN_NO').getValue(),
                                V_TAX_DT: Ext.getCmp('V_TAX_DT').getValue(),
                                V_ACCEPT_DT: Ext.getCmp('V_ACCEPT_DT').getValue(),
                                V_TOTAL_AMT : Ext.getCmp('V_TOTAL_AMT').getValue()
                            },
                            success : function(){
                                myMask.hide();
                                Ext.Msg.alert('확인','저장완료.');
                            }
                        });

                        store.sync({
                            params: {
                                V_TYPE : 'DU',
                                V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                            },
                            callback: function(records, operation, success) {
                                store.commitChanges();
                                store.load({
                                    params: {
                                        V_TYPE: 'GRID_S',
                                        V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                        V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                        V_M_CHARGE_NO : Ext.getCmp('V_M_CHARGE_NO').getValue()
                                    },
                                    callback: function(records,operations,success){
                                        Ext.Ajax.request({
                                            url:'sql/duty_charge_out_distr.jsp',
                                            method: 'post',
                                            params: {
                                                V_TYPE: 'GRID',
                                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                                V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                            },
                                            success : function(response) {
                                                var jResult = Ext.JSON.decode(response.responseText);
                                                var resultList = jResult.resultList;

                                                for(var i = 0 ; i < resultList.length ; i++){
                                                    if(store.findRecord('CHARGE_TYPE', resultList[i].CHARGE_TYPE) == null){
                                                        store.add(resultList[i]);
                                                    }
                                                }
                                            },
                                            scope: this
                                        });
                                    }
                                });
                                myMask.hide();
                                Ext.Msg.alert('확인','저장완료.');
                            }
                        });

                        fileStore.sync({
                            params:{
                                V_TYPE : 'SYNC',
                                V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                            },
                            callback: function(records, operation, success) {
                                fileStore.load({
                                    params:{
                                        V_TYPE : 'S',
                                        V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                                        V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                        V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                        V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),
                                    }
                                });
                            }
                        });

                    }



                }
            });
        }
        else{
            Ext.Msg.alert('확인', msg);
            myMask.hide();
        }

    },

    delBtnClick: function(button, e, eOpts) {
        alert('delete');
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
    },

    cleanBtnClick: function(button, e, eOpts) {
        Ext.MessageBox.confirm('확인', '저장하지 않은 내용은 사라집니다.<br>새문서로 이동 하시겠습니까?', function(btn) {
            if(btn == 'yes') {
                var tab=parent.Ext.getCmp('myTab');
                var activeTab=tab.getActiveTab();
                var tabIndex=tab.items.indexOf(activeTab);


                var dynamicTab={
                    xtype:'panel',
                    title : '관세경비등록',
                    //autoScroll: true,
                    html : '<iframe name="xxx" border =0 src="/HSPF01/HSPF02/gyeonggi/duty_charge_out_distr_gyeonggi/DUTY_CHARGE_OUT_DISTR_GYEONGGI.jsp" width="100%" height="100%"></iframe>',
                    closable : true
                };
                //activeTab.hide();
                tab.add(dynamicTab).show();

                //tab.remove(tabIndex,true);

            }
        });
    },

    reCalBtnClick: function(button, e, eOpts) {
        var myController = this.getController('MyController');
        myController.loadTotalAMT();
    }

});
