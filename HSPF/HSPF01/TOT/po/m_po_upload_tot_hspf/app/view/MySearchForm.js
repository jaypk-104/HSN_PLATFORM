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

Ext.define('M_PO_UPLOAD.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'M_PO_UPLOAD.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date',
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
            height: 180,
            maxHeight: 180,
            minHeight: 180,
            title: 'Search terms',
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
                            id: 'string_search',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '문자조건',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: '문자조건'
                        },
                        {
                            xtype: 'datefield',
                            endDateField: 'date_search2',
                            id: 'date_search1',
                            itemId: 'date_search1',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '날짜조건',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            vtype: 'daterange',
                            format: 'Y-m-d'
                        },
                        {
                            xtype: 'datefield',
                            startDateField: 'date_search1',
                            id: 'date_search2',
                            itemId: 'date_search2',
                            margin: '0 0 0 3',
                            maxWidth: 170,
                            minWidth: 170,
                            style: '',
                            width: 170,
                            fieldLabel: '~',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 10,
                            name: 'search_field',
                            vtype: 'daterange',
                            format: 'Y-m-d'
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
                            id: 'string_search2',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '문자조건',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: '문자조건'
                        },
                        {
                            xtype: 'textfield',
                            id: 'string_search4',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '문자조건',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: '문자조건'
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
                            id: 'string_search3',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '문자조건',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            emptyText: '문자조건'
                        },
                        {
                            xtype: 'combobox',
                            flex: 1,
                            id: 'combobox',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '콤보박스',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            displayField: 'display',
                            valueField: 'value'
                        }
                    ]
                }
            ]
        }
    ]

});