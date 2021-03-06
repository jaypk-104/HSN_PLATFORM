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

Ext.define('S_CONT_HSPF.view.MySearchForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform1',

    requires: [
        'S_CONT_HSPF.view.MySearchForm1ViewModel',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Text',
        'Ext.button.Button'
    ],

    viewModel: {
        type: 'mysearchform1'
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
            margin: '0 0 0 -5',
            maxHeight: 180,
            minHeight: 180,
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
                            xtype: 'textfield',
                            id: 'V_DN_NO',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '출고번호',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'button',
                            flex: 1,
                            id: 'dnRefBtn',
                            margin: '0 0 0 5',
                            maxWidth: 100,
                            width: 100,
                            text: '출고참조'
                        }
                    ]
                }
            ]
        }
    ]

});