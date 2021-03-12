/*
 * File: app/controller/FileController.js
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

Ext.define('M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.controller.FileController', {
    extend: 'Ext.app.Controller',

    control: {
        "#fileGridAddBtn": {
            click: 'fileGridAddBtnClick'
        },
        "#fileGrid": {
            cellclick: 'onGridpanelCellClick'
        },
        "#fileGridDelBtn": {
            click: 'fileGridDelBtnClick'
        },
        "#fileTestBtn": {
            click: 'fileTestBtnClick'
        }
    },

    fileGridAddBtnClick: function(button, e, eOpts) {
        var window = Ext.create('M_DUTY_CHARGE_OUT_DISTR.view.FileWindow');
        window.show();
    },

    onGridpanelCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        if(cellIndex == 2){
            var V_FILE_NM = record.data['FILE_NM'];
            var V_FILE_IN_SYSTEM_NM = record.data['FILE_IN_SYSTEM_NM'];
            V_FILE_NM = encodeURI(V_FILE_NM);
            V_FILE_IN_SYSTEM_NM = encodeURI(V_FILE_IN_SYSTEM_NM);

            if(V_FILE_NM != null && V_FILE_IN_SYSTEM_NM != '') {
                var myWin=new Ext.Window(
                    {
                        title : '파일다운로드',
                        //html : '<iframe name="xxx" border =0 src="/mro/admin/mroadinquirrec/sql/fileDown.do?V_FILE_NM='+file_nm+'&V_FILE_NM_PC='+file_nm_pc+'" width="1%" height="1%"></iframe>',
                        html : '<iframe name="xxx" border =0 src="/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp?V_TYPE=D&V_FILE_NM='+V_FILE_NM+'&V_FILE_IN_SYSTEM_NM='+V_FILE_IN_SYSTEM_NM+'" width="1%" height="1%"></iframe>',
                        width :500,
                        height:500
                    });
                myWin.show();
                myWin.hide();

            }
        }
    },

    fileGridDelBtnClick: function(button, e, eOpts) {
        var fileGrid = Ext.getCmp('fileGrid');
        var fileStore = fileGrid.getStore();
        var fileGridRecord = fileGrid.getSelectionModel().getSelection();

        if(fileGridRecord.length >= 1){
            Ext.Msg.confirm('확인', '삭제 하시겠습니까?', function(btn) {
                if (btn == 'yes') {
                    for(var i = 0 ; i < fileGridRecord.length ; i ++){
                        if(fileGridRecord[i].data['V_TYPE'] == 'V'){
                            fileGridRecord[i].set('V_TYPE','D');
                            if(fileGridRecord[i].crudState == 'C'){ // 아직 디비에 추가안되고 그리드에만 있으니 그리드에서만 삭제.
                                fileStore.remove(fileGridRecord[i]);
                            }
                        }
                        fileStore.sync({
                            params:{
                                V_TYPE : 'SYNC',
                                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                V_BP_CD : parent.Ext.getCmp('GBP_CD').getValue(),

                                V_M_CHARGE_NO: Ext.getCmp('V_M_CHARGE_NO').getValue(),
                            },
                            callback: function(records, operation, success) {
                                fileStore.reload();
                            }
                        });
                    }
                }
            });
        }
        else{
            Ext.Msg.alert('확인','삭제할 항목을 선택해주세요.');
        }
    },

    fileTestBtnClick: function(button, e, eOpts) {
        var fileStore = Ext.getCmp('fileGrid').getStore();

        var rec = Ext.create('M_DUTY_CHARGE_OUT_DISTR.model.MyModel', {
            V_TYPE : 'I',
            FILE_NM: 'test1.txt',
            FILE_IN_SYSTEM_NM: 'test1.txt',
        });
        fileStore.insert(0, rec);

        var rec = Ext.create('M_DUTY_CHARGE_OUT_DISTR.model.MyModel', {
            V_TYPE : 'I',
            FILE_NM: 'test2.txt',
            FILE_IN_SYSTEM_NM: 'test2.txt',
        });
        fileStore.insert(1, rec);

    }

});
