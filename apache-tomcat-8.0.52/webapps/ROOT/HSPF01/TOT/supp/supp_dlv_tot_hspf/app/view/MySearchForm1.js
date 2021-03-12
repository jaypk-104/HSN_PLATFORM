/*
 * File: app/view/MySearchForm1.js
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

Ext.define('SUPP_DLV_TOT_HSPF.view.MySearchForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform1',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    margin: '-5 0 0 0',
    padding: '',
    layout: 'auto',
    bodyPadding: 10,
    header: false,
    title: 'MyForm',

    items: [
        {
            xtype: 'fieldset',
            cls: 'gridfieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'center',
                padding: 10
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    margins: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            maxWidth: 250,
                            minWidth: 250,
                            style: 'font-size: 12px',
                            width: 250,
                            fieldLabel: 'ASN번호',
                            labelWidth: 80,
                            editable: false,
                            id: 'W_ASN_NO' 
                        },
                        {
                        	xtype: 'textfield',
                        	flex: 1,
                        	style: 'font-size: 12px',
                        	fieldLabel: 'W_PO_NO',
                        	labelWidth: 80,
                        	editable: false,
                        	id: 'W_PO_NO' ,
                        	hidden: true
                        },
                        {
                        	xtype: 'textfield',
                        	flex: 1,
                        	style: 'font-size: 12px',
                        	fieldLabel: 'W_PO_SEQ',
                        	labelWidth: 80,
                        	editable: false,
                        	id: 'W_PO_SEQ',
                        	hidden: true
                        },
                        {
                        	xtype: 'textfield',
                        	flex: 1,
                        	style: 'font-size: 12px',
                        	labelWidth: 80,
                        	editable: false,
                        	id: 'W_LOT_BC_NO',
                        	hidden: true
                        },
                        {
                        	xtype: 'textfield',
                        	flex: 1,
                        	style: 'font-size: 12px',
                        	labelWidth: 80,
                        	editable: false,
                        	id: 'W_SYS_TYPE',
                        	hidden: true
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'BacdMenu',
                            margin: '0 0 0 100',
                            maxWidth: 120,
                            width: 120,
                            text: '바코드관리',
                            menu: {
                                xtype: 'menu',
                                minHeight: 170,
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        id: 'creBcdBtn',
                                        text: '바코드생성'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        id: 'cfmBcdBtn',
                                        text: '바코드확정'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        id: 'canBacdBtn',
                                        text: '바코드확정취소요청'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        id: 'pubBcdBtn',
                                        text: '바코드발행'
                                    },
                                    {
                                        xtype: 'menuitem',
                                        id: 'pubBcd4Btn',
                                        text: '바코드발행(4*4)'
                                    },
                                    {
                                    	xtype: 'menuitem',
                                    	id: 'canBacdBtn2',
                                    	text: '확정취소(관리자)',
                                    	hidden: true
                                    },
                                    {
                                    	xtype: 'menuitem',
                                    	id: 'divBacdBtn2',
                                    	text: '바코드분할(관리자)',
                                    	hidden: true
                                    },
                                ]
                            }
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'delAsnBtn',
                            margin: '0 0 0 3',
                            maxWidth: 100,
                            width: 100,
                            text: 'ASN삭제'
                        },
                        {
                        	xtype: 'button',
                        	flex: 1,
                        	id: 'delAsnItemBtn',
                        	margin: '0 0 0 3',
                        	maxWidth: 100,
                        	width: 100,
                        	text: 'ASN품목삭제'
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'stsPrtBtn',
                            margin: '0 0 0 3',
                            maxWidth: 100,
                            width: 100,
                            text: '거래명세표'
                        },
                        {
                        	xtype: 'button',
                        	id: 'fileAddBtn',
                        	margin: '0 0 0 3',
                        	width: 70,
                            glyph: 'xf093@FontAwesome',
                        },
                        {
                        	xtype: 'container',
                        	flex : 1
                        },
                        {
                            xtype: 'button',
                            id: 'fileRegRequestBtn',
                            margin: '0 0 0 3',
                            hidden: true,
                            text: '첨부파일 등록 요청 메일 전송'
                        },
                    ]
                }
            ]
        }
    ]

});