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

Ext.define('Z_AUTH_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'Z_AUTH_HSPF.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text'
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
            height: 150,
            maxHeight: 150,
            minHeight: 150,
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
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'V_ROLE_CD',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '롤코드',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 95,
                            name: 'search_field',
                            blankText: '',
                            emptyText: 'Double Click'
                        }
                    ]
                },
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
                            id: 'V_PGM_ID',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '프로그램아이디',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 95,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'textfield',
                            id: 'V_PGM_NM',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '프로그램명',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 95,
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                }
            ]
        }
    ]

});