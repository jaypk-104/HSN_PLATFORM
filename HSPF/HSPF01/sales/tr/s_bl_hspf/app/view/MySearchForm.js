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

Ext.define('S_BL_HSPF.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'S_BL_HSPF.view.MySearchFormViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
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
                    style: '',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            endDateField: 'date_search2',
                            id: 'date_search1',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: '선적일자',
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
                        },
                        {
                            xtype: 'textfield',
                            id: 'string_search',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '판매처',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                }
            ]
        }
    ]

});