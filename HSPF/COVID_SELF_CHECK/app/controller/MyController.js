/*
 * File: app/controller/MyController.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('COVID_SELF_CHECK.controller.MyController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#saveBtn": {
                tap: 'click'
            }
        }
    },

    click: function(button, e, eOpts) {
    	
    	var V_EXOTHERMIC = Ext.getCmp('V_EXOTHERMIC').getValue();
    	var V_COUGH = Ext.getCmp('V_COUGH').getValue();
    	var V_THOAT = Ext.getCmp('V_THOAT').getValue();
    	var V_MORVE = Ext.getCmp('V_MORVE').getValue();
    	var V_PHLEGM = Ext.getCmp('V_PHLEGM').getValue();
    	var V_BREATHING = Ext.getCmp('V_BREATHING').getValue();
    	var V_CONTACT_MAN = Ext.getCmp('V_CONTACT_MAN').getValue();
    	
    	var form = Ext.ComponentQuery.query('formpanel')[0];
    	var values = form.getValues();
    	
    	Ext.Msg.confirm('확인', '저장 하시겠습니까?', function(btn) {
    		if (btn == 'yes') {
    			Ext.Ajax.request({
    				url : 'sql/covid.jsp',
    				method : 'post',
    				params : {
//    					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//    					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
    					V_EXOTHERMIC : values.V_EXOTHERMIC,
    					V_COUGH : values.V_COUGH,
    					V_THOAT : values.V_THOAT,
    					V_MORVE : values.V_MORVE,
    					V_PHLEGM : values.V_PHLEGM,
    					V_BREATHING : values.V_BREATHING,
    					V_CONTACT_MAN : values.V_CONTACT_MAN,
    					V_USR_ID : document.getElementById("V_USR_ID").value,
    					V_DATE : document.getElementById("V_DATE").value,
    				},
    				success : function(response) {
    					Ext.Msg.alert('확인', '저장완료', function(btn, text){ 
    			    		window.close();
    				    	self.close();
    				    	window.opener = window.location.href;
    				    	self.close();
    				    	window.open('about:blank','_self').close();
    			    	});
    				},
    				scope : this
    			});
    		}
    	});
    	
    },
    
    launch: function() {
	    var V_USR_ID = document.getElementById("V_USR_ID").value;
	    var V_DATE = document.getElementById("V_DATE").value;
	    Ext.Msg.defaultAllowedConfig.showAnimation = false;
	    
	    if(V_USR_ID == null || V_USR_ID == '' || V_USR_ID == undefined){
	    	Ext.Msg.alert('확인', '잘못된 접근입니다.', function(btn, text){ 
	    		window.close();
		    	self.close();
		    	window.opener = window.location.href;
		    	self.close();
		    	window.open('about:blank','_self').close();
	    	});
	    	
	    }
	    else{
			Ext.Ajax.request({
				url : 'sql/covid_check.jsp',
				method : 'post',
				params : {
//	    					V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
//	    					V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
					V_USR_ID : document.getElementById("V_USR_ID").value,
					V_DATE : document.getElementById("V_DATE").value,
				},
				success : function(response) {
					var jResult = Ext.JSON.decode(response.responseText);
					if(jResult.success == true){
						if(jResult.resultList[0].V_RESULT == '0'){
							Ext.Msg.alert('확인', jResult.resultList[0].V_RESULT_MSG, function(btn, text){ 
					    		window.close();
						    	self.close();
						    	window.opener = window.location.href;
						    	self.close();
						    	window.open('about:blank','_self').close();
					    	});
						}
						else{
							
						}
					}
					else{
						Ext.Msg.alert('확인', '확인불가. 다시시도해주세요', function(btn, text){ 
				    		window.close();
					    	self.close();
					    	window.opener = window.location.href;
					    	self.close();
					    	window.open('about:blank','_self').close();
				    	});
					}
				},
				scope : this
			});
	    }
	    
    }

});