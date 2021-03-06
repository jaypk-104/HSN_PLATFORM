/*
 * File: app/view/MySearchForm.js
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

Ext.define('Z_USR_INFO_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'Z_USR_INFO_HSPF.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox'
    ],

    viewModel: {
        type: 'mysearchform'
    },
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
            title: 'Search',
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
                            id: 'V_USER_ID',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '사용자아이디',
                            labelWidth: 100,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                        	xtype: 'textfield',
                        	id: 'V_USER_NM',
                        	maxWidth: 250,
                        	minWidth: 250,
                        	width: 250,
                        	margin: '0 0 0 60',
                        	fieldLabel: '사용자명',
                        	labelWidth: 100,
                        	name: 'search_field',
                        	blankText: ''
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            id: 'V_ROLE_CD',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '권한',
                            
                            labelWidth: 80,
                            name: 'search_field',
                            displayField: 'DTL_NM',
                            valueField: 'DTL_CD',
                            editable: false,
                            value: 'T',
                            store: Ext.create('Ext.data.Store',{
                          		autoLoad: true,
                          		storeId: 'store1',
                          		proxy: {
                                      type: 'ajax',
                                      extraParams: {
                                       	V_MAST_CD: 'Z_ROLE_HSPF'
                                      },	
                                      api: {
                                          read: '/HSPF01/common/sql/Combobox.jsp'
                                      },
                                      reader: {
                                          type: 'json',
                                          rootProperty: 'resultList'
                                      }
                                  }
                          	}),
                        }
                    ]
                }
            ]
        }
    ]

});