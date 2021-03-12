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

Ext.define('I_INVTORY_ENERGY_TOT_HSPF.model.MyModel', {
	extend : 'Ext.data.Model',

	requires : [ 'Ext.data.field.Field' ],
	fields : [ {
		name : 'BS_KO_QTY',
		type : 'float'
	}, {
		name : 'BS_KO_AMT',
		type : 'float'
	}, {
		name : 'BS_LOC_QTY',
		type : 'float'
	}, {
		name : 'BS_LOC_AMT',
		type : 'float'
	}, {
		name : 'BS_IMP_QTY',
		type : 'float'
	}, {
		name : 'BS_IMP_AMT',
		type : 'float'
	}, {
		name : 'BS_MID_QTY',
		type : 'float'
	}, {
		name : 'BS_MID_AMT',
		type : 'float'
	}, {
		name : 'BS_TOT_QTY',
		type : 'float'
	}, {
		name : 'BS_TOT_AMT',
		type : 'float'
	}, {
		name : 'GR_KO_QTY',
		type : 'float'
	}, {
		name : 'GR_KO_AMT',
		type : 'float'
	}, {
		name : 'GR_LOC_QTY',
		type : 'float'
	}, {
		name : 'GR_LOC_AMT',
		type : 'float'
	}, {
		name : 'GR_IMP_QTY',
		type : 'float'
	}, {
		name : 'GR_IMP_AMT',
		type : 'float'
	}, {
		name : 'GR_MID_QTY',
		type : 'float'
	}, {
		name : 'GR_MID_AMT',
		type : 'float'
	}, {
		name : 'GR_TOT_QTY',
		type : 'float'
	}, {
		name : 'GR_TOT_AMT',
		type : 'float'
	}, {
		name : 'J_DN_KO_QTY',
		type : 'float'
	}, {
		name : 'J_DN_KO_AMT',
		type : 'float'
	}, {
		name : 'J_DN_LOC_QTY',
		type : 'float'
	}, {
		name : 'J_DN_LOC_AMT',
		type : 'float'
	}, {
		name : 'J_DN_EXP_QTY',
		type : 'float'
	}, {
		name : 'J_DN_EXP_AMT',
		type : 'float'
	}, {
		name : 'J_DN_MID_QTY',
		type : 'float'
	}, {
		name : 'J_DN_MID_AMT',
		type : 'float'
	}, {
		name : 'J_DN_TOT_QTY',
		type : 'float'
	}, {
		name : 'J_DN_TOT_AMT',
		type : 'float'
	}, {
		name : 'G_DN_KO_QTY',
		type : 'float'
	}, {
		name : 'G_DN_KO_AMT',
		type : 'float'
	}, {
		name : 'G_DN_LOC_QTY',
		type : 'float'
	}, {
		name : 'G_DN_LOC_AMT',
		type : 'float'
	}, {
		name : 'G_DN_EXP_QTY',
		type : 'float'
	}, {
		name : 'G_DN_EXP_AMT',
		type : 'float'
	}, {
		name : 'G_DN_MID_QTY',
		type : 'float'
	}, {
		name : 'G_DN_MID_AMT',
		type : 'float'
	}, {
		name : 'G_DN_TOT_QTY',
		type : 'float'
	}, {
		name : 'G_DN_TOT_AMT',
		type : 'float'
	}, {
		name : 'J_DN_EX_KO_QTY',
		type : 'float'
	}, {
		name : 'J_DN_EX_KO_AMT',
		type : 'float'
	}, {
		name : 'J_DN_EX_LOC_QTY',
		type : 'float'
	}, {
		name : 'J_DN_EX_LOC_AMT',
		type : 'float'
	}, {
		name : 'J_DN_EX_IMP_QTY',
		type : 'float'
	}, {
		name : 'J_DN_EX_IMP_AMT',
		type : 'float'
	}, {
		name : 'J_DN_EX_MID_QTY',
		type : 'float'
	}, {
		name : 'J_DN_EX_MID_AMT',
		type : 'float'
	}, {
		name : 'J_DN_EX_TOT_QTY',
		type : 'float'
	}, {
		name : 'J_DN_EX_TOT_AMT',
		type : 'float'
	}, {
		name : 'G_DN_EX_KO_QTY',
		type : 'float'
	}, {
		name : 'G_DN_EX_KO_AMT',
		type : 'float'
	}, {
		name : 'G_DN_EX_LOC_QTY',
		type : 'float'
	}, {
		name : 'G_DN_EX_LOC_AMT',
		type : 'float'
	}, {
		name : 'G_DN_EX_IMP_QTY',
		type : 'float'
	}, {
		name : 'G_DN_EX_IMP_AMT',
		type : 'float'
	}, {
		name : 'G_DN_EX_MID_QTY',
		type : 'float'
	}, {
		name : 'G_DN_EX_MID_AMT',
		type : 'float'
	}, {
		name : 'G_DN_EX_TOT_QTY',
		type : 'float'
	}, {
		name : 'G_DN_EX_TOT_AMT',
		type : 'float'
	}, {
		name : 'ST_KO_QTY',
		type : 'float'
	}, {
		name : 'ST_KO_AMT',
		type : 'float'
	}, {
		name : 'ST_LOC_QTY',
		type : 'float'
	}, {
		name : 'ST_LOC_AMT',
		type : 'float'
	}, {
		name : 'ST_IMP_QTY',
		type : 'float'
	}, {
		name : 'ST_IMP_AMT',
		type : 'float'
	}, {
		name : 'ST_MID_QTY',
		type : 'float'
	}, {
		name : 'ST_MID_AMT',
		type : 'float'
	}, {
		name : 'ST_TOT_QTY',
		type : 'float'
	}, {
		name : 'ST_TOT_AMT',
		type : 'float'
	}, ],
});