/*
 * File: app/view/MyFormPanel.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('COVID_SELF_CHECK.view.MyFormPanel', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.Container',
        'Ext.field.Checkbox',
        'Ext.Button'
    ],

    config: {
        layout: 'vbox',
        scrollable: false,
        id : 'myForm',
        items: [
            {
                xtype: 'container',
                flex: 1
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_EXOTHERMIC',
                                name : 'V_EXOTHERMIC',
                                label: '발열',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_COUGH',
                                name: 'V_COUGH',
                                label: '기침',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_THOAT',
                                name: 'V_THOAT',
                                label: '목 쓰림, 아픔',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_MORVE',
                                name: 'V_MORVE',
                                label: '콧물',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_PHLEGM',
                                name: 'V_PHLEGM',
                                label: '가래',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_BREATHING',
                                name: 'V_BREATHING',
                                label: '호흡곤란',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'checkboxfield',
                                id: 'V_CONTACT_MAN',
                                name: 'V_CONTACT_MAN',
                                label: '확진자 및 의심자 접촉',
                                labelWidth: '70%'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'container',
                        layout: 'fit',
                        items: [
                            {
                                xtype: 'button',
                                id: 'saveBtn',
                                text: '저장'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});