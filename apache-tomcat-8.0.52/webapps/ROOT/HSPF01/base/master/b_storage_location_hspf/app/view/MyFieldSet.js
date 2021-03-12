/*
 * File: app/view/MyFieldSet.js
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

Ext.define('Z_STROAGE_LOCATION_HSPF.view.MyFieldSet', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.myfieldset',

    requires: [
        'Z_STROAGE_LOCATION_HSPF.view.MyFieldSetViewModel',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text'
    ],

    viewModel: {
        type: 'myfieldset'
    },
    cls: 'gridfieldset',
    height: 100,
    margin: '-5 0 0 0',
    maxHeight: 100,
    minHeight: 100,
    layout: 'auto',
    title: 'Search',

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
                    id: 'string_search6',
                    maxWidth: 250,
                    minWidth: 250,
                    width: 250,
                    fieldLabel: 'LOCATION코드',
                    labelStyle: 'font-size: 12px',
                    labelWidth: 95,
                    name: 'search_field',
                    blankText: ''
                },
                {
                    xtype: 'textfield',
                    id: 'string_search7',
                    margin: '0 0 0 100',
                    maxWidth: 250,
                    minWidth: 250,
                    width: 250,
                    fieldLabel: 'LOCATION 명',
                    labelStyle: 'font-size: 12px',
                    labelWidth: 95,
                    name: 'search_field',
                    blankText: ''
                }
            ]
        }
    ]

});