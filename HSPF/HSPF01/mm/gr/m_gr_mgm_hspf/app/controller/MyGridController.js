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
Ext.define('M_GR_MGM_HSPF.controller.MyGridController', {
    extend: 'Ext.app.Controller',
    stores: [
        'MyStore'
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
        "#gridSelBtn": {
            click: 'gridSelBtnClick'
        },
        "#gridDelBtn2": {
            click: 'gridDelBtn2Click'
        },
        "#gridErpBtn": {
              click: 'gridErpBtnClick'
        },
    },
    gridAddBtnClick: function(button, e, eOpts) {
        var popup = Ext.create("M_GR_MGM_HSPF.view.WinAddRow");
        popup.show();
        Ext.getCmp('rowCount').setValue(1);
    },
    gridDelBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
       var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
       var flag = 'T';
       var msg = '';
       for(var i=0; i<gridRecord.length; i++) {
    	   if(gridRecord[i].get('V_TYPE') == 'V') {
    		   if(gridRecord[i].get('DN_QTY') > 0) {
    			   msg = '출고수량이 존재합니다. 삭제할 수 없습니다.';
    			   flag = 'F';
    		   }
    		   else if (gridRecord[i].get('CFM_YN') == 'Y'){
    			   msg = '입고확정된 데이터는 삭제 불가능합니다.'
    			   flag = 'F';
    		   }
    		   else {
    			   flag = 'T';
    			   gridRecord[i].set('V_TYPE', 'D');
    		   }
    	   }
       }
       if(flag == 'T') {
          if(gridRecord.length > 0) {
                 Ext.Msg.confirm('확인','입고삭제 하시겠습니까?<br>ERP입고데이터도 동시에 삭제됩니다.<br>삭제 전 매입여부를 반드시 확인하세요.', function(button){
                if(button == 'yes') {
                      store.sync({
                       params : {
                              V_TYPE : 'SYNC',
                              V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                              V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                       },
                       callback : function(records, operation, success) {
                              store.reload();
                              Ext.toast({
                                    title: ' ',
                                    timeout: 1000,
                                    html: '입고취소완료',
                                    style: 'text-align: center',
                                    align: 't',
                                    width: 130,
                              });
                       }
                });
                }
                 });
          }
       } 
       else {
              Ext.Msg.alert('확인', msg);
       }
    },
    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
       var grid = Ext.getCmp('myGrid');
       grid.saveDocumentAs({
            type: 'xlsx',
            title: '입고조회', //엑셀내타이틀
            fileName: currentDate+'.xlsx' //엑셀파일이름
              });
    },
    gridErpBtnClick: function(button, e, eOpts) {
       var store = Ext.getStore('MyStore');
       var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
       var myMask = new Ext.LoadMask(Ext.getCmp('myGrid') , {msg:"인터페이스 중"});
       var flag = '';
       var msg = '';
       
       
              Ext.Msg.confirm('확인','미전송상태의 입고데이터를 ERP로 전송하시겠습니까?', function(button){
                     if(button == 'yes') {
                           myMask.show();
                           
                           Ext.Ajax.request({
                                  url:'sql/M_GR_MGM_HSPF.jsp',
                                  method: 'post',
                                  params: {
                                         V_TYPE : 'IF',
                                         V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                                  },
                                  callback : function(records,operations,success){
                                         
                                  },
                               success : function(response) {
                                  var jsonResult = Ext.JSON.decode(response.responseText);
                                  var tryCnt = jsonResult.tryCnt;
                                         var finCnt = jsonResult.finCnt;
                                         var resMSG = jsonResult.resMSG;
                                         var resDATE = jsonResult.resDATE;
                                         var resString = jsonResult.resString;
                                         
                                         if(resString == 'SUCCESS') {
                                                Ext.Msg.alert('확인', '총 [ ' + finCnt + ' ] 건 전송 완료');
                                         store.reload();
                                  myMask.hide();
                                         } else if (resMSG == 'ERROR'){
                                                Ext.Msg.alert('확인', '총 [ ' + tryCnt + ' ] 건 중 [ ' + finCnt + ' ] 건 전송 완료 <br>관리자 문의요망<br>' + resString + '<br>' + resDATE);
                                                myMask.hide();
                                         } else {
                                                Ext.Msg.alert('확인', '인터페이스 오류, 관리자 문의요망<br>' + resString + '<br>' + resDATE);
                                                myMask.hide();
                                         }
                               },
                                  scope: this
                           });
                           
                     }
              });
    },
});