/*
 * File: app/view/MySearchForm1.js
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

Ext.define('Common.view.MySearchForm1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mysearchform1',

    requires: [
        'Common.view.MySearchFormViewModel1',
        'Ext.form.FieldSet',
        'Ext.form.FieldContainer',
        'Ext.form.field.Date'
    ],

    viewModel: {
        type: 'mysearchform1'
    },
    padding: '',
    layout: 'auto',
    bodyPadding: 10,
    header: false,
    title: 'MyForm',
    defaultListenerScope: true,

    items: [
        {
            xtype: 'fieldset',
            cls: 'gridfieldset',
            height: 220,
            maxHeight: 220,
            minHeight: 220,
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
                            id: 'V_BL_SYSTEM',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'BL SYSTEM#',
                            labelStyle: 'font-size: 12px',
                            name: 'search_field',
                            blankText: '',
                            emptyText: '(Double Click)',
                            listeners: {
                                afterrender: 'onV_BL_SYSTEMAfterRender'
                            }
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'BL DOC NO ',
                            labelStyle: 'font-size: 12px',
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'LOADING DATE',
                            labelStyle: 'font-size: 11px',
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'datefield',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'ETD',
                            labelStyle: 'font-size: 12px',
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'datefield',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'ETA',
                            labelStyle: 'font-size: 12px',
                            name: 'search_field',
                            blankText: ''
                        },
                        {
                            xtype: 'textfield',
                            margin: '0 0 0 100',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'PORT',
                            labelStyle: 'font-size: 12px',
                            name: 'search_field',
                            emptyText: '(Double Click)',
                            listeners: {
                                render: 'PopupShow2'
                            }
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            maxWidth: 250,
                            minWidth: 250,
                            width: 250,
                            fieldLabel: 'INVOICE BUILDER',
                            labelStyle: 'font-size: 11px',
                            name: 'search_field',
                            blankText: ''
                        }
                    ]
                }
            ]
        }
    ],

    onV_BL_SYSTEMAfterRender: function(component, eOpts) {
         component.getEl().on('dblclick', function( event, el ) {
        var popup = Ext.create("Common.view.MyWindow");

        popup.setSize(Ext.getBody().getViewSize());
        popup.center();
        popup.show();
                                                                    });
    },

    PopupShow2: function(component, eOpts) {


            component.getEl().on('dblclick', function( event, el ) {
                alert('popup show');
                                                                            });


    }

});