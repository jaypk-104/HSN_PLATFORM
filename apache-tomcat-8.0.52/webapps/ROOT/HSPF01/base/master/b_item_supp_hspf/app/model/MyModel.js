/*
 * File: app/model/MyModel.js
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

Ext.define('B_ITEM_SUPP_HSPF.model.MyModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
        {
            name: 'COMP_ID'
        },
        {
            name: 'ITEM_CD'
        },
        {
            name: 'ITEM_NM'
        },
        {
            name: 'BP_ITEM_CD'
        },
        {
            name: 'BP_ITEM_NM'
        },
        {
            name: 'BP_CD'
        },
        {
            name: 'BP_NM'
        },
        {
            name: 'VALID_DT',
            type: 'date',
//            dateFormat: 'Y-m-d',
//            dateReadFormat: 'Y-m-d',
            dateWriteFormat: 'Y-m-d'
        },
        {
            name: 'M_PRICE'
        }
    ]
});