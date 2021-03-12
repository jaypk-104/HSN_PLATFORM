/*
 * File: app/model/PurchaIngModel.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rawpurching.model.PurchaIngModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Date'
    ],

    fields: [
        {
            name: 's_req_no'
        },
        {
            name: 's_req_seq'
        },
        {
            name: 'bp_cd'
        },
        {
            name: 'bp_usr_id'
        },
        {
            name: 'so_dt'
        },
        {
            name: 'dlvy_hop_dt'
        },
        {
            name: 'dlvy_cfm_dt'
        },
        {
            name: 'cust_po_no'
        },
        {
            name: 'cmf_yn'
        },
        {
            name: 'usr_id'
        },
        {
            name: 'item_cd'
        },
        {
            name: 'so_qty'
        },
        {
            name: 'unit'
        },
        {
            name: 'so_prc'
        },
        {
            name: 'so_amt'
        },
        {
            name: 'so_loc_amt'
        },
        {
            name: 'prc_flg'
        },
        {
            name: 'cust_po_seq'
        },
        {
            name: 'cust_po_seq2'
        },
        {
            name: 'so_no'
        },
        {
            name: 'so_seq'
        },
        {
            name: 'stock_no'
        },
        {
            name: 'picking_qty'
        },
        {
            name: 'bp_usr_nm'
        },
        {
            name: 'net_usr_id'
        },
        {
            name: 'net_usr_nm'
        },
        {
            name: 'net_usr_tel'
        },
        {
            name: 'net_usr_mail'
        },
        {
            name: 'status'
        },
        {
            name: 'dtl_location'
        },
        {
            name: 'goal_location'
        },
        {
            name: 'MyField33'
        },
        {
            name: 'item_nm'
        },
        {
            name: 'bp_item_cd'
        },
        {
            name: 'bp_item_nm'
        },
        {
            name: 'crud'
        },
        {
            name: 'checks'
        },
        {
            name: 'spec'
        },
        {
            name: 'maker'
        },
        {
            type: 'date',
            name: 'dlvy_hop_dt_fr',
            dateFormat: 'Y-m-d'
        },
        {
            type: 'date',
            name: 'dlvy_hop_dt_to',
            dateFormat: 'Y-m-d'
        },
        {
            name: 'dlvy_hop_dt2'
        }
    ]
});