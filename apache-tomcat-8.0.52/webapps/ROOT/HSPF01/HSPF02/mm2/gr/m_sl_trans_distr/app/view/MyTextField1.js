/*
 * File: app/view/MyTextField1.js
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

Ext.define('M_SL_TRANS_DISTR.view.MyTextField1', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.mytextfield1',

    requires: [
        'M_SL_TRANS_DISTR.view.MyTextField1ViewModel'
    ],

    viewModel: {
        type: 'mytextfield1'
    },
    margin: '0 0 0 30',
    maxWidth: 230,
    minWidth: 230,
    width: 230,
    fieldLabel: '품의번호',
    labelWidth: 80,
    name: 'search_field'

});