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

Ext.define('M_B_CON_SELECT_DISTB.controller.MyGridController', {
    extend: 'Ext.app.Controller',

    control: {
        "#BLLoadBtn": {
            click: 'BLLoadBtnClick'
        },
        "#gridAddBtn": {
        	click: 'gridAddBtnClick'
        },
        "#gridDelBtn": {
            click: 'gridDelBtnClick'
        },
        "#gridSaveBtn": {
        	click: 'gridSaveBtnClick'
        },
        "#xlsxDown": {
            click: 'xlsxDownClick'
        },
		'#myGrid' : { /*파일다운더블클릭*/
			celldblclick : 'fileGridDblClick',
		},
     
    },

    BLLoadBtnClick: function(button, e, eOpts) {
    	var store = Ext.getStore('MyStore');
    	var V_LOAD_BL_DOC_NO = Ext.getCmp('V_LOAD_BL_DOC_NO').getValue();
    	if(V_LOAD_BL_DOC_NO == '' || V_LOAD_BL_DOC_NO == null || V_LOAD_BL_DOC_NO == undefined){
    		Ext.Msg.alert('확인', '불러올 BL번호를 입력하세요.');
    	}
    	else{
    		Ext.MessageBox.confirm('확인', '불러오기 하시겠습니까?', function(btn) {
        		if (btn == 'yes') {
    		    	Ext.Ajax.request({
    		    		url : 'sql/m_b_con_distr.jsp',
    		    		method : 'post',
    		    		params : {
    		    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    		    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    		    			V_LOAD_BL_DOC_NO : Ext.getCmp('V_LOAD_BL_DOC_NO').getValue(),
    		    			V_TYPE : 'LOAD',
    		    		},
    		    		success: function(){
        	    			Ext.getCmp('V_BL_DOC_NO').setValue(V_LOAD_BL_DOC_NO);
        	    			store.load({
        	    	    		params: {
        	    	    			V_TYPE: 'HS',
        	    	    			V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
        	    	    			V_USR_ID: parent.Ext.getCmp('GUSER_ID').getValue(),
        	    	    			V_DT_FR: Ext.getCmp('V_DT_FR').getValue(),
        	    	    			V_DT_TO: Ext.getCmp('V_DT_TO').getValue(),
        	    	    			V_M_BP_NM: Ext.getCmp('V_M_BP_NM').getValue(),
        	    	    			V_BL_DOC_NO: Ext.getCmp('V_BL_DOC_NO').getValue(),
        	    	    		},
        	    	    		callback: function(records,operations,success){
        	    	    		}
        	    	    	});
        	    		}	
    		    	});
        		}
        	});
    	}
    },
    
    gridAddBtnClick: function(button, e, eOpts) {
        var store = Ext.getStore('MyStore');
    	var gridRecord = Ext.getCmp('myGrid').getSelectionModel().getSelection();
    	
    	var store1 = Ext.getStore('MyStore1');
    	var count = store1.getCount();

    	if(gridRecord.length > 1) {
    		Ext.Msg.alert('확인', '상단에서 행 하나만 선택하세요.');
    	}
    	else if (gridRecord.length == 1){
    		var records = store1.getRange();
    		var D_BOX_QTY = 0;
    		var D_KG_QTY = 0;
    		for(var i = 0 ; i < records.length ; i ++){
    			D_BOX_QTY += records[i].data['BOX_QTY'];
    			D_KG_QTY += records[i].data['KG_QTY'];
    		}
    		
    		
    		var rec = Ext.create('M_B_CON_SELECT_DISTB.model.MyModel', {
    			BL_NO : gridRecord[0].data['BL_NO'],
    			BL_SEQ : gridRecord[0].data['BL_SEQ'],
    			BL_DOC_NO : gridRecord[0].data['BL_DOC_NO'],
    			PO_TYPE : gridRecord[0].data['PO_TYPE'],
    			ITEM_CD : gridRecord[0].data['ITEM_CD'],
    			ITEM_NM : gridRecord[0].data['ITEM_NM'],
    			BOX_QTY : gridRecord[0].data['BOX_QTY'] - D_BOX_QTY,
    			KG_QTY : gridRecord[0].data['KG_QTY'] - D_KG_QTY,
    			BOX_WGT_UNIT : gridRecord[0].data['BOX_WGT_UNIT'],
    			S_CON_PRC : gridRecord[0].data['MIN_S_PRC'],
    			S_CON_AMT : Math.round((gridRecord[0].data['KG_QTY'] - D_KG_QTY ) * gridRecord[0].data['MIN_S_PRC']  ),
    			BF_IN_AMT : Math.round((gridRecord[0].data['KG_QTY'] - D_KG_QTY ) * gridRecord[0].data['MIN_S_PRC']  / 10),
    			BF_IN_AMT_YN : false,
    		});
    		store1.insert(count, rec);
    	}
    	else{
    		Ext.Msg.alert('확인', '상단에서 행 하나를 선택하세요.');
    	}
    },

    gridDelBtnClick: function(button, e, eOpts) {
        var store1 = Ext.getStore('MyStore1');
    	var gridRecord = Ext.getCmp('myGrid1').getSelectionModel().getSelection();

    	if(gridRecord.length > 0) {
    		Ext.Msg.confirm('확인','삭제하시겠습니까?', function(button){
    			if(button == 'yes') {
    				for(var i=0; i<gridRecord.length; i++) {
    		    		if(gridRecord[i].data['V_TYPE']=='V') {
    		    			gridRecord[i].data['V_TYPE'] = 'D';
    		    		}
    		    	}
    				store1.sync({
    					params: {
    						V_TYPE : 'SYNC',
    						V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    		    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					},
    		    		callback: function(records, operation, success) {
    		    			store1.reload();
    					}
    		    	});
    			}
    		});
    	}
    },
    
    gridSaveBtnClick: function(button, e, eOpts) {
    	var store1 = Ext.getStore('MyStore1');
    	var flag = 'T';
    	var msg = '';
    	
    	store1.each(function(rec, index) {
    		if (rec.get('SALE_DEADLINE') == '' || rec.get('SALE_DEADLINE') == null || rec.get('SALE_DEADLINE') == undefined || rec.get('SALE_DEADLINE') == 0  ){
    			flag = 'F';
    			msg = '판매기한을 입력해주세요';
    			return;
    		}
    		if (rec.get('S_BP_CD') == '' || rec.get('S_BP_CD') == null || rec.get('S_BP_CD') == undefined  ){
    			flag = 'F';
    			msg = '계약판매처를 입력해주세요';
    			return;
    		}
			rec.set('V_TYPE', 'I');
		});
    	
    	
    	if(flag == 'T'){
    		Ext.MessageBox.confirm('확인', '저장 하시겠습니까?', function(btn) {
        		if (btn == 'yes') {
        			store1.sync({
        				params:{
        					V_TYPE : 'SYNC',
    						V_COMP_ID: parent.Ext.getCmp('GCOMP_ID').getValue(),
    		    			V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
        				},
        				callback: function(records,operations,success){
        	    			store1.reload();
        	    		}
        			});
        		}
        	});
    	}
    	else{
    		Ext.Msg.alert('확인', msg);
    	}
		
    },

    xlsxDownClick: function(button, e, eOpts) {
        var currentDate = Ext.util.Format.date(new Date(), 'Y-m-d His');
            	var grid = Ext.getCmp('myGrid');
            	grid.saveDocumentAs({
                    type: 'xlsx',
                    title: 'BAND계약조회', //엑셀내타이틀
                    fileName: currentDate+'.xlsx' //엑셀파일이름
        		});
    },
	
	fileGridDblClick:  function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var cellDataIndex = tableview.eventPosition.column.dataIndex;
		
		var gridObj = Ext.getCmp('myGrid');
		var gridRecord = gridObj.getSelectionModel().getSelection();
		var V_FILE_NM = gridRecord[0].data['FILE_NM'];
		var V_FILE_IN_SYSTEM_NM = gridRecord[0].data['FILE_NM_PC'];
		
		if(cellDataIndex == 'FILE_YN' && gridRecord[0].data['FILE_YN'] == 'Y'){
			V_FILE_NM = encodeURI(V_FILE_NM);
			V_FILE_IN_SYSTEM_NM = encodeURI(V_FILE_IN_SYSTEM_NM);
			var myWin=new Ext.Window(
					{
						title : '파일다운로드',
						html : '<iframe name="xxx" border =0 src="sql/FILE.jsp?V_TYPE=D&V_FILE_NM='+V_FILE_NM+'&V_FILE_IN_SYSTEM_NM='+V_FILE_IN_SYSTEM_NM+'" width="1%" height="1%"></iframe>',
						width :500,
						height:500
					});
			myWin.show();
			myWin.hide();
		}
	},
    
});
