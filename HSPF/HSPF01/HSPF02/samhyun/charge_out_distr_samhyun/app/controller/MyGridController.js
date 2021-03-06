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

Ext.define('M_CHARGE_OUT_DISTR_SAMHYUN.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'BPStore'
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
        "#changeChargeBtn": {
            click: 'changeChargeBtnClick'
        }
    },

    gridAddBtnClick: function(button, e, eOpts) {
        var popup = Ext.create("M_CHARGE_OUT_DISTR_SAMHYUN.view.WinAddRow");
        var chargeStore = Ext.getCmp('W_D_grid').getStore();
        chargeStore.removeAll();
        popup.show();

        chargeStore.load({
            params:{
                V_TYPE : 'W_D_S',
                V_CHARGE_NM : Ext.getCmp('W_D_CHARGE_NM').getValue(),
            }
        });
    },

    gridDelBtnClick: function(button, e, eOpts) {

        var myController = this.getController('MyController');


        var store = Ext.getStore('MyStore');
        var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();

        if(gridRecord.length > 0) {
            Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
                if(button == 'yes') {
                    for(var i=0; i<gridRecord.length; i++) {
                        if(gridRecord[i].data['V_TYPE']=='V') {
                            gridRecord[i].data['V_TYPE'] = 'DD';
                            gridRecord[i].set('REG_NO','');
                            gridRecord[i].set('M_BP_CD','');
                            gridRecord[i].set('VAT_CD','');
                            gridRecord[i].set('CHARGE_DT','');
                            gridRecord[i].set('CHARGE_AMT',0);
                            gridRecord[i].set('VAT_AMT',0);


                        }
                    }

                    store.sync({
                        params: {
                            V_TYPE : 'DD',
                            V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                            V_M_CHARGE_NO : Ext.getCmp('V_M_CHARGE_NO').getValue()
                        },
                        callback: function(records, operation, success) {
                            //store.reload();
                            myController.loadRKAMT();
                            for(var i=0; i<gridRecord.length; i++) {
                                gridRecord[i].commit();
                            }
                            Ext.getCmp('myGrid').getSelectionModel().deselectAll();
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
        /*
        console.log(cellIndex);
        if(cellIndex == 5){
            var popup = Ext.create("M_CHARGE_OUT_DISTR2.view.BPWindow",{myRecord : record});
            console.log(record);
            console.log(record.id);
            console.log(Ext.getCmp(record.id));
            Ext.getCmp('H_RECORD').setValue(record);
            popup.show();
        }
        */
    },

    changeChargeBtnClick: function(button, e, eOpts) {

        var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
        var V_M_CHARGE_NO = Ext.getCmp('V_M_CHARGE_NO').getValue();

        if(V_M_CHARGE_NO == null || V_M_CHARGE_NO == ''){
            Ext.Msg.alert('확인','저장된 항목만 변경 가능합니다.');
        }
        else if(gridRecord.length >= 2){
            Ext.Msg.alert('확인','항목을 하나만 체크하고 변경 버튼을 눌러주세요.');
        }
        else if (gridRecord.length == 0){
            Ext.Msg.alert('확인','변경할 항목을 체크하고 변경 버튼을 눌러주세요.');
        }
        else{
            var popup = Ext.create("M_CHARGE_OUT_DISTR2.view.changeChargeWindow");
            var changeChargeStore = Ext.getCmp('W_CHANGE_CHARGE_GRID').getStore();
            changeChargeStore.removeAll();
            popup.show();

            changeChargeStore.load({
                params:{
                    V_TYPE : 'W_D_S',
                    //V_CHARGE_NM : Ext.getCmp('W_D_CHARGE_NM').getValue(),
                }
            });
        }

    }

});
