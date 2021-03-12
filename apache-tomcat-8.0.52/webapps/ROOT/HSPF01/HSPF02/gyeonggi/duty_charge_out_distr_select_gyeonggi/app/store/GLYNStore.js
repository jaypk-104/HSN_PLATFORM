/*
 * File: app/store/GLYNStore.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
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

Ext.define('DUTY_CHARGE_OUT_DISTR_SELECT_GYEONGGI.store.GLYNStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.field.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'GLYNStore',
            data: [
                [
                    '전체',
                    ''
                ],
                [
                    'Y',
                    'Y'
                ],
                [
                    'N',
                    'N'
                ]
            ],
            fields: [
                {
                    name: 'DTL_NM'
                },
                {
                    name: 'DTL_CD'
                }
            ]
        }, cfg)]);
    }
});