/*
 * File: app/view/MySearchForm.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
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

Ext.define('Packhsna.view.MySearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform',

    requires: [
        'Packhsna.view.MySearchFormViewModel',
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
    collapsible: false,
    header: false,
    title: 'MyForm',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'fieldset',
            cls: 'gridfieldset',
            height: 100,
            maxHeight: 100,
            minHeight: 100,
            collapsible: true,
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
                            hidden: true,
                            id: 'BP_CD',
                            maxWidth: 170,
                            minWidth: 170,
                            width: 170,
                            fieldLabel: '판매처',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            value: '00296',
                            blankText: ''
                        },
                        {
                            xtype: 'textfield',
                            hidden: true,
                            id: 'BP_NM',
                            margin: '0 0 0 10',
                            maxWidth: 200,
                            minWidth: 200,
                            width: 200,
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: '',
                            bind: {
                                value: 'HSNA'
                            }
                        },
                        {
                            xtype: 'datefield',
                            id: 'u_lading_from_dt',
                            maxWidth: 250,
                            minWidth: 250,
                            style: '',
                            width: 250,
                            fieldLabel: 'I/V DATE',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                            format: 'Y-m-d',
                            listeners: {
                                render: 'onFromRender'
                            }
                        },
                        {
                            xtype: 'datefield',
                            id: 'u_lading_to_dt',
                            margin: '0 0 0 3',
                            maxWidth: 170,
                            minWidth: 170,
                            style: '',
                            width: 170,
                            fieldLabel: '~',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 10,
                            name: 'search_field',
                            altFormats: 'm/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j|Ymd',
                            format: 'Y-m-d',
                            listeners: {
                                render: 'onToRender'
                            }
                        },
                        {
                            xtype: 'textfield',
                            id: 'u_cont_no',
                            margin: '0 0 0 50',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: '컨테이너번호',
                            labelStyle: 'font-size: 12px',
                            labelWidth: 80,
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                }
            ]
        }
    ],

    onFromRender: function(component, eOpts) {
        var nows = new Date();
        		nows.setDate(nows.getDate() - 30);
        		component.setValue(nows);
    },

    onToRender: function(component, eOpts) {
        		var nows = new Date();
        		nows.setDate(nows.getDate() + 30);
        		component.setValue(nows);
    }

});