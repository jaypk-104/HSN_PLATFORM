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

Ext.define('M_IMP_TOT_HSPF.model.MyModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Field'
    ],

    fields: [
    	{
            name: 'AFFILIATE',
            type: 'string'
        },
        {
            name: 'MAKER',
            type: 'string'
        },
        {
            name: 'AGENT',
            type: 'string'
        },
        {
            name: 'OFFER_NO',
            type: 'string'
        },
        {
            name: 'PO_NO',
            type: 'string'
        },
        {
            name: 'PO_USR_NM',
            type: 'string'
        },
        {
            name: 'ITEM_CD',
            type: 'string'
        },
        {
            name: 'ITEM_NM',
            type: 'string'
        },
        {
            name: 'ITEM_GROUP_NM',
            type: 'string'
        },
        {
            name: 'PAY_METH_NM',
            type: 'string'
        },
        {
            name: 'CUR',
            type: 'string'
        },
        {
            name: 'BP_NM',
            type: 'string'
        },
        {
            name: 'ID_NO',
            type: 'string'
        },
        {
            name: 'PRC',
            type: 'float'
        },
        {
            name: 'QTY',
            type: 'float'
        },
        {
            name: 'PO_QTY',
            type: 'float'
        },
        {
            name: 'DOC_AMT',
            type: 'float'
        },
        {
            name: 'BL_REMAIN_QTY',
            type: 'float'
        },
        {
            name: 'RTA',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'LC_DOC_NO',
            type: 'string'
        },
        {
            name: 'LC_OPEN_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'ETD',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'ETA',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'BL_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'BL_DOC_NO',
            type: 'string'
        },
        {
            name: 'DOC_YN',
            type: 'string'
        },
        {
            name: 'O_BL_YN',
            type: 'string'
        },
        {
            name: 'LOADING_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'FR_TIME',
            type: 'float'
        },
        {
            name: 'BL_REMAIN_QTY',
            type: 'float'
        },
        {
            name: 'INBOARD_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'FR_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'OVER_DT',
            type: 'float'
        },
        {
            name: 'SL_CD',
            type: 'string'
        },
        {
            name: 'SL_NM',
            type: 'string'
        },
        {
            name: 'FOR_BP_CD',
            type: 'string'
        },
        {
            name: 'IV_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'DUE_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'SEND_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'REMARK',
            type: 'string'
        },
        {
            name: 'MVMT_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'ID_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
            name: 'GR_REQ_DT',
            type: 'date',
            dateFormat: 'Y-m-d',
        },
        {
        	name: 'IMPORT_REPORT_ADD_TAX_DT',
        	sortType: function(str){
        		var result = 0;
        		
        		if(str == null || str == '-'){
        			result = -9999;
        		}
        		else{
        			result = str;
        		}
        		
        		return Number(result);
        		
        	}
        },
        {
        	name: 'NO_OV_DT',
        	sortType: function(str){
        		var result = 0;
        		
        		if(str == null || str == '-'){
        			result = -9999;
        		}
        		else{
        			result = str;
        		}
        		
        		return Number(result);
        		
        	}
        },
        
    ]
});