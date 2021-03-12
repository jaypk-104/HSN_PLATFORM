/*
 * File: app/controller/LoginCtrl.js
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

Ext.define('login.controller.LoginCtrl', {
	extend : 'Ext.app.Controller',

	stores : [ 'LoginStore' ],

	control : {
		"#txtId" : {
			specialkey : 'onTextfieldSpecialkey'
		},
		"#txtPwd" : {
			specialkey : 'ontxtPwdSpecialkey'
		},
		"#idSaveChk" : {
			change : 'onCheckboxfieldChange'
		},
		"#BtnLogin" : {
			click : 'onButtonClick'
		}
	},

	/* 로그인화면 */
	
	/* 아이디tf 엔터 */
	onTextfieldSpecialkey : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.fnLogin();
		}
	},

	/* 패스워드tf 엔터 */
	ontxtPwdSpecialkey : function(field, e, eOpts) {
		if (e.getKey() == e.ENTER) {
			this.fnLogin();
		}
	},

	/* 정보저장 */
	onCheckboxfieldChange : function(field, newValue, oldValue, eOpts) {
		if (Ext.getCmp('idSaveChk').getValue() === true) {
			var myCookie = Ext.util.Cookies.set('id_name', Ext.getCmp('txtId').getValue());
//			var myCookie = Ext.util.Cookies.set('comp_id', Ext.getCmp('cmbCompId').getValue());
		} else {
			var myCookie = Ext.util.Cookies.set('id_name', '');
//			var myCookie = Ext.util.Cookies.set('comp_id', '');
		}
	},

	/* [로그인] 버튼*/
	onButtonClick : function(button, e, eOpts) {
		this.fnLogin();
	},

	/* 로그인 action */
	fnLogin : function() {
		var store = this.getLoginStoreStore();
		var redirect = '../frame/frame.jsp?user_id='+ Ext.getCmp('txtId').getValue() + '&comp_id=HSN';
		
		
		//RSA 암호화 부분 추가 20200529김장운
        var rsaPublicKeyModulus = document.getElementById("rsaPublicKeyModulus").value;
        var rsaPublicKeyExponent = document.getElementById("rsaPublicKeyExponent").value;
        var rsa = new RSAKey();
        rsa.setPublic(rsaPublicKeyModulus, rsaPublicKeyExponent);

        // 사용자 비밀번호를 RSA로 암호화한다.
        var securedPassword = rsa.encrypt(Ext.getCmp('txtPwd').getValue());
		

		Ext.getBody().mask('Please wait', 'loading', false);

		store.load({
			params : {
//				comp_id : Ext.getCmp('cmbCompId').getValue(),
				comp_id : 'HSN',
				user_id : Ext.getCmp('txtId').getValue(),
				password : securedPassword
			},
			callback : function(records, operations, success) {
				var acct_info2 = records[0].data;
				if (acct_info2.cnt === '1')
				{
					window.location = redirect;
					window.load
					
				} else {
					Ext.Msg.alert('Warning', 'Invalid ID or PASSWORD!');
					Ext.getCmp('txtId').focus(false, 200);
				}
				Ext.getBody().unmask();
			}
		});
	},

	onLaunch : function(application) {
		var id_name = Ext.util.Cookies.get('id_name');
		if (id_name === '' || id_name === null || id_name === 'null') {
			Ext.getCmp('idSaveChk').setValue(false);
			Ext.getCmp('txtId').setValue('');
//			Ext.getCmp('cmbCompId').setValue('HSN');
		} else {
			Ext.getCmp('idSaveChk').setValue(true);
			Ext.getCmp('txtId').setValue(id_name);
//			Ext.getCmp('cmbCompId').setValue(comp_id);
		}
		Ext.getCmp('txtId').focus(false, 200);

	}

});